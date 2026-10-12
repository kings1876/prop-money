// Generates an illustrated product image for every product in src/data/products.ts.
// Output: public/products/<slug>.svg
// Run: npx tsx scripts/generate-product-images.ts
//
// The artwork is deliberately generic (no portraits, no real banknote designs or
// security features) and always shows the PROP COPY marking and a blank reverse.
import fs from 'node:fs';
import path from 'node:path';
import { PRODUCTS } from '../src/data/products.ts';

const OUT_DIR = path.resolve(import.meta.dirname, '..', 'public', 'products');
const W = 800;
const H = 600;
const NOTE_W = 580;
const NOTE_H = 280;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Wavy line pattern used as a generic background texture on the note face.
const wavePattern = (id: string, color: string) => {
  const lines: string[] = [];
  for (let i = 0; i < 16; i++) {
    const y = 6 + i * 18;
    let d = `M -10 ${y}`;
    for (let x = -10; x <= NOTE_W + 10; x += 20) {
      d += ` Q ${x + 5} ${y + (i % 2 ? 6 : -6)} ${x + 10} ${y} T ${x + 20} ${y}`;
    }
    lines.push(`<path d="${d}" fill="none" stroke="${color}" stroke-width="1" opacity="0.35"/>`);
  }
  return `<g id="${id}">${lines.join('')}</g>`;
};

const rosette = (cx: number, cy: number, r: number, color: string) => {
  const rings: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6;
    rings.push(
      `<ellipse cx="${cx + Math.cos(a) * r * 0.35}" cy="${cy + Math.sin(a) * r * 0.35}" rx="${r * 0.65}" ry="${r * 0.65}" fill="none" stroke="${color}" stroke-width="1" opacity="0.45"/>`
    );
  }
  return rings.join('');
};

const svgFor = (p: (typeof PRODUCTS)[number]) => {
  const primary = p.colorScheme.primary;
  const accent = p.colorScheme.accent;
  const denom = p.denomination === 'Mixed' ? 'MIX' : `${p.currencySymbol}${p.denomination}`;
  const notes = (p.variants.find((v) => v.isDefault) ?? p.variants[0]).noteCount.toLocaleString('en-AU');
  const currencyName = p.category.toUpperCase();
  const denomSize = denom.length > 4 ? 76 : 92;

  // A note face (front) drawn at the origin; positioned by the caller with a transform.
  const face = `
    <rect width="${NOTE_W}" height="${NOTE_H}" rx="10" fill="url(#face)"/>
    <g clip-path="url(#noteClip)">${wavePattern('waves', '#ffffff')}</g>
    <rect x="10" y="10" width="${NOTE_W - 20}" height="${NOTE_H - 20}" rx="6" fill="none" stroke="#ffffff" stroke-opacity="0.55" stroke-width="2"/>
    ${rosette(82, NOTE_H / 2, 56, '#ffffff')}
    <circle cx="82" cy="${NOTE_H / 2}" r="44" fill="${primary}" stroke="#ffffff" stroke-opacity="0.8" stroke-width="2"/>
    <text x="82" y="${NOTE_H / 2 + 12}" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${denom.length > 4 ? 26 : 34}" fill="#ffffff">${esc(denom)}</text>
    <text x="${NOTE_W - 26}" y="${NOTE_H - 52}" text-anchor="end" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${denomSize}" fill="#ffffff" stroke="#00000055" stroke-width="2">${esc(denom)}</text>
    <text x="${NOTE_W - 26}" y="46" text-anchor="end" font-family="Arial, sans-serif" font-weight="700" font-size="17" letter-spacing="3" fill="#ffffff">PROP MONEY</text>
    <text x="${NOTE_W - 26}" y="68" text-anchor="end" font-family="Arial, sans-serif" font-size="12" letter-spacing="2" fill="#ffffff" opacity="0.9">${esc(currencyName)} · REPLICA</text>
    <text x="${NOTE_W - 26}" y="${NOTE_H - 22}" text-anchor="end" font-family="Courier New, monospace" font-weight="700" font-size="13" fill="#ffffff">NOT LEGAL TENDER · FOR FILM &amp; TV USE ONLY</text>
    <g transform="translate(${NOTE_W / 2} ${NOTE_H / 2 + 6}) rotate(-13)">
      <rect x="-250" y="-36" width="500" height="72" fill="#B91C1C" fill-opacity="0.9" stroke="#ffffff" stroke-width="3"/>
      <text x="0" y="20" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="58" letter-spacing="6" fill="#ffffff">PROP COPY</text>
    </g>`;

  // Edges of the notes underneath, to read as a strapped stack.
  const stackEdges = [5, 4, 3, 2, 1]
    .map((i) => `<rect x="${i * 3}" y="${i * 5}" width="${NOTE_W}" height="${NOTE_H}" rx="10" fill="${primary}" stroke="#00000066" stroke-width="1" opacity="${0.55 + i * 0.05}"/>`)
    .join('');

  // Paper strap around the stack.
  const strap = `
    <rect x="146" y="-6" width="56" height="${NOTE_H + 34}" fill="#F3EBD8" stroke="#00000040"/>
    <text transform="translate(180 ${NOTE_H / 2}) rotate(-90)" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="15" fill="#5B4A2E">PROP · ${esc(notes)} NOTES</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(`${p.name} – illustrated prop note stack marked PROP COPY`)}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="75%">
      <stop offset="0" stop-color="#22262c"/>
      <stop offset="1" stop-color="#0d0f12"/>
    </radialGradient>
    <linearGradient id="face" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${primary}"/>
      <stop offset="0.55" stop-color="${primary}"/>
      <stop offset="1" stop-color="${accent}"/>
    </linearGradient>
    <clipPath id="noteClip"><rect width="${NOTE_W}" height="${NOTE_H}" rx="10"/></clipPath>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="14" stdDeviation="14" flood-color="#000000" flood-opacity="0.55"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Single note fanned out behind, showing the blank reverse -->
  <g transform="translate(190 40) rotate(8)" filter="url(#shadow)">
    <rect width="${NOTE_W}" height="${NOTE_H}" rx="10" fill="#EEEAE1" stroke="#c9c3b6" stroke-width="2"/>
    <text x="${NOTE_W - 30}" y="52" text-anchor="end" font-family="Arial, sans-serif" font-weight="700" font-size="22" letter-spacing="4" fill="#9a9488">BLANK REVERSE</text>
    <text x="${NOTE_W - 30}" y="78" text-anchor="end" font-family="Courier New, monospace" font-size="13" fill="#9a9488">PROP COPY · ONE-SIDED PRINT</text>
  </g>

  <!-- Strapped stack, front face up -->
  <g transform="translate(40 190) rotate(-5)" filter="url(#shadow)">
    ${stackEdges}
    ${face}
    ${strap}
  </g>

  <!-- Caption bar -->
  <rect x="0" y="${H - 64}" width="${W}" height="64" fill="#000000" fill-opacity="0.55"/>
  <text x="${W / 2}" y="${H - 25}" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="#ffffff">${esc(notes)} NOTES · ONE-SIDED · 75% SCALE · NOT LEGAL TENDER</text>
</svg>
`;
};

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const f of fs.readdirSync(OUT_DIR)) if (f.endsWith('.svg')) fs.unlinkSync(path.join(OUT_DIR, f));
for (const p of PRODUCTS) fs.writeFileSync(path.join(OUT_DIR, `${p.slug}.svg`), svgFor(p));
console.log(`Wrote ${PRODUCTS.length} images to ${OUT_DIR}`);
