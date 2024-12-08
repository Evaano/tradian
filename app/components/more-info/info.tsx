import { SimpleGrid, Container, Stack, Title, Text } from "@mantine/core";
import { RiArrowRightUpLine } from "react-icons/ri";

export function Info() {
  return (
    <Container size="md">
      <Stack gap="md" align="center" mb="md">
        <Title ta={"center"} order={2}>
          Couldn&apos;t find what you needed?
        </Title>
        <Text ta="center">
          Call{" "}
          <Text span c="primary-color" td="underline">
            3334001
          </Text>{" "}
          to speak with an agent{" "}
          <Text ta="center">
            or visit any of our Support Centers for personalized support and
            assistance.
          </Text>
        </Text>
      </Stack>

      <SimpleGrid cols={3} spacing="lg" mt="xl">
        <div>
          <Title order={5} ta="center">
            Malé City
          </Title>
          <Text ta="center">
            Henveiru Ferry Terminal, Ground Floor, Boduthakurufaanu Magu.
          </Text>
          <Text c="primary-color" ta="center">
            Open in Google Maps{" "}
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <RiArrowRightUpLine />
            </span>
          </Text>
        </div>
        <div>
          <Title order={5} ta="center">
            Addu City
          </Title>
          <Text ta="center">
            Saafee Hingun, Maradhoo Feydhoo, (Old Dhiraagu Building)
          </Text>
          <Text c="primary-color">
            Open in Google Maps{" "}
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <RiArrowRightUpLine />
            </span>
          </Text>
        </div>
        <div>
          <Title order={5} ta="center">
            Fuvahmulah City
          </Title>
          <Text ta="center">Moonimaage, Orchid Magu, Maadhadu.</Text>
          <Text c="primary-color" ta="center">
            Open in Google Maps{" "}
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <RiArrowRightUpLine />
            </span>
          </Text>
        </div>
      </SimpleGrid>
    </Container>
  );
}
