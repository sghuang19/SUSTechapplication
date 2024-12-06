<script setup lang="ts">
  import { defineProps } from "vue";
  import { ElTag } from "element-plus";
  import { Edit } from "@element-plus/icons-vue";
  import Chip from "./Chip.vue";

  defineProps({
    data: { type: Object, required: true },
  });
</script>

<template>
  <div class="metadata">
    <Chip :text="data.university" type="primary" :icon="Edit" />
  </div>
</template>

<style scoped></style>
