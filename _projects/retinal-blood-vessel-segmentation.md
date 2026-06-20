---
layout: page
title: "Retinal Blood Vessel Segmentation"
description: "MATLAB-based retinal fundus image segmentation using the Principal Curvature Method, achieving 96.17% accuracy for early detection of diabetic retinopathy and glaucoma."
img:
importance: 6
category: "Biomedical Engineering"
github: https://github.com/souravbasakshuvo/Retinal-Blood-Vessel-Segmentation-MATLAB
---

This project implements retinal blood vessel segmentation using the **Principal Curvature Method** in MATLAB, developed for the BME 4112 Biomedical Image Processing Laboratory course at KUET.

Accurate segmentation of retinal blood vessels is critical for early detection and monitoring of ocular diseases such as diabetic retinopathy and glaucoma. The pipeline applies Gaussian filtering for noise removal, CLAHE for contrast enhancement, principal curvature computation for vessel extraction, and morphological post-processing to refine results. Segmentation outputs are validated against ground truth images from the DRIVE dataset.

## Methodology
1. Load retinal fundus image and ground truth
2. Gaussian filtering for noise removal
3. Principal curvature computation (Hessian matrix eigenvalues)
4. CLAHE contrast enhancement
5. Morphological post-processing
6. Validation against ground truth

## Results
- Segmentation Accuracy: **96.17%**
- Sensitivity (TPR): 61.89%
- Specificity: 98.94%
- False Positive Rate: 1.07%

## Tools
- MATLAB R2020a

<a href="https://github.com/souravbasakshuvo/Retinal-Blood-Vessel-Segmentation-MATLAB" target="_blank" style="color:var(--global-theme-color);">
  <i class="fab fa-github"></i> GitHub Repository
</a>
