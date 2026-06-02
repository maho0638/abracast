# Abracast

Abracast is an open-source ecosystem radar for Abstract.

It helps users, streamers, and builders identify the Abstract projects worth playing, streaming, funding, reviewing, and building around.

Live demo: `https://abracast.netlify.app/`

## Core thesis

Abstract does not win because people farm random XP forever. Abstract wins when good apps create repeat users, creator content, trading, marketplace activity, mints, tips, and retention.

The missing layer is quality intelligence:

- Which projects are actually useful?
- Which games are streamable and replayable?
- Which dApps can create economic activity?
- Which projects are hype-only or risky?
- What should streamers cover this week?
- What should builders fix to become more valuable?

Abracast is designed to answer those questions.

## What the first architecture includes

- Project Radar
- Ecosystem value score
- Support / Watch / Avoid recommendations
- Streamer mission board
- Repeated ecosystem gap detection
- Weekly Abstract picks
- Evidence ledger
- Risk alert board
- Feedback loop with prefilled GitHub issue links
- 6.5 day review sprint board
- Project intake form
- Markdown report export
- GitHub issue templates
- Weekly report template
- Curation governance
- Static deploy config
- Visible fallback community templates in `COMMUNITY-TEMPLATES.md`

## Score model

Abracast scores each project by:

- User value
- Economic activity
- Replayability
- Streamer potential
- Onboarding quality
- Safety and trust
- Update cadence
- Abstract fit

## Security and trust gate

Security is not a separate nice-to-have. A project cannot receive a `Support` recommendation unless it has enough trust evidence.

Abracast checks:

- Official source trail
- Wallet safety
- Economic clarity
- Audit, badge, open-source, or verification evidence
- Team transparency

Support also requires high source confidence: official site/docs plus reliable ecosystem or third-party confirmation. Directory listings are useful discovery signals, but they are not enough by themselves.

This is inspired by the same ecosystem need seen in directories such as Kura: early projects need visibility, but users also need audit, badge, or DYOR signals before trusting them.

## Decision labels

- `Support`: strong candidate to play, stream, fund, or promote
- `Watch`: promising, but missing proof or polish
- `Avoid`: low value, unclear risk, or weak ecosystem fit

## Why this helps Abstract

Abracast supports Abstract's bigger goals:

- Good projects get more attention.
- Streamers get better content ideas.
- Users waste less time on empty projects.
- Builders see what they need to improve.
- Risky claim pages lose influence.
- The ecosystem gets a practical curation layer.

## Run locally

Open `index.html` in a browser.

No install step, no backend, and no private-key input are required.

## Next build steps

- Research and add 20-50 real Abstract projects
- Add source links for every score
- Follow `RESEARCH-PLAYBOOK.md` before any Support label
- Keep low-confidence projects in the research queue until source and trust evidence improve
- Add project detail pages
- Add AGW-aware user onboarding checks
- Add weekly curator notes
- Add Turkish/English language toggle
- Add hosted public demo
- Add GitHub issue templates for community submissions

## Sources to keep using

- Abstract Portal docs: `https://docs.abs.xyz/portal/overview`
- Abstract network docs: `https://docs.abs.xyz/connect-to-abstract`
- Abstract Global Wallet docs: `https://docs.abs.xyz/abstract-global-wallet/overview`
- Portal Discover and ecosystem project pages
