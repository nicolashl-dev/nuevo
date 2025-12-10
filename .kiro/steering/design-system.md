---
inclusion: always
---

# Reglas del Sistema de Diseño

Este documento define las reglas del sistema de diseño para este proyecto Next.js para mantener consistencia entre los diseños de Figma y la implementación del código.

## Tipografía

### Familia de Fuente
- **Fuente Principal**: Sohne (familia de fuente personalizada)
- **Respaldo**: sans-serif
- **Clase CSS**: `.font-sohne`
- **Espaciado de Letras**: -0.02em (tracking ligeramente negativo)

### Pesos de Fuente Disponibles
- Sohne-Leicht (Ligera)
- Sohne-Buch (Libro/Regular)
- Sohne-Halbfett (Semi-negrita)
- Sohne-Dreiviertelfett (Negrita)
- Sohne-Kraftig (Pesada)

### Escala Tipográfica
- Texto Hero: `text-[47px] sm:text-[44px] md:text-[52px]`
- Altura de Línea: `leading-[1.37]`
- Espaciado de Letras: `tracking-[-0.015em]`

## Colores

### Colores Base
- **Fondo**: `#000000` (--background)
- **Primer plano**: `#ffffff` (--foreground)
- **Tema**: Tema oscuro con alto contraste

## Espaciado y Diseño

### Patrones de Contenedor
- **Altura Completa**: `min-h-screen`
- **Padding**: `px-6` para espaciado horizontal
- **Centrado**: `flex items-center justify-center`

## Animaciones y Transiciones

### Transiciones Estándar
- **Transición Suave**: `.transition-smooth` (0.3s cubic-bezier)
- **Animación de Carga**: `duration-1000` con opacidad y transformación
- **Patrón de Animación**: `opacity-0 translate-y-4` → `opacity-100 translate-y-0`

## Patrones de Componentes

### Componentes de Diseño
- Usar posicionamiento `relative` para contenedores principales
- `overflow-hidden` para diseños controlados
- Centrar contenido con utilidades flexbox

### Renderizado de Texto
- **Suavizado de Fuente**: `-webkit-font-smoothing: antialiased`
- **Renderizado de Texto**: `optimizeLegibility`
- **Display**: `font-display: swap` para fuentes personalizadas

## Guías de Integración con Figma

Al implementar diseños de Figma:

1. **Tipografía**: Siempre usar la familia de fuente Sohne con pesos apropiados
2. **Colores**: Adherirse a las propiedades CSS personalizadas definidas
3. **Espaciado**: Usar la escala de espaciado de Tailwind consistentemente
4. **Animaciones**: Seguir los patrones de transición establecidos
5. **Diseño**: Mantener los patrones de diseño responsivo (breakpoints sm:, md:)

## Estructura de Archivos

- **Fuentes**: Ubicadas en `/public/fonts/`
- **Estilos Globales**: `app/globals.css`
- **Componentes**: directorio `components/` (actualmente vacío)
- **Páginas**: estructura App Router en `app/`

## Stack Tecnológico

- **Framework**: Next.js 16.0.7 con App Router
- **Estilos**: Tailwind CSS v4
- **TypeScript**: Habilitado
- **React**: 19.2.0