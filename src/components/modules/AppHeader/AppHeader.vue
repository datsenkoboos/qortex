<template>
  <header
    class="border-b-[1px] h-[64px] flex items-center justify-between px-[10%]"
  >
    <AppLogo />
    <nav class="font-semibold flex gap-5">
      <AppLink to="/">Исполнители</AppLink>
      <AppLink to="/albums">Альбомы</AppLink>
      <AppLink to="/add">Добавить песню</AppLink>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { AppLink, AppLogo } from '@/components/ui';
</script>
