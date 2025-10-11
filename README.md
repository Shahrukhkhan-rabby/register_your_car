# Welcome to your Register your card

## Project info

**URL**: https://register-your-car-xi.vercel.app/

## How can I edit this code?

There are several ways of editing your application.


**Use Register Your Car**

Simply visit the [Register Your Car Project](https://register-your-car-xi.vercel.app/) and start prompting.

Changes made via Register Your Car will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Register Your Car.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/MdSamsuzzohaShayon/register-your-car)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/MdSamsuzzohaShayon/register-your-car.git

# Step 2: Navigate to the project directory.
cd register-your-car

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Register Your Car](https://Register Your Car.dev/projects/c287dd6b-61dd-47c5-a54d-4b803fac1614) and click on Share -> Publish.

## Can I connect a custom domain to my Register Your Car project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.Register Your Car.dev/tips-tricks/custom-domain#step-by-step-guide)



## Colors
#5f9a26 → 🍃 Fresh Green
#1d253f → 🌌 Dark Blue-Gray / Charcoal Navy
#d2d5da → ⚪ Light Gray / Silver






Shape: Circular or shield outline (like a seal of trust).

Color Suggestions
Primary: Red + Yellow (Spain)
Secondary: Blue (EU stripe on plates)
Neutral: Black/Gray (for text and plate outline)






### Paste this code as high in the <head> of the page as possible:
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRGL9G9Z');</script>
<!-- End Google Tag Manager -->








###  Paste this code immediately after the opening <body> tag:
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRGL9G9Z"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->





---

### ✅ 1. **Sitemap & Robots**

* Make sure your website has:

  * **/sitemap.xml** → a list of all public pages: Home, Services, Contact, Privacy, Terms, Cookies.
  * **/robots.txt** → allows search engines to index those pages (and blocks private ones if needed).
* Test them in browser:

  * `https://register-your-car.webdevlab.org/sitemap.xml`
  * `https://register-your-car.webdevlab.org/robots.txt`

---

### ✅ 2. **Tracking (Google Analytics + Tag Manager)**

* Install **Google Tag Manager (GTM)** and connect it to **Google Analytics 4 (GA4)**.
* Add “events” (tracking triggers) so we know when users:

  1. Submit **Instant Quote** form
  2. Submit **Contact** form
  3. Click on **WhatsApp** button

---

### ✅ 3. **SendGrid Deliverability**

* Connect your forms (Instant Quote + Contact) so they send emails to:
  `info@register-your-car.com` using **SendGrid**.
* Do 2 test submissions (1 Quote + 1 Contact) and confirm that you receive the emails.

---

### ✅ 4. **Structured Data (SEO)**

* Add **JSON-LD schema** for better Google results:

  * **Organization / LocalBusiness** → on every page
  * **Service** → on the Services page
  * **FAQPage** → if you have FAQs on any page

---

### ✅ 5. **Headings & Phone Links**

* Make sure every page has a clear **H1 / H2** with the right keywords
  Example: “Register Your Car in Spain”
* Make phone numbers clickable with `tel:` links so mobile users can tap to call.
* Ensure WhatsApp links work on **both desktop & mobile**, and track clicks in GTM.

---
