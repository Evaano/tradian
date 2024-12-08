import { ArticleCard } from ".prisma/client";
import {
  Container,
  Paper,
  Stack,
  Title,
  TextInput,
  Card,
  Box,
  Text,
  Image,
  AspectRatio,
  Flex,
  SimpleGrid,
} from "@mantine/core";
import { $Enums } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

import { ArticleFilters } from "~/components/article-card/article-filter";
import classes from "~/components/article-card/card.module.css";
import { Faq } from "~/components/faq/faq";
import { Info } from "~/components/more-info/info";
import { prisma } from "~/db.server";

import Tag = $Enums.Tag;

export const loader: LoaderFunction = async () => {
  const articles = await prisma.articleCard.findMany();

  return json({ articles });
};

export default function Support() {
  const { articles } = useLoaderData<typeof loader>();

  const initialFilters: Tag[] = [
    "Business",
    "Import",
    "Export",
    "Individual",
    "Transit",
    "Vessels",
  ];

  const [activeFilters, setActiveFilters] = useState<Tag[]>(initialFilters);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterToggle = (filter: Tag) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const filteredCards =
    activeFilters.length === 0
      ? articles
      : articles.filter((article: { tags: Tag[] }) =>
          activeFilters.some((filter) => article.tags.includes(filter)),
        );

  const searchedCards = filteredCards.filter((article: ArticleCard) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const cards = searchedCards.map((article: ArticleCard) => (
    <Card
      key={article.title}
      p="md"
      radius="lg"
      component="a"
      shadow={"md"}
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.imageSrc} />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Text c="dimmed" size="xs" mt="md">
        {article.description}
      </Text>
      <Text c="dimmed">
        Read the guide{" "}
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          <RiArrowRightUpLine />
        </span>
      </Text>
    </Card>
  ));

  return (
    <Paper
      style={{
        backgroundColor: "#F6F6F6",
      }}
    >
      <Container
        size={"xl"}
        style={{
          position: "relative",
          paddingBottom: "4rem",
          paddingTop: "2rem",
          backgroundColor: "#F6F6F6",
        }}
      >
        <Stack h={300} align="center" justify="center" gap="md">
          <Title size={"52px"}>Welcome to Tradian support center</Title>
          <TextInput
            radius="xl"
            size="xl"
            placeholder="Type to Search"
            leftSection={<IconSearch size={38} stroke={1.5} />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Stack>

        <Box mt={70}>
          <Text size="md" c={"dimmed"}>
            Filters
          </Text>
          <ArticleFilters
            activeFilters={activeFilters}
            onFilterToggle={handleFilterToggle}
          />
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
            <Title order={2}>Popular Topics</Title>
          </Flex>
          <SimpleGrid cols={3}>{cards}</SimpleGrid>
        </Box>

        <Box mt={100}>
          <Faq />
        </Box>

        <Box mt={100} mb={500}>
          <Info />
        </Box>
      </Container>
    </Paper>
  );
}
