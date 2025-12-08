// Mock data for Sun Enterprises Corporate Travel Services

export const companyInfo = {
  name: "Sun Enterprises",
  tagline: "Corporate Travel Excellence",
  description: "Premier corporate cab services for MNCs and businesses in Chennai. Reliable, professional, and punctual transportation solutions.",
  landline: "+914445867657",
  mobile: ["9600616613", "8072747751"],
  email: "suncabs2023@gmail.com",
  address: "No 18, Swami Nagar, Kolathur, Chennai - 600099",
  gst: "33AFHFS3256C1Z8",
  whatsapp: "919600616613"
};

export const services = [
  {
    id: 1,
    title: "Monthly Contracts",
    description: "Dedicated fleet and drivers for your organization with fixed monthly packages tailored to your employee transportation needs.",
    icon: "Calendar"
  },
  {
    id: 2,
    title: "Daily On-Demand",
    description: "Flexible daily cab bookings for meetings, airport transfers, and ad-hoc corporate travel requirements.",
    icon: "Clock"
  },
  {
    id: 3,
    title: "Employee Transportation",
    description: "Comprehensive employee pick-up and drop services with GPS tracking and real-time updates for HR teams.",
    icon: "Users"
  },
  {
    id: 4,
    title: "Airport Transfers",
    description: "Reliable airport pick-up and drop services for executives and business travelers with flight tracking.",
    icon: "Plane"
  },
  {
    id: 5,
    title: "Event Transportation",
    description: "Large-scale transportation solutions for corporate events, conferences, and team outings.",
    icon: "Building"
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Round-the-clock customer support and dedicated account managers for seamless service delivery.",
    icon: "Headphones"
  }
];

export const fleet = [
  {
    id: 1,
    category: "Sedan",
    model: "Swift Dzire",
    capacity: "4 Seater",
    features: ["AC", "Music System", "Comfortable Seats"],
    ideal: "Daily commute, airport transfers",
    image: "https://images.unsplash.com/photo-1764090317623-06968349ad23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNoYXVmZmV1cnxlbnwwfHx8fDE3NjUxOTY3OTR8MA&ixlib=rb-4.1.0&q=85&w=600"
  },
  {
    id: 2,
    category: "Prime Sedan",
    model: "Toyota Etios",
    capacity: "4 Seater",
    features: ["AC", "Premium Interiors", "Extra Legroom"],
    ideal: "Executive travel, client meetings",
    image: "https://images.unsplash.com/photo-1764605206511-7a649d9df63b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbnxlbnwwfHx8fDE3NjUxOTY3OTl8MA&ixlib=rb-4.1.0&q=85&w=600"
  },
  {
    id: 3,
    category: "SUV",
    model: "Ertiga / Xylo",
    capacity: "6-7 Seater",
    features: ["AC", "Spacious", "Luggage Space"],
    ideal: "Group travel, family trips",
    image: "https://images.unsplash.com/photo-1707407772603-274cc5cf18f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBzZWRhbnxlbnwwfHx8fDE3NjUxOTY3OTl8MA&ixlib=rb-4.1.0&q=85&w=600"
  },
  {
    id: 4,
    category: "Prime SUV",
    model: "Innova",
    capacity: "7 Seater",
    features: ["AC", "Premium Comfort", "Entertainment System"],
    ideal: "VIP travel, long journeys",
    image: "https://images.unsplash.com/photo-1764089859664-30aa6919ef0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBzZWRhbnxlbnwwfHx8fDE3NjUxOTY3OTl8MA&ixlib=rb-4.1.0&q=85&w=600"
  },
  {
    id: 5,
    category: "Premium SUV",
    model: "Innova Crysta",
    capacity: "7 Seater",
    features: ["AC", "Luxury Interiors", "Captain Seats", "Touchscreen"],
    ideal: "C-Suite executives, premium clients",
    image: "https://images.unsplash.com/photo-1667846390709-d2104b2c8c66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGNoYXVmZmV1cnxlbnwwfHx8fDE3NjUxOTY3OTR8MA&ixlib=rb-4.1.0&q=85&w=600"
  },
  {
    id: 6,
    category: "Mini Bus",
    model: "Force Traveller",
    capacity: "12-20 Seater",
    features: ["AC", "Push-back Seats", "PA System", "Luggage Compartment"],
    ideal: "Team outings, corporate events",
    image: "https://images.unsplash.com/photo-1696992443043-7d63e521b91c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGNoYXVmZmV1cnxlbnwwfHx8fDE3NjUxOTY3OTR8MA&ixlib=rb-4.1.0&q=85&w=600"
  }
];

export const packages = [
  {
    id: 1,
    name: "1 Hour Package",
    duration: "1 Hour",
    kmIncluded: "10 KM",
    vehicleTypes: ["Sedan", "Prime Sedan"],
    ideal: "Quick meetings, short trips"
  },
  {
    id: 2,
    name: "2 Hour Package",
    duration: "2 Hours",
    kmIncluded: "20 KM",
    vehicleTypes: ["Sedan", "Prime Sedan", "SUV"],
    ideal: "Business meetings, local travel"
  },
  {
    id: 3,
    name: "4 Hour Package",
    duration: "4 Hours",
    kmIncluded: "40 KM",
    vehicleTypes: ["All Vehicles"],
    ideal: "Half-day requirements, multiple stops"
  },
  {
    id: 4,
    name: "8 Hour Package",
    duration: "8 Hours",
    kmIncluded: "80 KM",
    vehicleTypes: ["All Vehicles"],
    ideal: "Full day corporate travel"
  },
  {
    id: 5,
    name: "12 Hour Package",
    duration: "12 Hours",
    kmIncluded: "120 KM",
    vehicleTypes: ["All Vehicles"],
    ideal: "Extended business day, events"
  },
  {
    id: 6,
    name: "Full Day Package",
    duration: "24 Hours",
    kmIncluded: "250 KM",
    vehicleTypes: ["All Vehicles"],
    ideal: "Outstation, full day disposal"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "HR Manager, TCS Chennai",
    content: "Sun Enterprises has been our trusted partner for employee transportation for over 3 years. Their reliability and professionalism is unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Venkatesh",
    designation: "Admin Head, Infosys",
    content: "Excellent fleet management and on-time service. The monthly contract option has simplified our corporate travel significantly.",
    rating: 5
  },
  {
    id: 3,
    name: "Suresh Balaji",
    designation: "Operations Director, Cognizant",
    content: "We've been using Sun Enterprises for our executive airport transfers. Professional drivers and well-maintained vehicles every time.",
    rating: 5
  }
];

export const stats = [
  { value: "500+", label: "Corporate Clients" },
  { value: "50+", label: "Fleet Vehicles" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" }
];

export const whyChooseUs = [
  {
    title: "Professional Drivers",
    description: "Trained, verified, and courteous drivers with excellent city knowledge"
  },
  {
    title: "Well-Maintained Fleet",
    description: "Regularly serviced and sanitized vehicles ensuring comfort and safety"
  },
  {
    title: "GPS Tracking",
    description: "Real-time vehicle tracking for complete transparency and security"
  },
  {
    title: "Flexible Billing",
    description: "Customized billing options - monthly, weekly, or per-trip basis"
  },
  {
    title: "Dedicated Support",
    description: "Assigned account managers for seamless coordination"
  },
  {
    title: "Competitive Rates",
    description: "Best-in-class pricing with no hidden charges"
  }
];
