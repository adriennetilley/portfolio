# adrienne.fyi

Static port of my Squarespace portfolio, hosted on GitHub Pages.
Plain HTML + one CSS file. No build step: edit a page's `index.html` and push.

## Moving off Squarespace (one time)

### 1. Get the images (do this before cancelling anything)
In Terminal, inside this folder:

```
bash get-images.sh
```

Then save one image by hand from adrienne.fyi (right-click > Save Image As…):
- the UNICEF project image on the homepage → `images/unicef-child-violence.png`

Optional preview: `python3 -m http.server 8000`, then open http://localhost:8000

### 2. Put it on GitHub (repo: adriennetilley/portfolio)
1. In GitHub Desktop, commit everything in this folder and **Push origin**.
2. On github.com: repo > Settings > Pages > Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. In a minute or two it's live at https://adriennetilley.github.io/portfolio/ — preview it there.
   Squarespace keeps running untouched until you change DNS.

### 3. Point adrienne.fyi at it
1. (Recommended) Verify the domain first: GitHub profile Settings > Pages > Add a domain. It gives you a
   TXT record to add in Squarespace. This stops anyone else from claiming your domain on GitHub.
2. Repo > Settings > Pages > Custom domain: `adrienne.fyi` > Save. (Do this only now — it makes GitHub redirect the preview URL to adrienne.fyi.)
3. In Squarespace: Domains > adrienne.fyi > DNS settings.
   - Delete the Squarespace default records.
   - Add four **A** records, host `@`:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a **CNAME** record, host `www`, value `adriennetilley.github.io`
4. Wait (minutes to 24h). When adrienne.fyi loads the new site, tick **Enforce HTTPS** in Settings > Pages.

### 4. Cancel the Squarespace *website* plan, not the domain
Only after the new site is loading at adrienne.fyi. Confirm in Squarespace that the domain renews on
its own before you cancel.
