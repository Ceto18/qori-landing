// src/types/plan.ts

export type PlanFeature = {
  description: string;
  sort_order: number;
};

export type PlanLimits = {
  max_organizations: number;
  max_cards: number;
};

export type PublicPlan = {
  name: string;
  slug: string;
  price: number;
  description: string | null;
  limits: PlanLimits;
  features: PlanFeature[];
};

export type PublicPlansResponse = {
  success: boolean;
  message: string;
  data: PublicPlan[];
};