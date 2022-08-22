---
sidebar_position: 2
description: "Analyse caching behaviour of URLs"
author: Mark Murphy
authorURL: https://github.com/markSmurphy
---

# cdn-cache-check

![Version](https://img.shields.io/npm/v/cdn-cache-check.svg?label=version&style=plastic)
![Downloads/month](https://img.shields.io/npm/dm/cdn-cache-check.svg?style=plastic)
![Downloads/total](https://img.shields.io/npm/dt/cdn-cache-check?label=downloads%20%28total%29&style=plastic)
![Codacy Code Quality](https://img.shields.io/codacy/grade/b3f25c58277241c887834ccdbab973bb?style=plastic)
![Licence](https://img.shields.io/npm/l/cdn-cache-check.svg?style=plastic)

[cdn-cache-check](https://github.com/MarkSMurphy/cdn-cache-check#readme) is a command line utility which helps to analyse URLs to determine if they're served via a CDN and the caching behaviours of both the CDN and the user-agent.

## Installation

```bash
npm install cdn-cache-check --location=global
```

## Usage

```bash
ccc [<url> | <filename> [<url> | <filename>] […] ] [options]
```

![cdn-cache-check screenshot recording](./img/screenshot-cdn-cache-check.gif)

## Options

```text
   <url>                         A URL to query
   <filename>                    Specify a file containing a list of URLs to query
   --method <head|get|options>   Specify the HTTP method.  Default: GET
   --headers <collection>        Select which collection of headers to output.
   --list-header-collections     List all Header Collections and the response headers they contain
   --list-response-headers       List all unique response headers. Useful when creating a new header collection.
   --export <true|false>         Exports output to a .csv file.  Default: true
   --open                        Opens the exported .csv file automatically.
   --follow <integer>            The number of HTTP redirects to follow. Default: 5
   --debug                       Enables verbose debugging output
   --no-color                    Switches off colour output
   --version                     Display version number
   --help                        Display this help
```

---
