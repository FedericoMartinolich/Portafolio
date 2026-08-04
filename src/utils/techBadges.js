const TECH = {
  html: { icon: 'fa-brands fa-html5', color: '#e34f26' },
  css: { icon: 'fa-brands fa-css3-alt', color: '#38bdf8' },
  javascript: { icon: 'fa-brands fa-js', color: '#f7df1e' },
  php: { icon: 'fa-brands fa-php', color: '#8a93c8' },
  mysql: { icon: 'fa-solid fa-database', color: '#5eb3e6' },
  bootstrap: { icon: 'fa-brands fa-bootstrap', color: '#a86ee0' },
  ajax: { icon: 'fa-solid fa-arrows-rotate', color: '#4db3ff' },
  'tesseract ocr': { icon: 'fa-solid fa-eye', color: '#60a5fa' },
  laravel: { icon: 'fa-brands fa-laravel', color: '#ff2d20' },
  vue: { icon: 'fa-brands fa-vuejs', color: '#42b883' },
  livewire: { icon: 'fa-solid fa-bolt', color: '#fb7185' },
  blade: { icon: 'fa-solid fa-feather', color: '#f87171' },
  'tailwind css': { icon: 'fa-solid fa-wind', color: '#38bdf8' },
  cloudinary: { icon: 'fa-solid fa-cloud', color: '#7c8cff' },
  'google sheets': { icon: 'fa-solid fa-file-spreadsheet', color: '#4ade80' },
  vercel: { icon: 'fa-solid fa-caret-up', color: '#a1a1aa' },
  spatie: { icon: 'fa-solid fa-shield-halved', color: '#fbbf24' },
  fullcalendar: { icon: 'fa-regular fa-calendar', color: '#fb7185' },
  leaflet: { icon: 'fa-solid fa-map-location-dot', color: '#a3e635' },
  jwt: { icon: 'fa-solid fa-key', color: '#fde68a' },
  laragon: { icon: 'fa-solid fa-laptop-code', color: '#94a3b8' },
  vite: { icon: 'fa-solid fa-bolt', color: '#a78bfa' }
}

const FALLBACK = { icon: 'fa-solid fa-code', color: '#94a3b8' }

export function resolveTech(name) {
  const label = String(name || '')
  const n = label.toLowerCase()
  if (!n) return { label, ...FALLBACK }
  if (TECH[n]) return { label, ...TECH[n] }
  for (const key of Object.keys(TECH)) {
    if (n.includes(key)) return { label, ...TECH[key] }
  }
  return { label, ...FALLBACK }
}
