## Project Setup Instructions

Follow these steps to set up the project locally:

### 1. Install Docker and Node

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop) and make sure it's running.
- Install [Node.js](https://nodejs.org/) if not already installed.

### 2. Set Up the Project

- Rename the `.env.example` file to `.env` in your project directory.

### 3. Install Dependencies

Run the following command:

```bash
npm install
```

### 4. Run Docker

In the project root, run the following command to start Docker:

```bash
npm run docker
```

### 5. Set Up Prisma Database

- Push the database schema to your database:

```bash
npx prisma db push
```

- Seed the database with initial data:

```bash
npx prisma db seed
```

### 6. Generate Prisma Client

Generate the Prisma client:

```bash
npx prisma generate
```

### 7. Start the Development Server

Start the Remix development server:

```bash
npm run dev
```

or build and run

```bash
npm run build
```
```bash
npm start
```

### 8. Login and Sign Up

- The user `rachel@remix.run` with the password `racheliscool` will be created during the database seeding. But you can sign up with a valid email.

---

### Notes:
- **Slow Builds**: The Remix Classic compiler is being used, which can cause slower builds (also an older version of the stack).
- **Project Structure**: This was done quickly, so everything needs refactoring and backend for all other routes.
- **Working Routes**: Home, Individual Registration and Duty Exemptions, Support, login, Join, Logout.
- **Incomplete**: Didn't have enough time to fix the Header.
---