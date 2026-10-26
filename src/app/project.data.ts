export interface PropertyProject {
  slug: string;
  name: string;
  region: string;
  area: string;
  developer: string;
  configuration: string;
  description: string;
  image: string;
  sourceUrl: string;
  facts: { label: string; value: string }[];
  overview: string;
  highlights: string[];
  amenities: string[];
  connectivity: string[];
}

export const PROJECT_LOCATIONS = [
  'Noida Extension',
  'Sector 150 Noida Expressway',
  'Yamuna Expressway'
];

export const PROPERTY_PROJECTS: PropertyProject[] = [
  {
    slug: 'sobha-rivana',
    name: 'SOBHA Rivana',
    region: PROJECT_LOCATIONS[0],
    area: 'Sector 1, Greater Noida',
    developer: 'SOBHA',
    configuration: '3 BHK and 4 BHK residences',
    description: 'A residential development with 40+ leisure amenities and a three-storey, 35,000 sq. ft. clubhouse, as described by the developer.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://www.sobha.com/delhi-ncr/sobha-rivana-sector-1-greater-noida/',
    facts: [
      { label: 'Location', value: 'Sector 1, Greater Noida' },
      { label: 'Developer', value: 'SOBHA' },
      { label: 'Homes', value: '3 and 4 BHK' },
      { label: 'Clubhouse', value: '35,000 sq. ft. across three levels' }
    ],
    overview: 'SOBHA Rivana is a residential community in Sector 1, Greater Noida. The developer highlights a multi-level clubhouse and a broad collection of indoor and outdoor leisure spaces.',
    highlights: ['40+ leisure amenities', 'Three-storey clubhouse', 'Outdoor activity and landscaped zones'],
    amenities: ['Badminton courts', 'Book club', 'Steam and sauna', 'Co-working space', 'Parks and plazas', 'Picnic and barbecue deck'],
    connectivity: []
  },
  {
    slug: 'crc-maesta',
    name: 'CRC Maesta',
    region: PROJECT_LOCATIONS[0],
    area: 'Sector 1, Greater Noida West',
    developer: 'CRC Group',
    configuration: '3 BHK and 4 BHK apartments',
    description: 'A residential community with landscaped common areas and a clubhouse.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://www.crcgroup.in/maesta/',
    facts: [
      { label: 'Location', value: 'Sector 1, Greater Noida West' },
      { label: 'Developer', value: 'CRC Group' },
      { label: 'Homes', value: '3 and 4 BHK' },
      { label: 'UP RERA', value: 'UPRERAPRJ724518/07/2024' },
      { label: 'Registered completion date', value: '21 May 2029' }
    ],
    overview: 'CRC Maesta is a residential project in Sector 1, Greater Noida West. The developer describes landscaped common areas and a clubhouse. The project is registered with UP RERA.',
    highlights: ['Vehicle-free ground-level areas', 'Landscaped common spaces', 'Gated community'],
    amenities: ['Clubhouse', 'Dedicated parking', '24-hour security'],
    connectivity: []
  },
  {
    slug: 'fusion-the-brook',
    name: 'Fusion The Brook',
    region: PROJECT_LOCATIONS[0],
    area: 'Greater Noida',
    developer: 'Fusion Group',
    configuration: 'Contact for configuration details',
    description: 'A newly launched, under-construction residential project by Fusion Group in Greater Noida.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://fusionthebrook.com/',
    facts: [
      { label: 'Location', value: 'Greater Noida' },
      { label: 'Developer', value: 'Fusion Group' },
      { label: 'Status', value: 'Under construction' },
      { label: 'UP RERA (Phase 1)', value: 'UPRERAPRJ228846' },
      { label: 'UP RERA (Phase 2)', value: 'UPRERAPRJ535539/09/2024' }
    ],
    overview: 'Fusion Group lists The Brook among its newly launched residential developments in Greater Noida. Contact AKS PropRealty for the current brochure, unit plans and availability.',
    highlights: [],
    amenities: [],
    connectivity: []
  },
  {
    slug: 'fusion-the-rivulet',
    name: 'Fusion The Rivulet',
    region: PROJECT_LOCATIONS[0],
    area: 'Greater Noida',
    developer: 'Fusion Group',
    configuration: 'Contact for configuration details',
    description: 'A newly launched, under-construction residential project by Fusion Group in Greater Noida.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://fusionlimited.in/about-us',
    facts: [
      { label: 'Location', value: 'Greater Noida' },
      { label: 'Developer', value: 'Fusion Group' },
      { label: 'Status', value: 'Under construction' }
    ],
    overview: 'Fusion Group lists The Rivulet among its newly launched residential developments in Greater Noida. Contact AKS PropRealty for the current brochure, unit plans and availability.',
    highlights: [],
    amenities: [],
    connectivity: []
  },
  {
    slug: 'ace-arte',
    name: 'ACE ARTE',
    region: PROJECT_LOCATIONS[1],
    area: 'Contact for verified project location',
    developer: 'ACE Group',
    configuration: 'Contact for verified configuration details',
    description: 'Contact AKS PropRealty for current ACE ARTE plans and project details.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://acegroupindia.com/',
    facts: [
      { label: 'Location', value: 'Contact for verified information' },
      { label: 'Developer', value: 'ACE Group' },
      { label: 'Project details', value: 'Contact for verified information' }
    ],
    overview: 'Contact AKS PropRealty for the current project brochure, specifications and availability. Confirm the project location, configuration and registration details against current developer and UP RERA records before making a decision.',
    highlights: [],
    amenities: [],
    connectivity: []
  },
  {
    slug: 'prateek-canary',
    name: 'Prateek Canary',
    region: PROJECT_LOCATIONS[1],
    area: 'Plot SC-02/A7, Sector 150, Noida',
    developer: 'Prateek Group',
    configuration: 'Contact for verified configuration details',
    description: 'A residential development at Plot SC-02/A7, Sector 150, Noida.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://prateekgroup.com/prateek-canary/',
    facts: [
      { label: 'Location', value: 'Plot SC-02/A7, Sector 150, Noida' },
      { label: 'Developer', value: 'Prateek Group' },
      { label: 'Connectivity', value: 'Noida–Greater Noida Expressway and DND Flyway' }
    ],
    overview: 'Prateek Canary is located at Plot SC-02/A7 in Sector 150, Noida. The developer highlights access to the Noida–Greater Noida Expressway, DND Flyway, nearby metro stations, shopping centres and hospitals.',
    highlights: ['Plot SC-02/A7, Sector 150', 'Access to major roads and nearby social infrastructure'],
    amenities: [],
    connectivity: ['Noida–Greater Noida Expressway', 'DND Flyway', 'Nearby metro stations', 'Shopping centres and hospitals']
  },
  {
    slug: 'samridhi-daksh-avenue',
    name: 'Samridhi Daksh Avenue',
    region: PROJECT_LOCATIONS[1],
    area: 'Sector 150, Noida',
    developer: 'Samridhi Group',
    configuration: '3 BHK and 4 BHK apartments and penthouses',
    description: 'A Sector 150 residential development featuring landscaped greens, clubhouse facilities and wellness spaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://samridhigroup.co.in/daksh-avenue/overview.php',
    facts: [
      { label: 'Location', value: 'Sector 150, Noida' },
      { label: 'Developer', value: 'Samridhi Group' },
      { label: 'Homes', value: '3 and 4 BHK; penthouses' },
      { label: 'UP RERA', value: 'UPRERAPRJ155408' }
    ],
    overview: 'Samridhi Daksh Avenue offers apartments and penthouses in Sector 150, Noida. The developer highlights a low-density setting, landscaped greens, wellness areas and access to the Noida–Greater Noida Expressway.',
    highlights: ['Low-density planning', 'Landscaped greens', 'Near the Noida–Greater Noida Expressway'],
    amenities: ['Clubhouse', 'Wellness zones', 'Leisure spaces', 'Open areas'],
    connectivity: ['Noida–Greater Noida Expressway', 'Metro stations', 'Schools and malls', 'Business hubs']
  },
  {
    slug: 'ace-terra',
    name: 'ACE Terra',
    region: PROJECT_LOCATIONS[2],
    area: 'Sector 22D, Yamuna Expressway',
    developer: 'ACE Group',
    configuration: '3 BHK and 4 BHK apartments',
    description: 'A residential community with landscaped green spaces, water features and homes with spacious decks.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://acegroupindia.com/ace-terra.php',
    facts: [
      { label: 'Location', value: 'Sector 22D, Yamuna Expressway' },
      { label: 'Developer', value: 'ACE Group' },
      { label: 'Homes', value: '3 and 4 BHK' },
      { label: 'Towers', value: '12 towers, 25 storeys each' }
    ],
    overview: 'ACE Terra is a residential project on the Yamuna Expressway. The developer presents the project around landscaped open spaces, water features and spacious decks.',
    highlights: ['12 towers of 25 storeys', 'Homes with spacious decks', 'Landscaped greens and water features'],
    amenities: ['Club Spade', 'Lifestyle amenities', 'Green spaces', 'Water features'],
    connectivity: ['Yamuna Expressway']
  },
  {
    slug: 'purvanchal-sunbliss',
    name: 'Purvanchal Sunbliss',
    region: PROJECT_LOCATIONS[2],
    area: 'Yamuna Expressway',
    developer: 'Contact for project details',
    configuration: 'Contact for configuration details',
    description: 'Contact AKS PropRealty for the current project brochure, location details and availability.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://purvanchalprojects.com/',
    facts: [
      { label: 'Area', value: 'Yamuna Expressway' },
      { label: 'Project information', value: 'Contact AKS PropRealty' }
    ],
    overview: 'Contact AKS PropRealty for the current project brochure and verified information about location, plans and availability.',
    highlights: [],
    amenities: [],
    connectivity: []
  },
  {
    slug: 'nimbus-the-palm-village',
    name: 'Nimbus The Palm Village',
    region: PROJECT_LOCATIONS[2],
    area: 'Sector 22A, Yamuna Expressway, Greater Noida',
    developer: 'Nimbus Group',
    configuration: 'Contact for configuration details',
    description: 'Contact AKS PropRealty for current project information and availability.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://nimbusgroup.net/nimbus-the-palm-village/',
    facts: [
      { label: 'Location', value: 'Sector 22A, Yamuna Expressway, Greater Noida' },
      { label: 'Developer', value: 'IITL-Nimbus The Palm Village' },
      { label: 'UP RERA', value: 'UPRERAPRJ558356/04/2024' }
    ],
    overview: 'The project is registered with UP RERA as IITL-Nimbus The Palm Village. The developer advises buyers to independently confirm project plans, specifications, amenities and other details before making a purchase decision. Contact AKS PropRealty for current information.',
    highlights: [],
    amenities: [],
    connectivity: []
  },
  {
    slug: 'gaur-alaris',
    name: 'Gaur Alaris',
    region: PROJECT_LOCATIONS[2],
    area: 'Yamuna Expressway',
    developer: 'Contact for project details',
    configuration: 'Contact for configuration details',
    description: 'Contact AKS PropRealty for current project details and availability.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://www.gaursonsindia.com/',
    facts: [
      { label: 'Area', value: 'Yamuna Expressway' },
      { label: 'Project information', value: 'Contact AKS PropRealty' }
    ],
    overview: 'Contact AKS PropRealty for the current brochure and confirmed project information, including location, unit plans and availability.',
    highlights: [],
    amenities: [],
    connectivity: []
  },
  {
    slug: 'gaur-chrysalis',
    name: 'Gaur Chrysalis',
    region: PROJECT_LOCATIONS[2],
    area: 'Sector 22D, Yamuna Expressway',
    developer: 'Gaurs Group',
    configuration: '3 BHK and 4 BHK apartments',
    description: 'A residential project in Sector 22D offering 3 and 4 BHK apartments.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
    sourceUrl: 'https://www.gaurcity2.com/Gaur-Chrysalis/',
    facts: [
      { label: 'Location', value: 'Sector 22D, Yamuna Expressway' },
      { label: 'Developer', value: 'Gaurs Group' },
      { label: 'Homes', value: '3 and 4 BHK apartments' },
      { label: 'UP RERA', value: 'UPRERAPRJ622344/11/2025 (Phase 1)' }
    ],
    overview: 'Gaur Chrysalis Phase 1 is a residential project in Sector 22D, Yamuna Expressway. The project information lists 3 and 4 BHK apartments. Confirm the current approved plans, amenities and registration details with the developer and UP RERA.',
    highlights: [],
    amenities: [],
    connectivity: []
  }
];
