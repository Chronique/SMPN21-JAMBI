// src/app/layout.tsx
import type { Metadata } from "next";
import "~/app/globals.css";
import "@worldcoin/mini-apps-ui-kit-react/styles.css";
import { Providers } from "~/app/providers";
import { METADATA } from "~/lib/utils";

export const metadata: Metadata = {
  title: METADATA.name,
  openGraph: {
    title: METADATA.name,
    description: METADATA.description,
    images: [METADATA.bannerImageUrl],
    url: METADATA.homeUrl,
    siteName: METADATA.name
  },
  other: {
    "talentapp:project_verification": "3281d04b5f905ee798ae63a2862d9f34177c0df0c9dfa027877e8eab344d68b0211244761c8f0c832fdc10093723db0e3e4244cc99bc4f37caa6dc144c88ae96"
  }
  };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}