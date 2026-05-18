---
layout: page
title: "Telechroma: Smart Colorimetric Analyzer"
description: "Portable Arduino-based colorimetric analyzer that quantifies biological analytes from urine samples via color sensing, with wireless Bluetooth transmission to a mobile app."
img: assets/img/projects/telechroma_device.jpg
importance: 8
category: "IoT & Embedded Systems"
---

**Telechroma** is a portable, affordable colorimetric analyzer developed for telemedicine applications at Khulna University of Engineering & Technology (KUET). It measures the concentration of biological analytes — such as glucose in urine — based on color changes detected by a TCS3200 color sensor, then transmits results wirelessly via Bluetooth to a companion Android app for remote clinical review.

**Course:** BME 4232 Telemedicine & Health Care Laboratory  
**Instructors:** Anik Ghosh, Amit Dutta Roy  
**Date:** December 2023

---

## Hardware Components

| Component              | Role                                             |
| ---------------------- | ------------------------------------------------ |
| Arduino Nano V3.0      | Central microcontroller                          |
| TCS3200 Color Sensor   | Measures RGB color changes in biological samples |
| HC-05 Bluetooth Module | Wireless data transmission to mobile app         |

### Circuit

<div style="text-align:center; margin:16px 0;">
  <img src="/assets/img/projects/telechroma_circuit.jpg" alt="Telechroma Circuit Diagram" style="max-width:100%; border-radius:8px;">
  <p style="font-size:0.85em; color:var(--global-text-color-light); margin-top:6px;">Proposed circuit diagram</p>
</div>

---

## Dual-Mode Operation

Telechroma supports two analysis modes:

### Mode 1 — Using the Device

<div style="text-align:center; margin:16px 0;">
  <img src="/assets/img/projects/telechroma_flow_device.png" alt="Flow Diagram: Device Mode" style="max-width:100%; border-radius:8px;">
  <p style="font-size:0.85em; color:var(--global-text-color-light); margin-top:6px;">Flow diagram — device mode</p>
</div>

The TCS3200 sensor reads RGB values from the test sample. The Arduino maps these to analyte concentrations via calibration curves and sends results to the app over Bluetooth. Accuracy: **100%**.

### Mode 2 — Using a Smartphone Camera

<div style="text-align:center; margin:16px 0;">
  <img src="/assets/img/projects/telechroma_flow_camera.png" alt="Flow Diagram: Camera Mode" style="max-width:100%; border-radius:8px;">
  <p style="font-size:0.85em; color:var(--global-text-color-light); margin-top:6px;">Flow diagram — camera mode</p>
</div>

The app captures an image of the test strip, extracts color values via image processing, and performs the same concentration mapping locally. Accuracy: **80%**.

---

## Hardware Result

<div style="text-align:center; margin:16px 0;">
  <img src="/assets/img/projects/telechroma_device.jpg" alt="Telechroma Device" style="max-width:80%; border-radius:8px;">
  <p style="font-size:0.85em; color:var(--global-text-color-light); margin-top:6px;">Final hardware implementation</p>
</div>

---

## Software

- **Firmware:** Arduino IDE (C/C++) — sensor interfacing, calibration lookup, Bluetooth serial output
- **Mobile App:** MIT App Inventor — real-time data display, mode selection, Bluetooth pairing

---

## Key Features

- Portable and low-cost design using off-the-shelf components
- Real-time wireless data transmission via Bluetooth
- Dual-mode: dedicated sensor or smartphone camera
- Targets remote diagnostics in underserved areas

---

## Future Work

- Replace Bluetooth with Wi-Fi/cellular for true telemedicine integration
- Add Raspberry Pi and spectrometer modules for wider analyte detection
- Expand beyond urine analysis to blood-based colorimetric assays

---

<a href="https://github.com/souravbasakshuvo/Telechroma-Smart-Colorimetric-Analyzer" target="_blank" class="btn btn-sm" style="background:var(--global-theme-color); color:#fff; padding:6px 14px; border-radius:6px; text-decoration:none;"><i class="fab fa-github"></i> View on GitHub</a>
