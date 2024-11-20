# Front-end Style guide

The introduction section with drop down navigation should be responsive across all devices

- Mobile - 375px
- Tablet - 768px
- Desktop - 1440px

## Colors

```css
--almost-white: hsl(0, 0%, 98%);
--medium-gray: hsl(0, 0%, 41%);
--almost-black: hsl(0, 0%, 8%);
```

## Gap

```css
--size-0: 0.125rem;
--size-16: 0.375rem; 
--size-17: 0.625rem;
--size-18: 0.75rem;
--size-19: 0.875rem;
--size-20: 2.25rem;
--size-21: 2.75rem;
--size-22: 3.5rem; 
--size-23: 6rem;
--size-24: 7rem; 
--size-25: 8rem;
--size-26: 9rem;
--size-27: 11rem;
--size-28: 12rem;
--size-29: 13rem;
--size-30: 14rem;
--size-31: 16rem;
--size-32: 18rem;
--size-33: 24rem;
--size-px-0: 0px;
--size-px-16: 1px;

```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-7: 4px;
--radius-8: 6px;
--radius-9: 8px;
--radius-10: 10px;
--radius-11: 12px; 
--radius-12: 14.9px;
--radius-13: 20px;
--radius-14: 24px;
--radius-15: 26px;
--radius-16: 28px;
--radius-17: 30px;
--radius-18: 34px;
--radius-19: 36px;
--radius-20: 38px;
--radius-21: 40px;
```

## Favicon Links

```html
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/site.webmanifest">
```

## Typography

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

```css
--ff-epilogue-sans-serif: var(--ff-epilogue), sans-serif;
--ff-epilogue: 'Epilogue';
--font-style: normal; 
--font-lineheight-000: 1;
--font-lineheight-6: 1.625;
--font-letterspacing-00: -.025em;
--font-letterspacing-8: 0em; 
--font-letterspacing-9: 0.1em;
--font-letterspacing-10: -.028em;
--font-letterspacing-11: -.062em;

/* Font Sizes */
--font-size-9: 0.875rem;
--font-size-px-000: 18px;
--font-size-fluid-4: clamp(1rem, 1.044rem + -0.188vw, 0.875rem);
--font-size-fluid-5: clamp(2.25rem, 1.282rem + 4.131vw, 5rem);
--font-size-fluid-6: clamp(1rem, 0.956rem + 0.188vw, 1.125rem); 

```

## Resets

```css
* {
	margin: 0; 
	padding: 0; 
}

*, *::before, *::after {
	box-sizing: border-box;
}

html {
	overflow-x: hidden;
	/* The style below prevents font-style inflation */
	text-size-adjust: none;
	-moz-text-size-adjust: none;
	-webkit-text-size-adjust: none;
 }
 
/* Set core root defaults */
html:focus-within { 
	scroll-behavior: smooth; 
}

 p, h1, h2, h3, h4, h5, h6 {
	 overflow: break-word;
 }
 
 /* Balance text wrappings on the heading */
 h1, h2, h3, h4, h5, h6 {
	 text-wrap: balance; 
 }
 
 h1, h2, h3, h4, button, input, label {
	 line-height: 1.1;
 }
 
 img, picture {
  max-width: 100%;
  height: auto;
  display: var(--block);
}

body {
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	/* Please set the font-size on the body to be 18px */
	font-size: var(--font-size-px-000);
}

/* We make sure that the text areas without rows are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Inherits fonts for input and buttons */
input, button, textarea, select { 
	font: inherit; 
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Anything that has been anchored to should have an extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* Remove the mark of the list items */
li {
  list-style-type: none;
}
```