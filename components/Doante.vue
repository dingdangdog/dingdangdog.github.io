<template>
  <div style="max-width: 1280px; margin: 0 auto; padding: 0.5rem">
    <h2 class="py-4 text-xl md:text-2xl w-full text-center">
      {{ $t("donate.donation_title") }}
    </h2>
    <p>
      {{ $t("donate.greeting") }}
    </p>
    <p>
      {{ $t("donate.encouragement") }}
    </p>
    <p>{{ $t("donate.donation_usage_title") }}</p>

    <ol class="pl-8 list-disc">
      <li>{{ $t("donate.donation_usage_items[0]") }}</li>
      <li>{{ $t("donate.donation_usage_items[1]") }}</li>
      <li>{{ $t("donate.donation_usage_items[2]") }}</li>
      <li>{{ $t("donate.donation_usage_items[3]") }}</li>
    </ol>

    <h3 class="py-2 text-lg md:text-xl">
      {{ $t("donate.donation_methods_title") }}
    </h3>
    <h4 class="py-2 text-base md:text-lg">
      {{ $t("donate.alipay_wechat_title") }}
    </h4>

    <div
      class="flex items-center justify-center p-2 mx-4 space-x-4 bg-gray-800"
    >
      <div>
        <!-- <img
          src="/donate-alipay.jpg"
          alt="alipay"
          class="w-72 object-contain"
        /> -->
        <h1 class="text-lg md:text-xl text-center text-blue-500 mb-2">
          {{ $t("donate.alipay") }}
        </h1>
        <img
          src="/donate-alipay.png"
          alt="alipay"
          class="w-72 object-contain"
        />
      </div>
      <div>
        <h1 class="text-lg md:text-xl text-center text-green-500 mb-2">
          {{ $t("donate.wechat") }}
        </h1>
        <img
          src="/donate-wechat.jpg"
          alt="wechat"
          class="w-72 object-contain"
        />
      </div>
    </div>

    <!-- <h4 class="py-2 text-lg md:text-xl">2. PayPal</h4>
    <div class="p-2 mx-4 bg-gray-800">
      <p>
        <span v-html="$t('donate.paypal_description')"></span>
      </p>
    </div> -->
    <h3 class="py-2 text-lg md:text-xl">{{ $t("donate.supporters_title") }}</h3>
    <div class="p-2 mx-4 bg-gray-800">
      <p>
        <b>
          {{ $t("donate.supporters_message") }}
        </b>
      </p>

      <p>
        <b>
          {{ $t("donate.participation_message") }}
        </b>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
p {
  margin: 0.5rem 0;
}
</style>
