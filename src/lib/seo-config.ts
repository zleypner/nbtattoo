/**
 * SEO Configuration
 * Centralized business data for consistent SEO across the site
 * TODO: Update phone number and WhatsApp when available
 */

export const siteConfig = {
  name: "Nobori Tattoo",
  legalName: "Nobori Tattoo",
  url: "https://noboritattoo.com",
  description:
    "Professional tattoo studio in Playas del Coco, Guanacaste, Costa Rica. Specializing in color illustrative, neo-oriental, and fine line tattoos.",
  descriptionEs:
    "Estudio de tatuajes profesional en Playas del Coco, Guanacaste, Costa Rica. Especialistas en tatuajes a color, neo-oriental y línea fina.",
  image: "/assets/og-image.jpg",
  logo: "/assets/og-image.jpg",
  priceRange: "$$",
  currencyAccepted: ["USD", "CRC"],
  paymentAccepted: ["Cash", "Credit Card", "Sinpe Móvil"],
  languages: ["en", "es"],
};

export const businessInfo = {
  // NAP (Name, Address, Phone) - Critical for local SEO
  name: siteConfig.name,
  // TODO: Add real phone number when available
  phone: "+506 8888-8888", // Placeholder - update with real number
  whatsapp: "+50688888888", // Placeholder - update with real number (no spaces/dashes for WhatsApp link)
  email: "info@noboritattoo.com", // Placeholder - update if available

  address: {
    street: "Plaza Nino, Local 2, Frente a THE GYM",
    locality: "Playas del Coco",
    region: "Guanacaste",
    postalCode: "50503",
    country: "Costa Rica",
    countryCode: "CR",
  },

  geo: {
    latitude: 10.5482,
    longitude: -85.7027,
  },

  // Service areas for local SEO
  serviceAreas: [
    "Playas del Coco",
    "Coco Beach",
    "Guanacaste",
    "Liberia",
    "Tamarindo",
    "Papagayo",
    "Playa Hermosa",
    "Playa Panama",
    "Costa Rica",
  ],

  // Opening hours
  hours: {
    monday: { open: "10:00", close: "19:00" },
    tuesday: { open: "10:00", close: "19:00" },
    wednesday: { open: "10:00", close: "19:00" },
    thursday: { open: "10:00", close: "19:00" },
    friday: { open: "10:00", close: "19:00" },
    saturday: { open: "11:00", close: "18:00" },
    sunday: { open: "Cita previa", close: "By Appointment", byAppointment: true },
  },

  hoursDisplay: {
    weekdays: "Mon - Fri: 10am - 7pm",
    saturday: "Sat: 11am - 6pm",
    sunday: "Sun: By Appointment",
  },
};

export const socialLinks = {
  instagram: "https://www.instagram.com/nobori.tattoo/",
  instagramHandle: "@nobori.tattoo",
  // TODO: Add Facebook if available
  facebook: "", // Placeholder
  // Google Maps
  googleMaps: "https://maps.app.goo.gl/BpX3RNAoCWV7Fbok7",
  // TODO: Add Google Business Profile review link
  googleReview: "", // Placeholder - add link to leave review
};

export const artistInfo = {
  name: "Joshua",
  fullName: "Joshua", // Update with full name if available
  title: "Owner & Tattoo Artist",
  experience: "Professional tattoo artist",
  specialties: ["Color Illustrative", "Neo-Oriental", "Fine Line", "Japanese Style"],
  languages: ["English", "Spanish"],
  instagram: "https://www.instagram.com/nobori.tattoo/",
};

