---
layout: page
title: Projects
nav: true
nav_order: 5
permalink: /projects/
images:
  lightbox2: true
---

<style>
.projects-list {
  margin-bottom: 32px;
}
.project-card {
  display: flex;
  flex-direction: row;
  border: 1px solid var(--global-divider-color);
  background: var(--global-card-bg-color);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
}
.project-card-img {
  width: 220px;
  min-width: 220px;
  display: block;
  flex-shrink: 0;
  cursor: pointer;
}
.project-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.project-card-body {
  padding: 16px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.project-card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}
.project-card-title {
  font-size: 1.1em;
  font-weight: bold;
  line-height: 1.35;
  flex: 1;
  min-width: 0;
  margin: 0;
}
.project-card-title a {
  color: var(--global-theme-color);
  text-decoration: none;
}
.project-card-title a:hover {
  text-decoration: underline;
}
.project-card-duration {
  font-size: 0.9em;
  color: var(--global-text-color);
  opacity: 0.75;
  white-space: nowrap;
  flex-shrink: 0;
}
.project-card-context {
  font-size: 0.9em;
  font-style: italic;
  color: var(--global-text-color);
  margin: 0 0 8px 0;
}
.project-card-desc {
  font-size: 1em;
  color: var(--global-text-color);
  margin: 0 0 10px 0;
  flex: 1;
}
.project-tags {
  margin-bottom: 10px;
}
.tag-pill {
  display: inline-block;
  font-size: 0.85em;
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  padding: 2px 8px;
  margin: 2px 2px 2px 0;
  color: var(--global-text-color);
  white-space: nowrap;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.card-meta {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}
.category-tag {
  font-size: 0.72em;
  background: var(--global-code-bg-color);
  border-radius: 4px;
  padding: 2px 8px;
  color: var(--global-text-color);
}
.status-completed {
  font-size: 0.72em;
  background: #28a745;
  color: #fff;
  border-radius: 4px;
  padding: 2px 8px;
  font-weight: 600;
}
.card-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.card-links a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--global-divider-color);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 0.78em;
  color: var(--global-text-color);
  text-decoration: none;
  margin-left: 6px;
}
.card-links a:hover { background: var(--global-hover-color); }
.projects-section-header {
  font-size: 1.3em;
  font-weight: bold;
  margin: 32px 0 12px 0;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--global-divider-color);
}
@media (max-width: 600px) {
  .project-card {
    flex-direction: column;
  }
  .project-card-img {
    width: 100%;
    min-width: unset;
    max-height: 180px;
  }
  .project-card-img img {
    max-height: 180px;
  }
}
</style>

<h2 class="projects-section-header">Undergraduate Thesis</h2>

<div class="projects-list">

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/undergraduate-thesis/">Gallbladder Cancer Classification using Parallel Transfer Learning with Multi-model Feature Fusion and LSTM</a>
        </div>
        <div class="project-card-duration">March 2023 – February 2024</div>
      </div>
      <div class="project-card-context">B.Sc. Thesis · Khulna University of Engineering &amp; Technology</div>
      <div class="project-card-desc">Hybrid deep learning framework for gallbladder cancer classification, achieving 99.37% accuracy using quad-fold parallel CNNs and LSTM.</div>
      <div class="project-tags">
        <span class="tag-pill">Transfer Learning</span>
        <span class="tag-pill">LSTM</span>
        <span class="tag-pill">Feature Fusion</span>
        <span class="tag-pill">Deep Learning</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">Biomedical Engineering</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://drive.google.com/file/d/1EP9Gc9Oty71PAg5dS37BCEs3fagriLw0/view" target="_blank" title="Thesis Report"><i class="fas fa-file-alt"></i> Report</a>
          <a href="https://docs.google.com/presentation/d/1hbsqQ0Or0r1T2CO4VMtzNagAeTSFrLXh/edit" target="_blank" title="Defense Presentation"><i class="fas fa-chalkboard-teacher"></i> Slides</a>
        </div>
      </div>
    </div>
  </div>

</div>

