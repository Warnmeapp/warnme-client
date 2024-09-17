// i18n.config.ts
import en from "./locales/en";
import fr from "./locales/fr";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "fr",
    fallbackLocale: "fr",
    messages: {
      en,
      fr,
    },
  };
});
