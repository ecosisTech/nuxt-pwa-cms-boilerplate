<script setup lang="ts">
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()

const router = useRouter()
</script>

 <template>
   <div class="container mx-auto m-8">
     <div class="w-full flex flex-col justify-center items-center" v-if="!cartStore.items.length">
       You have no items in your cart!
       <NuxtLink class="btn btn-primary mt-4" to="/shop">Go shopping</NuxtLink>
     </div>
     <div class="overflow-x-auto bg-base-100 rounded" v-else>
       <table class="table">
         <!-- head -->
         <thead>
           <tr>
             <th>
               <label>
                 <input type="checkbox" class="checkbox" />
               </label>
             </th>
             <th>Product</th>
             <th>Price</th>
             <th>Many</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           <!-- row 1 -->
           <tr class="hover:bg-base-300" v-for="item in cartStore.items">
           <!-- <tr class="hover:bg-base-300" v-for="item in cartStore.items" @click="router.push(`shop/product/${item.slug}`)"> -->
             <th>
               <label>
                 <input type="checkbox" class="checkbox" />
               </label>
             </th>
             <td>
               <div class="flex items-center space-x-3">
                 <div class="avatar">
                   <div class="mask mask-squircle w-12 h-12">
                     <img :src="`/uploads/shop/products/${item.image}`" />
                   </div>
                 </div>
                   <div class="flex items-center space-x-3">
                     <div>
                       <div class="font-bold">{{ item.name }}</div>
                     </div>
                   </div>
               </div>
             </td>
             <td>
               <div class="flex items-center space-x-3">
                 <div>
                   <div class="text-sm opacity-50">{{ item.price }}</div>
                 </div>
               </div>
             </td>
             <td>
               <div class="flex items-center space-x-3">
                 <div>
                   <input type="number" class="text-sm input input-bordered w-24" v-model="item.quantity"/>
                 </div>
               </div>
             </td>
             <th>
               <button class="btn btn-ghost btn-xs" @click="cartStore.removeFromCart(item)">Remove</button>
             </th>
           </tr>
         </tbody>
         <!-- foot -->
         <tfoot>
           <tr>
             <th></th>
             <th>Product</th>
             <th>Price</th>
             <th>Many</th>
             <th></th>
           </tr>
         </tfoot>

       </table>
     </div>
     <div class="w-full flex flex-wrap justify-center">
       <NuxtLink class="btn btn-primary m-2" to="/shop/checkout">Checkout</NuxtLink>
       <div class="m-2">
         <h2>Total: <b>{{ cartStore.calcTotal() }}</b></h2>
       </div>
     </div>
   </div>
 </template>
