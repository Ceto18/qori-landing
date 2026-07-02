// src/types/complaintBook.ts

export type ComplaintEntryType = "claim" | "complaint";

export type ComplaintDocumentType =
  | "dni"
  | "ce"
  | "passport"
  | "ruc"
  | "other";

export type ComplaintBookPayload = {
  entry_type: ComplaintEntryType;

  consumer_name: string;
  document_type: ComplaintDocumentType;
  document_number: string;
  email: string;
  phone: string | null;
  address: string | null;

  is_minor: boolean;

  representative_name: string | null;
  representative_document_type: ComplaintDocumentType | null;
  representative_document_number: string | null;
  representative_phone: string | null;
  representative_email: string | null;

  product_or_service: string;
  claimed_amount: number | null;

  description: string;
  customer_request: string | null;
};

export type ComplaintBookResponse = {
  success?: boolean;
  message?: string;
  data?: {
    id?: number;
    code?: string;
    tracking_code?: string;
    entry_number?: string;
    created_at?: string;
  };
};