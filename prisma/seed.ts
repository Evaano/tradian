import { $Enums, PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import Tag = $Enums.Tag;

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.fAQ.deleteMany();

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const faqs = [
    // FAQs for Customs Portal Registration
    {
      title: "Introduction",
      category: "Customs Portal Registration",
      content: `
    <h1>Introduction</h1>
    <p>Welcome to the Customs Portal Registration User Guide. This guide will provide a detailed, step-by-step process for first-time importers and exporters looking to register with the Maldives Customs Service. By completing this process, you will obtain your Customs Registration Number (referred to as a “C” number), which allows you to import or export goods to and from the Maldives.</p>
    `,
    },
    {
      title: "How to get registered: Step-by-step guide",
      category: "Customs Portal Registration",
      content: `
    <h2>Step 1: Accessing the Customs Portal</h2>
    <ol>
      <li><strong>Visit the Customs Website:</strong> Navigate to the Maldives Customs Service website at <a href="http://www.customs.gov.mv" target="_blank">www.customs.gov.mv</a>.</li>
      <li><strong>Log In to the Portal:</strong> Click on “Sign in to Customs Portal.” If you already have an account, log in using your existing credentials. If not, you may log in via Efaas, the Maldives National Digital ID platform.</li>
    </ol>

    <h2>Step 2: Initiating a New Registration Request</h2>
    <ol>
      <li><strong>Access Registration:</strong> Once logged in, locate the Dashboard on the left-hand side of the page and click on the Registration tab.</li>
      <li><strong>Submit a New Request:</strong> Select "New Request" to begin the process. Fill in the required details. Fields marked with an asterisk (*) are mandatory.</li>
      <li><strong>Request Type:</strong> Under the "Request Type*" dropdown, select "Importer/Exporter."</li>
      <li><strong>Trade Registry Number:</strong> Enter your Trade Registry Number* according to the format on the Business Registration or Profile Sheet issued by the Ministry of Economic Development and Trade:
        <ul>
          <li>Companies: C-0000/YYYY or C0000YYYY</li>
          <li>Sole Proprietorships: SP-0000/YYYY or SP0000YYYY</li>
        </ul>
      </li>
      <li><strong>Auto-Fill of Relevant Data:</strong> After entering the Trade Registry Number, relevant business details will auto-populate.</li>
      <li><strong>Business Sector & Activity:</strong> Select your Business Sector from the dropdown menu. Select your Business Activity if applicable. Specific cases requiring additional information include:
        <ul>
          <li>Local Vessel: Select the vessel from the dropdown.</li>
          <li>Bonded Warehouse: Choose the appropriate warehouse.</li>
          <li>Duty-Free Shops: Select the corresponding shop.</li>
          <li>Project: Enter the project name.</li>
          <li>Resorts: Enter the resort name.</li>
        </ul>
      </li>
      <li><strong>Additional Information:</strong> Complete the remaining fields, including Contact Number, Contact Address, Email Address, and Confirm Email Address. If registering a vessel, provide the necessary Vessel Registration details.</li>
      <li><strong>Proceed to the Next Step:</strong> Once all mandatory fields are completed, click "Next" to continue.</li>
    </ol>

    <h2>Step 3: Uploading Supporting Documents</h2>
    <ol>
      <li><strong>Prepare Your Documents:</strong> Upload the required supporting documents in PDF format. Ensure that no single document exceeds 2MB in size. If necessary, combine multiple documents into one file.</li>
      <li><strong>Required Documents:</strong>
        <ul>
          <li>Business Registration/Profile Sheet* (from Ministry of Economic Development)</li>
          <li>National ID Copy*</li>
          <li>Project Awarding Letter (if registering for a project)</li>
          <li>Resort Operating License (if registering a resort, issued by the Ministry of Tourism)</li>
        </ul>
      </li>
      <li><strong>Finalize Upload:</strong> After uploading all the required documents, click "Finish" to complete this step.</li>
    </ol>

    <h2>Step 4: Submission and Status Checking</h2>
    <ol>
      <li><strong>Submit Your Application:</strong> After all required documents are uploaded, click "Submit" to send your registration request for review.</li>
      <li><strong>Monitor Your Application Status:</strong> Check the status of your submission under the "My Request" tab located in the Registration section.</li>
      <li><strong>Approval or Rejection:</strong> If your request is approved, you can retrieve your Importer/Exporter Registration Certificate. If rejected, the reason for the rejection will be visible in the "My Request" tab.</li>
    </ol>

    <h2>Step 5: Accessing the Customs Portal and ASYCUDA</h2>
    <ol>
      <li><strong>Receive Your C Number:</strong> Once your application is approved, you will receive your C Number (Customs Registration Number). A password will be sent to the email address you registered with.</li>
      <li><strong>Logging in to ASYCUDA:</strong> Log in to the Customs Portal using your credentials. Access the ASYCUDA system login information on the left side of the portal’s home page.</li>
      <li><strong>Password Reset:</strong> If you need to reset your ASYCUDA password, click the "Change ASYCUDA Password" reset button.</li>
    </ol>
  `,
    },

    // FAQs for eFaas Registration
    {
      title: "What is eFaas?",
      category: "eFaas Registration",
      content: `
    <h1>What is eFaas?</h1>
    <p>eFaas is the Maldives National Digital Identity system, designed to provide a secure, efficient way for individuals and businesses to authenticate their identity. Whether you are an importer, exporter, or new to the process, eFaas allows you to access government services related to trade, customs, and business licensing without needing to visit offices in person. The system ensures your data's security through multi-factor authentication and biometric validation, reducing the risks associated with fraud or identity theft. Foreign business operators and investors can also use eFaas to access services in the Maldives, making it a comprehensive digital identity solution for both locals and foreigners.</p>
    `,
    },
    {
      title: "How to create an eFaas account: Step-by-step guide",
      category: "eFaas Registration",
      content: `
    <h1>How to create an eFaas account: Step-by-step guide</h1>
    <ol>
      <li>
        <strong>Visit the eFaas Website:</strong>
        <p>Navigate to the official website at <a href="https://efaas.gov.mv/Account/Verify">efaas.gov.mv/Account/Verify</a> to begin the registration process.</p>
      </li>
      <li>
        <strong>Fill in Your Details:</strong>
        <p>
          <ul>
            <li>Select Your User Type: Choose whether you are registering as an individual or a business entity.</li>
            <li>Enter Your National ID: If you're a Maldivian, enter your National ID number and the corresponding ID serial number. Foreign users will need to provide a valid passport number or other government-issued ID.</li>
          </ul>
        </p>
        <p>Click Continue to move to the next step.</p>
      </li>
      <li>
        <strong>Provide Required Information:</strong>
        <p>
          On the next screen, you will be asked to fill in additional details such as your business name (if applicable), contact information, and company registration number for business entities.
          <br />Read and Accept the Terms of Service to proceed. Click Continue.
        </p>
      </li>
      <li>
        <strong>Set Up Your Security Details:</strong>
        <p>
          <ul>
            <li>Create a Secure Password: Ensure that your password is at least 8 characters long and includes one special character for added security.</li>
            <li>Set a Passphrase: This passphrase will be used for account recovery and should be something only you know.</li>
            <li>Enter Your Personal Mobile Number and Email Address: These will be used for notifications and two-factor authentication.</li>
          </ul>
        </p>
        <p>Accept the Terms & Conditions and proceed.</p>
      </li>
      <li>
        <strong>Submit and Verify Your Account:</strong>
        <p>
          After entering your details, submit the form. You will then be required to verify your account:
          <ul>
            <li>Mobile App Verification: Download the eFaas mobile app and follow the in-app instructions to complete biometric verification.</li>
            <li>Website Verification: If you prefer, you can complete verification on the eFaas website. The system uses facial recognition and other biometric data to verify your identity securely.</li>
          </ul>
        </p>
        <p>Once the verification process is complete, your eFaas account will be active and ready to use.</p>
      </li>
    </ol>
    `,
    },
    {
      title: "Troubleshooting & Support",
      category: "eFaas Registration",
      content: `
    <h2>Troubleshooting & Support</h2>
    <p>If you encounter any difficulties during the registration or verification process, the NCIT Helpdesk is available to assist you. Common issues include:</p>
    
    <ul>
      <li><strong>Account Verification Failures:</strong> Ensure that your biometric data is accurately scanned. If you're using the mobile app, check that your camera has access permissions.</li>
      <li><strong>Forgotten Passwords or Passphrases:</strong> If you forget your account details, use the recovery options provided on the eFaas login page. The passphrase and security questions will help you recover your account securely.</li>
      <li><strong>Incorrect Information:</strong> Double-check that all personal or business details are entered correctly during registration. If mistakes are made, contact the NCIT Helpdesk for corrections.</li>
    </ul>

    <h3>Contact Information</h3>
    <p><strong>Phone Support:</strong> 1551 or 3345050</p>
    <p><strong>NCIT Helpdesk:</strong> <a href="mailto:helpdesk@ncit.gov.mv">helpdesk@ncit.gov.mv</a></p>
  `,
    },
  ];

  for (const faqData of faqs) {
    await prisma.fAQ.create({
      data: faqData,
    });
  }

  const dutyFaqs = [
    {
      title: "Duty-Free Items",
      category: "Duty-Free Items",
      content: `
      <p>Non-commercial goods imported for personal use or free distribution, not intended for resale.</p>
    `,
    },
    {
      title: "Documents and Correspondence",
      category: "Duty-Free Items",
      content: `
      <p>Printed or electronic materials that are duty-exempt as long as they are non-commercial in nature.</p>
    `,
    },
    {
      title: "Personal Writings",
      category: "Duty-Free Items",
      content: `
      <p>Personal letters, postcards, or similar writings, including electronic formats.</p>
    `,
    },
    {
      title: "Promotional Materials",
      category: "Duty-Free Items",
      content: `
      <p>Leaflets, brochures, posters, or other items intended for free distribution.</p>
    `,
    },
    {
      title: "Non-Commercial Documents",
      category: "Duty-Free Items",
      content: `
      <p>Reports or documents that hold no market value.</p>
    `,
    },
    {
      title: "Commercial Samples",
      category: "Duty-Free Items",
      content: `
      <p>Businesses import small quantities of product samples for marketing or testing purposes.</p>
    `,
    },
    {
      title: "Sample Labeling",
      category: "Duty-Free Items",
      content: `
      <p>Samples must be clearly labeled as "samples".</p>
    `,
    },
    {
      title: "Value Limit for Commercial Samples",
      category: "Duty-Free Items",
      content: `
      <p>The total value of samples should not exceed USD 50.</p>
    `,
    },
    {
      title: "Non-Resealable Packaging for Samples",
      category: "Duty-Free Items",
      content: `
      <p>Samples must not be in resealable packaging to prevent resale.</p>
    `,
    },
    {
      title: "Clothing for Personal Use",
      category: "Duty-Free Items",
      content: `
      <p>Reasonable quantities of apparel for personal use.</p>
    `,
    },
    {
      title: "Jewelry & Accessories",
      category: "Duty-Free Items",
      content: `
      <p>Personal jewelry, such as wristwatches, rings, and pens.</p>
    `,
    },
    {
      title: "Electronics for Personal Use",
      category: "Duty-Free Items",
      content: `
      <p>Portable devices like laptops, mobile phones, cameras, or audio/video players for personal use.</p>
    `,
    },
    {
      title: "Toiletries for Personal Use",
      category: "Duty-Free Items",
      content: `
      <p>Personal care items like toothpaste, soap, and perfume in reasonable quantities.</p>
    `,
    },
    {
      title: "Miscellaneous Personal Items",
      category: "Duty-Free Items",
      content: `
      <p>Items such as baby carriages, strollers, wheelchairs, sporting equipment (e.g., surfboards, snorkeling gear), books, and periodicals (e.g., newspapers, magazines).</p>
    `,
    },
    {
      title: "6 months to 1 year",
      category: "Duty-Free Allowances",
      content: `
      <p>MVR 9,000 worth of personal goods can be imported duty-free.</p>
    `,
    },
    {
      title: "1 to 3 years",
      category: "Duty-Free Allowances",
      content: `
      <p>MVR 11,500 duty-free allowance for personal goods.</p>
    `,
    },
    {
      title: "More than 3 years",
      category: "Duty-Free Allowances",
      content: `
      <p>MVR 14,000 worth of personal goods exempt from duty.</p>
    `,
    },
    {
      title: "Students/Professionals",
      category: "Duty-Free Allowances",
      content: `
      <p>Professional equipment (e.g., computers, educational tools) can be brought in without incurring import duties.</p>
    `,
    },
    {
      title: "Tobacco Products",
      category: "Items not Eligible for Duty Exemptions",
      content: `
      <p>Includes cigarettes, e-cigarettes, shisha, and related accessories or devices.</p>
    `,
    },
    {
      title: "Plastic Bags & Single-Use Plastics",
      category: "Items not Eligible for Duty Exemptions",
      content: `
      <p>Subject to environmental regulations aimed at reducing plastic waste.</p>
    `,
    },
    {
      title: "Energy Drinks",
      category: "Items not Eligible for Duty Exemptions",
      content: `
      <p>All varieties of energy drinks are excluded from duty exemptions.</p>
    `,
    },
    {
      title: "Motor Vehicles & Spare Parts",
      category: "Items not Eligible for Duty Exemptions",
      content: `
      <p>Includes motorcycles, auto-cycles, four-wheeled vehicles, sea vessels, and related spare parts.</p>
    `,
    },
  ];

  for (const faq of dutyFaqs) {
    await prisma.fAQ.create({
      data: faq,
    });
  }

  await prisma.articleCard.createMany({
    data: [
      {
        title: "Self Registration Guide",
        description:
          "This guide provides step-by-step instructions on how to register a new user",
        imageSrc:
          "https://traders-api.tradeline.gov.mv/uploads/thomas_lefebvre_gp8_B_Lya_Ta_A0_unsplash_a3422d9b45.jpg",
        tags: [
          Tag.Business,
          Tag.Import,
          Tag.Export,
          Tag.Individual,
          Tag.Transit,
        ],
      },
      {
        title: "Vessel Registration Manual",
        description:
          "This guide offers comprehensive instructions on how to register a vessel through the online portal",
        imageSrc:
          "https://traders-api.tradeline.gov.mv/uploads/mohamed_masaau_nf_F5_G6c_Fw_Y_unsplash_c72708e7a9.jpg",
        tags: [Tag.Vessels],
      },
    ],
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
