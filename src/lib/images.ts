import logo160 from '@/assets/images/logo-160.webp'
import logo320 from '@/assets/images/logo-320.webp'
import logo640 from '@/assets/images/logo-640.webp'
import packshot480 from '@/assets/images/packshot-480.webp'
import packshot802 from '@/assets/images/packshot-802.webp'
import etiquette400 from '@/assets/images/etiquette-recto-400.webp'
import etiquette648 from '@/assets/images/etiquette-recto-648.webp'
import situation480 from '@/assets/images/sachet-situation-480.webp'
import situation960 from '@/assets/images/sachet-situation-960.webp'
import pile432 from '@/assets/images/sachets-pile-432.webp'
import etales640 from '@/assets/images/sachets-etales-640.webp'
import etales1080 from '@/assets/images/sachets-etales-1080.webp'

export type BrandImage = {
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
}

function image(sources: [string, number][], width: number, height: number, alt: string): BrandImage {
  return {
    src: sources[sources.length - 1][0],
    srcSet: sources.map(([src, w]) => `${src} ${w}w`).join(', '),
    width,
    height,
    alt,
  }
}

export const images = {
  logo: image(
    [[logo160, 160], [logo320, 320], [logo640, 640]],
    1254,
    1254,
    'Logo Kaungula Cacao : écusson doré aux initiales KC',
  ),
  packshot: image(
    [[packshot480, 480], [packshot802, 802]],
    802,
    1080,
    'Sachet de cacao en poudre Kaungula Cacao 200 g, emballage noir et or',
  ),
  etiquette: image(
    [[etiquette400, 400], [etiquette648, 648]],
    648,
    1080,
    'Étiquette Kaungula Cacao : portrait de femme, cabosse de cacao ouverte et bol de cacao en poudre',
  ),
  situation: image(
    [[situation480, 480], [situation960, 960]],
    960,
    1280,
    'Sachet Kaungula Cacao posé sur une table dans un intérieur lumineux',
  ),
  pile: image([[pile432, 432]], 432, 960, 'Sachets de cacao en poudre Kaungula Cacao empilés'),
  etales: image(
    [[etales640, 640], [etales1080, 1080]],
    1080,
    486,
    'Nombreux sachets Kaungula Cacao 200 g disposés côte à côte',
  ),
}
