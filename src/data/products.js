/**
 * B-Care Centralized Product Data
 * 
 * CRITICAL RULE (Section 3 & 43 of Master Specification):
 * B-Care currently has ONLY TWO SIZES (XL and XXL) and TWO PACK SIZES (6 Pieces and 40 Pieces Jumbo).
 * Exactly FOUR variants exist. Never invent Regular, Medium, Large, XXXL, or other pack sizes.
 * 
 * VERIFIED REAL BUSINESS DATA:
 * - XL Jumbo (40 Pack): ₹310.00 (Amazon & Meesho listed)
 * - XXL Jumbo (40 Pack): ₹350.00 (Amazon & Meesho listed)
 * - 6-Piece packs: To be provided upon official listing.
 */

export const products = [
  {
    id: "bc-xl-6",
    name: "B-Care XL",
    size: "XL",
    packType: "6 Pieces",
    quantity: 6,
    badge: "XL • 6 PIECES",
    price: null, // [XL 6-PIECE PRICE] - To be provided upon listing
    pricePlaceholder: "[XL 6-PIECE PRICE]",
    amazonUrl: null, // [XL 6-PIECE AMAZON LINK] - To be provided
    meeshoUrl: null, // [XL 6-PIECE MEESHO LINK] - To be provided
    image: null,
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
    price: 310,
    pricePlaceholder: "₹310.00",
    amazonUrl: "https://www.amazon.in/gp/product/B0GW3WD6T5/ref=cx_skuctr_share?smid=A27NREX63SN9IU",
    meeshoUrl: "https://www.meesho.com/s/p/e4qfzf?utm_source=s_w",
    image: null,
    material: "100% Pure Cotton*",
    description: "B-Care Ultra Cottony XL Sanitary Pads with Wings, Super Absorbent Gel Technology, Jumbo Pack of 40.",
    features: [
      "100% Pure Cotton* top layer (Ultra Cottony)",
      "Super Absorbent Gel Technology",
      "Flexible wings for secure hold",
      "Jumbo 40-piece economy value pack",
      "Patented product technology*"
    ]
  },
  {
    id: "bc-xxl-6",
    name: "B-Care XXL",
    size: "XXL",
    packType: "6 Pieces",
    quantity: 6,
    badge: "XXL • 6 PIECES",
    price: null, // [XXL 6-PIECE PRICE] - To be provided upon listing
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
    price: 350,
    pricePlaceholder: "₹350.00",
    amazonUrl: "https://www.amazon.in/gp/product/B0GW43SRF5/ref=cx_skuctr_share_ls_srb?smid=A27NREX63SN9IU&tag=ShopReferral_59a5e461-5ce9-4b42-bd47-8c477eb2319d",
    meeshoUrl: "https://www.meesho.com/s/p/e9bx6r?utm_source=s_w",
    image: null,
    material: "100% Pure Cotton*",
    description: "B-Care XXL Sanitary Pads for Women, Ultra Cottony Soft, Heavy Flow, Gel Technology, with Wings, Jumbo Pack of 40.",
    features: [
      "100% Pure Cotton* top layer (Ultra Cottony Soft)",
      "Extended length engineered for Heavy Flow",
      "Super Absorbent Gel Technology with Wings",
      "Jumbo 40-piece economy value pack",
      "Patented product technology*"
    ]
  }
];

export default products;
