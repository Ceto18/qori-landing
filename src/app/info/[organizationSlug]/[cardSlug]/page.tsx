// src/app/info/[organizationSlug]/[cardSlug]/page.tsx

import { notFound } from "next/navigation";

import { publicCardService } from "@/services/publicCardService";
import PublicCardRenderer from "@/components/landing/public-card/PublicCardRenderer";

type Props = {
  params: Promise<{
    organizationSlug: string;
    cardSlug: string;
  }>;
};

export default async function PublicCardPage({ params }: Props) {
  const { organizationSlug, cardSlug } = await params;

  let card = null;

  try {
    const response = await publicCardService.getPublicCard(
      organizationSlug,
      cardSlug
    );

    card = response.data;
  } catch {
    card = null;
  }

  if (!card) {
    notFound();
  }

  return <PublicCardRenderer card={card} />;
}