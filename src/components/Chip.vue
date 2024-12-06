<script setup>
  import { defineProps } from "vue";
  import { ElTag } from "element-plus";

  defineProps({
    text: { type: String, required: true },
    type: { type: String, default: "primary" },
    icon: { type: Object, default: null },
  });
</script>

<template>
  <el-tag :type="type">
    <component :is="icon" />
    {{ text }}
  </el-tag>
</template>

<style scoped></style>
