<template>
  <Vue3DraggableResizable
    :resizable="true"
    :x="runApp.style.x"
    :y="runApp.style.y"
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
// import Vue3DraggableResizable from "vue3-draggable-resizable";
//需引入默认样式
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
