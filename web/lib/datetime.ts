export type Language = "en" | "zh" | "ru" | "uk";

const LOCALE_MAP: Record<Language, string> = {
  en: "en-US",
  zh: "zh-CN",
  ru: "ru-RU",
  uk: "uk-UA",
};

export function getLocale(lang: Language): string {
  return LOCALE_MAP[lang] || "en-US";
}

export function formatDate(
  date: Date,
  lang: Language,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
): string {
  return new Intl.DateTimeFormat(getLocale(lang), options).format(date);
}

export function formatTime(
  date: Date,
  lang: Language,
  options: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" },
): string {
  return new Intl.DateTimeFormat(getLocale(lang), options).format(date);
}
