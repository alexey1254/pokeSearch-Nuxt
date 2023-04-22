<template>
  <nav
    class="grid grid-cols-3 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="text-lg mx-1 dark:text-white">PokeSearch Nuxt &hearts;</div>
    <div class="col-start-3 mt-1">
      <label class="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          @click="dark = !dark"
        />
        <div
          class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
        <span v-if="!dark" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Toggle dark</span
        >
        <span v-else class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Toggle white</span
        >
      </label>
    </div>
  </nav>
</template>
<script setup>
let dark = ref(false);
useHead({
  bodyAttrs: {
    class: computed(() => {
      if (dark.value) return "dark";
      return "";
    }),
  },
});
</script>
