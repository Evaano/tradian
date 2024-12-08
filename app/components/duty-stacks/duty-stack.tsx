import { Paper, Stack, Title } from "@mantine/core";

interface FaqItem {
  title: string;
  category: string;
  content: string;
}

interface FaqSimpleProps {
  title: string;
  faqs: FaqItem[];
}

export function DutyStacks({ title, faqs }: FaqSimpleProps) {
  return (
    <Paper shadow="md" p="xl" my={"md"} radius={"lg"}>
      <Stack gap="xl">
        <Title order={2}>{title}</Title>
        <Stack gap="md">
          {faqs.map((faq, index) => (
            <Paper shadow="md" p="xl" mb={"md"} bg={"#F6F6F6"} key={index}>
              <Title order={4}>{faq.title}</Title>
              <div dangerouslySetInnerHTML={{ __html: faq.content }} />
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}
