<script setup lang="">
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()
</script>

 <template>
   <div class="container mx-auto pt-24">
     <div class="mt-12">
       <h1 class="font-bold text-3xl">Customer Informations</h1>
       <form class="flex flex-wrap py-8">

         <div class="flex flex-col">
           <div class="font-bold text-xl">
             <h2>Delivery Address</h2>
           </div>
           <div class="flex flex-wrap">
             <div class="flex flex-col pr-4">
               <!-- First Name -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your first name?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- Last Name -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your last name?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- Last Name -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your e-mail-address?</span>
                 </label>
                 <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
               </div>
             </div>

             <div class="flex flex-col pr-4">
               <!-- Street -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your street?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- City Province -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your city/province?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- Postal -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your postal?</span>
                 </label>
                 <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- State -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your State?</span>
                 </label>
                 <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
               </div>
             </div>
           </div>
         </div>

         <div class="flex flex-col">
           <div class="font-bold text-xl">
             <h2>Billing Address</h2>
           </div>
           <div class="flex flex-wrap">
             <div class="flex flex-col pr-4">
               <!-- First Name -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your first name?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- Last Name -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your last name?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- Last Name -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your e-mail-address?</span>
                 </label>
                 <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
               </div>
             </div>

             <div class="flex flex-col pr-4">
               <!-- Street -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your street?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- City Province -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your city/province?</span>
                 </label>
                 <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- Postal -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your postal?</span>
                 </label>
                 <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
               </div>

               <!-- State -->
               <div class="form-control w-full max-w-xs">
                 <label class="label">
                   <span class="label-text">What is your State?</span>
                 </label>
                 <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
               </div>
             </div>
           </div>
         </div>
       </form>
       <div class="pt-8">
         <a class="btn btn-primary" href="https://demo-pay.vivapayments.com/crownedlion" target="_blank">Pay {{ cartStore.calcTotal() }}€ with Viva</a>
       </div>
     </div>
   </div>
 </template>
