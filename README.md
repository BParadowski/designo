# Key outtakes

## Project Setup

1. Remember to install prettier and prettier plugin fo tailwind class sorting:

```
npm install -D prettier prettier-plugin-tailwindcss

```

2. Use next/fonts to self-host a google font in layout.tsx;

3. Svgr is having a lot of unexpected behaviour unless used in CLI version. Simply copy and past the svgs changed into components.

4. tailwind.config.ts allows for customizing tailwind base colors and adding values. Good thing while setting up a project is changing the "container" class to suit your needs.

## Css

1. Some svgs use "stroke" attribute instead of "fill"
2. To add custom classes that work with tailwind modifiers (like :hover etc.) you need to use **@layer base/components/utilities** directive in the global css file.

### **Unwieldy images**

To "cut off" a part of an image **and influence the box model** you can use negative margin.

Css margin property takes a percentage argument which referes to the percentage of the **width** of containing block.

Thus to cut off the bottom third of an image with an aspect ration of 526/768 (phone picture in hero component of this project) we can calculate as follows:

526 _ margin = 768 / 3\
526 _ margin = 256\
margin = 256/526\
margin = 0.4867\
margin = 48.67%

We throw
`margin-bottom: 48.67%`
on the image, and
`max-width: fit-content`
on the container. (and hide overflow wherever necessary)

If a part of the image clipped in this way overlaps some other element it is necessary to set z-index properties.

## TypeScript/JavaScript

1. To derive type of some element property you can use ComponentProps type from React, for instance:

```
ComponentProps<"picture">["className"]
```

2. JS docs look like a lot of fun.
