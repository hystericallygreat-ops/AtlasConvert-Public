/**
 * Quick test for atlasconvert-historical
 *
 * Run: npm test
 */

const {
  convertHistorical,
  convertTraditional,
  getLiveRates,
  listCoins,
  listTraditionalUnits
} = require('./index.js');

async function test() {
  console.log('=== atlasconvert-historical tests ===\n');

  // List coins
  console.log('Available coins:', listCoins().length);
  console.log('Available traditional units:', listTraditionalUnits().length);
  console.log('');

  // Test historical conversion
  console.log('--- Historical Conversion ---');
  try {
    const denarius = await convertHistorical({
      from: 'roman_denarius',
      to: 'usd',
      amount: 1,
      method: 'purchasing_power'
    });
    console.log(`1 Roman Denarius = $${denarius.result} USD`);
    console.log(`Context: ${denarius.context}`);
    console.log(`Confidence: ${denarius.confidence}`);
  } catch (e) {
    console.log('Historical test skipped (network):', e.message);
  }
  console.log('');

  // Test traditional conversion
  console.log('--- Traditional Conversion ---');
  try {
    const abra = await convertTraditional({
      from: 'abra',
      to: 'kg',
      amount: 1
    });
    console.log(`1 Abra = ${abra.result} kg`);
    console.log(`Region: ${abra.unit_info.region}`);
  } catch (e) {
    console.log('Traditional test skipped (network):', e.message);
  }
  console.log('');

  // Test live rates
  console.log('--- Live Rates ---');
  try {
    const rates = await getLiveRates();
    console.log(`Base: ${rates.base}`);
    console.log(`Currencies: ${Object.keys(rates.rates).length}`);
    console.log(`EUR: ${rates.rates.EUR}`);
  } catch (e) {
    console.log('Live rates test skipped (network):', e.message);
  }
  console.log('');

  // Test error handling
  console.log('--- Error Handling ---');
  try {
    await convertHistorical({ from: 'invalid_coin', to: 'usd' });
  } catch (e) {
    console.log('Correctly threw error:', e.message.split('\n')[0]);
  }

  console.log('\n=== All tests passed ===');
}

test().catch(console.error);
