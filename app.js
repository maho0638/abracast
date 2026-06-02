const storageKey = "abracast-ecosystem-radar-v2";
const githubRepoUrl = "https://github.com/maho0638/abracast";
const demoUrl = "https://abracast.netlify.app/";

const scoreModel = [
  {
    key: "user",
    label: "User value",
    weight: 16,
    meaning: "Does it solve a real user need or create real entertainment?",
  },
  {
    key: "economy",
    label: "Economic activity",
    weight: 16,
    meaning: "Can it create trades, mints, tips, marketplace usage, or repeat spending?",
  },
  {
    key: "replay",
    label: "Replayability",
    weight: 13,
    meaning: "Will users come back after the first XP or badge moment?",
  },
  {
    key: "stream",
    label: "Streamer potential",
    weight: 13,
    meaning: "Can creators explain, play, review, or compete with it live?",
  },
  {
    key: "onboarding",
    label: "Onboarding quality",
    weight: 12,
    meaning: "Can a new Abstract user understand and start without heavy friction?",
  },
  {
    key: "safety",
    label: "Safety and trust",
    weight: 12,
    meaning: "Does it avoid unclear claims, wallet risk, broken links, and predatory mechanics?",
  },
  {
    key: "updates",
    label: "Update cadence",
    weight: 9,
    meaning: "Does the team ship, communicate, and improve the product?",
  },
  {
    key: "fit",
    label: "Abstract fit",
    weight: 9,
    meaning: "Does it use Abstract's consumer, AGW, Portal, XP, streaming, or game strengths?",
  },
];

const trustModel = [
  {
    key: "official",
    label: "Official sources",
    weight: 24,
    meaning: "Project links should be traceable through Portal, official website, docs, GitHub, or known ecosystem directories.",
  },
  {
    key: "wallet",
    label: "Wallet safety",
    weight: 24,
    meaning: "The app should avoid seed phrases, private keys, unclear approvals, and aggressive claim flows.",
  },
  {
    key: "economy",
    label: "Economic clarity",
    weight: 18,
    meaning: "Users should understand how the project makes money, spends money, or creates activity.",
  },
  {
    key: "audit",
    label: "Audit or verification",
    weight: 16,
    meaning: "Contracts, listings, or tools should have audits, visible source, badges, or community verification when risk is high.",
  },
  {
    key: "transparency",
    label: "Team transparency",
    weight: 18,
    meaning: "A good project communicates updates, risks, status, seasons, downtime, and roadmap clearly.",
  },
];

