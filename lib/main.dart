import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:wakelock_plus/wakelock_plus.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  // True fullscreen from the very first frame — hides status & nav bars
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  runApp(const NightstandAODApp());
}

class NightstandAODApp extends StatelessWidget {
  const NightstandAODApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Nightstand Clock',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(useMaterial3: true),
      home: const ClockScreen(),
    );
  }
}

class ClockScreen extends StatefulWidget {
  const ClockScreen({super.key});

  @override
  State<ClockScreen> createState() => _ClockScreenState();
}

class _ClockScreenState extends State<ClockScreen> {
  Timer? _timer;
  String _time = '';
  // Burn-in prevention: slight position jitter every minute
  double _offsetX = 0;
  double _offsetY = 0;
  int _tickCount = 0;
  static const double _maxJitter = 12.0;

  @override
  void initState() {
    super.initState();

    // Enable wakelock with error handling
    WakelockPlus.enable().catchError((_) {
      // Wakelock unavailable on this platform — continue without it
    });

    _updateTime();
    _scheduleNextMinuteTick();
  }

  /// Fires exactly at the start of the next minute, then every 60 s thereafter.
  void _scheduleNextMinuteTick() {
    final now = DateTime.now();
    final msUntilNextMinute = (60 - now.second) * 1000 - now.millisecond;
    _timer = Timer(Duration(milliseconds: msUntilNextMinute), () {
      _updateTime();
      _timer = Timer.periodic(const Duration(minutes: 1), (_) => _updateTime());
    });
  }

  void _updateTime() {
    final now = DateTime.now();
    final formatted =
        '${now.hour.toString().padLeft(2, '0')}:${now.minute.toString().padLeft(2, '0')}';

    // Every 5 ticks (~5 min) shift position slightly to prevent AMOLED burn-in
    _tickCount++;
    if (_tickCount % 5 == 0) {
      _offsetX = (_tickCount * 7.3 % (2 * _maxJitter)) - _maxJitter;
      _offsetY = (_tickCount * 3.7 % (2 * _maxJitter)) - _maxJitter;
    }

    if (mounted) {
      setState(() => _time = formatted);
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    WakelockPlus.disable().catchError((_) {});
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Transform.translate(
        offset: Offset(_offsetX, _offsetY),
        child: Center(
          child: LayoutBuilder(
            builder: (context, constraints) {
              return FittedBox(
                child: SizedBox(
                  width: constraints.maxWidth * 1.05,
                  height: constraints.maxHeight * 0.85,
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Text(
                      _time.isEmpty ? '00:00' : _time,
                      style: const TextStyle(
                        fontFamily: 'OpenDyslexicNerd',
                        fontSize: 300,
                        height: 0.82,
                        letterSpacing: -12,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