// Tattoo styles offered
export const tattooStyles = [
  {
    name: "Color Illustrative",
    nameEs: "Ilustrativo a Color",
    description: "Vibrant, detailed illustrations with bold colors and artistic flair",
    descriptionEs: "Ilustraciones vibrantes y detalladas con colores vivos y estilo artístico",
  },
  {
    name: "Neo-Oriental",
    nameEs: "Neo-Oriental",
    description: "Modern interpretations of traditional Asian tattoo motifs",
    descriptionEs: "Interpretaciones modernas de motivos tradicionales asiáticos",
  },
  {
    name: "Fine Line",
    nameEs: "Línea Fina",
    description: "Delicate, precise linework for elegant and subtle designs",
    descriptionEs: "Trabajo de línea delicado y preciso para diseños elegantes y sutiles",
  },
  {
    name: "Japanese Style",
    nameEs: "Estilo Japonés",
    description: "Traditional Japanese tattoo elements including koi, dragons, and waves",
    descriptionEs: "Elementos tradicionales japoneses incluyendo koi, dragones y olas",
  },
  {
    name: "Custom Designs",
    nameEs: "Diseños Personalizados",
    description: "Unique, personalized artwork created specifically for you",
    descriptionEs: "Arte único y personalizado creado específicamente para ti",
  },
];

// Testimonials with structured data support
export const testimonials = [
  {
    quote:
      "I have been coming to Coco from Los Angeles for years and haven't gotten any tattoos because I hadn't met an artist I liked (yet). During this trip, I met Josh (the owner of Nobori) and LOVED his tattoo style. I told him my idea and he was able to make something really beautiful. We have another session because it is such a big piece, but I already love it. His prices were extremely reasonable considering his skill level and he was very professional throughout the entire experience. I will be going back to finish this tattoo and to get more. Thanks Josh!",
    author: "Alix Breeden",
    rating: 5,
    date: "2024-01-15",
  },
  {
    quote:
      "I was slightly nervous. The experience was easy and I felt so comfortable. Cant wait to get my next tattoo! Thanks Josh. Xo",
    author: "Kiki Berg",
    rating: 5,
    date: "2024-02-10",
  },
  {
    quote:
      "Josh was a good host and great artist. If I'm in Costa Rica again, I'd definitely go back. Sus obras de arte están muy lindas y Josh fue muy profesional y atento. Muchas gracias para el tatuaje genial.",
    author: "Veronica Thomas",
    rating: 5,
    date: "2024-03-05",
  },
  {
    quote:
      "I had a great experience getting my first colored tattoo at Nobori. I'm a dive instructor and I asked him for a very difficult sea creature called Harlequin Shrimp, and he did a fantastic job. He really enjoys tattooing with color and he is not afraid of difficult projects and designs. He also sells very nice foam soaps and special moisturizers for your tattoos, he plays great music while tattooing and he has some very nice beach shorts in stock. This shop is in a very convenient location near mainstreet. Great experience overall. Thanks Joshua.",
    author: "David Berm",
    rating: 5,
    date: "2024-04-20",
  },
  {
    quote:
      "I cannot recommend Josh enough! He is an amazing tattoo artist and just generally a wonderful human. His shop is super cute and clean and he is so welcoming and kind. Definitely a great choice for a tattoo artist if you're ever in Costa Rica!!",
    author: "Chandel Thiemann",
    rating: 5,
    date: "2024-05-15",
  },
];

