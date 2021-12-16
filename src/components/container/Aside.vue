<template>
  <aside class="ag-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<script lang="ts">
export default {
  name: "AgAside"
}
</script>

<script setup lang="ts">
type PropValues = {
  width: string
}
withDefaults(defineProps<PropValues>(), {
  width: '300px'
})
</script>

<style lang="scss" scoped>
@import "../styles/mixin";
@include b(aside) {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}

</style>
