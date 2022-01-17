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
    @resize-start="activatedHandle"
  >
    <div class="window-app">
      <div class="window-bar df aic jcc pr">
        <div class="traffic-lights pa df aic">
          <div class="rounded-full close df aic jcc" @click="closeAppWindow">
            <el-icon size="8"><close /></el-icon>
          </div>
          <div class="rounded-full minus df aic jcc" @click="hiddenAppWindow">
            <el-icon size="8"><minus /></el-icon>
          </div>
          <div class="rounded-full full-screen df aic jcc">
            <el-icon size="8"><full-screen /></el-icon>
          </div>
        </div>
        <span>{{ runApp.title }}</span>
      </div>
      <div class="window-body">
        <iframe
          v-if="list.find((item) => item.appId === runApp.appId)?.link"
          class="w24 heightfull"
          :src="list.find((item) => item.appId === runApp.appId)?.link"
          frameborder="0"
          title="VSCode"
        ></iframe>
      </div>
    </div>
  </Vue3DraggableResizable>
</template>

<script lang="ts" setup>
import Vue3DraggableResizable from "./components/Vue3DraggableResizable.vue";
import { ref, watch, CSSProperties, onUnmounted, provide, Ref } from "vue";
import { useStore } from "@/store";
import { Close, Minus, FullScreen } from "@element-plus/icons-vue";
import { RunAppReq } from "@/socket/interface/request/RunAppReq";
import { NavigationRes } from "@/socket/interface/response/NavigationRes";
import { getNavList } from "@/socket/api";

const store = useStore();

const { runAppId } = defineProps<{ runAppId: number }>();
const runApp = store.state.runAppList.find((item) => item.id === runAppId);
if (runApp === undefined) throw "runApp不存在";
const style = ref(runApp.style);

const list = ref<NavigationRes[]>([]);
async function created() {
  list.value = await getNavList();
}
created();
/**
 * 选中状态
 */
function activatedHandle() {
  if (store.getters.zIndexMax === style.value.zIndex) return;
  style.value.zIndex = store.getters.zIndexMax + 1;
  store.commit("setRunAppStyle", { id: runAppId, style: style.value });
}

/**
 * 点击关闭窗口
 */
function closeAppWindow() {
  store.dispatch("deleteRunApp", runAppId);
}
/**
 * 点击隐藏窗口
 */
function hiddenAppWindow() {
  store.commit("setRunAppHidden", { id: runApp?.id, hidden: true });
}
</script>
<style lang="scss" scoped>
.window-app {
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
  .window-body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
