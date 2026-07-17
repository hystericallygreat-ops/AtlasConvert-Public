/**
 * AtlasConvert API Example: Historical Currency Conversion
 * 
 * This example demonstrates how to convert historical coins
 * to modern currencies using the AtlasConvert API.
 */

const API_BASE = 'https://atlas-convert.vercel.app/api';
const API_KEY = process.env.ATLASCONVERT_API_KEY || 'ac_your_key_here';

async function convertHistorical(from, to, amount = 1, method = 'purchasing_power') {
  const params = new URLSearchParams({
    from,
    to,
    amount: amount.toString(),
    method
  });

  const response = await fetch(`${API_BASE}/convert/historical?${params}`, {
    headers: {
      'X-API-Key': API_KEY
    }
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function main() {
  console.log('=== AtlasConvert Historical Conversion Examples ===\n');

  // Example 1: Roman Denarius to USD
  console.log('1. Roman Denarius → USD (Purchasing Power)');
  const denarius = await convertHistorical('roman_denarius', 'usd', 1, 'purchasing_power');
  console.log(`   1 Denarius = $${denarius.result.toFixed(2)}`);
  console.log(`   Context: ${denarius.context}\n`);

  // Example 2: Islamic Gold Dinar to EUR
  console.log('2. Islamic Gold Dinar → EUR (Metal Value)');
  const dinar = await convertHistorical('islamic_dinar', 'eur', 1, 'metal_value');
  console.log(`   1 Dinar = €${dinar.result.toFixed(2)}`);
  console.log(`   Context: ${dinar.context}\n`);

  // Example 3: Byzantine Solidus to GBP (bulk)
  console.log('3. Byzantine Solidus → GBP (10 coins)');
  const solidus = await convertHistorical('byzantine_solidus', 'gbp', 10);
  console.log(`   10 Solidi = £${solidus.result.toFixed(2)}`);
  console.log(`   Context: ${solidus.context}\n`);

  // Example 4: Louis d'Or to JPY
  console.log('4. Louis d\'Or → JPY');
  const louis = await convertHistorical('louis_dor', 'jpy');
  console.log(`   1 Louis d\'Or = ¥${louis.result.toFixed(2)}`);
  console.log(`   Context: ${louis.context}\n`);

  // Example 5: Spanish Piece of Eight to MAD
  console.log('5. Spanish Piece of Eight → MAD');
  const real = await convertHistorical('spanish_real', 'mad');
  console.log(`   1 Piece of Eight = ${real.result.toFixed(2)} MAD`);
  console.log(`   Context: ${real.context}\n`);

  console.log('=== Examples Complete ===');
}

main().catch(console.error);
