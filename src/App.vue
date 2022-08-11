<template>
  <div class="page pr df aic jcc">
    <!-- <router-view></router-view> -->
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<script setup lang="ts">
import CssDoodle0 from "@/components/css-doodle-0.vue";
import CssDoodle1 from "@/components/css-doodle-1.vue";
import CssDoodle2 from "@/components/css-doodle-2.vue";
import CssDoodle3 from "@/components/css-doodle-3.vue";
import CssDoodle4 from "@/components/css-doodle-4.vue";
import CssDoodle5 from "@/components/css-doodle-5.vue";
import CssDoodle6 from "@/components/css-doodle-6.vue";
import "css-doodle";
import { ref, reactive } from "vue";
const tabs = reactive([CssDoodle0, CssDoodle1, CssDoodle2, CssDoodle3, CssDoodle4, CssDoodle5, CssDoodle6]);
const currentTab = ref(0);
</script>
<style lang="scss" scoped>
.page {
  background: #000;
  height: 100vh;
  width: 100vw;
  user-select: none;
  overflow: hidden;
}
</style>
