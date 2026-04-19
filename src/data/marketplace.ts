export const services = [
  {
    id: "battery-replacement",
    name: "Battery Replacement",
    category: "Emergency roadside",
    description: "Fast battery diagnostics, replacement, and on-site installation.",
    priceRange: "$120 - $280",
    eta: "20-45 min",
    mobile: true,
  },
  {
    id: "mobile-mechanic",
    name: "Mobile Mechanic",
    category: "General repair",
    description: "On-site diagnostics and quick fixes at home or work.",
    priceRange: "$90 - $220",
    eta: "Same day",
    mobile: true,
  },
  {
    id: "tire-service",
    name: "Tire Service",
    category: "Tires & wheels",
    description: "Tire swap, puncture repair, balancing, and replacement support.",
    priceRange: "$60 - $240",
    eta: "1-3 hours",
    mobile: false,
  },
];

export const providers = [
  {
    slug: "austin-mobile-battery-co",
    companyName: "Austin Mobile Battery Co.",
    rating: 4.9,
    reviews: 312,
    city: "Austin, TX",
    responseTime: "~12 min",
    availability: "Open now",
    services: ["Battery Replacement", "Jump Start", "Alternator Check"],
    description:
      "Trusted mobile battery specialists serving drivers at home, work, or roadside with fast diagnostic support.",
  },
  {
    slug: "rapid-tire-pros",
    companyName: "Rapid Tire Pros",
    rating: 4.7,
    reviews: 188,
    city: "Austin, TX",
    responseTime: "~25 min",
    availability: "Next slot 5:30 PM",
    services: ["Tire Service", "Wheel Balancing", "Flat Tire Repair"],
    description:
      "Reliable tire service partner for same-day repairs and replacements with transparent pricing.",
  },
  {
    slug: "capital-city-mobile-mechanics",
    companyName: "Capital City Mobile Mechanics",
    rating: 4.8,
    reviews: 224,
    city: "Austin, TX",
    responseTime: "~18 min",
    availability: "Open now",
    services: ["Mobile Mechanic", "Brake Check", "Starter Repair"],
    description:
      "Mobile diagnostics and practical repairs for busy drivers who want answers quickly.",
  },
];

export const customerRequests = [
  {
    title: "Battery died at office parking lot",
    status: "Quoted",
    provider: "Austin Mobile Battery Co.",
    scheduled: "Today, 4:30 PM",
  },
  {
    title: "Rear tire slow leak",
    status: "Waiting",
    provider: "Rapid Tire Pros",
    scheduled: "Tomorrow, 10:00 AM",
  },
];

export const providerLeads = [
  {
    customer: "Sarah M.",
    service: "Battery Replacement",
    urgency: "High",
    location: "Downtown Austin",
    status: "Needs quote",
  },
  {
    customer: "James R.",
    service: "Mobile Mechanic",
    urgency: "Medium",
    location: "North Austin",
    status: "Quoted",
  },
];
