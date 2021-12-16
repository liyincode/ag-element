<template>
  <header class="ag-header" :style="{ height }">
    <slot />
  </header>
</template>

<script lang="ts">
export default {
  name: "AgHeader"
}
</script>

<script setup lang="ts">
interface Props {
  height?: string
}

withDefaults(defineProps<Props>(), {
  height: '60px'
})
</script>

<style scoped lang="scss">
@import "../styles/mixin";
@include b(header) {
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0  ;
}

</style>
