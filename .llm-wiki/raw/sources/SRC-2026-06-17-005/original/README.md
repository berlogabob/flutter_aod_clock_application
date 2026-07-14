# Nightstand AOD Clock - Documentation

## Project Overview
The **nightstand_aod_clock** is a minimal, accessibility-oriented [[AOD (Always-on Display)|Always-on Display]] for Android and other platforms. It provides a large, high-contrast clock that fulfills several specific needs:
- Readable by users with dyslexia ([[Dyslexic Font|OpenDyslexic font]]).
- Power efficient (black background for AMOLEDs).
- [[Burn-in]] prevention for static displays.

## Quick Links
- [[Architecture]] - Technical Architecture & Data Flow
- [[Features]] - Functional Features & Optimizations
- [[Development]] - Design Decisions & Build Instructions
- [[Glossary]] - Terminology Definitions

## Getting Started

### Prerequisites
- Flutter SDK installed on your machine.
- For Android development: Android Studio or VS Code + Flutter extensions.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd flutter_aod_clock_application
   ```
2. Install dependencies:
   ```bash
   flutter pub get
   ```
3. Run the application:
   ```bash
   flutter run
   ```

## Technologies Used
- **Language:** Dart (Flutter framework)
- **UI Framework:** Flutter
- **Graphics:** [[Skia and CanvasKit|Skia/CanvasKit]]
- **Native APIs:** [[Wakelock|WakelockPlus]] (to keep screen on)
