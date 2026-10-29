---
layout: about
title: About
permalink: /
nav: true
nav_order: 1
subtitle: Third-year Ph.D. student · HKUST NLP Group
profile: false
selected_papers: false
social: false
announcements:
  enabled: true
  scrollable: false
  limit: 5
latest_posts:
  enabled: false
---

<link rel="stylesheet" href="{{ '/assets/css/about.css' | relative_url }}?v=20261029">

<div class="home-intro">
  <div class="home-bio">
    <p>I am advised by Professor <a href="https://jxhe.github.io/">Junxian He</a> at the <a href="https://github.com/hkust-nlp">HKUST NLP Group</a>. I received my B.Eng. in Automation from Shanghai Jiao Tong University (IEEE Honor Class) in 2024.</p>
    <p>My research focuses on <strong>recursive self-improvement (RSI), coding agents, and long-horizon AI development</strong>. I study how verifiable task design and reinforcement learning can improve agents for inference-system development, logical reasoning, and tool use.</p>
    <p>At Apple MLR, I developed and publicly released <a href="https://rsi-inference.com"><strong>RSI-Inference</strong></a> (first author), a benchmark of 37 real-world tasks for coding agents that develop and maintain vLLM and SGLang on H100 and B200 GPUs.</p>
    <p>Previously, I worked on <strong>logical reasoning RL and search-agent RL</strong> at MiniMax, as a core contributor to <a href="https://arxiv.org/abs/2506.13585">MiniMax-M1</a> and <a href="https://arxiv.org/abs/2605.26494">MiniMax-M2</a>.</p>
    <nav class="home-links" aria-label="Contact and research profiles">
      <a href="mailto:jliugi@connect.ust.hk">Email</a>
      <a href="https://scholar.google.com/citations?user=tbK9jl4AAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
      <a href="https://github.com/Vicent0205" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="{{ '/cv/' | relative_url }}">CV</a>
    </nav>
  </div>
  <figure class="home-portrait">
    <img src="{{ '/assets/img/home-portrait.webp' | relative_url }}" alt="Junteng Liu" width="380" height="380" fetchpriority="high" decoding="async">
  </figure>
</div>

<section class="home-research" aria-labelledby="research-questions">
  <h2 id="research-questions">Research questions</h2>
  <ol>
    <li>How can we train agents to do ultra-long-horizon RSI or AI4AI development?</li>
    <li>Beyond coding agents, what other domains can we explore?</li>
  </ol>
</section>