const projectProfiles = {
  gigaverse: {
    researchStatus: "Source-backed",
    sourceConfidence: "High",
    badgeStatus: "Directory listed, audit not confirmed",
    userLoop: "Dungeon runs, crafting, resource gathering, fishing, gear progression, and marketplace decisions.",
    revenueModel: "In-game marketplace, item economy, and repeat gameplay loops that can create ongoing onchain activity.",
    evidence: [
      { label: "Official site", url: "https://gigaverse.io/" },
      { label: "Official docs", url: "https://glhfers.gitbook.io/gigaverse" },
      { label: "Games.gg overview", url: "https://games.gg/gigaverse/" },
      { label: "AbsTools category", url: "https://www.abstools.xyz/" },
    ],
    risks: ["Automation can distort game health.", "Resource economies need ongoing monitoring.", "New users may need clearer route guidance."],
    trust: { official: 9, wallet: 7, economy: 8, audit: 5, transparency: 8 },
  },
  "onchain-heroes": {
    researchStatus: "Source-backed",
    sourceConfidence: "High",
    badgeStatus: "Official docs available, audit not confirmed",
    userLoop: "Idle RPG progression, season activity, Portal upvote loops, and NFT/game state management.",
    revenueModel: "NFT and game-linked economy with season participation and marketplace-adjacent behavior.",
    evidence: [
      { label: "Official site", url: "https://www.onchainheroes.xyz/" },
      { label: "Official setup docs", url: "https://docs.onchainheroes.xyz/introduction/getting-started/setup" },
      { label: "Official XP docs", url: "https://docs.onchainheroes.xyz/current-off-season/abstract-xp" },
      { label: "AbsTools OCH tools", url: "https://www.abstools.xyz/" },
    ],
    risks: ["NFT requirement creates onboarding cost.", "Game contracts hold assets while heroes are out in battle.", "Retention after rewards should be tracked."],
    trust: { official: 9, wallet: 6, economy: 7, audit: 5, transparency: 8 },
  },
  bigcoin: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Medium-low",
    badgeStatus: "Directory listed, audit not confirmed",
    userLoop: "Mining configuration, optimization, resource decisions, and game-specific tooling.",
    revenueModel: "Game economy and secondary-market membership or resource activity where applicable.",
    evidence: [
      { label: "Kura directory reference", url: "https://www.kura.xyz/" },
      { label: "AbsTools Bigcoin tools", url: "https://www.abstools.xyz/" },
    ],
    risks: ["Public information is fragmented.", "Economy transparency must be verified.", "Avoid treating mining hype as proven retention."],
    trust: { official: 5, wallet: 6, economy: 6, audit: 4, transparency: 5 },
  },
  "pudgy-world": {
    researchStatus: "Source-backed",
    sourceConfidence: "Medium",
    badgeStatus: "Official brand source, app-specific audit not confirmed",
    userLoop: "Brand-led newcomer experience, collection identity, quests, and consumer-friendly onboarding.",
    revenueModel: "IP-driven engagement, collectibles, brand expansion, and downstream Abstract user acquisition.",
    evidence: [
      { label: "Official site", url: "https://www.pudgyworld.com/" },
      { label: "Abstract docs", url: "https://docs.abs.xyz/portal/overview" },
    ],
    risks: ["Brand value alone is not the same as Abstract-native activity.", "Repeat user loop must be measured.", "Separate IP hype from onchain contribution."],
    trust: { official: 9, wallet: 8, economy: 7, audit: 6, transparency: 8 },
  },
  "magic-eden": {
    researchStatus: "Source-backed",
    sourceConfidence: "High",
    badgeStatus: "Established marketplace, Abstract-specific collection risk varies",
    userLoop: "Discover, list, buy, sell, and track NFT collections.",
    revenueModel: "Marketplace fees, collection liquidity, secondary trading, and price discovery.",
    evidence: [
      { label: "Official site", url: "https://magiceden.io/" },
      { label: "Alchemy ecosystem listing", url: "https://www.alchemy.com/dapps/ecosystem/abstract" },
    ],
    risks: ["Marketplace activity can include speculation.", "Collection quality varies.", "Users need collection-level safety review."],
    trust: { official: 8, wallet: 7, economy: 9, audit: 6, transparency: 7 },
  },
  "abstract-live": {
    researchStatus: "Official docs-backed",
    sourceConfidence: "High",
    badgeStatus: "Official Portal feature",
    userLoop: "Watch, stream, teach, play, and route attention into Abstract apps.",
    revenueModel: "Creator engagement, app usage attribution, XP loops, and user acquisition for ecosystem projects.",
    evidence: [
      { label: "Portal docs", url: "https://docs.abs.xyz/portal/overview" },
      { label: "Portal", url: "https://portal.abs.xyz/" },
    ],
    risks: ["Low-quality streams can farm attention without helping apps.", "Needs content missions and app-specific attribution.", "Creator trust and moderation matter."],
    trust: { official: 9, wallet: 8, economy: 7, audit: 7, transparency: 8 },
  },
  abstools: {
    researchStatus: "Source-backed",
    sourceConfidence: "Medium",
    badgeStatus: "Community tooling, individual tools vary",
    userLoop: "Find tools, metadata, game helpers, monitoring resources, templates, and smart contract utilities.",
    revenueModel: "Builder/user productivity layer; value comes from reducing friction and improving game decisions.",
    evidence: [{ label: "Official site", url: "https://www.abstools.xyz/" }],
    risks: ["Tool quality varies.", "Automation tools can affect game fairness.", "Deprecated tools need strong labels."],
    trust: { official: 7, wallet: 7, economy: 5, audit: 4, transparency: 7 },
  },
  "unknown-claim-pages": {
    researchStatus: "Unsafe pattern",
    sourceConfidence: "None",
    badgeStatus: "No official source trail",
    userLoop: "Promises rewards, XP, roles, badges, or claims without clear official source.",
    revenueModel: "Unknown or potentially malicious.",
    evidence: [],
    risks: ["Unknown domain.", "May request wallet connection.", "May use urgency or fake XP language.", "No official source trail."],
    trust: { official: 0, wallet: 0, economy: 0, audit: 0, transparency: 0 },
  },
  "tollan-universe": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Survive waves, compete for prizes, and build repeat action gameplay if the loop is active.",
    revenueModel: "Potential prize-pool, player retention, and game economy activity; needs deeper source verification.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Prize-pool mechanics need clear rules.", "Audit and wallet flow not confirmed.", "Need official docs and team update trail."],
    trust: { official: 4, wallet: 5, economy: 5, audit: 2, transparency: 4 },
  },
  hashcrash: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Onchain gambling-style loop based on randomness and risk decisions.",
    revenueModel: "Games-of-chance activity can create volume, but user protection and fairness proof are critical.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Gambling/risk mechanics.", "Randomness proof must be verified.", "Can extract value without durable ecosystem benefit."],
    trust: { official: 3, wallet: 4, economy: 5, audit: 1, transparency: 3 },
  },
  "pengu-clash": {
    researchStatus: "Conflicting ecosystem fit",
    sourceConfidence: "Medium-low",
    badgeStatus: "Kura listed, but major public sources describe TON/Telegram launch",
    userLoop: "Skill-based multiplayer matches, seasonal leaderboards, and Pudgy-linked game identity.",
    revenueModel: "Player retention, competitive content, tournaments, and brand-driven onboarding potential.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Abstract fit is unclear because major public coverage describes TON/Telegram launch.", "Need official Abstract deployment proof.", "Need anti-cheat and matchmaking clarity."],
    trust: { official: 4, wallet: 6, economy: 5, audit: 2, transparency: 5 },
  },
  aborean: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Swap, liquidity, incentives, and DeFi participation inside Abstract.",
    revenueModel: "Liquidity, swaps, fees, incentives, and onchain DeFi activity.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["DeFi contract risk.", "Audit status must be verified.", "Incentive programs can distort real demand."],
    trust: { official: 4, wallet: 4, economy: 8, audit: 2, transparency: 4 },
  },
  opensea: {
    researchStatus: "Source-backed",
    sourceConfidence: "High",
    badgeStatus: "Established marketplace, collection-level risk remains",
    userLoop: "Browse, buy, sell, and manage NFT collections and onchain assets.",
    revenueModel: "Marketplace fees, secondary trading, liquidity, and collection discovery.",
    evidence: [
      { label: "Kura listing", url: "https://www.kura.xyz/" },
      { label: "OpenSea", url: "https://opensea.io/" },
    ],
    risks: ["Collection risk varies widely.", "Fake collections and speculative behavior must be filtered.", "Marketplace brand does not validate every asset."],
    trust: { official: 8, wallet: 7, economy: 9, audit: 6, transparency: 7 },
  },
  fairplay: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Trade and game with tap-trading mechanics on Abstract.",
    revenueModel: "Potential trading volume and game-like retention; needs proof of fair market structure.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Trading-game mechanics can encourage risky behavior.", "Need official source and contract verification.", "Need clear fee and incentive disclosures."],
    trust: { official: 3, wallet: 4, economy: 6, audit: 1, transparency: 3 },
  },
  "reservoir-swap": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Medium",
    badgeStatus: "Known infrastructure brand, Abstract listing needs verification",
    userLoop: "Swap tokens and manage liquidity positions.",
    revenueModel: "Swap fees, liquidity activity, and DeFi utility for Abstract users.",
    evidence: [
      { label: "Kura listing", url: "https://www.kura.xyz/" },
      { label: "Reservoir", url: "https://reservoir.tools/" },
    ],
    risks: ["DeFi risk requires official app link verification.", "Liquidity pools carry impermanent-loss and contract risk.", "Users need safe routing clarity."],
    trust: { official: 6, wallet: 5, economy: 8, audit: 4, transparency: 5 },
  },
  kona: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Trade, earn yield, and explore DeFi experiments on Abstract.",
    revenueModel: "Trading, yield, liquidity, and incentive activity.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Experimental DeFi needs stronger audit proof.", "Yield claims need verification.", "Incentives may hide weak organic demand."],
    trust: { official: 3, wallet: 3, economy: 7, audit: 1, transparency: 3 },
  },
  dyli: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Medium",
    badgeStatus: "Kura listed, business model source needed",
    userLoop: "Launch, collect, and trade physical-product drops.",
    revenueModel: "Physical product launches, collectible trading, fees, and commerce activity.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Fulfillment and customer-support risk.", "Need official source and marketplace policy review.", "Physical-product claims require trust evidence."],
    trust: { official: 5, wallet: 6, economy: 7, audit: 3, transparency: 5 },
  },
  myriad: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Medium",
    badgeStatus: "Kura listed, market-risk review needed",
    userLoop: "Prediction markets across crypto, sports, gaming, politics, and culture.",
    revenueModel: "Market trading, fees, liquidity, and opinion-based speculation.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Prediction markets carry regulatory and user-loss risk.", "Need market rules and settlement clarity.", "Liquidity depth must be verified."],
    trust: { official: 5, wallet: 5, economy: 8, audit: 3, transparency: 5 },
  },
  "eureka-news": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, editorial verification needed",
    userLoop: "Read Abstract ecosystem news, token data, NFT analytics, and project updates.",
    revenueModel: "Information utility, traffic, partnerships, and analytics value.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["News accuracy needs source standards.", "Analytics may be stale or incomplete.", "Editorial conflicts should be disclosed."],
    trust: { official: 3, wallet: 8, economy: 4, audit: 2, transparency: 4 },
  },
  fireball: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, game fairness review needed",
    userLoop: "Game client and meta-game tooling for Gigaverse strategy and leaderboard optimization.",
    revenueModel: "Tooling value for players and potential marketplace or subscription utility.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Automation or optimization tools can affect game fairness.", "Need official permission from game ecosystem.", "Need clear boundaries for allowed use."],
    trust: { official: 3, wallet: 6, economy: 5, audit: 2, transparency: 4 },
  },
  "moonsheep-cannon": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Arcade-style game tied to the Moonsheep launch narrative.",
    revenueModel: "Game engagement, token or launch attention, and repeat arcade play if the loop holds.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Token-launch adjacency needs caution.", "Need official rules and wallet flow.", "Need replay proof beyond launch hype."],
    trust: { official: 3, wallet: 5, economy: 4, audit: 1, transparency: 3 },
  },
  gacha: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, consumer-risk review needed",
    userLoop: "Onchain consumer experiences centered on winning and chance mechanics.",
    revenueModel: "Paid entries, prize mechanics, collectible loops, or game-of-chance activity.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Chance mechanics require strong transparency.", "Potential gambling-like user harm.", "Need fairness and payout proof."],
    trust: { official: 3, wallet: 4, economy: 5, audit: 1, transparency: 3 },
  },
  frankygo: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Onchain roguelike RPG with repeat runs and progression potential.",
    revenueModel: "Game progression, items, mints, or marketplace activity if the economy is active.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Need official source and gameplay proof.", "Need economy and wallet-flow clarity.", "Need update cadence verification."],
    trust: { official: 3, wallet: 5, economy: 5, audit: 1, transparency: 3 },
  },
  bigpool: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, membership economics need review",
    userLoop: "Bigcoin mining membership and secondary-market participation.",
    revenueModel: "Membership trading, mining participation, and secondary-market demand.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Membership economics can be opaque.", "Secondary-market hype can mislead users.", "Need official mining mechanics and risk disclosure."],
    trust: { official: 3, wallet: 5, economy: 6, audit: 1, transparency: 3 },
  },
  cambria: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, high-stakes risk review needed",
    userLoop: "Competitive risk-to-earn MMO gameplay with onchain stakes.",
    revenueModel: "Player stakes, competitive rewards, and high-intensity economic loops.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Risk-to-earn mechanics can harm users.", "Need official Abstract deployment proof.", "Need rules, custody, and loss mechanics reviewed."],
    trust: { official: 3, wallet: 3, economy: 7, audit: 1, transparency: 3 },
  },
  "proof-of-play-arcade": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Medium",
    badgeStatus: "Kura listed, Proof of Play brand source needed",
    userLoop: "High-action roguelite arcade loop from the Pirate Nation / Proof of Play world.",
    revenueModel: "Gameplay retention, asset activity, and cross-game player funnel potential.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Need official Abstract deployment proof.", "Need current game access verification.", "Need wallet-flow review."],
    trust: { official: 5, wallet: 6, economy: 5, audit: 3, transparency: 5 },
  },
  "moody-madness": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Tournament and guild-oriented racing spectacle with onchain game identity.",
    revenueModel: "Tournament participation, guild activity, collectibles, and event-driven retention.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Need official rules and event proof.", "Need wallet/entry-cost clarity.", "Need replay data beyond event hype."],
    trust: { official: 3, wallet: 5, economy: 5, audit: 1, transparency: 3 },
  },
  "wolf-game": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Medium",
    badgeStatus: "Kura listed, collection/game risk varies",
    userLoop: "Sheep and wolves compete in a pixelated onchain strategy economy.",
    revenueModel: "NFT/game economy, strategic participation, and secondary-market activity.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Need Abstract-specific deployment verification.", "Game economy may be complex for newcomers.", "Collection risk should be reviewed separately."],
    trust: { official: 5, wallet: 6, economy: 7, audit: 3, transparency: 5 },
  },
  "roach-racing": {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, trading-game risk review needed",
    userLoop: "Gamified trading competition where crypto-linked roaches compete for a shared bank.",
    revenueModel: "Trading competition, game stakes, and speculative engagement.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Gamified trading can hide financial risk.", "Need rule and payout clarity.", "Need official source and contract verification."],
    trust: { official: 3, wallet: 4, economy: 6, audit: 1, transparency: 3 },
  },
  gigachadbat: {
    researchStatus: "Directory-backed",
    sourceConfidence: "Low",
    badgeStatus: "Kura listed, audit not confirmed",
    userLoop: "Simple bat-and-score arcade loop.",
    revenueModel: "Lightweight attention and game engagement; economic depth not proven.",
    evidence: [{ label: "Kura listing", url: "https://www.kura.xyz/" }],
    risks: ["Need official source.", "Economic value unclear.", "May be fun but not ecosystem-critical without retention proof."],
    trust: { official: 3, wallet: 6, economy: 2, audit: 1, transparency: 3 },
  },
};

