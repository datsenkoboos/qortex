<template>
  <form @submit.prevent="submit" class="flex items-center justify-center">
    <QDialog v-model="showDialog">
      <QCard flat>
        <QCardSection class="row items-center q-pb-none">
          <div class=""></div>
          <QSpace />
          <QBtn icon="close" size="md" flat round dense v-close-popup />
        </QCardSection>

        <QCardSection class="text-lg"> Песня была добавлена </QCardSection>
      </QCard>
    </QDialog>
    <div class="w-[600px] flex flex-col gap-5">
      <AlbumSelector @update:value="updateAlbum" />
      <QInput
        v-model="name"
        name="name"
        label="Введите название песни"
        type="text"
        outlined
        :error="nameError"
        error-message="Заполните поле"
        data-testid="nameInput"
      />
      <QBtn type="submit" flat class="bg-blue-700 text-white w-full" size="md"
        >Добавить</QBtn
      >
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useDataStore } from '@/stores';
import { AlbumSelector } from './components';

const dataStore = useDataStore();
const name = ref();
const nameError = ref();
const albumId = ref();
const showDialog = ref(false);

function submit() {
  nameError.value = false;

  if (!name.value) {
    nameError.value = true;
  }

  if (!nameError.value) {
    dataStore.addSong(albumId.value, name.value);
    showDialog.value = true;
  }
}
function updateAlbum(id: string) {
  albumId.value = id;
}
</script>
