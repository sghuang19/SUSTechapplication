<script setup lang="ts">
  defineProps(["metadata", "options"]);
</script>

<template>
  <n-space vertical>
    <n-flex>
      年级范围
      <n-date-picker type="yearrange" clearable />
    </n-flex>
    <n-select
      multiple
      clearable
      filterable
      placeholder="大学"
      :options="options.university"
    />
    <n-select
      multiple
      clearable
      filterable
      placeholder="区域"
      :options="options.region"
      :disabled="false"
    />
    <n-flex>
      学位类型
      <n-radio-group name="degree">
        <n-radio-button
          multiple
          v-for="(val, key) in metadata.degree"
          :value="key"
          :label="val"
        />
      </n-radio-group>
    </n-flex>
    <n-select
      multiple
      clearable
      filterable
      placeholder="专业"
      :options="options.department"
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
