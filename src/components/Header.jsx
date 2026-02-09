import {  } from 'react';
import {
  Avatar,
  Burger,
  Container,
  Button,
  Group,
  Menu,
  Tabs,
  Text,
  UnstyledButton,
  //useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import {
  IconChevronDown,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
  IconPlayerPause,
  IconTrash,
} from '@tabler/icons-react';
//import cx from 'clsx';
import classes from './Header.module.css';
import MainMenu from './MainMenu';

// const links = [
//   { link: '/courses', label: 'Courses' },
// //   { link: '/pricing', label: 'Pricing' },
// //   { link: '/learn', label: 'Learn' },
// //   { link: '/community', label: 'Community' },
// ];

export function Header() {
  //const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  //const [active, setActive] = useState(links[0].link);
  //const [userMenuOpened, setUserMenuOpened] = useState(false);

  // Mock user data - replace with actual user data from your auth system
//   const user = {
//     name: 'John Doe',
//     image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
//   };

//const items = ''

//   const items = links.map((link) => (
//     <a
//       key={link.label}
//       href={link.link}
//       className={classes.link}
//       data-active={active === link.link || undefined}
//       onClick={(event) => {
//         event.preventDefault();
//         setActive(link.link);
//       }}
//     >
//       {link.label}
//     </a>
//   ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group justify="space-between" style={{ width: '100%' }}>
          <Group gap={5}>
            <MantineLogo size={28} />
          </Group>

          {/* <Group gap={5} visibleFrom="xs">
            {items}
          </Group> */}

          <Group gap={5}>
            <MainMenu visibleFrom="xs" />
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          </Group>
        </Group>

      </Container>
    </header >
  );
}