import type {Meta, StoryObj } from "@storybook/react";
import ElDropdown from "../components/common/ElDropdown.tsx";
const meta: Meta<typeof ElDropdown> = {
    component: ElDropdown,
    title: "ElDropdown"
}

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        label: "UserName",
    },
}
export const RandomText: Story = {
    args: {
        label: "Random Text",
    },
}