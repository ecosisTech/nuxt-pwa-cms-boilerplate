<script setup lang="ts">
import { useThemeStore } from '../stores/theme'
import { useCartStore } from '../stores/cart'

const router = useRouter()

const themeStore = useThemeStore()
const cartStore = useCartStore()

const cookie = useCookie('cookie')

const acceptCookies = () => {
  cookie.value = true
}
</script>

<template>
  <div>
    <div class="bottom-10 z-50 fixed w-full flex justify-center" v-if="!cookie">
      <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Cookies!</h2>
          <p>By using this application, you are accepting the cookies.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="acceptCookies()">Ok</button>
            <!-- <button class="btn btn-ghost">Deny</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="navbar bg-base-100 fixed shadow">
      <div class="flex-1 hidden md:block">
        <a class="btn btn-ghost normal-case text-xl" @click="router.push('/')"><img class="w-12 mr-4" src="/favicon.ico"></a>
      </div>
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li tabindex="0">
              <details>
                <summary>Shop</summary>
                <ul class="p-2">
                  <li><a>Home</a></li>
                  <li><a>Products</a></li>
                  <li><a>Cataloques</a></li>
                </ul>
              </details>
            </li>
            <li><a>Blog</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li tabindex="0">
            <details>
              <summary>Shop</summary>
              <ul class="p-2">
                <li><a @click="router.push('/shop/')">Home</a></li>
                <li><a>Products</a></li>
                <li><a>Cataloques</a></li>
              </ul>
            </details>
          </li>
          <li><a>Blog</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="">
          <input type="checkbox" class="toggle" @click="themeStore.toggleMode()" />
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="badge badge-sm indicator-item">{{ cartStore.items.length }}</span>
              </div>
            </label>
            <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: 999€</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block" @click="router.push('/shop/cart')">View cart</button>
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
              <li><a @click="router.push('/admin')">Admin</a></li>
              <li><a @click="router.push('/admin/settings')">Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="bg-base-200 pt-16 min-h-screen">
        <slot/>
      </div>
    </section>
  </div>
</template>
