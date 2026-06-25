import type { ElementType } from "react";

export type Plan = {
  id: string;
  name: string;
  price: string;
  amount: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type LegalLink = {
  label: string;
  href: string;
};

export type BusinessInfoItem = {
  icon: ElementType;
  title: string;
  description: string;
  detail: string;
};

export type ContactItemData = {
  icon: ElementType;
  label: string;
  value: string;
};