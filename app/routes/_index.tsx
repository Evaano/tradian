import {
  AspectRatio,
  BackgroundImage,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { CiExport } from "react-icons/ci";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuImport } from "react-icons/lu";
import { MdQrCodeScanner } from "react-icons/md";
import { PiBoxArrowDownFill } from "react-icons/pi";
import { RiCustomerServiceFill } from "react-icons/ri";

import cardClasses from "~/components/article-card/article-card.module.css";
import classes from "~/components/article-card/card.module.css";
import { Faq } from "~/components/faq/faq";
import {Footer} from "~/components/Footer/footer";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Test() {
  const [buttonState, toggleButtonState] = useToggle([
    "check-declaration",
    "container-tracking",
  ]);
  const [secondButtonState, toggleSecondButtonState] = useToggle([
    "import",
    "export",
  ]);
  const [cNumber, setCNumber] = useState("");
  const [rNumber, setRNumber] = useState("");
  const [containerID, setContainerID] = useState("");

  const handleButtonClick = () => {
    toggleButtonState();
  };

  const handleSecondButtonClick = () => {
    toggleSecondButtonState();
  };

  const mockdata = [
    {
      title: "User Acceptance Testing for MNSW Begins",
      image:
          "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/7c5f9dfe-f9ce-4ffb-a255-46f04979aecf/uat4.jpg?t=1721637767",
      date: "Dec 06, 2024",
    },
    {
      title: "The Need for the MNSW System",
      image:
          "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/9e45f61b-4549-4d83-bab7-b4cee6613e67/frank-mckenna-tjX_sniNzgQ-unsplash.jpg?t=1725287349",
      date: "Dec 06, 2024",
    },
    {
      title:
          "Extensive Preparations and Activities Pave the Way for Rollout of MNSW",
      image:
          "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/88fc77f6-aec5-49df-89a7-83fe0679e972/GWIvMWmW4AAmpTM.jpg?t=1725287775",
      date: "Dec 06, 2024",
    },
  ];

  const cards = mockdata.map((article) => (
      <Card
          key={article.title}
          p="md"
          radius="lg"
          component="a"
          shadow={"md"}
          href="#"
          className={cardClasses.card}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
        </AspectRatio>
        <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
          {article.date}
        </Text>
        <Text className={cardClasses.title} mt={5}>
          {article.title}
        </Text>
      </Card>
  ));

  return (
      <Paper style={{
        backgroundColor: "#F6F6F6"
      }}>
        <Container
            size={"xl"}
            style={{
              position: "relative",
              paddingBottom: "4rem",
              paddingTop: "2rem",
              backgroundColor: "#F6F6F6"
            }}
        >
          <Box pos={"relative"}>
            <BackgroundImage
                radius="xl"
                bg={
                  "linear-gradient(339.06deg, #a2a1e926 7.33%, #5898bb1e 41.36%, #ff373726 79.12%)"
                }
                mih={800}
                src={"https://i.imgur.com/9Zuz6Nj.jpeg"}
                p={150}
            >
              <Stack h={300} align="center" justify="center" gap="md">
                <Title size={"83px"}>Get Ready for Tradian!</Title>
                <Text c={"#3C162ECC"} className="text-center">
                  Phase 1 of Tradian is coming in November. Join our training
                  sessions to master the platform and seamlessly transition your
                  import and export operations to Tradian.
                </Text>
                <Button component={Link} to="/" radius={"lg"}>
                  Request for Training
                </Button>
              </Stack>
            </BackgroundImage>
            <Box
                pos={"absolute"}
                style={{
                  top: 430,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                mt={100}
            >
              <Group justify={"center"} mb={"lg"}>
                <Title order={2}>Quick Lookup</Title>
                <Text c={"#3C162ECC"} className="text-center">
                  Instantly find declaration status, tariff details and
                  vessel/container tracking
                </Text>
              </Group>
              <Paper shadow="xs" radius={100} p="lg" color={"#FFF1F1"}>
                <Flex justify="center" gap={"xl"}>
                  <Button
                      variant={
                        buttonState === "check-declaration"
                            ? "filled"
                            : "transparent"
                      }
                      radius="xl"
                      size="lg"
                      leftSection={<PiBoxArrowDownFill />}
                      onClick={handleButtonClick}
                  >
                    Check Declaration
                  </Button>
                  <Button
                      variant={
                        buttonState === "container-tracking"
                            ? "filled"
                            : "transparent"
                      }
                      radius="xl"
                      size="lg"
                      leftSection={<MdQrCodeScanner />}
                      onClick={handleButtonClick}
                  >
                    Container Tracking
                  </Button>
                </Flex>
              </Paper>
              <Paper shadow="xs" radius={50} p={50} mt={24} bg={"#3C162E"}>
                <Flex mt={32} direction="column" gap="md">
                  {buttonState === "check-declaration" ? <>
                        <Title order={4} c={"white"}>
                          Declaration Status
                        </Title>
                        <Text c={"white"}>
                          Check import and export declaration status
                        </Text>
                        <Group gap="md" justify={"space-between"}>
                          <TextInput
                              value={cNumber}
                              onChange={(event) => setCNumber(event.target.value)}
                              label="C Number"
                              c={"#FFA0A0"}
                              placeholder={"C1234"}
                              w={200}
                          />
                          <TextInput
                              value={rNumber}
                              onChange={(event) => setRNumber(event.target.value)}
                              label="R Number"
                              c={"#FFA0A0"}
                              placeholder={"R/1234/00MP"}
                              w={200}
                          />
                          <Button color="red" radius="lg" mt={"md"}>
                            Search
                          </Button>
                        </Group>
                      </> : null}
                  {buttonState === "container-tracking" ? <>
                        <Title order={4} c={"white"}>
                          Container Tracking
                        </Title>
                        <Text c={"white"}>Retrieve Container status and ETA</Text>
                        <Group gap="md" justify={"space-between"}>
                          <TextInput
                              value={containerID}
                              onChange={(event) => setContainerID(event.target.value)}
                              label="Container ID"
                              c={"#FFA0A0"}
                              placeholder={"Container ID"}
                              w={400}
                          />
                          <Button color="red" radius="lg" mt={"md"}>
                            Search
                          </Button>
                        </Group>
                      </> : null}
                </Flex>
              </Paper>
            </Box>
          </Box>
          <Box mt={400}>
            <Flex
                mb={24}
                p={16}
                mih={50}
                gap="md"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
            >
              <Title order={2}>Popular Procedures</Title>
              <Group>
                <Button
                    variant={secondButtonState === "import" ? "filled" : "subtle"}
                    radius="xl"
                    size="lg"
                    leftSection={<LuImport />}
                    onClick={handleSecondButtonClick}
                >
                  Import
                </Button>
                <Button
                    variant={secondButtonState === "export" ? "filled" : "subtle"}
                    radius="xl"
                    size="lg"
                    leftSection={<CiExport />}
                    onClick={handleSecondButtonClick}
                >
                  Export
                </Button>
              </Group>
            </Flex>
            <SimpleGrid cols={3}>
              {secondButtonState === "import" ? <>
                    <Paper
                        shadow="xs"
                        p="xl"
                        radius="xl"
                        style={{
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                              "0px 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                    >
                      <GiCommercialAirplane size={36} />
                      <Title order={4} mb="md" mt="sm">
                        Customs Bond for Courier Goods
                      </Title>
                      <Text>
                        Information about Customs Bond and Import procedure for
                        Courier Goods
                      </Text>
                    </Paper>
                    <Paper
                        shadow="xs"
                        p="xl"
                        radius={"xl"}
                        style={{
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                              "0px 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                    >
                      <GiCommercialAirplane size={36} />
                      <Title order={4} mb="md" mt="sm">
                        Prohibited & Restricted Items
                      </Title>
                      <Text>
                        Information about Prohibited & Restricted Items for Import
                      </Text>
                    </Paper>
                    <Paper
                        shadow="xs"
                        p="xl"
                        radius={"xl"}
                        style={{
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                              "0px 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                    >
                      <GiCommercialAirplane size={36} />
                      <Title order={4} mb="md" mt="sm">
                        Duty Exemptions
                      </Title>
                      <Text>
                        Duty Exemptions & Allowances for Businesses wishing to
                        Import goods to Maldives
                      </Text>
                    </Paper>
                  </> : null}
              {secondButtonState === "export" ? <>
                    <Paper
                        shadow="xs"
                        p="xl"
                        radius="xl"
                        style={{
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                              "0px 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                    >
                      <GiCommercialAirplane size={36} />
                      <Title order={4} mb="md" mt="sm">
                        Duty Exemptions & Allowances
                      </Title>
                      <Text>
                        Duty Exemptions & Allowances for Businesses wishing to
                        Export goods from Maldives
                      </Text>
                    </Paper>
                    <Paper
                        shadow="xs"
                        p="xl"
                        radius={"xl"}
                        style={{
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                              "0px 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                    >
                      <GiCommercialAirplane size={36} />
                      <Title order={4} mb="md" mt="sm">
                        Transit Procedures
                      </Title>
                      <Text>
                        Information about the Transit Procedure in Maldives
                      </Text>
                    </Paper>
                    <Paper
                        shadow="xs"
                        p="xl"
                        radius={"xl"}
                        style={{
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                              "0px 4px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                    >
                      <GiCommercialAirplane size={36} />
                      <Title order={4} mb="md" mt="sm">
                        Restricted Items
                      </Title>
                      <Text>Items Restricted for Export from Maldives</Text>
                    </Paper>
                  </> : null}
            </SimpleGrid>

            <Box mt={100}>
              <Card
                  withBorder
                  radius="md"
                  p={0}
                  className={classes.card}
                  bg={"#3C162E"}
              >
                <Group wrap="nowrap" gap={0} align="flex-start">
                  <Box style={{ flex: 1 }} px={50} pt={100}>
                    <RiCustomerServiceFill size={50} color={"white"}/>
                    <Title order={2} mt={"lg"} c={"white"}>
                      Need Assistance?
                    </Title>
                    <Text mt="sm" c={"white"}>
                      If you have a problem and require assistance, get in touch
                      with our support team.
                    </Text>
                    <Group align="right" my="lg">
                      <Button radius={"xl"} color={"#2E1016"} c={"white"} variant={"outline"}>Find Help</Button>
                    </Group>
                  </Box>
                  <div style={{ flex: 1, padding: 0, margin: 0 }}>
                    <Image
                        h={400}
                        src="https://tradian.gov.mv/_nuxt/contactImage.BejrOICs.jpeg"
                        style={{
                          objectFit: "cover",
                          padding: 0,
                          margin: 0,
                        }}
                    />
                  </div>
                </Group>
              </Card>
            </Box>
          </Box>

          <Box mt={400}>
            <Flex
                mb={24}
                p={16}
                mih={50}
                gap="md"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
            >
              <Title order={2}>News and Updates</Title>
            </Flex>
            <SimpleGrid cols={3}>{cards}</SimpleGrid>
          </Box>

          <Box mt={100} mb={500}>
            <Faq />
          </Box>
        </Container>
      </Paper>
  );
}
