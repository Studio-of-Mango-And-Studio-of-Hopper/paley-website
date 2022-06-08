<template>
  <div
    class="
      h-screen
      w-screen
      font-body
      flex flex-row
      divide-gray-200 divide-x-2
      
      gap-8
      bg-white
    "
  >
    <!--- SIDEBAR ---->
    <div class="flex w-80 p-8 shrink-0 flex-col">
      <!-- IMAGE AND TITLE -->
      <div class="gap-2 flex flex-col mb-16">
        <img
          class="w-24 mx-auto"
          src="https://media.discordapp.net/attachments/879584371881947166/963220654826586132/PaleyButBetter.png"
        />
        <h1 class="my-auto mx-auto font-display text-gray-600 font-bold text-4xl">
          If I Were
          <span class="font-cursive text-5xl font-bold text-rose-600"
            >King</span
          >
        </h1>
      </div>
      <!-- SIDEBAR ACTIONS -->
      <div class="flex flex-col gap-6 text-gray-400 text-lg font-semibold">
        <div
          class="flex flex-row gap-3"
          :key="idx"
          v-for="(opt, idx) of sidebarOptions"
        >
          <component class="w-4 h-4 my-auto stroke-[3]" :is="opt.icon" />
          <span class="my-auto">{{ opt.name }}</span>
        </div>
      </div>
      <hr class="border-gray-400 h-2 my-6" />
      <!-- AUTHOR NAME AND BIO -->
      <div class="flex flex-col">
          <!-- details are inserted using v-teleport by the post page -->
          <portal-target name="author-photo" class="flex flex-row" />
          <portal-target class="font-bold font-display text-3xl my-2" name="author-name"/>
          <portal-target name="author-bio"/>
              
          
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    sidebarOptions: [
      {
        icon: "house-icon",
        name: "Home",
      },
      {
        icon: "search-icon",
        name: "Search",
      },
      {
        icon: "link-icon",
        name: "Copy Link",
      },
    ],
  }),
};
</script>

<style>
</style>