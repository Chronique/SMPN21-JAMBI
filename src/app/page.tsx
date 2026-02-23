// src/app/page.tsx
import { Metadata } from "next";
import App from "./app";
import { METADATA } from "~/lib/utils";
import { Attribution } from "ox/erc8021";

const frame = {
  version: "next",
  imageUrl: METADATA.bannerImageUrl,
  button: {
    title: "Mulai Memilih", 
    action: {
      type: "launch_frame",
      name: METADATA.name,
      url: METADATA.homeUrl,
      splashImageUrl: METADATA.iconImageUrl,
      splashBackgroundColor: METADATA.splashBackgroundColor
    }
  }
};

const DATA_SUFFIX = Attribution.toDataSuffix({ codes: ["bc_vghq983e"] });

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: METADATA.name,
    openGraph: {
      title: METADATA.name,
      description: METADATA.description,
      images: [METADATA.bannerImageUrl],
      url: METADATA.homeUrl,
      siteName: METADATA.name
    },
    other: {
      "fc:frame": JSON.stringify(frame),
      "fc:miniapp": JSON.stringify(frame),
      "base_builder": "bc_vghq983e",
      "base:app_id": "695b6e784d3a403912ed8de8",
    }
  };
}

export default function Home() {
  return (<App />);
}