<template>
  <Vue3DraggableResizable
    :resizable="true"
    :initW="runApp.style.width"
    :initH="runApp.style.height"
    v-model:x="runApp.style.left"
    v-model:y="runApp.style.top"
    v-model:w="runApp.style.width"
    v-model:h="runApp.style.height"
    :z-index="runApp.style.zIndex"
    :min-w="300"
    :min-h="200"
    :parent="false"
    @activated="activatedHandle"
    @drag-end="dragEnd"
    @resize-end="resizeEnd"
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
import { RunAppRes } from "@/socket/interface/response/RunAppRes";
import { useStore } from "@/store";
import { setRunApp } from "@s/api";
import { RunAppReq, StyleReq } from "@/socket/interface/request/RunAppReq";
const store = useStore();

const { runApp } = defineProps<{ runApp: RunAppRes }>();
console.log("🚀 ~ file: index.vue ~ line 34 ~ runApp", runApp);

onUnmounted(() => {});

/**
 * 选中状态
 */
function activatedHandle() {
  if (store.state.maxZIndex === runApp.style.zIndex) return;
  store.commit("setMaxZIndex", store.state.maxZIndex + 1);
  runApp.style.zIndex = store.state.maxZIndex;
  setRunAppFun();
}
/**
 * 拖动结束触发
 */
function dragEnd() {
  setRunAppFun();
}
/**
 * 缩放结束触发
 */
function resizeEnd() {
  setRunAppFun();
}
/**
 * 更新runapp数据
 */
function setRunAppFun() {
  setRunApp(runApp);
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
