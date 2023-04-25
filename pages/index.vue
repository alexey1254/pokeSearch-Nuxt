<template>
  <div class="pt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
    <Search class="col-span-full my-auto"></Search>
    <Card
      class=""
      v-for="poke in pokemons"
      :name="poke.name"
      :sprite="poke.sprites?.front_default"
      :id="`#${poke.id.toString().padStart(3, 0)}`"
    />
    <nav class="col-span-full w-full px-10">
      <Navigation></Navigation>
    </nav>
  </div>
</template>
<script setup>
async function fetchPokemons(number) {
  let pokemons = [];
  for (let i = 1; i <= number; i++) {
    await fetchPokemon(i).then((data) => pokemons.push(data));
  }
  return pokemons;
}

let pokemons = [];
pokemons = await fetchPokemons(10);
</script>
