import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './index'

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi explicabo natus praesentium suscipit veritatis. Eaque fuga itaque nam nisi nulla quod repudiandae sunt? Aspernatur, cupiditate dolorem dolores doloribus eius eos error eum fuga natus nihil nisi officia, perferendis porro praesentium quod reprehenderit veniam! Assumenda deserunt et illum in non omnis quod? Accusantium doloremque ex illo, non quaerat recusandae sequi voluptatum! Ab accusamus, accusantium adipisci alias amet at atque autem blanditiis cum debitis deserunt distinctio ducimus eius enim eveniet excepturi facere illo illum ipsa minima non nulla officia omnis placeat quae, quam quasi qui, quia quo sed sint veniam veritatis voluptatum?'

export const Primary: Story = {
  args: {
    children: content,
    isOpen: true,
  },
}
