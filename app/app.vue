<script setup lang="ts">
useHead({
    title: "Fractal",
});

// console.log('App.pulse');
</script>

<template>
    <main>
        <NuxtPage />
        <NuxtRouteAnnouncer />
    </main>
</template>

<style scoped>
main {
    /* Layout */
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;
    min-width: 320px;

}
</style>
