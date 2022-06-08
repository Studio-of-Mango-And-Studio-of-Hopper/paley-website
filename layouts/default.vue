<template>
  <div class="h-screen w-screen font-body flex flex-col p-8 gap-8 bg-white">
    <div class="flex flex-row p-3">
      <div class="mr-auto gap-2 flex flex-row">
        <img
          class="w-24"
          src="https://media.discordapp.net/attachments/879584371881947166/963220654826586132/PaleyButBetter.png"
        />
        <h1 class="my-auto font-display text-4xl">
          If I Were
          <span class="font-cursive text-5xl font-bold text-rose-600"
            >King</span
          >
        </h1>
      </div>
      <div class="flex">
        <div
          class="
            my-auto
            border-black/30
            focus-within:border-rose-600
            caret-rose-600
            border
            gap-2
            flex
            h-12
            w-96
            px-2
            py-1
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 my-auto text-black/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input placeholder="Search" class="outline-0" />
        </div>
      </div>
    </div>
    <Nuxt/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>