# YouTube 2005 Interface Prototype

![YouTube logo](./assets/images/YouTube-Logo.wine.svg)

A static HTML/CSS prototype of an early YouTube-style interface prepared for an HCI assignment. The project keeps the retro 2005 visual style while adding working mock navigation, filled demo pages, and playable educational videos from the home page.

Prepared by: **Adi**

Email: **1one.hero.one1@gmail.com**

## Overview

This prototype demonstrates a simplified old YouTube user experience:

- home page with featured video thumbnails;
- separate watch pages for uploaded videos;
- mock profile, login, signup, messages, favorites, upload, search, browse, and channel pages;
- educational demo videos available directly from the home page;
- static files only, so it can be deployed quickly on Vercel or GitHub Pages.

> [!NOTE]
> This is an academic interface prototype. Login, signup, upload, comments, and profile data are mock interactions and do not use a backend.

## Featured Videos

The home page links to four playable demo videos:

| Title | Page | Category |
| --- | --- | --- |
| Room Cleanup Safety | `watch.html` | Education |
| Expression Practice | `watch-expression.html` | Education |
| Character Scale Study | `watch-character.html` | Education |
| YouTube Clip | `watch-outdoor.html` | Education |

Most demo videos are stored locally in `assets/videos/`, with thumbnail posters in `assets/images/`. The final YouTube Clip page embeds the first 30 seconds from YouTube instead of re-uploading the source video.

## Pages

- `index.html` - home page with search, tags, and featured videos
- `watch.html` - main educational watch page
- `watch-expression.html` - second video watch page
- `watch-character.html` - third video watch page
- `watch-outdoor.html` - fourth video watch page
- `profile.html` - filled mock user profile
- `login.html` and `signup.html` - mock auth pages that lead to the profile
- `my-videos.html`, `favorites.html`, `messages.html`, `upload.html` - account pages
- `search.html`, `browse.html`, `channel.html`, `tags.html` - discovery pages
- `about.html`, `contact.html`, `terms.html`, `privacy.html`, `rss.html`, `help.html` - support pages

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server:

```bash
python -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Deploy

This project is ready for Vercel:

1. Import the GitHub repository into Vercel.
2. Use the default static site settings.
3. Deploy from the `main` branch.

No build command is required.

## Attribution

This project is based on the retro layout from:

- [Senanu97/youtube-2005-design-remake](https://github.com/Senanu97/youtube-2005-design-remake)

Logo attribution:

- [YouTube logo on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:YouTube_Logo_(2013-2017).svg), public domain via Wikimedia Commons

Thumbnail posters and demo content are local assets prepared for this academic prototype.
