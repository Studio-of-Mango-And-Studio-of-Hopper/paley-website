<template>
  <a href="/paley-website/posts/asdf" class="flex flex-row gap-4 px-8 py-2">
    <div style="box-shadow: 0px 0px 84px 3px rgba(255, 0, 0, 0.6)" class="w-2 rounded-full bg-rose-600"></div>
    <div class="flex flex-col gap-3 p-3 text-left text-gray-900">
      <h3 class="text-3xl font-black font-display" v-text="title" />
      <p class="text-2xl" v-text="desc" />
    </div>
    <img class="w-auto my-auto ml-auto rounded-lg aspect-video max-h-36" :src="imgURL" />

  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled Article"
    },
    desc: {
      type: String,
      default: "I did the AP Computer Science A free response test while watching basketball, baseball, and hockey games on the teevee."
    },
    imgURL: {
      type: String,
      default: "https://media.discordapp.net/attachments/956048944318803978/964044324042072114/unknown.png"
    }
  }
}
</script>

<style>
</style>