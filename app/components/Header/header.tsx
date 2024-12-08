import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  rem,
  Box,
  Center,
  Image,
  Button,
  Modal, Title, Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "@remix-run/react";
import { IconLogout, IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

import logo from "~/assets/logo.svg";
import { useOptionalUser } from "~/utils";

import classes from "./header.module.css";

export function HeaderTabs() {
  const user = useOptionalUser();
  const [, setUserMenuOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [activeMainLink, setActiveMainLink] = useState<string | null>(null);

  const handleLogout = async () => {
    const response = await fetch("/logout", { method: "POST" });
    if (response.ok) {
      window.location.href = "/";
    } else {
      console.error("Logout failed");
    }
  };

  const links = [
    {
      link: "#1",
      label: "Business",
      links: [
        {
          label: "Registration",
          sublinks: [
            { link: "/business/registration", label: "Business Registration" },
            { link: "/business/re-export", label: "Re-Export Procedure" },
          ],
        },
        {
          label: "Items",
          sublinks: [
            { link: "/business/prohibited", label: "Prohibited Items" },
            { link: "/business/restricted", label: "Restricted Items" },
          ],
        },
        {
          label: "Procedures",
          sublinks: [
            { link: "/business/export", label: "Cargo Export Procedure" },
            { link: "/business/duty", label: "Duty Exemption and Allowances" },
          ],
        },
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
    { link: "/support", label: "Support" },
    ...(user ? [{ link: "/contact", label: "Contact Us" }] : []),
  ];

  const items = links.map((link) => {
    // Special handling for the "Business" link
    if (link.label === "Business") {
      const [selectedLabel, setSelectedLabel] = useState(link.links[0].label);

      const mainLinks = link.links.map((item) => (
          <Menu.Item
              key={item.label}
              onClick={() => setSelectedLabel(item.label)}
              className={`${classes.mainLink} ${
                  selectedLabel === item.label ? classes.activeLink : ""
              }`}
              style={{ cursor: "pointer", padding: "0.5rem 0" }}
          >
            <Text fw={500}>{item.label}</Text>
          </Menu.Item>
      ));

      const subLinks = link.links
          .find((item) => item.label === selectedLabel)
          ?.sublinks.map((sublink) => (
              <Menu.Item key={sublink.link}>
                <Link to={sublink.link} className={classes.sublink}>
                  {sublink.label}
                </Link>
              </Menu.Item>
          ));

      return (
          <Menu
              key={link.label}
              trigger="hover"
              transitionProps={{ exitDuration: 0 }}
              withinPortal
              radius="md"
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
            <Menu.Dropdown>
              <Group align="flex-start">
                {/* Left column: Main links */}
                <Box
                    style={{
                      borderRight: "1px solid #eee",
                      paddingRight: "1rem",
                      width: "150px", // Adjust width as needed
                    }}
                >
                  {mainLinks}
                </Box>
                {/* Right column: Sublinks */}
                <Box>{subLinks}</Box>
              </Group>
            </Menu.Dropdown>
          </Menu>
      );
    }

    // Default handling for other links
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
              radius="md"
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
                <Menu.Label>Settings</Menu.Label>
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
            <Button variant="filled" size="sm" onClick={open} radius={"xl"}>
              Login
            </Button>
          )}
        </div>

        <Modal opened={opened} onClose={close} centered size={"50%"} radius={"xl"} styles={{
          content: {
            height: "500px",
            paddingTop: "60px",
            paddingLeft: "60px",
            paddingRight: "60px"
          }
        }}>
          <Stack align="center" mt="md">
            <Box w={120}>
            <Image
                src={logo}
                h={70}
                w="auto"
                width="auto"
                fit="contain"
            /></Box>
            <Title order={2}>Sign in to Tradian</Title>
            <Button component={Link} to="/login" radius="lg" w={400} onClick={close}>
              Login
            </Button>
            <Button color="#1A1A1A" component={Link} to="/join" radius="lg" w={400} onClick={close}>
              Register
            </Button>
          </Stack>
        </Modal>

      </Container>
    </header>
  );
}