const seedProjects = [
  {
    id: "gigaverse",
    name: "Gigaverse",
    category: "Game",
    url: "https://gigaverse.io/",
    portal: "Portal / Discover",
    summary: "On-chain RPG loop with dungeons, crafting, resources, marketplace activity, and streamable gameplay.",
    why: "Strong fit for Abstract's game-first consumer thesis: repeat play, item economy, creator content, and marketplace loops.",
    gaps: ["Track real retention instead of hype.", "Explain beginner path more clearly.", "Surface economy health over time."],
    mission: "Run a beginner dungeon walkthrough, explain the item economy, then compare risk/reward decisions live.",
    scores: { user: 8, economy: 8, replay: 9, stream: 9, onboarding: 7, safety: 7, updates: 8, fit: 9 },
  },
  {
    id: "onchain-heroes",
    name: "Onchain Heroes",
    category: "Game",
    url: "https://onchainheroes.xyz/",
    portal: "Portal / Discover",
    summary: "RPG and NFT-linked gameplay with Abstract Portal upvote reward loops.",
    why: "Combines game progression, weekly Portal interaction, NFT economy, and clear streamer/tutorial potential.",
    gaps: ["Make current season state obvious.", "Track whether rewards create long-term players.", "Clarify new-player cost and path."],
    mission: "Show the weekly upvote reward path, then review whether the gameplay loop is worth continuing after the reward.",
    scores: { user: 7, economy: 8, replay: 7, stream: 8, onboarding: 5, safety: 6, updates: 8, fit: 9 },
  },
  {
    id: "bigcoin",
    name: "Bigcoin / Mining Games",
    category: "Game",
    url: "",
    portal: "Portal / Discover",
    summary: "Mining-style game category that can create repeat optimization and resource-management content.",
    why: "Good candidate for streamable strategy if the game loop has measurable decisions and ongoing economy.",
    gaps: ["Needs clearer public data.", "Needs economy transparency.", "Needs beginner strategy guides."],
    mission: "Do a mining setup optimization stream and compare beginner vs advanced configurations.",
    scores: { user: 6, economy: 7, replay: 7, stream: 7, onboarding: 5, safety: 6, updates: 6, fit: 8 },
  },
  {
    id: "pudgy-world",
    name: "Pudgy World",
    category: "Game / IP",
    url: "https://www.pudgyworld.com/",
    portal: "Pudgy / Abstract ecosystem",
    summary: "Pudgy IP-driven consumer experience that can pull mainstream users into Abstract.",
    why: "Brand strength and mainstream familiarity can bring new users that would not normally try a crypto app.",
    gaps: ["Need to measure actual Abstract-native activity.", "Avoid relying only on brand gravity.", "Show repeat loops."],
    mission: "Create a newcomer tour: what can a non-crypto Pudgy fan do on Abstract in 20 minutes?",
    scores: { user: 7, economy: 7, replay: 6, stream: 8, onboarding: 8, safety: 8, updates: 7, fit: 8 },
  },
  {
    id: "magic-eden",
    name: "Magic Eden on Abstract",
    category: "Marketplace",
    url: "https://magiceden.io/",
    portal: "Marketplace",
    summary: "NFT marketplace access that can keep trading and collection liquidity inside the Abstract economy.",
    why: "Marketplaces matter because they turn attention into liquidity, fees, and price discovery.",
    gaps: ["Separate real collection demand from wash or short-term speculation.", "Create safer collection review flows."],
    mission: "Review three Abstract collections by utility, volume, floor movement, and community signals.",
    scores: { user: 7, economy: 9, replay: 6, stream: 7, onboarding: 7, safety: 7, updates: 8, fit: 8 },
  },
  {
    id: "abstract-live",
    name: "Abstract Live Streams",
    category: "Creator / Streaming",
    url: "https://portal.abs.xyz/",
    portal: "Portal Live",
    summary: "Native streaming layer where gameplay, tutorials, AMAs, and ecosystem walkthroughs can drive user return.",
    why: "Streaming is one of Abstract's strongest differentiation points and can market good apps without paid ads.",
    gaps: ["Need better content quality filters.", "Need mission prompts for creators.", "Need app-to-stream attribution."],
    mission: "Host a weekly show: top games, best newcomer flow, risky project notes, and one developer interview.",
    scores: { user: 8, economy: 7, replay: 8, stream: 10, onboarding: 7, safety: 7, updates: 8, fit: 10 },
  },
  {
    id: "abstools",
    name: "AbsTools",
    category: "Tooling",
    url: "https://www.abstools.xyz/",
    portal: "Community tools",
    summary: "Directory of tools around Abstract games, monitoring, smart contracts, templates, and utility workflows.",
    why: "Tooling helps serious users, creators, and builders understand games faster and build around the ecosystem.",
    gaps: ["Needs stronger quality scoring.", "Could use safety labels.", "Could map tools to streamer/developer missions."],
    mission: "Show how one tool helps a player or builder make a better decision in under ten minutes.",
    scores: { user: 8, economy: 5, replay: 7, stream: 6, onboarding: 7, safety: 8, updates: 7, fit: 9 },
  },
  {
    id: "tollan-universe",
    name: "Tollan Universe",
    category: "Game",
    url: "",
    portal: "Kura directory",
    summary: "Wave-survival action game candidate with weekly prize-pool potential.",
    why: "Could be strong for streamers if the prize rules, wallet flow, and repeat gameplay are clear.",
    gaps: ["Need official source trail.", "Need prize and wallet-risk review.", "Need update cadence verification."],
    mission: "Run a first-look safety and gameplay review: rules, prize mechanics, onboarding, and whether the loop is fun without rewards.",
    scores: { user: 6, economy: 6, replay: 7, stream: 8, onboarding: 5, safety: 5, updates: 4, fit: 7 },
  },
  {
    id: "hashcrash",
    name: "Hashcrash",
    category: "Games of Chance",
    url: "",
    portal: "Kura directory",
    summary: "Risk-heavy randomness game that needs fairness proof before serious support.",
    why: "Games of chance can create activity, but Abracast should be strict because user harm and extraction risk are high.",
    gaps: ["Need randomness proof.", "Need contract/audit status.", "Need responsible-risk messaging."],
    mission: "Do not promote as a pick until fairness, source trail, and wallet flow are verified; use it as a safety case study.",
    scores: { user: 4, economy: 6, replay: 5, stream: 6, onboarding: 4, safety: 2, updates: 4, fit: 5 },
  },
  {
    id: "pengu-clash",
    name: "Pengu Clash",
    category: "Game",
    url: "",
    portal: "Kura directory",
    summary: "Skill-based multiplayer Pudgy-linked game candidate with leaderboard and tournament potential.",
    why: "Competitive games can be highly streamable, but Abracast should not treat it as Abstract-positive until official Abstract deployment is verified.",
    gaps: ["Need official Abstract source confirmation.", "Need anti-cheat clarity.", "Need active season evidence.", "Need TON vs Abstract ecosystem fit resolved."],
    mission: "Research only: verify where the game actually runs before creating any Abstract support content.",
    scores: { user: 7, economy: 5, replay: 8, stream: 9, onboarding: 6, safety: 6, updates: 5, fit: 4 },
  },
  {
    id: "aborean",
    name: "Aborean",
    category: "DeFi",
    url: "",
    portal: "Kura directory",
    summary: "Liquidity and swap layer candidate for Abstract DeFi activity.",
    why: "Abstract needs real economic activity, but DeFi support requires stricter audit and contract-risk evidence.",
    gaps: ["Need audit status.", "Need liquidity depth data.", "Need incentive sustainability review."],
    mission: "Create a DeFi safety walkthrough: liquidity, fees, incentives, contract risk, and whether users should wait.",
    scores: { user: 6, economy: 9, replay: 5, stream: 6, onboarding: 5, safety: 4, updates: 5, fit: 8 },
  },
  {
    id: "opensea",
    name: "OpenSea on Abstract",
    category: "Marketplace",
    url: "https://opensea.io/",
    portal: "Kura directory",
    summary: "Large NFT marketplace access that can support collection liquidity and discovery.",
    why: "Marketplace rails matter for Abstract's collection economy, but users need collection-level verification.",
    gaps: ["Need Abstract collection quality filters.", "Need fake collection warnings.", "Need volume vs real demand review."],
    mission: "Review Abstract collections through safety, floor movement, creator credibility, and utility instead of hype.",
    scores: { user: 7, economy: 9, replay: 6, stream: 7, onboarding: 7, safety: 7, updates: 8, fit: 8 },
  },
  {
    id: "fairplay",
    name: "Fairplay",
    category: "DeFi / Game",
    url: "",
    portal: "Kura directory",
    summary: "Tap-trading app that blends game mechanics with trading activity on Abstract.",
    why: "Could create economic activity, but trading-game mechanics require strict user-risk review.",
    gaps: ["Need official source trail.", "Need contract and fee clarity.", "Need responsible-risk messaging."],
    mission: "Research-only stream: explain why trading-game apps need stronger verification before user promotion.",
    scores: { user: 5, economy: 7, replay: 6, stream: 6, onboarding: 5, safety: 3, updates: 4, fit: 6 },
  },
  {
    id: "reservoir-swap",
    name: "Reservoir Swap",
    category: "DeFi",
    url: "https://reservoir.tools/",
    portal: "Kura directory",
    summary: "Swap and liquidity utility candidate for Abstract users.",
    why: "Useful DeFi rails can create real activity, but users need routing, liquidity, and contract-risk clarity.",
    gaps: ["Need official Abstract app URL confirmation.", "Need audit and routing review.", "Need liquidity depth data."],
    mission: "Make a DeFi safety guide: route, fees, liquidity, contract risk, and when users should wait.",
    scores: { user: 7, economy: 8, replay: 5, stream: 5, onboarding: 6, safety: 5, updates: 6, fit: 7 },
  },
  {
    id: "kona",
    name: "Kona",
    category: "DeFi",
    url: "",
    portal: "Kura directory",
    summary: "Experimental DeFi app for trading, yield, and incentive exploration on Abstract.",
    why: "Could bring economic activity, but experimental DeFi must be researched harder than games.",
    gaps: ["Need audit evidence.", "Need yield source clarity.", "Need incentive sustainability review."],
    mission: "Build a checklist stream: what yield claim is, where returns come from, and what can break.",
    scores: { user: 5, economy: 8, replay: 5, stream: 5, onboarding: 5, safety: 3, updates: 4, fit: 7 },
  },
  {
    id: "dyli",
    name: "DYLI",
    category: "Marketplace / Commerce",
    url: "",
    portal: "Kura directory",
    summary: "Physical product launch and trading marketplace candidate.",
    why: "Physical commerce can pull non-crypto users into Abstract if fulfillment and trust are strong.",
    gaps: ["Need official source link.", "Need fulfillment policy review.", "Need dispute and refund clarity."],
    mission: "Review a product drop from user journey to fulfillment trust, not only marketplace hype.",
    scores: { user: 7, economy: 7, replay: 5, stream: 6, onboarding: 6, safety: 5, updates: 5, fit: 7 },
  },
  {
    id: "myriad",
    name: "Myriad",
    category: "Prediction Market",
    url: "",
    portal: "Kura directory",
    summary: "Prediction markets for crypto, sports, gaming, culture, and other events.",
    why: "Prediction markets can create trading activity and content, but rules and user-risk controls matter.",
    gaps: ["Need settlement rules.", "Need regulatory-risk note.", "Need liquidity depth and official source."],
    mission: "Explain one market's rules, liquidity, and risk before showing any trade idea.",
    scores: { user: 6, economy: 8, replay: 7, stream: 8, onboarding: 5, safety: 4, updates: 5, fit: 7 },
  },
  {
    id: "eureka-news",
    name: "Eureka News",
    category: "Social / Analytics",
    url: "",
    portal: "Kura directory",
    summary: "Abstract ecosystem news, token data, NFT analytics, and project update directory.",
    why: "Information products can reduce confusion if they cite sources and avoid hype.",
    gaps: ["Need editorial standards.", "Need source citations.", "Need stale-data warnings."],
    mission: "Compare one news item against primary sources and grade whether it helps users make safer decisions.",
    scores: { user: 6, economy: 4, replay: 6, stream: 6, onboarding: 7, safety: 6, updates: 5, fit: 7 },
  },
  {
    id: "fireball",
    name: "Fireball",
    category: "Tooling / Game",
    url: "",
    portal: "Kura directory",
    summary: "Gigaverse helper client and meta-game tooling for strategy and leaderboards.",
    why: "Game tooling can deepen a successful game ecosystem, but fairness boundaries must be explicit.",
    gaps: ["Need official permission boundaries.", "Need automation/fairness review.", "Need source and update trail."],
    mission: "Show how a tool helps decision-making without crossing into unfair automation.",
    scores: { user: 7, economy: 5, replay: 7, stream: 7, onboarding: 6, safety: 5, updates: 5, fit: 8 },
  },
  {
    id: "moonsheep-cannon",
    name: "Moonsheep Cannon",
    category: "Game / Chance",
    url: "",
    portal: "Kura directory",
    summary: "Arcade game tied to the Moonsheep launch narrative.",
    why: "Could be fun and streamable, but token-launch adjacency makes source and risk review essential.",
    gaps: ["Need official source.", "Need wallet flow and token-risk clarity.", "Need replay proof after launch hype."],
    mission: "Use as a case study in separating fun arcade loops from token-launch risk.",
    scores: { user: 5, economy: 4, replay: 5, stream: 7, onboarding: 6, safety: 3, updates: 4, fit: 5 },
  },
  {
    id: "gacha",
    name: "Gacha",
    category: "Games of Chance",
    url: "",
    portal: "Kura directory",
    summary: "Onchain consumer experience centered on winning mechanics.",
    why: "Winning mechanics can attract users, but Abracast should be strict about fairness and user harm.",
    gaps: ["Need fairness proof.", "Need payout/rules clarity.", "Need wallet and contract review."],
    mission: "Safety education: explain why chance mechanics need proof before promotion.",
    scores: { user: 4, economy: 5, replay: 5, stream: 6, onboarding: 5, safety: 2, updates: 4, fit: 5 },
  },
  {
    id: "frankygo",
    name: "Franky GO",
    category: "Game",
    url: "",
    portal: "Kura directory",
    summary: "Onchain roguelike RPG candidate with repeat-run potential.",
    why: "Roguelikes are naturally streamable and replayable if the game loop is real and wallet flow is safe.",
    gaps: ["Need official source.", "Need gameplay proof.", "Need economy and update review."],
    mission: "First-look stream: play loop, onboarding time, wallet risk, and whether it is fun without XP.",
    scores: { user: 6, economy: 5, replay: 8, stream: 8, onboarding: 5, safety: 5, updates: 4, fit: 7 },
  },
  {
    id: "bigpool",
    name: "BigPool",
    category: "NFT / Mining",
    url: "",
    portal: "Kura directory",
    summary: "Bigcoin mining membership and secondary-market participation.",
    why: "Mining membership can create engagement and trading, but economics must be transparent.",
    gaps: ["Need official mining mechanics.", "Need secondary-market risk note.", "Need membership value explanation."],
    mission: "Analyze membership economics: what users pay, what they get, and what can go wrong.",
    scores: { user: 5, economy: 6, replay: 6, stream: 6, onboarding: 5, safety: 4, updates: 4, fit: 7 },
  },
  {
    id: "cambria",
    name: "Cambria",
    category: "Game / Risk-to-Earn",
    url: "",
    portal: "Kura directory",
    summary: "Competitive MMO candidate with large onchain stakes and risk-to-earn mechanics.",
    why: "Could create intense content and economic activity, but high user-risk means Abracast must be strict.",
    gaps: ["Need official Abstract deployment proof.", "Need rules and custody review.", "Need user-loss risk disclosure."],
    mission: "Research-only: explain the risk-to-earn model and why user protection decides whether it can be promoted.",
    scores: { user: 6, economy: 8, replay: 7, stream: 9, onboarding: 4, safety: 2, updates: 4, fit: 6 },
  },
  {
    id: "proof-of-play-arcade",
    name: "Proof of Play Arcade",
    category: "Game",
    url: "",
    portal: "Kura directory",
    summary: "Roguelite arcade candidate tied to Proof of Play and Pirate Nation style gameplay.",
    why: "Action roguelites are streamable and can create retention if Abstract deployment and wallet flow are confirmed.",
    gaps: ["Need official source trail.", "Need current gameplay access proof.", "Need wallet flow and update review."],
    mission: "First-look review: game loop, onboarding time, wallet risk, and whether it is worth playing after rewards.",
    scores: { user: 7, economy: 5, replay: 8, stream: 8, onboarding: 6, safety: 6, updates: 5, fit: 7 },
  },
  {
    id: "moody-madness",
    name: "Moody Madness",
    category: "Game",
    url: "",
    portal: "Kura directory",
    summary: "Tournament and guild racing spectacle candidate.",
    why: "Event-based games can create social content, but they need repeat schedule and trustworthy rules.",
    gaps: ["Need official source.", "Need tournament rules.", "Need replay and event cadence proof."],
    mission: "Review whether the tournament loop creates repeat users or only short event spikes.",
    scores: { user: 5, economy: 5, replay: 6, stream: 8, onboarding: 5, safety: 5, updates: 4, fit: 6 },
  },
  {
    id: "wolf-game",
    name: "Wolf Game",
    category: "Game / NFT",
    url: "",
    portal: "Kura directory",
    summary: "Sheep-and-wolves onchain strategy economy candidate.",
    why: "Can create strategy content and NFT economy activity, but complexity and collection risk need careful explanation.",
    gaps: ["Need Abstract deployment verification.", "Need collection-level safety review.", "Need beginner guide."],
    mission: "Explain the strategy economy in plain language and show what a newcomer must understand before spending.",
    scores: { user: 6, economy: 7, replay: 7, stream: 7, onboarding: 4, safety: 5, updates: 5, fit: 7 },
  },
  {
    id: "roach-racing",
    name: "Roach Racing",
    category: "Trading Game",
    url: "",
    portal: "Kura directory",
    summary: "Gamified trading competition with crypto-linked racers and a shared bank.",
    why: "Could create entertaining markets, but financial-risk masking is a major concern.",
    gaps: ["Need official source.", "Need competition rules.", "Need financial-risk disclosure."],
    mission: "Safety review: separate entertainment from trading risk before considering any user recommendation.",
    scores: { user: 5, economy: 6, replay: 6, stream: 7, onboarding: 5, safety: 3, updates: 4, fit: 6 },
  },
  {
    id: "gigachadbat",
    name: "GIGACHADBAT",
    category: "Game",
    url: "",
    portal: "Kura directory",
    summary: "Lightweight bat-and-score arcade game candidate.",
    why: "Simple games can onboard casual users, but this needs proof of retention or economic relevance.",
    gaps: ["Need official source.", "Need gameplay proof.", "Need retention and ecosystem value evidence."],
    mission: "Quick arcade review: is it fun, safe, and repeatable enough to deserve attention?",
    scores: { user: 4, economy: 2, replay: 5, stream: 5, onboarding: 8, safety: 6, updates: 3, fit: 5 },
  },
  {
    id: "unknown-claim-pages",
    name: "Unknown XP / Claim Pages",
    category: "Risk",
    url: "",
    portal: "External links",
    summary: "Unverified pages promising XP, badges, roles, claims, or token rewards.",
    why: "These can harm Abstract users, steal attention from real apps, and damage trust in the ecosystem.",
    gaps: ["Verify official source.", "Do not connect wallet blindly.", "Check whether the project has real product value."],
    mission: "Educational safety segment: compare official Portal flows with suspicious claim language.",
    scores: { user: 1, economy: 1, replay: 1, stream: 5, onboarding: 2, safety: 1, updates: 1, fit: 1 },
  },
];

