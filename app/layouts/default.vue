<script setup lang="ts">
import { useThemeStore } from '../stores/theme'
import { useCartStore } from '../stores/cart'
import { useProductsStore } from '../stores/products'

const router = useRouter()

const themeStore = useThemeStore()
const cartStore = useCartStore()
const productsStore = useProductsStore()

const cookie = useCookie('cookie')

const acceptCookies = () => {
  cookie.value = true
}

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
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a @click="router.push(`/shop/`)">Home</a></li>
              <li><a @click="router.push(`/shop/${group.slug}`)" v-for="group in productsStore.groups">{{ group.name }}</a></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <!-- <NuxtLink class="btn btn-ghost normal-case text-xl font-thin" to="/">The Crowned Lion</NuxtLink> -->
          <input type="text" placeholder="Suche..." class="input input-ghost w-full w-full" disabled />
        </div>
        <div class="navbar-end">
          <!-- <div class="">
            <input type="checkbox" class="toggle" @click="themeStore.toggleMode()" />
          </div> -->
          <div class="flex-none">
            <div class="dropdown dropdown-end">
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
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <!-- <li>
                    <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li> -->
                <!-- <li><a @click="router.push('/admin')">Admin</a></li> -->
                <li><a @click="">Settings</a></li>
                <li class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Dark/Light</span>
                    <input type="checkbox" class="toggle" @click="themeStore.toggleMode()" />
                  </label>
                </li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="bg-base-200 min-h-screen">
        <slot/>
      </div>
    </section>
  </div>
</template>
