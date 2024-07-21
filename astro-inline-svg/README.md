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
