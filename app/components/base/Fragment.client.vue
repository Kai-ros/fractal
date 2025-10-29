<script setup lang="ts">
defineProps<{
    name: string;
}>();
</script>

<template>
    <web-fragment :fragment-id="`${name}-shard`">
    </web-fragment>
</template>

<style scoped></style>
