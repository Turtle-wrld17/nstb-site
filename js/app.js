/* ===== CONFIGURATION (un seul endroit à modifier) ===== */
const CONFIG = {
  nom: "N'S Trade and Business",
  whatsapp: "22671944470",
  credit: "massa_cmd", // nom affiché après « by » en bas de page (laisser vide pour masquer)
  email: "nstradeandbuisness@gmail.com",
  web3formsKey: "d6b83d26-3b9d-4fe9-9c5f-7bc9fc092a73",                   // clé gratuite web3forms.com (envoi des formulaires par email)
  sheet: {                              // liens CSV publiés du Google Sheet ; vide = produits de démonstration
    produits: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlTtmuu7QmH45l61h_3G2RAwEx8PhHuAfo880ZJgUuz7-3lMRHv0S3aJLqIvVFijdJfQIHP5Rh3tQo/pub?gid=1546551390&single=true&output=csv",
    promos: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlTtmuu7QmH45l61h_3G2RAwEx8PhHuAfo880ZJgUuz7-3lMRHv0S3aJLqIvVFijdJfQIHP5Rh3tQo/pub?gid=1844997149&single=true&output=csv" },
  cloudinary: { cloud: "mwryzy3w", preset: "nstb_demandes" }, // compte gratuit cloudinary.com (envoi de photos)
  telChine: "+86 19072602714",
  social: { facebook: "", // à renseigner dès que la page Facebook existe
    instagram: "https://www.instagram.com/ns_trade_and_business", tiktok: "https://www.tiktok.com/@ns.trade.and.business", snapchat: "https://snapchat.com/t/aZff7Scf" },
  retrait: { texte: "Ouagadougou", carte: "https://www.google.com/maps?q=12.376028,-1.531194" }, // 12°22'33.7"N 1°31'52.3"W
  rccm: "", ifu: "" // à renseigner quand le client les aura (affichés seulement s'ils sont remplis)
};
/* Codes promo d'exemple. Plus tard : onglet « Codes promo » du Google Sheet. type : "pct" (pourcentage) ou "fcfa" (montant fixe) */
const PROMOS = [{ code: "BIENVENUE", type: "pct", valeur: 10 }, { code: "NSTB5000", type: "fcfa", valeur: 5000 }];
const CATEGORIES = [
  ["femmes", "Femmes"], ["hommes", "Hommes"], ["chaussures", "Chaussures"],
  ["electronique", "Électronique"], ["beaute", "Beauté & parfums"],
  ["maison", "Maison"], ["vehicules", "Véhicules"], ["autres", "Autres"]
];
/* Produits provisoires. Plus tard : lus depuis le Google Sheet du client. */
const PRODUCTS = [
  { id: "p1", desc: "Baskets légères et confortables pour la course et le quotidien. Semelle amortissante, bonne tenue du pied.", tailles: ["40","41","42","43","44"], couleurs: ["Blanc","Noir"], nom: "Baskets running homme", cat: "chaussures", prix: 18000, ancien: 24000, statut: "disponible", moq: 10 },
  { id: "p2", couleurs: ["Blanc","Noir"], nom: "Écouteurs sans fil Pro", cat: "electronique", prix: 12500, statut: "disponible", moq: 20 },
  { id: "p3", couleurs: ["Beige","Noir","Rouge"], nom: "Sac à main femme", cat: "femmes", prix: 15000, ancien: 20000, statut: "disponible", moq: 12 },
  { id: "p4", nom: "Parfum de luxe 100 ml", cat: "beaute", prix: 9000, statut: "disponible", moq: 24 },
  { id: "p5", desc: "Smartphone 128 Go, écran HD, double caméra. Modèles et couleurs sur demande.", couleurs: ["Noir","Bleu"], nom: "Smartphone 128 Go", cat: "electronique", prix: 95000, statut: "commande", moq: 5 },
  { id: "p6", nom: "Console de jeux portable", cat: "electronique", prix: 45000, statut: "commande", moq: 5 },
  { id: "p7", nom: "Moto électrique city", cat: "vehicules", prix: 650000, statut: "commande", moq: 1 },
  { id: "p8", couleurs: ["Argent","Noir"], nom: "Montre homme acier", cat: "hommes", prix: 10000, statut: "disponible", moq: 10 }
];

const S = d => `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICON = {
  cart: S('<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>'),
  wa: `<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  chat: S('<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>')
};
/* ===== OUTILS ===== */
const catName = id => (CATEGORIES.find(c => c[0] === id) || [])[1] || "";
const photosOf = p => p.photos?.length ? p.photos : [1, 2, 3, 4].map(n => `img/produits/${p.id}${n === 1 ? "" : "-" + n}.jpg`);
const norm = s => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const $ = (s, r = document) => r.querySelector(s);
const fcfa = n => n.toLocaleString("fr-FR").replace(/\u202f/g, " ") + " FCFA";
const waLink = txt => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}`;
const Cart = {
  get() { try { return JSON.parse(localStorage.getItem("nstb_cart")) || []; } catch (e) { return []; } },
  save(c) { try { localStorage.setItem("nstb_cart", JSON.stringify(c)); } catch (e) {} Cart.badge(); },
  add(id, o = {}, q = 1) {
    const c = Cart.get(), l = c.find(x => x.id === id && x.couleur === o.couleur && x.taille === o.taille && x.mode === o.mode);
    l ? l.qte += q : c.push({ id, qte: q, ...o });
    Cart.save(c); toast("Ajouté au panier");
  },
  count() { return Cart.get().reduce((n, l) => n + l.qte, 0); },
  badge() { const b = $("#cartCount"); if (b) { b.textContent = Cart.count(); b.hidden = !Cart.count(); } }
};
function toast(msg) {
  const t = Object.assign(document.createElement("div"), { className: "toast", textContent: msg, role: "status" });
  document.body.append(t); setTimeout(() => t.remove(), 1600);
}
function cardHTML(p) {
  const cmd = p.statut === "commande";
  return `<article class="card"><a class="ph" href="produit.html?id=${p.id}"><img src="${photosOf(p)[0]}" alt="${p.nom}" loading="lazy" onerror="this.remove()">
    <span class="badge ${cmd ? "cmd" : ""}">${cmd ? "Sur commande" : "Disponible"}</span></a>
    <div class="in"><h3>${p.nom}</h3>
    <div class="price">${p.prix ? fcfa(p.prix) + (p.ancien ? `<s>${fcfa(p.ancien)}</s>` : "") : "Prix sur devis"}</div>
    <small>${p.moq > 1 ? "Gros dès " + p.moq + " pièces" : "Gros : sur devis"}</small>
    ${!p.prix ? `<a class="btn btn-navy" href="contact.html#devis">Demander un devis</a>` : p.tailles?.length || p.couleurs?.length ? `<a class="btn btn-navy" href="produit.html?id=${p.id}">Choisir les options</a>` : `<button class="btn btn-navy" data-add="${p.id}">Ajouter au panier</button>`}</div></article>`;
}

/* ===== EN-TÊTE ET PIED DE PAGE (communs à toutes les pages) ===== */
function layout(page) {
  const links = [["index.html", "Accueil"], ["catalogue.html", "Catalogue"], ["a-propos.html", "À propos"], ["faq.html", "FAQ"], ["contact.html", "Contact"]];
  $("#header").innerHTML = `<div class="topbar">Bateau ou avion : on s'occupe de tout, de la Chine jusqu'à chez vous.</div>
  <header class="site"><div class="wrap bar">
    <a class="brand" href="index.html"><img src="img/logo.png" alt="${CONFIG.nom}"></a>
    <form class="search" action="catalogue.html"><input name="q" type="search" placeholder="Rechercher un produit…" aria-label="Rechercher"><button>Chercher</button></form>
    <nav class="main" id="nav">${links.map(([h, t]) => `<a href="${h}" class="${h === page ? "on" : ""}">${t}</a>`).join("")}</nav>
    <a class="cart" href="panier.html" aria-label="Panier">${ICON.cart}<b id="cartCount" hidden>0</b></a>
    <button class="burger" aria-label="Menu" onclick="$('#nav').classList.toggle('open')">☰</button>
  </div></header>`;
  $("#footer").innerHTML = `<footer class="site"><div class="wrap"><div class="fgrid">
    <div><img class="logo" src="img/logo.png" alt=""><p>Produits de Chine pour particuliers, commerçants et revendeurs.</p></div>
    <div><h4>Naviguer</h4>${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</div>
    <div><h4>Nous joindre</h4><a href="${waLink("Bonjour, je souhaite des informations.")}">WhatsApp : +226 71 94 44 70</a><a href="mailto:${CONFIG.email}">${CONFIG.email}</a><a href="tel:${CONFIG.telChine.replace(/\s/g, "")}">Chine : ${CONFIG.telChine}</a><a href="${CONFIG.retrait.carte}" target="_blank" rel="noopener">Point de retrait : voir la carte</a></div>
    <div><h4>Suivez-nous</h4>${[["facebook", "Facebook"], ["instagram", "Instagram"], ["tiktok", "TikTok"], ["snapchat", "Snapchat"]].filter(([k]) => CONFIG.social[k]).map(([k, n]) => `<a href="${CONFIG.social[k]}" target="_blank" rel="noopener">${n}</a>`).join("")}</div>
  </div></div></footer>
  <div class="legal"><div class="wrap lg"><div>© ${new Date().getFullYear()} ${CONFIG.nom}. Tous droits réservés.${CONFIG.credit ? `<br><b>by ${CONFIG.credit}</b>` : ""}</div>
  <div><a href="mentions-legales.html">Mentions légales</a><i>|</i><a href="politique-confidentialite.html">Politique de confidentialité</a></div></div></div>
  <a class="wa-float" href="${waLink("Bonjour, je souhaite des informations.")}" aria-label="Écrire sur WhatsApp">${ICON.wa}</a>`;
  document.addEventListener("click", e => { const b = e.target.closest("[data-add]"); if (b) Cart.add(b.dataset.add); });
  Cart.badge();
}

/* ===== TÉLÉPHONE AVEC CHOIX DE L'INDICATIF (panier et contact) ===== */
const PAYS = "bf|Burkina Faso|226;ci|Côte d'Ivoire|225;ml|Mali|223;ne|Niger|227;tg|Togo|228;bj|Bénin|229;gh|Ghana|233;sn|Sénégal|221;gn|Guinée|224;ng|Nigeria|234;cm|Cameroun|237;ga|Gabon|241;cg|Congo|242;cd|RD Congo|243;ma|Maroc|212;dz|Algérie|213;tn|Tunisie|216;fr|France|33;be|Belgique|32;ch|Suisse|41;de|Allemagne|49;it|Italie|39;es|Espagne|34;gb|Royaume-Uni|44;ca|Canada|1;us|États-Unis|1;cn|Chine|86;ae|Émirats arabes unis|971;tr|Turquie|90".split(";").map(s => s.split("|"));
const phoneHTML = () => `<div class="phone"><div class="cc"><img id="flag" src="https://flagcdn.com/w40/bf.png" alt="" width="22" height="15" onerror="this.style.visibility='hidden'"><b id="ccTxt">+226</b><i aria-hidden="true">▾</i><select id="cc" aria-label="Indicatif du pays"></select></div>
  <input id="cc2" class="cc2" type="tel" inputmode="numeric" placeholder="+indicatif" aria-label="Indicatif du pays" hidden><input id="tel" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="Numéro (sans l'indicatif)"></div>`;
const cc = () => $("#cc").value === "other" ? "+" + $("#cc2").value.replace(/\D/g, "") : "+" + PAYS.find(x => x[0] === $("#cc").value)[2];
const phone = () => { const v = $("#tel").value.trim(); if (/^(\+|00)/.test(v)) return v.replace(/^00/, "+").replace(/[^\d+]/g, ""); const d = v.replace(/\D/g, "").replace(/^0+/, ""); return d ? cc() + d : ""; };
const phoneError = () => {
  if (!/^(\+|00)/.test($("#tel").value.trim()) && $("#cc").value === "other" && cc().length < 2) return "Entrez l'indicatif du pays, par exemple 971.";
  return phone().replace(/\D/g, "").length < 9 ? "Entrez un numéro de téléphone valide." : "";
};
function initPhone() {
  $("#cc").innerHTML = PAYS.map(([i, n, c]) => `<option value="${i}">${n} (+${c})</option>`).join("") + `<option value="other">Autre pays…</option>`;
  $("#cc").onchange = () => {
    const o = $("#cc").value === "other", f = $("#flag");
    $("#cc2").hidden = !o; $("#ccTxt").textContent = o ? "Autre" : cc(); f.style.visibility = "visible"; f.hidden = o;
    if (o) $("#cc2").focus(); else f.src = `https://flagcdn.com/w40/${$("#cc").value}.png`;
  };
}

