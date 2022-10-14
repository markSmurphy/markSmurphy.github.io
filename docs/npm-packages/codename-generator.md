---
sidebar_position: 5
description: "Generate a screen full of random code names"
author: Mark Murphy
authorURL: https://github.com/markSmurphy
---

# codename-generator

![Version](https://img.shields.io/npm/v/codename-generator.svg?label=version&style=plastic)
![Downloads/month](https://img.shields.io/npm/dm/codename-generator.svg?style=plastic)
![Downloads/total](https://img.shields.io/npm/dt/codename-generator?label=downloads%20%28total%29&style=plastic)
![Codacy Code Quality](https://img.shields.io/codacy/grade/5f8ab4e09fde4454968b383a2b4f2fbe?style=plastic)
![Licence](https://img.shields.io/npm/l/codename-generator.svg?style=plastic)

Have you ever needed to give something a code name? Perhaps for a project you're working on, or a new screen-name, but your imagination has let you down? Use [codename-generator](https://github.com/MarkSMurphy/codename-generator#readme) to suggest some random code names.

It has a small dictionary of a few thousand inoffensive adjectives and nouns which are picked at random to generate a suggested code name. By default a screen-full of suggestions are made, so the larger your screen is, the more suggestions you'll have.

## Installation

```bash
npm install -g codename-generator
```

## Usage

```bash
codename-generator [options]
```

![codename-generator screenshot recording](./img/screenshot-codename-generator.gif)

## Options

```text
   <number>                         Generate <number> code names
   --list-adjectives                Lists all adjectives in the dictionary
   --list-nouns                     Lists all nouns in the dictionary
   --nsfw                           "Not Safe for Work" mode outputs profanities
   --no-color                       Switches off colour output
   --version                        Display version number
   --help                           Display this help
```

---
