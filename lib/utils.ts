// lib/utils.ts
// Small utility functions used across the app.

export function formatDateISO(date: Date = new Date()): string {
  return date.toISOString();
}

export function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export function noop(): void {}
