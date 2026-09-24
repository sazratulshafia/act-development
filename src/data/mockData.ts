export interface ProjectLocation {
  id: string;
  name: string;
  slug: string;
  district: string;
  description: string;
  featuredImage?: string;
  latitude: number;
  longitude: number;
}

export interface Floorplan {
  id: string;
  projectId: string;
  unitTitle: string;
  sizeSft: number;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  facing: string;
  planImageUrl: string;
  isAvailable: boolean;
}

export interface ConstructionMilestone {
  id: string;
  projectId: string;
  milestoneTitle: string;
  percentageCompleted: number;
  updateDate: string;
  notes: string;
  images: string[];
}

export interface Amenity {
  id: string;
  name: string;
  iconName: string;
  category: 'wellness' | 'security' | 'convenience' | 'lifestyle';
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  locationId: string;
  locationName: string;
  address: string;
  landAreaKatha: number;
  buildingStoried: string;
  totalUnits: number;
  unitsPerFloor: number;
  sizeRangeSft: string;
  bedroomRange: string;
  startingPriceBdt: number; // in BDT (crores)
  status: 'ready' | 'ongoing' | 'upcoming' | 'handed_over';
  type: 'residential' | 'commercial' | 'mixed_use' | 'penthouse_collection';
  isFeatured: boolean;
  isFlagship: boolean;
  rajukApprovalNo: string;
  expectedHandoverDate: string;
  currentConstructionProgress: number;
  heroImage: string;
  galleryImages: string[];
  videoWalkthroughUrl?: string;
  amenities: Amenity[];
  floorplans: Floorplan[];
  constructionUpdates: ConstructionMilestone[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  quote: string;
  avatarUrl?: string;
  videoUrl?: string;
  rating: number;
  isFeatured: boolean;
}

export const LOCATIONS_DATA: ProjectLocation[] = [
  {
    id: 'loc-1',
    name: 'Gulshan 2',
    slug: 'gulshan-2',
    district: 'Dhaka',
    description: 'The diplomatic and commercial heart of Dhaka with prestigious lake boulevards and high-street luxury.',
    latitude: 23.7925,
    longitude: 90.4078,
  },
  {
    id: 'loc-2',
    name: 'Baridhara Diplomatic Zone',
    slug: 'baridhara',
    district: 'Dhaka',
    description: 'The most tranquil and secure enclave in Bangladesh, home to world embassies and serene lakeside avenues.',
    latitude: 23.7997,
    longitude: 90.4208,
  },
  {
    id: 'loc-3',
    name: 'Uttara Sector 3',
    slug: 'uttara',
    district: 'Dhaka',
    description: 'A planned upscale community with wide avenues, lush greenery, and effortless connectivity to the international airport.',
    latitude: 23.8672,
    longitude: 90.3984,
  },
  {
    id: 'loc-4',
    name: 'Bashundhara R/A',
    slug: 'bashundhara-ra',
    district: 'Dhaka',
    description: 'Dhaka’s premier planned residential haven offering expansive avenues, prestigious universities, and private serene living.',
    latitude: 23.8180,
    longitude: 90.4312,
  },
  {
    id: 'loc-5',
    name: 'Dhanmondi',
    slug: 'dhanmondi',
    district: 'Dhaka',
    description: 'The historical cultural soul of Dhaka with tree-shaded lakeside promenades, fine dining, and architectural heritage.',
    latitude: 23.7461,
    longitude: 90.3742,
  },
];

export const AMENITIES_CATALOG: Amenity[] = [
  { id: 'am-1', name: 'Infinity Heated Swimming Pool', iconName: 'Waves', category: 'wellness' },
  { id: 'am-2', name: 'Grand Double-Height Entrance Lobby', iconName: 'Building', category: 'lifestyle' },
  { id: 'am-3', name: '100% Standby Generator Power Backup', iconName: 'Zap', category: 'convenience' },
  { id: 'am-4', name: '3-Tier Smart Security & Biometric Access', iconName: 'ShieldCheck', category: 'security' },
  { id: 'am-5', name: 'Landscaped Rooftop Terrace & BBQ Lounge', iconName: 'Flower2', category: 'lifestyle' },
  { id: 'am-6', name: 'State-of-the-Art Wellness Gym & Steam', iconName: 'Dumbbell', category: 'wellness' },
  { id: 'am-7', name: 'High-Speed Mitsubishi European Elevators', iconName: 'ChevronsUp', category: 'convenience' },
  { id: 'am-8', name: 'Earthquake-Resistant BNBC Zone-2 Frame', iconName: 'Compass', category: 'security' },
  { id: 'am-9', name: 'Rainwater Harvesting & Thermal Cooling Roof', iconName: 'Droplet', category: 'lifestyle' },
  { id: 'am-10', name: 'Dedicated Driver Lounge & EV Charging Bay', iconName: 'Car', category: 'convenience' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Act Heights',
    slug: 'act-heights-uttara',
    tagline: 'Modern Architectural Serenity in Sector 3, Uttara',
    description: 'Nestled in the prestigious Sector 3 of Uttara, Act Heights is a testament to mindful architectural proportion and understated elegance. Featuring cantilevered glass verandas draped in cascading greenery, fair-faced concrete accents, and expansive single-unit floor plates, it redefines boutique residential sanctuary living in North Dhaka.',
    locationId: 'loc-3',
    locationName: 'Uttara Sector 3',
    address: 'Road 7, Sector 3, Uttara Model Town, Dhaka 1230',
    landAreaKatha: 7.50,
    buildingStoried: 'G + 8 Storied',
    totalUnits: 8,
    unitsPerFloor: 1,
    sizeRangeSft: '2,850 – 3,400 sft',
    bedroomRange: '4 Beds • 4 Baths',
    startingPriceBdt: 4.85, // 4.85 Crores BDT
    status: 'ongoing',
    type: 'residential',
    isFeatured: true,
    isFlagship: false,
    rajukApprovalNo: 'RAJUK/DC/UTT-2024/782-M',
    expectedHandoverDate: 'December 2026',
    currentConstructionProgress: 72,
    heroImage: '/images/projects/act-uttara.jpg',
    galleryImages: [
      '/images/projects/act-uttara.jpg',
      '/images/projects/act-vertica.jpg',
      '/images/projects/act-sovereign.jpg',
    ],
    videoWalkthroughUrl: 'https://www.youtube.com/watch?v=LoH98RHthY4',
    amenities: [
      AMENITIES_CATALOG[1],
      AMENITIES_CATALOG[2],
      AMENITIES_CATALOG[3],
      AMENITIES_CATALOG[4],
      AMENITIES_CATALOG[6],
      AMENITIES_CATALOG[7],
    ],
    floorplans: [
      {
        id: 'fp-1-a',
        projectId: 'proj-1',
        unitTitle: 'Single Suite A (Full Floor)',
        sizeSft: 2850,
        bedrooms: 4,
        bathrooms: 4,
        balconies: 3,
        facing: 'South-East Facing Corner Plot',
        planImageUrl: '/images/projects/act-uttara.jpg',
        isAvailable: true,
      },
      {
        id: 'fp-1-b',
        projectId: 'proj-1',
        unitTitle: 'Duplex Penthouse (Levels 7 & 8)',
        sizeSft: 3400,
        bedrooms: 5,
        bathrooms: 5,
        balconies: 4,
        facing: 'Triple-Side Open',
        planImageUrl: '/images/projects/act-uttara.jpg',
        isAvailable: false,
      },
    ],
    constructionUpdates: [
      {
        id: 'cu-1-1',
        projectId: 'proj-1',
        milestoneTitle: 'Superstructure 7th Floor Slab Casting Completed',
        percentageCompleted: 72,
        updateDate: 'September 2026',
        notes: 'Concrete crushing test certified at 4,500 PSI. Internal brick masonry underway on 3rd & 4th levels.',
        images: ['/images/projects/act-uttara.jpg'],
      },
      {
        id: 'cu-1-2',
        projectId: 'proj-1',
        milestoneTitle: 'Basement & Substructure Waterproofing Completed',
        percentageCompleted: 45,
        updateDate: 'April 2026',
        notes: 'Reinforced concrete foundation finished with 100% moisture membrane sealing.',
        images: ['/images/projects/act-uttara.jpg'],
      },
    ],
  },
  {
    id: 'proj-2',
    title: 'Act Vertica',
    slug: 'act-vertica-gulshan',
    tagline: 'A Landmark of Vertical Prestige on North Avenue, Gulshan',
    description: 'Rising commanding over Gulshan 2, Act Vertica is an icon of contemporary luxury. Designed for Dhaka’s business elite and international diplomats, Vertica features soaring double-height living areas, an illuminated sky penthouse terrace, soundproof acoustic double-glazed glass curtain facades, and an ultra-exclusive lifestyle conciergerie.',
    locationId: 'loc-1',
    locationName: 'Gulshan 2',
    address: 'North Avenue, Gulshan 2, Dhaka 1212',
    landAreaKatha: 14.20,
    buildingStoried: '3B + G + 15 Storied',
    totalUnits: 14,
    unitsPerFloor: 1,
    sizeRangeSft: '4,200 – 6,500 sft',
    bedroomRange: '4 - 5 Beds • 5 Baths',
    startingPriceBdt: 12.50, // 12.50 Crores BDT
    status: 'ongoing',
    type: 'penthouse_collection',
    isFeatured: true,
    isFlagship: true,
    rajukApprovalNo: 'RAJUK/GL-2023/1104-SP',
    expectedHandoverDate: 'June 2027',
    currentConstructionProgress: 55,
    heroImage: '/images/projects/act-vertica.jpg',
    galleryImages: [
      '/images/projects/act-vertica.jpg',
      '/images/projects/act-sovereign.jpg',
      '/images/projects/act-luminance.jpg',
    ],
    videoWalkthroughUrl: 'https://www.youtube.com/watch?v=LoH98RHthY4',
    amenities: [
      AMENITIES_CATALOG[0],
      AMENITIES_CATALOG[1],
      AMENITIES_CATALOG[2],
      AMENITIES_CATALOG[3],
      AMENITIES_CATALOG[4],
      AMENITIES_CATALOG[5],
      AMENITIES_CATALOG[6],
      AMENITIES_CATALOG[7],
      AMENITIES_CATALOG[9],
    ],
    floorplans: [
      {
        id: 'fp-2-a',
        projectId: 'proj-2',
        unitTitle: 'Vertica Grand Residence (Levels 3 to 13)',
        sizeSft: 4200,
        bedrooms: 4,
        bathrooms: 5,
        balconies: 4,
        facing: 'Panoramic Lake & City View',
        planImageUrl: '/images/projects/act-vertica.jpg',
        isAvailable: true,
      },
      {
        id: 'fp-2-b',
        projectId: 'proj-2',
        unitTitle: 'Sky Villa Penthouse (Levels 14 & 15)',
        sizeSft: 6500,
        bedrooms: 5,
        bathrooms: 6,
        balconies: 6,
        facing: '360° Unobstructed Skyline View',
        planImageUrl: '/images/projects/act-vertica.jpg',
        isAvailable: true,
      },
    ],
    constructionUpdates: [
      {
        id: 'cu-2-1',
        projectId: 'proj-2',
        milestoneTitle: '9th Floor Superstructure Core Casting Complete',
        percentageCompleted: 55,
        updateDate: 'August 2026',
        notes: 'Central elevator shear core and boundary columns poured according to high-stress BNBC seismic benchmarks.',
        images: ['/images/projects/act-vertica.jpg'],
      },
    ],
  },
  {
    id: 'proj-3',
    title: 'Act Sovereign',
    slug: 'act-sovereign-baridhara',
    tagline: 'Lakeside Minimalist Sanctuary in Baridhara Diplomatic Zone',
    description: 'Set on the edge of the Baridhara Diplomatic Lake, Act Sovereign is inspired by timeless Japanese minimalism. Fair-faced architectural concrete merges with rich natural wood slats, floor-to-ceiling glass, and quiet stone pathways. Offering absolute privacy, high-security embassy-grade surveillance, and a private rooftop infinity pool.',
    locationId: 'loc-2',
    locationName: 'Baridhara Diplomatic Zone',
    address: 'Park Road, Baridhara Diplomatic Zone, Dhaka 1212',
    landAreaKatha: 9.80,
    buildingStoried: '2B + G + 9 Storied',
    totalUnits: 7,
    unitsPerFloor: 1,
    sizeRangeSft: '5,100 sft',
    bedroomRange: '4 Beds • 5 Baths',
    startingPriceBdt: 18.00, // 18.00 Crores BDT
    status: 'ready',
    type: 'residential',
    isFeatured: true,
    isFlagship: true,
    rajukApprovalNo: 'RAJUK/BD-2022/904-DZ',
    expectedHandoverDate: 'Ready for Immediate Handover',
    currentConstructionProgress: 100,
    heroImage: '/images/projects/act-sovereign.jpg',
    galleryImages: [
      '/images/projects/act-sovereign.jpg',
      '/images/projects/act-vertica.jpg',
      '/images/projects/act-uttara.jpg',
    ],
    videoWalkthroughUrl: 'https://www.youtube.com/watch?v=LoH98RHthY4',
    amenities: [
      AMENITIES_CATALOG[0],
      AMENITIES_CATALOG[1],
      AMENITIES_CATALOG[2],
      AMENITIES_CATALOG[3],
      AMENITIES_CATALOG[4],
      AMENITIES_CATALOG[5],
      AMENITIES_CATALOG[6],
      AMENITIES_CATALOG[7],
      AMENITIES_CATALOG[8],
      AMENITIES_CATALOG[9],
    ],
    floorplans: [
      {
        id: 'fp-3-a',
        projectId: 'proj-3',
        unitTitle: 'The Sovereign Lake Suite',
        sizeSft: 5100,
        bedrooms: 4,
        bathrooms: 5,
        balconies: 4,
        facing: 'Baridhara Diplomatic Lake Facing',
        planImageUrl: '/images/projects/act-sovereign.jpg',
        isAvailable: true,
      },
    ],
    constructionUpdates: [
      {
        id: 'cu-3-1',
        projectId: 'proj-3',
        milestoneTitle: 'Final RAJUK Occupancy Certificate Received & Ready for Handover',
        percentageCompleted: 100,
        updateDate: 'May 2026',
        notes: 'Building officially handed over with complete 10-Year Act Facility Management guarantee activated.',
        images: ['/images/projects/act-sovereign.jpg'],
      },
    ],
  },
  {
    id: 'proj-4',
    title: 'Act Luminance',
    slug: 'act-luminance-bashundhara',
    tagline: 'Triple-Side Open Horizon Living in Bashundhara Block I',
    description: 'Located in the most sought-after avenue of Bashundhara Residential Area, Act Luminance occupies a prime corner plot with three open sides ensuring year-round cross-ventilation, radiant south-facing daylight, and serene garden ambiance. Designed for multigenerational comfort and contemporary prestige.',
    locationId: 'loc-4',
    locationName: 'Bashundhara R/A',
    address: 'Avenue 5, Block I, Bashundhara R/A, Dhaka 1229',
    landAreaKatha: 10.00,
    buildingStoried: '2B + G + 10 Storied',
    totalUnits: 18,
    unitsPerFloor: 2,
    sizeRangeSft: '2,450 – 3,200 sft',
    bedroomRange: '3 - 4 Beds • 4 Baths',
    startingPriceBdt: 3.90, // 3.90 Crores BDT
    status: 'ongoing',
    type: 'residential',
    isFeatured: true,
    isFlagship: false,
    rajukApprovalNo: 'RAJUK/BSH-2024/319-K',
    expectedHandoverDate: 'April 2027',
    currentConstructionProgress: 40,
    heroImage: '/images/projects/act-luminance.jpg',
    galleryImages: [
      '/images/projects/act-luminance.jpg',
      '/images/projects/act-uttara.jpg',
      '/images/projects/act-vertica.jpg',
    ],
    videoWalkthroughUrl: 'https://www.youtube.com/watch?v=LoH98RHthY4',
    amenities: [
      AMENITIES_CATALOG[1],
      AMENITIES_CATALOG[2],
      AMENITIES_CATALOG[3],
      AMENITIES_CATALOG[4],
      AMENITIES_CATALOG[5],
      AMENITIES_CATALOG[6],
      AMENITIES_CATALOG[7],
    ],
    floorplans: [
      {
        id: 'fp-4-a',
        projectId: 'proj-4',
        unitTitle: 'Type A - South Open Suite',
        sizeSft: 2450,
        bedrooms: 3,
        bathrooms: 3,
        balconies: 3,
        facing: 'South-Facing Garden View',
        planImageUrl: '/images/projects/act-luminance.jpg',
        isAvailable: true,
      },
      {
        id: 'fp-4-b',
        projectId: 'proj-4',
        unitTitle: 'Type B - Corner Grand Suite',
        sizeSft: 3200,
        bedrooms: 4,
        bathrooms: 4,
        balconies: 4,
        facing: 'East-South Corner Open',
        planImageUrl: '/images/projects/act-luminance.jpg',
        isAvailable: true,
      },
    ],
    constructionUpdates: [
      {
        id: 'cu-4-1',
        projectId: 'proj-4',
        milestoneTitle: 'Basement-1 & Ground Floor Retaining Walls Completed',
        percentageCompleted: 40,
        updateDate: 'July 2026',
        notes: 'Substructure casting finished with double-layer steel reinforcement.',
        images: ['/images/projects/act-luminance.jpg'],
      },
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Tariqul Islam & Farhana Islam',
    clientRole: 'Apartment Owner, Act Sovereign (Baridhara)',
    quote: 'Act Development delivered every detail promised in the architectural rendering—from the German Hansgrohe sanitary fittings to the sound-insulated double-glazed lake facade. Their transparency throughout construction was exemplary.',
    rating: 5,
    isFeatured: true,
  },
  {
    id: 'test-2',
    clientName: 'Al-Haj Mahbubur Rahman Chowdhury',
    clientRole: 'Landowner Partner, Act Vertica (Gulshan 2)',
    quote: 'Entrusting our ancestral plot in Gulshan was an emotional decision. Act Development structured a transparent 50-50 joint venture, maximized our FAR under RAJUK guidelines, and began piling exactly on schedule. A partner of genuine integrity.',
    rating: 5,
    isFeatured: true,
  },
  {
    id: 'test-3',
    clientName: 'Barrister Zulfiqar Haider (NRB Investor, London)',
    clientRole: 'Homeowner, Act Heights (Uttara)',
    quote: 'Investing from the UK can be stressful, but Act’s dedicated NRB Wing arranged everything—from verified remittance processing through Bangladesh Bank to live video construction updates every month. Outstanding professionalism.',
    rating: 5,
    isFeatured: true,
  },
];
