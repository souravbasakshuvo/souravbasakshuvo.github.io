---
layout: page
title: "VitaSync: A Smart Band for Telemedicine Applications"
description: "Wearable smart band tracking heart rate, temperature, and SpO₂ with real-time mobile app and email alert mechanism for health irregularities."
img:
importance: 4
category: "IoT & Embedded Systems"
lightbox2: true
---

VitaSync started as a course project for BME 4232 Telemedicine at KUET, but it quickly became one of the more hands-on experiences of my undergraduate years. The idea was straightforward: build a wearable smart band that could measure vital signs and wirelessly transmit them to a mobile app — something cheap enough to be practical in low-resource settings where commercial smartwatches are out of reach.

We were a team of five, and over the course of the semester we went from a rough block diagram on paper to a working prototype on a veroboard that could read your heart rate, blood oxygen, and temperature, display everything on a tiny OLED screen, and send the data to a doctor over email or log it to Google Sheets — all from your wrist.

## System Overview

The core idea behind VitaSync is simple: sensors → microcontroller → display + wireless transmission → alert if something looks wrong. The Arduino Nano sits at the center, collecting readings from two sensors simultaneously, averaging them for stability, and deciding whether to trigger an alert or just keep logging.

The buzzer fires automatically when body temperature exceeds 40°C or SpO2 drops below 92% — both signs that something needs immediate attention.

## Hardware

<div style="overflow-x:auto; margin-bottom:16px;">
<table style="width:100%; border-collapse:collapse; font-size:0.95em;">
<thead><tr style="background:var(--global-card-bg-color);">
<th style="padding:8px 14px; text-align:left; border-bottom:2px solid var(--global-divider-color);">Component</th>
<th style="padding:8px 14px; text-align:left; border-bottom:2px solid var(--global-divider-color);">Role</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 14px;"><strong>Arduino Nano (ATmega328P)</strong></td><td style="padding:8px 14px;">Central microcontroller — 16 MHz, 5V logic, 14 digital I/O pins</td></tr>
<tr><td style="padding:8px 14px;"><strong>MAX30100</strong></td><td style="padding:8px 14px;">Optical pulse oximeter and heart rate sensor (I²C)</td></tr>
<tr><td style="padding:8px 14px;"><strong>MLX90614</strong></td><td style="padding:8px 14px;">Contactless IR thermometer for body and ambient temperature (I²C)</td></tr>
<tr><td style="padding:8px 14px;"><strong>HC-05 Bluetooth</strong></td><td style="padding:8px 14px;">Wireless data link to mobile app</td></tr>
<tr><td style="padding:8px 14px;"><strong>0.96" OLED (SSD1306)</strong></td><td style="padding:8px 14px;">128×32 real-time display of all four parameters</td></tr>
<tr><td style="padding:8px 14px;"><strong>Buzzer (Electromechanical)</strong></td><td style="padding:8px 14px;">Emergency alert — 3,300 Hz, 3–24V DC</td></tr>
<tr><td style="padding:8px 14px;"><strong>LiPo Battery</strong></td><td style="padding:8px 14px;">Portable power supply (3.7V nominal)</td></tr>
<tr><td style="padding:8px 14px;"><strong>Veroboard + Switch</strong></td><td style="padding:8px 14px;">Circuit assembly and power control</td></tr>
</tbody>
</table>
</div>

<div style="display:flex; gap:12px; flex-wrap:wrap; margin:16px 0;">
  <div style="flex:1; min-width:280px; text-align:center;">
    <a href="/assets/img/projects/vitasync/circuit_diagram.png" data-lightbox="vitasync" data-title="VitaSync circuit diagram">
    <img src="/assets/img/projects/vitasync/circuit_diagram.png" alt="Circuit diagram" style="max-width:100%; border-radius:8px;"></a>
    <p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Circuit diagram</em></p>
  </div>
  <div style="flex:1; min-width:280px; text-align:center;">
    <a href="/assets/img/projects/vitasync/hardware_final.jpg" data-lightbox="vitasync" data-title="Final hardware implementation on veroboard">
    <img src="/assets/img/projects/vitasync/hardware_final.jpg" alt="Final hardware" style="max-width:100%; border-radius:8px;"></a>
    <p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Final hardware implementation</em></p>
  </div>
</div>

## How It Works

