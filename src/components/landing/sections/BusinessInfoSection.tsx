import { businessInfoItems } from "../data/business-info";
import { BusinessInfoCard } from "../cards/BusinessInfoCard";

export function BusinessInfoSection() {
  return (
    <section
      id="legal"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Información del comercio
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Datos visibles para nuestros clientes antes de realizar una compra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {businessInfoItems.map((item) => (
            <BusinessInfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}