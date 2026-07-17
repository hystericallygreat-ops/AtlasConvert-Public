# atlasconvert-historical

> Convert historical coins and ancient currencies to modern values. Roman Denarius, Islamic Dinar, Byzantine Solidus, and 12 more.

[![npm](https://img.shields.io/npm/v/atlasconvert-historical.svg)](https://www.npmjs.com/package/atlasconvert-historical)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

## Install

```bash
npm install atlasconvert-historical
```

## Usage

```javascript
const { convertHistorical } = require('atlasconvert-historical');

// How much was a Roman Denarius worth?
const result = await convertHistorical({
  from: 'roman_denarius',
  to: 'usd',
  amount: 1,
  method: 'purchasing_power'
});

console.log(result);
// {
//   from: 'roman_denarius',
//   to: 'usd',
//   amount: 1,
//   result: 120.00,
//   method: 'purchasing_power',
//   context: "1 Denarius ≈ 1 day's wage for a legionary soldier",
//   confidence: 'high',
//   sources: ['Goldberg, R.A. (2007)', 'Harper, D. (2023)']
// }
```

### ESM

```javascript
import { convertHistorical, convertTraditional } from 'atlasconvert-historical';

const dinar = await convertHistorical({
  from: 'islamic_dinar',
  to: 'eur',
  method: 'metal_value'
});

const abra = await convertTraditional({
  from: 'abra',
  to: 'kg'
});
```

## API

### `convertHistorical(options)`

Convert a historical coin to a modern currency.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `from` | `string` | required | Coin ID (see below) |
| `to` | `string` | required | Currency code (`usd`, `eur`, `gbp`, etc.) |
| `amount` | `number` | `1` | Amount to convert |
| `method` | `string` | `'purchasing_power'` | `'purchasing_power'` or `'metal_value'` |

### `convertTraditional(options)`

Convert a traditional regional unit to standard measurements.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `from` | `string` | required | Unit ID (see below) |
| `to` | `string` | required | Target unit (`kg`, `m`, `l`, etc.) |
| `amount` | `number` | `1` | Amount to convert |

### `getLiveRates()`

Get live exchange rates for all 170+ supported currencies.

### `listCoins()`

Returns an array of available historical coin IDs.

### `listTraditionalUnits()`

Returns an array of available traditional unit IDs.

## Available Coins

| ID | Name |
|----|------|
| `roman_denarius` | Roman Denarius |
| `islamic_dinar` | Islamic Gold Dinar |
| `byzantine_solidus` | Byzantine Solidus |
| `spanish_real` | Spanish Piece of Eight |
| `louis_dor` | Louis d'Or |
| `greek_drachma` | Athenian Drachma |
| `florentine_florin` | Florentine Florin |
| `venetian_ducat` | Venetian Ducat |
| `roman_sestertius` | Roman Sestertius |
| `british_sovereign` | British Sovereign |
| `egyptian_kite_silver` | Egyptian Silver Kite |
| `carthaginian_shekel` | Carthaginian Shekel |
| `persian_daric` | Persian Gold Daric |
| `mughal_rupee` | Mughal Silver Rupee |
| `chinese_sycee` | Chinese Silver Sycee |

## Available Traditional Units

| ID | Name | Region |
|----|------|--------|
| `abra` | Abra | Morocco |
| `moud` | Moud | Morocco |
| `kala` | Kala | Morocco |
| `kharouba` | Kharouba | Morocco |
| `prophetic_saa` | Prophetic Sa'a | Saudi Arabia |
| `farsakh` | Farsakh | Saudi Arabia |
| `dirhem` | Dirhem | Ottoman Empire |
| `arshin` | Arshin | Ottoman Empire |
| `shaku` | Shaku | Japan |
| `tatami_jo` | Tatami Jo | Japan |
| `pes` | Pes | Rome |
| `jugerum` | Jugerum | Rome |
| `li` | Li | China |
| `tael` | Tael | China |
| `french_toise` | French Toise | France |
| `russian_versta` | Russian Versta | Russia |
| `biblical_cubit` | Biblical Cubit | Ancient Near East |

## Conversion Methods

### Purchasing Power
Estimates what a coin could buy in its era, converted to modern equivalents. Based on academic research.

### Metal Value
Calculates the current spot price of the coin's gold or silver content using live precious metal prices.

## Related

- [AtlasConvert](https://atlas-convert.vercel.app) — Full web application
- [API Documentation](https://atlas-convert.vercel.app/api/convert/historical) — REST API

## License

Apache-2.0
