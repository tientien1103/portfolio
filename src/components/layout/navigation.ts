export interface INavigation {
  href: string;
  title: string;
  children?: INavigation[];
}

export const NAVIGATION: INavigation[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  // {
  //   href: '/rooms',
  //   title: 'Sleep Rooms',
  // },
  // {
  //   href: '/sleep-study',
  //   title: 'Sleep Studies',
  // },
  // {
  //   href: '/contact',
  //   title: 'Contact',
  // },
  // {
  //   href: '/sleep-assessment',
  //   title: 'Quiz',
  // },
];

export default NAVIGATION;
