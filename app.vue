<script lang="ts" setup>
import * as Tone from 'tone'
import StepButton from "~/components/StepButton.vue";


let synth: Tone.Synth | Tone.AMSynth | Tone.FMSynth | Tone.DuoSynth | Tone.MonoSynth | Tone.MembraneSynth | Tone.MetalSynth | Tone.PluckSynth | Tone.PolySynth
if (import.meta.client) {
  synth = new Tone.FMSynth().toDestination()
}

const play = async () => {
  await Tone.start()
  console.log('play')
  const now = Tone.now()
  synth.triggerAttackRelease('A5', '8n', now)
  synth.triggerAttackRelease('A5', '8n', now + 0.3)
  synth.triggerAttackRelease('A5', '8n', now + 0.4)
  synth.triggerAttackRelease('C6', '8n', now + 0.5)
  synth.triggerAttackRelease('B5', '8n', now + 0.6)
  synth.triggerAttackRelease('A5', '8n', now + 0.7)
  synth.triggerAttackRelease('E6', '8n', now + 0.8)
  synth.triggerAttackRelease('E5', '8n', now + 1.1)
  synth.triggerAttackRelease('E5', '8n', now + 1.2)
  synth.triggerAttackRelease('G#5', '8n', now + 1.3)
  synth.triggerAttackRelease('F#5', '8n', now + 1.4)
  synth.triggerAttackRelease('E5', '8n', now + 1.5)
  synth.triggerAttackRelease('A5', '8n', now + 1.6)
  synth.triggerAttackRelease('A5', '8n', now + 1.9)
  synth.triggerAttackRelease('A5', '8n', now + 2.0)
  synth.triggerAttackRelease('C6', '8n', now + 2.1)
  synth.triggerAttackRelease('B5', '8n', now + 2.2)
  synth.triggerAttackRelease('A5', '8n', now + 2.3)
  synth.triggerAttackRelease('E6', '8n', now + 2.4)
  synth.triggerAttackRelease('E5', '8n', now + 2.8)
}
const b = ref(true)
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <button
      @click="play"
  >
    play!
  </button>
  <StepButton
      color="indigo"
      v-model="b"
      @toggled="(re) => {
        console.log(`toggled to ${re}`)
      }"
  />
</template>
