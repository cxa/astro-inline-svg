# Astro Inline SVG

Inline SVG into Astro templates.

## Install

``` sh
pnpm i @cxa/astro-inline-svg
```

## Usage

``` astro
---
import Svg from "@cxa/astro-inline-svg";
import sunRiseSVG from "lucide-static/icons/sunrise.svg?raw";
---

<Svg raw={sunRiseSVG} class="sun-rise" stroke-width={1.5} />
```
