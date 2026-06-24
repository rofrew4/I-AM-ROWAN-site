import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "public", "images");

/** Images referenced in the app — source files in public/images */
const SOURCES = [
  "profile.jpg",
  "home-1.png",
  "home-2.png",
  "home-3.png",
  "home-4.png",
  "home-presenting.png",
  "housefly.png",
  "swim-instructor.png",
  "water-polo-team.png",
  "boat-on-water.png",
  "surfing-board.png",
  "spearfishing-beach.png",
  "spearfishing-ocean.png",
];

/** Source PNGs processed with heavy blur before export (e.g. sensitive UI screenshots). */
const BLURRED_SOURCES = [
  { source: "crm-source.png", output: "crm.webp", blur: 1.5 },
];

/** Source PNGs center-cropped to 3:2 before export (oddz editorial rows). */
const CROPPED_SOURCES = [
  {
    source: "chesterbrook-source.png",
    output: "chesterbrook.webp",
    aspect: [3, 2],
    topBias: 0.5,
  },
  {
    source: "zoneiq-source.png",
    output: "zoneiq.webp",
    aspect: [3, 2],
    topBias: 0.4,
  },
  {
    source: "exp-rally.png",
    output: "exp-rally.webp",
    aspect: [3, 2],
    topBias: 0.18,
  },
  {
    source: "exp-rally.png",
    output: "exp-rally-vertical.webp",
    aspect: [3, 4],
    topBias: 0.18,
  },
  {
    source: "nhs-drive.png",
    output: "nhs-drive.webp",
    aspect: [3, 2],
    topBias: 0,
  },
  {
    source: "boat-engine.png",
    output: "boat-engine.webp",
    aspect: [3, 2],
    topBias: 0,
  },
  {
    source: "water-polo-action.png",
    output: "water-polo-action.webp",
    aspect: [3, 2],
    topBias: 0.58,
  },
  {
    source: "oddz-oyster-source.png",
    output: "oddz-oyster.webp",
    aspect: [3, 2],
    topBias: 0.5,
  },
  {
    source: "oddz-track-source.png",
    output: "oddz-track.webp",
    aspect: [3, 2],
    topBias: 0.55,
  },
];

const MAX_WIDTH = 1200;

async function optimizeBlurredImage({ source, output, blur }) {
  const inputPath = path.join(imagesDir, source);
  if (!fs.existsSync(inputPath)) {
    console.warn(`skip missing blurred source: ${source}`);
    return null;
  }

  const outputPath = path.join(imagesDir, output);
  const metadata = await sharp(inputPath).metadata();
  const width = metadata.width ?? 1;
  const resizeWidth = width > MAX_WIDTH ? MAX_WIDTH : width;

  await sharp(inputPath)
    .resize({ width: resizeWidth, withoutEnlargement: true })
    .blur(blur)
    .webp({ quality: 78 })
    .toFile(outputPath);

  return registerWebpMeta(output);
}

