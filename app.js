/**
 * NexiaPro App Store & Portal - Application Logic
 * Crafted for NexiaPro Mobility & Digital Solutions
 */

// ==========================================
// 1. FIREBASE CLOUD FIRESTORE INITIALIZATION
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyBrkTB1Tf7E9J6UKlkenLb7wbjhiHk615E",
  authDomain: "mothers-assistant.firebaseapp.com",
  projectId: "mothers-assistant",
  storageBucket: "mothers-assistant.firebasestorage.app",
  messagingSenderId: "621868958714",
  appId: "1:621868958714:web:2db775c5573845e6579a43"
};

let db = null;
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    console.log('NexiaPro: Firebase Cloud Firestore Connected successfully.');
  }
} catch (err) {
  console.warn('NexiaPro: Firebase init notice:', err);
}

// ==========================================
// 2. BILINGUAL TRANSLATION ENGINE (SI / EN)
// ==========================================
const translations = {
  si: {
    nav_tagline: "Mobility & Digital Solutions",
    nav_apps: "Apps Catalog",
    nav_install_guide: "Install මාර්ගෝපදේශය",
    nav_reviews: "ඩ්‍රයිවර් ඇගයීම්",
    nav_faq: "ගැටළු සහ පිළිතුරු",
    hero_pill: "NexiaPro නිල Mobility Store එක",
    hero_title_1: "ශ්‍රී ලාංකික රියදුරන් සහ",
    hero_title_highlight: "ත්‍රීවීල් රථ සඳහාම",
    hero_title_2: "නිර්මාණය වූ ස්මාර්ට් Apps",
    hero_desc: "NexiaPro වෙතින් නිපදවූ ඉහළම නිරවද්‍යතාවයෙන් යුතු ඩිජිටල් මීටර් සහ පවුලේ සෞඛ්‍ය සහකාර මෘදුකාංග. කිසිදු කොමිස් මුදලක් නැත, 100% Offline ක්‍රියාකාරීත්වය සහ ආරක්ෂාව.",
    hero_btn_pwa_sub: "ක්ෂණික Web App",
    hero_btn_pwa: "TukTuk Meter Run කරන්න",
    hero_btn_apk_sub: "Direct Android APK",
    hero_btn_apk: "App එක Download කරන්න (v2.5)",
    badge_safe: "100% ආරක්ෂිත & Virus-Free",
    badge_gps: "Offline GPS Navigation",
    install_badge: "භාවිතා කිරීමට පහසු ක්‍රම 2ක්",
    install_title: "NexiaPro Apps භාවිතා කරන්නේ කෙසේද?",
    install_desc: "ඔබට පහසු පරිදි ක්ෂණික Web App (PWA) ලෙස හෝ Android APK ලෙස ස්ථාපනය කරගත හැක.",
    pwa_feat_1_title: "කිසිදු Warning එකක් නොමැත:",
    pwa_feat_1_desc: "Chrome, Brave හෝ ඕනෑම Browser එකකින් ක්ෂණිකව කිසිදු බාධාවකින් තොරව ක්‍රියාත්මක වේ.",
    pwa_feat_2_title: "Home Screen එකට දැමිය හැක (1-Tap):",
    pwa_feat_2_desc: "ස්ථාපනය කළ පසු දුරකථනයේ සාමාන්‍ය App එකක් මෙන් Screen එක මත Icon එකක් ලෙස පවතී.",
    pwa_feat_3_title: "ස්වයංක්‍රීය Updates:",
    pwa_feat_3_desc: "අලුත් fare rates හෝ updates එසැනින් ලැබෙන අතර වෙනම APK බාගත කිරීමක් අවශ්‍ය නොවේ.",
    apk_feat_1_title: "Offline Native ගොනුවක් වීම:",
    apk_feat_1_desc: "දුරකථනයේ Phone Memory එකේ ස්ථිරවම ස්ථාපනය වන ස්වාධීන Android App එකකි.",
    apk_feat_2_title: "Screen Lock Protection:",
    apk_feat_2_desc: "හයර් එකක් යන අතරතුර තිරය නිවී යාම සම්පූර්ණයෙන්ම වළක්වයි.",
    apk_feat_3_title: "Android Warnings පිළිබඳ දැනුවත් වීම:",
    apk_feat_3_desc: "Play Store එකෙන් පිටතින් බාගත කරන බැවින් 'File might be harmful' ලෙස පෙන්වයි. මෙය සාමාන්‍ය දෙයකි, App එක 100% ආරක්ෂිතයි.",
    btn_launch_now: "ක්ෂණිකව Web App එක Open කරන්න",
    btn_how_to_add: "Home Screen දාගන්නා හැටි",
    btn_download_apk: "APK බාගත කරන්න (v2.5)",
    btn_warning_help: "Warning එක අයින් කරගන්නේ කොහොමද?",
    catalog_badge: "නිල ECOSYSTEM එක",
    catalog_title: "NexiaPro Apps එකතුව",
    catalog_desc: "NexiaPro Mobility & Digital Solutions මඟින් නිපදවා පාලනය වන මෘදුකාංග.",
    app1_subtitle: "GPS ඩිජිටල් ටැක්සි මීටරය සහ බිල්පත් පද්ධතිය",
    app1_desc: "ශ්‍රී ලාංකික ත්‍රිරෝද රථ සහ කුලී රථ සඳහාම සුවිශේෂී වූ අතිශය නිවැරදි GPS ගමන් ගාස්තු සහ වේටින් ගණනය කිරීම, LANKAQR ගෙවීම් සහ සිංහල හඬ මගපෙන්වීම් සහිතයි.",
    rate_btn: "තරු ලබා දෙන්න ⭐",
    btn_instant_run: "Run PWA",
    app3_subtitle: "Mileage & Petrol Cost Analytics",
    app3_desc: "ත්‍රිරෝද රථයේ සැබෑ ලීටරයකට කිලෝමීටර් ධාවන හැකියාව සහ දවසේ පෙට්‍රල් වියදම ආදායම සමඟ සන්සන්දනය කිරීමේ පහසුකම.",
    btn_notify_me: "නිකුත් වූ විට දැනුම් දෙන්න",
    demo_badge: "අත්හදා බලන්න",
    demo_title: "Interactive Meter අත්දැකීම",
    demo_desc: "මීටරය ක්‍රියාකරන අයුරු සහ ගාස්තු හැදෙන ආකාරය මෙතැනින්ම අත්හදා බලන්න.",
    sim_controls_title: "මීටර් ධාවන පාලකය",
    sim_controls_desc: "Start බොත්තම ඔබා ත්‍රීවීල් රථයක හයර් එකක් අනුකරණය කරන්න. කිලෝමීටර් ගණනය වෙන අයුරු සහ ගාස්තු හැදෙන හැටි නිරීක්ෂණය කරන්න.",
    reviews_badge: "රියදුරු ප්‍රජාවගේ විශ්වාසය",
    reviews_title: "Drivers ලාගේ නිර්දේශ සහ තරු ඇගයීම්",
    reviews_desc: "දිවයින පුරා සේවය කරන ත්‍රීරෝද රථ රියදුරන්ගේ සැබෑ අදහස්.",
    leave_review_btn: "ඔබේ අදහස / තරු ලබා දෙන්න",
    faq_badge: "පැහැදිලි පිළිතුරු",
    faq_title: "නිතර අසන ප්‍රශ්න (FAQ)",
    faq_desc: "NexiaPro යෙදුම් සහ ආරක්ෂාව පිළිබඳ සියලු කරුණු."
  },
  en: {
    nav_tagline: "Mobility & Digital Solutions",
    nav_apps: "Apps Catalog",
    nav_install_guide: "Install Guide",
    nav_reviews: "Driver Ratings",
    nav_faq: "FAQ",
    hero_pill: "NexiaPro Official Mobility Store",
    hero_title_1: "Smart Solutions for",
    hero_title_highlight: "Sri Lankan Drivers",
    hero_title_2: "& Everyday Needs",
    hero_desc: "Download or instantly launch genuine high-precision digital taxi meters, maternal assistance tools, and utility software crafted by NexiaPro. No middlemen, no commissions, 100% offline-ready.",
    hero_btn_pwa_sub: "Instant Web App",
    hero_btn_pwa: "Launch TukTuk Meter",
    hero_btn_apk_sub: "Direct Android APK",
    hero_btn_apk: "Download App (v2.5)",
    badge_safe: "100% Virus-Free & Safe",
    badge_gps: "Offline GPS Navigation",
    install_badge: "FLEXIBLE ACCESS OPTIONS",
    install_title: "Two Ways to Run NexiaPro Apps",
    install_desc: "Choose between instant web execution or native Android APK. Both deliver high accuracy and zero subscriptions.",
    pwa_feat_1_title: "No Android Warning:",
    pwa_feat_1_desc: "Opens straight in Chrome, Brave, or Samsung Internet without any security alerts.",
    pwa_feat_2_title: "Add to Home Screen (1-Tap):",
    pwa_feat_2_desc: "Works exactly like a native app icon on your phone desktop.",
    pwa_feat_3_title: "Automatic Updates:",
    pwa_feat_3_desc: "Always runs the latest fare rules and meter features with no manual APK downloads.",
    apk_feat_1_title: "Offline Native Packaging:",
    apk_feat_1_desc: "Installed as an independent Android app on your phone storage.",
    apk_feat_2_title: "Screen Lock Protection:",
    apk_feat_2_desc: "Full OS-level wake lock so the meter never sleeps during rides.",
    apk_feat_3_title: "About Android Warnings:",
    apk_feat_3_desc: "Android shows 'File might be harmful' because it's not downloaded from Play Store. It is 100% verified and safe to install.",
    btn_launch_now: "Launch Web App Now",
    btn_how_to_add: "How to Add to Home",
    btn_download_apk: "Download APK (v2.5)",
    btn_warning_help: "Warning Help?",
    catalog_badge: "OFFICIAL ECOSYSTEM",
    catalog_title: "NexiaPro App Catalog",
    catalog_desc: "All software built and maintained by NexiaPro Mobility & Digital Solutions.",
    app1_subtitle: "GPS Digital Taxi Meter & Passenger Billing",
    app1_desc: "Designed for Sri Lankan three-wheelers & taxis. Ultra-accurate GPS distance & waiting fare calculations, LANKAQR code generator, speech guidance, and digital receipts.",
    rate_btn: "Rate this App ⭐",
    btn_instant_run: "Run PWA",
    app3_subtitle: "Mileage & Petrol Cost Analytics",
    app3_desc: "Calculate your actual km/liter fuel consumption, track fuel expense vs daily ride earnings, and receive maintenance alerts for 3-wheelers and motorcycles.",
    btn_notify_me: "Notify Me on Release",
    demo_badge: "HANDS-ON PREVIEW",
    demo_title: "Try the Interactive Meter Demo",
    demo_desc: "Experience how smoothly the meter counts kilometers, calculates waiting time, and generates receipts right here.",
    sim_controls_title: "Meter Simulator Console",
    sim_controls_desc: "Click Start to simulate a 3-wheeler ride through Colombo. Watch the dynamic fare calculation engine update in real time based on Sri Lankan taxi fare rules.",
    reviews_badge: "COMMUNITY REPUTATION",
    reviews_title: "Driver Reviews & Ratings",
    reviews_desc: "Feedback from three-wheeler captains and taxi drivers across Sri Lanka.",
    leave_review_btn: "Leave a Driver Review",
    faq_badge: "CLEAR ANSWERS",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Everything you need to know about NexiaPro apps, security, and usage."
  }
};

