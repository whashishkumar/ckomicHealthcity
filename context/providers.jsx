"use client";
import { HeaderContext } from "./HeaderContext";

const providers = [
  HeaderContext,
  // Add all other providers here
];

export function Providers({ children }) {
  return providers.reduce(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
}
