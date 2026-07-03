// src/services/publicCardService.ts

import { api } from "@/services/api";
import type { PublicCardResponse } from "@/types/publicCard";

export const publicCardService = {
  getPublicCard: async (organizationSlug: string, cardSlug: string) => {
    const response = await api.get<PublicCardResponse>(
      `/public/info/${organizationSlug}/${cardSlug}`
    );

    return response.data;
  },
};