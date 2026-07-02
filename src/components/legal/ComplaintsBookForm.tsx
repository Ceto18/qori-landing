"use client";

import React, { FormEvent, useState } from "react";
import { AxiosError } from "axios";

import { complaintBookService } from "@/services/complaintBookService";

import type {
  ComplaintBookPayload,
  ComplaintDocumentType,
  ComplaintEntryType,
} from "@/types/complaintBook";

const inputClass =
  "w-full rounded-lg border border-primary/20 bg-background px-4 py-3 text-sm outline-none focus:border-primary";

const labelClass = "mb-2 block text-sm font-medium text-foreground";

export function ComplaintsBookForm() {
  const [loading, setLoading] = useState(false);
  const [isMinor, setIsMinor] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const claimedAmountValue = formData.get("claimed_amount")?.toString().trim();

    const payload: ComplaintBookPayload = {
      entry_type: formData.get("entry_type") as ComplaintEntryType,

      consumer_name: formData.get("consumer_name")?.toString().trim() ?? "",
      document_type: formData.get("document_type") as ComplaintDocumentType,
      document_number:
        formData.get("document_number")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() || null,
      address: formData.get("address")?.toString().trim() || null,

      is_minor: isMinor,

      representative_name: isMinor
        ? formData.get("representative_name")?.toString().trim() || null
        : null,

      representative_document_type: isMinor
        ? (formData.get(
            "representative_document_type"
          ) as ComplaintDocumentType)
        : null,

      representative_document_number: isMinor
        ? formData.get("representative_document_number")?.toString().trim() ||
          null
        : null,

      representative_phone: isMinor
        ? formData.get("representative_phone")?.toString().trim() || null
        : null,

      representative_email: isMinor
        ? formData.get("representative_email")?.toString().trim() || null
        : null,

      product_or_service:
        formData.get("product_or_service")?.toString().trim() ?? "",

      claimed_amount: claimedAmountValue ? Number(claimedAmountValue) : null,

      description: formData.get("description")?.toString().trim() ?? "",

      customer_request:
        formData.get("customer_request")?.toString().trim() || null,
    };

    try {
      setLoading(true);

      const data = await complaintBookService.createComplaintBookEntry(payload);

      form.reset();
      setIsMinor(false);

      setSuccessMessage(
        data?.message || "Tu reclamo o queja fue registrado correctamente."
      );
    } catch (error) {
      const axiosError = error as AxiosError<{
        message?: string;
        errors?: Record<string, string[]>;
      }>;

      console.error("Error al registrar reclamo:", {
        status: axiosError.response?.status,
        data: axiosError.response?.data,
      });

      setErrorMessage(
        axiosError.response?.data?.message ||
          "Ocurrió un error al registrar el reclamo o queja."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {successMessage && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
          {errorMessage}
        </div>
      )}

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. Datos del consumidor</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass}>Nombres y apellidos *</label>
            <input
              type="text"
              name="consumer_name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Tipo de documento *</label>
            <select name="document_type" required className={inputClass}>
              <option value="">Seleccionar</option>
              <option value="dni">DNI</option>
              <option value="ce">Carné de extranjería</option>
              <option value="passport">Pasaporte</option>
              <option value="ruc">RUC</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Número de documento *</label>
            <input
              type="text"
              name="document_number"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Correo electrónico *</label>
            <input type="email" name="email" required className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Teléfono</label>
            <input type="tel" name="phone" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Domicilio</label>
            <input type="text" name="address" className={inputClass} />
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={isMinor}
            onChange={(event) => setIsMinor(event.target.checked)}
            className="mt-1"
          />
          <span>El consumidor es menor de edad.</span>
        </label>
      </section>

      {isMinor && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            Datos del padre, madre o representante
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass}>
                Nombre del padre, madre o representante *
              </label>
              <input
                type="text"
                name="representative_name"
                required={isMinor}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Tipo de documento del representante *
              </label>
              <select
                name="representative_document_type"
                required={isMinor}
                className={inputClass}
              >
                <option value="">Seleccionar</option>
                <option value="dni">DNI</option>
                <option value="ce">Carné de extranjería</option>
                <option value="passport">Pasaporte</option>
                <option value="ruc">RUC</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>
                Número de documento del representante *
              </label>
              <input
                type="text"
                name="representative_document_number"
                required={isMinor}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Teléfono del representante</label>
              <input
                type="tel"
                name="representative_phone"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Correo electrónico del representante
              </label>
              <input
                type="email"
                name="representative_email"
                className={inputClass}
              />
            </div>
          </div>
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. Identificación del producto o servicio contratado
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass}>
              Producto o servicio contratado *
            </label>
            <input
              type="text"
              name="product_or_service"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Monto reclamado</label>
            <input
              type="number"
              name="claimed_amount"
              min="0"
              step="0.01"
              placeholder="S/ 0.00"
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. Tipo de solicitud</h2>

        <div className="space-y-3 text-muted-foreground">
          <label className="flex items-start gap-3">
            <input
              type="radio"
              name="entry_type"
              value="claim"
              required
              className="mt-1"
            />
            <span>
              <strong className="text-foreground">Reclamo:</strong>{" "}
              disconformidad relacionada al producto o servicio.
            </span>
          </label>

          <label className="flex items-start gap-3">
            <input
              type="radio"
              name="entry_type"
              value="complaint"
              required
              className="mt-1"
            />
            <span>
              <strong className="text-foreground">Queja:</strong>{" "}
              disconformidad relacionada a la atención, trato, demora u otro
              aspecto no directamente ligado al producto o servicio.
            </span>
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. Detalle del reclamo o queja</h2>

        <label className={labelClass}>
          Describa de manera clara los hechos ocurridos *
        </label>
        <textarea
          name="description"
          rows={6}
          required
          className={inputClass}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. Pedido del consumidor</h2>

        <label className={labelClass}>Indique qué solución solicita</label>
        <textarea
          name="customer_request"
          rows={5}
          placeholder="Ejemplo: corrección del servicio, cambio del producto, devolución, actualización de datos, soporte técnico, explicación del caso u otra solución."
          className={inputClass}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">7. Confirmación del registro</h2>

        <label className="flex items-start gap-3 text-muted-foreground">
          <input type="checkbox" required className="mt-1" />
          <span>
            Declaro que la información consignada es verdadera y autorizo a Qori
            ID a utilizar los datos proporcionados únicamente para gestionar y
            responder el presente reclamo o queja.
          </span>
        </label>
      </section>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Registrando..." : "Registrar reclamo o queja"}
      </button>
    </form>
  );
}