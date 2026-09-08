/**
 * Shared property page resolver and ID mappings for Reserve.RealEstate
 */
const PROPERTY_PAGE_MAP = {
  // Standalone property page IDs
  'cr-tamarindo-villa': 'property-tamarindo-villa.html',
  'dr-cocotal-villa': 'property-cocotal-villa.html',
  'dr-los-corales-condo': 'property-los-corales-condo.html',

  // Generic JSON listing IDs mapping to dedicated pages
  'villa-tamarindo-01': 'property-tamarindo-villa.html',
  'penthouse-cabarete-02': 'property-cocotal-villa.html',
  'condo-sosua-03': 'property-los-corales-condo.html',

  // Generic JSON listing IDs mapping to generic property template
  'villa-puertoplata-04': 'property.html?id=villa-puertoplata-04',
  'condo-tamarindo-05': 'property.html?id=condo-tamarindo-05'
};

const PROPERTY_ID_ALIASES = {
  'cr-tamarindo-villa': 'villa-tamarindo-01',
  'dr-cocotal-villa': 'penthouse-cabarete-02',
  'dr-los-corales-condo': 'condo-sosua-03',
  'villa-tamarindo-01': 'cr-tamarindo-villa',
  'penthouse-cabarete-02': 'dr-cocotal-villa',
  'condo-sosua-03': 'dr-los-corales-condo'
};

/**
 * Resolves a property ID to its destination detail page URL.
 * Falls back to property.html?id=<id> for unmapped listings.
 * @param {string} id - The listing or property ID
 * @returns {string} URL of the property page
 */
function getPropertyHref(id) {
  if (!id) return 'property.html';
  return PROPERTY_PAGE_MAP[id] || `property.html?id=${encodeURIComponent(id)}`;
}

if (typeof window !== 'undefined') {
  window.PROPERTY_PAGE_MAP = PROPERTY_PAGE_MAP;
  window.PROPERTY_ID_ALIASES = PROPERTY_ID_ALIASES;
  window.getPropertyHref = getPropertyHref;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROPERTY_PAGE_MAP, PROPERTY_ID_ALIASES, getPropertyHref };
}
