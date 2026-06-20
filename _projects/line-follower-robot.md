---
layout: page
title: "Line Follower Robot with PID Controller"
description: "An autonomous line-following robot using TCRT-5000 IR sensors and PID control, built on Arduino for robotics competitions and education."
img:
importance: 7
category: "Robotics"
github: https://github.com/souravbasakshuvo/line-follower-robot
---

## Overview

An autonomous robot that follows a predefined line path using TCRT-5000 IR sensors and a PID (Proportional–Integral–Derivative) control algorithm. Developed in two hardware versions with increasing complexity, it was used in inter-university robotics competitions and engineering education projects at KUET.

## Features

- Line following on black-on-white and white-on-black surfaces
- PID-based speed and direction control for smooth cornering
- Obstacle detection via ultrasonic sensor
- Two hardware versions: v1 (basic differential drive), v2 (with tuned PID)

## Tech Stack

<div style="margin-bottom:16px;">
  <span class="tag-pill">Arduino Uno / Mega</span>
  <span class="tag-pill">C++</span>
  <span class="tag-pill">TCRT-5000 IR Sensors</span>
  <span class="tag-pill">L298N Motor Driver</span>
  <span class="tag-pill">Ultrasonic Sensor</span>
  <span class="tag-pill">PID Control</span>
</div>

## Hardware

| Component                             | Role                    |
| ------------------------------------- | ----------------------- |
| Arduino Uno                           | Central microcontroller |
| TCRT-5000 IR sensor array (5-channel) | Line detection          |
| L298N H-bridge motor driver           | DC motor control        |
| DC gear motors (×2)                   | Drive wheels            |
| Ultrasonic sensor (HC-SR04)           | Obstacle avoidance      |
| 7.4 V LiPo battery                    | Power supply            |

The PID gains (K_p, K_i, K_d) were manually tuned on a test track to achieve smooth, stable tracking at moderate speed. The derivative term dampens oscillations at sharp curves, while the integral term corrects accumulated line-offset error on straight sections.

## Links

<a href="https://github.com/souravbasakshuvo/line-follower-robot" target="_blank" style="display:inline-flex; align-items:center; gap:6px; background:var(--global-theme-color); color:#fff; padding:7px 16px; border-radius:6px; text-decoration:none; font-size:0.9em;"><i class="fab fa-github"></i> View on GitHub</a>
&nbsp;
<a href="https://drive.google.com/file/d/18u5LNBCnBUb5lvi1yTGx_0-pJWIQx4vb/view?usp=sharing" target="_blank" style="display:inline-flex; align-items:center; gap:6px; border:1px solid var(--global-theme-color); color:var(--global-theme-color); padding:7px 16px; border-radius:6px; text-decoration:none; font-size:0.9em;"><i class="fas fa-video"></i> Demo Video</a>
