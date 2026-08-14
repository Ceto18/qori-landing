// src/components/landing/public-card/types.ts

export type CardTemplateKey =
    | "classic"
    | "modern"
    | "corporate"
    | "minimal"
    | "premium";

export type SocialNetworkType = "email" | "url" | "phone" | string;

export type CardQuality =
    | string
    | {
          uuid?: string;
          name: string;
      };

export interface CardNetworkMeta {
    uuid?: string;
    name: string;
    type?: SocialNetworkType;
    icon_url: string | null;
}

export interface CardNetwork {
    uuid?: string;

    value: string;
    label?: string;

    red_social?: string;
    red_social_uuid?: string;

    name?: string;
    icon?: string | null;
    icon_url?: string | null;

    type?: CardNetworkMeta;
}

export type CardDocument =
    | File
    | string
    | {
          uuid?: string;
          name?: string;
          file_name?: string;
          filename?: string;
          document_name?: string;
          original_name?: string;
          originalName?: string;
          title?: string;

          url?: string;
          file_url?: string;
          document_url?: string;
          path?: string;

          document?: {
              name?: string;
              file_name?: string;
              url?: string;
              path?: string;
              document_url?: string;
          };
      }
    | null;

export interface CardFormValues {
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

    photo_perfil?: File | null;
    photo_banner?: File | null;

    photo_perfil_url?: string | null;
    photo_banner_url?: string | null;

    qualities: CardQuality[];

    documents: CardDocument[];

    networks: CardNetwork[];
}

export interface CardTemplateProps {
    data: CardFormValues;
    profilePreview?: string;
    bannerPreview?: string;
    isPublicView?: boolean;
}