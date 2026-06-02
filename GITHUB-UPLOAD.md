# Upload Abracast To GitHub

This machine does not currently expose `git` or `gh` in PATH, so use the browser upload flow.

## 1. Create repository

1. Open `https://github.com/new`.
2. Repository name: `abracast`
3. Description:

```txt
Open-source Abstract Ecosystem Radar for finding useful, safe, streamable projects.
```

4. Visibility: Public
5. Do not add README, license, or gitignore from GitHub. The project already has files.
6. Click `Create repository`.

## 2. Upload files

1. On the empty repository page, click `uploading an existing file`.
2. Drag everything inside the local `test3` folder into GitHub.
3. Make sure hidden folders/files are included:

```txt
.github
.nojekyll
```

4. Commit message:

```txt
Initial Abracast ecosystem radar release
```

5. Click `Commit changes`.

## 3. Enable GitHub Pages

1. Go to `Settings`.
2. Open `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. The included workflow will deploy the static app.

## 4. Repository links

After upload, links should look like:

```txt
GitHub: https://github.com/YOUR_USERNAME/abracast
GitHub Pages: https://YOUR_USERNAME.github.io/abracast/
Netlify demo: https://monumental-genie-008c26.netlify.app/
```

## 5. After upload

Send the GitHub repository URL back so it can be added to:

- `README.md`
- `BUILDER-ROLE-PACKET.md`
- Discord Builder message
