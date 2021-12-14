import { h, ref } from "vue";

interface Prop {
  onMousemove: null | (() => void);
  onMousedown: () => void;
  onMouseup: () => void;
}
let a = ref(1);
const prop = ref<Prop>({
  onMousemove: null,
  onMousedown: () => {
    console.log("点击开始=======");
    a.value++;
    prop.value.onMousemove = () => {
      console.log("点击触摸，开始移动");
    };
  },
  onMouseup: () => {
    prop.value.onMousemove = null;
    console.log("点击取消-----");
  },
});
export default {
  render() {
    return h(
      "div", // 标签名
      prop.value, // prop 或 attribute
      a.value
    );
  },
};
