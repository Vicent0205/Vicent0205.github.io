---
layout: page
permalink: /publications/
title: Publications
description: Research papers and technical reports.
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}?v=20261013-toolbar">

<div class="publication-explorer" data-publications>
  <div class="publication-tools" data-publication-tools hidden>
    <div class="publication-search-row">
      <label class="publication-search">
        <span class="sr-only">Search publications</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg>
        <input type="search" data-publication-search placeholder="Search publications" autocomplete="off">
      </label>
      <label class="publication-year">
        <span class="sr-only">Filter by year</span>
        <select data-publication-year><option value="">All years</option><option>2026</option><option>2025</option><option>2024</option><option>2023</option></select>
        <svg class="publication-select-arrow" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m4 6 4 4 4-4"></path></svg>
      </label>
      <p class="publication-count" data-publication-count role="status" aria-live="polite">12 publications</p>
    </div>
  </div>
  <p class="publication-note">* Equal contribution.</p>
  <div class="publication-list">
    {% for paper in site.data.publications %}
        <article class="publication-row" data-publication data-year="{{ paper.year }}" aria-labelledby="paper-{{ paper.id }}">
          <a class="publication-preview" href="{{ paper.paper }}" target="_blank" rel="noopener noreferrer" aria-label="Read {{ paper.title | escape }}">
            <img src="{{ paper.preview | relative_url }}" alt="{{ paper.preview_alt | escape }}" loading="lazy" decoding="async" width="640" height="400">
          </a>
          <div class="publication-body">
            <div class="publication-meta"><span class="publication-venue">{{ paper.venue }}</span><span class="publication-date">{{ paper.year }}</span></div>
            <h3 id="paper-{{ paper.id }}"><a href="{{ paper.paper }}" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a></h3>
            <div class="publication-authors" id="authors-{{ paper.id }}">{{ paper.authors | markdownify | remove: '<p>' | remove: '</p>' }}</div>
            <button class="publication-authors-toggle" type="button" data-authors-toggle aria-expanded="false" aria-controls="authors-{{ paper.id }}" hidden>Show all authors</button>
            <div class="publication-links" aria-label="Resources for {{ paper.title | escape }}">
              <a href="{{ paper.paper }}" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 2.5h6l4 4v11H5z"></path><path d="M11 2.5v4h4M7.5 10h5M7.5 13h5"></path></svg>Paper</a>
              {% if paper.code %}<a href="{{ paper.code }}" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m6 5-5 5 5 5m8-10 5 5-5 5m-2-12-4 14"></path></svg>Code</a>{% endif %}
            </div>
          </div>
        </article>
    {% endfor %}
  </div>
  <p class="publication-empty" data-publication-empty hidden>No publications match these filters. Try another search or year.</p>
</div>
<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
