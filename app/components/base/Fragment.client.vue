<script setup lang="ts">
const { name } = defineProps<{
    name: string;
}>();
console.log('BaseFragment.name', name);

</script>

<template>
    <!-- <web-fragment :fragment-id="`${name}-shard`"> -->
    <web-fragment fragment-id="solid-shard">
    </web-fragment>
</template>

<style scoped></style>
