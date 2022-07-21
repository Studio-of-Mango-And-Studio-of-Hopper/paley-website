<template>
  <div class="flex flex-row gap-16 px-16 py-8">
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl font-display">Recent Posts</h2>
        <div
          class="flex flex-col gap-0 border-2 border-gray-200 divide-y-2 divide-gray-200 "
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
        <div class="flex flex-col gap-6 pt-6 border-t-2 border-gray-200">
          <span class="text-base font-bold font-display"
            >Get notified when I post something random!</span
          >
          <input
            class="px-2 py-1 border-2 outline-none  border-black/30 focus:border-rose-500"
          />
          <button class="float-right px-3 py-2 ml-auto text-white bg-rose-500">
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
