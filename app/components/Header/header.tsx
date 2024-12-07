import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  rem,
  useMantineTheme,
  Box,
  Center,
  Image,
  Title,
  Button,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import {
  IconLogout,
  IconMessage,
  IconSettings,
  IconChevronDown,
} from "@tabler/icons-react";
import { useState } from "react";

import logo from "~/assets/logo.svg";
import { useOptionalUser } from "~/utils";

import classes from "./header.module.css";

const links = [
  {
    link: "#1",
    label: "Business",
    links: [
      { link: "/events/view-all", label: "View Events" },
      { link: "/events/add", label: "Add Events" },
      { link: "/events/calendar", label: "View Calender" },
    ],
  },
  {
    link: "#2",
    label: "Individual",
    links: [
      { link: "/individual/registration", label: "Registration" },
      { link: "/individual/duty", label: "Duty Exemptions" },
      { link: "/", label: "Declaration Processing" },
      { link: "/", label: "Prohibited Items" },
      { link: "/", label: "Restricted Items" },
      { link: "/", label: "Postal Parcels" },
      { link: "/", label: "Customs Bond" },
    ],
  },
  { link: "/contact", label: "Support" },
];

export function HeaderTabs() {
  const user = useOptionalUser();
  const theme = useMantineTheme();
  const [, setUserMenuOpened] = useState(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link to={item.link} className={classes.link}>
          {item.label}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
          radius={"md"}
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <Text fw={700} className={classes.linkLabel}>
                  {link.label}
                </Text>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        <Text fw={700}>{link.label}</Text>
      </Link>
    );
  });

  const handleLogout = async () => {
    const response = await fetch("/logout", { method: "POST" });
    if (response.ok) {
      window.location.href = "/";
    } else {
      console.error("Logout failed");
    }
  };

  return (
    <header className={classes.header}>
      <Container fluid mx={"xl"}>
        <div className={classes.inner}>
          <Box>
            <Link to="/">
              <Image
                src={logo}
                h={40}
                w="auto"
                fit="contain"
                alt="Home"
                className={"cursor-pointer"}
              />
            </Link>
          </Box>
          <Group gap={"xl"} visibleFrom="sm">
            {items}
          </Group>
          {user ? (
            <Menu
              width={260}
              position="bottom-end"
              radius={"md"}
              transitionProps={{ transition: "pop-top-right" }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton>
                  <Group gap={7}>
                    <Avatar
                      src={
                        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                      }
                      alt={user?.email}
                      radius="xl"
                      size={20}
                    />
                    <Text fw={500} size="sm" lh={1} mr={3}>
                      {user?.email}
                    </Text>
                    <IconChevronDown
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={1.5}
                    />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    <IconMessage
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Your Events
                </Menu.Item>

                <Menu.Label>Settings</Menu.Label>
                <Menu.Item
                  leftSection={
                    <IconSettings
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                >
                  Account settings
                </Menu.Item>
                <Menu.Item
                  onClick={handleLogout}
                  leftSection={
                    <IconLogout
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button
              variant="filled"
              size="sm"
              component={Link}
              to={"/login"}
              radius={"xl"}
            >
              Login
            </Button>
          )}
        </div>
      </Container>
    </header>
  );
}