/* ===== CATALOGUE LU DEPUIS LE GOOGLE SHEET (sinon produits de démonstration) ===== */
let CATALOG_ERROR = false, CATALOG_DETAIL = "";
function parseCSV(t) {
  const rows = []; let r = [], f = "", q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ",") { r.push(f); f = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && t[i + 1] === "\n") i++; r.push(f); rows.push(r); r = []; f = ""; }
    else f += c;
  }
  if (f !== "" || r.length) { r.push(f); rows.push(r); }
  return rows.filter(x => x.some(v => v.trim() !== ""));
}
const toRows = t => { const [h, ...b] = parseCSV(t), k = h.map(x => norm(x).replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")); return b.map(r => Object.fromEntries(k.map((key, i) => [key, (r[i] || "").trim()]))); };
const num = v => Number(String(v).replace(/[^\d]/g, "")) || 0;
const yes = (v, d = true) => v === "" ? d : !/^(non|no|0|faux|false)$/.test(norm(v));
const list = v => v.split(/[,;\n]/).map(s => s.trim()).filter(Boolean);
const slug = s => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function fixImg(u) {
  u = (u || "").trim(); if (!u) return "";
  const m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]+)/);
  if (m) return `https://lh3.googleusercontent.com/d/${m[1]}`;
  if (/res\.cloudinary\.com\/[^/]+\/image\/upload\//.test(u) && !/\/upload\/[a-z]+_/.test(u)) return u.replace("/upload/", "/upload/f_auto,q_auto,w_900/");
  return /^(https?:)?\/\//.test(u) || u.includes("/") ? u : `img/produits/${u}`;
}
const catId = v => (CATEGORIES.find(c => c[0] === norm(v) || norm(c[1]) === norm(v)) || ["autres"])[0];
const rowToProduct = (r, i) => ({
  id: r.id || slug(r.nom) || "p" + i, nom: r.nom, cat: catId(r.categorie), prix: num(r.prix), ancien: num(r.ancien_prix) || undefined,
  statut: /commande/.test(norm(r.statut)) ? "commande" : "disponible", moq: num(r.gros_a_partir_de) || 1,
  tailles: list(r.tailles || ""), couleurs: list(r.couleurs || ""), desc: r.description || "", photos: [r.photo1, r.photo2, r.photo3, r.photo4].map(fixImg).filter(Boolean)
});
function parseDate(s) {
  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/); if (m) return new Date(+m[1], m[2] - 1, +m[3], 23, 59, 59);
  m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/); return m ? new Date(+m[3], m[2] - 1, +m[1], 23, 59, 59) : null;
}
const rowToPromo = r => ({ code: r.code.toUpperCase(), type: /montant|fcfa/.test(norm(r.type)) ? "fcfa" : "pct", valeur: num(r.valeur), fin: r.fin ? parseDate(r.fin) : null });
async function loadCatalog() {
  const S = CONFIG.sheet; if (!S.produits) return;
  const key = "nstb_catalog", now = Date.now(); let c = null;
  try { c = JSON.parse(localStorage.getItem(key)); } catch (e) {}
  if (!(c && now - c.t < 3e5)) {
    const once = async u => { const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 10000); try { const r = await fetch(u, { signal: ctl.signal }); if (!r.ok) throw new Error("erreur HTTP " + r.status); return await r.text(); } finally { clearTimeout(t); } };
    const get = async u => { try { return await once(u); } catch (e) { return await once(u); } };
    try {
      const [pt, mt] = await Promise.all([get(S.produits), S.promos ? get(S.promos).catch(() => "") : ""]);
      c = { t: now, p: toRows(pt).filter(r => r.nom && yes(r.afficher)).map(rowToProduct),
        m: mt ? toRows(mt).filter(r => r.code && yes(r.actif)).map(rowToPromo).filter(x => x.valeur) : [] };
      try { localStorage.setItem(key, JSON.stringify(c)); } catch (e) {}
    } catch (e) { CATALOG_DETAIL = e.name === "AbortError" ? "délai dépassé" : e.message; console.warn("Catalogue : lecture du Google Sheet impossible", e); }
  }
  PRODUCTS.length = 0; PROMOS.length = 0;
  if (c) { PRODUCTS.push(...c.p); PROMOS.push(...c.m.filter(x => !x.fin || new Date(x.fin) >= new Date())); } else CATALOG_ERROR = true;
}
const READY = loadCatalog().catch(() => { CATALOG_ERROR = true; });
