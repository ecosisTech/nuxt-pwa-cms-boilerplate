<script setup lang="ts">
const { data } = await useFetch('/api/hello')

const input = ref('')
const savedData = ref(await $fetch( '/api/message', {
  method: 'GET'
}))

const submit = async () => {
  try {
    await $fetch( '/api/message', {
      method: 'POST',
      body: {
        data: input.value
      }
    })
    savedData.value = await $fetch( '/api/message', {
      method: 'GET'
    })
  } catch (error) {
    alert(error.message)
  }
}
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <pre>{{ savedData }}</pre>
    <input placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="input"/>
    <div class="">
      <button class="btn" @click="submit()">Button</button>
    </div>
    <NuxtWelcome />
  </div>
</template>
