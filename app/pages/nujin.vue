<script setup lang="ts">
import { useRouter } from 'vue-router'

const isSidebarOpen = ref(screen.width >= 768)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const router = useRouter()

router.afterEach(() => {
  if (screen.width < 768) {
    isSidebarOpen.value = false
  }
})

definePageMeta({
  layout: 'none'
})
</script>

<template>
  <div class="flex h-screen bg-base-100">
    <!-- Sidebar -->
    <aside class="bg-base-200 w-64 p-6" :class="{ 'hidden md:block': !isSidebarOpen }">
      <ul class="space-y-4">
        <li>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Services
          </a>
        </li>
        <li>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            About
          </a>
        </li>
        <!-- Add more menu items as needed -->
      </ul>
    </aside>

    <!-- Mobile Sidebar Toggle Button -->
    <button @click="toggleSidebar" class="md:hidden bg-primary p-2">
      <i :class="isSidebarOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>

    <!-- Content Container -->
    <main class="flex-1 p-4">
      <h1 class="text-2xl">Content</h1>
      <section>
        <!-- Your content here -->
      </section>
    </main>
  </div>
</template>
