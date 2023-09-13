<script setup lang="ts">
import { RouterView } from 'vue-router';
import { AppHeader } from '@/components/modules';
</script>

<template>
  <AppHeader />
  <main class="grow px-[10%] py-10">
    <RouterView />
  </main>
</template>
