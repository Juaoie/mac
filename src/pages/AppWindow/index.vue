<template>
  <Vue3DraggableResizable
    :resizable="true"
    v-model:x="runApp.style.x"
    v-model:y="runApp.style.y"
    v-model:w="runApp.style.w"
    v-model:h="runApp.style.h"
    :z-index="runApp.style.zIndex"
    :min-w="runApp.style.minW"
    :min-h="runApp.style.minH"
    :parent="false"
    @activated="activatedHandle"
  >
    <div class="window-bear">
      <div class="window-bar df aic jcc">
        <span>{{ runApp.title }}</span>
      </div>
    </div>
  </Vue3DraggableResizable>
</template>

<script lang="ts" setup>
import Vue3DraggableResizable from "./components/Vue3DraggableResizable.vue";
import { ref, watch, CSSProperties, onUnmounted } from "vue";
import { RunApp } from "@/socket/interface/RunApp";
import { useStore } from "@/store";
const store = useStore();

const { runApp } = defineProps<{ runApp: RunApp }>();

onUnmounted(() => {});

function activatedHandle() {
  if (store.state.maxZIndex === runApp.style.zIndex) return;
  store.commit("setMaxZIndex", store.state.maxZIndex + 1);
  runApp.style.zIndex = store.state.maxZIndex;
}
watch(
  () => runApp,
  () => {
    console.log("更新");
  },
  {
    deep: true,
  }
);
</script>
<style lang="scss" scoped>
.window-bear {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
  .window-bar {
    background-color: rgb(229, 231, 235);
    width: 100%;
    height: 25px;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
