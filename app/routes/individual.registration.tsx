import { Center, Image, Text, Title } from "@mantine/core";

import { FaqSimple } from "~/components/registration-faq/registration-faq";

export default function individualRegistration() {
  const faqsData = [
    {
      subtitle: "How can I reset my password?",
      description:
        'To reset your password, go to the login page and click "Forgot password?". Follow the instructions sent to your email.',
    },
    {
      subtitle: "Can I create more than one account?",
      description:
        "Yes, you can create multiple accounts using different email addresses.",
    },
  ];

  return (
    <div style={{
        backgroundColor: "#F6F6F6"
    }}>
      <Title order={2} mb={"md"}>
        Import Registration in Maldives
      </Title>
      <Text span={true}>
        To engage in the importing of goods into the Maldives, a business entity
        must be duly registered with both the Ministry of Economic Development
        and Trade and the Maldives Customs Service. This ensures that the entity
        is authorized to import and export goods in accordance with the{" "}
      </Text>
      <Text
        component={"a"}
        href="https://mvlaw.gov.mv/dv/legislations/72/consolidations/1184"
        target="_blank"
        rel="noopener noreferrer"
        c={"red"}
        span={true}
      >
        Maldives Export Import Act 31/79
      </Text>
      <Text span={true}> and </Text>
      <Text
        component={"a"}
        href="https://mvlaw.gov.mv/dv/legislations/72/consolidations/1184"
        target="_blank"
        rel="noopener noreferrer"
        c={"red"}
        span={true}
      >
        Maldives Customs Act 8/2011
      </Text>

      <Center mt={"lg"}>
        <Image
          radius="md"
          h={600}
          w={"auto"}
          src="https://assets.tradian.gov.mv/Business_Registration_via_Business_Portal_and_one_Gov_d4aba0347e.jpg"
        />
      </Center>

      <FaqSimple title={"Import Registration"} faqs={faqsData} />
    </div>
  );
}
