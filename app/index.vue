<script setuo lang="ts">
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
  h1 {
    @apply text-2xl font-bold;
  }
</style>
