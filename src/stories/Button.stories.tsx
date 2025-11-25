// Button.stories.tsx
import Button from "./Button"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = { component: Button }
export default meta

export const Primary: StoryObj<typeof Button> = {
  args: { variant: "contained", children: "Primary" },
}

export const Disabled: StoryObj<typeof Button> = {
  args: { variant: "contained", disabled: true, children: "Disabled" },
}
