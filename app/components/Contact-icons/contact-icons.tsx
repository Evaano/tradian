import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import React from "react";

import classes from "./contact-icons.module.css";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "evaan0202@gmail.com", icon: IconAt },
  { title: "Phone", description: "+(960) 9190402", icon: IconPhone },
  { title: "Address", description: "10539, Hulhumale", icon: IconMapPin },
  { title: "Working hours", description: "2 p.m. – 5 p.m.", icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
