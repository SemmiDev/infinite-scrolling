import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  
  actions: {
    addProducts(products) {
      this.products.push(...products)
    }
  }
})
