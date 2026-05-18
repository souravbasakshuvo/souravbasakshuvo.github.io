---
layout: page
title: "MediConnect – Telemedicine Video Conferencing App"
description: "A cross-platform telemedicine app enabling secure real-time video consultations, messaging, and medical data sharing between patients and healthcare professionals."
img:
importance: 3
category: "Web & App Development"
github: https://github.com/souravbasakshuvo/MediConnect-Video-Conferencing-App
---

## Overview

MediConnect is a cross-platform mobile telemedicine application developed for **BME 4232: Telemedicine & Health Care Laboratory** at KUET. Built with Flutter and Dart, it enables secure real-time video consultations, encrypted messaging, and medical data sharing between patients and healthcare professionals from a single codebase targeting both Android and iOS.

## Key Features

<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:16px;">
  <div style="border:1px solid var(--global-divider-color); border-radius:8px; padding:8px 12px; font-size:0.88em;"><i class="fas fa-lock" style="color:var(--global-theme-color);"></i> Secure Sign Up / Sign In (Firebase Auth)</div>
  <div style="border:1px solid var(--global-divider-color); border-radius:8px; padding:8px 12px; font-size:0.88em;"><i class="fas fa-video" style="color:var(--global-theme-color);"></i> Real-time Video Conferencing (ZEGOCLOUD)</div>
  <div style="border:1px solid var(--global-divider-color); border-radius:8px; padding:8px 12px; font-size:0.88em;"><i class="fas fa-comment-alt" style="color:var(--global-theme-color);"></i> Secure In-app Messaging</div>
  <div style="border:1px solid var(--global-divider-color); border-radius:8px; padding:8px 12px; font-size:0.88em;"><i class="fas fa-file-medical" style="color:var(--global-theme-color);"></i> Medical Data & Report Sharing</div>
  <div style="border:1px solid var(--global-divider-color); border-radius:8px; padding:8px 12px; font-size:0.88em;"><i class="fas fa-ambulance" style="color:var(--global-theme-color);"></i> Emergency Telemedicine Services</div>
  <div style="border:1px solid var(--global-divider-color); border-radius:8px; padding:8px 12px; font-size:0.88em;"><i class="fas fa-globe" style="color:var(--global-theme-color);"></i> Multilingual (English, Bangla, Hindi)</div>
</div>

## Tech Stack

<div style="margin-bottom:16px;">
  <span class="tag-pill">Flutter</span>
  <span class="tag-pill">Dart</span>
  <span class="tag-pill">Firebase</span>
  <span class="tag-pill">ZEGOCLOUD SDK</span>
  <span class="tag-pill">Android Studio</span>
</div>

## Architecture

Firebase handles authentication (email/password), real-time database, and cloud storage for medical files and prescriptions. ZEGOCLOUD provides a WebRTC-based SDK for low-latency video and voice calling. Flutter's single codebase compiles to native Android and iOS, sharing all UI components and business logic across platforms.

## Future Improvements

- Google and Facebook OAuth login
- Adaptive video quality based on network conditions
- Integration with wearable health devices (heart rate, SpO₂)
- Email verification on account creation

## Links

<a href="https://github.com/souravbasakshuvo/MediConnect-Video-Conferencing-App" target="_blank" style="display:inline-flex; align-items:center; gap:6px; background:var(--global-theme-color); color:#fff; padding:7px 16px; border-radius:6px; text-decoration:none; font-size:0.9em;"><i class="fab fa-github"></i> View on GitHub</a>
