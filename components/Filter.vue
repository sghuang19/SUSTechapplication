<script setup>
  import { ref } from "vue";

  const { data: metadata } = await useFetch("/api/metadata");
  const options = computed(() =>
    Object.fromEntries(
      Object.entries(metadata.value).map(([field, choices]) => [
        field,
        Object.entries(choices).map(([k, v]) => ({ label: v, value: k })),
      ]),
    ),
  );
  const filter = ref({}); // empty filter by default
</script>

<template>
  <n-tabs type="segment" justify-content="space-around" @update:value="">
    <n-tab-pane v-for="(val, key) in metadata.category" :name="key" :tab="val">
      <n-space vertical>
        <n-select
          multiple
          clearable
          filterable
          placeholder="选择大学"
          :options="options.university"
        />
        <n-select
          multiple
          clearable
          filterable
          placeholder="选择区域"
          :options="options.region"
        />
      </n-space>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped></style>
