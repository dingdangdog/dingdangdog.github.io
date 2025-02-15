<script setup lang="ts">
const router = useRouter();

const goToHome = () => {
  router.push("/");
};

const goToBlog = () => {
  window.location.href = "https://www.oldmoon.top";
};
</script>

<template>
  <div class="error-page">
    <h1 class="text-red-500 text-xl font-bold my-8">404 - Page Not Found</h1>
    <p class="text-black">
      博客已经迁移至
      <a
        href="https://www.oldmoon.top"
        class="text-blue-500 hover:text-blue-300 hover:underline"
        >www.oldmoon.top</a
      >
    </p>
    <div class="buttons text-blue-800">
      <button @click="goToHome" class="hover:underline">返回首页</button>
      <button @click="goToBlog" class="hover:underline">前往博客</button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 50px;
}

.buttons {
  margin-top: 1rem;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
