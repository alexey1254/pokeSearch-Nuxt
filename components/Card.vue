<template>
  <div>
    <div
      class="max-w-sm mx-5 my-2.5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <div class="blob mx-auto h-32">
          <img class=" rounded-t-lg mx-auto mt-2" :src="sprite" alt="" />
        </div>
        
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="text-center capitalize mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ name }}
          </h5>
          <div class="-mt-3 text-center font-light dark:text-white">
            {{ id }}
          </div>
        </a>
        <p class="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          Breve texto del pokemon
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  id: Number,
  name: String,
  sprite: String,
  type: String,
  abilities: String,
});
</script>
<style scoped>
.blob {
  background-image: url(/blob-pattern.svg);
  background-position: center;
  background-repeat: no-repeat;
}
</style>