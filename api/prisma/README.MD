notes from https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/generating-prisma-client

To generate and instantiate Prisma Client:

# Ensure that you have Prisma CLI installed on your machine.

    npm install prisma

# Add the following generator definition to your Prisma schema:
  generator client {
        provider = "prisma-client-js"
      }

# Install the @prisma/client npm package:

    npm install @prisma/client

# Generate Prisma Client with the following command:

    npx prisma generate

# You can now instantiate Prisma Client in your code:

    TypeScript
    JavaScript

    import { PrismaClient } from '@prisma/client'
    const prisma = new PrismaClient()

  *  use `prisma` in your application to read and write data in your DB
  *  
    Important: You need to re-run the prisma generate command after every change that's made to your Prisma schema to update the generated Prisma Client code.

NOW CREATE PRISMA SCHEMA

.....

NOW MIGRATE SCHEMA to DB

Initial migration:

* npx prisma migrate dev --name init

Subsequent migrations:

* npx prisma migrate dev --name add_relevant_name



HAPPY MIGRATIONS! TAVO 8.8.24

Now that you have correct structure
go to your fablab db in psql
then run SQL QUERY provided by LH to populate dummy events:
INSERT INTO "Event" ("name", "date", "description")
VALUES
  ('Tech Conference 2024', '2024-03-15 09:00:00', 'A comprehensive gathering for tech enthusiasts to explore the latest in technology, innovation, and startups. Features keynote speeches, workshops, and panel discussions.'), (etc);

To create embeddings
Go to ./api/controllers/
:$ node embeddings_generator (make sure u look at my code changes) Actually, won't need to as will push tonight