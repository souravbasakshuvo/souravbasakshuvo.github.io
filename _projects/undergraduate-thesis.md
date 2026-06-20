---
layout: page
title: "Gallbladder Cancer Classification using Parallel Transfer Learning with Multi-model Feature Fusion and LSTM"
description: "Hybrid parallel transfer learning + LSTM framework for gallbladder cancer classification, achieving 99.37% accuracy."
img:
importance: 1
category: "Biomedical Engineering"
---

TransfusionNet is a hybrid deep learning model for early detection of cervical cancer, developed as my undergraduate thesis at KUET under the BNIRA Lab. The work was published in **Results in Engineering** (Q1, IF: 9.4, CiteScore: 8.8).

The model fuses VGG19, ResNet50, and Vision Transformer (ViT) using an early-layer feature fusion strategy — unlike conventional methods that fuse only at final layers. Features from all three backbones are combined at multiple stages via concatenation and element-wise addition, enabling integration of both fine-grained and high-level information. An improved preprocessing pipeline combining CLAHE, Laplacian sharpening, bilateral filtering, and unsharp masking is applied to enhance image quality prior to classification.

TransfusionNet is trained and evaluated on the SIPaKMeD dataset (4,049 images, five classes) and validated on Herlev and LCPSI datasets. Five-fold cross-validation is employed to ensure robustness and generalizability.

## Results
- Accuracy: **99.40%** | F1-Score: **99.36%** | Sensitivity: **99.25%** | Cohen's Kappa: **99.67%** (SIPaKMeD, batch size 128)
- Outperformed the best cited model by **3.77%** on SIPaKMeD
- Surpassed top methods by **6.50%** on Herlev and **1.22%** on LCPSI datasets

## Publication
Hasan et al., "TransfusionNet: A Hybrid Deep Learning Architecture with Early-Layer Feature Fusion for Cervical Cancer Detection," *Results in Engineering*, 2025. [<a href="https://doi.org/10.1016/j.rineng.2025.104453" target="_blank" style="color:var(--global-theme-color);">DOI</a>]

<a href="https://github.com/souravbasakshuvo/TransFusionNet" target="_blank" style="color:var(--global-theme-color);">
  <i class="fab fa-github"></i> GitHub Repository
</a>
