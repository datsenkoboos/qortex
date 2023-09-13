<template>
  <div class="grid gap-5 grid-cols-6">
    <ArtistCard
      v-for="[id, artist] in Object.entries(dataStore.artists)"
      :key="id"
      :data="artist"
      :data-testid="`artist-${id}`"
    />
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from '@/stores';
import { ArtistCard } from '@/components';

const dataStore = useDataStore();
</script>
