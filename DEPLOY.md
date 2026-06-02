# Deploy Abracast

Abracast is a static app. It can be deployed on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

Current Netlify demo:

```txt
https://monumental-genie-008c26.netlify.app/
```

## GitHub Pages

1. Create a public GitHub repository.
2. Upload all files from `test3`.
3. Go to repository settings.
4. Open `Pages`.
5. Under `Build and deployment`, choose `GitHub Actions`.
6. Push or upload the files.
7. The included `.github/workflows/pages.yml` workflow will publish the site.
8. Use the generated Pages URL as the public demo.

Free URL shape:

```txt
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/
```

## Netlify

1. Create a new Netlify site.
2. Drag and drop the `test3` folder, or connect the GitHub repository.
3. Build command: leave empty.
4. Publish directory: `.`

Free URL shape:

```txt
https://YOUR-SITE-NAME.netlify.app
```

## Vercel

1. Import the GitHub repository.
2. Framework preset: Other.
3. Build command: leave empty.
4. Output directory: `.`

Free URL shape:

```txt
https://YOUR-PROJECT.vercel.app
```

## Cloudflare Pages

1. Create a Cloudflare Pages project.
2. Connect the GitHub repository.
3. Framework preset: None.
4. Build command: leave empty.
5. Output directory: `.`

Free URL shape:

```txt
https://YOUR-PROJECT.pages.dev
```

## Public demo checklist

- Open the deployed URL in a browser.
- Confirm project cards render.
- Confirm filters work.
- Confirm Evidence Ledger renders.
- Confirm Risk Alerts render.
- Confirm report Copy and Download work.
- Add the URL to `BUILDER-ROLE-PACKET.md`.
