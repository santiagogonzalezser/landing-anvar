import { Country, ProjectStats, Amenity } from '@/types';
import { RiBuilding2Fill, RiWaterFlashFill, RiStoreFill } from 'react-icons/ri';
import { GiWaves, GiWeightLiftingUp } from 'react-icons/gi';
import { IoWaterOutline } from 'react-icons/io5';

export const COUNTRIES: Country[] = [
  { code: '+57', name: 'COL' },
  { code: '+1', name: 'USA' },
  { code: '+52', name: 'MEX' },
  { code: '+34', name: 'ESP' },
  { code: '+54', name: 'ARG' },
  { code: '+55', name: 'BRA' },
  { code: '+56', name: 'CHL' },
  { code: '+51', name: 'PER' },
  { code: '+58', name: 'VEN' },
  { code: '+593', name: 'ECU' },
];

export const PROJECT_STATS: ProjectStats[] = [
  {
    title: "Apartamentos desde",
    value: "25.49m² a 56.55m²",
    description: "Apartamentos desde"
  },
  {
    title: "Apartamentos",
    value: "152",
    description: "Apartamentos"
  },
  {
    title: "Club House de Lujo",
    value: "+1,250m²",
    description: "Club House de Lujo"
  },
  {
    title: "Zona Comercial",
    value: "+720m²",
    description: "Zona Comercial"
  }
];

export const AMENITIES: Amenity[] = [
  {
    title: "Piscina con Borde Infinito",
    description: "Espectacular piscina infinita con vista directamente al Parque de la 93.",
    icon: GiWaves,
    bgColor: '#8e8066'
  },
  {
    title: "Gimnasio Premium",
    description: "Gimnasio completamente dotado con equipamento de última tecnología.",
    icon: GiWeightLiftingUp,
    bgColor: '#a69373'
  },
  {
    title: "Zona de Recuperación",
    description: "Zona privada que contiene un espacio para masajes, sauna y cold plunge.",
    icon: IoWaterOutline,
    bgColor: '#8e8066'
  }
];

export const FEATURED_CHARACTERISTICS = [
  {
    icon: RiBuilding2Fill,
    title: "152 Unidades Residenciales",
    description: "Apartamentos de 25.49m² a 56.55m²",
    bgColor: '#8e8066'
  },
  {
    icon: RiWaterFlashFill,
    title: "Club House Premium",
    description: "Más de 1,250m² de amenidades",
    bgColor: '#a69373'
  },
  {
    icon: RiStoreFill,
    title: "Zona Comercial",
    description: "Más de 720m² comerciales",
    bgColor: '#8e8066'
  }
];

export const MAILCHIMP_CONFIG = {
  actionUrl: "https://equanime.us5.list-manage.com/subscribe/post?u=6f1dbb9913f0dd514fadfc3b2&id=c1f89efb03&f_id=002acbe1f0",
  hiddenField: "b_6f1dbb9913f0dd514fadfc3b2_c1f89efb03"
};