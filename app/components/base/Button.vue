<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <button class="base-button">
    {{ label }}
  </button>
</template>

<style scoped>
Button {
  color: var(--p-sky-500);
  background-color: var(--p-sky-900);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
