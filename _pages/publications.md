---
layout: page
permalink: /publications/
title: Publications
description: Research papers and technical reports.
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

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
      </label>
    </div>
    <div class="publication-filter-row">
      <div class="publication-filters" role="group" aria-label="Filter by contribution">
        <button type="button" data-publication-filter="" aria-pressed="true">All <span>12</span></button>
        <button type="button" data-publication-filter="first" aria-pressed="false">First author <span>4</span></button>
        <button type="button" data-publication-filter="report" aria-pressed="false">Technical reports <span>2</span></button>
        <button type="button" data-publication-filter="other" aria-pressed="false">Other papers <span>6</span></button>
      </div>
      <p class="publication-count" data-publication-count role="status" aria-live="polite">12 publications</p>
    </div>
  </div>
  <p class="publication-note">* Equal contribution.</p>
  {% assign publication_groups = 'first,report,other' | split: ',' %}
  {% for group in publication_groups %}
    <section class="publication-group" data-publication-group aria-labelledby="publication-heading-{{ group }}">
      <h2 id="publication-heading-{{ group }}">{% case group %}{% when 'first' %}First-author papers{% when 'report' %}Technical reports{% when 'other' %}Other publications{% endcase %}</h2>
      {% assign papers = site.data.publications | where: 'group', group %}
      {% for paper in papers %}
        <article class="publication-row" data-publication data-group="{{ paper.group }}" data-year="{{ paper.year }}" aria-labelledby="paper-{{ paper.id }}">
          <a class="publication-preview" href="{{ paper.paper }}" target="_blank" rel="noopener noreferrer" aria-label="Read {{ paper.title | escape }}">
            <img src="{{ paper.preview | relative_url }}" alt="{{ paper.preview_alt | escape }}" loading="lazy" decoding="async" width="640" height="400">
          </a>
          <div class="publication-body">
            <div class="publication-meta"><span class="publication-venue">{{ paper.venue }}</span><span class="publication-date">{{ paper.year }}</span>{% if paper.group == 'first' %}<span class="publication-role">First author</span>{% endif %}</div>
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
    </section>
  {% endfor %}
  <p class="publication-empty" data-publication-empty hidden>No publications match these filters. Try another search or year.</p>
</div>
<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
