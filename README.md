# The Regeneration Suite

Un proyecto Next.js con integración completa de Figma usando el Poder de Figma de Kiro.

## 🚀 Características

- ✨ **Poder de Figma**: Integración completa Figma-to-Code
- 🎨 **Sistema de Diseño**: Tipografía Sohne personalizada
- 🌙 **Tema Oscuro**: Diseño elegante con alto contraste
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Next.js 16**: Con App Router y Turbopack
- 🎭 **Tailwind CSS v4**: Estilos modernos y eficientes

## 🛠️ Configuración

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Figma API
Crea un archivo `.env` en la raíz del proyecto:
```bash
FIGMA_API_KEY=tu_token_de_figma_aquí
```

Para obtener tu token de Figma:
1. Ve a [Figma Settings > Personal Access Tokens](https://www.figma.com/developers/api#access-tokens)
2. Crea un nuevo token personal
3. Copia el token al archivo `.env`

### 3. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎯 Poder de Figma

Este proyecto incluye la configuración completa del Poder de Figma:

### Características Configuradas
- **Servidor MCP**: `figma-mcp-server` instalado y configurado
- **Reglas del Sistema de Diseño**: Documentación completa en español
- **Hook Automático**: Se activa al editar componentes React
- **Integración Seamless**: Convierte diseños de Figma a código React

### Uso del Hook Automático
Cada vez que edites archivos `.tsx`, `.jsx` o en la carpeta `components/`, Kiro automáticamente te preguntará si quieres conectar el componente a su diseño correspondiente en Figma.

## 🎨 Sistema de Diseño

### Tipografía
- **Fuente Principal**: Sohne (personalizada)
- **Pesos Disponibles**: Leicht, Buch, Halbfett, Dreiviertelfett, Kraftig
- **Clase CSS**: `.font-sohne`

### Colores
- **Fondo**: `#000000`
- **Primer plano**: `#ffffff`
- **Tema**: Oscuro con alto contraste

### Animaciones
- **Transición Suave**: `.transition-smooth` (0.3s cubic-bezier)
- **Animación de Carga**: 1000ms con opacidad y transformación

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales con Tailwind
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── Navigation.tsx     # Navegación responsive
│   └── PhotographerHero.tsx # Hero section
├── public/fonts/          # Fuentes Sohne
├── .kiro/                 # Configuración de Kiro
│   ├── settings/mcp.json  # Configuración MCP
│   ├── steering/          # Reglas del sistema de diseño
│   └── hooks/             # Hooks automáticos
└── .env                   # Variables de entorno (no incluido)
```

## 🔧 Tecnologías

- **Framework**: Next.js 16.0.7 con App Router
- **Estilos**: Tailwind CSS v4
- **TypeScript**: Habilitado
- **React**: 19.2.0
- **Figma Integration**: Poder de Figma con MCP

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter ESLint

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.