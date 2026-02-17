import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:wakelock_plus/wakelock_plus.dart';

void main() {
  runApp(const NightstandAODApp());
}

class NightstandAODApp extends StatelessWidget {
  const NightstandAODApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
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
  late Timer _timer;
  String _time = '00:00';

  @override
  void initState() {
    super.initState();
    WakelockPlus.enable(); // always on
    _updateTime();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) => _updateTime());
  }

  void _updateTime() {
    final now = DateTime.now();
    final hours = now.hour.toString().padLeft(2, '0');
    final minutes = now.minute.toString().padLeft(2, '0');
    setState(() => _time = '$hours:$minutes');
  }

  @override
  void dispose() {
    _timer.cancel();
    WakelockPlus.disable();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Force portrait (optional but good for your use-case)
    // SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);

    return Scaffold(
      backgroundColor: Colors.black,
      body: AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.light,
        child: SafeArea(
          // avoids notch/cutout overlap
          child: LayoutBuilder(
            builder: (context, constraints) {
              // constraints.maxHeight → available vertical space
              // We base font size mostly on height for vertical phone

              return Center(
                child: FittedBox(
                  fit: BoxFit.contain, // scales down to fit both width & height
                  child: SizedBox(
                    width:
                        constraints.maxWidth *
                        1.1, // slight oversize → forces scaling
                    height:
                        constraints.maxHeight *
                        0.85, // leave ~15% margin top/bottom
                    child: FittedBox(
                      fit: BoxFit.scaleDown, // or fitWidth if you prefer wider
                      child: Text(
                        _time,
                        style: TextStyle(
                          fontFamily: 'OpenDyslexicNerd',
                          fontSize:
                              300, // large base — FittedBox will scale it down
                          fontWeight: FontWeight
                              .normal, // or w300/w400 — test readability
                          height: 0.82, // tighter line height for clock look
                          letterSpacing:
                              -12, // negative → digits closer, fuller screen
                          color: Colors.white,
                        ),
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
