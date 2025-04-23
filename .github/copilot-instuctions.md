My Kung-Fu

A simple blog site to render mdx files and show my resume.

Technologies used...

 - Nextjs
 - Shadcn/react
 - Tailwindcss
 - Postgres
 - Prisma
 - Motion

## Project Structure

The project is organized as follows:

- **components/**: Contains reusable React components such as `NavBar`, `Footer`, `Journey`, and UI elements.
- **lib/**: Includes utility functions and Prisma configuration (`prisma.ts`).
- **prisma/**: Manages database schema and migrations using Prisma.
  - `schema.prisma`: Defines the database schema.
  - `migrations/`: Stores migration files.
- **public/**: Contains static assets like images, icons, and PDFs.
- **scripts/**: Includes scripts for tasks like generating the search index.
- **src/**: Main source folder for the application.
  - **app/**: Contains Next.js app-specific files like `layout.tsx`, `page.tsx`, and subdirectories for routes such as `blogs/` and `stacks/`.
  - **components/**: Houses React components used across the app.
  - **markdowns/**: Stores MDX files for blog content.
  - **types/**: Contains TypeScript type definitions.
- **README.md**: Provides an overview and instructions for the project.
- **package.json**: Lists dependencies and scripts for the project.
- **tsconfig.json**: TypeScript configuration file.
- **next.config.ts**: Next.js configuration file.

