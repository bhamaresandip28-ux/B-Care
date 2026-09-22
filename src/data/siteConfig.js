/**
 * B-Care Centralized Site Configuration
 * 
 * NO-HALLUCINATION RULE (Section 7 & 44):
 * Never invent phone numbers, addresses, emails, prices, patent numbers, or links.
 * Verified real information provided by Poonam Sandip Bhamre will populate these fields.
 */

export const siteConfig = {
  brandName: "B-Care",
  tagline: "Comfort. Care. Confidence. Every Day.",
  description: "Discover B-Care sanitary pads designed with comfort, coverage and affordability in mind. Made with 100% pure cotton.",
  
  // Owner & Business Information
  ownerName: "Poonam Sandip Bhamre",
  ownerRole: "Owner, B-Care",
  ownerPhone: null, // [OWNER PHONE]
  ownerWhatsApp: null, // [OWNER WHATSAPP]
  ownerEmail: null, // [OWNER EMAIL]
  businessAddress: null, // [BUSINESS ADDRESS]

  // Online Marketplaces (Global fallbacks)
  amazonUrl: null, // [AMAZON LINK]
  meeshoUrl: null, // [MEESHO LINK]

  // Demonstration & Innovation
  demoVideoUrl: null, // [ABSORPTION DEMO VIDEO]
  patentStatus: "Patented Product*",
  patentNumber: null, // [PATENT NUMBER]
  patentDocumentUrl: null,

  // Verified Claims (Section 6)
  verifiedClaims: [
    {
      id: "cotton",
      title: "100% Pure Cotton*",
      description: "Made with 100% pure cotton top sheet for a soft, breathable, and comfortable experience."
    },
    {
      id: "patented",
      title: "Patented Product*",
      description: "Engineered with patented product technology designed for everyday comfort and hygiene."
    },
    {
      id: "affordable",
      title: "Affordable Choice*",
      description: "High-quality feminine care positioned as an accessible, budget-friendly option for women."
    },
    {
      id: "sizes",
      title: "XL & XXL Sizes",
      description: "Available in two purposeful sizes tailored for standard and extra-extended coverage."
    },
    {
      id: "packs",
      title: "Flexible Pack Options",
      description: "Available in convenient 6-piece portable packs and high-value 40-piece Jumbo packs."
    },
    {
      id: "demo",
      title: "Absorption Tested*",
      description: "Watch our product demonstration video to see real-time absorption performance."
    }
  ],

  // WhatsApp Pre-filled Messages (Section 26 & 34)
  whatsAppMessages: {
    general: "Hello, I would like to know more about B-Care sanitary pads.",
    product: (productName) => `Hello, I am interested in ${productName || "B-Care sanitary pads"}.`,
    wholesale: "Hello, I am interested in purchasing B-Care products in bulk. I would like to know about wholesale ordering.",
    dealer: "Hello, I am interested in becoming a B-Care dealer in my city."
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Why B-Care", href: "/why-b-care" },
    { label: "Demo", href: "/demo" },
    { label: "About", href: "/about" },
    { label: "Wholesale & Dealership", href: "/wholesale-dealership" },
    { label: "Contact", href: "/contact" }
  ]
};

export default siteConfig;
