<template>
  <div class="ag-form">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "AgForm"
}
</script>

<script lang="ts" setup>
import {PropType, provide, ref} from "vue";
import { Rules } from 'async-validator'
import { FormItem, key } from './type'
import { emitter } from "../../emitter";

const props = defineProps({
  model: {
    type: Object,
    required: true
  },
  rules: {
    type: Object as PropType<Rules>
  }
});

provide(key, {
  model: props.model,
  rules: props.rules
})

const items = ref<FormItem[]>([]);

emitter.on('addFormItem', item => {
  console.log('addFormItem', item)
  items.value.push(item)
})

function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map(item => item.validate())
  Promise.all(tasks)
  .then(() => { cb(true) })
  .catch(() => { cb(false)})
}

defineExpose({
  validate
})
</script>

<style scoped lang="scss">
@import "../styles/mixin";
@include b(form) {
  margin-top:20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width:300px;
}

</style>