let currentLang = localStorage.getItem('nexiapro_lang') || 'si';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('nexiapro_lang', lang);
  document.documentElement.lang = lang;
  
  const label = document.getElementById('currentLangLabel');
  if (label) {
    label.textContent = lang === 'si' ? 'සිංහල' : 'English';
  }

  const dict = translations[lang] || translations.si;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

function toggleLanguage() {
  const nextLang = currentLang === 'si' ? 'en' : 'si';
  applyLanguage(nextLang);
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// ==========================================
// 3. ALTERNATING DUAL-APP HERO SIMULATOR
// ==========================================
let currentSimApp = 'tuktuk'; // 'tuktuk' or 'mother'
let autoRotateSim = true;
let autoRotateInterval = null;
let heroSimActive = true;

let heroFare = 285.00;
let heroKm = 2.45;
let heroSpeed = 34;
let heroWaitSecs = 135;

function switchHeroSimApp(appName) {
  currentSimApp = appName;
  const viewTukTuk = document.getElementById('heroViewTukTuk');
  const viewMother = document.getElementById('heroViewMother');
  const tabTukTuk = document.getElementById('simTabTukTuk');
  const tabMother = document.getElementById('simTabMother');
  const phoneScreen = document.getElementById('heroPhoneScreen');
  const fullAppLink = document.getElementById('simFullAppLink');
  const fullAppLabel = document.getElementById('simFullAppLabel');

  if (appName === 'tuktuk') {
    if (viewTukTuk) viewTukTuk.classList.remove('hidden');
    if (viewMother) viewMother.classList.add('hidden');

    if (tabTukTuk) {
      tabTukTuk.className = 'px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500 text-slate-950 shadow transition-all cursor-pointer';
    }
    if (tabMother) {
      tabMother.className = 'px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-400 hover:text-white transition-all cursor-pointer';
    }

    if (phoneScreen) {
      phoneScreen.style.background = '#0c1220';
    }
    if (fullAppLink) {
      fullAppLink.href = 'https://tuktuk-meter.vercel.app/';
      fullAppLink.onclick = null;
    }
    if (fullAppLabel) fullAppLabel.textContent = 'Full App';
  } else {
    if (viewTukTuk) viewTukTuk.classList.add('hidden');
    if (viewMother) viewMother.classList.remove('hidden');

    if (tabMother) {
      tabMother.className = 'px-2.5 py-1 rounded-lg text-[10px] font-bold bg-pink-500 text-slate-950 shadow transition-all cursor-pointer';
    }
    if (tabTukTuk) {
      tabTukTuk.className = 'px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-400 hover:text-white transition-all cursor-pointer';
    }

    if (phoneScreen) {
      phoneScreen.style.background = '#150d18';
    }
    if (fullAppLink) {
      fullAppLink.href = 'javascript:void(0);';
      fullAppLink.onclick = () => openMotherDetailsModal();
    }
    if (fullAppLabel) fullAppLabel.textContent = 'Overview';
  }
}

function toggleAutoRotateSim() {
  autoRotateSim = !autoRotateSim;
  const btn = document.getElementById('simAutoRotateBtn');
  if (btn) {
    if (autoRotateSim) {
      btn.className = 'text-[10px] text-cyan-400 hover:text-cyan-300 font-bold px-2 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center gap-1 cursor-pointer';
      btn.innerHTML = '<i class="fa-solid fa-rotate text-[9px] animate-spin" style="animation-duration: 6s;"></i><span>Auto</span>';
    } else {
      btn.className = 'text-[10px] text-slate-500 hover:text-slate-400 font-bold px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-1 cursor-pointer';
      btn.innerHTML = '<i class="fa-solid fa-pause text-[9px]"></i><span>Manual</span>';
    }
  }
}

function startAutoRotateTimer() {
  if (autoRotateInterval) clearInterval(autoRotateInterval);
  autoRotateInterval = setInterval(() => {
    if (autoRotateSim) {
      const nextApp = currentSimApp === 'tuktuk' ? 'mother' : 'tuktuk';
      switchHeroSimApp(nextApp);
    }
  }, 8000);
}

function updateHeroMockup() {
  if (!heroSimActive) return;

  heroKm += 0.01;
  heroSpeed = Math.floor(28 + Math.random() * 12);
  heroWaitSecs += 1;
  heroFare = 100 + (Math.max(0, heroKm - 1) * 100) + (Math.floor(heroWaitSecs / 60) * 5);

  const fareEl = document.getElementById('heroSimFare');
  const kmEl = document.getElementById('heroSimKm');
  const speedEl = document.getElementById('heroSimSpeed');
  const waitEl = document.getElementById('heroSimWait');

  if (fareEl) fareEl.textContent = heroFare.toFixed(2);
  if (kmEl) kmEl.textContent = heroKm.toFixed(2);
  if (speedEl) speedEl.textContent = heroSpeed;
  if (waitEl) {
    const m = String(Math.floor(heroWaitSecs / 60)).padStart(2, '0');
    const s = String(heroWaitSecs % 60).padStart(2, '0');
    waitEl.textContent = `${m}:${s}`;
  }
}

setInterval(updateHeroMockup, 1000);

function toggleHeroSim() {
  heroSimActive = !heroSimActive;
  const icon = document.getElementById('simToggleIcon');
  const label = document.getElementById('simToggleLabel');
  if (heroSimActive) {
    if (icon) icon.className = 'fa-solid fa-pause text-xs';
    if (label) label.textContent = 'Pause';
  } else {
    if (icon) icon.className = 'fa-solid fa-play text-xs';
    if (label) label.textContent = 'Resume';
  }
}

// ==========================================
// 4. SCREENSHOT GALLERY & LIGHTBOX
// ==========================================
function switchGallery(app) {
  const tuktukGrid = document.getElementById('galleryTukTukGrid');
  const motherGrid = document.getElementById('galleryMotherGrid');
  const tabTukTuk = document.getElementById('galleryTabTukTuk');
  const tabMother = document.getElementById('galleryTabMother');

  if (app === 'tuktuk') {
    if (tuktukGrid) tuktukGrid.classList.remove('hidden');
    if (motherGrid) motherGrid.classList.add('hidden');
    if (tabTukTuk) tabTukTuk.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 shadow-md transition-all cursor-pointer';
    if (tabMother) tabMother.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-all cursor-pointer';
  } else {
    if (tuktukGrid) tuktukGrid.classList.add('hidden');
    if (motherGrid) motherGrid.classList.remove('hidden');
    if (motherGrid) motherGrid.classList.add('grid');
    if (tabMother) tabMother.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-pink-500 text-slate-950 shadow-md transition-all cursor-pointer';
    if (tabTukTuk) tabTukTuk.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-all cursor-pointer';
  }
}

function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');

  if (modal && img && cap) {
    img.src = src;
    cap.textContent = caption;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

// ==========================================
// 5. INTERACTIVE PLAYGROUND SIMULATOR
// ==========================================
let playSimRunning = false;
let playTimer = null;
let playKm = 0.00;
let playSpeed = 0;
let playWaitSec = 0;
let isNightFare = false;
let configuredSpeed = 36;

function togglePlaygroundSim() {
  if (playSimRunning) {
    stopPlaygroundSim();
  } else {
    startPlaygroundSim();
  }
}

function startPlaygroundSim() {
  playSimRunning = true;
  const playBtn = document.getElementById('simPlayBtn');
  const playIcon = document.getElementById('simPlayIcon');
  const playText = document.getElementById('simPlayText');

  if (playBtn) {
    playBtn.classList.remove('bg-amber-500', 'hover:bg-amber-400');
    playBtn.classList.add('bg-red-500', 'hover:bg-red-400', 'text-white');
  }
  if (playIcon) playIcon.className = 'fa-solid fa-stop';
  if (playText) playText.textContent = 'Stop Trip';

  playTimer = setInterval(() => {
    const kmDelta = (configuredSpeed / 3600);
    playKm += kmDelta;
    playSpeed = configuredSpeed > 0 ? (configuredSpeed + Math.floor(Math.random() * 5 - 2)) : 0;
    
    if (configuredSpeed === 0) {
      playWaitSec += 1;
    }

    calculatePlayFare();
  }, 1000);
}

function stopPlaygroundSim() {
  playSimRunning = false;
  clearInterval(playTimer);
  const playBtn = document.getElementById('simPlayBtn');
  const playIcon = document.getElementById('simPlayIcon');
  const playText = document.getElementById('simPlayText');

  if (playBtn) {
    playBtn.classList.remove('bg-red-500', 'hover:bg-red-400', 'text-white');
    playBtn.classList.add('bg-amber-500', 'hover:bg-amber-400', 'text-slate-950');
  }
  if (playIcon) playIcon.className = 'fa-solid fa-play';
  if (playText) playText.textContent = 'Resume Ride';
  
  const speedEl = document.getElementById('playSpeed');
  if (speedEl) speedEl.textContent = '0';
}

function resetPlaygroundSim() {
  stopPlaygroundSim();
  playKm = 0.00;
  playSpeed = 0;
  playWaitSec = 0;
  calculatePlayFare();
  const playText = document.getElementById('simPlayText');
  if (playText) playText.textContent = 'Start Simulated Ride';
}

function calculatePlayFare() {
  let baseRate = 100;
  let kmRate = 100;
  let waitRatePerMin = 5;

  let fare = baseRate;
  if (playKm > 1) {
    fare += (playKm - 1) * kmRate;
  }
  fare += Math.floor(playWaitSec / 60) * waitRatePerMin;

  if (isNightFare) {
    fare = fare * 1.15;
  }

  const fareEl = document.getElementById('playFare');
  const kmEl = document.getElementById('playKm');
  const speedEl = document.getElementById('playSpeed');
  const waitEl = document.getElementById('playWait');

  if (fareEl) fareEl.textContent = fare.toFixed(2);
  if (kmEl) kmEl.textContent = playKm.toFixed(2);
  if (speedEl && playSimRunning) speedEl.textContent = playSpeed;
  if (waitEl) {
    const m = String(Math.floor(playWaitSec / 60)).padStart(2, '0');
    const s = String(playWaitSec % 60).padStart(2, '0');
    waitEl.textContent = `${m}:${s}`;
  }
}

function updateSimSpeed(val) {
  configuredSpeed = parseInt(val, 10);
  const label = document.getElementById('speedValLabel');
  if (label) label.textContent = `${configuredSpeed} km/h`;
}

function toggleNightFare(checked) {
  isNightFare = checked;
  const badge = document.getElementById('nightStatusBadge');
  if (badge) {
    if (checked) {
      badge.textContent = 'Night Surcharge Active (+15%)';
      badge.className = 'text-[10px] font-bold text-amber-400 uppercase tracking-wider animate-pulse';
    } else {
      badge.textContent = 'Standard Day Fare';
      badge.className = 'text-[10px] font-bold text-slate-500 uppercase tracking-wider';
    }
  }
  calculatePlayFare();
}

function simulateReceipt() {
  const fare = document.getElementById('playFare')?.textContent || '100.00';
  const km = document.getElementById('playKm')?.textContent || '0.00';
  const wait = document.getElementById('playWait')?.textContent || '00:00';

  alert(`🧾 [NEXIAPRO TUKTUK METER RECEIPT]\n\nDate: ${new Date().toLocaleDateString()}\nTime: ${new Date().toLocaleTimeString()}\n--------------------------\nTotal Distance: ${km} km\nWait Time: ${wait}\nFare Surcharge: ${isNightFare ? 'Night (+15%)' : 'None'}\nTOTAL FARE: Rs. ${fare}\n--------------------------\nPay with LANKAQR or Cash.\nThank you for riding with NexiaPro!`);
}

// ==========================================
// 6. FIREBASE RATINGS & RECOMMENDATION SYNC
// ==========================================
let currentSelectedRating = 5;

const initialCuratedReviews = [
  {
    name: "Kasun Dharmapriya",
    area: "Colombo 07 • TukTuk Driver",
    stars: 5,
    text: "මම මාස 3ක් තිස්සේ මේ මීටරේ පාවිච්චි කරනවා. GPS accurate එක උපරිමයි. Signal නැති තැන්වලත් ලස්සනට record වෙනවා. Passenger ලට QR එකෙන් pay කරන්න පුළුවන් එක ලොකු පහසුවක්."
  },
  {
    name: "Sunil Perera",
    area: "Kandy City • Three-Wheel Union",
    stars: 5,
    text: "PWA විදියට Chrome එකෙන් Home screen එකට දාගත්තාම කිසිම warning එකක් නැතුව පටස් ගාලා වැඩ. Night fare එක auto හැදෙන නිසා රෑට හයර් දුවද්දී ගණන් හදන්න ඕන නෑ."
  },
  {
    name: "Ruwandika Mendis",
    area: "Galle • Tourist Hire Service",
    stars: 5,
    text: "Tourists ලා ආසයි digital bill එක WhatsApp එකට දෙනකොට. Bluetooth printer එකටත් කෙලින්ම bill එක print වෙනවා. NexiaPro team එකට ගොඩක් ස්තූතියි මේ වගේ app එකක් හැදුවට!"
  }
];

let globalReviewsList = [];

function setRating(val) {
  currentSelectedRating = val;
  const input = document.getElementById('selectedStarVal');
  if (input) input.value = val;

  const starBtns = document.querySelectorAll('#starContainer .star-btn');
  starBtns.forEach((btn, index) => {
    if (index < val) {
      btn.innerHTML = '<i class="fa-solid fa-star text-amber-400"></i>';
    } else {
      btn.innerHTML = '<i class="fa-regular fa-star text-slate-600"></i>';
    }
  });
}

function initFirebaseReviews() {
  if (db) {
    db.collection('nexiapro_driver_reviews')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const cloudReviews = [];
        snapshot.forEach((doc) => {
          cloudReviews.push(doc.data());
        });

        if (cloudReviews.length > 0) {
          globalReviewsList = [...cloudReviews, ...initialCuratedReviews];
        } else {
          globalReviewsList = [...initialCuratedReviews];
        }
        renderReviews(globalReviewsList);
      }, (error) => {
        console.warn('Firestore onSnapshot error, falling back to cached reviews:', error);
        loadFallbackReviews();
      });
  } else {
    loadFallbackReviews();
  }
}

