<template>
  <div class="p-2">
    <!-- Hello -->
    <div class="min-h-32">
      <h1 class="text-lg md:text-2xl text-center py-4">
        {{ $t("hello") }}
      </h1>
    </div>
    <!-- Introduction -->
    <div class="p-2" style="max-width: 1080px; margin: auto">
      <p class="text-gray-500">{{ $t("motto") }}</p>
    </div>
    <!-- Products -->
    <div class="bg-gray-800 rounded-md" style="max-width: 1080px; margin: auto">
      <h2 class="text-lg md:text-xl text-center py-2 text-gray-300">
        {{ $t("works.title") }}
      </h2>
      <div class="flex flex-wrap justify-center md:p-2">
        <div
          v-for="site in sites"
          class="max-w-28 max-h-32 md:max-w-48 md:max-h-48 w-full h-full md:p-2 hover:p-0 m-1 md:m-0 duration-300 ease-in-out"
        >
          <div
            class="w-full h-full rounded-md bg-gray-800 cursor-pointer hover:bg-gray-700 ease-in-out"
            :title="site.url"
          >
            <a
              class="w-full p-2 flex flex-col justify-center items-center"
              :href="site.url"
              target="_blank"
            >
              <img
                :src="site.icon"
                class="w-16 md:w-24 h-16 md:h-24 object-contain m-0 md:m-2 rounded-md overflow-hidden"
              />
              <h3
                class="py-1 md:py-2 text-base md:text-xl"
                :style="`color:${site.color}`"
              >
                {{ site.title }}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Site {
  title: string;
  url: string;
  icon: string;
  color: string;
}

// 断言语言文件中的 `items` 为数组类型
const zhSites: Site[] = [
  {
    title: "博客",
    url: "https://www.oldmoon.top",
    icon: "/oldmoon.png",
    color: "rgb(255,255,255)",
  },
  {
    title: "Cashbook",
    url: "https://github.com/dingdangdog/cashbook",
    icon: "/cashbook.png",
    color: "rgb(104,233,145)",
  },
  {
    title: "Doimage",
    url: "https://github.com/dingdangdog/Doimage",
    icon: "/doimage.png",
    color: "rgb(247,72,126)",
  },
  {
    title: "老狗图片处理厂",
    url: "https://imgpro.oldmoon.top",
    icon: "https://imgpro.oldmoon.top/favicon.png",
    color: "rgb(134,27,196)",
  },
  {
    title: "公众号MD编辑器",
    url: "https://wxeditor.oldmoon.top",
    icon: "https://wxeditor.oldmoon.top/assets/images/favicon.png",
    color: "rgb(122,122,122)",
  },
];
const enSites: Site[] = [
  {
    title: "Blog",
    url: "https://www.oldmoon.top",
    icon: "/oldmoon.png",
    color: "rgb(255,255,255)",
  },
  {
    title: "Cashbook",
    url: "https://github.com/dingdangdog/cashbook",
    icon: "/cashbook.png",
    color: "rgb(104,233,145)",
  },
  {
    title: "Doimage",
    url: "https://github.com/dingdangdog/Doimage",
    icon: "/doimage.png",
    color: "rgb(247,72,126)",
  },
  {
    title: "ImageProcessing",
    url: "https://imgpro.oldmoon.top",
    icon: "https://imgpro.oldmoon.top/favicon.png",
    color: "rgb(134,27,196)",
  },
  {
    title: "WeChat Editor",
    url: "https://wxeditor.oldmoon.top",
    icon: "https://wxeditor.oldmoon.top/assets/images/favicon.png",
    color: "rgb(122,122,122)",
  },
];
const { locale, locales } = useI18n();
const sites = ref<Site[]>([]);
if (locale.value === "zh") {
  sites.value = zhSites;
} else {
  sites.value = enSites;
}
</script>

<style scoped></style>