// FAQ content for SEO
export const faqs = [
  {
    question: "Where is Nobori Tattoo located?",
    questionEs: "¿Dónde está ubicado Nobori Tattoo?",
    answer:
      "Nobori Tattoo is located in Plaza Nino, Local 2, across from THE GYM in Playas del Coco, Guanacaste, Costa Rica. We're just 30 minutes from Liberia International Airport (LIR).",
    answerEs:
      "Nobori Tattoo está ubicado en Plaza Nino, Local 2, frente a THE GYM en Playas del Coco, Guanacaste, Costa Rica. Estamos a solo 30 minutos del Aeropuerto Internacional de Liberia (LIR).",
  },
  {
    question: "Do I need an appointment or do you accept walk-ins?",
    questionEs: "¿Necesito una cita o aceptan clientes sin cita?",
    answer:
      "We accept both walk-ins and appointments. For larger pieces or custom designs, we recommend booking in advance via Instagram DM. Walk-ins are welcome for smaller tattoos depending on availability.",
    answerEs:
      "Aceptamos tanto clientes sin cita como con cita previa. Para piezas grandes o diseños personalizados, recomendamos reservar con anticipación vía DM de Instagram. Los clientes sin cita son bienvenidos para tatuajes pequeños según disponibilidad.",
  },
  {
    question: "What tattoo styles do you specialize in?",
    questionEs: "¿En qué estilos de tatuajes se especializan?",
    answer:
      "We specialize in Color Illustrative, Neo-Oriental, Fine Line, and Japanese style tattoos. We also create custom designs tailored to your vision and preferences.",
    answerEs:
      "Nos especializamos en tatuajes Ilustrativos a Color, Neo-Oriental, Línea Fina y estilo Japonés. También creamos diseños personalizados adaptados a tu visión y preferencias.",
  },
  {
    question: "How much does a tattoo cost?",
    questionEs: "¿Cuánto cuesta un tatuaje?",
    answer:
      "Tattoo pricing depends on size, complexity, placement, and design details. Contact us via Instagram DM with your idea for a personalized quote. We accept cash, credit cards, and Sinpe Móvil.",
    answerEs:
      "El precio del tatuaje depende del tamaño, complejidad, ubicación y detalles del diseño. Contáctanos vía DM de Instagram con tu idea para una cotización personalizada. Aceptamos efectivo, tarjetas de crédito y Sinpe Móvil.",
  },
  {
    question: "Is it safe to get a tattoo in Costa Rica?",
    questionEs: "¿Es seguro hacerse un tatuaje en Costa Rica?",
    answer:
      "Yes, at Nobori Tattoo we follow strict hygiene and safety protocols. We use single-use needles, hospital-grade sterilization equipment, and high-quality, safe inks. Your safety is our top priority.",
    answerEs:
      "Sí, en Nobori Tattoo seguimos estrictos protocolos de higiene y seguridad. Usamos agujas de un solo uso, equipo de esterilización de grado hospitalario y tintas de alta calidad y seguras. Tu seguridad es nuestra prioridad.",
  },
  {
    question: "What should I do to prepare for my tattoo session?",
    questionEs: "¿Qué debo hacer para prepararme para mi sesión de tatuaje?",
    answer:
      "Get a good night's sleep, eat a full meal before your appointment, stay hydrated, avoid alcohol 24 hours before, and wear comfortable clothing that allows easy access to the tattoo area.",
    answerEs:
      "Duerme bien la noche anterior, come una comida completa antes de tu cita, mantente hidratado, evita el alcohol 24 horas antes y usa ropa cómoda que permita fácil acceso al área del tatuaje.",
  },
  {
    question: "How do I book a tattoo appointment?",
    questionEs: "¿Cómo puedo reservar una cita para un tatuaje?",
    answer:
      "The best way to book is through Instagram DM at @nobori.tattoo. Send us your tattoo idea, preferred size, placement, and any reference images. We'll discuss your design and schedule your session.",
    answerEs:
      "La mejor forma de reservar es a través de DM de Instagram en @nobori.tattoo. Envíanos tu idea de tatuaje, tamaño preferido, ubicación y cualquier imagen de referencia. Discutiremos tu diseño y programaremos tu sesión.",
  },
  {
    question: "Do you speak English and Spanish?",
    questionEs: "¿Hablan inglés y español?",
    answer:
      "Yes! We are fully bilingual and comfortable working with clients in both English and Spanish. Many of our clients are tourists visiting Costa Rica.",
    answerEs:
      "¡Sí! Somos completamente bilingües y trabajamos cómodamente con clientes tanto en inglés como en español. Muchos de nuestros clientes son turistas que visitan Costa Rica.",
  },
  {
    question: "What is the aftercare for a new tattoo?",
    questionEs: "¿Cuál es el cuidado posterior para un tatuaje nuevo?",
    answer:
      "We provide detailed aftercare instructions with every tattoo. Generally: keep it clean, apply recommended moisturizer, avoid sun exposure and swimming for 2-3 weeks, and don't pick at scabs. We also sell specialized tattoo aftercare products.",
    answerEs:
      "Proporcionamos instrucciones detalladas de cuidado posterior con cada tatuaje. En general: mantenlo limpio, aplica humectante recomendado, evita exposición al sol y nadar por 2-3 semanas, y no te arranques las costras. También vendemos productos especializados para el cuidado del tatuaje.",
  },
  {
    question: "Can I get a tattoo on vacation in Costa Rica?",
    questionEs: "¿Puedo hacerme un tatuaje durante mis vacaciones en Costa Rica?",
    answer:
      "Absolutely! Many of our clients are tourists. We recommend scheduling your tattoo early in your trip to allow proper healing time before activities like surfing or swimming. Contact us before you arrive to book your session.",
    answerEs:
      "¡Por supuesto! Muchos de nuestros clientes son turistas. Recomendamos programar tu tatuaje al inicio de tu viaje para permitir tiempo de curación antes de actividades como surf o natación. Contáctanos antes de llegar para reservar tu sesión.",
  },
  {
    question: "What is the minimum age for getting a tattoo?",
    questionEs: "¿Cuál es la edad mínima para hacerse un tatuaje?",
    answer:
      "You must be 18 years or older to get a tattoo at Nobori Tattoo. Valid ID is required for all clients.",
    answerEs:
      "Debes tener 18 años o más para hacerte un tatuaje en Nobori Tattoo. Se requiere identificación válida para todos los clientes.",
  },
  {
    question: "How far is the studio from Liberia Airport?",
    questionEs: "¿Qué tan lejos está el estudio del Aeropuerto de Liberia?",
    answer:
      "Nobori Tattoo is approximately 30 minutes by car from Liberia International Airport (LIR). We're conveniently located in the heart of Playas del Coco, near popular beaches like Tamarindo, Papagayo, and Playa Hermosa.",
    answerEs:
      "Nobori Tattoo está aproximadamente a 30 minutos en carro del Aeropuerto Internacional de Liberia (LIR). Estamos convenientemente ubicados en el corazón de Playas del Coco, cerca de playas populares como Tamarindo, Papagayo y Playa Hermosa.",
  },
];

