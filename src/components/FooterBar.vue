<script setup>
defineProps({
  theme: {
    type: String,
    default: 'day'
  }
});
</script>

<template>
  <footer :class="['footer-bar', theme]">
    <div class="footer-main">
      <div>
        <h2>Falcon Rescue LLC</h2>
        <p>Certified Public Accountant. Tax filing and bookkeeping in St. Albans, Queens.</p>
        <div class="footer-contact">
          <span>187-15 Jordan Ave</span>
          <span>Saint Albans, NY 11412</span>
          <a href="tel:9176743969">(917) 674-3969</a>
        </div>
      </div>
      <div>
        <h3>Services</h3>
        <div class="footer-links">
          <router-link to="/services">Individual Tax Returns</router-link>
          <router-link to="/services">Business Tax Returns</router-link>
          <router-link to="/bookkeeping">Bookkeeping &amp; Payroll</router-link>
          <router-link to="/services">NYC Unincorporated Business Tax</router-link>
          <a href="https://www.tax.ny.gov/online/electronic-notices.htm" target="_blank" rel="noopener">IRS &amp; NY State Notices</a>
        </div>
      </div>
      <div>
        <h3>Practice</h3>
        <div class="footer-links">
          <router-link to="/about">About the Practice</router-link>
          <router-link to="/faq">Questions &amp; Answers</router-link>
          <router-link to="/contact">Contact &amp; Directions</router-link>
          <router-link to="/privacy">Privacy Policy</router-link>
        </div>
      </div>
    </div>
    <div class="footer-bottom">© 2026 Falcon Rescue LLC. New York State CPA license 138577.</div>
  </footer>
</template>
