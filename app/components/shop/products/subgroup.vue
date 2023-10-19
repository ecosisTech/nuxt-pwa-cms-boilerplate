<script setup lang="ts">
const props = defineProps({
  subgroup: {
    type: Object,
    required: true
  }
})

// const image = useAssets(`/uploads/shop/groups/group-placeholder.png`)
</script>
<template>
  <div>
    <div class="bg-base-100 rounded-lg border border-base-200 shadow-md m-2">
      <nuxt-link>
      <!-- <nuxt-link :to="`/shop/${subgroup.parent}/${subgroup.slug}`"> -->
        <div>
          <img class="rounded-t-lg h-80 w-full object-cover"
          :src="(subgroup.banner) ? `/uploads/shop/groups/${subgroup.parent}/${subgroup.banner}` : '/uploads/shop/groups/group-placeholder.png'"
          >
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ subgroup.name }}
            </h5>
          </div>
          <!-- <p class="mb-3 font-medium">
            <span>Produkte:</span> {{ subgroup.length }}
          </p> -->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
