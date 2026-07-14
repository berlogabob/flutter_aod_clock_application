# Development & Design Decisions

## Design Philosophy
The app was designed with a "Minimum Viable Aesthetic" approach—prioritizing readability and functionality over complex animations or UI elements that could drain power. See [[Features]] for specific optimizations.

## Technical Decisions

### Position [[Jitter]] Logic
To prevent [[Burn-in]], we apply an intentional geometric offset:
```dart
_offsetX = (_tickCount * 7.3 % (2 * _maxJitter)) - _maxJitter;
_offsetY = (_tickCount * 3.7 % (2 * _maxJitter)) - _maxJitter;
```
The constants `7.3` and `3.7` are chosen to ensure a non-repeating, pseudo-random motion that covers the screen area without being too distracting for the user. This is detailed in [[Architecture]].

### [[Immersive Mode]] UI
We use `SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky)` on startup because:
1. It hides system bars immediately on launch.
2. The "Sticky" mode ensures they don't reappear automatically unless the user intentionally interacts with edges (swiping).

### Font Selection
[[Dyslexic Font]] (OpenDyslexic) was chosen to provide a significant UX improvement for users who struggle with reading conventional text characters, ensuring primary visibility and readability at a glance. See [[Glossary]] for more info on accessibility standards.

## Build Instructions
To build release artifacts:
- **Android:** `flutter build apk --release`
- **iOS:** `flutter build ios --release` (See documentation in the project root)
- **Desktop:** Use platform-specific commands (e.g., `flutter build windows`, `flutter build macos`).

## References
- [[Architecture]] - Technical Architecture & Data Flow
- [[Features]] - Functional Features & Optimizations
- [[Glossary]] - Terminology Definitions
