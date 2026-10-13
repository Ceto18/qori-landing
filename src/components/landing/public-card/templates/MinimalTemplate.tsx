"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import {
    BadgeCheck,
    Check,
    Download,
    FileText,
    Link2,
    Loader2,
    MapPin,
    WalletCards,
} from "lucide-react";

import { publicCardService } from "@/services/publicCardService";

import type {
    CardDocument,
    CardFormValues,
    CardNetwork,
    CardQuality,
} from "../types";

interface Props {
    data: CardFormValues;
    organizationSlug?: string;
    cardSlug?: string;
    profilePreview?: string;
    bannerPreview?: string;
    isPublicView?: boolean;
}

export default function MinimalTemplate({
    data,
    organizationSlug = "",
    cardSlug = "",
    profilePreview = "",
    bannerPreview = "",
}: Props) {
    const [walletLoading, setWalletLoading] = useState(false);
    const [contactSaved, setContactSaved] = useState(false);

    const primaryColor = data.primary_color || "#111827";

    const profileImage = profilePreview || data.photo_perfil_url || "";
    const bannerImage = bannerPreview || data.photo_banner_url || "";

    const qualities = data.qualities ?? [];
    const documents = data.documents ?? [];
    const networks = data.networks ?? [];

    const filledQualities = qualities.filter((quality) =>
        getQualityName(quality).trim()
    );

    const filledDocuments = documents.filter(Boolean);

    const filledNetworks = networks.filter((network) => {
        const name = getNetworkName(network);
        const value = getNetworkValue(network);
        const icon = getNetworkIcon(network);

        return network?.uuid?.trim?.() || name.trim() || value.trim() || icon.trim();
    });

    const handleSaveContact = () => {
        try {
            downloadVCard(data, networks);

            setContactSaved(true);

            setTimeout(() => {
                setContactSaved(false);
            }, 2000);
        } catch (error) {
            console.error("Error al guardar el contacto:", error);
        }
    };

    const handleGoogleWallet = async () => {
        if (!organizationSlug || !cardSlug || walletLoading) return;

        try {
            setWalletLoading(true);

            const response = await publicCardService.getWallet(
                organizationSlug,
                cardSlug
            );

            const url = response?.data?.url;

            if (!url) {
                console.error("No se recibió una URL de Google Wallet.");
                return;
            }

            window.location.href = url;
        } catch (error) {
            console.error("Error al generar Google Wallet:", error);
        } finally {
            setWalletLoading(false);
        }
    };

    return (
        <div className="mx-auto w-full overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:border-white/[0.08] dark:bg-gray-950">
            <div className="relative h-28 overflow-hidden">
                {bannerImage ? (
                    <img
                        src={bannerImage}
                        alt="Banner"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div
                        className="h-full w-full"
                        style={{
                            background: `linear-gradient(135deg, ${primaryColor}, #f8fafc)`,
                        }}
                    />
                )}

                <div className="absolute inset-0 bg-white/20 dark:bg-black/20" />

                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-gray-950" />
            </div>

            <div className="-mt-12 px-6 pb-6">
                <div className="relative flex flex-col items-center text-center">
                    <div className="relative">
                        <div
                            className="absolute inset-0 rounded-full opacity-10 blur-2xl"
                            style={{ backgroundColor: primaryColor }}
                        />

                        <div className="relative rounded-full bg-white p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.10)] dark:bg-gray-950">
                            <div
                                className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full text-3xl font-bold text-white ring-4 ring-gray-50 dark:ring-white/[0.06]"
                                style={{ backgroundColor: primaryColor }}
                            >
                                {profileImage ? (
                                    <img
                                        src={profileImage}
                                        alt={data.full_name || "Perfil"}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    data.full_name?.charAt(0)?.toUpperCase() || "?"
                                )}
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-5 break-words text-[22px] font-extrabold leading-tight text-gray-950 dark:text-white">
                        {data.full_name || "Nombre completo"}
                    </h3>

                    <p
                        className="mt-1 break-words text-sm font-bold"
                        style={{ color: primaryColor }}
                    >
                        {data.position || "Cargo"}
                    </p>

                    {(data.institution || data.profession) && (
                        <div className="mt-3 flex flex-col items-center gap-1">
                            {data.institution && (
                                <p className="max-w-full break-words rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-white/[0.06] dark:text-gray-400">
                                    {data.institution}
                                </p>
                            )}

                            {data.profession && (
                                <p className="max-w-full break-words text-xs font-medium text-gray-400">
                                    {data.profession}
                                </p>
                            )}
                        </div>
                    )}

                    {filledNetworks.length > 0 && (
                        <div className="mt-5 flex max-w-full flex-wrap justify-center gap-2">
                            {filledNetworks.map((network, index) => {
                                const href = getNetworkHref(network);

                                return (
                                    <a
                                        key={`network-${network.uuid || getNetworkName(network) || index
                                            }`}
                                        href={href}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel={
                                            href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        title={getNetworkName(network) || "Red social"}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-gray-300"
                                    >
                                        <MinimalNetworkIcon
                                            icon={getNetworkIcon(network)}
                                            name={getNetworkName(network)}
                                            color={primaryColor}
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>

                {data.description && (
                    <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 dark:border-white/[0.06] dark:bg-white/[0.04]">
                        <p className="break-words text-center text-sm leading-6 text-gray-600 dark:text-gray-300">
                            {data.description}
                        </p>
                    </div>
                )}

                {data.ubication && (
                    <div className="mt-6">
                        <Info
                            icon={<MapPin size={16} />}
                            value={data.ubication}
                            color={primaryColor}
                        />
                    </div>
                )}

                {filledQualities.length > 0 && (
                    <SectionTitle
                        icon={<BadgeCheck size={14} />}
                        title="Características"
                    >
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3 dark:border-white/[0.06] dark:bg-white/[0.04]">
                            <div className="flex flex-wrap justify-center gap-2">
                                {filledQualities.map((quality, index) => (
                                    <span
                                        key={`${getQualityName(quality)}-${index}`}
                                        className="max-w-full break-words rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-gray-300"
                                    >
                                        {getQualityName(quality)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SectionTitle>
                )}

                {filledDocuments.length > 0 && (
                    <SectionTitle
                        icon={<FileText size={14} />}
                        title="Documentos"
                    >
                        <div className="space-y-3">
                            {filledDocuments.map((document, index) => (
                                <DocumentInfo
                                    key={index}
                                    document={document}
                                    index={index}
                                    color={primaryColor}
                                />
                            ))}
                        </div>
                    </SectionTitle>
                )}

                <div className="mt-6 space-y-3">
                    <button
                        type="button"
                        onClick={handleSaveContact}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                        style={{
                            backgroundColor: primaryColor,
                            boxShadow: `0 12px 26px ${primaryColor}30`,
                        }}
                    >
                        {contactSaved ? (
                            <>
                                <Check size={18} />
                                Contacto guardado
                            </>
                        ) : (
                            <>
                                <Download size={18} />
                                Guardar contacto
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={handleGoogleWallet}
                        disabled={walletLoading || !organizationSlug || !cardSlug}
                        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray-950 px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-black hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/[0.08] dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
                    >
                        {walletLoading ? (
                            <>
                                <Loader2 size={17} className="animate-spin" />
                                Generando...
                            </>
                        ) : (
                            <>
                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-gray-950 dark:bg-gray-950 dark:text-white">
                                    <WalletCards size={15} />
                                </span>

                                Agregar a Google Wallet
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

function SectionTitle({
    icon,
    title,
    children,
}: {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}) {
    return (
        <div className="mt-6">
            <h4 className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                {icon}
                {title}
            </h4>

            {children}
        </div>
    );
}

function Info({
    icon,
    value,
    color,
}: {
    icon: ReactNode;
    value?: string;
    color: string;
}) {
    if (!value) return null;

    return (
        <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-3 py-3 text-center text-sm text-gray-600 dark:border-white/[0.06] dark:bg-white/[0.04] dark:text-gray-300">
            <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: color }}
            >
                {icon}
            </span>

            <span className="min-w-0 break-words font-medium">{value}</span>
        </div>
    );
}

function DocumentInfo({
    document,
    index,
    color,
}: {
    document: CardDocument;
    index: number;
    color: string;
}) {
    if (!document) return null;

    const documentName = getDocumentName(document, index);
    const documentUrl = getDocumentUrl(document);

    const content = (
        <>
            <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: color }}
            >
                <FileText size={16} />
            </span>

            <span className="min-w-0 flex-1 truncate font-medium">
                {documentName}
            </span>
        </>
    );

    if (documentUrl) {
        return (
            <a
                href={documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-3 py-3 text-sm text-gray-600 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-sm dark:border-white/[0.06] dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/[0.07]"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-3 py-3 text-sm text-gray-600 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-sm dark:border-white/[0.06] dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/[0.07]">
            {content}
        </div>
    );
}

function MinimalNetworkIcon({
    icon,
    name,
    color,
}: {
    icon?: string | null;
    name?: string;
    color: string;
}) {
    if (!icon) {
        return <Link2 size={16} style={{ color }} />;
    }

    return (
        <img
            src={icon}
            alt={name || "Red social"}
            className="h-[18px] w-[18px] object-contain"
        />
    );
}

function getQualityName(quality: CardQuality) {
    if (!quality) return "";
    if (typeof quality === "string") return quality;

    return quality.name || "";
}

function getNetworkName(network: CardNetwork) {
    return (
        network.name ||
        network.type?.name ||
        network.label ||
        network.value ||
        ""
    );
}

function getNetworkValue(network: CardNetwork) {
    return network.value || "";
}

function getNetworkIcon(network: CardNetwork) {
    return (
        network.icon_url ||
        network.icon ||
        network.type?.icon_url ||
        ""
    );
}

function getNetworkHref(network: CardNetwork) {
    const value = getNetworkValue(network);
    const type = network.type?.type?.toLowerCase();
    const name = getNetworkName(network).toLowerCase();

    if (!value) return "#";

    if (
        type === "email" ||
        name.includes("email") ||
        name.includes("correo")
    ) {
        return `mailto:${value}`;
    }

    if (type === "phone" || type === "tel") {
        const phone = value.replace(/\D/g, "");

        if (name.includes("whatsapp")) {
            return `https://wa.me/${phone}`;
        }

        return `tel:${phone}`;
    }

    if (name.includes("whatsapp")) {
        const phone = value.replace(/\D/g, "");
        return `https://wa.me/${phone}`;
    }

    if (
        value.startsWith("http://") ||
        value.startsWith("https://")
    ) {
        return value;
    }

    return value;
}

function getDocumentName(document: CardDocument, index: number) {
    if (document instanceof File) {
        return document.name;
    }

    if (typeof document === "string") {
        return getNameFromPath(document) || `Documento ${index + 1}`;
    }

    if (document && typeof document === "object") {
        return (
            document.name ||
            document.file_name ||
            document.filename ||
            document.document_name ||
            document.original_name ||
            document.originalName ||
            document.title ||
            document.document?.name ||
            document.document?.file_name ||
            getNameFromPath(document.url) ||
            getNameFromPath(document.file_url) ||
            getNameFromPath(document.document_url) ||
            getNameFromPath(document.path) ||
            getNameFromPath(document.document?.url) ||
            getNameFromPath(document.document?.path) ||
            `Documento ${index + 1}`
        );
    }

    return `Documento ${index + 1}`;
}

function getDocumentUrl(document: CardDocument) {
    if (!document || document instanceof File) return "";

    if (typeof document === "string") {
        return document;
    }

    return (
        document.url ||
        document.file_url ||
        document.document_url ||
        document.path ||
        document.document?.url ||
        document.document?.document_url ||
        document.document?.path ||
        ""
    );
}

function getNameFromPath(path?: string) {
    if (!path) return "";

    try {
        const cleanPath = path.split("?")[0];
        const name = cleanPath.split("/").pop();

        return name ? decodeURIComponent(name) : "";
    } catch {
        return "";
    }
}

function downloadVCard(
    data: CardFormValues,
    networks: CardNetwork[]
) {
    const fullName =
        data.full_name ||
        `${data.first_name || ""} ${data.last_name || ""}`.trim() ||
        "Contacto";

    const phone = getContactPhone(networks);
    const email = getContactEmail(networks);
    const website = getContactWebsite(networks);

    const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${escapeVCardValue(fullName)}`,
        buildVCardName(data.first_name, data.last_name),

        data.institution
            ? `ORG:${escapeVCardValue(data.institution)}`
            : "",

        data.position
            ? `TITLE:${escapeVCardValue(data.position)}`
            : "",

        phone
            ? `TEL;TYPE=CELL:${escapeVCardValue(phone)}`
            : "",

        email
            ? `EMAIL:${escapeVCardValue(email)}`
            : "",

        website
            ? `URL:${escapeVCardValue(website)}`
            : "",

        data.ubication
            ? `ADR;TYPE=WORK:;;${escapeVCardValue(data.ubication)};;;;`
            : "",

        data.description
            ? `NOTE:${escapeVCardValue(data.description)}`
            : "",

        "END:VCARD",
    ].filter(Boolean);

    const content = lines.join("\r\n");

    const blob = new Blob([content], {
        type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${sanitizeFileName(fullName)}.vcf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

function buildVCardName(
    firstName?: string | null,
    lastName?: string | null
) {
    return `N:${escapeVCardValue(lastName || "")};${escapeVCardValue(
        firstName || ""
    )};;;`;
}

function getContactPhone(networks: CardNetwork[]) {
    const network = networks.find((item) => {
        const type = item.type?.type?.toLowerCase() || "";
        const name = getNetworkName(item).toLowerCase();

        return (
            type === "phone" ||
            type === "tel" ||
            name.includes("teléfono") ||
            name.includes("telefono") ||
            name.includes("celular") ||
            name.includes("whatsapp")
        );
    });

    return network ? getNetworkValue(network) : "";
}

function getContactEmail(networks: CardNetwork[]) {
    const network = networks.find((item) => {
        const type = item.type?.type?.toLowerCase() || "";
        const name = getNetworkName(item).toLowerCase();

        return (
            type === "email" ||
            name.includes("email") ||
            name.includes("correo")
        );
    });

    return network ? getNetworkValue(network) : "";
}

function getContactWebsite(networks: CardNetwork[]) {
    const network = networks.find((item) => {
        const type = item.type?.type?.toLowerCase() || "";
        const name = getNetworkName(item).toLowerCase();

        return (
            type === "url" ||
            type === "website" ||
            type === "web" ||
            name.includes("web") ||
            name.includes("sitio")
        );
    });

    if (!network) return "";

    const value = getNetworkValue(network);

    if (!value) return "";

    if (
        value.startsWith("http://") ||
        value.startsWith("https://")
    ) {
        return value;
    }

    return `https://${value}`;
}

function escapeVCardValue(value: string) {
    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/;/g, "\\;")
        .replace(/,/g, "\\,");
}

function sanitizeFileName(value: string) {
    return (
        value
            .trim()
            .replace(/[<>:"/\\|?*]+/g, "")
            .replace(/\s+/g, "_") || "contacto"
    );
}