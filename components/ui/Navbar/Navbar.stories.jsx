import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

export const Default = {
  args: {
    links: [
      { href: '#', label: 'Home' },
      { href: '#', label: 'About' },
      { href: '#', label: 'Contact' },
    ],
  },
};
