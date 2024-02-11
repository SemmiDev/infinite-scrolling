<template>
  <useLoadingIndicator/>
  <div class="max-w-xl w-full mx-auto p-5">

    <div class="space-x-5 mb-5 font-semibold text-sky-400">

      <!-- https://www.youtube.com/watch?v=wptMYxScku4 -->
      <NuxtLink to="/">Manual</NuxtLink>
      
      <!-- https://vueuse.org/core/useInfiniteScroll/ -->
      <NuxtLink to="/index2">Use Infitnite</NuxtLink>
      
      <NuxtLink to="/carousel">Carousel</NuxtLink>
    </div>

    <NuxtPage/>
  </div>
</template>
