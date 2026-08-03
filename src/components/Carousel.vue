<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const slides = [
  {
    title: 'Support That Moves Forward',
    text: 'We help clients create a plan that feels clear, steady, and realistic.'
  },
  {
    title: 'Trusted Guidance',
    text: 'Our team provides compassionate direction with a practical focus on recovery.'
  },
  {
    title: 'A Clear Path Ahead',
    text: 'Every step is designed to restore confidence and build momentum.'
  }
];

const activeIndex = ref(0);
let intervalId = null;

const currentSlide = computed(() => slides[activeIndex.value]);

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % slides.length;
}

function prevSlide() {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length;
}

onMounted(() => {
  intervalId = window.setInterval(nextSlide, 5000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
});
</script>

<template>
  <section class="carousel-card">
    <div class="carousel-copy">
      <h2>{{ currentSlide.title }}</h2>
      <p>{{ currentSlide.text }}</p>
    </div>
    <div class="carousel-controls">
      <button @click="prevSlide">←</button>
      <button @click="nextSlide">→</button>
    </div>
  </section>
</template>
