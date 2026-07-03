// src/services/planService.ts

import { api } from "@/services/api";
import type { PublicPlansResponse } from "@/types/plan";

export const planService = {
  getActivePlans: async () => {
    const response = await api.get<PublicPlansResponse>(
      "/public/plans/active"
    );

    return response.data;
  },
};