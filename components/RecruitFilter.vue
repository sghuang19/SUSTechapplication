<script setup lang="ts">
  defineProps(["metadata", "options", "filter"]);
</script>

<template>
  <n-space vertical>
    <n-select
      v-model:value="filter.region"
      multiple
      clearable
      filterable
      placeholder="区域"
      :options="options.region"
      :disabled="false"
    />
    <n-select
      v-model:value="filter.program"
      multiple
      clearable
      filterable
      placeholder="项目"
      :options="options.program"
    />
  </n-space>
</template>

<style scoped></style>
