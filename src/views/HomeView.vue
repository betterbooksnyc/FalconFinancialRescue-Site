<script setup>
import Carousel from '../components/Carousel.vue';
</script>

<template>
  <section class="hero-section">
    <div class="hero-text">
      <p class="eyebrow">Trusted guidance in every season</p>
      <h1>Falcon Financial Rescue helps families recover with confidence.</h1>
      <p>
        We blend calm strategy, compassionate service, and practical tools to help clients move from stress to stability.
      </p>
      <div class="action-row">
        <router-link class="btn primary" to="/services">Explore Services</router-link>
        <router-link class="btn secondary" to="/about">Meet Our Team</router-link>
      </div>
    </div>
  </section>

  <Carousel />

  <section class="testimonial-section">
    <h2>Client voices</h2>
    <div class="testimonial-card">
      <p>“The team turned a confusing situation into a clear plan that felt manageable.”</p>
      <strong>— Jordan R.</strong>
    </div>
  </section>
</template>
