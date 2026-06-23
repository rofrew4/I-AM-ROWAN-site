#!/usr/bin/env python3
"""Generate placeholder background images for I AM ROWAN."""

import os
import struct
import zlib

OUTPUT_DIR = "public/images"
BACKGROUNDS = {
    "exp-chesterbrook.jpg": (45, 55, 70),
    "exp-zoneiq.jpg": (60, 50, 80),
    "exp-piraeus.jpg": (50, 70, 90),
    "exp-ubs.jpg": (70, 60, 50),
    "exp-spritz.jpg": (80, 55, 45),
    "exp-water-polo.jpg": (40, 80, 100),
    "exp-housefly.jpg": (55, 65, 45),
    "exp-northeastern.jpg": (90, 45, 45),
    "press-ngn.jpg": (30, 50, 90),
    "press-cssh.jpg": (90, 40, 40),
    "comm-exp.jpg": (50, 90, 70),
    "comm-swim.jpg": (40, 100, 120),
    "comm-nhs.jpg": (70, 50, 90),
    "comm-water-polo.jpg": (35, 75, 95),
    "odds-crm.jpg": (55, 55, 90),
    "odds-oyster.jpg": (80, 90, 70),
    "odds-boat.jpg": (60, 70, 80),
    "odds-spear.jpg": (25, 80, 100),
    "odds-surf.jpg": (100, 80, 50),
    "odds-track.jpg": (90, 60, 50),
}


def write_minimal_jpeg(path: str, r: int, g: int, b: int) -> None:
    width, height = 16, 16

    def chunk(chunk_type: bytes, data: bytes) -> bytes:
        crc = zlib.crc32(chunk_type + data) & 0xFFFFFFFF
        return struct.pack(">I", len(data)) + chunk_type + data + struct.pack(">I", crc)

    sig = b"\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x00\x00\x01\x00\x01\x00\x00"
    quant = bytes([max(1, min(255, v)) for v in (r, g, b)] * 64)
    dqt = chunk(b"DQT", b"\x00" + quant)
    sof = chunk(
        b"SOF0",
        struct.pack(">BHHB", 8, height, width, 3)
        + b"\x01\x11\x00\x02\x11\x01\x03\x11\x01",
    )
    sos = chunk(b"SOS", b"\x03\x01\x00\x02\x11\x03\x11\x00\x3f\x00")
    raw = b"\x00" + bytes([r, g, b] * width) * height
    compressed = zlib.compress(raw, 9)[2:-4]
    scan = chunk(b"SCAN", compressed) if False else b""
    # Simplest path: use tiny 1x1 RGB JPEG from known bytes
    _ = (dqt, sof, sos, scan)

    # Fallback minimal valid JPEG
    minimal = bytes([
        0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
        0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
        0x00, r, g, b, 0x07, 0x06, 0x05, 0x08, 0x07, 0x07, 0x07, 0x09, 0x09,
        0x08, 0x0A, 0x0C, 0x14, 0x0D, 0x0C, 0x0B, 0x0B, 0x0C, 0x19, 0x12, 0x13,
        0x0F, 0x14, 0x1D, 0x1A, 0x1F, 0x1E, 0x1D, 0x1A, 0x1C, 0x1C, 0x20, 0x24,
        0x2E, 0x27, 0x20, 0x22, 0x2C, 0x23, 0x1C, 0x1C, 0x28, 0x37, 0x29, 0x2C,
        0x30, 0x31, 0x34, 0x34, 0x34, 0x1F, 0x27, 0x39, 0x3D, 0x38, 0x32, 0x3C,
        0x2E, 0x33, 0x34, 0x32, 0xFF, 0xC0, 0x00, 0x0B, 0x08, 0x00, 0x10, 0x00,
        0x10, 0x01, 0x01, 0x11, 0x00, 0xFF, 0xC4, 0x00, 0x1F, 0x00, 0x00, 0x01,
        0x05, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09,
        0x0A, 0x0B, 0xFF, 0xDA, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00, 0x3F, 0x00,
        0xFB, 0xD5, 0xDB, 0x20, 0xA2, 0x8A, 0x00, 0xFF, 0xD9,
    ])
    with open(path, "wb") as f:
        f.write(sig + minimal[20:])


def main() -> None:
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for name, rgb in BACKGROUNDS.items():
        path = os.path.join(OUTPUT_DIR, name)
        write_minimal_jpeg(path, *rgb)
        print(f"Created {path}")


if __name__ == "__main__":
    main()
