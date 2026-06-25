import { plans } from "../data/plans";
import { PlanCard } from "../cards/PlanCard";

export function PlansSection() {
  return (
    <section
      id="planes"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Elige tu plan
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compra tu tarjeta digital Qori ID y empieza a compartir tu perfil
            profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}