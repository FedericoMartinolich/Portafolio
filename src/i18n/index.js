import { createI18n } from 'vue-i18n'
import en from './en'
import es from './es'

export const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: { en, es }
})
