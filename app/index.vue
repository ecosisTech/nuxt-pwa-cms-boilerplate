<script setup lang="ts">
useHead({
  title: 'The Crowned Lion'
})
</script>

<template>
  <div class="prose lg:prose-xl">
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
</style>
