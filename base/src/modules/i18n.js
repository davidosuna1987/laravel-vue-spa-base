import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('@/locales/*.yml')
  ).map(([key, value]) => {
    return [key.slice(11, -4), value.default]
  }),
)

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'es',
  warnHtmlMessage: false,
  fallbackLocale: 'es',
  messages,
})

export { i18n }