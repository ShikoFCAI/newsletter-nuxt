<script setup>
defineProps({
    text: String
})
</script>

<template>
    <div class="flex items-start gap-4">
        <IconList />
        <span class="text-theme-darkSlateGrey">{{ text }}</span>
    </div>
</template>