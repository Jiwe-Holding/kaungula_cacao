import { CakeSlice, ChefHat, Coffee, Factory, IceCreamBowl, type LucideIcon } from 'lucide-react'

export const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Notre produit', to: '/notre-produit' },
  { label: 'Nos engagements', to: '/#engagements' },
  { label: 'Contact', to: '/contact' },
]

// Informations confirmées par l'emballage officiel. Ajoutez ici les nouvelles données validées par l'entreprise.
export const product = {
  name: 'Kaungula Cacao',
  type: 'Cacao en poudre',
  packaging: [
    { label: 'Format', value: 'Sachet doypack' },
    { label: 'Contenance', value: '200 g' },
    { label: 'Dimensions du sachet', value: '12 × 20 cm' },
    { label: 'Conditionnement', value: 'Réalisé en RDC' },
  ],
  preparation:
    "Ajoutez une à deux cuillères à café de cacao en poudre dans une tasse de lait chaud, de boisson végétale ou d'eau chaude. Mélangez bien et sucrez selon votre goût. Vous pouvez également l'incorporer dans vos smoothies, yaourts, céréales ou pâtisseries.",
}

export type Use = { icon: LucideIcon; title: string; text: string }

export const uses: Use[] = [
  {
    icon: Coffee,
    title: 'Boissons chocolatées',
    text: "Dans du lait chaud, une boisson végétale ou de l'eau chaude : une à deux cuillères à café suffisent pour une tasse.",
  },
  {
    icon: CakeSlice,
    title: 'Pâtisserie',
    text: 'Gâteaux, biscuits, brownies ou glaçages : le cacao en poudre s’intègre à vos pâtes et à vos préparations.',
  },
  {
    icon: IceCreamBowl,
    title: 'Desserts',
    text: 'Crèmes, mousses, yaourts ou smoothies, pour une touche chocolatée en toute simplicité.',
  },
  {
    icon: ChefHat,
    title: 'Préparations culinaires',
    text: 'Céréales du matin, recettes du quotidien ou créations plus audacieuses : laissez parler votre créativité.',
  },
  {
    icon: Factory,
    title: 'Usages professionnels',
    text: 'Boulangeries, pâtisseries, hôtels et ateliers agroalimentaires peuvent l’intégrer à leurs productions.',
  },
]
