import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconProgressCheck,
  IconCircle,
  IconProgressX,
  IconCircles,
  IconProgress
} from '@tabler/icons-react'


export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: IconCircles,
  },
  {
    value: "todo",
    label: "Todo",
    icon: IconCircle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: IconProgress,
  },
  {
    value: "done",
    label: "Done",
    icon: IconProgressCheck,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: IconProgressX,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: IconArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: IconArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: IconArrowUp,
  },
]