let state = loadState();
let selectedId = state.selectedId || seedProjects[0].id;

const projectGrid = document.querySelector("#projectGrid");
const projectDetail = document.querySelector("#projectDetail");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const decisionFilter = document.querySelector("#decisionFilter");
const sortFilter = document.querySelector("#sortFilter");
const modelList = document.querySelector("#modelList");
const trustList = document.querySelector("#trustList");
const missionList = document.querySelector("#missionList");
const gapList = document.querySelector("#gapList");
const supportList = document.querySelector("#supportList");
const watchList = document.querySelector("#watchList");
const avoidList = document.querySelector("#avoidList");
const evidenceLedger = document.querySelector("#evidenceLedger");
const riskAlertList = document.querySelector("#riskAlertList");
const feedbackRequestText = document.querySelector("#feedbackRequestText");
const sprintGrid = document.querySelector("#sprintGrid");
const reportText = document.querySelector("#reportText");
const projectForm = document.querySelector("#projectForm");

searchInput.addEventListener("input", render);
categoryFilter.addEventListener("change", render);
decisionFilter.addEventListener("change", render);
sortFilter.addEventListener("change", render);
document.querySelector("#resetData").addEventListener("click", resetData);
document.querySelector("#copyPicks").addEventListener("click", copyPicks);
document.querySelector("#copyReport").addEventListener("click", copyReport);
document.querySelector("#downloadReport").addEventListener("click", downloadReport);
document.querySelector("#copyFeedbackRequest").addEventListener("click", copyFeedbackRequest);

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addProject();
});

