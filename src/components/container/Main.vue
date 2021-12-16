<template>
  <main class="ag-main">
    <slot />
  </main>
</template>

<script lang="ts">
export default {
  name: "AgMain"
}
</script>

<style scoped lang="scss">
@import "../styles/mixin";
@include b(main){
  display: flex;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: $--main-padding;
}
</style>
