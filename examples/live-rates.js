/**
 * AtlasConvert API Example: Live Exchange Rates
 * 
 * This example demonstrates how to fetch live exchange rates
 * using the AtlasConvert API.
 */

const API_BASE = 'https://atlas-convert.vercel.app/api';
const API_KEY = process.env.ATLASCONVERT_API_KEY || 'ac_your_key_here';

async function getLiveRates() {
  const response = await fetch(`${API_BASE}/currencies`, {
    headers: {
      'X-API-Key': API_KEY
    }
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function getHistoricalRates(from, to, days = 7) {
  const params = new URLSearchParams({
    from,
    to,
    days: days.toString()
  });

  const response = await fetch(`${API_BASE}/history?${params}`, {
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
  console.log('=== AtlasConvert Live Rates Examples ===\n');

  // Example 1: Get all current rates
  console.log('1. Current Exchange Rates (selected)');
  const rates = await getLiveRates();
  console.log(`   Base: ${rates.base}`);
  console.log(`   Timestamp: ${rates.timestamp}`);
  console.log(`   Source: ${rates.source}`);
  console.log('   Selected rates:');
  console.log(`     EUR: ${rates.rates.EUR}`);
  console.log(`     GBP: ${rates.rates.GBP}`);
  console.log(`     MAD: ${rates.rates.MAD}`);
  console.log(`     JPY: ${rates.rates.JPY}`);
  console.log(`     XAU (Gold): ${rates.rates.XAU}`);
  console.log(`     XAG (Silver): ${rates.rates.XAG}\n`);

  // Example 2: Historical rates (7 days)
  console.log('2. Historical Rates: USD → EUR (7 days)');
  const history7 = await getHistoricalRates('USD', 'EUR', 7);
  console.log(`   Data points: ${history7.data.length}`);
  console.log(`   Latest: ${history7.data[history7.data.length - 1].rate}`);
  console.log(`   Oldest: ${history7.data[0].rate}\n`);

  // Example 3: Historical rates (30 days)
  console.log('3. Historical Rates: USD → GBP (30 days)');
  const history30 = await getHistoricalRates('USD', 'GBP', 30);
  console.log(`   Data points: ${history30.data.length}`);
  console.log(`   Latest: ${history30.data[history30.data.length - 1].rate}`);
  console.log(`   Oldest: ${history30.data[0].rate}\n`);

  // Example 4: Moroccan Dirham
  console.log('4. Historical Rates: USD → MAD (7 days)');
  const historyMAD = await getHistoricalRates('USD', 'MAD', 7);
  console.log(`   Data points: ${historyMAD.data.length}`);
  console.log(`   Latest: ${historyMAD.data[historyMAD.data.length - 1].rate}\n`);

  console.log('=== Examples Complete ===');
}

main().catch(console.error);
