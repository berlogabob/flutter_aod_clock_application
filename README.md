# Nightstand AOD Clock

<div align="center">

**Minimal always-on display clock for Android**  
Big readable time — perfect as nightstand / wireless charging screen / modem stand

[![Flutter](https://img.shields.io/badge/Flutter-3.24+-02569B?logo=flutter&logoColor=white)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.11+-0175C2?logo=dart&logoColor=white)](https://dart.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## ✨ Features

- **Huge, readable time** in center (HH:mm format)
- **Always-on screen** (prevents device sleep via wakelock)
- **Dyslexia-friendly font** — OpenDyslexicM Nerd Font
- **Pure black AMOLED background** — great for battery life when display is on
- **Fullscreen / immersive mode** — no status/navigation bars
- **AMOLED burn-in prevention** — subtle pixel-shift every 5 minutes
- **Portrait-only layout** — optimised for vertical phone placement on nightstand

---

## 📱 Platforms

| Platform    | Supported | Notes                                 |
|-------------|-----------|---------------------------------------|
| Android     | ✅ Yes    | Main target (always-on works best)   |
| iOS         | ⚠ Partial | Wakelock may be restricted           |
| Web / Desktop | ❌ No   | Not useful for always-on use-case    |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/berlogabob/flutter_aod_clock_application.git
cd flutter_aod_clock_application

# Install dependencies
flutter pub get

# Run on connected Android device
flutter run --release
```

---

## 🛠️ Project Structure

```
flutter_aod_clock_application/
├── assets/
│   ├── fonts/
│   │   └── OpenDyslexicMNerdFont-Regular.otf   # The only font used
│   └── icons/
│       └── icon.png
├── lib/
│   └── main.dart                               # All app code (minimal single file)
├── android/                                    # Android-specific configuration
├── pubspec.yaml
├── analysis_options.yaml
└── README.md
```

---

## 🔧 Dependencies

| Package | Purpose | Version |
|---------|---------|---------|
| `wakelock_plus` | Keep screen always on | ^1.2.0 |
| `flutter` (sdk) | Core framework | ≥3.24 |

No other external packages — kept ultra-simple.

---

## 🎨 Customization

Easy edits in [`lib/main.dart`](lib/main.dart):

| Property | Description |
|----------|-------------|
| `fontFamily: 'OpenDyslexicNerd'` | Change the font family |
| `letterSpacing: -12` | Adjust spacing between digits |
| `fontSize: 300` | Base font size (FittedBox scales it) |
| `color: Colors.white` | Text colour on black background |

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## ❤️ Acknowledgments

- [OpenDyslexic Nerd Font](https://github.com/ryanoasis/nerd-fonts) — dyslexia-friendly font with Nerd Font icons
- [wakelock_plus](https://pub.dev/packages/wakelock_plus) — reliable always-on screen
- Flutter community & simple nightstand clock ideas

Made with ❤️ in Lisbon by [@berlogabob](https://github.com/berlogabob)
Star ⭐ if you find it useful!

---

## 📦 Release Process

### Automated Release (Recommended)

Use `make release` to automatically:
1. Bump build number in `pubspec.yaml`
2. Build web version to `/docs`
3. Build release APK
4. Commit changes and create git tag
5. GitHub Actions automatically creates GitHub Release with APK attached

```bash
# Full release pipeline
make release

# Check current version
make version
```

### Manual Release for Existing Tags

If tags exist but GitHub Releases are missing:

```bash
# Option 1: Using GitHub CLI (requires gh installed and authenticated)
make release-manual TAG=v1.0.1.5

# Option 2: Using script (requires GITHUB_TOKEN)
export GITHUB_TOKEN=your_github_token_here
make create-missing-releases
```

### Getting GitHub Token

1. Go to https://github.com/settings/tokens
2. Create new token with `repo` scope
3. Export: `export GITHUB_TOKEN=ghp_xxxxx`

### APK Download

Release APKs are attached to GitHub Releases:
https://github.com/berlogabob/flutter_aod_clock_application/releases

### Obtanium Integration

This app supports [Obtanium](https://github.com/ImranR98/Obtainium) for automatic updates.
Add the repository URL to Obtanium to receive update notifications.
