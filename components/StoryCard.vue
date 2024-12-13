<script setup lang="ts">
  import ChipGroup from "./ChipGroup.vue";
  defineProps(["story"]);
</script>

<template>
  <n-card hoverable :title="story.title" size="medium">
    <template #header-extra> by [AUTHOR]</template>
    <template #footer>
      <ChipGroup :story="story" />
    </template>
  </n-card>
</template>
