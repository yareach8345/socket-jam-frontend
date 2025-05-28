<script setup lang="ts">
import type { Color } from '@/types/Colors'

interface Props {
  color: Color
}

const { color } = defineProps<Props>()

interface Emits {
  (e: 'toggled', value: boolean): void
}

const emits = defineEmits<Emits>()

const active = defineModel<boolean>({
  default: false
})

const buttonColor = computed(() => [
  active.value ? `bg-${color}-500` : 'bg-gray-500',
  active.value ? `border-${color}-400` : 'border-gray-400'
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