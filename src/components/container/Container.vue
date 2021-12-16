<template>
  <section class="ag-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: "AgContainer"
}
</script>

<script setup lang="ts">
import {computed, useSlots, VNode, Component} from "vue";

interface Props {
  direction ?: string
}

const slots = useSlots();

const props = defineProps<Props>()
const isVertical = computed(() => {
  if (slots && slots.default) {
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name;
      return tag === 'AgHeader' || tag === 'AgFooter'
    })
  }

  return props.direction === 'vertical';
})
</script>

<style scoped lang="scss">
@import "../styles/mixin.scss";
@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  @include when(vertical) {
    flex-direction: column;
  }
}

</style>