async function optimizeCroppedImage({
  source,
  output,
  aspect,
  topBias = 0.5,
}) {
  const inputPath = path.join(imagesDir, source);
  if (!fs.existsSync(inputPath)) {
    console.warn(`skip missing cropped source: ${source}`);
    return null;
  }

  const outputPath = path.join(imagesDir, output);
  const metadata = await sharp(inputPath).metadata();
  const width = metadata.width ?? 1;
  const height = metadata.height ?? 1;
  const targetRatio = aspect[0] / aspect[1];
  const currentRatio = width / height;

  let extract;
  if (currentRatio > targetRatio) {
    const cropWidth = Math.round(height * targetRatio);
    extract = {
      left: Math.round((width - cropWidth) / 2),
      top: 0,
      width: cropWidth,
      height,
    };
  } else {
    const cropHeight = Math.round(width / targetRatio);
    const excess = height - cropHeight;
    extract = {
      left: 0,
      top: Math.round(excess * topBias),
      width,
      height: cropHeight,
    };
  }

  await sharp(inputPath)
    .extract(extract)
    .resize({ width: Math.min(width, MAX_WIDTH), withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);

  console.log(`${source} → ${output} (3:2 crop)`);
  return registerWebpMeta(output);
}

async function registerWebpMeta(outputName) {
  const outputPath = path.join(imagesDir, outputName);
  if (!fs.existsSync(outputPath)) {
    console.warn(`skip missing webp: ${outputName}`);
    return null;
  }

  const outputMeta = await sharp(outputPath).metadata();
  const outWidth = outputMeta.width ?? 1;
  const outHeight = outputMeta.height ?? 1;

  const blurBuffer = await sharp(outputPath)
    .resize(10, 10, { fit: "cover" })
    .webp({ quality: 40 })
    .toBuffer();

  const blurDataURL = `data:image/webp;base64,${blurBuffer.toString("base64")}`;

  console.log(`${outputName} (${outWidth}x${outHeight})`);

  return {
    src: `/images/${outputName}`,
    width: outWidth,
    height: outHeight,
    blurDataURL,
  };
}

async function optimizeImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  if (!fs.existsSync(inputPath)) {
    console.warn(`skip missing: ${filename}`);
    return null;
  }

  const base = filename.replace(/\.(png|jpe?g)$/i, "");
  const outputName = `${base}.webp`;
  const outputPath = path.join(imagesDir, outputName);

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width ?? 1;
  const height = metadata.height ?? 1;

  const resizeWidth = width > MAX_WIDTH ? MAX_WIDTH : width;

  await sharp(inputPath)
    .resize({ width: resizeWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);

  const blurBuffer = await sharp(inputPath)
    .resize(10, 10, { fit: "cover" })
    .webp({ quality: 40 })
    .toBuffer();

  const blurDataURL = `data:image/webp;base64,${blurBuffer.toString("base64")}`;

  const outputMeta = await sharp(outputPath).metadata();
  const outWidth = outputMeta.width ?? resizeWidth;
  const outHeight = outputMeta.height ?? Math.round((height / width) * resizeWidth);

  const inputStat = fs.statSync(inputPath);
  const outputStat = fs.statSync(outputPath);
  const saved = ((1 - outputStat.size / inputStat.size) * 100).toFixed(0);

  console.log(
    `${filename} → ${outputName} (${outWidth}x${outHeight}, -${saved}%)`
  );

  return {
    key: base,
    src: `/images/${outputName}`,
    width: outWidth,
    height: outHeight,
    blurDataURL,
  };
}

async function main() {
  const results = [];

  for (const item of BLURRED_SOURCES) {
    const result = await optimizeBlurredImage(item);
    if (result) results.push(result);
  }

  for (const item of CROPPED_SOURCES) {
    const result = await optimizeCroppedImage(item);
    if (result) results.push(result);
  }

  for (const filename of SOURCES) {
    if (filename.endsWith(".webp")) {
      const result = await registerWebpMeta(filename);
      if (result) results.push(result);
      continue;
    }
    const result = await optimizeImage(filename);
    if (result) results.push(result);
  }

  const entries = results
    .map(
      (img) =>
        `  "${img.src}": {\n    src: "${img.src}",\n    width: ${img.width},\n    height: ${img.height},\n    blurDataURL:\n      "${img.blurDataURL}",\n  }`
    )
    .join(",\n");

  const legacyFromSources = SOURCES.filter((f) => !f.endsWith(".webp")).map(
    (filename) => {
      const base = filename.replace(/\.(png|jpe?g)$/i, "");
      return `  "/images/${filename}": "/images/${base}.webp"`;
    }
  );
  const legacyFromBlurred = BLURRED_SOURCES.map(
    ({ source, output }) => `  "/images/${source}": "/images/${output}"`
  );
  const legacyFromCropped = [];
  const croppedSourceSeen = new Set();
  for (const { source, output } of CROPPED_SOURCES) {
    if (croppedSourceSeen.has(source)) continue;
    croppedSourceSeen.add(source);
    legacyFromCropped.push(`  "/images/${source}": "/images/${output}"`);
  }
  const legacyMap = [
    ...legacyFromBlurred,
    ...legacyFromCropped,
    ...legacyFromSources,
  ].join(",\n");

  const output = `// Generated by scripts/optimize-images.mjs — do not edit by hand.
// Re-run: npm run optimize-images

export type ImageMeta = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

const LEGACY_SRC: Record<string, string> = {
${legacyMap},
};

export const imageMeta: Record<string, ImageMeta> = {
${entries},
};

export function getImageMeta(src: string): ImageMeta {
  const resolved = LEGACY_SRC[src] ?? src;
  const meta = imageMeta[resolved];
  if (!meta) {
    throw new Error(\`Unknown image: \${src}\`);
  }
  return meta;
}
`;

  fs.writeFileSync(path.join(root, "lib", "images.ts"), output);
  console.log(`\nWrote lib/images.ts (${results.length} images)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
