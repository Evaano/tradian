import { IconPlus } from "@tabler/icons-react";
import {
  Accordion,
  Container,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "./faq.module.css";

export function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title ta="center" order={2} mb={"md"}>
          Frequently Asked Questions
        </Title>
        <Text ta="center" mb={"xl"}>
          These are the most commonly asked questions about import and export.
        </Text>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" size={26}>
              <IconPlus size={18} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>
              <Text fw={700}>What is Tradian?</Text>
            </Accordion.Control>
            <Accordion.Panel>
              Tradian is a trade facilitation platform designed to simplify and
              streamline international trade processes in Maldives. <br />
              <br />
              It is a centralized digital platform designed to streamline
              international trade by enabling trade and transport parties to
              submit standard information and documents through a single entry
              point.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              <Text fw={700}>What is the use of Tradian?</Text>
            </Accordion.Control>
            <Accordion.Panel>
              Currently, the trade landscape in the Maldives requires the use of
              different portals for each stage of the international trade
              process, leading to significant delays in imports and exports.
              However, with a National Single Window like our Tradian Portal,
              businesses and individuals can complete international trade
              procedures more efficiently and in a shorter period of time.
              <br />
              <br /> The Maldives trade landscape involves multiple portals for
              different stages of international trade. With a National Single
              Window like our Tradian Portal, businesses can streamline services
              through single submission and integration, completing trade
              procedures more efficiently.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              <Text fw={700}>
                Which parties are required to register on Tradian in Phase 01?
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              During Phase One, the following parties must complete registration
              on Tradian:
              <br />
              <br />
              <List>
                <List.Item>Shipping Agents</List.Item>
                <List.Item>Freight Forwarding Companies</List.Item>
                <List.Item>Exporters and Importers</List.Item>
              </List>
              <br />
              These entities are essential participants in the trade process and
              need registration to access Tradian's services and features.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              <Text fw={700}>What are the services available in Phase 01?</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <List>
                <List.Item>Vessel Registration</List.Item>
                <List.Item>ETA</List.Item>
                <List.Item>Vessel Declaration</List.Item>
                <List.Item>Inward and outward </List.Item>
                <List.Item>Sea Manifest</List.Item>
                <List.Item>Electronic Delivery Order. (EDO)</List.Item>
                <List.Item>
                  Licenses, Permits, Certificates and Others. (LPCOs)
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
