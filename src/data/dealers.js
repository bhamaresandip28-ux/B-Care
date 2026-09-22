/**
 * B-Care Centralized Dealer & Wholesale Data
 * 
 * Scalable architecture supporting multi-city, multi-state dealer networks.
 * 
 * NO-HALLUCINATION RULE:
 * Dealer names, phone numbers, addresses, and margins must not be fabricated.
 * Unverified or placeholder records remain marked clearly.
 */

export const dealers = [
  /*
  Example future schema:
  {
    id: "dealer-001",
    name: "[DEALER NAME]",
    city: "[CITY]",
    state: "[STATE]",
    phone: "[PHONE]",
    whatsapp: "[WHATSAPP]",
    email: "[EMAIL]",
    address: "[ADDRESS]",
    verified: true
  }
  */
];

export const getVerifiedDealers = () => dealers.filter(d => d.verified);

export default dealers;
