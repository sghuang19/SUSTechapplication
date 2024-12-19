<script setup lang="ts">
  defineProps(["metadata", "options", "filter"]);
</script>

<template>
  <n-space vertical>
    <n-flex>
      年级范围
      <n-date-picker
        v-model:value="filter.yearRange"
        type="yearrange"
        clearable
      />
    </n-flex>
    <n-select
      v-model:value="filter.region"
      multiple
      clearable
      filterable
      placeholder="区域"
      :options="options.region"
    />
    <!--    <n-select-->
    <!--      multiple-->
    <!--      clearable-->
    <!--      filterable-->
    <!--      placeholder="雇主"-->
    <!--      :options="options.employer"-->
    <!--    />-->
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
