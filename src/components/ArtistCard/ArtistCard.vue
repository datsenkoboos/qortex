<template>
  <QCard flat bordered class="text-lg text-center w-full" text-color="black">
    <QCardSection>
      {{ data.name }}
    </QCardSection>
  </QCard>
</template>
<script setup lang="ts">
import type { Artist } from '@/stores/models';

const props = defineProps<{
  data: Artist;
}>();
</script>
