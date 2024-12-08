import { SimpleGrid, Container, Stack, Title, Text } from "@mantine/core";
import { RiArrowRightUpLine } from "react-icons/ri";
import {Link} from "@remix-run/react";

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
          <Text c="primary-color" ta="center" component={Link} to={"https://www.google.com/maps/place/Henveiru+Ferry+Terminal/@4.1777398,73.5168011,20.25z/data=!4m6!3m5!1s0x3b3f7f46eae38917:0x5ec6b63033a5d404!8m2!3d4.1778236!4d73.5172935!16s%2Fg%2F11tn55td91?entry=tts&shorturl=1"}>
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
          <Text c="primary-color" ta="center" component={Link} to={"https://www.google.com/maps/place/84GG%2BGXQ,+Addu+City/@-0.6734062,73.1270162,193m/data=!3m1!1e3!4m6!3m5!1s0x24b598e4f29baa95:0x4505f81ef2f189d!8m2!3d-0.6736787!4d73.1274691!16s%2Fg%2F11jt6j687_?entry=tts&shorturl=1"}>
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
          <Text c="primary-color" ta="center" component={Link} to={"https://www.google.com/maps/search/-0.292659,+73.423243?entry=tts&shorturl=1"}>
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
