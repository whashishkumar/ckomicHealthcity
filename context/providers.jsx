"use client";
import { AboutProvider } from "./AboutContext";
import { FaqProvider } from "./FaqContext";
import { FooterProvider } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";

const providers = [HeaderContext, FooterProvider, AboutProvider, FaqProvider];

export function Providers({ children }) {
  return providers.reduce(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
}
