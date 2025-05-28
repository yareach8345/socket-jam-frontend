import { defineStore } from 'pinia';
import type SequencerSetting from '@/types/SequencerSetting'

export const useDrumSequencer = defineStore('drum-sequencer', () => {
    const setting = reactive<SequencerSetting>({
        color: 'indigo',
        tempo: 120,
        timeSignature: {
            numerator: 4,
            denominator: 4
        }
    })

    return {
        setting
    }
});