The firmware runs a continuous loop: the MAX30100 collects ten consecutive heart rate and SpO2 readings, averages them to reduce noise, and passes the result to the display and serial output. The MLX90614 reads ambient and body temperature on the same cycle. Every iteration, the Arduino checks the thresholds — if body temperature is above 40°C or SpO2 is below 92%, the buzzer activates.

Data goes two ways simultaneously: onto the OLED display for immediate local readout, and over Bluetooth to the mobile app. Inside the app (built with MIT App Inventor), the user can see all four readings live and hit one of two buttons — "Send via Email" dispatches a formatted message to a doctor or caregiver, while "Send to Google Sheet" logs the values and auto-generates trend graphs for all parameters over time.

<div style="display:flex; gap:12px; flex-wrap:wrap; margin:16px 0;">
  <div style="flex:1; min-width:280px; text-align:center;">
    <a href="/assets/img/projects/vitasync/block_diagram.png" data-lightbox="vitasync" data-title="System block diagram">
    <img src="/assets/img/projects/vitasync/block_diagram.png" alt="Block diagram" style="max-width:100%; border-radius:8px;"></a>
    <p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>System block diagram</em></p>
  </div>
  <div style="flex:1; min-width:280px; text-align:center;">
    <a href="/assets/img/projects/vitasync/flowchart.png" data-lightbox="vitasync" data-title="System flowchart">
    <img src="/assets/img/projects/vitasync/flowchart.png" alt="Flowchart" style="max-width:100%; border-radius:8px;"></a>
    <p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>System flowchart</em></p>
  </div>
</div>

## Mobile App

The Android app was built entirely in MIT App Inventor. It pairs with the HC-05 Bluetooth module, parses the comma-separated serial output from Arduino, and displays heart rate, SpO2, ambient temperature, and body temperature in real time. The email feature uses a pre-configured recipient list, and the Google Sheet integration uses a web API call triggered by the button press.

This keeps the data flow manual by design — rather than streaming everything continuously and flooding the sheet, the caregiver or patient decides when to push a snapshot.

<div style="display:flex; gap:12px; flex-wrap:wrap; margin:16px 0;">
  <div style="flex:1; min-width:280px; text-align:center;">
    <a href="/assets/img/projects/vitasync/oled_output.jpg" data-lightbox="vitasync" data-title="Live readings on OLED display">
    <img src="/assets/img/projects/vitasync/oled_output.jpg" alt="OLED display output" style="max-width:100%; border-radius:8px;"></a>
    <p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Live readings on OLED display</em></p>
  </div>
  <div style="flex:1; min-width:280px; text-align:center;">
    <a href="/assets/img/projects/vitasync/app_output.jpg" data-lightbox="vitasync" data-title="Mobile app interface showing vital parameters">
    <img src="/assets/img/projects/vitasync/app_output.jpg" alt="Mobile app output" style="max-width:100%; border-radius:8px;"></a>
    <p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Mobile app interface</em></p>
  </div>
</div>

## What We Measured

Four vital parameters, all displayed together:

- **Heart Rate** — beats per minute (bpm), averaged over 10 readings
- **SpO2** — blood oxygen saturation (%), averaged over 10 readings
- **Body Temperature** — contactless IR reading in °C
- **Ambient Temperature** — room temperature in °C, useful for clinical context

## Results

Temperature readings were accurate and consistent with reference thermometers. Heart rate and SpO2 values tracked closely with a commercial smartwatch used for comparison, though there was a noticeable time delay — a direct consequence of the 10-sample averaging. This tradeoff was intentional: raw single-sample readings from the MAX30100 are too noisy to be useful, so we accepted the lag in exchange for stability.

The alert system, email dispatch, OLED output, and Google Sheet logging all worked as intended during testing. The vital parameter values were close enough to commercial devices to validate the core concept.

<div style="border:1px solid var(--global-divider-color); background:var(--global-card-bg-color); border-radius:10px; padding:14px 18px; margin:16px 0; font-size:0.95em;">
<strong>Alert thresholds:</strong> Buzzer triggers when body temperature &gt; 40°C <em>or</em> SpO2 &lt; 92%
</div>

**Known limitations:** The heart rate and SpO2 measurements have an inherent delay from averaging. The prototype runs on a non-rechargeable battery. Real-time continuous streaming to the app was not implemented in this version.

## Future Work

The natural next steps are better sensor calibration, a rechargeable battery, real-time streaming mode, and eventually machine learning-based anomaly detection that could flag unusual patterns rather than relying on fixed thresholds. Making the band physically wearable — rather than a veroboard prototype — would be the next major milestone.
