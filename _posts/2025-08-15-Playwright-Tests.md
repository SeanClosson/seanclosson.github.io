---
title: Playwright Tests
date: 2025-08-15 12:00:00 -500
categories: [development]
tags: [testing,jekyll,playwright]  #tag names should always be lowercase
comments: false
---
On a prior client project, I joined the project after it was already underway. As a project manager, one of the first things I do is make sure I understand the scope, the work tasks, and their estimates so I can manage to them.  This project did not include QA time or resources which was a huge oversight IMO. Due to the iterative deployment strategy, I knew that regression testing would be a bottleneck for us if testing was not automated. So I took up the challenge of writing automated tests myself!

After reviewing the typical free solutions (Selenium, Cypress, etc.) I settled on Playwright for a few reasons:
* Created and sponsored by a large organization
  * Created by Microsoft in 2020
* Had solid documentation and active community
* Supported TypeScript
  * My project was using TyepScript and I felt more comfortable keeping the language consistant between logic and testing

While I am not a QA tester, I feel it's useful for me to be familiar with the various technologies used so that I can assist in making decisions that are in the best interest of the client and keep the project on schedule. So that I don't get too rusty, I will use Playwright tests for this site as well!

To Do:
- [x] Install NodeJS and Playwright into dev container
- [x] Create page load tests for **home** and **about**
- [ ] Create tests for all intra-site links
- [ ] Create tests for socials
- [ ] Add to GitHub Actions for automated testing upon commit