// Gallery images with descriptive alt text for SEO
export const galleryImages = [
  {
    src: "/assets/1.jpeg",
    alt: "Color illustrative tattoo featuring vibrant artwork by Joshua at Nobori Tattoo, Playas del Coco",
    altEs: "Tatuaje ilustrativo a color con arte vibrante por Joshua en Nobori Tattoo, Playas del Coco",
    category: "Color Illustrative",
    categoryEs: "Ilustrativo a Color",
  },
  {
    src: "/assets/2.jpeg",
    alt: "Neo-oriental style tattoo with modern Asian-inspired design at Nobori Tattoo Costa Rica",
    altEs: "Tatuaje estilo neo-oriental con diseño moderno inspirado en Asia en Nobori Tattoo Costa Rica",
    category: "Neo-Oriental",
    categoryEs: "Neo-Oriental",
  },
  {
    src: "/assets/3.jpeg",
    alt: "Fine line tattoo with delicate linework and elegant design at Nobori Tattoo Guanacaste",
    altEs: "Tatuaje de línea fina con trabajo delicado y diseño elegante en Nobori Tattoo Guanacaste",
    category: "Fine Line",
    categoryEs: "Línea Fina",
  },
  {
    src: "/assets/4.jpeg",
    alt: "Colorful illustrative tattoo art showcasing bold colors at tattoo studio in Playas del Coco",
    altEs: "Arte de tatuaje ilustrativo a color mostrando colores vivos en estudio de tatuajes en Playas del Coco",
    category: "Color Illustrative",
    categoryEs: "Ilustrativo a Color",
  },
  {
    src: "/assets/5.jpeg",
    alt: "Neo-oriental tattoo design blending traditional and modern elements at Nobori Tattoo",
    altEs: "Diseño de tatuaje neo-oriental mezclando elementos tradicionales y modernos en Nobori Tattoo",
    category: "Neo-Oriental",
    categoryEs: "Neo-Oriental",
  },
  {
    src: "/assets/6.jpeg",
    alt: "Minimalist fine line tattoo with precise detailing at Costa Rica tattoo studio",
    altEs: "Tatuaje minimalista de línea fina con detalles precisos en estudio de tatuajes de Costa Rica",
    category: "Fine Line",
    categoryEs: "Línea Fina",
  },
  {
    src: "/assets/11.jpeg",
    alt: "Vibrant color illustrative tattoo piece by professional tattoo artist in Guanacaste",
    altEs: "Pieza de tatuaje ilustrativo a color vibrante por artista profesional en Guanacaste",
    category: "Color Illustrative",
    categoryEs: "Ilustrativo a Color",
  },
  {
    src: "/assets/12.jpeg",
    alt: "Japanese-inspired neo-oriental tattoo featuring traditional motifs at Nobori Tattoo",
    altEs: "Tatuaje neo-oriental inspirado en Japón con motivos tradicionales en Nobori Tattoo",
    category: "Neo-Oriental",
    categoryEs: "Neo-Oriental",
  },
  {
    src: "/assets/13.jpeg",
    alt: "Elegant fine line tattoo with intricate details at best tattoo shop Playas del Coco",
    altEs: "Tatuaje elegante de línea fina con detalles intrincados en el mejor estudio de tatuajes de Playas del Coco",
    category: "Fine Line",
    categoryEs: "Línea Fina",
  },
  {
    src: "/assets/14.jpeg",
    alt: "Custom color illustrative tattoo design created at Nobori Tattoo Costa Rica",
    altEs: "Diseño personalizado de tatuaje ilustrativo a color creado en Nobori Tattoo Costa Rica",
    category: "Color Illustrative",
    categoryEs: "Ilustrativo a Color",
  },
  {
    src: "/assets/111.jpeg",
    alt: "Neo-oriental style artwork with dragon or koi fish elements at Guanacaste tattoo studio",
    altEs: "Obra de arte estilo neo-oriental con elementos de dragón o pez koi en estudio de tatuajes de Guanacaste",
    category: "Neo-Oriental",
    categoryEs: "Neo-Oriental",
  },
  {
    src: "/assets/1233.jpeg",
    alt: "Bold color illustrative tattoo showcasing artistic skill at Nobori Tattoo Coco Beach",
    altEs: "Tatuaje ilustrativo a color audaz mostrando habilidad artística en Nobori Tattoo Coco Beach",
    category: "Color Illustrative",
    categoryEs: "Ilustrativo a Color",
  },
  {
    src: "/assets/123411.jpeg",
    alt: "Delicate fine line tattoo perfect for subtle and meaningful designs at Costa Rica studio",
    altEs: "Tatuaje delicado de línea fina perfecto para diseños sutiles y significativos en estudio de Costa Rica",
    category: "Fine Line",
    categoryEs: "Línea Fina",
  },
  {
    src: "/assets/345435.jpeg",
    alt: "Neo-oriental tattoo featuring traditional Japanese aesthetic at Nobori Tattoo Playas del Coco",
    altEs: "Tatuaje neo-oriental con estética tradicional japonesa en Nobori Tattoo Playas del Coco",
    category: "Neo-Oriental",
    categoryEs: "Neo-Oriental",
  },
  {
    src: "/assets/PHOTO-2026-02-01-21-29-21.jpg",
    alt: "Stunning color illustrative tattoo by Joshua at Nobori Tattoo, Guanacaste Costa Rica",
    altEs: "Impresionante tatuaje ilustrativo a color por Joshua en Nobori Tattoo, Guanacaste Costa Rica",
    category: "Color Illustrative",
    categoryEs: "Ilustrativo a Color",
  },
  {
    src: "/assets/WhatsApp Image 2026-02-01 at 21.29.28.jpeg",
    alt: "Fine line tattoo with elegant and minimalist style at best tattoo artist in Costa Rica",
    altEs: "Tatuaje de línea fina con estilo elegante y minimalista del mejor tatuador en Costa Rica",
    category: "Fine Line",
    categoryEs: "Línea Fina",
  },
];

// Helper function to generate WhatsApp link
export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${businessInfo.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

// Helper function to generate phone link
export function getPhoneLink(): string {
  return `tel:${businessInfo.phone.replace(/\s/g, "")}`;
}

// Helper to calculate aggregate rating
export function getAggregateRating() {
  const ratings = testimonials.map((t) => t.rating);
  const average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  return {
    ratingValue: average.toFixed(1),
    reviewCount: ratings.length,
    bestRating: 5,
    worstRating: 1,
  };
}
