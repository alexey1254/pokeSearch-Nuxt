<template>
  <form
    enctype="multipart/form-data"
    method="post"
    class="mx-8 sm:mx-36 md:mx-52 lg:mx-72 xl:mx-96"
    @submit.prevent="search"
  >
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        name="pokemon"
        id="default-search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Pokemon"
        required
        v-model="query"
      />
      <button
        type="submit"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
    <div
      :class="query == '' ? 'hidden' : ''"
      class="border dark:border-slate-500 rounded-lg mt-1 flex justify-center"
    >
      <div v-if="isLoading">
        <Spinner class="my-5"></Spinner>
      </div>
      <div v-else>
        <Card
          :name="pokemon.name"
          :sprite="pokemon.sprites?.front_default"
          :id="`#${pokemon?.id?.toString().padStart(3, 0)}`"
        ></Card>
      </div>
    </div>
  </form>
</template>
<script setup>
let pokemon = ref([]);
let query = ref("");
let isLoading = ref(false);

async function search() {
  isLoading.value = true;
  await fetchPokemon(query.value).then((data) => (pokemon.value = data));
  console.log(pokemon.value);
  isLoading.value = false;
}

watch(
  () => query.value,
  (newValue, oldValue) => {
    // Si el nuevo valor de query es vacío, ocultamos la carta del Pokémon
    if (newValue === "") {
      pokemon.value = [];
    } else {
      // Si el nuevo valor de query es distinto al anterior, realizamos la búsqueda
      if (newValue !== oldValue) {
        search();
      }
    }
  }
);
</script>
