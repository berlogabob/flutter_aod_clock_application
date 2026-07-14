# Technical Architecture

## System Overview
The application follows a standard Flutter widget architecture. The `main.dart` file serves as the entry point, configuring system UI modes and initializing the app layout. See [[Features]] for implementation details.

## Component Diagram
```mermaid
graph TD
    Root[Project Root] --> Config[Configuration & Tooling]
    Root --> Assets[Assets & Resources]
    Root --> Native[Native Platform Wraps]
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
        Main_Dart --> ClockScreen["ClockScreen <br/>(StatefulWidget)"]
        ClockScreen --> TimerLogic["Timer Management & \r\n[[Burn-in]] Prevention [[Jitter]]"]
    end

    style Root fill:#f9f,stroke:#333,stroke-width:2px
    style Core fill:#bbf,stroke:#333,stroke-width:1px
    style Native fill:#dfd,stroke:#333,stroke-width:1px
    style Assets fill:#ffd,stroke:#333,stroke-width:1px
```

## Data Flow
The application follows a reactive update pattern based on timers.

```mermaid
sequenceDiagram
    participant OS as System Clock/OS
    participant App as ClockScreen State
    participant UI as Flutter Widget Tree

    Note over OS, App: Initialization
    App->>App: initState()
    App->>OS: Request [[Wakelock]] (Optional)
    App->>App: _updateTime() (Initial call)
    
    Note over App, UI: Render Initial Frame
    App-->>UI: Update State (time, offset)

    Note over App, OS: Periodic Updates
    loop Every Minute (or start of next minute)
        OS-->>App: Timer Trigger
        App->>App: _updateTime()
        Alt every 5 ticks
            App->>App: Recalculate Position [[Jitter]] (_offsetX, _offsetY)
        End
        App-->>UI: Update State (time, offset)
    end
```

### Key Data Details
- **Input:** Current system time from `DateTime.now()`.
- **Processing:** 
  - High-frequency timer updates the string representation of time.
  - Every minute tick triggers a logic check for [[Burn-in]] Prevention using position [[Jitter]].
- **Output:** Updated UI via `setState`, displaying the formatted time in an oversized font with dynamic translation offsets.

## References
- [[Features]] - Functional details
- [[Development]] - Build and Design context
- [[Glossary]] - Definition of terms
