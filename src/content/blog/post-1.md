---
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
tags: ["astro", "blogging", "learning-in-public"]
---
Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

## Diving Deeper into Astro

### Components and Layouts
Astro provides a powerful component system that allows for reusable UI elements. Here's what I've learned:

1. **Creating Components**
   - Components are created in `.astro` files
   - They can accept props for dynamic content
   - Example:
     ```astro
     ---
     const {title} = Astro.props;
     ---
     <h1>{title}</h1>
     ```

2. **Using Layouts**
   - Layouts help maintain consistency across pages
   - They can be applied to both `.astro` and `.md` files

### Styling in Astro
Astro offers multiple ways to style your website:

- Inline styles
- Scoped styles
- Global styles
- CSS Modules

#### Example of Scoped Styles
```astro
<style>
  h1 {
    color: purple;
    font-size: 4rem;
  }
</style>

<h1>Styled Heading</h1>
