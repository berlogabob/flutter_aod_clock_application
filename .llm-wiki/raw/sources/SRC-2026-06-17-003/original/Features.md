# Features

## Current Features
- **Accessibility:** Uses a [[Dyslexic Font|OpenDyslexic font]] to improve readability for various users ([[Glossary]]).
- **AMOLED Optimization:** Pure black background (`Colors.black`) allows pixels to be turned off completely, which is critical for preventing [[Burn-in]] on OLED screens.
- **[[Burn-in]] Prevention:** Automatically jitters the clock position every 5 minutes by slightly shifting geometric offsets (see [[Jitter]]). Detailed logic in [[Architecture]].
- **Immersive UI:** Automatically enters full-screen [[Immersive Mode]] mode by hiding system bars to maximize usable space on mobile devices.
- **[[Wakelock]] Support:** Uses [[Wakelock]] to maintain display activity when connected to power or in persistent display modes ([[Glossary]]).

## Performance & Optimization
- **FittedBox Layout:** Ensures the clock scales perfectly across different screen densities and aspect ratios without clipping.
- **Timer Management:** Instead of a fixed 60s interval (which can drift), it calculates the exact milliseconds until the next minute, ensuring accurate "tick" synchronization.

## References
- [[Architecture]] - Technical Data Flow
- [[Development]] - Design and Build context
- [[Glossary]] - Definition of terms
