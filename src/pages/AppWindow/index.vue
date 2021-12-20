<template>
  <Vue3DraggableResizable
    :resizable="true"
    :initW="style.width"
    :initH="style.height"
    v-model:x="style.left"
    v-model:y="style.top"
    v-model:w="style.width"
    v-model:h="style.height"
    :z-index="style.zIndex"
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
import { ref, watch, CSSProperties, onUnmounted, provide, Ref } from "vue";
import { useStore } from "@/store";
import { Close, Minus, FullScreen } from "@element-plus/icons-vue";
import { RunAppRes } from "@/socket/interface/response/RunAppRes";
import { StyleNamelist } from "@t/type";

const store = useStore();

const { runAppId } = defineProps<{ runAppId: number }>();
const runApp = store.state.runAppList.find((item) => item.id === runAppId);
if (runApp === undefined) throw "runApp不存在";
const style = ref(runApp.style);

/**
 * 选中状态
 */
function activatedHandle() {
  if (store.getters.zIndexMax === style.value.zIndex) return;
  style.value.zIndex = store.getters.zIndexMax + 1;
}
/**
 * 拖动结束触发
 */
function dragEnd() {
  updateRunApp();
}
/**
 * 缩放结束触发
 */
function resizeEnd() {
  updateRunApp();
}
/**
 * 更新runapp数据
 */
function updateRunApp() {
  store.dispatch("updateRunApp", runAppId);
}

/**
 * 点击关闭窗口
 */
function closeAppWindow() {
  store.dispatch("deleteRunApp", runAppId);
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
