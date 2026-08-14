// src/components/public-card/PublicCardRenderer.tsx

import type { ComponentType } from "react";

import type { PublicCard } from "@/types/publicCard";

import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import CorporateTemplate from "./templates/CorporateTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import PremiumTemplate from "./templates/PremiumTemplate";

type PublicTemplateQuality =
    | string
    | {
          uuid?: string;
          name: string;
      };

type PublicTemplateDocument = {
    uuid?: string;
    name: string;
    document_url: string;
};

type PublicTemplateNetwork = {
    uuid?: string;
    value: string;
    label?: string;
    red_social?: string;
    red_social_uuid?: string;
    name?: string;
    icon?: string | null;
    icon_url?: string | null;
    type?: {
        uuid?: string;
        name: string;
        type?: string;
        icon_url: string | null;
    };
};

export type PublicTemplateData = {
    first_name: string;
    last_name: string;
    full_name: string;

    position: string;
    institution: string;
    profession: string;
    ubication: string;
    description: string;

    design_id: string;

    primary_color: string;
    secondary_color: string;

    photo_perfil_url?: string | null;
    photo_banner_url?: string | null;

    qualities: PublicTemplateQuality[];
    documents: PublicTemplateDocument[];
    networks: PublicTemplateNetwork[];
};

interface Props {
    card: PublicCard;
}

type PublicTemplateProps = {
    data: PublicTemplateData;
    profilePreview?: string;
    bannerPreview?: string;
    isPublicView?: boolean;
};

type PublicTemplateComponent = ComponentType<PublicTemplateProps>;

const templateMap: Record<string, PublicTemplateComponent> = {
    "1": ClassicTemplate as PublicTemplateComponent,
    "2": ModernTemplate as PublicTemplateComponent,
    "3": CorporateTemplate as PublicTemplateComponent,
    "4": MinimalTemplate as PublicTemplateComponent,
    "5": PremiumTemplate as PublicTemplateComponent,
};

const toTemplateData = (card: PublicCard): PublicTemplateData => {
    return {
        first_name: card.first_name ?? "",
        last_name: card.last_name ?? "",
        full_name:
            card.full_name ??
            `${card.first_name ?? ""} ${card.last_name ?? ""}`.trim(),

        position: card.position ?? "",
        institution: card.institution ?? "",
        profession: card.profession ?? "",
        ubication: card.ubication ?? "",
        description: card.description ?? "",

        design_id: String(card.design_id ?? "1"),

        primary_color: card.primary_color ?? "#2563eb",
        secondary_color: card.secondary_color ?? "#111827",

        photo_perfil_url: card.photo_perfil_url ?? null,
        photo_banner_url: card.photo_banner_url ?? null,

        qualities: card.qualities ?? [],

        documents:
            card.documents?.map((document) => ({
                uuid: document.uuid,
                name: document.name ?? "Documento",
                document_url: document.document_url ?? "",
            })) ?? [],

        networks:
            card.networks?.map((network) => ({
                uuid: network.uuid,
                value: network.value ?? "",
                label: network.label ?? "",
                red_social: network.type?.uuid,
                red_social_uuid: network.type?.uuid,
                name: network.type?.name,
                icon: network.type?.icon_url,
                icon_url: network.type?.icon_url,
                type: network.type,
            })) ?? [],
    };
};

export default function PublicCardRenderer({ card }: Props) {
    const designId = String(card.design_id ?? "1");

    const SelectedTemplate = templateMap[designId] ?? ClassicTemplate;

    const data = toTemplateData(card);

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-8 dark:bg-gray-950 sm:px-6 lg:px-10">
            <section className="mx-auto flex w-full max-w-[520px] justify-center">
                <SelectedTemplate
                    data={data}
                    profilePreview=""
                    bannerPreview=""
                    isPublicView
                />
            </section>
        </main>
    );
}