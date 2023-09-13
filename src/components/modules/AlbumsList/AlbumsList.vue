<template>
  <div class="grid gap-5 grid-cols-3">
    <AlbumCard
      v-for="[id, album] in Object.entries(dataStore.albums)"
      :key="id"
      :data="album"
    />
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from '@/stores';
import { AlbumCard } from '@/components';

const dataStore = useDataStore();
</script>
