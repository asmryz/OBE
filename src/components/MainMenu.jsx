import { useState } from 'react';
import {
  IconChevronDown,
  IconChevronRight,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';
import cx from 'clsx';
import {
  Avatar,
  Group,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import classes from './MainMenu.module.css';

const user = {
  name: 'Dr. Husnain Mansoor Ali',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export default function MainMenu() {
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group gap={7}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />}
        >
          Liked posts
        </Menu.Item>
        <Menu.Item
          leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}
          rightSection={<IconChevronRight size={14} stroke={1.5} />}
          closeMenuOnClick={false}
        >
          <Menu
            trigger="hover"
            position="right-start"
            offset={45}
            withinPortal
          >
            <Menu.Target>
              <div>Courses</div>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Fundamentals of Programming</Menu.Item>
              <Menu.Item>Introduction to Computer Science</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMessage size={16} color={theme.colors.blue[6]} stroke={1.5} />}
          disabled
        >
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
          Account settings
        </Menu.Item>
        <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
          Change account
        </Menu.Item>
        <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
          Pause subscription
        </Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}