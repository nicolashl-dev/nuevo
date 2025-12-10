// Directiva para indicar que este componente se ejecuta en el cliente (navegador)
"use client";

// Importamos hooks de React para manejar estado y efectos
import { useState, useEffect } from "react";

// Definimos la interfaz TypeScript para las props del componente Hero
interface PhotographerHeroProps {
  name?: string;        // Nombre principal opcional
  title?: string;       // Título/profesión opcional  
  description?: string; // Descripción opcional
}

// Componente principal Hero con valores por defecto
export default function PhotographerHero({
  name = "Alex Johnson",           // Nombre por defecto
  title = "Visual Storyteller",   // Título por defecto
  description = "Capturing moments that matter through the lens of creativity and passion." // Descripción por defecto
}: PhotographerHeroProps) {
  
  // Estado para controlar la animación de entrada del contenido
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // requestAnimationFrame asegura que la animación se ejecute en el próximo frame
    // Esto garantiza que el DOM esté completamente renderizado antes de la animación
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    
    // Función de limpieza: cancela la animación si el componente se desmonta
    return () => cancelAnimationFrame(frame);
  }, []); // Array vacío significa que solo se ejecuta una vez al montar

  return (
    // Sección principal que ocupa toda la altura de la pantalla
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* FONDO CON GRADIENTES */}
      <div className="absolute inset-0 z-0"> {/* Posicionado absolutamente detrás del contenido */}
        {/* Primer gradiente: diagonal de negro a gris oscuro */}
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        {/* Segundo gradiente: horizontal para crear profundidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex items-center min-h-screen px-6"> {/* z-10 para estar encima del fondo */}
        {/* Contenedor con ancho máximo para el contenido */}
        <div className="max-w-4xl">
          {/* Contenedor con animación de entrada */}
          <div
            className={`transition-all duration-1000 ${ // Transición suave de 1 segundo
              isLoaded 
                ? "opacity-100 translate-y-0" // Estado final: visible y en posición normal
                : "opacity-0 translate-y-4"   // Estado inicial: invisible y ligeramente abajo
            }`}
          >
            
            {/* NOMBRE PRINCIPAL - Título más grande */}
            <h1 className="font-sohne font-light text-6xl sm:text-7xl md:text-8xl mb-4 leading-tight">
              {name} {/* Muestra el nombre pasado como prop */}
            </h1>
            
            {/* TÍTULO/PROFESIÓN - Subtítulo */}
            <h2 className="font-sohne font-light text-2xl sm:text-3xl md:text-4xl text-white/80 mb-6">
              {title} {/* Muestra el título pasado como prop */}
            </h2>
            
            {/* DESCRIPCIÓN - Párrafo explicativo */}
            <p className="font-sohne font-light text-lg leading-relaxed text-white/70 max-w-2xl mb-12">
              {description} {/* Muestra la descripción pasada como prop */}
            </p>
            
            {/* BOTONES DE LLAMADA A LA ACCIÓN (CTA) */}
            <div className="flex flex-col sm:flex-row gap-4"> {/* Vertical en móvil, horizontal en desktop */}
              
              {/* Botón primario - Fondo blanco */}
              <button className="px-8 py-4 bg-white text-black font-sohne font-medium text-base transition-smooth hover:bg-gray-100">
                Ver Portafolio {/* Texto del botón principal */}
              </button>
              
              {/* Botón secundario - Solo borde */}
              <button className="px-8 py-4 border border-white/30 text-white font-sohne font-light text-base transition-smooth hover:border-white/60 hover:bg-white/5">
                Contactar {/* Texto del botón secundario */}
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* INDICADOR DE SCROLL - Elemento en la parte inferior */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"> {/* Centrado horizontalmente */}
        {/* Contenedor con animación retrasada */}
        <div
          className={`transition-all duration-1000 delay-500 ${ // Animación de 1s con delay de 500ms
            isLoaded 
              ? "opacity-100 translate-y-0" // Estado final: visible y en posición
              : "opacity-0 translate-y-4"   // Estado inicial: invisible y abajo
          }`}
        >
          {/* Contenido del indicador de scroll */}
          <div className="flex flex-col items-center text-white/60">
            {/* Texto "Scroll" */}
            <span className="font-sohne font-light text-xs uppercase mb-4 tracking-wider">
              Scroll
            </span>
            {/* Línea vertical animada */}
            <div className="w-px h-12 bg-white/30 animate-pulse" /> {/* w-px = 1px de ancho */}
          </div>
        </div>
      </div>
      
    </section>
  );
}