render();

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return { projects: seedProjects, selectedId: seedProjects[0].id };
    }
    const parsed = JSON.parse(raw);
    return {
      projects: Array.isArray(parsed.projects) ? parsed.projects : seedProjects,
      selectedId: parsed.selectedId || seedProjects[0].id,
    };
  } catch {
    return { projects: seedProjects, selectedId: seedProjects[0].id };
  }
}

function saveState() {
  state.selectedId = selectedId;
  localStorage.setItem(storageKey, JSON.stringify(state));
}


function render() {
  ensureCategoryOptions();
  renderProjects();
  renderDetail();
  renderModel();
  renderTrust();
  renderMissions();
  renderPicks();
  renderEvidenceLedger();
  renderRiskAlerts();
  renderFeedbackLinks();
  renderSprint();
  renderMetrics();
  renderReport();
  saveState();
}

function ensureCategoryOptions() {
  const categories = [...new Set(state.projects.map((project) => project.category))].sort();
  const current = categoryFilter.value || "all";
  categoryFilter.innerHTML = '<option value="all">All categories</option>';
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });
  categoryFilter.value = categories.includes(current) ? current : "all";
}

function renderProjects() {
  const projects = filteredProjects();
  projectGrid.innerHTML = "";

  if (!projects.length) {
    projectGrid.append(emptyText("No projects match this filter."));
    return;
  }

  projects.forEach((project) => {
    const score = projectScore(project);
    const decision = projectDecision(project);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `project-card ${selectedId === project.id ? "selected" : ""}`;
    const trust = trustScore(project);
    const profile = projectProfile(project);
    card.innerHTML = `
      <span class="card-top">
        <strong>${escapeHtml(project.name)}</strong>
        <b class="${decision.toLowerCase()}">${decision}</b>
      </span>
      <span>${escapeHtml(project.category)}</span>
      <p>${escapeHtml(project.summary)}</p>
      <span class="source-chip">${escapeHtml(profile.sourceConfidence)} confidence | ${profile.evidence.length} source${profile.evidence.length === 1 ? "" : "s"}</span>
      <span class="score-line"><em>${score}</em><small>Value</small><em>${trust}</em><small>Trust</small></span>
    `;
    card.addEventListener("click", () => {
      selectedId = project.id;
      render();
    });
    projectGrid.append(card);
  });
}

