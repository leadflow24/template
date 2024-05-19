import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover/popover'

type PopoverType = typeof Popover
type PopoverStory = React.ComponentProps<PopoverType> & {
  align: 'start' | 'center' | 'end'
  sideOffset: number
}

const meta = {
  title: 'ui/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    sideOffset: {
      control: 'number',
    },
  },
  args: {
    align: 'start',
    sideOffset: 5,
  },
  tags: ['autodocs'],
} satisfies Meta<PopoverStory>

export default meta
type Story = StoryObj<PopoverStory>

const Component = (args: PopoverStory) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  )
}

export const Template: Story = {
  render: Component,
}
