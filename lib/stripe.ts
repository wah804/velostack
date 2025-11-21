// lib/stripe.ts
// Placeholder Stripe helper functions. Integrate `stripe` SDK when ready.

export function initStripe(apiKey?: string) {
  // TODO: import Stripe from 'stripe' and initialize client with apiKey
  throw new Error("initStripe not implemented");
}

export function centsToCurrency(cents: number, currency = "USD") {
  const formatted = (cents / 100).toFixed(2);
  return `${currency} ${formatted}`;
}
