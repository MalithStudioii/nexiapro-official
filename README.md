# 🚀 NexiaPro App Store & Official Mobility Portal

The official, ultra-premium web portal and application store for **NexiaPro™ Sri Lanka**. 
Showcases and distributes high-precision digital taxi meters, fleet administration tools, and driver utilities.

---

## 🌟 Key Features Built-in

1. **Dual Run / Download Pathways**:
   - **Option A: "Use Web App / PWA"**: Instant launch in any browser with zero installation, zero security alerts, and automatic updates.
   - **Option B: "Download Android APK"**: Direct `.apk` package distribution.
2. **Driver Security Helper (Warning Explainer)**:
   - Visual 3-step guide explaining to drivers why Android shows *"File might be harmful"* when downloading APKs outside the Play Store, assuring them it's 100% verified and safe.
3. **PWA "Add to Home Screen" Visual Tutorial**:
   - Step-by-step instructions for Chrome, Brave, and Samsung Internet.
4. **Interactive 5-Star Rating & Driver Recommendation System**:
   - Drivers can submit their own reviews, vehicle numbers, and star ratings.
   - Saves to `localStorage` and updates community ratings live.
5. **Interactive Live Meter Simulator**:
   - Test-drive the meter calculation engine (Distance, Speed, Waiting Time, Night Fare surcharge +15%, and Sample Bill) directly on the website before downloading.
6. **Bilingual Support (සිංහල / English)**:
   - Instant language switch with preference stored.
7. **PWA Ready**:
   - The Store itself includes a `manifest.json` and `sw.js` service worker, making it installable as a native app store on any device.

---

## 📂 Directory Structure

```
nexiapro-portal/
├── index.html        # Main App Store & Portal
├── style.css         # Glassmorphism, animations, glow effects
├── app.js            # Translations, simulator, ratings, modals
├── manifest.json     # PWA Store manifest
├── sw.js             # Service worker for offline caching
└── assets/
    ├── logo-neon.png # Futuristic NexiaPro Neon Logo
    ├── banner.jpg    # NexiaPro Brand Banner
    ├── logo.jpg      # Square brand avatar
    ├── icon-192.png  # PWA app icon 192x192
    ├── icon-512.png  # PWA app icon 512x512
    └── TukTuk_Meter_Pro_v2.4.apk # Direct download target
```

---

## 🚀 How to Deploy (Free on GitHub Pages / Firebase)

### Option 1: GitHub Pages
1. Push this folder to your repository.
2. Go to **Repository Settings** > **Pages**.
3. Select the branch and folder (or deploy as dedicated repo `nexiapro.github.io`).
4. Connect your custom domain e.g. `store.nexiapro.lk` or `nexiapro.com`.

### Option 2: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to 'nexiapro-portal'
firebase deploy
```

---
*© 2026 NexiaPro™. Built with pride in Sri Lanka 🇱🇰*
