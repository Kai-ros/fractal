<script setup lang="ts">
// console.log('Dashboard.pulse');
</script>

<template>
  <BaseLayout>
    <template #suite>
      <div>SUITE</div>
    </template>
    <template #awning>
      <div>AWNING</div>
    </template>
    <template #gallery>
      <div class="gallery-actual">
        GALLERY
        <BaseButton label="Accept" />
      </div>
    </template>
    <template #pitch>
      <section class="button-container">
        <BaseButton label="Pitch" />
      </section>

      <section class="solid-shard-container">
        <web-fragment fragment-id="solid-shard" />
      </section>

      <section class="tanstack-start-shard-container">
        <web-fragment fragment-id="tanstack-start-shard" />
      </section>

      <section class="vue-shard-container">
        <web-fragment fragment-id="vue-shard" />
      </section>

      <!-- INFO: NOT WORKING -->
      <!-- <BaseFragment name="solid" />
            <BaseFragment name="tanstack-start" /> -->
      <!-- <SolidShard />
            <TanstackStartShard /> -->
    </template>
  </BaseLayout>
</template>

<style scoped>
.gallery-actual {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-container {
  border: yellow solid 2px;
  padding: 1rem;
}

.solid-shard-container,
.tanstack-start-shard-container,
.vue-shard-container {
  display: block;
  border: yellow solid 2px;
  padding: 1rem;
  height: auto;
  flex-shrink: 0;
  width: 100%;
  overflow-y: auto;
}
</style>
