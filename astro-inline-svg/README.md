# Astro Inline SVG

Inline SVG into Astro templates.

## Install

Use your favorite Node package manager to install `@cxa/astro-inline-svg`, e.g., `pnpm`.

``` sh
pnpm i @cxa/astro-inline-svg
```

## Usage

Import the raw SVG content and assign it to the `raw` property of the `Svg` component. Then, set the SVG attributes as required.

``` astro
---
import Svg from "@cxa/astro-inline-svg";
import sunRiseSVG from "lucide-static/icons/sunrise.svg?raw";
---

<Svg raw={sunRiseSVG} class="sun-rise" stroke-width={1.5} />
```

### Use symbols

Define a symbol with `define:symbol`, and you can use `use:symbol` to reference it later:

``` astro
<Svg raw={birdSVG} define:symbol="bird-1" />
{
  Array.from({ length: 10 }).map(() => (
    <Svg raw={birdSVG} use:symbol="bird-1" />
  ))
}    
```

You can also pass objects to `define:symbol` and `use:symbol` to gain more control as needed:

``` astro
<Svg
  raw={birdSVG}
  define:symbol={{
    id: "bird-2",
    symbolProps: {
      "stroke-width": "3px",
    },
  }}
/>
{["#FF0000", "#00FF00", "#0000FF", "#FFD700", "#FF00FF", "#00FFFF", 
  "#FF8000", "#8000FF", "#00FF80", "#FF0080"
].map((color) => (
  <Svg
    raw={birdSVG}
    use:symbol={{
      id: "bird-2",
      useProps: { stroke: color },
    }} />
))
```
