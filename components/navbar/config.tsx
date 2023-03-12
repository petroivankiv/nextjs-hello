import {
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

interface MenuItem {
  name: string;
  description?: string;
  path?: string;
  children?: MenuItem[];
  icon?: any;
}

export const MENU_CONFIG: MenuItem[] = [
  // {
  //   name: 'Topics',
  //   children: [
  //     {
  //       name: 'NextJS',
  //       description:
  //         'Get a better understanding of where your traffic is coming from.',
  //       path: '#',
  //       icon: ChartBarIcon,
  //     },
  //     {
  //       name: 'React',
  //       description:
  //         'Speak directly to your customers in a more meaningful way.',
  //       path: '#',
  //       icon: CursorClickIcon,
  //     },
  //     {
  //       name: 'Angular',
  //       description: "Your customers' data will be safe and secure.",
  //       path: '#',
  //       icon: ShieldCheckIcon,
  //     },
  //   ],
  // },
  {
    name: 'Молитви',
    path: '#',
  },
  {
    name: 'Проповіді',
    path: '#',
  },
  {
    name: 'Притчі',
    path: '#',
  },
  {
    name: 'Таїнства',
    path: '#',
  },
];
