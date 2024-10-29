<template>
  <div
    class="w-full h-16 bg-gray-950 fixed top-0 left-0 flex justify-between items-center transition-transform duration-500 ease-in-out transform"
    :class="isMenuVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="pl-4 md:pl-8">
      <h1 class="text-lg md:text-xl">
        {{ $t("title") }}
      </h1>
    </div>

    <div></div>

    <div class="absolute top-0 right-2 flex justify-center h-full">
      <LocaleSelect />
    </div>
  </div>
</template>

<script setup lang="ts">
const isMenuVisible = ref(true); // 控制菜单是否可见
let lastScrollPosition = 0;
const threshold = 5; // 设置滚动的最小距离阈值

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  // 检测滚动方向并且需要滚动超过指定的阈值
  if (Math.abs(currentScrollPosition - lastScrollPosition) > threshold) {
    if (currentScrollPosition > lastScrollPosition) {
      // 向下滚动，隐藏菜单
      isMenuVisible.value = false;
    } else {
      // 向上滚动，显示菜单
      isMenuVisible.value = true;
    }
  }
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
header.hidden {
  transform: translateY(-100%);
}

header.visible {
  transform: translateY(0);
}
</style>
