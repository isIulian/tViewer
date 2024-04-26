import {
  IconProgressX,
  IconCircleCheck,
  IconProgress
} from '@tabler/icons-react'

export const statuses = [
  {
    value: "ongoing",
    label: "On going",
    icon: IconProgress,
  },
  {
    value: "completed",
    label: "Completed",
    icon: IconCircleCheck,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: IconProgressX,
  },
]