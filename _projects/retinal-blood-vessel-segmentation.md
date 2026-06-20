---
layout: page
title: "Retinal Blood Vessel Segmentation"
description: "MATLAB-based retinal fundus image segmentation using the Principal Curvature Method, achieving 96.17% accuracy for early detection of diabetic retinopathy and glaucoma."
img:
importance: 6
category: "Biomedical Engineering"
github: https://github.com/souravbasakshuvo/Retinal-Blood-Vessel-Segmentation-MATLAB
---

## Overview

Retinal blood vessel segmentation from fundus images is critical for the early detection of diabetic retinopathy and glaucoma — two leading causes of preventable blindness. This project was built for **BME 4112: Biomedical Image Processing Laboratory** at KUET, implementing the Principal Curvature (Hessian-based) method with CLAHE contrast enhancement for robust vessel detection.

## Methodology

1. **Load** retinal fundus image and ground truth mask
2. **Pre-processing** — Gaussian filtering for noise removal
3. **Segmentation** — Hessian eigenvalue computation (principal curvature) to detect tubular vessel structures
4. **Contrast Enhancement** — CLAHE (Contrast Limited Adaptive Histogram Equalization)
5. **Post-processing** — Morphological operations to refine vessel boundaries
6. **Validation** — Pixel-wise comparison against ground truth mask

## Results

| Metric              | Value  |
| ------------------- | ------ |
| Accuracy            | 96.17% |
| Sensitivity (TPR)   | 61.89% |
| Specificity         | 98.94% |
| False Positive Rate | 1.07%  |

## Tech Stack

<div style="margin-bottom:16px;">
  <span class="tag-pill">MATLAB</span>
  <span class="tag-pill">Image Processing Toolbox</span>
  <span class="tag-pill">Principal Curvature Method</span>
  <span class="tag-pill">CLAHE</span>
  <span class="tag-pill">Morphological Operations</span>
</div>

## Key Functions

- **`lamdafind()`** — computes Hessian matrix eigenvalues at each pixel to measure local curvature, identifying tubular vessel-like structures
- **`isodata()`** — iterative global thresholding via the Isodata method to binarize the enhanced vessel map

## Links

<a href="https://github.com/souravbasakshuvo/Retinal-Blood-Vessel-Segmentation-MATLAB" target="_blank" style="display:inline-flex; align-items:center; gap:6px; background:var(--global-theme-color); color:#fff; padding:7px 16px; border-radius:6px; text-decoration:none; font-size:0.9em;"><i class="fab fa-github"></i> View on GitHub</a>
