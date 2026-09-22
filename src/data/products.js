/**
 * B-Care Centralized Product Data
 * 
 * CRITICAL RULE (Section 3 & 43 of Master Specification):
 * B-Care currently has ONLY TWO SIZES (XL and XXL) and TWO PACK SIZES (6 Pieces and 40 Pieces Jumbo).
 * Exactly FOUR variants exist. Never invent Regular, Medium, Large, XXXL, or other pack sizes.
 * 
 * NO-HALLUCINATION RULE:
 * Prices and marketplace links must remain null until real values are provided by the business owner.
 */

export const products = [
  {
    id: "bc-xl-6",
    name: "B-Care XL",
    size: "XL",
    packType: "6 Pieces",
    quantity: 6,
    badge: "XL • 6 PIECES",
    price: null, // [XL 6-PIECE PRICE] - To be provided
    pricePlaceholder: "[XL 6-PIECE PRICE]",
    amazonUrl: null, // [XL 6-PIECE AMAZON LINK] - To be provided
    meeshoUrl: null, // [XL 6-PIECE MEESHO LINK] - To be provided
    image: null, // Asset path when real photograph is provided
    material: "100% Pure Cotton*",
    description: "Designed for daily comfort and reliable coverage with 100% pure cotton top layer.",
    features: [
      "100% Pure Cotton* top layer",
      "Comfort-fit XL coverage",
      "6-piece compact pack",
      "Patented product technology*",
      "Affordable everyday choice*"
    ]
  },
  {
    id: "bc-xl-40",
    name: "B-Care XL Jumbo",
    size: "XL",
    packType: "Jumbo",
    quantity: 40,
    badge: "JUMBO • 40 PIECES",
    isJumbo: true,
    price: null, // [XL JUMBO PRICE] - To be provided
    pricePlaceholder: "[XL JUMBO PRICE]",
    amazonUrl: null, // [XL JUMBO AMAZON LINK] - To be provided
    meeshoUrl: null, // [XL JUMBO MEESHO LINK] - To be provided
    image: null,
    material: "100% Pure Cotton*",
    description: "Economy value pack offering 40 XL pads with premium pure cotton comfort and protection.",
    features: [
      "100% Pure Cotton* top layer",
      "Comfort-fit XL coverage",
      "Jumbo 40-piece value pack",
      "Patented product technology*",
      "Affordable everyday choice*"
    ]
  },
  {
    id: "bc-xxl-6",
    name: "B-Care XXL",
    size: "XXL",
    packType: "6 Pieces",
    quantity: 6,
    badge: "XXL • 6 PIECES",
    price: null, // [XXL 6-PIECE PRICE] - To be provided
    pricePlaceholder: "[XXL 6-PIECE PRICE]",
    amazonUrl: null, // [XXL 6-PIECE AMAZON LINK] - To be provided
    meeshoUrl: null, // [XXL 6-PIECE MEESHO LINK] - To be provided
    image: null,
    material: "100% Pure Cotton*",
    description: "Extra-long XXL design engineered for enhanced coverage, heavy flow days, and overnight peace of mind.",
    features: [
      "100% Pure Cotton* top layer",
      "Extended XXL coverage",
      "6-piece pack",
      "Patented product technology*",
      "Affordable everyday choice*"
    ]
  },
  {
    id: "bc-xxl-40",
    name: "B-Care XXL Jumbo",
    size: "XXL",
    packType: "Jumbo",
    quantity: 40,
    badge: "JUMBO • 40 PIECES",
    isJumbo: true,
    price: null, // [XXL JUMBO PRICE] - To be provided
    pricePlaceholder: "[XXL JUMBO PRICE]",
    amazonUrl: null, // [XXL JUMBO AMAZON LINK] - To be provided
    meeshoUrl: null, // [XXL JUMBO MEESHO LINK] - To be provided
    image: null,
    material: "100% Pure Cotton*",
    description: "Complete peace of mind with 40 extended XXL sanitary pads featuring pure cotton comfort.",
    features: [
      "100% Pure Cotton* top layer",
      "Extended XXL coverage",
      "Jumbo 40-piece value pack",
      "Patented product technology*",
      "Affordable everyday choice*"
    ]
  }
];

export default products;
