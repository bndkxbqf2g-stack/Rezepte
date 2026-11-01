const STORAGE_KEYS = {
  recipes: 'steffi-rezeptewelt-recipes-v1',
  categories: 'steffi-rezeptewelt-categories-v1',
  github: 'steffi-rezeptewelt-github-v1'
};

const REPOSITORY_RECIPES_URL = './data/recipes.json';
const DEFAULT_GITHUB_REPO = 'bndkxbqf2g-stack/Rezepte';

const palette = [
  { accent: '#e68b63', soft: '#f5dccd' },
  { accent: '#8eae91', soft: '#dce9df' },
  { accent: '#b69aca', soft: '#e7dff0' },
  { accent: '#d6b65f', soft: '#f0e5be' },
  { accent: '#7da5aa', soft: '#dcebec' },
  { accent: '#d6828a', soft: '#f0d9dc' }
];

const starterCategories = [
  { id: 'schnell-einfach', name: 'Schnell & einfach' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'ofengerichte', name: 'Ofengerichte' },
  { id: 'suesses', name: 'Süßes' },
  { id: 'drinks', name: 'Drinks' }
];

const starterRecipes = [
  {
    id: 'starter-lemon-pasta',
    title: 'Cremige Zitronenpasta',
    categoryId: 'pasta',
    source: 'https://www.instagram.com/',
    sourceType: 'Instagram',
    time: 25,
    ingredients: ['300 g Linguine', '1 Bio-Zitrone', '2 EL Olivenöl', '40 g Parmesan', 'Salz & schwarzer Pfeffer'],
    steps: ['Pasta in Salzwasser al dente kochen und eine Tasse Kochwasser auffangen.', 'Zitronenschale abreiben und den Saft mit Olivenöl verrühren.', 'Pasta mit Zitronenöl, Parmesan und etwas Kochwasser cremig schwenken.', 'Mit Pfeffer und Zitronenzeste servieren.'],
    note: 'Am liebsten mit extra viel schwarzem Pfeffer.',
    createdAt: '2026-10-28T09:00:00.000Z',
    isFavorite: true
  },
  {
    id: 'starter-miso-gnocchi',
    title: 'Miso-Butter-Gnocchi',
    categoryId: 'schnell-einfach',
    source: 'https://www.instagram.com/',
    sourceType: 'Instagram',
    time: 20,
    ingredients: ['500 g Gnocchi', '2 EL Butter', '1 EL helles Miso', '1 Knoblauchzehe', 'Frühlingszwiebeln'],
    steps: ['Gnocchi in einer großen Pfanne goldbraun anbraten.', 'Butter und fein gehackten Knoblauch dazugeben.', 'Miso mit einem Schuss Wasser glatt rühren und unterheben.', 'Mit Frühlingszwiebeln und Sesam toppen.'],
    note: 'Funktioniert auch mit gebratenem Brokkoli.',
    createdAt: '2026-10-27T16:10:00.000Z',
    isFavorite: true
  },
  {
    id: 'starter-roasted-veg',
    title: 'Ofengemüse mit Tahini',
    categoryId: 'ofengerichte',
    source: 'https://www.instagram.com/',
    sourceType: 'Instagram',
    time: 40,
    ingredients: ['1 Süßkartoffel', '2 Möhren', '1 rote Zwiebel', '1 Dose Kichererbsen', '2 EL Tahini'],
    steps: ['Gemüse würfeln, mit Öl und Gewürzen mischen.', 'Bei 200 °C ca. 30 Minuten rösten.', 'Tahini mit Zitronensaft, Wasser und Salz zu einer Sauce rühren.', 'Kichererbsen und Sauce über dem Ofengemüse verteilen.'],
    note: 'Die Sauce lässt sich gut auf Vorrat vorbereiten.',
    createdAt: '2026-10-25T12:30:00.000Z',
    isFavorite: false
  },
  {
    id: 'starter-cucumber-salad',
    title: 'Sesam-Gurken-Salat',
    categoryId: 'schnell-einfach',
    source: 'https://www.instagram.com/',
    sourceType: 'Instagram',
    time: 10,
    ingredients: ['2 Salatgurken', '1 EL Reisessig', '1 TL Sesamöl', '1 TL Chiliöl', 'Gerösteter Sesam'],
    steps: ['Gurken leicht andrücken und in mundgerechte Stücke schneiden.', 'Mit Reisessig, Sesamöl und Chiliöl marinieren.', 'Mit Sesam bestreuen und direkt servieren.'],
    note: 'Knackig, frisch und in zehn Minuten fertig.',
    createdAt: '2026-10-23T18:45:00.000Z',
    isFavorite: false
  },
  {
    id: 'starter-lemon-loaf',
    title: 'Blueberry Lemon Loaf',
    categoryId: 'suesses',
    source: 'https://www.instagram.com/',
    sourceType: 'Instagram',
    time: 65,
    ingredients: ['180 g Mehl', '120 g Zucker', '2 Eier', '1 Bio-Zitrone', '120 g Blaubeeren'],
    steps: ['Ofen auf 175 °C vorheizen und eine Kastenform auslegen.', 'Butter, Zucker, Eier und Zitronenabrieb cremig rühren.', 'Mehl unterheben, Blaubeeren vorsichtig einarbeiten.', 'Im Ofen backen und vollständig auskühlen lassen.'],
    note: 'Mit Zitronenglasur wird er besonders frisch.',
    createdAt: '2026-10-20T08:10:00.000Z',
    isFavorite: false
  },
  {
    id: 'starter-berry-spritz',
    title: 'Rosmarin-Beeren-Spritz',
    categoryId: 'drinks',
    source: 'https://www.instagram.com/',
    sourceType: 'Instagram',
    time: 8,
    ingredients: ['Eine Handvoll Beeren', '1 Zweig Rosmarin', '100 ml Tonic Water', '100 ml alkoholfreier Sekt', 'Eiswürfel'],
    steps: ['Beeren und Rosmarin in ein Glas geben und leicht andrücken.', 'Mit Eis auffüllen.', 'Tonic Water und Sekt langsam dazugeben.'],
    note: 'Für die alkoholfreie Variante genauso gedacht.',
    createdAt: '2026-10-18T15:20:00.000Z',
    isFavorite: false
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let categories = readStorage(STORAGE_KEYS.categories, starterCategories);
let recipes = readStorage(STORAGE_KEYS.recipes, starterRecipes);
let state = {
  view: 'all',
  categoryId: '',
  search: '',
  sort: 'newest',
  mode: 'recipe',
  editingId: '',
  readerId: ''
};
let githubFiles = [];
let githubContext = null;
let deferredInstallPrompt = null;
let toastTimer = null;
let wakeLock = null;

categories = Array.isArray(categories) && categories.length ? categories : starterCategories;
recipes = Array.isArray(recipes) ? recipes : starterRecipes;

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage() {
  localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(categories));
  localStorage.setItem(STORAGE_KEYS.recipes, JSON.stringify(recipes));
}

async function hydrateRepositoryRecipes() {
  if (localStorage.getItem(STORAGE_KEYS.recipes)) return;
  try {
    const response = await fetch(REPOSITORY_RECIPES_URL, { cache: 'no-store' });
    if (!response.ok) return;
    const payload = await response.json();
    const repositoryRecipes = Array.isArray(payload.recipes) ? payload.recipes : [];
    const repositoryCategories = Array.isArray(payload.categories) ? payload.categories : [];
    if (!repositoryRecipes.length) return;
    if (repositoryCategories.length) categories = repositoryCategories;
    recipes = repositoryRecipes;
    writeStorage();
    render();
    showToast('GitHub-Rezeptbestand geladen.');
  } catch (error) {
    // The embedded starter data keeps the app usable when the repository file is unavailable.
  }
}

function exportGithubData() {
  const payload = {
    schemaVersion: 1,
    app: 'Steffi’s Rezeptewelt',
    updatedAt: new Date().toISOString(),
    categories,
    recipes
  };
  const blob = new Blob([JSON.stringify(payload, null, 2) + '\n'], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'recipes.json';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('recipes.json ist bereit für GitHub/data/.');
}

function escapeHtml(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
}

function safeHref(value) {
  const candidate = String(value || '').trim();
  return /^https?:\/\//i.test(candidate) ? candidate : '';
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function uid(prefix) {
  return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

function splitLines(value) {
  return String(value || '').split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function categoryById(id) {
  return categories.find((category) => category.id === id);
}

function categoryName(id) {
  return (categoryById(id) || {}).name || 'Noch einsortieren';
}

function sourceTypeFor(source) {
  const value = String(source || '').toLowerCase();
  if (value.includes('instagram.com')) return 'Instagram';
  if (value.includes('github.com') || value.includes('raw.githubusercontent.com')) return 'GitHub';
  if (value) return 'Web-Link';
  return 'Eigenes Rezept';
}

function isInstagramSource(source) {
  return /(?:^|\/\/)(?:www\.)?instagram\.com\/(?:p|reel|tv)\//i.test(String(source || '').trim());
}

function sourceKey(source) {
  const value = String(source || '').trim();
  try {
    const url = new URL(value);
    const path = url.pathname.replace(/\/+$/, '');
    if (isInstagramSource(value)) return url.hostname.toLowerCase().replace(/^www\./, '') + path;
    return url.href.replace(/\/+$/, '');
  } catch (error) {
    return value.toLowerCase().replace(/\/+$/, '');
  }
}

function cleanInstagramLine(value) {
  return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}

function isInstagramBullet(line) {
  return /^(?:[•●▪◦·]|[-*+]\s+|\d+[.)]\s*)/.test(String(line || '').trim());
}

function stripInstagramBullet(line) {
  return cleanInstagramLine(String(line || '').replace(/^\s*(?:[•●▪◦·]|[-*+]\s*|\d+[.)]\s*)/, ''));
}

function splitInstagramSentences(value) {
  const text = cleanInstagramLine(value);
  if (!text) return [];
  const matches = text.match(/[^.!?]+(?:[.!?]+|$)/g) || [text];
  return matches.map((item) => cleanInstagramLine(item)).filter(Boolean);
}

function instagramTitleFromCaption(caption, ingredients, source) {
  const recipeMarker = String(caption || '').search(/(?:^|\n)\s*(?:rezept|zutaten|ingredients)\s*:?\s*(?:\n|$)/i);
  const beforeRecipe = recipeMarker >= 0 ? String(caption).slice(0, recipeMarker) : String(caption || '');
  let candidate = cleanInstagramLine(beforeRecipe.split(/\r?\n/).filter(Boolean)[0] || '');
  candidate = candidate.split(/[.!?]/)[0].replace(/[✨😍🥰😘❤️💕💛💚💙💜🧡🤍🖤🌟🔥]+/gu, '').trim();
  candidate = candidate.replace(/^(?:der|die|das|mein|meine|unser|unsere)\s+/i, '');
  candidate = candidate.replace(/\s+(?:den|der|die|das)\s+(?:du|deine|eure|unsere|kids|kinder)\b.*$/i, '').trim();

  const ingredientText = (ingredients || []).join(' ').toLowerCase();
  if (/one\s*-?\s*pot/i.test(candidate) && /kartoffel/.test(ingredientText) && /m[oö]hr/.test(ingredientText)) {
    return 'One-Pot Kartoffel-Möhren-Topf';
  }
  if (candidate.length > 72) candidate = candidate.slice(0, 72).replace(/\s+\S*$/, '').trim();
  return candidate || recipeTitleFromUrl(source);
}

function instagramNoteFromCaption(caption, authorName) {
  const author = cleanInstagramLine(authorName).replace(/^@/, '');
  const prefix = author ? 'Aus Instagram von @' + author + ' importiert.' : 'Aus Instagram importiert.';
  const lines = String(caption || '').split(/\r?\n/).map(cleanInstagramLine).filter(Boolean);
  const noteLine = lines.find((line) => /^(?:tipp|hinweis|variante|aufbewahrung|serviervorschlag)\b/i.test(line));
  return noteLine ? prefix + ' ' + noteLine : prefix;
}

function parseInstagramCaption(caption, source, authorName) {
  const normalized = String(caption || '')
    .replace(/\r/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s*([•●▪◦·])\s*/g, '\n$1 ')
    .replace(/\n{2,}/g, '\n');
  const lines = normalized.split('\n').map((line) => line.trim()).filter(Boolean);
  const markerIndex = lines.findIndex((line) => /^(?:rezept|zutaten|ingredients)\s*:?[\s]*$/i.test(line));
  const firstBulletIndex = lines.findIndex((line) => isInstagramBullet(line));
  const ingredientsStart = markerIndex >= 0 ? markerIndex + 1 : firstBulletIndex;
  const ingredients = [];
  let cursor = ingredientsStart >= 0 ? ingredientsStart : lines.length;
  if (ingredientsStart >= 0) {
    while (cursor < lines.length && isInstagramBullet(lines[cursor])) {
      const ingredient = stripInstagramBullet(lines[cursor]);
      if (ingredient) ingredients.push(ingredient);
      cursor += 1;
    }
  }

  const instructionLines = lines.slice(cursor).filter((line) => {
    if (/^(?:lasst es euch schmecken|folgt mir|folgt uns|speichert!?\s*(?:euch)?\s*das rezept)/i.test(line)) return false;
    if (/^(?:werbung|anzeige|ad)\b/i.test(line)) return false;
    return !/^(?:rezept|zutaten|ingredients)\s*:?[\s]*$/i.test(line);
  });
  const steps = splitInstagramSentences(instructionLines.join(' ')).filter((step) => step.length > 8);
  const minutes = steps.join(' ').match(/\b(\d{1,3})\s*(?:minuten?|min)\b/gi) || [];
  const time = minutes.reduce((total, value) => total + (Number(value.match(/\d+/)[0]) || 0), 0);
  const title = instagramTitleFromCaption(caption, ingredients, source);

  if (!ingredients.length && !steps.length) throw new Error('Instagram-Caption enthält kein erkennbares Rezept.');
  return {
    title,
    time,
    ingredients,
    steps,
    note: instagramNoteFromCaption(caption, authorName)
  };
}

function instagramRequestSource(source) {
  try {
    const url = new URL(String(source || '').trim());
    return isInstagramSource(url.href) ? url.origin + url.pathname : source;
  } catch (error) {
    return source;
  }
}

async function fetchInstagramRecipe(source) {
  const requestSource = instagramRequestSource(source);
  const endpoint = 'https://www.instagram.com/api/v1/oembed/?url=' + encodeURIComponent(requestSource);
  const endpoints = [endpoint, 'https://proxy.cors.dev/?url=' + encodeURIComponent(endpoint), 'https://proxy.cors.dev/' + endpoint];
  let lastError = null;
  for (const requestUrl of endpoints) {
    try {
      const response = await fetch(requestUrl, {
        cache: 'no-store',
        credentials: 'omit',
        headers: { Accept: 'application/json' },
        referrerPolicy: 'no-referrer'
      });
      if (!response.ok) throw new Error('Instagram antwortete mit ' + response.status);
      const payload = await response.json();
      const caption = String(payload.title || payload.caption || '').trim();
      if (!caption) throw new Error('Instagram hat keinen auslesbaren Text geliefert.');
      return parseInstagramCaption(caption, source, payload.author_name || '');
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('Instagram konnte nicht ausgelesen werden.');
}

function isPlaceholderTitle(title) {
  return /^(?:instagram-rezept|neues rezept)\s*[·-]/i.test(String(title || '').trim());
}

function instagramNeedsEnrichment(recipe) {
  return isInstagramSource(recipe && recipe.source) && (
    isPlaceholderTitle(recipe.title) ||
    !(Array.isArray(recipe.ingredients) && recipe.ingredients.length) ||
    !(Array.isArray(recipe.steps) && recipe.steps.length) ||
    /speichert!?\s*euch das rezept/i.test(String(recipe.note || ''))
  );
}

function paletteFor(recipe, index) {
  if (recipe && recipe.accent && recipe.soft) return { accent: recipe.accent, soft: recipe.soft };
  return palette[index % palette.length];
}

function sourceLabel(recipe) {
  return recipe.sourceType || sourceTypeFor(recipe.source);
}

function recipeTitleFromUrl(value) {
  const source = String(value || '').trim();
  try {
    const url = new URL(source);
    const pathParts = url.pathname.split('/').filter(Boolean);
    if (url.hostname.includes('instagram.com')) {
      const typeIndex = pathParts.findIndex((part) => ['p', 'reel', 'tv'].includes(part));
      const shortcode = typeIndex >= 0 ? pathParts[typeIndex + 1] : pathParts[0];
      return shortcode ? 'Instagram-Rezept · ' + shortcode.slice(0, 10) : 'Instagram-Rezept';
    }
    return (url.hostname.replace(/^www\./, '').split('.')[0] || 'Web-Rezept')
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) + ' Rezept';
  } catch (error) {
    return 'Neues Rezept';
  }
}

function renderCategorySelect(selectedId) {
  const select = $('#recipeCategory');
  if (!select) return;
  select.innerHTML = categories.map((category) => (
    '<option value="' + escapeHtml(category.id) + '"' + (category.id === selectedId ? ' selected' : '') + '>' +
      escapeHtml(category.name) +
    '</option>'
  )).join('');
}

function renderCategories() {
  const list = $('#categoryList');
  if (!list) return;
  $('#navAllCount').textContent = String(recipes.length);
  $('#navFavoriteCount').textContent = String(recipes.filter((recipe) => recipe.isFavorite).length);
  $('#statRecipes').textContent = String(recipes.length);
  $('#statCategories').textContent = String(categories.length);
  $('#statFavorites').textContent = String(recipes.filter((recipe) => recipe.isFavorite).length);

  list.innerHTML = categories.map((category) => {
    const count = recipes.filter((recipe) => recipe.categoryId === category.id).length;
    return '<button class="category-item' + (state.categoryId === category.id ? ' active' : '') + '" data-category="' + escapeHtml(category.id) + '">' +
      '<span class="category-dot"></span><span>' + escapeHtml(category.name) + '</span><span class="category-number">' + count + '</span>' +
    '</button>';
  }).join('');
  renderCategorySelect(state.editingId ? ((recipes.find((recipe) => recipe.id === state.editingId) || {}).categoryId || categories[0].id) : categories[0].id);
}

function filteredRecipes() {
  let result = recipes.slice();
  if (state.view === 'favorites') result = result.filter((recipe) => recipe.isFavorite);
  if (state.categoryId) result = result.filter((recipe) => recipe.categoryId === state.categoryId);
  const query = state.search.trim().toLowerCase();
  if (query) {
    result = result.filter((recipe) => {
      const searchable = [recipe.title, categoryName(recipe.categoryId), recipe.sourceType, recipe.source, recipe.note]
        .concat(recipe.ingredients || [], recipe.steps || [])
        .join(' ')
        .toLowerCase();
      return searchable.includes(query);
    });
  }
  if (state.sort === 'az') result.sort((a, b) => a.title.localeCompare(b.title, 'de'));
  else if (state.sort === 'time') result.sort((a, b) => (Number(a.time) || 9999) - (Number(b.time) || 9999));
  else result.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  return result;
}

function renderRecipeCard(recipe, index) {
  const color = paletteFor(recipe, index);
  const letter = (recipe.title || 'R').trim().charAt(0).toUpperCase();
  const ingredientsCount = (recipe.ingredients || []).length;
  const metaRight = recipe.time ? recipe.time + ' min' : (ingredientsCount ? ingredientsCount + ' Zutaten' : 'Link');
  return '<article class="recipe-card" data-recipe-id="' + escapeHtml(recipe.id) + '" tabindex="0" role="button" aria-label="' + escapeHtml(recipe.title) + ' öffnen">' +
    '<div class="recipe-card-art" style="--card-accent:' + color.accent + ';--card-soft:' + color.soft + '">' +
      '<span class="art-orb">' + escapeHtml(letter) + '</span><span class="art-line"></span>' +
      '<button class="recipe-card-favorite' + (recipe.isFavorite ? ' is-favorite' : '') + '" data-favorite-id="' + escapeHtml(recipe.id) + '" aria-label="' + (recipe.isFavorite ? 'Aus Favoriten entfernen' : 'Als Favorit markieren') + '">' + (recipe.isFavorite ? '♥' : '♡') + '</button>' +
    '</div>' +
    '<div class="recipe-card-body">' +
      '<div class="recipe-card-meta"><span class="recipe-category-label">' + escapeHtml(categoryName(recipe.categoryId)) + '</span><span>' + escapeHtml(sourceLabel(recipe)) + '</span></div>' +
      '<h3 class="recipe-card-title">' + escapeHtml(recipe.title) + '</h3>' +
      '<div class="recipe-card-footer"><span class="recipe-source-label">' + escapeHtml(recipe.source ? 'Quelle gespeichert' : 'Eigenes Rezept') + '</span><span class="recipe-time">' + escapeHtml(metaRight) + '</span></div>' +
    '</div>' +
  '</article>';
}

function renderEmptyState() {
  const hasFilter = state.search || state.categoryId || state.view !== 'all';
  if (hasFilter) {
    return '<div class="empty-state"><div class="empty-state-illustration">⌕</div><div><h3>Nichts gefunden</h3><p>Versuch es mit einem anderen Suchbegriff oder setze den Filter zurück.</p><button class="button button-secondary" data-clear-filters>Filter zurücksetzen</button></div></div>';
  }
  return '<div class="empty-state"><div class="empty-state-illustration">+</div><div><h3>Deine Sammlung wartet</h3><p>Füge dein erstes Lieblingsrezept über einen Link oder direkt als Rezept hinzu.</p><button class="button button-primary" data-open-add>Rezept hinzufügen <span aria-hidden="true">↗</span></button></div></div>';
}

function render() {
  renderCategories();
  const result = filteredRecipes();
  const title = state.categoryId ? categoryName(state.categoryId) : (state.view === 'favorites' ? 'Favoriten' : state.view === 'recent' ? 'Zuletzt gespeichert' : state.search ? 'Suchergebnisse' : 'Alle Rezepte');
  $('#collectionTitle').innerHTML = escapeHtml(title) + ' <span class="heading-count" id="collectionCount">' + result.length + '</span>';
  $('#recipeGrid').innerHTML = result.length ? result.map((recipe, index) => renderRecipeCard(recipe, index)).join('') : renderEmptyState();
  const shouldShowClear = Boolean(state.search || state.categoryId || state.view !== 'all');
  $('#clearFilterButton').classList.toggle('is-hidden', !shouldShowClear);
  $$('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === state.view && !state.categoryId));
  $$('.category-item').forEach((button) => button.classList.toggle('active', button.dataset.category === state.categoryId));
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3000);
}

function openRecipeDialog(mode, recipe) {
  state.mode = mode || 'recipe';
  state.editingId = recipe ? recipe.id : '';
  renderCategorySelect(recipe ? recipe.categoryId : (categories[0] || {}).id);
  $('#recipeForm').reset();
  if (recipe) {
    $('#recipeSource').value = recipe.source || '';
    $('#recipeTitle').value = recipe.title || '';
    $('#recipeCategory').value = recipe.categoryId || (categories[0] || {}).id;
    $('#recipeTime').value = recipe.time || '';
    $('#recipeIngredients').value = (recipe.ingredients || []).join('\n');
    $('#recipeSteps').value = (recipe.steps || []).join('\n');
    $('#recipeNote').value = recipe.note || '';
  }
  setDialogMode(state.mode);
  if (!$('#recipeDialog').open) $('#recipeDialog').showModal();
  setTimeout(() => {
    if (state.mode === 'links') $('#bulkLinks').focus();
    else if (state.mode === 'github') $('#githubRepo').focus();
    else $('#recipeTitle').focus();
  }, 60);
}

function setDialogMode(mode) {
  state.mode = mode;
  $$('.mode-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.mode === mode));
  $$('[data-mode-panel]').forEach((panel) => panel.classList.toggle('is-hidden', panel.dataset.modePanel !== mode));
  const isRecipe = mode === 'recipe';
  $('#recipeTitle').required = isRecipe;
  $('#dialogEyebrow').textContent = mode === 'github' ? 'REZEPTE VERBINDEN' : mode === 'links' ? 'SCHNELL IMPORTIEREN' : 'REZEPT SAMMELN';
  $('#dialogTitle').textContent = mode === 'github' ? 'GitHub importieren' : mode === 'links' ? 'Links speichern' : (state.editingId ? 'Rezept bearbeiten' : 'Neues Rezept');
  $('#recipeSubmitButton').textContent = mode === 'recipe' ? (state.editingId ? 'Änderungen speichern ↗' : 'Rezept speichern ↗') : mode === 'links' ? 'Links speichern ↗' : 'Fertig';
  if (mode === 'github') {
    const storedRepo = readStorage(STORAGE_KEYS.github, '');
    if (!$('#githubRepo').value) $('#githubRepo').value = storedRepo || DEFAULT_GITHUB_REPO;
  }
  if (isRecipe) renderCategorySelect($('#recipeCategory').value || (categories[0] || {}).id);
}

function closeDialog(id) {
  const dialog = $('#' + id);
  if (dialog && dialog.open) dialog.close();
  if (id === 'readerDialog') releaseWakeLock();
}

async function requestWakeLock() {
  if (!('wakeLock' in navigator) || document.visibilityState !== 'visible') return;
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => { wakeLock = null; });
  } catch (error) {
    wakeLock = null;
  }
}

async function releaseWakeLock() {
  if (!wakeLock) return;
  try { await wakeLock.release(); } catch (error) { /* Browser may have released it already. */ }
  wakeLock = null;
}

async function saveRecipeFromForm() {
  const source = $('#recipeSource').value.trim();
  let title = $('#recipeTitle').value.trim();
  if (!title && source) title = recipeTitleFromUrl(source);
  if (!title) {
    $('#recipeTitle').focus();
    showToast('Gib deinem Rezept bitte einen Titel.');
    return;
  }
  const existing = recipes.find((recipe) => recipe.id === state.editingId);
  let parsed = null;
  const ingredients = splitLines($('#recipeIngredients').value);
  const steps = splitLines($('#recipeSteps').value);
  const shouldReadInstagram = isInstagramSource(source) && (isPlaceholderTitle(title) || !ingredients.length || !steps.length);
  const submitButton = $('#recipeSubmitButton');
  let readError = null;
  if (shouldReadInstagram) {
    submitButton.disabled = true;
    submitButton.textContent = 'Instagram-Link wird gelesen …';
    try {
      parsed = await fetchInstagramRecipe(source);
    } catch (error) {
      readError = error;
    } finally {
      submitButton.disabled = false;
      setDialogMode(state.mode);
    }
  }
  const recipe = {
    id: state.editingId || uid('recipe'),
    title: parsed && isPlaceholderTitle(title) ? parsed.title : title,
    categoryId: $('#recipeCategory').value || (categories[0] || {}).id,
    source,
    sourceType: sourceTypeFor(source),
    time: Number($('#recipeTime').value) || 0,
    ingredients: ingredients.length ? ingredients : (parsed ? parsed.ingredients : []),
    steps: steps.length ? steps : (parsed ? parsed.steps : []),
    note: $('#recipeNote').value.trim() || (parsed ? parsed.note : (isInstagramSource(source) ? 'Aus Link importiert — Instagram konnte den Rezepttext noch nicht automatisch liefern.' : '')),
    createdAt: existing ? existing.createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFavorite: existing ? Boolean(existing.isFavorite) : false
  };
  recipes = [recipe].concat(recipes.filter((item) => item.id !== recipe.id));
  writeStorage();
  render();
  closeDialog('recipeDialog');
  if (parsed) showToast('Instagram-Rezept ausgelesen und gespeichert.');
  else if (shouldReadInstagram) showToast(readError ? 'Link gespeichert — Instagram-Text konnte nicht gelesen werden. Im Reader ↻ erneut versuchen.' : 'Link gespeichert. Im Reader ↻ erneut auslesen.');
  else showToast(state.editingId ? 'Rezept aktualisiert.' : 'Rezept gespeichert.');
}

async function importBulkLinks() {
  const links = Array.from(new Set(splitLines($('#bulkLinks').value).filter((link) => /^https?:\/\//i.test(link))));
  if (!links.length) {
    showToast('Füge mindestens einen gültigen Link ein.');
    $('#bulkLinks').focus();
    return;
  }
  const existingSources = new Set(recipes.map((recipe) => sourceKey(recipe.source)).filter(Boolean));
  const categoryId = (categories[0] || {}).id;
  const newLinks = links.filter((link) => !existingSources.has(sourceKey(link)));
  if (!newLinks.length) {
    showToast('Diese Links sind bereits in deiner Sammlung.');
    return;
  }
  const submitButton = $('#recipeSubmitButton');
  const newRecipes = [];
  let extractedCount = 0;
  let failedCount = 0;
  submitButton.disabled = true;
  submitButton.textContent = 'Links werden gelesen …';
  for (let index = 0; index < newLinks.length; index += 1) {
    const link = newLinks[index];
    let parsed = null;
    if (isInstagramSource(link)) {
      try {
        parsed = await fetchInstagramRecipe(link);
        extractedCount += 1;
      } catch (error) {
        failedCount += 1;
      }
    }
    newRecipes.push({
      id: uid('link'),
      title: parsed ? parsed.title : recipeTitleFromUrl(link),
      categoryId,
      source: link,
      sourceType: sourceTypeFor(link),
      time: parsed ? parsed.time : 0,
      ingredients: parsed ? parsed.ingredients : [],
      steps: parsed ? parsed.steps : [],
      note: parsed ? parsed.note : (isInstagramSource(link) ? 'Aus Link importiert — Instagram konnte den Rezepttext noch nicht automatisch liefern.' : 'Aus Link importiert — Zutaten und Zubereitung später ergänzen.'),
      createdAt: new Date(Date.now() + index).toISOString(),
      isFavorite: false
    });
  }
  submitButton.disabled = false;
  setDialogMode(state.mode);
  recipes = newRecipes.concat(recipes);
  writeStorage();
  render();
  closeDialog('recipeDialog');
  const importedLabel = newRecipes.length + (newRecipes.length === 1 ? ' Link wurde' : ' Links wurden') + ' importiert';
  if (failedCount) {
    showToast(importedLabel + ', ' + extractedCount + ' ausgelesen. ' + failedCount + ' bitte im Reader mit ↻ erneut versuchen.');
  } else {
    showToast(extractedCount ? importedLabel + ' und ' + extractedCount + ' Rezept' + (extractedCount === 1 ? ' wurde' : 'e wurden') + ' ausgelesen.' : importedLabel + '.');
  }
}

async function enrichPendingInstagramRecipes() {
  const pending = recipes.filter(instagramNeedsEnrichment);
  if (!pending.length) return;
  let updatedCount = 0;
  for (const recipe of pending) {
    try {
      const parsed = await fetchInstagramRecipe(recipe.source);
      if (isPlaceholderTitle(recipe.title)) recipe.title = parsed.title;
      if (!(Array.isArray(recipe.ingredients) && recipe.ingredients.length)) recipe.ingredients = parsed.ingredients;
      if (!(Array.isArray(recipe.steps) && recipe.steps.length)) recipe.steps = parsed.steps;
      if (!Number(recipe.time)) recipe.time = parsed.time;
      if (!recipe.note || /später ergänzen|noch nicht automatisch|speichert!?\s*euch das rezept/i.test(recipe.note)) recipe.note = parsed.note;
      recipe.updatedAt = new Date().toISOString();
      updatedCount += 1;
    } catch (error) {
      // A public Instagram page can still reject automated requests; keep the saved source intact.
    }
  }
  if (!updatedCount) return;
  writeStorage();
  render();
  if (state.readerId) {
    const readerRecipe = recipes.find((recipe) => recipe.id === state.readerId);
    if (readerRecipe) renderReader(readerRecipe);
  }
  showToast(updatedCount + (updatedCount === 1 ? ' Instagram-Rezept wurde' : ' Instagram-Rezepte wurden') + ' automatisch ausgelesen.');
}

function openReader(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  state.readerId = recipeId;
  renderReader(recipe);
  $('#readerDialog').showModal();
  requestWakeLock();
}

function renderReader(recipe) {
  const source = safeHref(recipe.source);
  const ingredients = recipe.ingredients || [];
  const steps = recipe.steps || [];
  $('#readerFavorite').textContent = recipe.isFavorite ? '♥' : '♡';
  $('#readerFavorite').classList.toggle('is-favorite', Boolean(recipe.isFavorite));
  $('#readerImport').classList.toggle('is-hidden', !isInstagramSource(recipe.source));
  $('#recipePaper').innerHTML =
    '<div class="paper-kicker"><span class="paper-kicker-dot"></span>' + escapeHtml(categoryName(recipe.categoryId)) + ' · ' + escapeHtml(sourceLabel(recipe)) + '</div>' +
    '<h1 class="paper-title">' + escapeHtml(recipe.title) + '</h1>' +
    '<p class="paper-intro">' + escapeHtml(recipe.note || 'Ein Lieblingsrezept aus Steffis Rezeptewelt — gesammelt, sortiert und bereit zum Nachkochen.') + '</p>' +
    '<div class="paper-meta">' +
      '<span><strong>⏱</strong> ' + (recipe.time ? escapeHtml(recipe.time + ' Minuten') : 'Zeit nach Gefühl') + '</span>' +
      '<span><strong>✦</strong> ' + ingredients.length + ' Zutaten</span>' +
      '<span><strong>↗</strong> ' + escapeHtml(recipe.source ? 'Quelle verknüpft' : 'Eigenes Rezept') + '</span>' +
    '</div>' +
    '<div class="paper-content">' +
      '<section class="paper-section"><h3>Zutaten</h3>' +
        (ingredients.length ? '<ul class="paper-ingredients">' + ingredients.map((item) => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul>' : '<div class="paper-empty">Noch keine Zutaten ergänzt. Öffne „Bearbeiten“, sobald du das Rezept vervollständigen möchtest.</div>') +
      '</section>' +
      '<section class="paper-section"><h3>Zubereitung</h3>' +
        (steps.length ? '<ol class="paper-steps">' + steps.map((item) => '<li>' + escapeHtml(item) + '</li>').join('') + '</ol>' : '<div class="paper-empty">Noch keine Zubereitung ergänzt. Der gespeicherte Link bleibt als Quelle erhalten.</div>') +
      '</section>' +
    '</div>' +
    (recipe.note && ingredients.length && steps.length ? '<div class="paper-note">' + escapeHtml(recipe.note) + '</div>' : '') +
    (source ? '<a class="paper-source" href="' + escapeHtml(source) + '" target="_blank" rel="noreferrer">Quelle öffnen <span aria-hidden="true">↗</span></a>' : '');
}

async function retryInstagramRecipe() {
  const recipe = recipes.find((item) => item.id === state.readerId);
  if (!recipe || !isInstagramSource(recipe.source)) return;
  const button = $('#readerImport');
  button.disabled = true;
  button.textContent = '…';
  try {
    const parsed = await fetchInstagramRecipe(recipe.source);
    if (isPlaceholderTitle(recipe.title)) recipe.title = parsed.title;
    if (!(Array.isArray(recipe.ingredients) && recipe.ingredients.length)) recipe.ingredients = parsed.ingredients;
    if (!(Array.isArray(recipe.steps) && recipe.steps.length)) recipe.steps = parsed.steps;
    if (!Number(recipe.time)) recipe.time = parsed.time;
    if (!recipe.note || /Aus Link importiert|noch nicht automatisch|speichert!?\s*euch das rezept/i.test(recipe.note)) recipe.note = parsed.note;
    recipe.updatedAt = new Date().toISOString();
    writeStorage();
    render();
    renderReader(recipe);
    showToast('Instagram-Rezept ausgelesen und aktualisiert.');
  } catch (error) {
    showToast('Instagram konnte nicht ausgelesen werden. Prüfe, ob das Reel öffentlich ist und die Caption ein Rezept enthält.');
  } finally {
    button.disabled = false;
    button.textContent = '↻';
  }
}

function deleteRecipe(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  if (!window.confirm('„' + recipe.title + '“ wirklich löschen?')) return;
  recipes = recipes.filter((item) => item.id !== recipeId);
  writeStorage();
  state.readerId = '';
  closeDialog('readerDialog');
  render();
  showToast('Rezept gelöscht.');
}

function toggleFavorite(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  recipe.isFavorite = !recipe.isFavorite;
  writeStorage();
  render();
  if (state.readerId === recipeId) renderReader(recipe);
  showToast(recipe.isFavorite ? 'Zu Favoriten hinzugefügt.' : 'Aus Favoriten entfernt.');
}

function parseRepoInput(value) {
  const raw = String(value || '').trim().replace(/\/+$/, '').replace(/\.git$/, '');
  const cleaned = raw.replace(/^https?:\/\/github\.com\//i, '').replace(/^github\.com\//i, '');
  const parts = cleaned.split('/').filter(Boolean);
  if (parts.length < 2) return null;
  return { owner: parts[0], repo: parts[1] };
}

async function loadGithubFiles() {
  const repo = parseRepoInput($('#githubRepo').value);
  const path = $('#githubPath').value.trim().replace(/^\/+|\/+$/g, '');
  const status = $('#githubStatus');
  const list = $('#githubFileList');
  if (!repo) {
    status.className = 'github-status is-error';
    status.textContent = 'Bitte ein Repository im Format owner/repository eintragen.';
    return;
  }
  localStorage.setItem(STORAGE_KEYS.github, $('#githubRepo').value.trim());
  status.className = 'github-status';
  status.textContent = 'Repository wird durchsucht …';
  list.innerHTML = '';
  $('#githubLoadButton').disabled = true;
  const apiPath = path ? '/' + path.split('/').map(encodeURIComponent).join('/') : '';
  try {
    const response = await fetch('https://api.github.com/repos/' + encodeURIComponent(repo.owner) + '/' + encodeURIComponent(repo.repo) + '/contents' + apiPath, {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!response.ok) throw new Error('GitHub antwortete mit ' + response.status);
    const payload = await response.json();
    const files = Array.isArray(payload) ? payload : [payload];
    githubFiles = files.filter((file) => file.type === 'file' && /\.(md|markdown|txt)$/i.test(file.name)).slice(0, 40);
    githubContext = { owner: repo.owner, repo: repo.repo, branch: githubFiles[0] && githubFiles[0].git_url ? 'main' : 'main' };
    if (!githubFiles.length) {
      status.className = 'github-status is-error';
      status.textContent = 'Keine Markdown- oder TXT-Rezepte in diesem Ordner gefunden.';
      return;
    }
    status.className = 'github-status is-success';
    status.textContent = githubFiles.length + (githubFiles.length === 1 ? ' Rezeptdatei gefunden.' : ' Rezeptdateien gefunden.');
    renderGithubFiles();
  } catch (error) {
    status.className = 'github-status is-error';
    status.textContent = 'Repository konnte nicht geladen werden. Ist es öffentlich und der Pfad korrekt?';
  } finally {
    $('#githubLoadButton').disabled = false;
  }
}

function renderGithubFiles() {
  $('#githubFileList').innerHTML =
    '<button class="button button-primary button-full" type="button" data-github-import-all>Alle Rezepte importieren</button>' +
    githubFiles.map((file, index) =>
      '<div class="github-file-row"><div class="github-file-name"><span class="github-file-icon">md</span><span>' + escapeHtml(file.name) + '</span></div><button class="button button-secondary" type="button" data-github-import="' + index + '">Importieren</button></div>'
    ).join('');
}

function cleanMarkdownLine(line) {
  return line.replace(/^\s*(?:[-*+]\s+|\d+[.)]\s+|>\s+)/, '').replace(/\*\*/g, '').trim();
}

function markdownSection(lines, patterns) {
  const start = lines.findIndex((line) => /^#{1,6}\s+/.test(line) && patterns.some((pattern) => pattern.test(line)));
  if (start < 0) return [];
  const section = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^#{1,6}\s+/.test(lines[index])) break;
    const cleaned = cleanMarkdownLine(lines[index]);
    if (cleaned && !/^[-|:\s]+$/.test(cleaned)) section.push(cleaned);
  }
  return section;
}

function parseMarkdownRecipe(content, file) {
  const lines = String(content || '').split(/\r?\n/);
  const titleLine = lines.find((line) => /^#\s+/.test(line));
  const frontmatterTitle = lines.find((line) => /^(title|name)\s*:/i.test(line));
  const title = cleanMarkdownLine((frontmatterTitle || '').split(':').slice(1).join(':')) ||
    cleanMarkdownLine((titleLine || '').replace(/^#\s+/, '')) ||
    file.name.replace(/\.(md|markdown|txt)$/i, '').replace(/[-_]+/g, ' ');
  const categoryLine = lines.find((line) => /^category\s*:/i.test(line));
  const timeLine = lines.find((line) => /^(time|zeit|prep|duration)\s*:/i.test(line));
  const ingredients = markdownSection(lines, [/zutaten/i, /ingredients/i, /einkauf/i]);
  const steps = markdownSection(lines, [/zubereitung/i, /instructions/i, /steps/i, /method/i, /anleitung/i]);
  const normalizedCategory = cleanMarkdownLine((categoryLine || '').split(':').slice(1).join(':')).toLowerCase();
  const matchingCategory = categories.find((category) => category.name.toLowerCase() === normalizedCategory);
  const timeMatch = String(timeLine || '').match(/\d+/);
  return {
    id: uid('github'),
    title: title.charAt(0).toUpperCase() + title.slice(1),
    categoryId: matchingCategory ? matchingCategory.id : (categories[0] || {}).id,
    source: file.html_url || file.download_url || '',
    sourceType: 'GitHub',
    time: timeMatch ? Number(timeMatch[0]) : 0,
    ingredients,
    steps,
    note: 'Aus GitHub importiert.',
    createdAt: new Date().toISOString(),
    isFavorite: false
  };
}

async function importGithubFile(file) {
  const status = $('#githubStatus');
  status.className = 'github-status';
  status.textContent = file.name + ' wird importiert …';
  try {
    const response = await fetch(file.download_url);
    if (!response.ok) throw new Error('Datei konnte nicht geladen werden.');
    const recipe = parseMarkdownRecipe(await response.text(), file);
    recipes = [recipe].concat(recipes);
    writeStorage();
    render();
    status.className = 'github-status is-success';
    status.textContent = '„' + recipe.title + '“ wurde importiert.';
    showToast('GitHub-Rezept importiert.');
  } catch (error) {
    status.className = 'github-status is-error';
    status.textContent = 'Die Datei konnte nicht importiert werden.';
  }
}

async function importAllGithubFiles() {
  for (const file of githubFiles) {
    await importGithubFile(file);
  }
  showToast(githubFiles.length + ' GitHub-Rezepte importiert.');
}

function openCategoryDialog() {
  $('#categoryForm').reset();
  $('#categoryDialog').showModal();
  setTimeout(() => $('#categoryName').focus(), 60);
}

function addCategoryFromForm() {
  const name = $('#categoryName').value.trim();
  if (!name) return;
  const id = slugify(name) || uid('category');
  if (categories.some((category) => category.name.toLowerCase() === name.toLowerCase())) {
    showToast('Diese Kategorie gibt es schon.');
    return;
  }
  categories.push({ id, name });
  writeStorage();
  state.view = 'category';
  state.categoryId = id;
  closeDialog('categoryDialog');
  render();
  showToast('Kategorie angelegt.');
}

function setView(view, categoryId) {
  state.view = view;
  state.categoryId = categoryId || '';
  closeSidebar();
  render();
}

function clearFilters() {
  state.view = 'all';
  state.categoryId = '';
  state.search = '';
  $('#searchInput').value = '';
  render();
}

function openSidebar() {
  $('#sidebar').classList.add('is-open');
  $('#sidebarBackdrop').classList.add('is-visible');
}

function closeSidebar() {
  $('#sidebar').classList.remove('is-open');
  $('#sidebarBackdrop').classList.remove('is-visible');
}

function registerInteractions() {
  document.addEventListener('click', (event) => {
    const viewButton = event.target.closest('[data-view]');
    if (viewButton) {
      event.preventDefault();
      setView(viewButton.dataset.view);
      return;
    }
    const categoryButton = event.target.closest('[data-category]');
    if (categoryButton) {
      setView('category', categoryButton.dataset.category);
      return;
    }
    const favoriteButton = event.target.closest('[data-favorite-id]');
    if (favoriteButton) {
      event.stopPropagation();
      toggleFavorite(favoriteButton.dataset.favoriteId);
      return;
    }
    const card = event.target.closest('[data-recipe-id]');
    if (card) {
      openReader(card.dataset.recipeId);
      return;
    }
    if (event.target.closest('[data-open-add]')) openRecipeDialog('recipe');
    if (event.target.closest('[data-clear-filters]')) clearFilters();
    const closeButton = event.target.closest('[data-close-dialog]');
    if (closeButton) closeDialog(closeButton.dataset.closeDialog);
    const modeTab = event.target.closest('[data-mode]');
    if (modeTab) setDialogMode(modeTab.dataset.mode);
    const githubImport = event.target.closest('[data-github-import]');
    if (githubImport) importGithubFile(githubFiles[Number(githubImport.dataset.githubImport)]);
    if (event.target.closest('[data-github-import-all]')) importAllGithubFiles();
  });

  $('#addRecipeButton').addEventListener('click', () => openRecipeDialog('recipe'));
  $('#quickLinkButton').addEventListener('click', () => openRecipeDialog('links'));
  $('#githubImportButton').addEventListener('click', () => openRecipeDialog('github'));
  $('#githubExportButton').addEventListener('click', exportGithubData);
  $('#githubExportDialogButton').addEventListener('click', exportGithubData);
  $('#addCategoryButton').addEventListener('click', openCategoryDialog);
  $('#menuButton').addEventListener('click', openSidebar);
  $('#sidebarClose').addEventListener('click', closeSidebar);
  $('#sidebarBackdrop').addEventListener('click', closeSidebar);
  $('#clearFilterButton').addEventListener('click', clearFilters);
  $('#searchInput').addEventListener('input', (event) => {
    state.search = event.target.value;
    render();
  });
  $('#sortSelect').addEventListener('change', (event) => {
    state.sort = event.target.value;
    render();
  });
  $('#recipeSubmitButton').addEventListener('click', () => {
    if (state.mode === 'recipe') saveRecipeFromForm();
    else if (state.mode === 'links') importBulkLinks();
    else closeDialog('recipeDialog');
  });
  $('#recipeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if (state.mode === 'recipe') saveRecipeFromForm();
    else if (state.mode === 'links') importBulkLinks();
    else closeDialog('recipeDialog');
  });
  $('#categoryForm').addEventListener('submit', (event) => {
    event.preventDefault();
    addCategoryFromForm();
  });
  $('#recipeSource').addEventListener('blur', () => {
    if (!$('#recipeTitle').value.trim() && $('#recipeSource').value.trim()) $('#recipeTitle').value = recipeTitleFromUrl($('#recipeSource').value);
  });
  $('#linkFileInput').addEventListener('change', async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const content = await file.text();
    const urls = content.match(/https?:\/\/[^\s,;]+/g) || [];
    $('#bulkLinks').value = urls.join('\n');
    showToast(urls.length ? urls.length + ' Links aus der Datei übernommen.' : 'Keine URLs in der Datei gefunden.');
  });
  $('#githubLoadButton').addEventListener('click', loadGithubFiles);
  $('#readerClose').addEventListener('click', () => closeDialog('readerDialog'));
  $('#readerBack').addEventListener('click', () => closeDialog('readerDialog'));
  $('#readerPrint').addEventListener('click', () => window.print());
  $('#readerFavorite').addEventListener('click', () => toggleFavorite(state.readerId));
  $('#readerImport').addEventListener('click', retryInstagramRecipe);
  $('#readerEdit').addEventListener('click', () => {
    const recipe = recipes.find((item) => item.id === state.readerId);
    closeDialog('readerDialog');
    if (recipe) openRecipeDialog('recipe', recipe);
  });
  $('#readerDelete').addEventListener('click', () => deleteRecipe(state.readerId));
  $('#recipeDialog').addEventListener('click', (event) => {
    if (event.target === $('#recipeDialog')) closeDialog('recipeDialog');
  });
  $('#categoryDialog').addEventListener('click', (event) => {
    if (event.target === $('#categoryDialog')) closeDialog('categoryDialog');
  });
  $('#readerDialog').addEventListener('click', (event) => {
    if (event.target === $('#readerDialog')) closeDialog('readerDialog');
  });
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      $('#searchInput').focus();
    }
    if (event.key === 'Escape') closeSidebar();
  });
  document.addEventListener('visibilitychange', () => {
    if ($('#readerDialog').open && document.visibilityState === 'visible') requestWakeLock();
    if (document.visibilityState === 'hidden') releaseWakeLock();
  });
}

function registerPwa() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js?v=10', { updateViaCache: 'none' }).catch(() => {});
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $('#installButton').classList.remove('is-hidden');
  });
  $('#installButton').addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    $('#installButton').classList.add('is-hidden');
  });
}

function importSharedLink() {
  const params = new URLSearchParams(window.location.search);
  const shared = params.get('url') || params.get('text');
  const action = params.get('new');
  if (action === 'recipe' || action === 'link') {
    history.replaceState({}, '', window.location.pathname);
    setTimeout(() => openRecipeDialog(action === 'link' ? 'links' : 'recipe'), 350);
    return;
  }
  if (!shared || !/^https?:\/\//i.test(shared)) return;
  history.replaceState({}, '', window.location.pathname);
  setTimeout(() => {
    openRecipeDialog('recipe');
    $('#recipeSource').value = shared;
    $('#recipeTitle').value = recipeTitleFromUrl(shared);
    showToast('Link aus Teilen übernommen — jetzt speichern.');
  }, 350);
}

render();
registerInteractions();
registerPwa();
hydrateRepositoryRecipes().then(() => enrichPendingInstagramRecipes()).catch(() => {});
importSharedLink();

