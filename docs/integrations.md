# Integrations

## Embedding AtlasConvert

### Widget iframe

Embed the AtlasConvert converter on any website with a simple iframe:

```html
<iframe
  src="https://atlas-convert.vercel.app/widget?theme=classic&lang=en&category=currency"
  width="100%"
  height="600"
  frameborder="0"
  title="AtlasConvert Widget"
></iframe>
```

### Widget Parameters

| Parameter | Options | Default | Description |
|-----------|---------|---------|-------------|
| `theme` | `classic`, `rosegold`, `onyx`, `emerald`, `cyberpunk`, `dracula`, `nord`, `catppuccin` | `classic` | Visual theme |
| `lang` | `en`, `fr`, `ar` | `en` | Interface language |
| `category` | `currency`, `distance`, `weight`, etc. | `currency` | Default conversion category |
| `from` | Unit ID | — | Default source unit |
| `to` | Unit ID | — | Default target unit |

### Example: Moroccan Currency Widget

```html
<iframe
  src="https://atlas-convert.vercel.app/widget?theme=onyx&lang=fr&category=currency&from=MAD&to=USD"
  width="100%"
  height="500"
  frameborder="0"
></iframe>
```

### Example: Historical Converter Widget

```html
<iframe
  src="https://atlas-convert.vercel.app/widget?theme=classic&lang=en&category=currency&from=roman_denarius&to=usd"
  width="100%"
  height="500"
  frameborder="0"
></iframe>
```

## API Integration

### LLM Tool Integration

Add AtlasConvert as a tool in your AI agent:

```json
{
  "name": "convertHistoricalCurrency",
  "description": "Convert historical coins to modern currencies",
  "parameters": {
    "type": "object",
    "properties": {
      "from": { "type": "string" },
      "to": { "type": "string" },
      "amount": { "type": "number", "default": 1 }
    },
    "required": ["from", "to"]
  }
}
```

### RAG Pipeline Integration

Use AtlasConvert as a retrieval source for historical economics:

```python
# Example: LangChain tool integration
from langchain.tools import Tool

atlas_tool = Tool(
    name="HistoricalConversion",
    func=lambda query: requests.get(
        "https://atlas-convert.vercel.app/api/convert/historical",
        params=parse_query(query),
        headers={"X-API-Key": API_KEY}
    ).json(),
    description="Convert historical currencies to modern equivalents"
)
```

### Webhook Integration

Subscribe to rate change events (planned):

```json
{
  "url": "https://your-webhook.com/atlasconvert",
  "events": ["rate.significant_change", "new_coin.added"],
  "filters": {
    "currencies": ["USD", "EUR", "GBP"]
  }
}
```

## CMS Integration

### WordPress

Add AtlasConvert to WordPress posts with a custom block:

```php
// functions.php
function atlasconvert_shortcode($atts) {
    $atts = shortcode_atts(array(
        'theme' => 'classic',
        'lang' => 'en',
        'category' => 'currency'
    ), $atts);
    
    return sprintf(
        '<iframe src="https://atlas-convert.vercel.app/widget?theme=%s&lang=%s&category=%s" width="100%%" height="500" frameborder="0"></iframe>',
        esc_attr($atts['theme']),
        esc_attr($atts['lang']),
        esc_attr($atts['category'])
    );
}
add_shortcode('atlasconvert', 'atlasconvert_shortcode');
```

Usage: `[atlasconvert theme="onyx" lang="fr" category="currency"]`

### Notion

Embed AtlasConvert in Notion pages using the `/embed` block:

1. Type `/embed` in Notion
2. Paste: `https://atlas-convert.vercel.app/widget?theme=classic&lang=en`
3. Resize as needed

### Markdown

Embed in Markdown files:

```markdown
[![AtlasConvert](https://atlas-convert.vercel.app/media/icon-192.png)](https://atlas-convert.vercel.app)

Try the [historical converter](https://atlas-convert.vercel.app) for accurate ancient currency values.
```

## Mobile Integration

### PWA Installation

AtlasConvert can be installed as a PWA on any device:

**iOS (Safari):**
1. Open AtlasConvert in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"

**Android (Chrome):**
1. Open AtlasConvert in Chrome
2. Tap the menu (3 dots)
3. Tap "Add to Home Screen"

**Desktop (Edge/Chrome):**
1. Open AtlasConvert
2. Click the install icon in the address bar
3. Click "Install"

### React Native (Planned)

Native mobile apps are planned for V2.0:

```javascript
// Planned: @atlasconvert/react-native
import { AtlasConvert } from '@atlasconvert/react-native';

<AtlasConvert
  theme="classic"
  language="en"
  category="currency"
  onConversion={(result) => console.log(result)}
/>
```

## Authentication Integration

### Firebase Auth

AtlasConvert uses Firebase Authentication. To integrate:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  // Your config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign in
signInWithPopup(auth, provider);
```

### API Key Authentication

For API access:

```javascript
const response = await fetch('https://atlas-convert.vercel.app/api/convert/historical', {
  headers: {
    'X-API-Key': 'ac_your_key_here'
  },
  params: {
    from: 'roman_denarius',
    to: 'usd',
    amount: 1
  }
});
```
