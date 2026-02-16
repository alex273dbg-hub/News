interface IFormatDateOptions {
  weekday?: "long" | "short" | "narrow";
  year?: "numeric" | "2-digit";
  month?: "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
}

export function formatDate(date: Date): string {
  const options: IFormatDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
