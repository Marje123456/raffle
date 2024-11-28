import { createGettext } from "vue3-gettext";
import translations from "../language/translations.json";

export default defineNuxtPlugin((nuxtApp) => {
  const _gettext = createGettext({
    availableLanguages: {
      en: "English",
      es: "Español",
    },
    defaultLanguage: "en",
    translations,
  });

  nuxtApp.vueApp.use(_gettext);

  return {
    provide: {
      gettext: _gettext.$gettext,
    },
  };
});
