---
sidebar_position: 7
description: "Suggests an optimum Fantasy F1 Team from this seasons results"
author: Mark Murphy
authorURL: https://github.com/markSmurphy
---

# fantasy-f1-analyzer

![Version](https://img.shields.io/npm/v/fantasy-f1-analyzer.svg?label=version&style=plastic)
![Downloads/month](https://img.shields.io/npm/dm/fantasy-f1-analyzer.svg?style=plastic)
![Downloads/total](https://img.shields.io/npm/dt/fantasy-f1-analyzer?label=downloads%20%28total%29&style=plastic)
![Codacy Code Quality](https://img.shields.io/codacy/grade/e77d8079c8424bb6abcc0ef1309a8a5c?style=plastic)
![Licence](https://img.shields.io/npm/l/fantasy-f1-analyzer.svg?style=plastic)

[fantasy-f1-analyzer](https://github.com/MarkSMurphy/fantasy-f1-analyzer#readme) is a utility which retrieves the latest Fantasy F1 results and analyses all possible constructor and driver combinations before suggesting an optimum Fantasy F1 Team.

## Installation

```bash
npm install fantasy-f1-analyzer --location=global
```

## Usage

```bash
ff1 [options]
```

![fantasy-f1-analyzer screenshot recording](./img/screenshot-ff1.gif)

## Options

```text
   --export <filename>           Exports the results to the specified filename
   --year <nnnn>                 Override the default season. Default: 2022
   --budget <nnn>                Override the default budget cap. Default: 100
   --worst                       Displays the team with the worst points tally instead of the best
   --progressinterval <n>        Update analysis progress every nth team. Default: 5
   --verbose                     Enables verbose output.
   --debug                       Enables debugging output.
   --no-color                    Switches off colour output.
   --version                     Display version number.
   --help                        Display help screen.
```

---
