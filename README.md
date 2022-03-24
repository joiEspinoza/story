# React + Storybook + Typescript + SASS + CSS Modules boilerplate
This is a boilerplate project to use Storybook in isolation from the project.
Includes:
- React
- Storybook
- Typescript
- Webpack 5
- CSS Modules (Using SASS with SCSS files)
- Webpack 5

# Scripts
run storybook (as DEV)
```bash
npm run storybook
```

Build the storybook project (For deploy)
```bash
npm run build-storybook
```

Build css file and import it in all components that will be exported (not use for ci/cd pipeline)
```bash
npm run build-sass
```

# Considerations for creating components
1. Create each component in its respective folder (e.g **./src/components/SomeComponenent**).
2. In each component folder there must be 3 files: **somecomponent.module.scss**, **SomeComponent.stories.tsx** and **SomeComponent.tsx**.
3. Apply component styles using TailwindCSS classes if applicable.
4. Import each component SCSS module to **./src/scss/base.scss**.
5. Run ```npm run build-sass```
6. In the component file (e.g SomeComponent.tsx) import CSS generated: **./src/styles/base.css**. With the above it is possible to use components from other projects (e.g *ppm-frontend*)
7. Test components in storybook, run ```npm run start```