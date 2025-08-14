---
title: Jekyll Setup
date: 2025-08-12 12:00:00 -500
categories: [projects]
tags: [software,web]  #tag names should always be lowercase
comments: false
---

My first hands-on with Jekyll

## Overview
[Jekyll](https://jekyllrb.com/) is a static site generator. It takes text written in markdown and uses layouts to create a static website. This allows me to use GitHub Pages for free hosting of my website. This deployment was my first experience with Jekyll.

## Purpose
I set out to accomplish several goals with this project:
- [x] Set up a portfolio website
- [x] Leverage GitHub Pages for free hosting
- [x] Become more familiar with GitHub CI/CD actions
- [ ] get exposure to Ruby

## Skills & Lessons Learned
I learned a few new things, but as you may have noticed, I did not learn any Ruby.
* GitHub Actions aren't very quick (compared to what I am used to with Azure DevOps Pipelines). 
  * This may be the fact that it's free and queing may impact the turnaround time as there could be numerous other projects vying for resources.
* Dev containers in VS Code are cool!
  * I open my repo project in a dev container within VS Code which gives me a proper Linux environment by default
    * F1 -> Dev Containers: Clone repository in container volume -> seanclosson.github.io
* The GitHub version Jekyll running their Pages is missing some common "gems"
  * This caused some issues early on, but I was able to resolve after numerous "wipe and create new" cycles so I could refine my process

## Comments and notes
A few things I observed and some notes for the future:
* I should probably branch my code and follow proper merging for publication.
* I'd like to set up a notification webhook.  Existing email alerts are slow.
* The site looks broken during the build, showing just ```layout: home # Index page ```, so don't panic!
  * As I use the site more, I may want to schedule publishing for after-hours.
* Jekyll seems fragile or at least very sensitive to incorrect config and code.
  * Instead of a feature not working, the entire site can be broken
* The Chripy template is *okay*, but I'll look at other templates to use or develop my own in the future.
