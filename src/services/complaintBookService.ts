// src/services/complaintBookService.ts

import { api } from "@/services/api";
import type {
  ComplaintBookPayload,
  ComplaintBookResponse,
} from "@/types/complaintBook";

export const complaintBookService = {
  createComplaintBookEntry: async (payload: ComplaintBookPayload) => {
    const response = await api.post<ComplaintBookResponse>(
      "/public/complaint-book-entries",
      payload
    );

    return response.data;
  },
};