// Usage: node scripts/optimize-images.mjs <dossier-des-images-sources>
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const srcDir = process.argv[2]
if (!srcDir) {
  console.error('Usage: node scripts/optimize-images.mjs <dossier-source>')
  process.exit(1)
}

const outDir = path.resolve('src/assets/images')
const publicDir = path.resolve('public')
await mkdir(outDir, { recursive: true })

const images = [
  { src: 'WhatsApp Image 2026-11-16 at 10.16.55 AM.jpeg', name: 'logo', widths: [160, 320, 640] },
  { src: '8.jpeg', name: 'packshot', widths: [480, 802] },
  { src: '6.jpeg', name: 'etiquette-recto', widths: [400, 648] },
  { src: 'WhatsApp Image 2026-11-16 at 10.16.38 AM.jpeg', name: 'sachet-situation', widths: [480, 960] },
  { src: '3.jpeg', name: 'sachets-pile', widths: [432] },
  { src: '4.jpeg', name: 'sachets-etales', widths: [640, 1080] },
]

for (const img of images) {
  const input = path.join(srcDir, img.src)
  const meta = await sharp(input).metadata()
  for (const w of img.widths) {
    const width = Math.min(w, meta.width)
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outDir, `${img.name}-${w}.webp`))
  }
  console.log(`${img.name}: ${meta.width}x${meta.height}`)
}

const logo = path.join(srcDir, images[0].src)
await sharp(logo).resize(192, 192).png().toFile(path.join(publicDir, 'favicon-192.png'))
await sharp(logo).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'))
await sharp(logo).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32.png'))

await sharp(path.join(srcDir, '8.jpeg'))
  .resize(1200, 630, { fit: 'contain', background: '#140b06' })
  .jpeg({ quality: 82 })
  .toFile(path.join(publicDir, 'og-image.jpg'))

const sample = async (file, left, top) => {
  const { data } = await sharp(path.join(srcDir, file))
    .extract({ left, top, width: 12, height: 12 })
    .resize(1, 1)
    .raw()
    .toBuffer({ resolveWithObject: true })
  return '#' + [...data.subarray(0, 3)].map((v) => v.toString(16).padStart(2, '0')).join('')
}
console.log('fond logo', await sample(images[0].src, 10, 10))
console.log('or logo', await sample(images[0].src, 620, 380))
console.log('fond packshot', await sample('8.jpeg', 30, 1000))
console.log('crème étiquette', await sample('6.jpeg', 30, 300))
console.log('or étiquette', await sample('6.jpeg', 300, 440))
