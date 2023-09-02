## Key outtakes

1. Remember to install prettier and prettier plugin fo tailwind class sorting:

```
npm install -D prettier prettier-plugin-tailwindcss

```

2. Use next/fonts to self-host a google font in layout.tsx;

3. Svgr is having a lot of unexpected behaviour unless used in CLI version. Simply copy and past the svgs changed into components.

4. tailwind.config.ts allows for customizing tailwind base colors and adding values. Good thing while setting up a project is changing the "container" class to suit your needs.

5. Some svgs use "stroke" attribute instead of "fill"

6. To derive type of some element property you can use ComponentProps type from React:

```
ComponentProps<"picture">["className"]
```
