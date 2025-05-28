import StepButton from './StepButton.vue'
import type {Meta, StoryObj} from "@storybook/vue3";

const meta = {
    title: 'Sequencer/StepButton',
    component: StepButton,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof StepButton>

export default meta
type Story = StoryObj<typeof meta>

export const Inactive: Story = {
    args: {
        color: 'indigo',
        modelValue: false
    },
}

export const Active: Story = {
    args: {
        color: 'indigo',
        modelValue: true
    },
}
