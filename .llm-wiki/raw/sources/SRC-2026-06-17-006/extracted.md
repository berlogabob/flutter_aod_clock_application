# Project Report: Nightstand AOD Clock

## Overview
The **nightstand_aod_clock** is a minimal, accessibility-focused "Always-On Display" (AOD) clock application designed for Android devices with AMOLED screens. It features a dyslexia-friendly font and includes burn-in prevention mechanisms specifically for static clock displays.

## Project Diagram
```mermaid
graph TD
    Root[Project Root] --> Config[Configuration & Tooling]
    Root --> Assets[Assets & Resources]
    Root --> Native[Native Platform Wrappers]
    Root --> Core[Core Application Logic]

    subgraph "Configuration"
        Config --> Pubspec["pubspec.yaml (Dependencies/Fonts)"]
        Config --> IMl[*.iml Files]
        Config --> README["README.md / Plan files"]
    end

    subgraph "Resources"
        Assets --> Fonts["assets/fonts/ <br/>(OpenDyslexicNerd)"]
        Assets --> Icons["assets/icons/ <br/>(App Icon)"]
    end

    subgraph "Platforms"
        Native --> Android["android/ (Kotlin, Gradle)"]
        Native --> iOS["ios/ (Swift, Pods)"]
        Native --> Linux["linux/ (CMake, C++)"]
        Native --> MacOS["macos/ (Swift, Info.plist)"]
        Native --> Web["web/ (HTML, JS, CanvasKit)"]
        Native --> Windows["windows/ (C++, CMake)"]
    end

    subgraph "Application Source"
        Core --> Main_Dart["lib/main.dart"]
        Main_Dart --> AppRoot["NightstandAODApp <br/>(MaterialApp, Theme)"]
        Main_Dart --> ClockScreen引["ClockScreen <br/>(StatefulWidget)"]
        ClockScreen引 --> TimerLogic["Timer Management & \r\nBurn-in Prevention Jitter"]
    end

    style Root fill:#f9f,stroke:#333,stroke-width:2px
    style Core fill:#bbf,stroke:#333,stroke-width:1px
    style Native fill:#dfd,stroke:#333,stroke-width:1px
    style Assets fill:#ffd,stroke:#333,stroke-width:1px
```

## Key Features
- **Dyslexia Friendly:** Uses the OpenDyslexic font.
- **AMOLED Optimized:** True black background to save power and prevent ghosting.
- **Burn-in Prevention:** Automatically jitters the clock position every 5 minutes.
- **Immersive UI:** Automatically hides status and navigation bars in sticky immersive mode.
- **Wakelock Support:** Maintains display activity on supported mobile platforms.

## Technology Stack
- **Framework:** Flutter
- **Language:** Dart, Kotlin (Android), Swift (iOS/macOS)
- **Key Packages:** `wakelock_plus`
