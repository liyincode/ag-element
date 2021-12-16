<template>
  <div class="ag-footer" :style="{ height }">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "AgFooter"
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
@include b(footer) {
  padding: $--footer-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
