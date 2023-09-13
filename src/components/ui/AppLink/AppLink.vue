<template>
    <RouterLink :to="to" class="font-semibold hover:text-blue-700 transition-all" data-testid="routerLink">
        <slot />
    </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
    to: string;
}>()
</script>