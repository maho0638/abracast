# Free Publish Checklist

Use one of these free paths.

## Fastest: Netlify Drop

1. Open `https://app.netlify.com/drop`.
2. Drag the `test3` folder into the page.
3. Wait for Netlify to generate a URL.
4. Rename the site if you want.
5. Put the URL into `BUILDER-ROLE-PACKET.md`.

## Best for open source: GitHub Pages

1. Create a public GitHub repository named `abracast`.
2. Upload all files from `test3`.
3. Go to `Settings > Pages`.
4. Select `GitHub Actions`.
5. Wait for the Pages workflow to finish.
6. Public demo will be:

```txt
https://YOUR_GITHUB_USERNAME.github.io/abracast/
```

## Good alternative: Cloudflare Pages

1. Create a Pages project.
2. Connect the GitHub repository.
3. Build command: empty.
4. Output directory: `.`

## After publishing

Update:

- `BUILDER-ROLE-PACKET.md`
- `README.md`
- `SOURCES.md`

Add:

```txt
Demo: YOUR_PUBLIC_URL
GitHub: YOUR_REPO_URL
```
