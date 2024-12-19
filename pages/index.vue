<script setup lang="ts">
  import StoryList from "~/components/StoryList.vue";
  import Filter from "~/components/Filter.vue";
  import { useStories } from "~/composables/useStories";

  // const { data: stories } = await useFetch("/api/stories");

  const { stories, isLoading } = useStories();
</script>

<template>
  <div class="max-w-4xl mx-auto px-4">
    <n-alert title="测试版本" type="warning">
      这是个正在开发中的测试版本！
    </n-alert>
    <h1 class="text-center text-4xl mt-8 mb-4">南方科技大学飞跃手册</h1>
    <Filter />
    <StoryList :stories="stories" />
  </div>
</template>
