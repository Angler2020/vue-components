<template>
  <div class="btn_list">
    <button @click="startTask">开始执行队列事件</button>
    <button @click="stopTask">暂停执行队列事件</button>
    <button @click="suspendTask">终止执行队列事件</button>
    <button @click="addTask">增加队列事件</button>
    <button @click="insertTask">插入队列事件</button>
    <button @click="clearTask">清除队列</button>
  </div>
  <div :key="indexKey + 1" class="task_box">
    <div>待行队列：</div>
    <span v-for="item in msgs.queue">{{ item.name }} -></span>
  </div>
  <div :key="indexKey" class="task_box">
    <div>已执行队列：</div>
    <span v-for="item in msgList">{{ item.name }} -></span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const msgList = ref([]);
const indexKey = ref(0);
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  insert(element, index) {
    this.queue.splice(index, 0, element);
  }
  delete(index) {
    this.queue.splice(index, 1);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
  clear() {
    this.queue = [];
  }
}

let interval;
const msgs = new Queue();
const baseQ = new Array(10)
  .fill("事件")
  .map((item, i) => ({ name: item + i, value: i }));
baseQ.forEach((item) => {
  msgs.enqueue(item);
});

const startTask = () => {
  let i = 0;
  interval = setInterval(() => {
    msgList.value.push(msgs.queue[0]);
    msgs.delete(0);
    indexKey.value = new Date().valueOf();
    if (msgs.isEmpty()) clearInterval(interval);
    i++;
    console.log(i);
  }, 2000);
};
// 增加任务
const addTask = () => {
  // 暂停任务执行->增加队列->重新开始
  const key = new Date().valueOf();
  stopTask();
  msgs.enqueue({ name: "增加事件" + key, value: key });
  indexKey.value = new Date().valueOf();
  startTask();
};
// 插入任务
const insertTask = (index = 3) => {
  // 暂停任务执行->插入队列->重新开始
  const key = new Date().valueOf();
  stopTask();
  if (index > msgs.queue.length) {
    msgs.enqueue({ name: "增加事件" + key, value: key });
  } else {
    msgs.insert({ name: "插入事件" + key, value: key }, index);
  }
  indexKey.value = new Date().valueOf();
  startTask();
};
// 暂停
const stopTask = () => {
  clearInterval(interval);
};
// 清除队列
const clearTask = () => {
  // 终止任务->清除待执行队列
  clearInterval(interval);
  msgs.clear();
  indexKey.value = new Date().valueOf();
};
// 终止
const suspendTask = () => {
  clearInterval(interval);
  msgs.clear();
  indexKey.value = new Date().valueOf();
};

computed(() => {});
</script>

<style scoped lang="scss">
.btn_list {
  display: flex;
  button {
    margin-right: 12px;
    border: 1px solid #e5e5e5;
    &:hover {
      border-color: brown;
    }
  }
}
.task_box {
  min-height: 100px;
  width: 960px;
  text-align: left;
  margin-top: 24px;
  border: 1px solid #e5e5e5;
  padding: 12px 24px;
}
</style>
