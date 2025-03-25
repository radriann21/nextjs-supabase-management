import { Shield, Users, Zap } from "lucide-react"

export const FunctionsSection = () => {
  const features = [
    {
      title: "Autenticación segura",
      description: "Protege tus datos con nuestro sistema de autenticación de última generación.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Gestión del usuario",
      description: "Controla tu perfil y todo lo relacionado con tu usuario.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Rápido y eficiente",
      description: "Disfruta de una experiencia fluida con nuestra aplicación optimizada.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
  ]
  
  return (
    <section className="py-20 bg-neutral-900/50 text-white">
    <div className="w-full mx-auto container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Características principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-card rounded-lg border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/50"
          >
            <div className="p-3 rounded-full bg-primary/10 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
            <p className="text-muted-foreground text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}