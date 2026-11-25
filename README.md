# Shanghai Medical & Optical — Website Preview

Responsive product-catalogue website for Shanghai Medical and Optical Equipment Manufacturers and Supplies.

## Included
- Responsive homepage, About, Products, Optical & Lenses, and Contact sections
- Product category filters and product search
- Product-specific WhatsApp quotation enquiry buttons
- General WhatsApp contact links
- No shopping cart, checkout, database, or paid form service
- Plain HTML, CSS and JavaScript; no build step required

## WhatsApp configuration
The number is configured in `assets/script.js`:

```js
const WHATSAPP_NUMBER = "254742664335";
```

Use digits only, including country code, without `+`, spaces or punctuation.

## Important before production
- Product names, categories, descriptions and photos are illustrative placeholders for the preview. Confirm the client's actual catalogue, specifications, product availability and approved wording before production.
- The company has not provided verified address, email, registration details or logo, so none have been invented.
- Product and hero photography loads from Unsplash. Replace with client-approved/licensed product photography before production.
- The WhatsApp number is the one supplied for this project.

## Test locally
Open `index.html` in a browser. Internet access is required for Google Fonts and remote demonstration photos.

## Publish recommendation: Netlify connected to GitHub
GitHub Pages is intended for personal/project pages and GitHub restricts its use as free hosting for online businesses or commercial transactions. For this commercial client website, use Netlify's free tier for the public preview/hosting, and GitHub for source control.

1. Create a GitHub account if you do not already have one.
2. Create a repository named `shanghai-medical-website`.
3. Extract the ZIP. Upload the *contents* of the project folder so `index.html` is at the repository root.
4. Commit the files to the `main` branch.
5. Sign in at https://www.netlify.com/ and choose Add new project / Import an existing project.
6. Connect GitHub and select `shanghai-medical-website`.
7. Leave the build command blank. Set the publish directory to `.` (repository root).
8. Deploy. Netlify will provide a public `*.netlify.app` address.
9. Test on desktop and mobile, including each product enquiry button and WhatsApp number.

Free-tier limits and terms apply; check current Netlify plan details before production use.

## GitHub Pages (personal/non-commercial project testing only)
For a personal or non-commercial demo, open repository Settings → Pages → Build and deployment → Deploy from a branch → select `main` and `/ (root)` → Save. GitHub will show the published URL after deployment.
