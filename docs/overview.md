# Overview

## What is AtlasConvert?

AtlasConvert is an interactive museum and conversion engine for measurement systems across civilizations. It bridges the gap between modern currencies, historical coins, traditional regional units, and standard metric/imperial systems.

## The Problem

Every day, historians, writers, students, and curious minds face the same challenge: understanding historical and traditional measurements. AI models systematically fail at these questions — they hallucinate conversion rates, confuse historical periods, and invent values. Standard converters handle only modern units. Wikipedia provides context but no direct answers.

## The Solution

AtlasConvert provides a **deterministic conversion engine** combined with rich contextual data:

- **15+ historical coins** with academic purchasing power data
- **17 traditional regional units** across 7 civilizations  
- **170+ modern currencies** with live exchange rates
- **AI-powered assistance** that never hallucinates conversions
- **Trilingual interface** (French, English, Arabic with RTL support)

## Key Differentiators

| Feature | AtlasConvert | Standard Converters | AI Models |
|---------|-------------|-------------------|-----------|
| Historical coins | ✅ 15+ coins | ❌ | ❌ Hallucinates |
| Traditional units | ✅ 17 units | ❌ | ⚠️ Inaccurate |
| Live rates | ✅ 170+ currencies | ✅ | ❌ Outdated |
| Context | ✅ Academic sources | ❌ | ⚠️ Generic |
| Deterministic | ✅ Always accurate | ✅ | ❌ Non-deterministic |
| Offline | ✅ PWA | ❌ | ❌ |

## Technology

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Serverless Functions (Vercel)
- **Database**: Cloud Firestore
- **AI**: Google Gemini with tool-calling
- **Auth**: Firebase Auth
- **Hosting**: Vercel (Global CDN)

## Live Application

👉 **[https://atlas-convert.vercel.app](https://atlas-convert.vercel.app)**
