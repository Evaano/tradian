import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

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

  await prisma.fAQ.create({
    data: {
      title: "Customs Portal Registration User Guide",
      category: "Customs Portal Registration",
      content: `
      <h1>Step 1: Accessing the Customs Portal</h1>
      <br />
      <ol>
        <li>
          <strong>Visit the Customs Website:</strong>
          <p>Navigate to the Maldives Customs Service website at <a href="http://www.customs.gov.mv">www.customs.gov.mv</a>.</p>
        </li>
        <li>
          <strong>Log In to the Portal:</strong>
          <p>Click on “Sign in to Customs Portal.” If you already have an account, log in using your existing credentials. If not, you may log in via Efaas, the Maldives National Digital ID platform.</p>
        </li>
      </ol>
      <br />

      <h2>Step 2: Initiating a New Registration Request</h2>
      <ol>
        <li>
          <strong>Access Registration:</strong>
          <p>Once logged in, locate the Dashboard on the left-hand side of the page and click on the Registration tab.</p>
        </li>
        <li>
          <strong>Submit a New Request:</strong>
          <p>Select New Request to begin the process. Fill in the required details. Fields marked with an asterisk (*) are mandatory.</p>
        </li>
        <li>
          <strong>Request Type:</strong>
          <p>Under the Request Type* dropdown, select Importer/Exporter.</p>
        </li>
        <li>
          <strong>Trade Registry Number:</strong>
          <p>Enter your Trade Registry Number* according to the format on the Business Registration or Profile Sheet issued by the Ministry of Economic Development and Trade.</p>
          <ul>
            <li>Companies: C-0000/YYYY or C0000YYYY</li>
            <li>Sole Proprietorships: SP-0000/YYYY or SP0000YYYY</li>
          </ul>
        </li>
        <li><strong>Auto-Fill of Relevant Data:</strong><p>After entering the Trade Registry Number, relevant business details will auto-populate.</p></li>
        <li><strong>Business Sector & Activity:</strong><p>Select your Business Sector from the dropdown menu and select your Business Activity if applicable.</p></li>
        <li><strong>Additional Information:</strong><p>Complete the remaining fields, including Contact Number, Contact Address, Email Address, and Confirm Email Address.</p></li>
        <li><strong>Proceed to the Next Step:</strong><p>Once all mandatory fields are completed, click Next to continue.</p></li>
      </ol>      
      <br />

      <h2>Step 3: Uploading Supporting Documents</h2>
      <ol>
        <li><strong>Prepare Your Documents:</strong><p>Upload the required supporting documents in PDF format. Ensure that no single document exceeds 2MB in size.</p></li>
        <li><strong>Required Documents:</strong><ul>
          <li>Business Registration/Profile Sheet* (from Ministry of Economic Development)</li>
          <li>National ID Copy*</li>
          <li>Project Awarding Letter (if registering for a project)</li>
          <li>Resort Operating License (if registering a resort, issued by the Ministry of Tourism)</li></ul></li>
        <li><strong>Finalize Upload:</strong><p>After uploading all required documents, click Finish to complete this step.</p></li>
      </ol>      
      <br />

      <h2>Step 4: Submission and Status Checking</h2>
      <ol>
        <li><strong>Submit Your Application:</strong><p>After all required documents are uploaded, click Submit to send your registration request for review.</p></li>
        <li><strong>Monitor Your Application Status:</strong><p>Check the status of your submission under the My Request tab located in the Registration section.</p></li>
        <li><strong>Approval or Rejection:</strong><p>If your request is approved, you can retrieve your Importer/Exporter Registration Certificate. If rejected, the reason for rejection will be visible in the My Request tab.</p></li>
      </ol>      
      <br />

      <h2>Step 5: Accessing the Customs Portal and ASYCUDA</h2>
      <ol>
        <li><strong>Receive Your C Number:</strong><p>Once your application is approved, you will receive your C Number (Customs Registration Number). A password will be sent to the email address you registered with.</p></li>
        <li><strong>Logging in to ASYCUDA:</strong><p>Log in to the Customs Portal using your credentials. Access ASYCUDA system login information on the left side of the portal’s home page.</p></li>
        <li><strong>Password Reset:</strong><p>If you need to reset your ASYCUDA password, click the Change ASYCUDA Password reset button.</p></li>
      </ol>      
      <br />
    `,
    },
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
