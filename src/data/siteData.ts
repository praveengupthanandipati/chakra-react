export const contact = {
  phone: '+91 900 800 2580',
  email: 'info@chakrachem.com',
  address: 'Plot No 47 and 48-P1, Road/Street: Yadgir Road, Locality: Kadechur Industrial Area, Village: Saidapur, District: Yadgiri, Karnataka, India, Pin- 585221.',
}

export const certifications = ['ISO 9001:2015', 'GMP Certified Facility']

export type MenuItem = { label: string; to: string; icon?: string; desc?: string; count?: number }
export type NavItem = MenuItem & { children?: MenuItem[] }

export const navItems: NavItem[] = [
  {
    label: 'Products', to: '/products', children: [
      { label: 'Pharmaceutical Intermediates', to: '/products/pharmaceutical-intermediates', icon: 'capsule', count: 57, desc: 'High-grade intermediates for active pharmaceutical ingredients (APIs) and drug development.' },
      { label: 'Specialty Chemicals', to: '/products/specialty-chemicals', icon: 'droplet-half', count: 13, desc: 'Custom functional molecules, performance reagents, and specialized additives.' },
      { label: 'Fine Chemicals', to: '/products/fine-chemicals', icon: 'diagram-3', count: 30, desc: 'High-purity organic building blocks, heterocyclic intermediates, and reagents.' },
      { label: 'Natural Products', to: '/products/natural-products', icon: 'flower1', count: 1, desc: 'Isolated bio-active phytochemicals, botanical standards, and naturally derived compounds.' },
    ],
  },
  {
    label: 'Capabilities', to: '/capabilities', children: [
      { label: 'Custom Synthesis', to: '/capabilities/custom-synthesis', icon: 'bezier2', desc: 'Gram to multi-tonne scale' },
      { label: 'Process Development', to: '/capabilities/process-development', icon: 'graph-up-arrow', desc: 'Route scouting & optimisation' },
      { label: 'Analytical Services', to: '/capabilities/analytical', icon: 'clipboard2-pulse', desc: 'HPLC, GC, NMR & stability' },
    ],
  },
  {
    label: 'Manufacturing', to: '/manufacturing', children: [
      { label: 'Facilities', to: '/manufacturing/facilities', icon: 'buildings', desc: 'Multi-purpose cGMP plants' },
      { label: 'Quality Assurance', to: '/manufacturing/quality', icon: 'patch-check', desc: 'Audited, documented, traceable' },
      { label: 'EHS & Sustainability', to: '/manufacturing/ehs', icon: 'tree', desc: 'Safe and responsible operations' },
    ],
  },
  {
    label: 'Company', to: '/company', children: [
      { label: 'About Us', to: '/company/about', icon: 'info-circle', desc: 'Our story and values' },
      { label: 'Global Presence', to: '/company/global', icon: 'globe2', desc: 'Serving 40+ countries' },
      { label: 'Careers', to: '/company/careers', icon: 'people', desc: 'Build chemistry with us' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export type Product = { name: string; cas: string; formula: string; category: string }

export const products: Product[] = [
  { name: 'Paracetamol', cas: '103-90-2', formula: 'C8H9NO2', category: 'API' },
  { name: 'Ibuprofen', cas: '15687-27-1', formula: 'C13H18O2', category: 'API' },
  { name: 'Metformin Hydrochloride', cas: '1115-70-4', formula: 'C4H12ClN5', category: 'API' },
  { name: 'Caffeine', cas: '58-08-2', formula: 'C8H10N4O2', category: 'API' },
  { name: '4-Aminophenol', cas: '123-30-8', formula: 'C6H7NO', category: 'Intermediate' },
  { name: 'Benzyl Chloride', cas: '100-44-7', formula: 'C7H7Cl', category: 'Intermediate' },
  { name: '2-Chloropyridine', cas: '109-09-1', formula: 'C5H4ClN', category: 'Intermediate' },
  { name: 'Salicylic Acid', cas: '69-72-7', formula: 'C7H6O3', category: 'Intermediate' },
  { name: 'Sodium Borohydride', cas: '16940-66-2', formula: 'NaBH4', category: 'Specialty' },
  { name: 'Triphenylphosphine', cas: '603-35-0', formula: 'C18H15P', category: 'Specialty' },
  { name: 'Potassium Carbonate', cas: '584-08-7', formula: 'K2CO3', category: 'Specialty' },
  { name: 'Acetonitrile', cas: '75-05-8', formula: 'C2H3N', category: 'Solvent' },
  { name: 'Dimethylformamide', cas: '68-12-2', formula: 'C3H7NO', category: 'Solvent' },
]

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Featured carousel — image for each lives at src/assets/products-samples/<cas>.jpg
// NOTE: purity values and descriptions are placeholder copy; confirm against real CoAs.
export type Material = { name: string; cas: string; purity: string; desc: string; category: string }

export const featuredMaterials: Material[] = [
  { name: 'Veratraldehyde', cas: '120-14-9', purity: '≥ 99 %', category: 'Pharmaceutical Intermediates', desc: 'Key intermediate for papaverine-class APIs and fragrance synthesis' },
  { name: 'Isoquinoline', cas: '119-65-3', purity: '≥ 97 %', category: 'Pharmaceutical Intermediates', desc: 'Heterocyclic scaffold for alkaloid and API synthesis' },
  { name: '6-Methylquinoline', cas: '91-62-3', purity: '≥ 98 %', category: 'Pharmaceutical Intermediates', desc: 'Quinoline building block for pharmaceutical and flavour chemistry' },
  { name: 'Phenylacetone', cas: '103-79-7', purity: '≥ 98 %', category: 'Pharmaceutical Intermediates', desc: 'Regulated ketone intermediate, supplied to licensed buyers only' },
  { name: '4-Benzylphenol', cas: '101-53-1', purity: '≥ 98 %', category: 'Fine Chemicals', desc: 'Phenolic building block for antioxidants, resins and organic synthesis' },
  { name: '2-Aminobiphenyl', cas: '90-41-5', purity: '≥ 98 %', category: 'Fine Chemicals', desc: 'Aromatic amine for carbazole and ligand synthesis' },
  { name: '2-Methylanthraquinone', cas: '84-54-8', purity: '≥ 98 %', category: 'Fine Chemicals', desc: 'Anthraquinone intermediate for dyes and pigments' },
  { name: 'Triacetin', cas: '102-76-1', purity: '≥ 99 %', category: 'Specialty Chemicals', desc: 'Plasticizer, humectant and solvent carrier for pharma and food' },
  { name: '7-Diethylamino-4-methylcoumarin', cas: '91-44-1', purity: '≥ 99 %', category: 'Specialty Chemicals', desc: 'Blue fluorescent laser dye and optical brightener' },
  { name: "3,3'-Diaminobenzidine", cas: '91-95-2', purity: '≥ 98 %', category: 'Specialty Chemicals', desc: 'Chromogenic HRP substrate for immunohistochemistry' },
  { name: 'Xanthydrol', cas: '90-46-0', purity: '≥ 98 %', category: 'Specialty Chemicals', desc: 'Derivatization reagent for urea and amide analysis' },
  { name: 'Piperine', cas: '94-62-2', purity: '≥ 98 %', category: 'Natural Products', desc: 'Black pepper alkaloid for nutraceutical and bioavailability research' },
  { name: 'Scopoletin', cas: '92-61-5', purity: '≥ 98 %', category: 'Natural Products', desc: 'Plant-derived coumarin reference standard' },
  { name: 'Umbelliferone', cas: '93-35-6', purity: '≥ 99 %', category: 'Natural Products', desc: 'Fluorescent coumarin for enzyme assays and UV absorbers' },
  { name: 'Picrotoxin', cas: '124-87-8', purity: '≥ 98 %', category: 'Natural Products', desc: 'GABA-A receptor antagonist for neuroscience research' },
]

// About / track record section
export const aboutStats = [
  { value: 500, label: 'Happy Customers', tag: 'Trust', icon: 'people-fill', desc: 'Global pharmaceutical enterprises, biotech innovators, and specialty chemical manufacturers.' },
  { value: 250, label: 'Completed Projects', tag: 'Delivery', icon: 'clipboard2-check-fill', desc: 'Successful custom synthesis, route development, and commercial-scale batch deliveries.' },
  { value: 130, label: 'Ongoing Projects', tag: 'Pipeline', icon: 'arrow-repeat', desc: 'Active contract synthesis programs, process optimization, and dedicated supply contracts.' },
  { value: 120, label: 'Chemists', tag: 'Talent', icon: 'mortarboard-fill', desc: "Experienced PhD & Master's research scientists specializing in complex synthetic chemistry." },
  { value: 50, label: 'Labs', tag: 'Facilities', icon: 'buildings-fill', desc: 'Dedicated organic synthesis, quality control, HPLC/NMR analytical testing, and pilot suites.' },
]

export const trustPoints = [
  { title: 'ISO 9001:2015 Certified', text: 'Quality Management System', icon: 'patch-check-fill' },
  { title: 'cGMP Compliant Suites', text: 'Audited Pharmaceutical Manufacturing', icon: 'shield-fill-check' },
  { title: 'Yadgir Synthesis Plant', text: 'Multipurpose SS & Glass-Lined Reactors', icon: 'geo-alt-fill' },
  { title: 'Analytical Verification', text: 'Direct Batch CoAs with HPLC, NMR & GC-MS', icon: 'clipboard2-data-fill' },
]

// Partner / inquiry section
export const partnerFeatures = [
  { title: 'Verified Chemical Specifications', icon: 'file-earmark-check', text: 'Guaranteed assay purity with comprehensive batch-specific COA, HPLC, NMR, and GC-MS documentation.' },
  { title: 'Technical Expertise', icon: 'person-gear', text: 'Collaborate directly with 120+ synthetic chemists and PhD process engineers specializing in complex multi-step organic chemistry.' },
  { title: 'Customized Chemical Solutions', icon: 'flask', text: 'Tailored synthesis routes, customer-specified packaging, custom particle sizes, and confidential pilot-to-commercial scale-up.' },
  { title: 'Reliable Supply & Sourcing', icon: 'globe2', text: 'Resilient supply chains, dedicated raw-material stock reserves, global freight compliance, and guaranteed delivery SLAs.' },
  { title: 'Extensive Chemical Portfolio', icon: 'grid-3x3-gap', text: 'Instant access to 100+ verified active materials spanning pharmaceutical intermediates, fine reagents, and specialty catalysts.' },
]

export const partnerChips = [
  { label: '24-Hour Technical Response', icon: 'clock-history' },
  { label: 'NDA / Confidentiality Secured', icon: 'shield-lock' },
  { label: 'cGMP & ISO 9001:2015 Audited', icon: 'patch-check' },
]

export const countries = [
  'India', 'United States', 'United Kingdom', 'Germany', 'France', 'Switzerland', 'Netherlands', 'Belgium',
  'Italy', 'Spain', 'Ireland', 'Canada', 'Brazil', 'Japan', 'China', 'South Korea', 'Singapore',
  'United Arab Emirates', 'Saudi Arabia', 'South Africa', 'Australia', 'Other',
]

// Footer
export const footerCompanyLinks: MenuItem[] = [
  { label: 'About Us', to: '/company/about' },
  { label: 'Services & CRAMS', to: '/capabilities' },
  { label: 'Career Opportunities', to: '/company/careers' },
  { label: 'Technical Blog & Insights', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Design System', to: '/design-system' },
]

export const footerLegalLinks: MenuItem[] = [
  { label: 'Quality Policy', to: '/quality-policy' },
  { label: 'Terms & Compliance', to: '/terms' },
]

// Scale section ("From Milligrams to Metric Tons")
export const scalePoints = [
  { icon: 'bullseye', text: "ChakraChem's mission is to be the leading life sciences platform for scientists developing revolutionary medicines and diagnostics." },
  { icon: 'shield-check', text: 'We are the experts in complex chemistry to secure life sciences supply chains with quality products.' },
  { icon: 'intersect', text: 'We are at the interface of chemistry and biology, science-led and customer focused across products, services and R&D innovation.' },
  { icon: 'gear-wide-connected', text: 'Our R&D resources and production facilities are modern and versatile, allowing us to produce chemicals on the milligram to ton scale, and at ISO 9001 and GMP, with peptides at mg to multikilogram scale.' },
]

export const scaleSteps = [
  { unit: 'mg', label: 'R&D Discovery', icon: 'eyedropper' },
  { unit: 'g', label: 'Custom Synthesis', icon: 'flask' },
  { unit: 'kg', label: 'Pilot Scale-up', icon: 'box-seam' },
  { unit: 'MT', label: 'Commercial Supply', icon: 'truck' },
]
