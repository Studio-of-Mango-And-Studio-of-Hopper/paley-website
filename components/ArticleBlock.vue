<template>
  <div class="flex flex-row gap-4 py-2 px-8">
            <div
              style="box-shadow: 0px 0px 84px 3px rgba(255, 0, 0, 0.6)"
              class="w-2 rounded-full bg-rose-600"
            ></div>
            <div class="flex flex-col text-gray-900 p-3 gap-3">
              <h3 class="font-display font-black text-3xl" v-text="title"/>
              <p class="text-2xl" v-text="desc" />
            </div>
                <img
              class="aspect-video ml-auto rounded-lg my-auto max-h-36 w-auto my-auto"
              :src="imgURL"
            />
            
          </div>
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