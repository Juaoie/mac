import { Queue } from "u-node-mq";
import instant from "u-node-mq/operators/instant";
import filter from "u-node-mq/operators/filter";

/**
 * 移动
 */
export const mousemoves = new Queue().add(instant()); //rxjs.fromEvent<MouseEvent>(document, "mousemove");

window.document.addEventListener("mousemove", mousemoves.pushContent);

/**
 * 按下鼠标左键
events.button==1  鼠标中键

events.button==0  鼠标左键

events.button==2  鼠标右键
 */
export const mousedown = new Queue().add(instant()).add(filter((x) => x.button === 0));

window.document.addEventListener("mousedown", mousemoves.pushContent);

/**
 * 释放鼠标左键
 */
export const mouseup = new Queue().add(instant()).add(filter((x) => x.button === 0));

window.document.addEventListener("mouseup", mousemoves.pushContent);

/**
 * 切换浏览器标签
 */
export const visibilitychange = new Queue().add(instant());

window.document.addEventListener("visibilitychange", mousemoves.pushContent);
