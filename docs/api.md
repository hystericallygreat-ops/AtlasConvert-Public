# API Documentation

## Overview

AtlasConvert provides a public REST API for programmatic access to historical conversions, traditional units, and live exchange rates.

**Base URL:** `https://atlas-convert.vercel.app/api`

## Authentication

### API Key

Include your API key in one of three ways:

```bash
# Header (recommended)
curl -H "X-API-Key: ac_your_key_here" https://atlas-convert.vercel.app/api/currencies

# Bearer token
curl -H "Authorization: Bearer ac_your_key_here" https://atlas-convert.vercel.app/api/currencies

# Query parameter
curl "https://atlas-convert.vercel.app/api/currencies?apiKey=ac_your_key_here"
```

### API Tiers

| Tier | Usage | Best For |
|------|-------|----------|
| Sandbox | Free tier | Testing & personal projects |
| Pro | High volume | Production apps & integrations |
| Enterprise | Very high volume | Large-scale deployments |

Contact us for pricing details and custom quotas.

## Endpoints

### Historical Currency Conversion

Convert ancient coins to modern currencies using purchasing power or metal value.

```
GET/POST /api/convert/historical
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | Yes | Historical coin ID |
| `to` | string | Yes | Target currency code |
| `amount` | number | No | Amount to convert (default: 1) |
| `method` | string | No | `purchasing_power` or `metal_value` (default: `purchasing_power`) |

**Available Coins:**

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

**Example Request:**

```bash
curl "https://atlas-convert.vercel.app/api/convert/historical?from=roman_denarius&to=usd&amount=1"
```

**Example Response:**

```json
{
  "success": true,
  "from": "roman_denarius",
  "to": "usd",
  "amount": 1,
  "result": 120.00,
  "method": "purchasing_power",
  "context": "1 Denarius ≈ 1 day's wage for a legionary soldier",
  "confidence": "high",
  "accuracy": {
    "basis": "purchasing_power",
    "period": "1st century AD",
    "region": "Roman Empire"
  },
  "sources": [
    "Goldberg, R.A. (2007). 'The Denarius in the Roman Economy'",
    "Harper, D. (2023). 'Economics of the Ancient World'"
  ]
}
```

### Traditional Unit Conversion

Convert traditional regional units to standard measurements.

```
GET/POST /api/convert/traditional
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | Yes | Traditional unit ID |
| `to` | string | Yes | Target unit code |
| `amount` | number | No | Amount to convert (default: 1) |

**Available Traditional Units:**

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

**Example Request:**

```bash
curl "https://atlas-convert.vercel.app/api/convert/traditional?from=abra&to=kg&amount=1"
```

**Example Response:**

```json
{
  "success": true,
  "from": "abra",
  "to": "kg",
  "amount": 1,
  "result": 12.5,
  "unit_info": {
    "name": "Abra",
    "region": "Morocco",
    "type": "weight",
    "description": "Traditional Moroccan weight unit"
  },
  "confidence": "high"
}
```

### Standard Unit Conversion

Convert between metric, imperial, and other standard units.

```
GET/POST /api/convert/official
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | Yes | Source unit code |
| `to` | string | Yes | Target unit code |
| `amount` | number | No | Amount to convert (default: 1) |

**Supported Categories:**
- Currency (170+ currencies)
- Distance (m, km, mi, ft, in, etc.)
- Weight (kg, g, lb, oz, etc.)
- Temperature (°C, °F, K)
- Area (m², km², acre, etc.)
- Volume (L, mL, gal, etc.)
- Speed (km/h, mph, m/s, etc.)
- Time (s, min, hr, day, etc.)
- Data Storage (B, KB, MB, GB, TB)
- And more...

### Live Exchange Rates

Get current exchange rates for all supported currencies.

```
GET /api/currencies
```

**Example Response:**

```json
{
  "success": true,
  "base": "USD",
  "timestamp": "2026-07-12T12:00:00Z",
  "rates": {
    "EUR": 0.92,
    "GBP": 0.79,
    "MAD": 9.85,
    "JPY": 149.50,
    "XAU": 0.00048,
    "XAG": 0.035,
    ...
  },
  "source": "live"
}
```

### Historical Rate Charts

Get historical exchange rate data for charting.

```
GET /api/history
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | Yes | Source currency |
| `to` | string | Yes | Target currency |
| `days` | number | No | Number of days (7 or 30, default: 7) |

**Example Request:**

```bash
curl "https://atlas-convert.vercel.app/api/history?from=USD&to=EUR&days=30"
```

## Error Handling

All errors follow a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_CURRENCY",
    "message": "The currency code 'XYZ' is not supported"
  }
}
```

### Error Codes

| Code | Description |
|------|-------------|
| `MISSING_API_KEY` | No API key provided |
| `INVALID_API_KEY` | Invalid or revoked API key |
| `QUOTA_EXCEEDED` | Monthly request limit reached |
| `RATE_LIMIT_EXCEEDED` | Too many requests, slow down |
| `MISSING_PARAMETERS` | Required parameters missing |
| `INVALID_CURRENCY` | Unknown currency code |
| `INVALID_COIN` | Unknown historical coin ID |
| `CONVERSION_ERROR` | Calculation error |

## Rate Limits

Rate limits are enforced per API key. Limits vary by tier:

| Tier | Rate Limit |
|------|------------|
| Sandbox | Standard |
| Pro | High |
| Enterprise | Very high |

Rate limit headers are included in every response:

```
X-RateLimit-Limit: <limit>
X-RateLimit-Remaining: <remaining>
X-RateLimit-Reset: <timestamp>
```

## SDKs & Libraries

Official SDKs are planned:

- **JavaScript/TypeScript** (planned)
- **Python** (planned)
- **Go** (planned)

For now, use any HTTP client to interact with the API.

## Examples

### Python

```python
import requests

response = requests.get(
    "https://atlas-convert.vercel.app/api/convert/historical",
    params={
        "from": "roman_denarius",
        "to": "usd",
        "amount": 10,
        "method": "purchasing_power"
    },
    headers={"X-API-Key": "ac_your_key_here"}
)

data = response.json()
print(f"10 Denarii = ${data['result']:.2f}")
```

### JavaScript

```javascript
const response = await fetch(
  "https://atlas-convert.vercel.app/api/convert/historical?" +
  new URLSearchParams({
    from: "roman_denarius",
    to: "usd",
    amount: "10",
    method: "purchasing_power"
  }),
  {
    headers: {
      "X-API-Key": "ac_your_key_here"
    }
  }
);

const data = await response.json();
console.log(`10 Denarii = $${data.result.toFixed(2)}`);
```

### cURL

```bash
# Historical conversion
curl -H "X-API-Key: ac_your_key_here" \
  "https://atlas-convert.vercel.app/api/convert/historical?from=roman_denarius&to=usd&amount=10"

# Traditional unit
curl -H "X-API-Key: ac_your_key_here" \
  "https://atlas-convert.vercel.app/api/convert/traditional?from=abra&to=kg&amount=1"

# Live rates
curl -H "X-API-Key: ac_your_key_here" \
  "https://atlas-convert.vercel.app/api/currencies"
```

## LLM Integration

AtlasConvert's API is designed for easy integration with AI agents and LLMs. The API follows standard REST conventions and returns JSON responses compatible with function-calling patterns.

### Example Agent Flow

1. **User**: "How much was 5 Denarii worth in modern dollars?"
2. **Agent**: Calls the historical conversion endpoint with appropriate parameters
3. **API**: Returns accurate conversion with context and sources
4. **Agent**: Presents the result with historical context
