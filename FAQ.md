# Frequently Asked Questions

## General

### What is AtlasConvert?

AtlasConvert is an interactive museum and conversion engine for measurement systems across civilizations. It bridges modern currencies, historical coins, traditional regional units, and standard metric/imperial units in a trilingual (FR/EN/AR) Progressive Web App.

### Is AtlasConvert free to use?

Yes! The core converter is completely free. The API has a free Sandbox tier (100 requests/month). Pro and Enterprise tiers are available for higher usage.

### Does AtlasConvert work offline?

Yes! AtlasConvert is a PWA that works offline. Currency rates are cached locally, and you can access previously viewed historical data without an internet connection.

## Historical Data

### How accurate are the historical conversions?

AtlasConvert uses two validated approaches:

1. **Purchasing Power**: Academic estimates of what a coin could buy in its era, converted to modern equivalents
2. **Metal Value**: Current spot prices for gold/silver content

Both methods have known limitations that are clearly documented. The app provides confidence levels and source citations for all conversions.

### Where does the historical data come from?

Our data is compiled from academic sources including:
- Numismatic reference works
- Economic history publications
- Museum catalogs
- Archaeological reports

Each coin entry includes citations to specific sources.

### Why doesn't the AI just compute conversions directly?

LLMs (including GPT-4, Gemini, Claude) systematically hallucinate historical conversion rates. They invent precise-sounding numbers that are often wrong by orders of magnitude. AtlasConvert's AI uses tool-calling: the LLM explains the history, then calls a deterministic engine for the actual math. This guarantees accuracy.

## Technical

### What browsers are supported?

AtlasConvert supports all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Is there an API?

Yes! AtlasConvert provides a public REST API with three endpoints:
- `/api/convert/historical` — Historical coin conversions
- `/api/convert/traditional` — Traditional unit conversions
- `/api/convert/official` — Standard unit conversions

See the [API Documentation](docs/api.md) for details.

### Can I embed AtlasConvert on my website?

Yes! AtlasConvert provides an embeddable widget via iframe. You can customize the theme, language, and default conversion units. See the [Integration Guide](docs/integrations.md).

### What languages are supported?

AtlasConvert is fully trilingual:
- **French** (fr) — Full support
- **English** (en) — Full support
- **Arabic** (ar) — Full support with RTL layout

## Data

### How often are exchange rates updated?

Live exchange rates are updated regularly throughout the day. Historical rates are cached for optimal performance.

### What currencies are supported?

AtlasConvert supports 170+ world currencies including:
- All major fiat currencies (USD, EUR, GBP, JPY, etc.)
- Moroccan colloquial currencies (Rials, Scentims)
- Precious metals (XAU, XAG)
- Historical coins (Roman Denarius, Islamic Dinar, etc.)

### Can I suggest a new historical coin or unit?

Absolutely! Open a [GitHub Issue](https://github.com/atlas-convert/atlas-convert/issues) with your suggestion. Include:
- Name of the coin/unit
- Historical period
- Any available data on purchasing power or conversion factors
- Academic sources if available

## Legal

### Is AtlasConvert open source?

This public repository (documentation, examples, landing page) is licensed under [Apache 2.0](LICENSE). The `atlasconvert-historical` npm package is also Apache 2.0. The full application source code is not published.

### Can I use AtlasConvert data in my research?

Yes! You can use conversion results and historical data in your work. Please cite AtlasConvert as the source and include a link to the application.
