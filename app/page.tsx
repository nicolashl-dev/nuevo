// Importamos los componentes que vamos a usar en esta página
import Navigation from "@/components/Navigation";     // Componente de navegación
import PhotographerHero from "@/components/PhotographerHero"; // Componente hero principal

// Componente principal de la página de inicio
export default function Home() {
  return (
    // Contenedor principal de la página con posicionamiento relativo
    <main className="relative">
      
      {/* COMPONENTE DE NAVEGACIÓN */}
      {/* Se renderiza primero para que aparezca encima de todo el contenido */}
      <Navigation />
      
      {/* COMPONENTE HERO PRINCIPAL */}
      {/* Pasamos props personalizadas para nuestro proyecto */}
      <PhotographerHero 
        name="The Regeneration Suite"           // Nombre del proyecto/empresa
        title="Visual Innovation Studio"        // Subtítulo que describe el tipo de negocio
        description="Transformando ideas en experiencias visuales extraordinarias a través de la creatividad y la tecnología." // Descripción del servicio
      />
      
    </main>
  );
}