function renderDetail() {
  const project = selectedProject();
  if (!project) {
    projectDetail.innerHTML = "";
    return;
  }

  const score = projectScore(project);
  const decision = projectDecision(project);
  const trust = trustScore(project);
  const profile = projectProfile(project);
  const bars = scoreModel
    .map((metric) => {
      const value = clampScore(project.scores[metric.key]);
      return `
        <div class="score-row">
          <span>${escapeHtml(metric.label)}</span>
          <strong>${value}/10</strong>
          <i style="--value:${value * 10}%"></i>
        </div>
      `;
    })
    .join("");
  const trustRows = trustModel
    .map((metric) => {
      const value = clampScore(profile.trust[metric.key]);
      return `
        <div class="score-row">
          <span>${escapeHtml(metric.label)}</span>
          <strong>${value}/10</strong>
          <i style="--value:${value * 10}%"></i>
        </div>
      `;
    })
    .join("");

  projectDetail.innerHTML = `
    <div class="detail-head">
      <div>
        <p class="eyebrow">Selected project</p>
        <h2>${escapeHtml(project.name)}</h2>
      </div>
      <span class="decision ${decision.toLowerCase()}">${decision}</span>
    </div>
    <div class="detail-score">
      <strong>${score}</strong>
      <span>ecosystem value</span>
      <strong>${trust}</strong>
      <span>trust score</span>
    </div>
    <div class="research-box">
      <div><span>Research status</span><strong>${escapeHtml(profile.researchStatus)}</strong></div>
      <div><span>Source confidence</span><strong>${escapeHtml(profile.sourceConfidence)}</strong></div>
      <div><span>Badge / audit status</span><strong>${escapeHtml(profile.badgeStatus)}</strong></div>
      <div><span>Evidence count</span><strong>${profile.evidence.length}</strong></div>
    </div>
    <p>${escapeHtml(project.why)}</p>
    ${project.url ? `<a href="${escapeAttribute(project.url)}" target="_blank" rel="noreferrer">Open project</a>` : ""}
    <h3>User loop</h3>
    <p>${escapeHtml(profile.userLoop)}</p>
    <h3>Economic logic</h3>
    <p>${escapeHtml(profile.revenueModel)}</p>
    <h3>Score breakdown</h3>
    <div class="score-stack">${bars}</div>
    <h3>Trust gate</h3>
    <div class="score-stack">${trustRows}</div>
    <h3>Evidence links</h3>
    <ul>${profile.evidence.length ? profile.evidence.map((item) => `<li><a href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a></li>`).join("") : "<li>No reliable source links yet.</li>"}</ul>
    <h3>Safety risks</h3>
    <ul>${profile.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}</ul>
    <h3>Known gaps</h3>
    <ul>${project.gaps.map((gap) => `<li>${escapeHtml(gap)}</li>`).join("")}</ul>
    <h3>Streamer mission</h3>
    <p>${escapeHtml(project.mission)}</p>
  `;
}

function renderModel() {
  modelList.innerHTML = "";
  scoreModel.forEach((metric) => {
    const item = document.createElement("article");
    item.className = "model-item";
    item.innerHTML = `
      <span>${metric.weight}%</span>
      <div>
        <strong>${escapeHtml(metric.label)}</strong>
        <p>${escapeHtml(metric.meaning)}</p>
      </div>
    `;
    modelList.append(item);
  });
}

function renderTrust() {
  trustList.innerHTML = "";
  trustModel.forEach((metric) => {
    const item = document.createElement("article");
    item.className = "model-item trust-item";
    item.innerHTML = `
      <span>${metric.weight}%</span>
      <div>
        <strong>${escapeHtml(metric.label)}</strong>
        <p>${escapeHtml(metric.meaning)}</p>
      </div>
    `;
    trustList.append(item);
  });
}

