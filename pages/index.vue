<template>
  <div>
    
    <div v-for="product in products.products" :key="product.title" class="p-4 bg-white shadow-md break-all rounded-md mb-4">
      <div class="flex items-center space-x-4">
        <img :src="product.image" :alt="product.title" class="w-16 h-16 object-cover rounded-full flex-shrink-0">
        <div>
          <h2 class="text-sm font-semibold">{{ product.title }}</h2>
          <p class="text-xs text-gray-500">{{ product.description }}</p>
        </div>
      </div>
    </div>

    <div ref="triggerEl"></div>

    <div v-if="fetchingData" class="text-center my-4">
      <p class="text-gray-500">Fetching more data...</p>
    </div>
  </div>
</template>

<script setup>

const { data: initialProducts } = await useFetch(`https://fakestoreapi.com/products?limit=5`, {
  headers: {
    'Content-Type': 'application/json'
  },

  transform: (data) => {
    return data.map((product) => {
      return {
        title: product.title,
        image: product.image,
        description: product.description,
      }
    })
  }
})

import { useProductsStore } from '@/stores/product'
const products = useProductsStore()
products.addProducts(initialProducts.value)

const fetchingData = ref(false)
async function fetchData() {
  fetchingData.value = true

  const { data } = await useFetch(`https://fakestoreapi.com/products?limit=5`, {
    headers: {
      'Content-Type': 'application/json'
    },

    transform: (data) => {
      return data.map((product) => {
        return {
          title: product.title,
          image: product.image,
          description: product.description,
        }
      })
    }
  })

  // products.value = [...products.value, ...data.value]
  products.addProducts(data.value)
  fetchingData.value = false
}

const triggerEl = ref()

function observeLoadMore() {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fetchData()
    }
  }, {
    threshold: 1.0 // this is for when the element is fully visible
  })

  observer.observe(triggerEl.value)
}

onMounted(() => {
  observeLoadMore()
})
</script>
