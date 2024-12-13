<script setup lang="ts">
  import { GridOutline, Location, Ribbon, School } from "@vicons/ionicons5";

  const props = defineProps(["story"]); // named story due to queryContent API of Nuxt

  const FIELDS = [
    { key: "category", icon: GridOutline, type: "primary" },
    { key: "region", icon: Location, type: "info" },
    { key: "degree", icon: School, type: "success" },
    { key: "program", icon: Ribbon, type: "warning" },
  ];

  const availableFields = computed(() =>
    FIELDS.filter((field) => props.story[field.key]),
  );
</script>

<template>
  <n-button v-for="field in availableFields" :type="field.type">
    <template #icon>
      <n-icon>
        <component :is="field.icon" />
      </n-icon>
    </template>
    {{ story[field.key] }}
  </n-button>
</template>

<style scoped></style>
