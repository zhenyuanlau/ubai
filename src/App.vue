<script setup lang="ts">
import { NIcon } from "naive-ui";
import {
  GridOutline as GridIcon,
  CubeOutline as CubeIcon,
} from "@vicons/ionicons5";
import { zhCN, dateZhCN } from "naive-ui";
import { Component, h } from "vue";
const menuOptions = [
  {
    label: "用户行为数据",
    key: "hear-the-wind-sing",
    icon: renderIcon(GridIcon),
  },
  {
    label: "用户行为分析",
    key: "hear-the-wind-sing",
    icon: renderIcon(CubeIcon),
  },
];
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-layout>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="180"
          :native-scrollbar="false"
          style="max-height: 320px"
        >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout-content content-style="padding: 6px;" bordered>
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 3px;
}
</style>
