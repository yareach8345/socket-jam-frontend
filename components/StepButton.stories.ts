import StepButton from './StepButton.vue'
import type {Meta, StoryObj} from "@storybook/vue3";
import {createPinia, setActivePinia} from "pinia";
import { h, provide } from 'vue'
import { useDrumSequencer } from '@/stores/DrumSequencer'

const meta = {
    title: 'Sequencer/StepButton',
    component: StepButton,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: [
                'red', 'orange', 'amber', 'yellow', 'lime',
                'green', 'emerald', 'teal', 'cyan', 'sky',
                'blue', 'indigo', 'violet', 'purple', 'fuchsia',
                'pink', 'rose',
            ]
        }
    },
    decorators: [
        (story, context) => ({
            setup() {
                const pinia = createPinia()
                setActivePinia(pinia)
                provide('pinia', pinia)

                const store = useDrumSequencer()

                watch(
                    () => context.args.color,
                    (newColor) => { store.setting.color = newColor || 'indigo' },
                    { immediate: true }
                 )

                return () => h(story())
            },
        })
    ]
} satisfies Meta<typeof StepButton>

export default meta
type Story = StoryObj<typeof meta>

export const Inactive: Story = {
    args: {
        modelValue: false
    },
}

export const Active: Story = {
    args: {
        modelValue: true,
        color: 'sky'
    },
}