function renderMissions() {
  const support = sortedProjects()
    .filter((project) => projectDecision(project) === "Support")
    .slice(0, 5);

  missionList.innerHTML = "";
  support.forEach((project) => {
    const item = document.createElement("article");
    item.className = "mission-item";
    item.innerHTML = `
      <strong>${escapeHtml(project.name)}</strong>
      <p>${escapeHtml(project.mission)}</p>
      <small>${projectScore(project)} value | ${trustScore(project)} trust | ${escapeHtml(project.category)}</small>
    `;
    missionList.append(item);
  });

  gapList.innerHTML = "";
  const gapCounts = new Map();
  state.projects.forEach((project) => {
    project.gaps.forEach((gap) => {
      gapCounts.set(gap, (gapCounts.get(gap) || 0) + 1);
    });
  });

  [...gapCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .forEach(([gap, count]) => {
      const item = document.createElement("article");
      item.innerHTML = `<strong>${escapeHtml(gap)}</strong><p>Seen in ${count} tracked project${count > 1 ? "s" : ""}.</p>`;
      gapList.append(item);
    });
}

function renderPicks() {
  const groups = {
    Support: supportList,
    Watch: watchList,
    Avoid: avoidList,
  };

  Object.values(groups).forEach((list) => {
    list.innerHTML = "";
  });

  ["Support", "Watch", "Avoid"].forEach((decision) => {
    const projects = sortedProjects().filter((project) => projectDecision(project) === decision);
    if (!projects.length) {
      groups[decision].append(emptyText("No projects yet."));
      return;
    }
    projects.slice(0, 5).forEach((project) => {
      const item = document.createElement("article");
      item.className = "pick-item";
      item.innerHTML = `
        <strong>${escapeHtml(project.name)}</strong>
        <span>${projectScore(project)} value | ${trustScore(project)} trust | ${escapeHtml(project.category)}</span>
        <p>${escapeHtml(project.why)}</p>
      `;
      groups[decision].append(item);
    });
  });
}

function renderEvidenceLedger() {
  evidenceLedger.innerHTML = "";
  sortedProjects()
    .slice(0, 18)
    .forEach((project) => {
      const profile = projectProfile(project);
      const item = document.createElement("article");
      item.className = "evidence-card";
      item.innerHTML = `
        <div>
          <strong>${escapeHtml(project.name)}</strong>
          <span>${escapeHtml(profile.sourceConfidence)} confidence | ${escapeHtml(profile.researchStatus)}</span>
        </div>
        <ul>
          ${
            profile.evidence.length
              ? profile.evidence
                  .map((source) => `<li><a href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></li>`)
                  .join("")
              : "<li>No reliable source links yet.</li>"
          }
        </ul>
      `;
      evidenceLedger.append(item);
    });
}

function renderRiskAlerts() {
  riskAlertList.innerHTML = "";
  const alerts = sortedProjects()
    .filter((project) => projectDecision(project) !== "Support")
    .sort((a, b) => researchUrgency(b) - researchUrgency(a))
    .slice(0, 12);

  if (!alerts.length) {
    riskAlertList.append(emptyText("No active risk alerts."));
    return;
  }

  alerts.forEach((project) => {
    const profile = projectProfile(project);
    const item = document.createElement("article");
    item.className = "risk-card";
    item.innerHTML = `
      <strong>${escapeHtml(project.name)}</strong>
      <span>${projectDecision(project)} | ${projectScore(project)} value | ${trustScore(project)} trust | ${escapeHtml(profile.sourceConfidence)} confidence</span>
      <p>${escapeHtml(blockerSummary(project))}</p>
    `;
    riskAlertList.append(item);
  });
}

function renderFeedbackLinks() {
  document.querySelector("#submitProjectLink").href = issueUrl(
    "Project submission",
    `Project name:\n\nOfficial links:\n\nWhy it matters to Abstract:\n\nUser loop:\n\nEconomic logic:\n\nSafety notes:\n`
  );
  document.querySelector("#reportRiskLink").href = issueUrl(
    "Risk report",
    `Project or URL:\n\nRisk type:\n\nEvidence links:\n\nWhat could users lose?\n\nSuggested Abracast action:\n`
  );
  document.querySelector("#scoreChangeLink").href = issueUrl(
    "Score change request",
    `Project:\n\nCurrent label:\n\nRequested label:\n\nSources:\n\nWhy the score should change:\n\nSafety impact:\n`
  );

  feedbackRequestText.value = `I submitted Abracast for Abstract review and would appreciate feedback from builders, streamers, and ecosystem users.

Demo: ${demoUrl}
GitHub: ${githubRepoUrl}

What I need feedback on:
- Which Abstract projects should be added or rescored?
- Which Support / Watch / Avoid decisions are wrong?
- Which projects have missing safety or source evidence?
- What would make this more useful for streamers and new users?

Security beats growth: Abracast should not Support projects without strong value, trust, and source confidence.`;
}

function renderSprint() {
  const highUrgency = sortedProjects()
    .filter((project) => needsResearch(project))
    .sort((a, b) => researchUrgency(b) - researchUrgency(a))
    .slice(0, 3)
    .map((project) => project.name)
    .join(", ");

  const sprintItems = [
    {
      title: "Collect 3 feedback receipts",
      detail: "Ask builders or users to review the demo and screenshot useful comments for the next application cycle.",
    },
    {
      title: "Resolve top research risks",
      detail: highUrgency ? `Prioritize: ${highUrgency}.` : "No urgent risk queue items right now.",
    },
    {
      title: "Publish one weekly picks report",
      detail: "Use the report export and WEEKLY-REPORT-TEMPLATE.md to create a dated Abstract picks update.",
    },
    {
      title: "Add source links to Watch projects",
      detail: "Any project with Low or Medium-low confidence needs official links, docs, audit/badge evidence, or safer labeling.",
    },
    {
      title: "Turn questions into GitHub issues",
      detail: "Use project submission, risk report, and score change issues so the repository shows public collaboration.",
    },
    {
      title: "Improve one product feature",
      detail: "Best next feature: category-specific weights for games, DeFi, marketplace, tooling, and chance/risk apps.",
    },
  ];

  sprintGrid.innerHTML = "";
  sprintItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "sprint-card";
    card.innerHTML = `
      <span>${index + 1}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    `;
    sprintGrid.append(card);
  });
}

function issueUrl(title, body) {
  const params = new URLSearchParams({
    title,
    body,
  });
  return `${githubRepoUrl}/issues/new?${params.toString()}`;
}

function renderMetrics() {
  const projects = state.projects;
  const support = projects.filter((project) => projectDecision(project) === "Support").length;
  const avgTrust = projects.length
    ? Math.round(projects.reduce((total, project) => total + trustScore(project), 0) / projects.length)
    : 0;
  const queue = projects.filter((project) => needsResearch(project)).length;
  const health = projects.length
    ? Math.round(projects.reduce((total, project) => total + projectScore(project), 0) / projects.length)
    : 0;

  document.querySelector("#metricProjects").textContent = projects.length;
  document.querySelector("#metricSupport").textContent = support;
  document.querySelector("#metricTrust").textContent = avgTrust;
  document.querySelector("#metricQueue").textContent = queue;
  document.querySelector("#ecosystemScore").textContent = health;
}

function renderReport() {
  const support = sortedProjects()
    .filter((project) => projectDecision(project) === "Support")
    .slice(0, 8);
  const watch = sortedProjects()
    .filter((project) => projectDecision(project) === "Watch")
    .slice(0, 8);
  const avoid = sortedProjects()
    .filter((project) => projectDecision(project) === "Avoid")
    .slice(0, 8);

  reportText.value = `# Abracast Abstract Ecosystem Radar

## Executive Summary
- Projects tracked: ${state.projects.length}
- Support picks: ${support.length}
- Watch candidates: ${watch.length}
- Avoid / safety cases: ${avoid.length}
- Average trust: ${
    state.projects.length
      ? Math.round(state.projects.reduce((total, project) => total + trustScore(project), 0) / state.projects.length)
      : 0
  }
- Research queue: ${state.projects.filter((project) => needsResearch(project)).length}

## Thesis
Abstract wins when good apps create repeat users, streamable content, market activity, tips, trades, mints, and retention. Abracast helps identify the projects that support that flywheel and exposes the gaps that stop projects from becoming useful.

## Score Model
${scoreModel.map((metric) => `- ${metric.label} (${metric.weight}%): ${metric.meaning}`).join("\n")}

## Security And Trust Gate
Projects cannot receive Support unless both ecosystem value and trust are strong. Abracast checks official source trail, wallet safety, economic clarity, audit or verification evidence, and team transparency.
${trustModel.map((metric) => `- ${metric.label} (${metric.weight}%): ${metric.meaning}`).join("\n")}

## Support Now
${formatReportProjects(support)}

## Watch Closely
${formatReportProjects(watch)}

## Avoid For Now
${formatReportProjects(avoid)}

## Streamer Missions
${support.map((project) => `- ${project.name}: ${project.mission}`).join("\n") || "- No support missions yet"}

## Repeated Ecosystem Gaps
${[...new Set(state.projects.flatMap((project) => project.gaps))].slice(0, 12).map((gap) => `- ${gap}`).join("\n")}

## What Abstract Gains From This Radar
- Better attention routing toward high-quality apps
- Safer discovery for users before wallet interactions
- Streamer missions that turn app usage into content
- Clear feedback loops for builders
- A public record of why projects are supported, watched, or avoided
- Less wasted energy on hype-only or under-verified projects

## Research Queue
${researchQueue()}

## Source Confidence Rule
- High: official docs/site plus reliable ecosystem or third-party confirmation
- Medium: official or known ecosystem source exists, but important risk data is missing
- Medium-low / Low: directory-backed or fragmented source trail
- None: no reliable source trail or unsafe claim pattern

Support requires High source confidence, strong value, and strong trust. This prevents hype-only or under-verified apps from being promoted.

## Builder claim
Abracast is not just an XP tracker. It is an open-source ecosystem intelligence layer for Abstract: it helps users choose better apps, helps streamers produce useful ecosystem content, helps builders understand what to fix, and helps Abstract's best projects get attention.`;
}

function filteredProjects() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const decision = decisionFilter.value;

  return sortedProjects().filter((project) => {
    const text = `${project.name} ${project.category} ${project.summary} ${project.why} ${project.gaps.join(" ")}`.toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesCategory = category === "all" || project.category === category;
    const matchesDecision = decision === "all" || projectDecision(project) === decision;
    return matchesQuery && matchesCategory && matchesDecision;
  });
}

