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
      v-model:value="filter.university"
      multiple
      clearable
      filterable
      placeholder="大学"
      :options="options.university"
    />
    <n-select
      v-model:value="filter.department"
      multiple
      clearable
      filterable
      placeholder="专业"
      :options="options.department"
    />
  </n-space>
</template>

<style scoped></style>
