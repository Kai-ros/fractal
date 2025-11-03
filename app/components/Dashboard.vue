<script setup lang="ts">
// console.log('Dashboard.pulse');
</script>

<template>
    <BaseLayout>
        <template #suite>
            <div>
                SUITE
            </div>
        </template>
        <template #awning>
            <div>
                AWNING
            </div>
        </template>
        <template #gallery>
            <div class="gallery-actual">
                GALLERY
                <BaseButton label="Accept" />
            </div>
        </template>
        <template #pitch>
            <BaseButton label="SolidShard" />
            <web-fragment fragment-id="solid-shard" />

            <BaseFragment name="solid" />

            <SolidShard />
        </template>
    </BaseLayout>
</template>

<style scoped>
.gallery-actual {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
