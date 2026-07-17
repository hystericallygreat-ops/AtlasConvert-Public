# Contributing to AtlasConvert

Thank you for your interest in contributing to AtlasConvert! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Screenshots if applicable
- Browser/device information

### Suggesting Features

Feature suggestions are welcome! Please open an issue with:

- A clear description of the feature
- The problem it solves
- Possible use cases
- Any implementation ideas

### Contributing Code

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js >= 18
- npm or yarn
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/hystericallygreat-ops/AtlasConvert-Public.git

# Install dependencies for the npm package
cd packages/historical
npm install

# Run the smoke test (requires network access)
npm test
```

### Running Examples

```bash
cd examples
npm install

# Set your API key
cp ../.env.example .env
# Edit .env with your API key

# Run an example
npm run historical
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your API key. Get a key at https://atlasconvert.com.

## Code Style

- Follow existing code patterns and conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

## Pull Request Guidelines

- Write a clear PR description
- Reference any related issues
- Include screenshots for UI changes
- Ensure all checks pass
- Keep PRs focused on a single change

## Areas for Contribution

- **Internationalization**: Help translate the UI to more languages
- **Historical Data**: Research and verify historical purchasing power data
- **Documentation**: Improve guides and API documentation
- **Testing**: Add unit and integration tests
- **Accessibility**: Improve WCAG compliance
- **Performance**: Optimize bundle size and rendering

## Code of Conduct

Please be respectful and inclusive in all interactions. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## Questions?

If you have questions, feel free to open an issue or reach out to the maintainers.