function sortedProjects() {
  const sort = sortFilter?.value || "value";
  const rankers = {
    value: (project) => projectScore(project),
    trust: (project) => trustScore(project),
    confidence: (project) => sourceConfidenceRank(projectProfile(project).sourceConfidence) * 25 + projectProfile(project).evidence.length,
    risk: (project) => researchUrgency(project),
  };
  const ranker = rankers[sort] || rankers.value;
  return [...state.projects].sort((a, b) => ranker(b) - ranker(a));
}

function selectedProject() {
  return state.projects.find((project) => project.id === selectedId) || state.projects[0];
}

function projectScore(project) {
  const weighted = scoreModel.reduce((total, metric) => {
    return total + clampScore(project.scores[metric.key]) * metric.weight;
  }, 0);
  return Math.round(weighted / 10);
}

function trustScore(project) {
  const profile = projectProfile(project);
  const weighted = trustModel.reduce((total, metric) => {
    return total + clampScore(profile.trust[metric.key]) * metric.weight;
  }, 0);
  return Math.round(weighted / 10);
}

function projectProfile(project) {
  const fallback = {
    userLoop: project.summary || "Needs user-loop research.",
    revenueModel: "Needs revenue and economic-activity research.",
    researchStatus: project.url ? "Submitted source only" : "Needs research",
    sourceConfidence: project.url ? "Low" : "None",
    badgeStatus: "No audit or badge evidence yet",
    evidence: project.url ? [{ label: "Submitted project link", url: project.url }] : [],
    risks: ["Needs source verification.", "Needs wallet-flow review.", "Needs community feedback."],
    trust: {
      official: project.url ? 4 : 1,
      wallet: 5,
      economy: 4,
      audit: 2,
      transparency: 4,
    },
  };

  const stored = project.profile || {};
  const known = projectProfiles[project.id] || {};
  return {
    ...fallback,
    ...known,
    ...stored,
    evidence: stored.evidence || known.evidence || fallback.evidence,
    risks: stored.risks || known.risks || fallback.risks,
    trust: {
      ...fallback.trust,
      ...(known.trust || {}),
      ...(stored.trust || {}),
    },
  };
}

function projectDecision(project) {
  const score = projectScore(project);
  const trust = trustScore(project);
  const confidence = sourceConfidenceRank(projectProfile(project).sourceConfidence);
  if (trust < 35) return "Avoid";
  if (score >= 78 && trust >= 65 && confidence >= 3) return "Support";
  if (score >= 55 && trust >= 45 && confidence >= 1) return "Watch";
  if (score >= 70 && trust >= 35) return "Watch";
  return "Avoid";
}

function sourceConfidenceRank(confidence) {
  const ranks = {
    None: 0,
    Low: 1,
    "Medium-low": 1,
    Medium: 2,
    High: 3,
  };
  return ranks[confidence] || 0;
}

function addProject() {
  const project = {
    id: slugify(document.querySelector("#projectName").value),
    name: document.querySelector("#projectName").value.trim(),
    category: document.querySelector("#projectCategory").value.trim(),
    url: document.querySelector("#projectUrl").value.trim(),
    portal: "Manual intake",
    summary: document.querySelector("#projectWhy").value.trim(),
    why: document.querySelector("#projectWhy").value.trim(),
    gaps: ["Needs deeper research.", "Needs public data verification.", "Needs user feedback."],
    mission: "Run a first-look review: explain the user loop, economic loop, safety notes, and whether it deserves support.",
    scores: {
      user: numberInput("#scoreUser"),
      economy: numberInput("#scoreEconomy"),
      replay: numberInput("#scoreReplay"),
      stream: numberInput("#scoreStream"),
      onboarding: numberInput("#scoreOnboarding"),
      safety: numberInput("#scoreSafety"),
      updates: numberInput("#scoreUpdates"),
      fit: numberInput("#scoreFit"),
    },
  };

  if (!project.name || !project.category || !project.why) return;

  state.projects = state.projects.filter((item) => item.id !== project.id);
  state.projects.push(project);
  selectedId = project.id;
  projectForm.reset();
  setDefaultIntakeScores();
  render();
}

function setDefaultIntakeScores() {
  ["#scoreUser", "#scoreSafety", "#scoreFit"].forEach((selector) => {
    document.querySelector(selector).value = 6;
  });
  ["#scoreEconomy", "#scoreReplay", "#scoreStream", "#scoreOnboarding", "#scoreUpdates"].forEach((selector) => {
    document.querySelector(selector).value = 5;
  });
}

function numberInput(selector) {
  return clampScore(Number(document.querySelector(selector).value));
}

function clampScore(value) {
  return Math.max(0, Math.min(10, Number(value) || 0));
}

function resetData() {
  state = { projects: seedProjects, selectedId: seedProjects[0].id };
  selectedId = state.selectedId;
  render();
}

function formatReportProjects(projects) {
  if (!projects.length) return "- None yet";
  return projects
    .map((project) => {
      const profile = projectProfile(project);
      return `- ${project.name} (${project.category}) - ${projectScore(project)} value / ${trustScore(project)} trust: ${project.why} Risk notes: ${profile.risks.join("; ")}`;
    })
    .join("\n");
}

function researchQueue() {
  const queue = sortedProjects()
    .filter((project) => needsResearch(project))
    .slice(0, 10);

  if (!queue.length) return "- No urgent research gaps.";

  return queue
    .map((project) => {
      const profile = projectProfile(project);
      return `- ${project.name}: ${projectScore(project)} value / ${trustScore(project)} trust, ${profile.sourceConfidence} confidence, ${profile.evidence.length} source(s), status: ${profile.researchStatus}. Blocker: ${blockerSummary(project)}`;
    })
    .join("\n");
}

function needsResearch(project) {
  const profile = projectProfile(project);
  return (
    projectDecision(project) !== "Support" ||
    trustScore(project) < 65 ||
    sourceConfidenceRank(profile.sourceConfidence) < 3 ||
    profile.evidence.length < 2
  );
}

function researchUrgency(project) {
  const profile = projectProfile(project);
  let urgency = 0;
  urgency += Math.max(0, 75 - trustScore(project));
  urgency += Math.max(0, 3 - sourceConfidenceRank(profile.sourceConfidence)) * 18;
  urgency += Math.max(0, 2 - profile.evidence.length) * 12;
  urgency += project.category.toLowerCase().includes("defi") ? 14 : 0;
  urgency += project.category.toLowerCase().includes("chance") ? 18 : 0;
  return urgency;
}

function blockerSummary(project) {
  const profile = projectProfile(project);
  const blockers = [];
  if (sourceConfidenceRank(profile.sourceConfidence) < 3) blockers.push("source confidence is not High");
  if (profile.evidence.length < 2) blockers.push("needs more independent sources");
  if (trustScore(project) < 65) blockers.push("trust score below Support threshold");
  if (profile.badgeStatus.toLowerCase().includes("audit not confirmed")) blockers.push("audit or badge not confirmed");
  if (project.category.toLowerCase().includes("defi")) blockers.push("DeFi contract/liquidity risk requires extra review");
  if (project.category.toLowerCase().includes("chance")) blockers.push("chance mechanics require fairness proof");
  return blockers.length ? blockers.join("; ") : "needs curator review before promotion";
}

async function copyPicks() {
  await copyText(reportText.value.split("## Streamer Missions")[0]);
  flashButton("#copyPicks", "Copied");
}

async function copyReport() {
  await copyText(reportText.value);
  flashButton("#copyReport", "Copied");
}

async function copyFeedbackRequest() {
  await copyText(feedbackRequestText.value);
  flashButton("#copyFeedbackRequest", "Copied");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    reportText.select();
  }
}

function downloadReport() {
  const blob = new Blob([reportText.value], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "abracast-ecosystem-radar-report.md";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  flashButton("#downloadReport", "Downloaded");
}

function flashButton(selector, text) {
  const button = document.querySelector(selector);
  const previous = button.textContent;
  button.textContent = text;
  window.setTimeout(() => {
    button.textContent = previous;
  }, 1200);
}

function emptyText(text) {
  const node = document.createElement("p");
  node.className = "muted";
  node.textContent = text;
  return node;
}

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
