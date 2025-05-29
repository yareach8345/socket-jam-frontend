import StepButton from './StepButton.vue'
import type {Meta, StoryObj} from "@storybook/vue3";

const meta = {
    title: 'Sequencer/StepButton',
    component: StepButton,
    tags: ['autodocs'],
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
    },
}