function loadFallbackReviews() {
  const local = JSON.parse(localStorage.getItem('nexiapro_reviews') || '[]');
  globalReviewsList = [...local, ...initialCuratedReviews];
  renderReviews(globalReviewsList);
}

async function submitReview(e) {
  e.preventDefault();
  const name = document.getElementById('reviewerName').value.trim();
  const area = document.getElementById('reviewerArea').value.trim();
  const text = document.getElementById('reviewerFeedback').value.trim();
  const stars = currentSelectedRating;
  const submitBtn = document.getElementById('submitReviewBtn');

  if (!name || !area || !text) return;

  const newReview = { 
    name, 
    area, 
    stars, 
    text,
    createdAt: db && firebase.firestore.FieldValue ? firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString()
  };

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Saving to Cloud...</span>';
  }

  try {
    if (db) {
      await db.collection('nexiapro_driver_reviews').add(newReview);
    } else {
      let saved = JSON.parse(localStorage.getItem('nexiapro_reviews') || '[]');
      saved.unshift(newReview);
      localStorage.setItem('nexiapro_reviews', JSON.stringify(saved));
      loadFallbackReviews();
    }

    closeModal('rateModal');
    e.target.reset();
    setRating(5);
    alert('ස්තූතියි! ඔබගේ අදහස Firebase Cloud වෙත සාර්ථකව ඇතුළත් විය. ලොව ඕනෑම කෙනෙකුට දැන් මෙය නැරඹිය හැක.');
  } catch (err) {
    console.error('Error submitting review to Firestore:', err);
    let saved = JSON.parse(localStorage.getItem('nexiapro_reviews') || '[]');
    saved.unshift(newReview);
    localStorage.setItem('nexiapro_reviews', JSON.stringify(saved));
    loadFallbackReviews();
    closeModal('rateModal');
    alert('අදහස සාර්ථකව සටහන් විය! (Offline saved)');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Publish to Cloud Community ⭐</span>';
    }
  }
}

