---
layout: page
title: "Gallbladder Cancer Classification using Parallel Transfer Learning with Multi-model Feature Fusion and LSTM"
description: "Hybrid parallel transfer learning + LSTM framework for gallbladder cancer classification, achieving 99.37% accuracy."
img:
importance: 1
category: "Biomedical Engineering"
lightbox2: true
---

This thesis presents a deep learning model for gallbladder cancer classification from ultrasound images, developed at KUET under the supervision of **Dr. Mostafa Zaman Chowdhury**, Professor, Dept. of EEE, KUET (February 2024).

Gallbladder cancer is frequently diagnosed at an advanced stage with poor prognosis. Ultrasound imaging — the primary diagnostic modality — suffers from speckle noise and low contrast, making accurate classification difficult. This work proposes a parallel transfer learning architecture integrating VGG16, VGG19, XceptionNet, and ResNet50 with two LSTM layers for multi-model feature fusion and sequential pattern recognition.

## Dataset

The publicly available **GBCU (Gallbladder Cancer Ultrasound)** dataset was used — 1,255 images across three classes: Normal (432), Benign (558), and Malignant (265). Images were split 70% training, 20% validation, 10% testing.

## Preprocessing Pipeline

A custom preprocessing pipeline was developed to enhance ultrasound image quality before model input:

1. **Image Resizing** — standardized to 512×512 pixels
2. **CLAHE** (Contrast Limited Adaptive Histogram Equalization) — enhances local contrast, improving visibility of tissue boundaries concealed by speckle noise
3. **Laplacian Sharpening** — emphasizes edges and fine structural detail critical for differentiating benign from malignant tissue

<div style="text-align:center; margin:16px 0;">
<a href="/assets/img/projects/undergraduate-thesis/preprocessing_pipeline.jpg" data-lightbox="ug-thesis" data-title="Image preprocessing pipeline: Resizing → CLAHE → Laplacian Sharpening">
<img src="/assets/img/projects/undergraduate-thesis/preprocessing_pipeline.jpg" alt="Preprocessing pipeline" style="max-width:90%; border-radius:8px;">
</a>
<p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Fig. 1 — Image preprocessing pipeline</em></p>
</div>

## Model Architecture

Features are extracted in parallel from four frozen pre-trained CNN backbones (ImageNet weights):

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:0.95em;">
<thead><tr style="background:var(--global-card-bg-color);">
<th style="padding:8px 12px; text-align:left; border-bottom:2px solid var(--global-divider-color);">Backbone</th>
<th style="padding:8px 12px; text-align:left; border-bottom:2px solid var(--global-divider-color);">Feature Extraction Layer</th>
<th style="padding:8px 12px; text-align:left; border-bottom:2px solid var(--global-divider-color);">Output Shape</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 12px;">VGG16</td><td style="padding:8px 12px;">block5_conv3</td><td style="padding:8px 12px;">8×8×512</td></tr>
<tr><td style="padding:8px 12px;">VGG19</td><td style="padding:8px 12px;">block5_conv3</td><td style="padding:8px 12px;">8×8×512</td></tr>
<tr><td style="padding:8px 12px;">ResNet50</td><td style="padding:8px 12px;">conv5_block3_out</td><td style="padding:8px 12px;">4×4×2048</td></tr>
<tr><td style="padding:8px 12px;">XceptionNet</td><td style="padding:8px 12px;">block14_sepconv2_act</td><td style="padding:8px 12px;">4×4×2048</td></tr>
</tbody>
</table>
</div>

Flattened features from VGG16+XceptionNet and VGG19+ResNet50 are concatenated into two separate streams, reshaped into sequences of length 8, and each passed through an LSTM layer (256 units). The two LSTM outputs are concatenated, then passed through Dense (256) → Dropout → Dense (128) → Dropout → Dense (64) → Dense (3, softmax).

**Hyperparameters:** Input 128×128×3 · Optimizer: Adamax · Loss: Sparse Categorical Cross-Entropy · Batch size 32 · Early stopping (patience 10) · 50 epochs

<div style="text-align:center; margin:16px 0;">
<a href="/assets/img/projects/undergraduate-thesis/model_architecture.jpg" data-lightbox="ug-thesis" data-title="Proposed parallel transfer learning model architecture with dual LSTM streams">
<img src="/assets/img/projects/undergraduate-thesis/model_architecture.jpg" alt="Model architecture" style="max-width:75%; border-radius:8px;">
</a>
<p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Fig. 2 — Proposed model architecture</em></p>
</div>

## Results

5-fold cross-validation was used for robust evaluation on the GBCU dataset:

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:0.95em;">
<thead><tr style="background:var(--global-card-bg-color);">
<th style="padding:8px 12px; text-align:left; border-bottom:2px solid var(--global-divider-color);">Metric</th>
<th style="padding:8px 12px; text-align:center; border-bottom:2px solid var(--global-divider-color);">Mean</th>
<th style="padding:8px 12px; text-align:center; border-bottom:2px solid var(--global-divider-color);">Std Dev</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 12px;">Accuracy</td><td style="padding:8px 12px; text-align:center;"><strong>99.37%</strong></td><td style="padding:8px 12px; text-align:center;">0.35%</td></tr>
<tr><td style="padding:8px 12px;">F1-Score</td><td style="padding:8px 12px; text-align:center;">99.52%</td><td style="padding:8px 12px; text-align:center;">0.49%</td></tr>
<tr><td style="padding:8px 12px;">Sensitivity</td><td style="padding:8px 12px; text-align:center;">99.64%</td><td style="padding:8px 12px; text-align:center;">0.33%</td></tr>
<tr><td style="padding:8px 12px;">Specificity</td><td style="padding:8px 12px; text-align:center;">99.69%</td><td style="padding:8px 12px; text-align:center;">0.69%</td></tr>
<tr><td style="padding:8px 12px;">Cohen's Kappa</td><td style="padding:8px 12px; text-align:center;">99.22%</td><td style="padding:8px 12px; text-align:center;">0.71%</td></tr>
<tr><td style="padding:8px 12px;">ROC AUC</td><td style="padding:8px 12px; text-align:center;"><strong>100.00%</strong></td><td style="padding:8px 12px; text-align:center;">0.00%</td></tr>
</tbody>
</table>
</div>

