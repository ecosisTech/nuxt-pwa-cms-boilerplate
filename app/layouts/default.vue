<script setup lang="ts">
import { useThemeStore } from '../stores/theme'
import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart'
import { useProductsStore } from '../stores/products'

const router = useRouter()

const themeStore = useThemeStore()
const userStore = useUserStore()
const cartStore = useCartStore()
const productsStore = useProductsStore()

const cookie = useCookie('cookie')

const acceptCookies = () => {
  cookie.value = true
}

const searchbar = ref(false)

const activateSearchBar = () => {
  return searchbar.value = !searchbar.value
}

const getLogo = computed(() => {
  if (themeStore.colorMode.preference === 'dark') {
    return 'logo.png'
  }

  if (themeStore.colorMode.preference === 'light') {
    return 'logo_dark.png'
  }
})

onBeforeMount(async () => {
  await productsStore.fetchProducts()
  await productsStore.fetchGroups()
})
</script>

<template>
  <div>
    <div class="bottom-10 z-50 fixed w-full flex justify-center" v-if="!cookie">
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Cookies!</h2>
          <p>Für die Benutzerfreundlichkeit nutzen wir Cookies</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="acceptCookies()">Ok</button>
            <!-- <button class="btn btn-ghost">Deny</button> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <div class="flex justify-center w-full my-4 fixed z-50">
      <div class="navbar backdrop-blur-sm bg-base-100/70 z-50 md:w-1/3 rounded rounded-full shadow mx-4">

        <!-- Navbar Start -->
        <div class="navbar-start">
          <!-- Menu -->
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a @click="router.push(`/shop/`)">Home</a></li>
              <li><a @click="router.push(`/shop/${group.slug}`)" v-for="group in productsStore.groups">{{ group.name }}</a></li>
            </ul>
          </div>

          <!-- Search Button -->
          <button class="btn btn-ghost btn-circle w-12" @click="activateSearchBar()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </div>

        <!-- Navbar Center -->
        <div class="navbar-center">
          <input type="text" placeholder="Suche..." class="input input-ghost w-full w-full rounded rounded-full" disabled v-if="searchbar"/>
          <NuxtLink class="btn btn-ghost normal-case text-xl font-thin" to="/" v-if="!searchbar">
            <img class="h-12" :src="getLogo" alt="The Crowned Lion">
          </NuxtLink>
        </div>

        <!-- Navbar End -->
        <div class="navbar-end">
          <!-- <div class="">
            <input type="checkbox" class="toggle" @click="themeStore.toggleMode()" />
          </div> -->
          <div class="flex">
            <!-- Cart -->
            <div class="dropdown dropdown-end btn btn-ghost btn-circle">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span class="badge badge-primary badge-sm indicator-item">{{ cartStore.items.length }}</span>
                </div>
              </label>
              <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                  <span class="font-bold text-lg">{{ cartStore.items.length }} Produkte</span>
                  <span class="text-info">Total: {{ cartStore.calcTotal() }}€</span>
                  <div class="card-actions">
                    <button class="btn btn-primary btn-block" @click="router.push('/shop/cart')">Warenkorb</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Account -->
            <NuxtLink class="btn btn-ghost btn-circle" to="/login" v-if="!userStore.isAuthenticated">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
            </NuxtLink>
            <div class="dropdown dropdown-end btn btn-ghost btn-circle" v-else>
              <label tabindex="0" class="btn btn-ghost btn-circle avatar flex justify-center items-center">
                <div class="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li v-if="userStore.isAdmin"><NuxtLink to="/admin">Admin</NuxtLink></li>
                <li><NuxtLink to="/settings">Settings</NuxtLink></li>
                <li class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Dark/Light</span>
                    <input type="checkbox" class="toggle" @click="themeStore.toggleMode()" />
                  </label>
                </li>
                <li><NuxtLink to="/shop">Logout</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="bg-base-200 min-h-screen">
      <slot/>
      <Footer/>
    </section>
  </div>
</template>

<style>
</style>
