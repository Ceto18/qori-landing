import { api } from "@/services/api";

import type {
  PublicCardResponse,
  PublicCardWalletResponse,
} from "@/types/publicCard";

export const publicCardService = {
  getPublicCard: async (
    organizationSlug: string,
    cardSlug: string
  ): Promise<PublicCardResponse> => {
    const { data } =
      await api.get<PublicCardResponse>(
        `/public/cards/${organizationSlug}/${cardSlug}`
      );

    return data;
  },

  getWallet: async (
    organizationSlug: string,
    cardSlug: string
  ): Promise<PublicCardWalletResponse> => {
    const { data } =
      await api.get<PublicCardWalletResponse>(
        `/public/cards/${organizationSlug}/${cardSlug}/wallet`
      );

    return data;
  },
};