import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { FaqSimple } from "~/components/registration-faq/registration-faq";
import { prisma } from "~/db.server";

export const loader: LoaderFunction = async () => {
  const registrationContent = await prisma.fAQ.findMany({
    where: {
      category: "Customs Portal Registration",
    },
  });

  const efaasContent = await prisma.fAQ.findMany({
    where: {
      category: "eFaas Registration",
    },
  });

  return json({
    registrationContent,
    efaasContent,
  });
};

export default function IndividualRegistration() {
  const { registrationContent, efaasContent } = useLoaderData<typeof loader>();

  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
      <div>
        <FaqSimple title={"eFaas Registration"} faqs={registrationContent} />
      </div>

      <div className="mb-[600px]">
        <FaqSimple title={"Customs Portal Registration"} faqs={efaasContent} />
      </div>
    </div>
  );
}
