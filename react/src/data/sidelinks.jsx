import {
  IconChartHistogram,
  IconLayoutDashboard,
  IconRouteAltLeft,
  IconMovie,
  IconDeviceTv,
  IconNotebook,
  IconSettings
} from '@tabler/icons-react'

export const sidelinks = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Explore',
    label: '',
    href: '/explore',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Movies',
        label: '',
        href: '/resources/movie',
        icon: <IconMovie size={18} />,
      },
      {
        title: 'Tv-shows',
        label: '',
        href: '/resources/tv-show',
        icon: <IconDeviceTv size={18} />,
      },
      {
        title: 'Comics',
        label: '',
        href: '/resources/manga',
        icon: <IconNotebook size={18} />,
      },
    ],
  },
  {
    title: 'Tracks',
    label: '',
    href: '/Tracks',
    icon: <IconChartHistogram size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
