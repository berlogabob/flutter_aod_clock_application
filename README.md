# flutter_aod_clock_application

<div align="center">

# Nightstand AOD Clock

**Minimal always-on display clock for Android**  
Big readable time → perfect as nightstand / wireless charging screen / modem stand

[![Flutter](https://img.shields.io/badge/Flutter-3.24+-02569B?logo=flutter&logoColor=white)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.5+-0175C2?logo=dart&logoColor=white)](https://dart.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/«your-username»/flutter_aod_clock_application?style=social)](https://github.com/«your-username»/flutter_aod_clock_application)

<img src="https://via.placeholder.com/400x800/000000/FFFFFF?text=App+Screenshot+%7C+14%3A37" alt="Screenshot of the app showing large time on black background" width="320"/>

*(Replace with real screenshot – take one on your phone!)*

</div>

<br/>

## ✨ Features

- Huge, readable time in center (HH:mm format)
- Always-on screen (prevents device sleep)
- Custom Nerd Font support (using **OpenDyslexicMNerdFont-Regular** for dyslexia-friendly reading)
- Pure black AMOLED-friendly background
- Extremely lightweight & battery-efficient when charging
- Portrait-only layout – optimized for vertical phone placement

<br/>

## 📱 Platforms

| Platform    | Supported | Notes                                 |
|-------------|-----------|---------------------------------------|
| Android     | ✅ Yes    | Main target (always-on works best)   |
| iOS         | ⚠ Partial | Wakelock may be restricted           |
| Web         | ❌ No     | Not useful for always-on use-case    |
| Windows/macOS/Linux | ❌ No | Desktop not targeted               |

<br/>

## 🚀 Quick Start

🛠️ Project Structure

```text
textflutter_aod_clock_application/
├── assets/
│   └── fonts/
│       └── OpenDyslexicMNerdFont-Regular.otf   # Your custom font
├── lib/
│   └── main.dart                               # All code in one file (minimal)
├── pubspec.yaml
└── README.md
```

## 🔧 Dependencies

PackagePurposeVersionwakelock_plusKeep screen always on^1.2.0+flutter (sdk)Core framework≥3.24
No other external packages – kept ultra-simple.

## 🎨 Customization (easy edits in main.dart)

Change font family: fontFamily: 'OpenDyslexicNerd'
Adjust letter spacing: letterSpacing: -12
Base font size: fontSize: 300 (then FittedBox scales it)
Colors: currently pure black + white – easy to make themes

## 📄 License

Distributed under the MIT License. See LICENSE for more information.

## ❤️ Acknowledgments / Inspiration

OpenDyslexic Nerd Font – dyslexia-friendly + patched icons
wakelock_plus – reliable always-on
Flutter community & simple nightstand clock ideas

Made with ❤️ in Lisbon by @berlogabob
Star ⭐ if you find it useful!
