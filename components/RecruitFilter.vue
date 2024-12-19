<script setup lang="ts">
  defineProps(["metadata", "options"]);
</script>

<template>
  <n-space vertical>
    <n-select
      multiple
      clearable
      filterable
      placeholder="区域"
      :options="options.region"
      :disabled="false"
    />
    <n-select
      multiple
      clearable
      filterable
      placeholder="项目"
      :options="options.program"
    />
  </n-space>
</template>

<style scoped></style>
