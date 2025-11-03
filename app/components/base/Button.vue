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
    color: darkblue;
    background-color: deepskyblue;
    padding: 0.5rem 1rem;
    /*border: none;*/
    border-radius: 0.25rem;
    cursor: pointer;
}
</style>
