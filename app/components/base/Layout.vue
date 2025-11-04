<script setup lang="ts">
// console.log('Layout.pulse');
</script>

<template>
  <article class="stadium-container">
    <section class="suite-container">
      <slot name="suite"></slot>
    </section>
    <section class="awning-container">
      <slot name="awning"></slot>
    </section>
    <section class="gallery-container">
      <slot name="gallery"></slot>
    </section>
    <section class="pitch-container">
      <slot name="pitch"></slot>
    </section>
  </article>
</template>

<style scoped>
.stadium-container,
.suite-container,
.awning-container,
.gallery-container {
  height: 100%;
  width: 100%;
}

.stadium-container {
  height: 100vh;
  padding: 2rem;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 20% 80%;
  grid-template-areas:
    "suite-section awning-section"
    "gallery-section pitch-section";
  column-gap: 1rem;
  row-gap: 1rem;
  column-rule: solid red;
  transition: grid-template-areas 0.5s ease;
}

.suite-container {
  grid-area: suite-section;
  background-color: darkblue;
}

.awning-container {
  grid-area: awning-section;
  background-color: red;
}

.gallery-container {
  grid-area: gallery-section;
  background-color: forestgreen;
}

.pitch-container {
  grid-area: pitch-section;
  background-color: purple;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
