# Documentation for Discord Clone Project

## Overview

The Discord Clone project is a web application designed to replicate some features of the popular communication platform, Discord. It is built using the Next.js framework and incorporates various libraries and tools to enhance the development experience.

### Project Details

- **Name:** discord-clone
- **Version:** 0.1.0
- **Private:** true (indicating that the project is not intended to be published publicly)

## Scripts

The project includes several npm scripts that facilitate development, building, and linting. These scripts are executed using the Yarn package manager.

- **dev:** Run the development server using Next.js.

  ```
  yarn dev
  ```

- **build:** Build the project for production deployment.

  ```
  yarn build
  ```

- **start:** Start the production server after the build.

  ```
  yarn start
  ```

- **lint:** Lint the project using the Next.js linting configuration.
  ```
  yarn lint
  ```

## Dependencies

The project relies on various external packages to provide essential functionalities. Here are the key dependencies:

- **@clerk/nextjs:** Version 4.27.1 - A package for integrating [Clerk](https://docs.clerk.dev/) authentication with Next.js.
- **@prisma/client:** Version 5.5.2 - Prisma client for database access.
- **@radix-ui/react-dropdown-menu:** Version 2.0.6 - A library for creating dropdown menus.
- **@radix-ui/react-slot:** Version 1.0.2 - A utility for handling slots in React components.
- **class-variance-authority:** Version 0.7.0 - A package for handling class variance in JavaScript.
- **clsx:** Version 2.0.0 - A utility for conditionally joining class names together.
- **lucide-react:** Version 0.292.0 - A library of hand-crafted SVG icons as React components.
- **next:** Version 14.0.1 - The core framework for building React applications with server-side rendering.
- **next-themes:** Version 0.2.1 - A package for handling themes in Next.js applications.
- **react:** Version 18 - The core React library.
- **react-dom:** Version 18 - The entry point for working with the DOM in React applications.
- **tailwind-merge:** Version 2.0.0 - A utility for merging Tailwind CSS classes.
- **tailwindcss-animate:** Version 1.0.7 - An extension for adding animation utilities to Tailwind CSS.

## Development Dependencies

These dependencies are used during the development process and are not included in the production build.

- **@types/node:** Version 20 - TypeScript type definitions for Node.js.
- **@types/react:** Version 18 - TypeScript type definitions for React.
- **@types/react-dom:** Version 18 - TypeScript type definitions for React DOM.
- **autoprefixer:** Version 10.0.1 - A tool to parse CSS and add vendor prefixes.
- **eslint:** Version 8 - A pluggable and configurable linter tool for identifying and fixing problems in JavaScript code.
- **eslint-config-next:** Version 14.0.1 - ESLint configuration for Next.js projects.
- **postcss:** Version 8 - A tool for transforming styles with JS plugins.
- **prisma:** Version 5.5.2 - Prisma CLI for database migrations and management.
- **tailwindcss:** Version 3.3.0 - A utility-first CSS framework.
- **typescript:** Version 5 - A superset of JavaScript that adds static types.

## Usage

1. Clone the repository.
2. Install dependencies using `yarn install`.
3. Run the development server using `yarn dev`.
4. Open the application in your browser.

## Contributing

If you wish to contribute to the project, please follow the standard GitHub Fork and Pull Request workflow. Additionally, adhere to the coding standards and conventions defined in the project.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms of the license.

## Logical schema powered by Supabase

![Logical schema image](http://i.imgur.com/rRhXKji.png)