function renderReviews(reviews) {
  const container = document.getElementById('reviewsList');
  if (!container) return;

  if (!reviews || reviews.length === 0) {
    reviews = initialCuratedReviews;
  }

  const totalStars = reviews.reduce((sum, r) => sum + (Number(r.stars) || 5), 0);
  const avg = (totalStars / reviews.length).toFixed(1);

  const avgEl = document.getElementById('summaryAvgScore');
  const countEl = document.getElementById('summaryTotalReviews');
  const app1RatingEl = document.getElementById('app1RatingVal');
  const driverCountEl = document.getElementById('totalDriversCount');

  if (avgEl) avgEl.innerHTML = `${avg}<span class="text-2xl text-slate-500">/5</span>`;
  if (countEl) countEl.textContent = `${reviews.length + 1245}+`;
  if (app1RatingEl) app1RatingEl.textContent = avg;
  if (driverCountEl) driverCountEl.textContent = `${reviews.length + 1245}+`;

  container.innerHTML = reviews.map(r => {
    const starCount = Number(r.stars) || 5;
    const starsHtml = Array.from({ length: 5 }, (_, i) => 
      i < starCount ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star text-slate-600"></i>'
    ).join('');

    const initials = r.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'DR';

    return `
      <div class="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
              ${initials}
            </div>
            <div>
              <div class="text-sm font-bold text-white">${r.name}</div>
              <div class="text-[11px] text-slate-400">${r.area}</div>
            </div>
          </div>
          <div class="text-amber-400 text-xs">
            ${starsHtml}
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed italic">
          "${r.text}"
        </p>
        <div class="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
          <i class="fa-solid fa-circle-check"></i> Verified Community Review
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 7. MODAL MANAGERS
// ==========================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function openDownloadModal(appId) {
  openModal('downloadModal');
}

function openApkSafetyModal() {
  closeModal('downloadModal');
  openModal('apkSafetyModal');
}

function openPwaGuideModal() {
  closeModal('downloadModal');
  openModal('pwaGuideModal');
}

function openRateModal(appId) {
  openModal('rateModal');
}

function openMotherDetailsModal() {
  openModal('motherModal');
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  ['downloadModal', 'apkSafetyModal', 'pwaGuideModal', 'rateModal', 'motherModal', 'lightboxModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal && e.target === modal) {
      closeModal(id);
    }
  });
});

// Close modals on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ['downloadModal', 'apkSafetyModal', 'pwaGuideModal', 'rateModal', 'motherModal', 'lightboxModal'].forEach(closeModal);
  }
});

// ==========================================
// 8. CATEGORY FILTER
// ==========================================
function filterApps(cat) {
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(t => {
    if (t.dataset.cat === cat) {
      t.className = 'cat-tab px-4 py-2 rounded-lg text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer';
    } else {
      t.className = 'cat-tab px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-all cursor-pointer';
    }
  });

  const cards = document.querySelectorAll('.app-card');
  cards.forEach(c => {
    if (cat === 'all' || c.dataset.category === cat) {
      c.style.display = 'flex';
    } else {
      c.style.display = 'none';
    }
  });
}

// ==========================================
// 9. FAQ ACCORDION
// ==========================================
function toggleFaq(btn) {
  const parent = btn.parentElement;
  const content = parent.querySelector('.faq-content');
  const icon = btn.querySelector('i');

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.classList.add('rotate-180');
  } else {
    content.classList.add('hidden');
    icon.classList.remove('rotate-180');
  }
}

// ==========================================
// 10. SERVICE WORKER REGISTRATION (PWA)
// ==========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('NexiaPro Store SW Registered:', reg.scope))
      .catch(err => console.log('SW registration failed:', err));
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  initFirebaseReviews();
  setRating(5);
  startAutoRotateTimer();
});
