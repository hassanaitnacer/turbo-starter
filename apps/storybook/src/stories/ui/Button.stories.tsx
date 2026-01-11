import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { Button } from "@nacercodes/ui"
import { ArrowRight, ArrowLeft } from "lucide-react"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: [],
      description: "The accent color of the button, affecting its appearance.",
      type: "string",
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline"],
      description: "The visual style variant of the button.",
      type: "string",
    },
    size: {
      control: { type: "select" },
      options: ["medium"],
      description: "The size of the button.",
      type: "string",
    },
    radius: {
      control: { type: "select" },
      options: ["full"],
      description: "The border radius of the button.",
      type: "string",
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button is in a loading state, showing a spinner.",
      type: "boolean",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled.",
      type: "boolean",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Whether to render the button as a child component.",
      type: "boolean",
    },
  },
  args: {
    children: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Solid: Story = {
  args: {
    variant: "solid",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithChildren: Story = {
  args: {
    asChild: true,
  },
  render: (args) => (
    <Button {...args}>
      <a href="#">Button</a>
    </Button>
  ),
}

export const WithStartIcon: Story = {
  args: {
    startIcon: <ArrowLeft size={16} />,
    children: "Previous",
    variant: "outline",
  },
}

export const WithEndIcon: Story = {
  args: {
    endIcon: <ArrowRight size={16} />,
    children: "Next",
    variant: "outline",
  },
}
