<script setup lang="ts">
import { useDrumSequencer } from '@/stores/DrumSequencer'
import {storeToRefs} from "pinia";

const drumSequencerStore = useDrumSequencer()
const { setting } = storeToRefs(drumSequencerStore)

interface Emits {
  (e: 'toggled', value: boolean): void
}

const emits = defineEmits<Emits>()

const active = defineModel<boolean>({
  default: false
})

const buttonColor = computed(() => [
  active.value ? `bg-${setting.value.color}-500` : 'bg-slate-500',
  active.value ? `border-${setting.value.color}-400` : 'border-slate-400'
])

const onClick = async () => {
  const newValue = !active.value
  active.value = newValue
  emits('toggled', newValue)
}
</script>

<template>
  <button
      class="h-14 w-12 border rounded-lg"
      :class="buttonColor"
      @click="onClick"
  />
</template>

<style scoped>

</style>