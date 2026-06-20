---
layout: page
title: "Telechroma: Smart Colorimetric Analyzer"
description: "Portable Arduino-based colorimetric analyzer that quantifies biological analytes from urine samples via color sensing, with wireless Bluetooth transmission to a mobile app."
img: assets/img/projects/telechroma_device.jpg
importance: 8
category: "IoT & Embedded Systems"
---

Telechroma is a portable, affordable colorimetric analyzer developed for telemedicine applications as part of the BME 4232 Telemedicine & Health Care Laboratory course at KUET.

The device analyzes the concentration of biological analytes (e.g., glucose in urine) based on color changes in samples using colorimetric analysis. Readings are wirelessly transmitted via Bluetooth to a custom Android app, enabling remote diagnostics and consultations from resource-limited settings.

## Hardware
- Arduino Nano (V3.0) — microcontroller for sensor data processing
- TCS3200 Color Sensor — measures color changes in biological samples
- HC-05 Bluetooth Module — wireless communication with the mobile app

## Software
- Arduino IDE — firmware development
- MIT App Inventor — Android mobile application

## Key Features
- **Dual Mode Operation**: Use either the dedicated colorimetric device or a smartphone camera for analysis
- Real-time Bluetooth data transmission to mobile app
- Compact, low-cost design suitable for point-of-care use

## Results
- Device mode accuracy: **100%**
- Camera mode accuracy: **80%**

<a href="https://github.com/souravbasakshuvo/Telechroma-Smart-Colorimetric-Analyzer" target="_blank" style="color:var(--global-theme-color);">
  <i class="fab fa-github"></i> GitHub Repository
</a>
