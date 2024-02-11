<script setup>

const slides = ref(10);
import { useProductsStore } from '@/stores/product'
const products = useProductsStore()

</script>

<template>
  <Swiper :modules="[
    SwiperAutoplay,
    SwiperEffectCreative,
    SwiperKeyboard,
    SwiperNavigation,
    SwiperPagination,
  ]" 
  :slides-per-view="1" :loop="true" :keyboard="true" :navigation="true" :effect="'creative'" :autoplay="{
  delay: 2000,
  disableOnInteraction: true,
}" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
    <SwiperSlide v-for="product in products.products" :key="product.id">
      <div class="p-4 h-full bg-white max-w-xs break-all rounded-md mb-4">
        <div class="flex items-center space-x-4">
          <img :src="product.image" :alt="product.title" class="w-20 h-20 object-cover rounded">
          <h2 class="text-sm font-semibold">{{ product.title }}</h2>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