<div style="text-align:center; margin:16px 0;">
<a href="/assets/img/projects/undergraduate-thesis/flow_diagram.jpg" data-lightbox="ug-thesis" data-title="Main flow diagram: dataset → preprocessing → model → evaluation">
<img src="/assets/img/projects/undergraduate-thesis/flow_diagram.jpg" alt="Flow diagram" style="max-width:90%; border-radius:8px;">
</a>
<p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Fig. 3 — Overall methodology flow diagram</em></p>
</div>

### Comparison with State-of-the-Art (GBCU Dataset)

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:0.95em;">
<thead><tr style="background:var(--global-card-bg-color);">
<th style="padding:8px 12px; text-align:left; border-bottom:2px solid var(--global-divider-color);">Method</th>
<th style="padding:8px 12px; text-align:center; border-bottom:2px solid var(--global-divider-color);">Accuracy</th>
<th style="padding:8px 12px; text-align:center; border-bottom:2px solid var(--global-divider-color);">Sensitivity</th>
<th style="padding:8px 12px; text-align:center; border-bottom:2px solid var(--global-divider-color);">Specificity</th>
</tr></thead>
<tbody>
<tr><td style="padding:8px 12px;">Radiologist A</td><td style="padding:8px 12px; text-align:center;">70.0%</td><td style="padding:8px 12px; text-align:center;">70.7%</td><td style="padding:8px 12px; text-align:center;">87.3%</td></tr>
<tr><td style="padding:8px 12px;">Radiologist B</td><td style="padding:8px 12px; text-align:center;">68.3%</td><td style="padding:8px 12px; text-align:center;">73.2%</td><td style="padding:8px 12px; text-align:center;">81.1%</td></tr>
<tr><td style="padding:8px 12px;">GBCNet (CVPR 2022)</td><td style="padding:8px 12px; text-align:center;">87.7%</td><td style="padding:8px 12px; text-align:center;">91.9%</td><td style="padding:8px 12px; text-align:center;">96.7%</td></tr>
<tr><td style="padding:8px 12px;">RadFormer (2023)</td><td style="padding:8px 12px; text-align:center;">90.2%</td><td style="padding:8px 12px; text-align:center;">92.9%</td><td style="padding:8px 12px; text-align:center;">90.0%</td></tr>
<tr style="background:var(--global-card-bg-color);"><td style="padding:8px 12px;"><strong>This Work</strong></td><td style="padding:8px 12px; text-align:center;"><strong>99.37%</strong></td><td style="padding:8px 12px; text-align:center;"><strong>99.64%</strong></td><td style="padding:8px 12px; text-align:center;"><strong>99.69%</strong></td></tr>
</tbody>
</table>
</div>

<div style="text-align:center; margin:16px 0;">
<a href="/assets/img/projects/undergraduate-thesis/performance_comparison.jpg" data-lightbox="ug-thesis" data-title="Performance comparison with state-of-the-art methods on GBCU dataset">
<img src="/assets/img/projects/undergraduate-thesis/performance_comparison.jpg" alt="Performance comparison" style="max-width:90%; border-radius:8px;">
</a>
<p style="font-size:0.88em; color:var(--global-text-color); margin-top:6px;"><em>Fig. 4 — Performance comparison with existing methods</em></p>
</div>

## Related Publication

As part of this thesis, an ensemble study exploring average combinations of VGG16, VGG19, XceptionNet, and ResNet50 was published at ICEEICT 2024 (best result: VGG19+XceptionNet, 85.44%). This motivated the full LSTM-based architecture presented in the thesis.

<div style="border:1px solid var(--global-divider-color); background:var(--global-card-bg-color); border-radius:10px; padding:14px 18px; margin-bottom:12px; font-size:0.95em;">
<i class="fa-solid fa-file-pdf" style="color:var(--global-theme-color);"></i>&nbsp;
<strong>Thesis Report:</strong> Gallbladder Cancer Classification using Parallel Transfer Learning with Multi-model Feature Fusion and LSTM &nbsp;·&nbsp;
<a href="https://drive.google.com/file/d/15im_P7EYahjMxCIOWzzpfx9cCPGA-V04/view?usp=sharing" target="_blank" style="color:var(--global-theme-color);">Request Access (Google Drive)</a>
</div>

<div style="border:1px solid var(--global-divider-color); background:var(--global-card-bg-color); border-radius:10px; padding:14px 18px; margin-top:8px; font-size:0.95em;">
S. B. Shuvo and M. Z. Chowdhury, "Classification of Gallbladder Cancer using Average Ensemble Learning," in <em>Proc. 6th Int. Conf. on Electrical Engineering and Information &amp; Communication Technology (ICEEICT)</em>, Dhaka, Bangladesh, 2024.
<a href="https://doi.org/10.1109/ICEEICT62016.2024.10534480" target="_blank" style="color:var(--global-theme-color);"> DOI: 10.1109/ICEEICT62016.2024.10534480</a>
</div>
