<script setup lang="ts">
const router = useRouter()

onBeforeMount(() => {
  router.push('/shop')
})
definePageMeta({
  auth: false,
})
</script>

<template>
  <div>
  </div>
</template>
