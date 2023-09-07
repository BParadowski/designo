# Key outtakes

## Project Setup

1. Remember to install prettier and prettier plugin fo tailwind class sorting:

```
npm install -D prettier prettier-plugin-tailwindcss
```

2. Use next/fonts to self-host a google font in layout.tsx.

3. Svgr is having a lot of unexpected behaviour unless used in CLI version. Simply copy and past the svgs changed into components.

4. tailwind.config.ts allows for customizing tailwind base colors and adding values. Good thing while setting up a project is changing the "container" class to suit your needs.

## Css

1. Some svgs use "stroke" attribute instead of "fill".

2. To add custom classes that work with tailwind modifiers (like :hover etc.) you need to use **@layer base/components/utilities** directive in the global css file.

3. Percentage values in `background-position-x/y` property are based on relation of background size to the element size. For instance if the background image is _larger_ than the element, positive values move the image to the _left_. If the background image is _smaller_ however, positive values move it _right_... Due to this behavior they are a bad choice in reponsive designes. **Best stick to flat numbers for individual container sizes**. In this case they simply mean offset from left or top.

4. Using `isolation: isolate` on components might be a good idea to avoid z-index problems.
5. Good design-system idea is to decide wheather components
   use the "container" class or not and stick to that decision if possible.
6. `background-position` has a nice 3/4 value syntax where first you define base position and then offset from it, for instance:\
   `background-position: bottom 2rem left -3rem`\
   will position the bg image 2rems up from the bottom border and 3rems left from the left border.

7. `::before` and `::after` pseudolelemnts are first or last child of an element. **They won't work on elements without children!**

8. Adding `overflow-hidden` to `<main>` of every page solves the problem of overflow with strange decorations positioned `absolute` which "leave" the page.

9. The difference between `overflow-hidden` and `overflow-clip` is that the latter prohibits all scrolling including programmatic scrolling.

### **Unwieldy images**

To "cut off" a part of an image **and influence the box model** you can use negative margin.

Css margin property takes a percentage argument which referes to the percentage of the **width** of containing block.

Thus to cut off the bottom third of an image with an aspect ration of 526/768 (phone picture in hero component of this project) we can calculate as follows:

526 \* margin = 768 / 3\
526 \* margin = 256\
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

2. You can use an indexed access type (`[]`) to look up a specific property on another type:

```
const fruit = {
  name: "Apple",
  price: 4,
  available: true
}

type Price = typeof fruit["price"] // type Price = number
```

The indexing type is itself a type, so we can use unions, keyof, or other types entirely (from this project @app/designs/[slug]/pageData.ts):

```
const slugs = ["web-design", "app-design", "graphic-design"] as const;

type Slug = (typeof slugs)[number];
```

3. Type assertion - `as` let's you give TypeScript information about the type that it couldn't have otherwise. In the example above `as const` changes the type of _slugs_ from `string[]` to an array of literals with readonly property: `slugs: readonly ["web-design", "app-design", "graphic-design"]`.

   TypeScript only allows assertions that convert to _more specific_ or _less specific_ version of the type. For instance: you can't convert a string into a number.

4. JS docs look like a lot of fun.

5. The main difference betweeen types (_type aliases_) and interfaces in TypeScript is that types can't be reopened to change them. In contrast to that, interfaces can be always extended.

6. When extending an interface (or intersecting types) properties get overwritten:

```
interface OptionalResponsiveUrls {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface ResponsiveUrls extends OptionalResponsiveUrls {
  base: string;
}

// "base" is not optional in ResponsiveUrls
```

7. To type keys on an object you can use **mapped types**. They are useful when you want to limit keys to contents of a union (usually derived with _keyof_ operator)

```
// type Slug = "web-design" | "app-design" | "graphic-design"

type AllLinksData = {
  [K in Slug]: LinkData;
};
```

8. Making a polymorhipc button component is not exactly straight-forward in typescript. [This article](https://dev.to/frehner/polymorphic-button-component-in-typescript-c28) did help though.

## VsCode

1. `ctrl + d` lets you select the next occurance of a selected string.
