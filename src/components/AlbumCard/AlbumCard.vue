<template>
  <QCard
    flat
    bordered
    class="border-black text-lg text-center w-full"
    text-color="black"
  >
    <QCardSection horizontal class="h-full">
      <QCardSection>
        <QCardSection class="font-semibold text-xl">
          {{ data.artist.name }}
        </QCardSection>
        <QCardSection class="text-sm">
          {{ data.releaseYear }}
        </QCardSection>
      </QCardSection>
      <QCardSection class="bg-blue-700 h-full w-full p-0">
        <QCardSection
          class="text-white w-full p-5"
          v-for="song in data.content"
          :key="song.name"
        >
          {{ song.numberInAlbum }}.
          {{ song.name }}
        </QCardSection>
      </QCardSection>
    </QCardSection>
  </QCard>
</template>
<script setup lang="ts">
import type { Album } from '@/stores/models';

const props = defineProps<{
  data: Album;
}>();
</script>
