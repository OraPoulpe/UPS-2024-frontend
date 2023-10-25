
interface IPalette {
  [key: string]: string
}

export const PALETTE: IPalette = {
  black: '#000',
  white: '#fff',

  'error-red': '#EB5757',
  'primary-orange': '#FFA011',
  
  'text-black': '#272727',
  'text-input-black': '#252525',
  'text-placeholder-gray': '#828282',

  'bg-lightgray': '#F8F8F8',
  
} as const ;
