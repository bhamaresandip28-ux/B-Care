# B-Care — Official Production Website

A complete, professional business website for **B-Care**, a sanitary-pad brand owned by **Poonam Sandip Bhamre**.

The website combines **Brand presentation + Product catalog + Product education + Demonstration + Online purchasing + Wholesale enquiries + Dealer acquisition + Contact information**.

---

## 🌸 Product Range

B-Care currently manufactures and distributes **ONLY TWO SIZES** across two pack formats (exactly 4 variants):

1. **B-Care XL — 6 Pieces** (Compact Daily Pack)
2. **B-Care XL — Jumbo — 40 Pieces** (Economy Value Pack)
3. **B-Care XXL — 6 Pieces** (Extended Coverage Pack)
4. **B-Care XXL — Jumbo — 40 Pieces** (Extended Economy Value Pack)

> **Product Claims**: 100% Pure Cotton* top layer • Patented Product* • Affordable Choice* • Absorption Tested*

---

## 🚀 Customer Journeys

1. **Personal Customer**: Browse catalog (`/products`) → Select XL / XXL → 6 or 40-pack → Purchase via Amazon or Meesho.
2. **Wholesale / Bulk Buyer**: Wholesale Portal (`/wholesale-dealership`) → Contact Authorized Dealer → Submit Wholesale Enquiry.
3. **Potential Dealer**: Dealership Portal (`/wholesale-dealership`) → 3-Step Process (Enquire → Connect → Discuss) → Submit Dealer Application.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v3 with custom design tokens matching hot-pink packaging:
  - `--primary-pink`: `#E6007E`
  - `--deep-pink`: `#9C1053`
  - `--light-pink`: `#FFF0F5`
  - `--background`: `#ffffff`
  - `--text-primary`: `#1A1A1A`
- **Typography**: Google Fonts (*Outfit* and *Plus Jakarta Sans*)
- **Icons**: Lucide React
- **Architecture**: Centralized data layer (`products.js`, `dealers.js`, `siteConfig.js`) adhering strictly to the No-Hallucination rule.

---

## 📂 Project Structure

```text
├── public/
│   ├── logo-icon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── logo/
│   │   ├── products/
│   │   ├── owner/
│   │   └── demo/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── StickyMobileCta.jsx
│   │   ├── TrustStrip.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetailModal.jsx
│   │   ├── CustomerJourneys.jsx
│   │   └── DealerCard.jsx
│   ├── data/
│   │   ├── products.js
│   │   ├── dealers.js
│   │   └── siteConfig.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── WhyBCare.jsx
│   │   ├── About.jsx
│   │   ├── WholesaleDealership.jsx
│   │   ├── Contact.jsx
│   │   └── Legal.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── BCARE_PROJECT_STATE.md
├── package.json
└── vite.config.js
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License & Ownership

Owned by **Poonam Sandip Bhamre** (Owner, B-Care). All rights reserved.
