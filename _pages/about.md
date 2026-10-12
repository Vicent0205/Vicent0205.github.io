---
layout: about
title: About
permalink: /
nav: true
nav_order: 1
subtitle: Third-year Ph.D. Student at HKUST NLP Group

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Hong Kong University of Science and Technology</p>
    <p>Clear Water Bay, Hong Kong</p>

selected_papers: false
social: false

announcements:
  enabled: true
  scrollable: true
  limit: 10

latest_posts:
  enabled: false
---

I am a third-year Ph.D. student at [HKUST NLP Group](https://github.com/hkust-nlp), advised by Professor [Junxian He](https://jxhe.github.io/). I received my B.Eng. in Automation from [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/) in 2024, as part of the IEEE Honor Class.

My research focuses on **recursive self-improvement (RSI) and coding agents for long-horizon AI development**. I study how verifiable feedback and reinforcement learning can improve agent capabilities, from logical reasoning and search to autonomous inference-system development.

I was a Research Scientist Intern at **Apple MLR** from April to September 2026, mentored by [Yizhe Zhang](https://scholar.google.com/citations?user=WDVMfggAAAAJ) and [Ruixiang Zhang](https://scholar.google.com/citations?user=VQYdApgAAAAJ). Previously, I interned at **MiniMax**, **Tencent WXG**, and **Shanghai AI Lab**.

<p class="mt-2 mb-3">
  <a href="https://scholar.google.com/citations?user=tbK9jl4AAAAJ" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary mr-2 mb-2">
    <i class="ai ai-google-scholar ai-1x"></i> Google Scholar
  </a>
  <a href="https://github.com/Vicent0205" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary mr-2 mb-2">
    <i class="fa-brands fa-github"></i> GitHub
  </a>
  <a href="{{ '/cv/' | relative_url }}" class="btn btn-sm btn-outline-secondary mr-2 mb-2">CV</a>
  <a href="mailto:jliugi@connect.ust.hk" class="btn btn-sm btn-outline-secondary mb-2">
    <i class="fa-solid fa-envelope"></i> Email
  </a>
</p>

<div class="clearfix"></div>

## Research Experience

### Apple MLR

**Research Scientist Intern · Cupertino, USA · Apr–Sep 2026**

- Developed **RSI-Inference** (working paper, first author), a benchmark for evaluating whether coding agents can autonomously develop and maintain **vLLM and SGLang** in GPU-backed sandboxes. It covers two task families:
  - **Model support:** Add native support for previously unsupported architectures, such as DeepSeek-V4, and pass correctness and serving-feature checks.
  - **Optimization:** Modify engine source code to improve throughput and latency for models already supported, under fixed deployment settings on H100 and B200 GPUs.
- In the reported evaluation snapshot, Sonnet-5.5 and Opus-5.5 achieved **1.68× / 1.48×** optimization speedups, with **27.8% / 16.7%** model-support pass@1. DeepSeek-V4.1-Flash achieved **0.0%** support pass@1 and **1.24×** speedup.

### MiniMax

**Research Intern · Shanghai, China · Feb 2025–Feb 2026**

Core contributor to MiniMax-M1 and MiniMax-M2.

- **Logical reasoning:** Developed [**SynLogic**](https://arxiv.org/abs/2505.19641) (first author, NeurIPS 2025), synthesizing rule-verifiable data across 35 logical task types and conducting RL with verifiable rewards. SynLogic-32B surpassed DeepSeek-R1-Distill-Qwen-32B on BBEH (**25.5% vs. 19.2%**). This data and RL work contributed to **MiniMax-M1**.
- **Search agents:** Developed [**WebExplorer**](https://arxiv.org/abs/2509.06501) (first author), combining web exploration, query evolution, and RL training. WebExplorer-8B surpassed WebSailor-72B on BrowseComp-en/zh (Avg@4: **15.7% vs. 12.0% / 32.0% vs. 30.1%**). The data was used in **MiniMax-M2** and formed the basis for subsequent **MiniMax-M3** search-data improvements.

### Tencent WXG

**Research Intern · Shanghai, China · Jun–Sep 2024** · Mentor: Zifei Shan

Investigated vision-encoder bottlenecks in VLM chart understanding and trained improved encoders with contrastive learning. First-author paper: [**On the Perception Bottleneck of VLMs for Chart Understanding**](https://arxiv.org/abs/2503.18435), Findings of EMNLP 2025.

### Shanghai AI Lab

**Research Intern · Shanghai, China · Jun–Dec 2023** · Mentor: Prof. Yu Cheng

Investigated a universal truthfulness hyperplane using probes trained on 40+ datasets and found that data diversity improves cross-dataset generalization. First-author paper: [**On the Universal Truthfulness Hyperplane Inside LLMs**](https://arxiv.org/abs/2407.08582), EMNLP 2024.

## Selected Publications

- [**WebExplorer: Explore and Evolve for Training Long-Horizon Web Agents**](https://arxiv.org/abs/2509.06501) · First author · arXiv 2025
- [**SynLogic: Synthesizing Verifiable Reasoning Data at Scale for Learning Logical Reasoning and Beyond**](https://arxiv.org/abs/2505.19641) · First author · NeurIPS 2025
- [**On the Perception Bottleneck of VLMs for Chart Understanding**](https://arxiv.org/abs/2503.18435) · First author · Findings of EMNLP 2025
- [**On the Universal Truthfulness Hyperplane Inside LLMs**](https://arxiv.org/abs/2407.08582) · First author · EMNLP 2024
- [**The MiniMax-M2 Series: Mini Activations Unleashing Max Real-World Intelligence**](https://arxiv.org/abs/2605.26494) · Technical report · 2026
- [**MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention**](https://arxiv.org/abs/2506.13585) · Technical report · 2025

[Full publication list →]({{ '/publications/' | relative_url }})
