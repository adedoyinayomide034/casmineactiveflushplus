import { BenefitItem, ProductQuality, PhoneContact } from '../types';
import userUploadedBottle from '../assets/images/user_uploaded_bottle.png';
import naturalBotanicalsImg from '../assets/images/natural_botanicals_1787156931138.jpg';
import productBottleImg from '../assets/images/product_bottle_1787156918870.jpg';
import casmineLogoImg from '../assets/images/casmine_logo_1787156945155.jpg';

export const BRAND_INFO = {
  name: 'Casmine Active Flush Plus',
  brandName: 'Casmine',
  productName: 'Active Flush Plus',
  subheading: 'Natural Detox & Wellness Drink',
  tagline: 'CLEANSE • DETOX • REFRESH • REVIVE',
  motto: 'Pure • Natural • Trusted',
  ctaMotto: 'For a cleaner system, better health and a more active you!',
  volume: '200ml',
  servingMorning: '100ml in the morning',
  servingNight: '100ml at night when going to bed',
  overview:
    'Active Flush Plus is a powerful blend of natural ingredients that helps detoxify your body, support digestive health and promote overall wellness.',
  aboutText:
    'Active Flush Plus is a natural detox and wellness drink designed to support natural detoxification, healthy digestion and overall wellness.',
};

export const PHONE_CONTACTS: PhoneContact[] = [
  {
    display: '09164892077',
    raw: '09164892077',
    international: '+2349164892077',
    whatsappUrl:
      'https://wa.me/2349164892077?text=Hello%20Casmine%20Active%20Flush%20Plus,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20product.',
  },
  {
    display: '08138470024',
    raw: '08138470024',
    international: '+2348138470024',
    whatsappUrl:
      'https://wa.me/2348138470024?text=Hello%20Casmine%20Active%20Flush%20Plus,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20product.',
  },
];

export const PRODUCT_QUALITIES: ProductQuality[] = [
  {
    id: 'plant-based',
    title: 'Plant Based',
    description: 'Formulated from pure, plant-derived botanical sources.',
    iconName: 'Leaf',
  },
  {
    id: 'no-artificial-colours',
    title: 'No Artificial Colours',
    description: 'Clean formulation free from synthetic dyes and colourants.',
    iconName: 'Sparkles',
  },
  {
    id: 'no-added-sugar',
    title: 'No Added Sugar',
    description: 'Naturally pure taste without artificial or refined sugars.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'preservative-free',
    title: 'Preservative Free',
    description: 'Fresh and wholesome, bottled with care for optimal purity.',
    iconName: 'Shield',
  },
  {
    id: 'natural-ingredients',
    title: '100% Natural Ingredients',
    description: 'Carefully selected herbs and botanicals for natural detox.',
    iconName: 'HeartPulse',
  },
];

export const NINE_BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: 'Supports natural detoxification and cleansing',
    description:
      'Helps your body naturally process and eliminate accumulated impurities, restoring inner balance.',
    iconName: 'Sparkles',
  },
  {
    id: 2,
    title: 'Aids healthy digestion and reduces bloating',
    description:
      'Promotes smoother intestinal transit, eases gut heaviness, and relieves uncomfortable abdominal bloating.',
    iconName: 'Activity',
  },
  {
    id: 3,
    title: 'Helps flush out toxins and waste from the body',
    description:
      'Encourages active flushing of metabolic waste products to keep your gastrointestinal system cleansed.',
    iconName: 'RefreshCw',
  },
  {
    id: 4,
    title: 'Supports liver and kidney health',
    description:
      'Provides targeted natural support to the primary vital organs responsible for daily filtration and cleansing.',
    iconName: 'Heart',
  },
  {
    id: 5,
    title: 'Boosts energy and improves overall vitality',
    description:
      'By removing systemic sluggishness and metabolic burden, your body feels revitalized and full of daily vigor.',
    iconName: 'Zap',
  },
  {
    id: 6,
    title: 'Promotes a healthier immune system',
    description:
      'A cleaner digestive tract and supported filtration organs strengthen your body’s natural defense mechanisms.',
    iconName: 'ShieldCheck',
  },
  {
    id: 7,
    title: 'Refreshing taste for daily wellness',
    description:
      'An invigorating, revitalizing herbal taste experience designed to make your daily wellness routine enjoyable.',
    iconName: 'Smile',
  },
  {
    id: 8,
    title: 'Removes abdominal fat (flattened your belly)',
    description:
      'Targeted action helps shed stubborn visceral heaviness and abdominal bloating for a noticeably flatter stomach.',
    iconName: 'Flame',
  },
  {
    id: 9,
    title: 'Burns excess weight',
    description:
      'Promotes natural metabolic stimulation to assist in trimming excess weight and restoring an active silhouette.',
    iconName: 'TrendingDown',
  },
];

export const USAGE_STEPS = [
  {
    stepNumber: '01',
    time: 'Morning Routine',
    dose: '100ml',
    action: 'Take 100ml in the morning.',
    description: 'Start your morning with 100ml to activate your digestive system and begin daytime detoxification.',
    icon: 'Sun',
  },
  {
    stepNumber: '02',
    time: 'Night Routine',
    dose: '100ml',
    action: 'Take 100ml at night when going to bed.',
    description: 'Take the remaining 100ml before bed to allow the natural botanicals to cleanse your body while you sleep.',
    icon: 'Moon',
  },
];

export const USAGE_CARE_INSTRUCTIONS = [
  {
    title: 'Shake Slightly Before Use',
    description: 'Gently mix the natural herbal ingredients for consistent potency in every sip.',
    icon: 'RotateCcw',
  },
  {
    title: 'Open Gently',
    description: 'Release seal smoothly to preserve freshness and carbonation safety.',
    icon: 'Unlock',
  },
  {
    title: 'Refrigerate After Opening',
    description: 'Store cold between your morning and evening servings to maintain optimal botanical freshness.',
    icon: 'ThermometerSnowflake',
  },
];

export const REACTIONS_LIST = [
  'May sometimes make you feel like vomiting.',
  'May run your stomach and cause frequent trips to the restroom.',
];

export const CAUTIONS_LIST = [
  'Do not use if you have severe ulcers.',
  'Not recommended for pregnant women.',
];

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/moeaynok';

export const ASSETS = {
  productBottle: userUploadedBottle,
  productBottleAlt: productBottleImg,
  naturalBotanicals: naturalBotanicalsImg,
  casmineLogo: casmineLogoImg,
  userBottleLogo: userUploadedBottle,
};
