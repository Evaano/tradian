import { Accordion, Container, Title } from "@mantine/core";

import classes from "./registration-faq.module.css";

export function FaqSimple({
  title,
  faqs,
}: {
  title: string;
  faqs: { subtitle: string; description: string }[];
}) {
  return (
    <Container size="xl" className={classes.wrapper}>
      <Title ta="left" className={classes.title}>
        {title}
      </Title>

      <Accordion variant="separated">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            className={classes.item}
            value="reset-password"
          >
            <Accordion.Control>{faq.subtitle}</Accordion.Control>
            <Accordion.Panel>{faq.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
