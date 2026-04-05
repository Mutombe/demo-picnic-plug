export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Picnic Plug",
    legalName: "Picnic Plug",
    tagline: "Plug Into the Perfect Outdoor Experience.",
    description:
      "Picnic Plug is Harare's innovative outdoor recreation and pool venue. We combine stunning pool facilities, lush gardens, and creative event spaces to deliver unforgettable picnic and party experiences.",
    phone: "+263 77 819 4904",
    phoneRaw: "+263778194904",
    whatsappNumber: "263778194904",
    email: "hello@picnicplug.co.zw",
    address: "64 Bradfield Rd, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.3,
    ratingRounded: 4,
    reviewCount: 43,
    established: "2018",
    yearsExperience: "6+",
    projectsCompleted: "2,000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "picnic-plug-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/picnicplug/",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Picnic",
    logoLine2: "Plug",
  },

  hero: {
    badge: "Harare's Ultimate Outdoor Recreation Destination",
    titleParts: [
      { text: "PLUG INTO " },
      { text: "THE PERFECT", highlight: true },
      { text: " OUTDOOR EXPERIENCE." },
    ],
    subtitle:
      "Crystal-clear pools, lush garden spaces, and creative event setups. Picnic Plug is where Harare comes to celebrate, relax, and make memories.",
    ctaPrimary: "Book Your Day",
    ctaSecondary: "See Packages",
    trustBadge: "2,000+ Gatherings Hosted",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=1920&q=85", alt: "Picnic Plug professional image 1" },
      { url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=85", alt: "Picnic Plug professional image 2" },
      { url: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=1920&q=85", alt: "Picnic Plug showcase" },
    ],
  },

  stats: [
    { number: "2000+", label: "Events Hosted" },
    { number: "6+", label: "Years Running" },
    { number: "200", label: "Max Guests" },
    { number: "43", label: "Google Reviews" },
  ],

  servicesPreview: [
    {
      title: "Pool Parties",
      desc: "Crystal-clear pools with sun loungers, poolside bars, and Bluetooth sound systems for the ultimate pool day experience.",
      icon: "Buildings",
    },
    {
      title: "Picnic Setups",
      desc: "Styled picnic packages with rugs, cushions, baskets, and fairy lights for romantic dates, birthdays, and friend gatherings.",
      icon: "Leaf",
    },
    {
      title: "Birthday Celebrations",
      desc: "Full party packages with pool access, decor, music, and optional catering for milestone birthdays.",
      icon: "Star",
    },
    {
      title: "Bridal Showers",
      desc: "Elegant poolside bridal shower setups with champagne service, decor, and photography-ready backdrops.",
      icon: "Heart",
    },
    {
      title: "Corporate Team Days",
      desc: "Team-building and company fun days with pool access, braai facilities, and organized activities.",
      icon: "Lightbulb",
    },
    {
      title: "Kids Parties",
      desc: "Safe, supervised pool fun with themed decorations, games, and age-appropriate entertainment packages.",
      icon: "Wrench",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Pool Parties",
        slug: "pool-parties",
        desc: "Crystal-clear pools with sun loungers, poolside bars, and Bluetooth sound systems for the ultimate pool day experience.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
      },
      {
        title: "Picnic Setups",
        slug: "picnic-setups",
        desc: "Styled picnic packages with rugs, cushions, baskets, and fairy lights for romantic dates, birthdays, and friend gatherings.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
      {
        title: "Birthday Celebrations",
        slug: "birthday-celebrations",
        desc: "Full party packages with pool access, decor, music, and optional catering for milestone birthdays.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
      },
      {
        title: "Bridal Showers",
        slug: "bridal-showers",
        desc: "Elegant poolside bridal shower setups with champagne service, decor, and photography-ready backdrops.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
      {
        title: "Corporate Team Days",
        slug: "corporate-team-days",
        desc: "Team-building and company fun days with pool access, braai facilities, and organized activities.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
      },
      {
        title: "Kids Parties",
        slug: "kids-parties",
        desc: "Safe, supervised pool fun with themed decorations, games, and age-appropriate entertainment packages.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Picnic",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in pool parties.",
        client: "Commercial Client",
        services: ["Pool Parties", "Picnic Setups"],
        image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Picnic",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in picnic setups.",
        client: "Residential Client",
        services: ["Picnic Setups", "Birthday Celebrations"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Picnic",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in birthday celebrations.",
        client: "Industrial Client",
        services: ["Birthday Celebrations", "Bridal Showers"],
        image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Picnic",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in bridal showers.",
        client: "Institutional Client",
        services: ["Bridal Showers", "Corporate Team Days"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Picnic",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in corporate team days.",
        client: "Commercial Client",
        services: ["Corporate Team Days", "Kids Parties"],
        image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Picnic",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in kids parties.",
        client: "Residential Client",
        services: ["Kids Parties", "Pool Parties"],
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
          "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Picnic Plug made my birthday so special. The pool was perfect, the picnic setup was gorgeous, and the staff were incredibly attentive.",
      name: "Tatenda Chikore",
      role: "Birthday Celebrant",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "Best pool venue in Harare hands down. We bring the kids here every holidays and they love it. Clean, safe, and fun.",
      name: "Mercy Ndlovu",
      role: "Regular Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "My bridal shower at Picnic Plug was straight out of Pinterest. The team nailed the colour theme and the champagne tower was a beautiful touch.",
      name: "Rudo Mapuranga",
      role: "Bride-to-Be",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "We did our company team day here and it was the best one yet. Pool, braai, games -- perfect combination for team bonding.",
      name: "Charles Munatsi",
      role: "HR Manager, EcoCash",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Picnic Plug started with a simple idea: give Harare a fun, affordable, and beautiful outdoor space to celebrate life's moments. Since 2018, our Bradfield Road property has become the city's favourite spot for pool parties and styled picnics.",
      "What sets Picnic Plug apart is our attention to the details that make gatherings special -- curated setups, quality facilities, and a team that genuinely cares about your experience. Over 2,000 gatherings and counting.",
    ],
    values: [
      { title: "Instagram-Ready Setups", desc: "Every picnic and party setup is styled for both enjoyment and photography. Your feed will thank you." },
      { title: "All-Inclusive Packages", desc: "Pool access, setup, decor, and cleanup all included. You just arrive and enjoy." },
      { title: "Safe & Secure", desc: "Lifeguards on duty, secure parking, and well-maintained facilities for total peace of mind." },
      { title: "Flexible Booking", desc: "Half-day and full-day options. Weekday specials for budget-conscious celebrations." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Picnic Plug made my birthday so special. The pool was perfect, the picnic setup was gorgeous, and the staff were incredibly attentive.", name: "Tatenda Chikore", role: "Birthday Celebrant", rating: 5 },
      { text: "Best pool venue in Harare hands down. We bring the kids here every holidays and they love it. Clean, safe, and fun.", name: "Mercy Ndlovu", role: "Regular Client", rating: 5 },
      { text: "My bridal shower at Picnic Plug was straight out of Pinterest. The team nailed the colour theme and the champagne tower was a beautiful touch.", name: "Rudo Mapuranga", role: "Bride-to-Be", rating: 5 },
      { text: "We did our company team day here and it was the best one yet. Pool, braai, games -- perfect combination for team bonding.", name: "Charles Munatsi", role: "HR Manager, EcoCash", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Picnic Plug",
        address: "64 Bradfield Rd, Harare, Zimbabwe",
        phone: "+263 77 819 4904",
        email: "hello@picnicplug.co.zw",
      },
    ],
  },

  homeCta: {
    title: "MAKE IT A SPLASH",
    subtitle: "Your perfect outdoor celebration is one booking away. Pool parties, styled picnics, and unforgettable moments at Picnic Plug.",
    ctaPrimary: "Book Your Day",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Picnic Plug! I want to book a pool party/picnic.",
    backgroundImage: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=1920&q=85",
  },

  footer: {
    description: "Picnic Plug is Harare's innovative outdoor recreation and pool venue. We combine stunning pool facilities, lush gardens, and creative event spaces to ...",
    copyright: "Picnic Plug",
  },
};

export default siteData;
