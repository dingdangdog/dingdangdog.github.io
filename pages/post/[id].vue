<template>
  <div class="redirect-page">
    <div class="redirect-content">
      <p v-if="redirectURL">
        {{ $t("post.target") }}:
        <a :href="redirectURL" target="_blank" rel="noopener noreferrer">{{
          redirectURL
        }}</a>
      </p>
      <p class="tip">{{ $t("post.please_wait") }}</p>
      <!-- <h1>{{ $t("post.predoing") }}...</h1> -->
      <div v-if="showLoadingBar">
        <p v-if="countdown > 0">
          {{ $t("post.will") }}
          <span class="countdown">{{ countdown }}</span>
          {{ $t("post.auto_redirect") }}...
        </p>
        <div class="loading-bar">
          <div
            class="loading-progress"
            :style="{ width: loadingProgress + '%' }"
          ></div>
        </div>
      </div>
      <div v-else>{{ $t("redirecting") }}……</div>
      <a
        :href="localePath('/')"
        class="my-2 hover:text-blue-300 text-blue-500 hover:underline"
        >{{ $t("post.cancel_redirect") }}
      </a>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});
const route = useRoute();

const postId = route.params.id; // 获取动态路由参数 id
const blog = "https://www.oldmoon.top";
const redirectURL = ref("");
redirectURL.value = `${blog}/post/${postId}`;
const countdown = ref(5); // 倒计时秒数
const showLoadingBar = ref(true); // 是否显示加载进度条
const loadingProgress = ref(0); // 加载进度条进度

onMounted(() => {
  if (redirectURL.value) {
    startCountdown();
    startLoadingProgress();
  }
});

function startCountdown() {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(interval);
      redirectToURL();
    }
  }, 1000);
}

function startLoadingProgress() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 100 / (countdown.value * 60); // 假设倒计时 3 秒，每帧更新进度
    loadingProgress.value = Math.min(progress, 100); // 确保进度不超过 100%
    if (progress >= 100) {
      showLoadingBar.value = false;
      clearInterval(interval);
    }
  }, 16); // 约 60 FPS 更新
}

function redirectToURL() {
  if (redirectURL.value) {
    navigateTo(redirectURL.value, { external: true, redirectCode: 301 });
  }
}

// 监听 countdown 变化，当 countdown 为 0 时，手动触发跳转 (备用方案)
watch(countdown, (newValue) => {
  if (newValue <= 0) {
    redirectToURL();
  }
});
</script>

<style scoped>
.redirect-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 页面最小高度充满视口 */
  background-color: #f0f2f5; /* 示例背景色 */
  font-family: sans-serif;
}

.redirect-content {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo {
  max-width: 150px;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  color: #333;
  margin-bottom: 15px;
}

p {
  color: #666;
  margin-bottom: 10px;
}

.countdown {
  font-weight: bold;
  color: #007bff; /* 示例倒计时颜色 */
}

.loading-bar {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-top: 20px;
  overflow: hidden; /* 确保进度条不超出边界 */
}

.loading-progress {
  height: 100%;
  background-color: #007bff; /* 示例进度条颜色 */
  border-radius: 4px;
  width: 0%; /* 初始宽度为 0 */
  transition: width 0.3s ease; /* 添加过渡效果 */
}

.tip {
  margin-top: 20px;
  font-size: 0.9em;
  color: #999;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
