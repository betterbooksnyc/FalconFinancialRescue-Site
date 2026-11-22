<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <div>
        <p class="eyebrow">Certified Public Accountant · St. Albans, Queens</p>
        <h1>Your taxes, filed properly, by a licensed New York CPA.</h1>
        <p class="hero-lead">Falcon Rescue LLC prepares and files federal and New York State tax returns for individuals and small businesses across southeast Queens, and keeps the books that make next April straightforward.</p>
        <p class="hero-location">In person at 187-15 Jordan Ave, Saint Albans, or entirely remote if that is easier.</p>
        <div class="action-row">
          <router-link class="btn primary" to="/contact">Book a Consultation</router-link>
          <a class="btn secondary" href="tel:9176743969">Call (917) 674-3969</a>
        </div>
      </div>
      <aside class="at-a-glance">
        <h2>At a glance</h2>
        <dl>
          <div><dt>Who this is for</dt><dd>Individuals, families, and small businesses in Queens</dd></div>
          <div><dt>What you get</dt><dd>A prepared, reviewed, e-filed return and a person to call</dd></div>
          <div><dt>Where</dt><dd>187-15 Jordan Ave, Saint Albans, NY 11412</dd></div>
          <div><dt>Appointments</dt><dd>In person or remote</dd></div>
        </dl>
      </aside>
    </div>
  </section>

  <section class="section">
    <div class="credentials">
      <article class="credential"><span class="credential-label">Licensed</span><strong>NY State CPA 138577</strong><p><a href="https://eservices.nysed.gov/professions/verification-search?licenseNumber=138577&professionCode=007" target="_blank" rel="noopener">Check the NYSED register</a></p></article>
      <article class="credential"><span class="credential-label">Experience</span><strong>Individual &amp; small business</strong><p>Practical experience with personal and business tax work</p></article>
      <article class="credential"><span class="credential-label">IRS e-file</span><strong>Authorized e-file provider</strong><p>Federal and New York State returns filed electronically</p></article>
      <article class="credential"><span class="credential-label">Local</span><strong>St. Albans, Queens</strong><p>In person or remote, whichever suits you</p></article>
    </div>
  </section>

  <section class="section tinted">
    <div class="section-inner">
      <div class="section-heading"><p class="eyebrow">Where would you like to start?</p><h2>Tax help for your return and your business.</h2></div>
      <div class="choice-grid">
        <router-link class="choice-card" to="/services"><span class="kicker">Individuals and families</span><h3>I need my personal taxes done</h3><p>Federal and New York State returns, prepared and e-filed. W-2 income, self-employment, rental property, stock sales, and overdue returns.</p><span class="text-link">See what is included →</span></router-link>
        <router-link class="choice-card" to="/services"><span class="kicker">Small business owners</span><h3>I run a business</h3><p>Business returns, bookkeeping, payroll, and NYC Unincorporated Business Tax for LLCs, S-corps, partnerships, and sole proprietors.</p><span class="text-link">See what is included →</span></router-link>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-heading"><p class="eyebrow">What the practice does</p><h2>Tax filing, bookkeeping, and the city tax everyone forgets.</h2><p>Six things make up most of the work. If yours is not listed, call and ask.</p></div>
    <div class="service-grid">
      <article class="service-card"><h3><router-link to="/services">Individual tax returns</router-link></h3><p>Federal and New York State returns prepared and e-filed, including 1099 work, rentals, investments, and multi-state filings.</p></article>
      <article class="service-card"><h3><router-link to="/services">Business tax returns</router-link></h3><p>Returns for LLCs, S-corporations, partnerships, and sole proprietors filed with the IRS and New York State.</p></article>
      <article class="service-card"><h3><router-link to="/bookkeeping">Bookkeeping</router-link></h3><p>Monthly or quarterly books kept current so tax filing is a reconciliation, not an archaeology dig.</p></article>
      <article class="service-card"><h3><router-link to="/bookkeeping">Payroll</router-link></h3><p>Payroll runs, quarterly filings, W-2s, and 1099s handled for small teams across Queens.</p></article>
      <article class="service-card"><h3><router-link to="/services">NYC Unincorporated Business Tax</router-link></h3><p>Prepared for sole proprietors and partnerships operating in New York City.</p></article>
      <article class="service-card"><h3><a href="https://www.tax.ny.gov/online/electronic-notices.htm" target="_blank" rel="noopener">Notices available in your Online Services Document Summary</a></h3><p>Bring in a letter and we will explain what it means and help determine the next step.</p></article>
    </div>
  </section>

  <section class="section tinted">
    <div class="service-area">
      <div><p class="eyebrow">Service area</p><h2>Working with neighbours across southeast Queens.</h2><p>The office is on Jordan Ave in St. Albans. Clients elsewhere in New York City and New York State are welcome, with remote appointments available.</p></div>
      <ul class="area-list"><li>St. Albans</li><li>Jamaica</li><li>Hollis</li><li>Queens Village</li><li>Springfield Gardens</li></ul>
    </div>
  </section>

  <section class="cta-band"><div class="cta-band-inner"><div><h2>Ready to get your return filed?</h2><p>Book a consultation, or call and speak to the person who will prepare your return.</p></div><div class="action-row"><router-link class="btn primary" to="/contact">Book a Consultation</router-link><a class="btn secondary" href="tel:9176743969">Call (917) 674-3969</a></div></div></section>
</template>
