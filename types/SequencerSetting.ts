import type { Color } from '~/types/Color'
import type TimeSignature from '@/types/TimeSignature'

export default interface SequencerSetting {
    color: Color
    tempo: number
    timeSignature: TimeSignature
    triplet: boolean
}