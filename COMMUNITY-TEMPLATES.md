# Community Templates

If GitHub web upload does not accept the hidden `.github` folder, keep these templates visible here or manually create the `.github` files from this page.

## Project Submission

Create this file in GitHub as:

```txt
.github/ISSUE_TEMPLATE/project-submission.md
```

```md
---
name: Project submission
about: Submit an Abstract project for Abracast review
title: "[Project] "
labels: project-submission
assignees: ""
---

## Project

Name:

Category:

Official website:

Portal / Kura / ecosystem listing:

Docs:

GitHub:

Discord:

Explorer / marketplace:

## User loop

What does a normal user do?

Why would they return next week?

## Economic logic

How can this project create real Abstract activity?

- Trades:
- Mints:
- Marketplace activity:
- Tips:
- Swaps:
- Game retention:
- Creator/stream activity:

## Safety review

Does it ask for private keys or seed phrases?

Are contracts verified?

Is there an audit, badge, open-source code, or community verification?

What can users lose?

## Suggested label

Support / Watch / Avoid:

Why:
```

## Risk Report

Create this file in GitHub as:

```txt
.github/ISSUE_TEMPLATE/risk-report.md
```

```md
---
name: Risk report
about: Report a risky Abstract project, claim page, or wallet flow
title: "[Risk] "
labels: risk-report
assignees: ""
---

## What is risky?

Project or URL:

## Risk type

- [ ] Private key or seed phrase request
- [ ] Unclear wallet approval
- [ ] Fake XP / reward claim
- [ ] Unknown domain
- [ ] DeFi contract risk
- [ ] Gambling / chance mechanic
- [ ] Misleading marketplace / collection
- [ ] Other

## Evidence

Links or screenshots:

## Why it matters

What harm could users face?

## Suggested Abracast action

- [ ] Mark Avoid
- [ ] Move to Watch
- [ ] Add risk note
- [ ] Add source warning
- [ ] Remove if malicious
```

## Score Change Request

Create this file in GitHub as:

```txt
.github/ISSUE_TEMPLATE/score-change.md
```

```md
---
name: Score change request
about: Request a change to a project's Abracast score
title: "[Score] "
labels: score-change
assignees: ""
---

## Project

Name:

## Requested change

Current label:

Requested label:

## Score evidence

User value:

Economic activity:

Replayability:

Streamer potential:

Onboarding:

Safety:

Update cadence:

Abstract fit:

## Trust evidence

Official sources:

Wallet safety:

Economic clarity:

Audit / verification:

Team transparency:

## Source links

Add primary sources first.
```

## Pull Request Template

Create this file in GitHub as:

```txt
.github/PULL_REQUEST_TEMPLATE.md
```

```md
## Summary

What changed?

## Why it helps Abstract users

Explain the user, streamer, builder, or safety benefit.

## Evidence

List source links used.

## Safety check

- [ ] No private-key or seed-phrase flow added
- [ ] No token claim flow added
- [ ] Support labels have High source confidence
- [ ] Risk notes are included for DeFi, chance, or trading-game projects
- [ ] `index.html` still opens directly in a browser
```

## GitHub Pages Workflow

This is optional because the Netlify demo is already live.

Create this file in GitHub as:

```txt
.github/workflows/pages.yml
```

```yml
name: Deploy static Abracast to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Upload static site
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
