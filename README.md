# Mission App

A React Native mobile application built with TypeScript.

## Tech Stack

- React Native 0.76
- TypeScript
- React Navigation (Stack + Bottom Tabs)
- Zustand (state management)

## Project Structure

```
src/
├── navigation/     # Navigation configuration
├── screens/        # Screen components
└── theme/          # Design tokens (colors, typography, spacing)
```

## Getting Started

### Prerequisites

- Node.js 18+
- [React Native environment setup](https://reactnative.dev/docs/environment-setup)

### Install

```bash
npm install
# iOS
cd ios && pod install
```

### Run

```bash
# iOS
npm run ios

# Android
npm run android
```

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start Metro bundler |
| `npm run ios` | Run on iOS simulator |
| `npm run android` | Run on Android emulator |
| `npm test` | Run tests |
| `npm run lint` | Lint code |
| `npm run type-check` | TypeScript type check |
