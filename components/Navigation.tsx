// Directiva para indicar que este componente se ejecuta en el cliente (navegador)
"use client";

// Importamos hooks de React para manejar estado y efectos
import { useState, useEffect } from "react";

// Definimos la interfaz TypeScript para las props del componente
interface NavigationProps {
  logo?: string;        // Logo opcional (texto o iniciales)
  menuItems?: string[]; // Array opcional de elementos del menú
}

// Componente principal de navegación con valores por defecto
export default function Navigation({
  logo = "AJ",  // Valor por defecto para el logo
  menuItems = ["Portfolio", "About", "Services", "Contact"] // Menú por defecto
}: NavigationProps) {
  
  // Estado para controlar si el usuario ha hecho scroll (cambia el fondo de la nav)
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Función que se ejecuta cada vez que el usuario hace scroll
    const handleScroll = () => {
      // Si el scroll vertical es mayor a 50px, activamos el estado isScrolled
      setIsScrolled(window.scrollY > 50);
    };

    // Agregamos el event listener para detectar el scroll
    window.addEventListener("scroll", handleScroll);
    
    // Función de limpieza: removemos el event listener cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Array vacío significa que solo se ejecuta una vez al montar

  return (
    // Navegación fija en la parte superior de la pantalla
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-smooth
        ${isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10" // Fondo con blur cuando hay scroll
          : "bg-transparent" // Transparente cuando no hay scroll
        }
      `}
    >
      {/* Contenedor principal con ancho máximo y centrado */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenedor flex para alinear logo y menú */}
        <div className="flex items-center justify-between h-20">
          
          {/* SECCIÓN DEL LOGO */}
          <div className="flex-shrink-0"> {/* No se encoge en pantallas pequeñas */}
            {/* Cuadrado blanco con las iniciales del logo */}
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-sohne font-medium text-lg">
              {logo} {/* Muestra el texto del logo */}
            </div>
          </div>

          {/* MENÚ DESKTOP - Solo visible en pantallas medianas y grandes */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Iteramos sobre cada elemento del menú */}
            {menuItems.map((item, index) => (
              <a
                key={index} // Key único para cada elemento
                href={`#${item.toLowerCase()}`} // Enlace a sección con el nombre en minúsculas
                className="font-sohne font-light text-base leading-tight text-white/80 hover:text-white transition-smooth"
              >
                {item} {/* Texto del elemento del menú */}
              </a>
            ))}
          </div>

          {/* BOTÓN HAMBURGUESA MÓVIL - Solo visible en pantallas pequeñas */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Alterna el estado del menú móvil
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          >
            {/* Primera línea del ícono hamburguesa */}
            <span
              className={`w-6 h-[1px] bg-white transition-smooth ${
                isMobileMenuOpen ? "rotate-45 translate-y-[4px]" : "" // Se convierte en X cuando está abierto
              }`}
            />
            {/* Segunda línea del ícono hamburguesa */}
            <span
              className={`w-6 h-[1px] bg-white transition-smooth ${
                isMobileMenuOpen ? "opacity-0" : "" // Desaparece cuando está abierto
              }`}
            />
            {/* Tercera línea del ícono hamburguesa */}
            <span
              className={`w-6 h-[1px] bg-white transition-smooth ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : "" // Se convierte en X cuando está abierto
              }`}
            />
          </button>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        <div
          className={`md:hidden transition-smooth overflow-hidden ${
            isMobileMenuOpen 
              ? "max-h-64 opacity-100" // Visible y con altura cuando está abierto
              : "max-h-0 opacity-0"    // Oculto y sin altura cuando está cerrado
          }`}
        >
          {/* Contenedor de los elementos del menú móvil */}
          <div className="py-6 space-y-4 border-t border-white/10">
            {/* Iteramos sobre cada elemento del menú para la versión móvil */}
            {menuItems.map((item, index) => (
              <a
                key={index} // Key único para cada elemento
                href={`#${item.toLowerCase()}`} // Enlace a sección
                onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
                className="block font-sohne font-light text-lg text-white/80 hover:text-white transition-smooth"
              >
                {item} {/* Texto del elemento del menú */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}