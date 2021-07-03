<template>
  <div>
    <BaseListPosts v-if="$pagination" />
    <Content v-else />
  </div>
</template>
