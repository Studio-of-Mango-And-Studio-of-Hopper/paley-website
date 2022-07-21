<template>
  <div class="flex flex-row w-screen h-screen gap-8 bg-white divide-x-2 divide-gray-200 font-body">
    <!--- SIDEBAR ---->
    <div class="flex flex-col p-8 w-80 shrink-0">
      <!-- IMAGE AND TITLE -->
      <div class="flex flex-col gap-2 mb-16">
        <img class="w-24 mx-auto"
          src="https://media.discordapp.net/attachments/879584371881947166/963220654826586132/PaleyButBetter.png" />
        <h1 class="mx-auto my-auto text-4xl font-bold text-gray-600 font-display">
          If I Were
          <span class="text-5xl font-bold font-cursive text-rose-600">King</span>
        </h1>
      </div>
      <!-- SIDEBAR ACTIONS -->
      <div class="flex flex-col gap-6 font-sans text-lg font-bold ">
        <div class="flex flex-row gap-3 text-gray-400 cursor-pointer hover:text-rose-600" :key="idx" v-for="(opt, idx) of sidebarOptions" @click="opt.run">
          <component class="w-4 h-4 my-auto stroke-[3]" :is="opt.icon" />
          <span class="my-auto">{{ opt.name }}</span>
        </div>
      </div>
      <hr class="h-2 my-6 border-gray-400" />
      <!-- AUTHOR NAME AND BIO -->
      <div class="flex flex-col">
        <!-- details are inserted using v-teleport by the post page -->
        <portal-target name="author-photo" class="flex flex-row" />
        <portal-target class="my-2 text-3xl font-bold font-display" name="author-name" />
        <portal-target name="author-bio" />


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
        run: () => {
          this.$nuxt.$options.router.push({
            name: "index"
          });
        }
      },
      {
        icon: "search-icon",
        name: "Search",

      },
      {
        icon: "link-icon",
        name: "Copy Link",
        run: () => {
          navigator.clipboard.writeText(location.href);
        }
      },
    ],
  }),
};
</script>

<style>
</style>