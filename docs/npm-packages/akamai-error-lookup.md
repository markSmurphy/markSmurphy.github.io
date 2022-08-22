---
sidebar_position: 4
description: "Retrieves diagnostic details of Akamai error reference numbers"
author: Mark Murphy
authorURL: https://github.com/markSmurphy
---

# akamai-error-lookup

![Version](https://img.shields.io/npm/v/akamai-error-lookup.svg?label=version&style=plastic)
![Downloads/month](https://img.shields.io/npm/dm/akamai-error-lookup.svg?style=plastic)
![Downloads/total](https://img.shields.io/npm/dt/akamai-error-lookup?label=downloads%20%28total%29&style=plastic)
![Codacy Code Quality](https://img.shields.io/codacy/grade/ad68526459464546ba23686ae1229688?style=plastic)
![Licence](https://img.shields.io/npm/l/akamai-error-lookup.svg?style=plastic)

[akamai-error-lookup](https://github.com/MarkSMurphy/akamai-error-lookup#readme) is a command line utility which looks up an Akamai error reference (the 'hash reference' number) and translates it into details about what caused that error.

## Installation

```bash
npm install akamai-error-lookup --location=global
```

## Usage

```bash
hashref errorReference [options]
```

![akamai-error-lookup screenshot recording](./img/screenshot-hashref.gif)

## Options

```text
   errorReference                   The Akamai Error Reference number to lookup
   --decode <true|false>            Enable or disable decoding of URLs and user-agent [true]
   --no-color                       Switches off colour output
   --version                        Display version number
   --help                           Display this help
```

---
