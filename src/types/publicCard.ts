// src/types/publicCard.ts

export type PublicCardQuality = {
  uuid?: string;
  name: string;
};

export type PublicCardDocument = {
  uuid: string;
  name: string;
  document_url: string;
};

export type PublicCardNetworkType = {
  uuid: string;
  name: string;
  type?: string;
  icon_url: string | null;
};

export type PublicCardNetwork = {
  uuid: string;
  value: string;
  label: string;
  type?: PublicCardNetworkType;
};

export type PublicCard = {
  uuid: string;
  slug: string;

  first_name?: string | null;
  last_name?: string | null;
  full_name?: string | null;

  position?: string | null;
  institution?: string | null;
  profession?: string | null;
  ubication?: string | null;
  description?: string | null;

  design_id: string | number;

  primary_color?: string | null;
  secondary_color?: string | null;

  photo_perfil_url?: string | null;
  photo_banner_url?: string | null;

  active?: boolean;

  qualities?: PublicCardQuality[];
  documents?: PublicCardDocument[];
  networks?: PublicCardNetwork[];
};

export type PublicCardResponse = {
  success: boolean;
  message: string;
  data: PublicCard;
};