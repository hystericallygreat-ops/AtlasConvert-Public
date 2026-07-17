/**
 * AtlasConvert API Example: Traditional Unit Conversion
 * 
 * This example demonstrates how to convert traditional regional
 * units to standard measurements using the AtlasConvert API.
 */

const API_BASE = 'https://atlas-convert.vercel.app/api';
const API_KEY = process.env.ATLASCONVERT_API_KEY || 'ac_your_key_here';

async function convertTraditional(from, to, amount = 1) {
  const params = new URLSearchParams({
    from,
    to,
    amount: amount.toString()
  });

  const response = await fetch(`${API_BASE}/convert/traditional?${params}`, {
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
  console.log('=== AtlasConvert Traditional Unit Examples ===\n');

  // Example 1: Moroccan Abra to Kilograms
  console.log('1. Moroccan Abra → Kilograms');
  const abra = await convertTraditional('abra', 'kg', 1);
  console.log(`   1 Abra = ${abra.result} kg`);
  console.log(`   Region: ${abra.unit_info.region}\n`);

  // Example 2: Japanese Shaku to Meters
  console.log('2. Japanese Shaku → Meters');
  const shaku = await convertTraditional('shaku', 'm', 1);
  console.log(`   1 Shaku = ${shaku.result} m`);
  console.log(`   Region: ${shaku.unit_info.region}\n`);

  // Example 3: Ottoman Dirhem to Grams
  console.log('3. Ottoman Dirhem → Grams');
  const dirhem = await convertTraditional('dirhem', 'g', 10);
  console.log(`   10 Dirhem = ${dirhem.result} g`);
  console.log(`   Region: ${dirhem.unit_info.region}\n`);

  // Example 4: Prophetic Sa'a to Liters
  console.log('4. Prophetic Sa\'a → Liters');
  const saa = await convertTraditional('prophetic_saa', 'l', 1);
  console.log(`   1 Sa'a = ${saa.result} L`);
  console.log(`   Region: ${saa.unit_info.region}\n`);

  // Example 5: French Toise to Meters
  console.log('5. French Toise → Meters');
  const toise = await convertTraditional('french_toise', 'm', 1);
  console.log(`   1 Toise = ${toise.result} m`);
  console.log(`   Region: ${toise.unit_info.region}\n`);

  // Example 6: Chinese Li to Kilometers
  console.log('6. Chinese Li → Kilometers');
  const li = await convertTraditional('li', 'km', 5);
  console.log(`   5 Li = ${li.result} km`);
  console.log(`   Region: ${li.unit_info.region}\n`);

  console.log('=== Examples Complete ===');
}

main().catch(console.error);
