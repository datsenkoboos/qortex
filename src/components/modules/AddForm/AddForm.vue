<template>
  <form @submit.prevent="submit" class="flex items-center justify-center">
    <div class="w-[600px] flex flex-col gap-5">
      <AlbumPicker @update:value="updateAlbum" />
      <QInput
        v-model="name"
        name="name"
        label="Введите название песни"
        type="text"
        outlined
        :error="nameError"
        error-message="Заполните поле"
      />
      <QInput
        min="1"
        v-model="numberInAlbum"
        name="numberInAlbum"
        label="Введите номер песни в альбоме"
        type="number"
        outlined
        :error="numberInAlbumError"
        error-message="Заполните поле"
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
import { AlbumPicker } from './components';

const dataStore = useDataStore();
const name = ref();
const nameError = ref();
const numberInAlbum = ref();
const numberInAlbumError = ref();
const albumId = ref();

function submit() {
  nameError.value = false;
  numberInAlbumError.value = false;

  if (!name.value) {
    nameError.value = true;
  }
  if (!numberInAlbum.value) {
    numberInAlbumError.value = true;
  }

  if (!nameError.value && !numberInAlbumError.value) {
    dataStore.addSong(albumId.value, name.value, numberInAlbum.value);
  }
}
function updateAlbum(id: string) {
  albumId.value = id;
}
</script>
