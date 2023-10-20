<script setup lang="">
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()
</script>

 <template>
   <div class="container mx-auto flex pt-24 justify-center items-center p-4">
     <div class="flex flex-col justify-center items-center mt-12">
       <h1 class="font-bold text-3xl text-center">Customer Informations</h1>
       <form class="flex flex-wrap justify-center py-8">

         <!-- Container -->
         <div class="flex flex-wrap">
           <!-- Delivery Address -->
           <div class="flex flex-col bg-base-100 p-8 rounded-xl m-2">
             <div class="font-bold text-xl">
               <h2>Lieferadresse</h2>
             </div>
             <div class="flex flex-wrap">
               <div class="flex flex-col pr-4">
                 <!-- First Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Vorname</span>
                   </label>
                   <input type="text" placeholder="Vorname" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Nachname</span>
                   </label>
                   <input type="text" placeholder="Nachname" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">E-Mail-Adresse</span>
                   </label>
                   <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
                 </div>
               </div>

               <div class="flex flex-col pr-4">
                 <!-- Street -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Straße</span>
                   </label>
                   <input type="text" placeholder="Straße" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- City Province -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Ort</span>
                   </label>
                   <input type="text" placeholder="Ort" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- Postal -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">PLZ oder ZIP Code</span>
                   </label>
                   <input type="text" placeholder="PLZ/ZIP" class="input input-bordered w-full max-w-xsfull" />
                 </div>

                 <!-- State -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Land/Staat</span>
                   </label>
                   <input type="text" placeholder="Lad/Staat" class="input input-bordered w-full max-w-xs" />
                 </div>

               </div>
             </div>
           </div>

           <!-- Billing Address -->
           <div class="flex flex-col bg-base-100 p-8 rounded-xl m-2">
             <div class="font-bold text-xl">
               <h2>Rechnungsadresse</h2>
             </div>
             <div class="flex flex-wrap">
               <div class="flex flex-col pr-4">
                 <!-- First Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Vorname</span>
                   </label>
                   <input type="text" placeholder="Vorname" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Nachname</span>
                   </label>
                   <input type="text" placeholder="Nachname" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- Last Name -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">E-Mail-Adresse</span>
                   </label>
                   <input type="text" placeholder="E-Mail" class="input input-bordered w-full max-w-xs" />
                 </div>
               </div>

               <div class="flex flex-col pr-4">
                 <!-- Street -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Straße</span>
                   </label>
                   <input type="text" placeholder="Straße" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- City Province -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Ort</span>
                   </label>
                   <input type="text" placeholder="Ort" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- Postal -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">PLZ oder ZIP Code</span>
                   </label>
                   <input type="text" placeholder="PLZ/ZIP" class="input input-bordered w-full max-w-xs" />
                 </div>

                 <!-- State -->
                 <div class="form-control w-full max-w-xs">
                   <label class="label">
                     <span class="label-text">Land/Staat</span>
                   </label>
                   <input type="text" placeholder="Lad/Staat" class="input input-bordered w-full max-w-xs" />
                 </div>
               </div>
             </div>

             <!-- Addresses equals -->
             <div class="form-control w-36">
               <label class="label cursor-pointer">
                 <input type="checkbox" class="checkbox" />
                 <span class="label-text">ist Lieferadresse</span>
               </label>
             </div>
           </div>
         </div>


         <div class="w-full flex justify-center pt-8 pl-2">
           <a class="btn btn-primary" href="https://demo-pay.vivapayments.com/crownedlion" target="_blank">Pay {{ cartStore.calcTotal() }}€ with Viva</a>
         </div>
       </form>
     </div>
   </div>
 </template>
