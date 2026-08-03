<script setup>
defineProps({
  theme: {
    type: String,
    default: 'day'
  }
});
</script>

<template>
  <header :class="['header-bar', theme]">
    <router-link to="/" class="brand">Falcon Financial Rescue</router-link>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/pricing">Pricing</router-link>
      <router-link to="/resources">Resources</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>
