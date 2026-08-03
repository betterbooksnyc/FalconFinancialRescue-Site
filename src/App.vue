<script setup>
import { computed, onMounted, ref } from 'vue';
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';

const currentTheme = ref('day');

const themeClass = computed(() => {
  return currentTheme.value === 'night' ? 'night' : 'day';
});

function setThemeByTime() {
  const hour = new Date().getHours();
  currentTheme.value = hour >= 18 || hour < 6 ? 'night' : 'day';
}

onMounted(() => {
  setThemeByTime();
});
</script>

<template>
  <div class="app-shell" :data-theme="themeClass">
    <HeaderBar :theme="themeClass" />
    <main class="page-content">
      <router-view />
    </main>
    <FooterBar :theme="themeClass" />
  </div>
</template>
