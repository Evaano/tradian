import { Title, Text, Divider } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { DutyStacks } from "~/components/duty-stacks/duty-stack";
import { prisma } from "~/db.server";

export const loader: LoaderFunction = async () => {
  const dutyFreeItems = await prisma.fAQ.findMany({
    where: {
      category: "Duty-Free Items",
    },
  });

  const dutyFreeAllowances = await prisma.fAQ.findMany({
    where: {
      category: "Duty-Free Allowances",
    },
  });

  const itemsNotEligibleForDutyExemptions = await prisma.fAQ.findMany({
    where: {
      category: "Items not Eligible for Duty Exemptions",
    },
  });

  return json({
    dutyFreeItems,
    dutyFreeAllowances,
    itemsNotEligibleForDutyExemptions,
  });
};

export default function IndividualDuty() {
  const {
    dutyFreeItems,
    dutyFreeAllowances,
    itemsNotEligibleForDutyExemptions,
  } = useLoaderData<typeof loader>();

  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
      <div className={"my-12"}>
        <Title order={2}>
          Duty Exemptions for Imported Goods in the Maldives
        </Title>
      </div>
      <div className={"my-7"}>
        <Text>
          This guide provides an in-depth look into the duty exemptions
          available for goods imported into the Maldives, helping importers,
          exporters, and first-time importers understand the regulations,
          eligibility criteria, and conditions for duty-free importation. The
          guide also clarifies the restrictions on specific items and potential
          consequences for misuse of duty concessions.
        </Text>
      </div>

      <div className={"my-12"}>
        <DutyStacks title={"Duty-Free Items"} faqs={dutyFreeItems} />
      </div>

      <div className={"my-12"}>
        <DutyStacks title={"Duty-Free Allowances"} faqs={dutyFreeAllowances} />
      </div>

      <div className={"my-7"}>
        <Text>
          Individuals returning to the Maldives after an extended stay abroad
          are eligible for duty exemptions, with allowance amounts varying
          depending on the length of time spent outside the country.
        </Text>
        <br />
        <Text>
          Additionally, students and professionals returning to the Maldives
          after studying or working abroad may bring in professional equipment,
          including computers and other educational tools, without incurring
          import duties.
        </Text>
      </div>

      <div className={"my-7"}>
        <DutyStacks
          title={"Items not Eligible for Duty Exemptions"}
          faqs={itemsNotEligibleForDutyExemptions}
        />
      </div>

      <Text>
        Furthermore, Customs reserves the right to classify certain items as
        commercial if they exceed specific thresholds regarding quantity, type,
        value, or frequency of importation. Even if the total value of the items
        is under MVR 10,000, they may still incur duties if considered
        commercial by Customs.
      </Text>
      <Divider my={"xl"} />
      <Text>
        Adhering to the guidelines for duty concessions is essential. Any
        misuse, such as declaring goods as personal items while intending to
        sell them commercially, may result in the forfeiture of duty exemptions.
        Customs authorities have the right to impose full duties and take
        appropriate actions if misuse is detected. Importers and individuals
        must ensure their goods comply with the regulations set by the Maldives
        Customs Service. Misrepresenting goods to evade import duties can lead
        to penalties, including fines or legal consequences.
      </Text>
      <Divider my={"xl"} />

      <div className={"mb-[600px]"}>
        <Text fs="italic">
          This guide is designed to assist individuals in understanding the key
          duty exemptions available when importing goods into the Maldives. It
          also serves as a reminder to adhere to the outlined restrictions to
          avoid penalties and ensure compliance with{" "}
          <Text
            span
            component={Link}
            to={"https://mvlaw.gov.mv/dv/legislations/124/consolidations/133"}
            c={"primary-color"}
          >
            Customs regulation.
          </Text>
        </Text>
      </div>
    </div>
  );
}
