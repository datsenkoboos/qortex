<template>
  <div class="w-full flex flex-col gap-5">
    <label class="text-lg">Выберите альбом</label>
    <div class="!flex w-full gap-5 overflow-x-auto">
      <QBtn
        v-for="[id, album] in Object.entries(dataStore.getAlbums())"
        :key="id"
        :outline="selectedId !== id ? true : false"
        :flat="selectedId === id ? true : false"
        :class="selectedId === id ? 'bg-blue-700 text-white' : ''"
        @click="select(id)"
        :data-testid="`album-${id}`"
      >
        <QCardSection :data-testid="`album-${id}-artist`">
          {{ album.artist.name }}
        </QCardSection>
        <QCardSection :data-testid="`album-${id}-release`">
          {{ album.releaseYear }}
        </QCardSection>
      </QBtn>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from '@/stores';
import { onMounted, ref } from 'vue';

const dataStore = useDataStore();

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const selectedId = ref('1');
function select(id: string) {
  selectedId.value = id;
  emit('update:value', selectedId.value);
}

onMounted(() => {
  emit('update:value', selectedId.value);
});
</script>
