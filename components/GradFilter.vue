<script setup lang="ts">
  defineProps(["metadata", "options", "filter"]);
</script>

<template>
  <n-space vertical>
    <!--  TODO: There should be a better way to handle year range  -->
    <n-flex>
      年级范围
      <n-date-picker
        v-model:value="filter.yearRange"
        type="yearrange"
        clearable
      />
    </n-flex>
    <n-select
      v-model:value="filter.university"
      multiple
      clearable
      filterable
      placeholder="大学"
      :options="options.university"
    />
    <n-select
      v-model:value="filter.region"
      multiple
      clearable
      filterable
      placeholder="区域"
      :options="options.region"
      :disabled="false"
    />
    <n-flex>
      学位类型
      <n-radio-group v-model:value="filter.degree" name="degree">
        <n-radio-button
          multiple
          v-for="(val, key) in metadata.degree"
          :value="key"
          :label="val"
        />
      </n-radio-group>
    </n-flex>
    <n-select
      v-model:value="filter.department"
      multiple
      clearable
      filterable
      placeholder="专业"
      :options="options.department"
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
