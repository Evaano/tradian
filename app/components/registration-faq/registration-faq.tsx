import { Accordion, Container, Title } from "@mantine/core";

import classes from "./registration-faq.module.css";

interface FaqItem {
  title: string;
  category: string;
  content: string;
}

interface FaqSimpleProps {
  title: string;
  faqs: FaqItem[];
}

export function FaqSimple({ title, faqs }: FaqSimpleProps) {
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
            value={faq.title}
          >
            <Accordion.Control>{faq.title}</Accordion.Control>
            <Accordion.Panel>
              <div dangerouslySetInnerHTML={{ __html: faq.content }} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
