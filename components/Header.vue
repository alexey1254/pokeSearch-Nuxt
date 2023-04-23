<template>
  <nav
    class="grid grid-cols-3 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="text-lg mx-1 dark:text-white">PokeSearch Nuxt &hearts;</div>
    <div class="col-start-3 mt-1 justify-self-end align-middle">

        <ToggleDarkMode></ToggleDarkMode>

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
