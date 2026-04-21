import { 
  Printer, 
  Palette, 
  Flag, 
  Shirt, 
  Stamp, 
  Gift, 
  Layout, 
  Maximize,
  Clock,
  History,
  Users,
  CheckCircle2,
  Star,
  Quote
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'biz-cards',
    name: 'Business Cards',
    desc: 'First impressions, perfected',
    icon: Stamp
  },
  {
    id: 'flyers',
    name: 'Flyers & Brochures',
    desc: 'Designed to be kept, not tossed',
    icon: Layout
  },
  {
    id: 'banners',
    name: 'Banners & Signage',
    desc: 'Large format. Larger impact.',
    icon: Flag
  },
  {
    id: 'garments',
    name: 'T-Shirt printing',
    desc: 'Wear your brand everywhere',
    icon: Shirt
  },
  {
    id: 'stickers',
    name: 'Stickers & Labels',
    desc: 'Small but unforgettable',
    icon: Stamp
  },
  {
    id: 'promo',
    name: 'Promotional Items',
    desc: 'Gifts that keep marketing',
    icon: Gift
  },
  {
    id: 'design',
    name: 'Graphic Design',
    desc: 'From concept to print-ready',
    icon: Palette
  },
  {
    id: 'large-format',
    name: 'Large Format',
    desc: 'Walls, windows, events',
    icon: Maximize
  }
];

export const STATS = [
  { label: 'Years in Business', value: '15+' },
  { label: 'Print Jobs Delivered', value: '10,000+' },
  { label: 'Businesses Served', value: '500+' },
  { label: 'Average Quote Response', value: '2hr' }
];

export const STEPS = [
  {
    title: 'Share Your Brief',
    desc: 'Tell us what you need, upload artwork or start from scratch'
  },
  {
    title: 'Get Your Quote',
    desc: 'Receive a detailed quote within 2 hours'
  },
  {
    title: 'We Perfect It',
    desc: 'Our team prints, checks quality, and prepares your order'
  },
  {
    title: 'Collect or Receive',
    desc: 'Pick up from our studio or get it delivered'
  }
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Business Cards',
    price: 'TTD $150',
    desc: 'Luxury cardstock with matte or gloss finish.',
    image: 'https://picsum.photos/seed/cards/600/400'
  },
  {
    id: 2,
    name: 'A5 Full-Color Flyers',
    price: 'TTD $85',
    desc: 'Vibrant, eye-catching flyers on high-quality paper.',
    image: 'https://picsum.photos/seed/flyer/600/400'
  },
  {
    id: 3,
    name: 'Vinyl Roll-Up Banners',
    price: 'TTD $450',
    desc: 'Professional display for tradeshows and events.',
    image: 'https://picsum.photos/seed/banner/600/400'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Amina K. Courtney',
    role: 'Local Guide',
    quote: 'Oracle in Print always does great work! They are very customer centered and accommodating. Very appreciative of their services!',
    initials: 'AC'
  },
  {
    name: 'Stephanie Harrinam',
    role: 'Business Owner',
    quote: 'Great service and nice price. Exactly what we needed for our marketing drive.',
    initials: 'SH'
  },
  {
    name: 'Marlene Thomas',
    role: 'Local Resident',
    quote: 'Friendly staff and reasonable price. They really help you bring your vision to life.',
    initials: 'MT'
  }
];
