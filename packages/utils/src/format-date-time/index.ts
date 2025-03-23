export function formatDateTime(date: string): string {
    return new Date(date).toLocaleString('ru-RU', { hour12: false });
}
  