"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "antd";

import { planService } from "@/services/planService";
import type { PublicPlan } from "@/types/plan";

import { PlanCard } from "../cards/PlanCard";

export function PlansSection() {
  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);

        const response = await planService.getActivePlans();

        setPlans(response.data);
      } catch (error) {
        console.error("Error al obtener planes activos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <section
      id="planes"
      className="relative bg-secondary/20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Elige tu plan
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Compra tu tarjeta digital Qori ID y empieza a compartir tu perfil
            profesional.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="glass-dark rounded-2xl border border-primary/20 p-8"
              >
                <Skeleton active paragraph={{ rows: 8 }} />
              </div>
            ))}
          </div>
        ) : plans.length === 0 ? (
          <div className="glass-dark rounded-2xl border border-primary/20 p-8 text-center">
            <h3 className="text-xl font-semibold">
              No hay planes disponibles
            </h3>

            <p className="mt-2 text-muted-foreground">
              Por el momento no tenemos planes activos para mostrar.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}