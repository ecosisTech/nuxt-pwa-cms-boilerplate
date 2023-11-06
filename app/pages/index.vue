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
  <div :style="{ 'font-family': 'Blinker' }">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Blinker">
    <!-- Hero -->
    <section class="bg-gradient-to-r via-purple-500 from-green-500 to-blue-500 text-white py-20">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold">nujin</h1>
        <p class="text-lg my-4">The Universal Fullstack Datamanagement System</p>
        <a href="#" class="bg-white text-black px-6 py-3 mt-8 rounded-full">Get Started</a>
      </div>
    </section>

    <!-- About -->
    <section class="py-20">
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-1/2">
            <img src="/images/about-image.jpg" alt="About Image" class="w-full">
          </div>
          <div class="w-1/2 pl-10">
            <h2 class="text-3xl font-bold">About</h2>
            <p class="text-lg mt-4">It's a CMS like out-of-the-boy ready-to-use fullstack boilerplate built with</p>
            <ul class="list-disc list-inside mt-4">
              <li>Nuxt 3 | Vue 3</li>
              <li>Tailwindcss</li>
              <li>DaisyUI</li>
              <li>LevelDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="bg-base-content text-neutral py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Features</h2>
        <div class="grid grid-cols-4 gap-8">
          <div class="text-center">
            <img src="/images/feature-1-icon.svg" alt="Feature 1 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">User Authentication</h3>
            <p class="mt-2">Securely manage user access to your CMS.</p>
          </div>
          <div class="text-center">
            <img src="/images/feature-2-icon.svg" alt="Feature 2 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">User Data Management</h3>
            <p class="mt-2">Easily create, read, update, and delete user data.</p>
          </div>
          <div class="text-center">
            <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">File Management</h3>
            <p class="mt-2">Efficiently organize and store your files.</p>
          </div>
          <div class="text-center">
            <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">Data Management</h3>
            <p class="mt-2">Efficiently organize and store your Data.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Extentions -->
    <section class="bg-gray-800 py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">Extensions</h2>
        <div class="grid grid-cols-4 gap-8">
          <div class="text-center">
            <img src="/images/feature-1-icon.svg" alt="Feature 1 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">Shop</h3>
            <p class="mt-2">Let it become your fully customizable onlineshop</p>
          </div>
          <div class="text-center">
            <img src="/images/feature-2-icon.svg" alt="Feature 2 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">Blog</h3>
            <p class="mt-2">Manage your Blog with ease</p>
          </div>
          <div class="text-center">
            <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">Content</h3>
            <p class="mt-2">Simply edit your landingpage content</p>
          </div>
          <div class="text-center">
            <img src="/images/feature-3-icon.svg" alt="Feature 3 Icon" class="w-20 mx-auto">
            <h3 class="text-xl font-bold mt-4">Social-Media</h3>
            <p class="mt-2">Host your community</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo -->
    <section class="container mx-auto py-12 px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 text-center">
          <h3 class="text-xl font-bold mt-4">Demo</h3>
          <p class="mt-2">Checkout out the demo!</p>
          <img src="/images/feature-1-icon.svg" alt="Feature 1 Icon" class="w-20 mx-auto">
        </div>
        <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <iframe src="https://codesandbox.io/embed/cta-example-9hx7dh?fontsize=14&hidenavigation=1&theme=dark"
            style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
            title="cta-example"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
          </iframe>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section>
      <div class="bg-gray-900">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              Supercharge Your Development Process
            </h2>
            <p class="mt-4 text-lg text-gray-300">
              Download and install our free boilerplate to save time and effort on your next project.
            </p>
            <a href="https://example.com/boilerplate-download" class="mt-8 inline-flex items-center px-6 py-3 border border-green-400 text-base font-medium rounded-full text-white bg-green-600 hover:bg-indigo-700">
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 2 -->
    <section class="bg-indigo-800 py-12 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Hire Our Developers</h2>
        <p class="text-center text-white mb-8">And get your own customized version within the same month with 10x less costs!</p>
        <div class="flex justify-center">
          <a href="https://example.com/boilerplate-download" class="mt-8 inline-flex items-center px-6 py-3 border border-blue-400 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-indigo-700">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
</style>
