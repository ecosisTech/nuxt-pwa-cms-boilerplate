<script setup lang="ts">
import { useThemeStore } from '../stores/theme'
import { useUserStore } from '../stores/user'
import { useClientsStore } from '../stores/clients'
import { useCartStore } from '../stores/cart'
import { useProductsStore } from '../stores/products'

const route = useRoute()
const router = useRouter()

const themeStore = useThemeStore()
const userStore = useUserStore()
const clientsStore = useClientsStore()
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

const getLogo = () => {
  if (themeStore.colorMode.preference === 'dark') {
    return 'logo.png'
  }

  if (themeStore.colorMode.preference === 'light') {
    return 'logo_dark.png'
  }
}

onBeforeMount(async () => {
  // await productsStore.fetchUser()
  await clientsStore.fetchClients()
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
          <!-- <ul class="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
            <li>
              <a>Solutions</a>
              <ul>
                <li><a>Design</a></li>
                <li><a>Development</a></li>
                <li><a>Hosting</a></li>
                <li><a>Domain register</a></li>
              </ul>
            </li>
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li><a>UI Kit</a></li>
                <li><a>Wordpress themes</a></li>
                <li><a>Wordpress plugins</a></li>
                <li>
                  <a>Open source</a>
                  <ul>
                    <li><a>Auth management system</a></li>
                    <li><a>VScode theme</a></li>
                    <li><a>Color picker app</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
          </ul> -->
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
            <img class="h-12" :src="`/${(themeStore.colorMode.preference === 'dark') ? 'logo.png' : 'logo_dark.png' }`" alt="The Crowned Lion">
          </NuxtLink>
        </div>

        <!-- Navbar End -->
        <div class="navbar-end">
          <!-- <div class="">
            <input type="checkbox" class="toggle" @click="themeStore.toggleMode()" />
          </div> -->
          <div class="btn btn-circle btn-ghost">
            <label class="swap swap-rotate">

              <!-- this hidden checkbox controls the state -->
              <input type="checkbox" @click="themeStore.toggleMode()" />

              <!-- sun icon -->
              <svg :class="`swap-${(themeStore.preference === 'light') ? 'off' : 'on'}`" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

              <!-- moon icon -->
              <svg :class="`swap-${(themeStore.preference === 'dark') ? 'on' : 'off'}`" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

            </label>
          </div>
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
                <!-- <li><NuxtLink to="/settings">Settings</NuxtLink></li> -->
                <li><NuxtLink to="/shop">Logout</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="flex bg-base-300 min-h-screen">
      <!-- Admin Menu -->
      <div class="hidden bg-base-300 md:block absolute md:static min-h-screen" v-if="userStore.isAdmin && route.path.startsWith('/admin/')">
        <ul class="menu w-auto w-max-1/4">
          <!-- <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Hub
            </a>
          </li> -->
          <li>
            <details open>
              <summary>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Shop
              </summary>
              <ul>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    Übersicht
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                    Bestellungen
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                    Produkte
                  </a>
                </li>
                <li>
                  <details open>
                    <summary>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"/><path d="M2 8v11a2 2 0 0 0 2 2h14"/></svg>
                      Kategorien
                    </summary>
                    <ul>
                      <li>
                        <a>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                          Hinzufügen
                        </a>
                      </li>
                      <li v-for="group in productsStore.groups">
                        <details class="bg-base-200 rounded rounded-xl m-2 max-w-sm">
                          <summary>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                            {{ group.name }}
                          </summary>
                          <ul>
                            <li>
                              <a class="truncate">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                Hinzufügen
                              </a>
                            </li>
                            <li v-for="subgroup in group.subgroups">
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                                {{ subgroup.name }}
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                    Kunden
                  </a>
                </li>
                <!-- <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Coupons
                  </a>
                </li> -->
              </ul>
            </details>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              User
            </a>
          </li>
          <div class="divider"></div>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Settings
            </a>
          </li>
        </ul>
      </div>

      <!-- Content -->
      <div class="bg-base-200 min-h-screen w-full flex flex-col justify-between shadow shadow-l">
        <slot/>
        <Footer/>
      </div>
    </section>
  </div>
</template>

<style>
</style>
