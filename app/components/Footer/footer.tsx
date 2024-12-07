import {
  ActionIcon, Button,
  Container, Divider, Flex,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconArrowRight, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";

import logo from "~/assets/logoLight.svg"

export const Footer = () => {
  const quickLinks = ['oneGov', 'Tradenet'];
  const logistics = ['Vessels', 'Shipping Agents', 'Freight Forwarders', 'Courier Agents', 'Brokers'];
  const termsAndPolicies = ['Terms and Conditions'];

  return (
    <footer className={"bg-[#3c162e]"}>
      <Container size="xl" py="xl">
        <Paper bg={"#5735504d"} radius={"md"} p={"xl"}>
        <Group justify="space-between" align="center">
          <Stack
            align="flex-start"
            justify="center"
          >
          <Title order={3} c={"#FFC7C7"}>Subscribe to our newsletter</Title>
          <Text c={"white"}>Receive the Latest Updates, News, and Insights from Tradian</Text>
          </Stack>
          <Group align="center" mt="md">
            <TextInput
              placeholder="Enter your email"
              size="md"
              rightSectionWidth={200}
              rightSection={
                <Button miw={210} mih={45} color="#1F0E0A" rightSection={<IconArrowRight />}>
                  Subscribe Now
                </Button>
              }
              miw={500}
            />
          </Group>
        </Group>
        </Paper>

        <SimpleGrid spacing="lg" mt="xl" cols={{ base: 1, md: 4 }}>
          <div>
            <Title order={5} c="#FFC7C7">Quick Links</Title>
            {quickLinks.map((link, index) => (
              <Text key={index} size="sm" c={"white"} py={1}>{link}</Text>
            ))}
          </div>

          <div>
            <Title order={5} c="#FFC7C7">Logistics</Title>
            {logistics.map((link, index) => (
              <Text key={index} size="sm" c={"white"} py={1}>{link}</Text>
            ))}
          </div>

          <div>
            <Title order={5} c="#FFC7C7">Terms and Policies</Title>
            {termsAndPolicies.map((link, index) => (
              <Text key={index} size="sm" c={"white"} py={1}>{link}</Text>
            ))}
          </div>

          <div>
            <Flex
              justify="flex-end"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <Image
                src={"https://tradian.gov.mv/_nuxt/bml.5aEfgva9.png"}
                h={40}
                w="auto"
                fit="contain"
                radius={"md"}
              />
            </Flex>
          </div>
        </SimpleGrid>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={logo}
              h={50}
              w="auto"
              fit="contain"
            />
          </div>
          <div className="flex flex-col items-end">
            <Group gap={12} mt="sm">
              <ActionIcon size="lg" color="white" variant="subtle">
                <IconBrandFacebook size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="white" variant="subtle">
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="white" variant="subtle">
                <IconBrandYoutube size={18} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
        </div>
        <Divider />
        <Flex
          justify="space-between"
          align="flex-start"
          direction="row"
          wrap="wrap"
          mt={"md"}
        >
        <Text c={"white"} size={"xs"}>Operated by <Link to={"https://www.tradenet.com.mv/"}>Tradenet</Link></Text>
        <Text c={"white"} size={"xs"}>© 2024, Government of Maldives. All Rights Reserved.</Text>
        </Flex>
      </Container>
    </footer>
  );
};