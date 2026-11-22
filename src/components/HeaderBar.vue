<script setup>
defineProps({ theme: { type: String, default: 'day' } });
</script>

<template>
  <header :class="['header-bar', theme]">
    <div class="header-main">
      <router-link to="/" class="brand" aria-label="Hurron Lucas CPA home">
        <span class="brand-name">Hurron Lucas</span>
        <span class="brand-detail">CPA · Tax &amp; Bookkeeping · St. Albans, Queens</span>
      </router-link>
      <a class="phone-link" href="tel:9176743969">
        <span>Call</span>
        <strong>(917) 674-3969</strong>
      </a>
    </div>
    <nav class="primary-nav" aria-label="Primary">
      <div class="primary-nav-inner">
        <router-link to="/services">Tax Services</router-link>
        <router-link to="/bookkeeping">Bookkeeping</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
  </header>
</template>
