<template>
  <div class="py-8 px-16 flex flex-row gap-16">
      <div class="gap-6 flex flex-col">
        <h2 class="text-2xl font-display">Recent Posts</h2>
        <div
          class="
            gap-3
            flex flex-col
            border-gray-200
            divide-gray-200 divide-y-2
            border-2
          "
        >
          <article-block v-for="n in 10" :key="n" />
        </div>
      </div>
      <div class="gap-6 flex flex-col w-[420px]">
        <h2 class="text-2xl font-display">About Paley</h2>
        <img
          class="aspect-auto"
          src="https://media.discordapp.net/attachments/956048944318803978/964052589517865011/unknown.png"
        />
        <p class="text-xl text-gray-600">
          Joshua Paley — Hi, I’m Paley. A fellow CS teacher told me to make a
          blog and title it if I were the king so here it is.
        </p>
        <div class="border-t-2 pt-6 flex flex-col border-gray-200 gap-6">
          <span class="font-display text-base font-bold"
            >Get notified when I post something random!</span
          >
          <input
            class="
              border-2 border-black/30
              focus:border-rose-500
              outline-none
              px-2
              py-1
            "
          />
          <button class="float-right ml-auto px-3 py-2 bg-rose-500 text-white">
            Notify Me
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import ArticleBlock from '../components/ArticleBlock.vue';
export default {
  components: { ArticleBlock },
  name: "IndexPage",
};
</script>
