export const posts = [
  {
    id: '1',
    title: 'Getting started with Nuxt 4',
    date: '2025-09-01',
    tags: ['nuxt', 'setup'],
    excerpt:
      "Spin up a Nuxt 4 app, configure Tailwind, and understand the file-based routing system.",
    content: [
      "Nuxt 4 streamlines developer experience with Vite, Nitro, and an improved module ecosystem. To get started, create a new project and run the development server. You'll immediately benefit from HMR and smart defaults.",
      "The file-based routing system maps your ‘pages’ directory to routes automatically. Nested directories become nested routes, and dynamic parameters are declared with square brackets.",
      "Add modules, configure CSS, and start composing components. As you iterate, Nuxt will rebuild only what's necessary, keeping feedback loops tight.",
    ],
  },
  {
    id: '2',
    title: 'Nested routing in Nuxt',
    date: '2025-09-02',
    tags: ['nuxt', 'routing'],
    excerpt:
      "Model complex UIs with nested layouts and dynamic routes using Nuxt's directory conventions.",
    content: [
      'Nested routing lets you express UI hierarchy via folders. Define a layout, then place child pages inside directories to inherit structure and styling automatically.',
      'Dynamic routes use the [id].vue convention. Access parameters with useRoute() and render content based on the current route. Combine this with server routes or composables for data fetching.',
      'For large apps, group features into directories and colocate components, composables, and tests for maintainability.',
    ],
  },
  {
    id: '3',
    title: 'Tailwind with Nuxt',
    date: '2025-09-03',
    tags: ['tailwind', 'styling'],
    excerpt:
      'Install Tailwind CSS, enable the module, and build consistent, responsive UIs with utility classes.',
    content: [
      'Adding Tailwind to Nuxt is straightforward with the official module. Once enabled, you can use utility classes in any component or page.',
      'Adopt a design system approach: define color tokens, spacing scales, and typography in the Tailwind config. Reuse composition patterns via small components.',
      'For production, enable purge via content paths and consider extracting critical CSS for faster rendering.',
    ],
  },
]
