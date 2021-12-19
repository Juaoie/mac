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
    @resize-start="activatedHandle"
    @resize-end="resizeEnd"
  >
    <div class="window-bear">
      <div class="window-bar df aic jcc pr">
        <div class="traffic-lights pa df aic">
          <div class="rounded-full close df aic jcc" @click="closeAppWindow">
            <el-icon size="8"><close /></el-icon>
          </div>
          <div class="rounded-full minus df aic jcc">
            <el-icon size="8"><minus /></el-icon>
          </div>
          <div class="rounded-full full-screen df aic jcc">
            <el-icon size="8"><full-screen /></el-icon>
          </div>
        </div>
        <span>{{ runApp.title }}</span>
      </div>
    </div>
  </Vue3DraggableResizable>
</template>

<script lang="ts" setup>
import Vue3DraggableResizable from "./components/Vue3DraggableResizable.vue";
import { ref, watch, CSSProperties, onUnmounted, provide } from "vue";
import { RunAppRes } from "@/socket/interface/response/RunAppRes";
import { useStore } from "@/store";
import { setRunApp, deleteRunApp } from "@s/api";
import { Close, Minus, FullScreen } from "@element-plus/icons-vue";

const store = useStore();

const props = defineProps<{ runApp: RunAppRes }>();
provide("identity", Symbol("Vue3DraggableResizable"));
onUnmounted(() => {});

/**
 * 选中状态
 */
function activatedHandle() {
  if (store.state.maxZIndex === props.runApp.style.zIndex) return;
  store.commit("setMaxZIndex", store.state.maxZIndex + 1);
  props.runApp.style.zIndex = store.state.maxZIndex;
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
  setRunApp(props.runApp);
}

const emits = defineEmits(["getRunAppList"]);
/**
 * 点击关闭窗口
 */
async function closeAppWindow() {
  await deleteRunApp({ id: props.runApp.id });
  emits("getRunAppList");
}
</script>
<style lang="scss" scoped>
.window-bear {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  .window-bar {
    background-color: rgb(229, 231, 235);
    width: 100%;
    height: 25px;
    font-weight: 600;
    font-size: 16px;
    .traffic-lights {
      left: 0;
      &:hover .rounded-full .el-icon {
        display: inline-block;
      }
      .rounded-full {
        margin-left: 10px;
        border-radius: 50%;
        width: 13px;
        height: 13px;
        cursor: pointer;
        .el-icon {
          display: none;
          color: #000;
        }
      }
      .close {
        background: #fd4848;
      }
      .minus {
        background: #ffa70c;
      }
      .full-screen {
        background: #11c489;
      }
    }
  }
}
</style>
