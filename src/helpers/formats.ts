import i18next from "i18next";

const createFormatter = (
  dateString: string,
  options: Intl.DateTimeFormatOptions
): string => {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);
  return new Intl.DateTimeFormat(i18next.language || "en-US", {
    ...options,
    numberingSystem: i18next.language === "ar" ? "arab" : undefined,
  }).format(date);
};

export const formatDate = (dateString: string, getYear?: boolean): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    ...(getYear && { year: "numeric" }),
  };
  return createFormatter(dateString, options);
};

export const formatTime = (timeString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return createFormatter(timeString, options);
};
export const convertNumberToLocale = (
  input: number | string | null
): string => {
  if (!input && input !== 0) {
    return "";
  }
  const locales = {
    en: "en-US",
    ar: "ar-EG",
  };

  const number = typeof input === "string" ? parseFloat(input) : input;

  if (isNaN(number)) {
    return input.toString();
  }

  return number.toLocaleString(locales[i18next.language as "en" | "ar"], {
    useGrouping: false,
  });
};
