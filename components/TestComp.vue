<template>
  <div>
    <button @click="loadData">加载数据</button>
    <div v-if="data">{{ data }}</div>
    <div v-else>数据还未加载</div>
  </div>
</template>

<script setup>
import { useAsyncData } from "#app";

// 模拟异步请求
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("这是异步获取的数据");
    }, 1000);
  });
};

// 使用 lazy 配置项
const { data, execute } = await useAsyncData("myData", fetchData, {
  // lazy: true,
});

const loadData = () => {
  execute();
};
</script>
