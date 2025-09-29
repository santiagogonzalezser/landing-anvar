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

export const APARTMENT_CATEGORIES = [
  {
    id: "con-terraza",
    name: "Con terraza",
    info: {
      description: "Algunos apartamentos del segundo piso contarán con un área exterior privada.",
      metrageRange: "Desde Área Construida 49.59 m² Área Privada 44.43 m² Área Exterior 41.68 m² hasta Área Construida 56.55 m² Área Privada 51.47 m² Área Exterior 49.01 m²",
      apartmentNumbers: ["201", "208", "211", "218"],
      models: ["201", "208", "211", "218"],
      location: "Segundo piso",
      features: ["Área exterior privada", "2 habitaciones", "2 baños"]
    },
    models: [
      {
        id: "201",
        name: "201",
        image: "/apto_201.jpg",
        images: ["/apto_201.jpg", "/apto_X01.jpg"],
        description: "Apartamento con terraza privada en segundo piso",
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: "208",
        name: "208",
        image: "/apto_208.jpg",
        images: ["/apto_208.jpg", "/apto_X08.jpg"],
        description: "Apartamento con terraza privada en segundo piso",
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: "211",
        name: "211",
        image: "/apto_211.jpg",
        images: ["/apto_211.jpg", "/apto_X11.jpg"],
        description: "Apartamento con terraza privada en segundo piso",
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: "218",
        name: "218",
        image: "/apto_218.jpg",
        images: ["/apto_218.jpg", "/apto_X18.jpg"],
        description: "Apartamento con terraza privada en segundo piso",
        bedrooms: 2,
        bathrooms: 2,
      }
    ]
  },
  {
    id: "grandes",
    name: "Grandes",
    info: {
      description: "Cada piso tiene 4 apartamentos de 2 habitaciones con 2 baños, que están ubicados en las esquinas del edificio. Los apartamentos ubicados en la fachada (oriente) son de 56m² y hacia el posterior (occidente) son de 49m².",
      apartmentNumbers: ["301", "308", "311", "318", "401", "408", "411", "418", "501", "508", "511", "518", "601", "608", "611", "618", "701", "708", "711", "718", "801", "808", "811", "818", "901", "908", "911", "918"],
      models: ["X01", "X08", "X11", "X18"],
      location: "Esquinas del edificio, pisos 3 al 9",
      features: ["2 habitaciones", "2 baños", "Ubicación esquinera", "Fachada oriente: 56m²", "Posterior occidente: 49m²"]
    },
    models: [
      {
        id: "X01",
        name: "X01",
        image: "/apto_X01.jpg",
        description: "Apartamento grande ubicado en esquina",
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: "X08",
        name: "X08",
        image: "/apto_X08.jpg",
        description: "Apartamento grande ubicado en esquina",
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: "X11",
        name: "X11",
        image: "/apto_X11.jpg",
        description: "Apartamento grande ubicado en esquina",
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: "X18",
        name: "X18",
        image: "/apto_X18.jpg",
        description: "Apartamento grande ubicado en esquina",
        bedrooms: 2,
        bathrooms: 2,
      }
    ]
  },
  {
    id: "medianos",
    name: "Medianos",
    info: {
      description: "El modelo X19 es un apartamento de 39m² con 2 baños y una habitación, ubicado en la fachada lateral sur.",
      metrageRange: "Área Construida 39.93 m² Área Privada 36.51 m²",
      apartmentNumbers: ["219", "319", "419", "519", "619", "719", "819", "919"],
      models: ["X19"],
      location: "Fachada lateral sur, pisos 2 al 9",
      features: ["1 habitación", "2 baños", "39m²"]
    },
    models: [
      {
        id: "X19",
        name: "X19",
        image: "/apto_X19.jpg",
        description: "Apartamento mediano en fachada lateral sur",
        bedrooms: 1,
        bathrooms: 2,
        area: "39m²"
      }
    ]
  },
  {
    id: "monoambiente",
    name: "Monoambiente",
    info: {
      description: "Entre los dos apartamentos esquineros del occidente (es decir, la fachada trasera), tenemos apartamentos de 25m² monoambiente, tipo resort/hotel. Fachada lateral norte: dos apartamentos de 25m² y 26m². Hacia el oriente (frente del edificio) 6 apartamentos 27m².",
      metrageRange: "Desde Área Construida 25.70 m² Área Privada 22.89 m² hasta Área Construida 27.49 m² Área Privada 24.85 m²",
      apartmentNumbers: ["202", "302", "402", "502", "602", "702", "802", "902", "203", "303", "403", "503", "603", "703", "803", "903", "204", "304", "404", "504", "604", "704", "804", "904", "205", "305", "405", "505", "605", "705", "805", "905", "206", "306", "406", "506", "606", "706", "806", "906", "207", "307", "407", "507", "607", "707", "807", "907", "209", "309", "409", "509", "609", "709", "809", "909", "210", "310", "410", "510", "610", "710", "810", "910", "212", "312", "412", "512", "612", "712", "812", "912", "217", "317", "417", "517", "617", "717", "817", "917"],
      models: ["X02", "X03", "X04", "X05", "X06", "X07", "X09", "X10", "X12", "X17"],
      location: "Fachada trasera, lateral norte y frente del edificio",
      features: ["Monoambiente", "Tipo resort/hotel", "25m² a 27m²", "1 baño"]
    },
    models: [
      {
        id: "X02-X04-X06",
        name: "X02, X04, X06",
        image: "/apto_X02-X04-X06.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      },
      {
        id: "X03-X05-X07",
        name: "X03, X05, X07",
        image: "/apto_X03-X05-X07.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      },
      {
        id: "X09",
        name: "X09",
        image: "/apto_X09.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      },
      {
        id: "X10",
        name: "X10",
        image: "/apto_X10.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      },
      {
        id: "X12",
        name: "X12",
        image: "/apto_X12.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      },
      {
        id: "X13-X15",
        name: "X13, X15",
        image: "/apto_X13-X15.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      },
      {
        id: "X14-X16",
        name: "X14, X16",
        image: "/apto_X14-X16.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      },
      {
        id: "X17",
        name: "X17",
        image: "/apto_X17.jpg",
        description: "Monoambiente tipo resort/hotel",
        bedrooms: 0,
        bathrooms: 1,
      }
    ]
  }
];