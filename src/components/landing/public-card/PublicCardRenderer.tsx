// src/components/public-card/PublicCardRenderer.tsx

import type { ComponentType } from "react";

import type { PublicCard } from "@/types/publicCard";

import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import CorporateTemplate from "./templates/CorporateTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import PremiumTemplate from "./templates/PremiumTemplate";

type PublicTemplateData = {
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

    qualities: {
        uuid?: string;
        name: string;
    }[];

    documents: Array<File | null>;

    networks: {
        uuid: string;
        value: string;
        label: string;
        red_social?: string;
        red_social_uuid?: string;
        name?: string;
        icon?: string | null;
        icon_url?: string | null;
        type?: {
            uuid: string;
            name: string;
            type?: string;
            icon_url: string | null;
        };
    }[];
};

interface Props {
    card: PublicCard;
}

interface TemplateProps {
    data: PublicTemplateData;
    profilePreview: string;
    bannerPreview: string;
}

const templateMap: Record<string, ComponentType<TemplateProps>> = {
    "1": ClassicTemplate,
    "2": ModernTemplate,
    "3": CorporateTemplate,
    "4": MinimalTemplate,
    "5": PremiumTemplate,
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

        documents: [],

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
        <main className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="mx-auto w-full max-w-[420px]">
                <SelectedTemplate
                    data={data}
                    profilePreview={card.photo_perfil_url ?? ""}
                    bannerPreview={card.photo_banner_url ?? ""}
                />
            </div>
        </main>
    );
}