/**
 * atlasconvert-historical — ESM entry point
 *
 * Convert historical coins and ancient currencies to modern values.
 */

const API_BASE = 'https://atlas-convert.vercel.app/api';

export const COINS = [
  'roman_denarius',
  'islamic_dinar',
  'byzantine_solidus',
  'spanish_real',
  'louis_dor',
  'greek_drachma',
  'florentine_florin',
  'venetian_ducat',
  'roman_sestertius',
  'british_sovereign',
  'egyptian_kite_silver',
  'carthaginian_shekel',
  'persian_daric',
  'mughal_rupee',
  'chinese_sycee'
];

export const TRADITIONAL_UNITS = [
  'abra', 'moud', 'kala', 'kharouba',
  'prophetic_saa', 'farsakh',
  'dirhem', 'arshin',
  'shaku', 'tatami_jo',
  'pes', 'jugerum',
  'li', 'tael',
  'french_toise', 'russian_versta', 'biblical_cubit'
];

/**
 * Convert a historical coin to a modern currency.
 *
 * @param {Object} options
 * @param {string} options.from - Historical coin ID
 * @param {string} options.to - Target currency code
 * @param {number} [options.amount=1] - Amount to convert
 * @param {string} [options.method='purchasing_power'] - 'purchasing_power' or 'metal_value'
 * @returns {Promise<Object>} Conversion result
 */
export async function convertHistorical({ from, to, amount = 1, method = 'purchasing_power' }) {
  if (!from || !to) {
    throw new Error('Both "from" and "to" are required');
  }

  if (!COINS.includes(from)) {
    throw new Error(
      `Unknown coin "${from}". Available coins:\n${COINS.map(c => '  - ' + c).join('\n')}`
    );
  }

  const params = new URLSearchParams({
    from,
    to,
    amount: String(amount),
    method
  });

  const response = await fetch(`${API_BASE}/convert/historical?${params}`);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error?.message || `API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Convert a traditional regional unit to a standard measurement.
 *
 * @param {Object} options
 * @param {string} options.from - Traditional unit ID
 * @param {string} options.to - Target unit code
 * @param {number} [options.amount=1] - Amount to convert
 * @returns {Promise<Object>} Conversion result
 */
export async function convertTraditional({ from, to, amount = 1 }) {
  if (!from || !to) {
    throw new Error('Both "from" and "to" are required');
  }

  if (!TRADITIONAL_UNITS.includes(from)) {
    throw new Error(
      `Unknown unit "${from}". Available units:\n${TRADITIONAL_UNITS.map(u => '  - ' + u).join('\n')}`
    );
  }

  const params = new URLSearchParams({
    from,
    to,
    amount: String(amount)
  });

  const response = await fetch(`${API_BASE}/convert/traditional?${params}`);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error?.message || `API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Get live exchange rates for all supported currencies.
 *
 * @returns {Promise<Object>} Exchange rates with metadata
 */
export async function getLiveRates() {
  const response = await fetch(`${API_BASE}/currencies`);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error?.message || `API error: ${response.status}`);
  }

  return response.json();
}

/**
 * List all available historical coin IDs.
 *
 * @returns {string[]}
 */
export function listCoins() {
  return [...COINS];
}

/**
 * List all available traditional unit IDs.
 *
 * @returns {string[]}
 */
export function listTraditionalUnits() {
  return [...TRADITIONAL_UNITS];
}

export default {
  COINS,
  TRADITIONAL_UNITS,
  convertHistorical,
  convertTraditional,
  getLiveRates,
  listCoins,
  listTraditionalUnits
};