<h2 class="projects-section-header">Undergraduate Projects</h2>

<div class="projects-list">

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/retinal-blood-vessel-segmentation/">Retinal Blood Vessel Segmentation</a>
        </div>
        <div class="project-card-duration">June 2023</div>
      </div>
      <div class="project-card-context">Biomedical Image Processing Laboratory · KUET</div>
      <div class="project-card-desc">MATLAB-based retinal fundus segmentation using the Principal Curvature (Hessian) method with CLAHE, achieving 96.17% accuracy for early detection of diabetic retinopathy and glaucoma.</div>
      <div class="project-tags">
        <span class="tag-pill">MATLAB</span>
        <span class="tag-pill">Image Processing</span>
        <span class="tag-pill">Principal Curvature</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">Biomedical Engineering</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://github.com/souravbasakshuvo/Retinal-Blood-Vessel-Segmentation-MATLAB" target="_blank" title="GitHub"><i class="fab fa-github"></i> Code</a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/brain-tumor-segmentation/">Brain Tumor Segmentation using MATLAB</a>
        </div>
        <div class="project-card-duration">2023</div>
      </div>
      <div class="project-card-context">Biomedical Image Processing Laboratory · KUET</div>
      <div class="project-card-desc">Segmentation of brain tumors from grayscale MRI images using morphological operations in MATLAB, as part of a Biomedical Image Processing lab project.</div>
      <div class="project-tags">
        <span class="tag-pill">MATLAB</span>
        <span class="tag-pill">Image Processing</span>
        <span class="tag-pill">Morphological Operations</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">Biomedical Engineering</span>
          <span class="status-completed">Completed</span>
        </div>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/iot-pilot-health-monitoring/">IoT Based Pilot Health Monitoring System</a>
        </div>
        <div class="project-card-duration">November 2022 – March 2023</div>
      </div>
      <div class="project-card-context">IoT &amp; Embedded Systems Laboratory · KUET</div>
      <div class="project-card-desc">ESP8266 NodeMCU system monitoring pilot vitals and aircraft state via Blynk IoT, using MAX30100, DS18B20, and BMP180 sensors to enhance flight safety.</div>
      <div class="project-tags">
        <span class="tag-pill">ESP8266</span>
        <span class="tag-pill">Arduino</span>
        <span class="tag-pill">MAX30100</span>
        <span class="tag-pill">Blynk IoT</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">IoT &amp; Embedded Systems</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://drive.google.com/file/d/1mBF9el_U4jdgKZKPjZFOQcJjD2LeXZMl/view" target="_blank" title="Project Report"><i class="fas fa-file-alt"></i> Report</a>
          <a href="https://drive.google.com/file/d/15NtNZNCfjFDGJn8mwY-fvpZWKXBsp165/view" target="_blank" title="Project Poster"><i class="fas fa-image"></i> Poster</a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/vitasync/">VitaSync: A Smart Band for Telemedicine Applications</a>
        </div>
        <div class="project-card-duration">2023</div>
      </div>
      <div class="project-card-context">Telemedicine &amp; Health Care Laboratory · KUET</div>
      <div class="project-card-desc">Wearable smart band tracking heart rate, temperature, and SpO₂ with a real-time mobile app and email alert mechanism for health irregularities.</div>
      <div class="project-tags">
        <span class="tag-pill">Wearable</span>
        <span class="tag-pill">IoT</span>
        <span class="tag-pill">Sensors</span>
        <span class="tag-pill">Mobile App</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">IoT &amp; Embedded Systems</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://drive.google.com/file/d/1Qi7Z5zVClXOs8pljxLTBEAMEJyGjsvri/view" target="_blank" title="Project Report"><i class="fas fa-file-alt"></i> Report</a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/sanitary-napkin-vending-machine/">Sanitary Napkin Vending Machine</a>
        </div>
        <div class="project-card-duration">2022</div>
      </div>
      <div class="project-card-context">FabLab · Khulna University of Engineering &amp; Technology</div>
      <div class="project-card-desc">RFID-enabled automated vending machine for menstrual hygiene products, built at FabLab KUET. 2nd Runner-Up, Intra-University Innovation Competition 2022.</div>
      <div class="project-tags">
        <span class="tag-pill">RFID</span>
        <span class="tag-pill">Arduino Mega</span>
        <span class="tag-pill">Stepper Motor</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">IoT &amp; Embedded Systems</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://drive.google.com/file/d/13ZH5ufHEbsRwfdcbcIhcAw0Ez2atlskE/view" target="_blank" title="Project Video"><i class="fas fa-video"></i> Video</a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-card">
    <a class="project-card-img" href="/assets/img/projects/telechroma_device.jpg" data-lightbox="telechroma" data-title="Telechroma: Smart Colorimetric Analyzer">
      <img src="/assets/img/projects/telechroma_device.jpg" alt="Telechroma Device">
    </a>
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/telechroma/">Telechroma: Smart Colorimetric Analyzer</a>
        </div>
        <div class="project-card-duration">2023</div>
      </div>
      <div class="project-card-context">Telemedicine &amp; Health Care Laboratory · KUET</div>
      <div class="project-card-desc">Portable Arduino + TCS3200 colorimetric analyzer for urine analyte detection, with Bluetooth transmission to a companion Android app. Supports dedicated sensor and camera modes.</div>
      <div class="project-tags">
        <span class="tag-pill">Arduino Nano</span>
        <span class="tag-pill">TCS3200</span>
        <span class="tag-pill">Bluetooth</span>
        <span class="tag-pill">MIT App Inventor</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">IoT &amp; Embedded Systems</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://github.com/souravbasakshuvo/Telechroma-Smart-Colorimetric-Analyzer" target="_blank" title="GitHub"><i class="fab fa-github"></i> Code</a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/mediconnect/">MediConnect – Video Conferencing App for Telemedicine</a>
        </div>
        <div class="project-card-duration">2023</div>
      </div>
      <div class="project-card-context">Telemedicine &amp; Health Care Laboratory · KUET</div>
      <div class="project-card-desc">Secure Android telemedicine app with encrypted video consultations, medical image and prescription sharing, and real-time chat built with Java, Firebase, and ZEGOCLOUD.</div>
      <div class="project-tags">
        <span class="tag-pill">Java</span>
        <span class="tag-pill">Firebase</span>
        <span class="tag-pill">ZEGOCLOUD</span>
        <span class="tag-pill">Android</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">Web &amp; App Development</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://drive.google.com/file/d/1E8dMBMtYx45Rwnpx9clGRlLXsnSVpL2E/view" target="_blank" title="Project Report"><i class="fas fa-file-alt"></i> Report</a>
          <a href="https://github.com/souravbasakshuvo/MediConnect-Video-Conferencing-App" target="_blank" title="GitHub"><i class="fab fa-github"></i> Code</a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-body">
      <div class="project-card-header">
        <div class="project-card-title">
          <a href="/projects/line-follower-robot/">Line Follower Robot</a>
        </div>
        <div class="project-card-duration">2022</div>
      </div>
      <div class="project-card-context">Robotics &amp; Automation · KUET</div>
      <div class="project-card-desc">Arduino-based autonomous line-following robot with IR sensors, designed and built for inter-university competition purposes.</div>
      <div class="project-tags">
        <span class="tag-pill">Arduino</span>
        <span class="tag-pill">IR Sensors</span>
        <span class="tag-pill">Robotics</span>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="category-tag">Robotics</span>
          <span class="status-completed">Completed</span>
        </div>
        <div class="card-links">
          <a href="https://drive.google.com/file/d/18u5LNBCnBUb5lvi1yTGx_0-pJWIQx4vb/view" target="_blank" title="Project Demo Video"><i class="fas fa-video"></i> Video</a>
          <a href="https://github.com/souravbasakshuvo/line-follower-robot" target="_blank" title="GitHub"><i class="fab fa-github"></i> Code</a>
        </div>
      </div>
    </div>
  </div>

</div>
