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
    <p>© 2026 Falcon Financial Rescue. Practical support for lasting recovery.</p>
    <div class="footer-links">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </footer>
</template>
