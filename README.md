# DINERBOT T10

## 🤖 Descripción
DINERBOT T10 es una presentación interactiva que muestra las capacidades y características de nuestro robot de servicio para restaurantes.

## 🚀 Características
- ✨ Diseño moderno y responsivo
- 🎯 Arquitectura modular y escalable
- 📱 Compatible con dispositivos móviles
- ⚡ Optimizado para rendimiento
- 🎨 Animaciones suaves y atractivas
- ♿ Accesible para todos los usuarios

## 🏗️ Arquitectura del Proyecto

### Estructura de Archivos
```
DINERBOT-T10/
├── 📁 components/           # Módulos JavaScript organizados
│   ├── SlideshowManager.js  # Gestión de presentaciones
│   ├── NavigationManager.js # Navegación y menús
│   ├── AnimationManager.js  # Animaciones y efectos
│   └── app.js              # Aplicación principal
├── 📁 styles/              # CSS organizado por módulos
│   ├── base.css            # Variables y estilos base
│   ├── layout.css          # Layouts y grid
│   ├── typography.css      # Tipografía
│   ├── components.css      # Componentes reutilizables
│   ├── responsive.css      # Responsive design
│   └── main.css           # Archivo principal CSS
├── 📁 assets/             # Recursos estáticos
│   └── images/            # Imágenes del proyecto
├── 📁 pages/              # Páginas adicionales
├── 📁 presentation/       # Carpeta de presentación legacy
├── index.html             # Página principal
├── script.js              # JavaScript legacy
├── styles.css             # CSS legacy
├── package.json           # Configuración del proyecto
└── README.md              # Este archivo
```

### Principios de Arquitectura Aplicados

#### 🔧 **Separación de Responsabilidades**
- **Componentes**: Cada funcionalidad en su propio módulo
- **Estilos**: CSS organizado por capas (ITCSS methodology)
- **Configuración**: Centralizada y fácil de mantener

#### 📦 **Modularidad**
- Componentes independientes y reutilizables
- Importación/exportación limpia entre módulos
- Fácil testing de componentes individuales

#### 🎯 **Escalabilidad**
- Estructura preparada para crecimiento
- Configuración externalizada
- Sistema de eventos desacoplado

#### ♿ **Accesibilidad**
- Soporte para `prefers-reduced-motion`
- Navegación por teclado
- Estructura semántica HTML

#### ⚡ **Rendimiento**
- Lazy loading de imágenes
- Debouncing de eventos
- Optimizaciones de CSS y JS

## 🛠️ Configuración del Entorno

### Prerequisitos
- Node.js (v16 o superior)
- npm o yarn
- Navegador moderno

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Sistemas21ATP/DINERBOT-T10.git

# Entrar al directorio
cd DINERBOT-T10

# Instalar dependencias (opcional para desarrollo)
npm install
```

### Desarrollo Local
```bash
# Opción 1: Servidor simple con Python
python -m http.server 8000

# Opción 2: Con Node.js (si tienes http-server instalado)
npm start

# Opción 3: Con live-server para hot reload
npm run dev
```

Luego abre http://localhost:8000 en tu navegador.

## 🧱 Componentes Principales

### SlideshowManager
Gestiona las presentaciones y slideshow:
- Control de navegación entre slides
- Auto-play opcional
- Indicadores visuales
- Navegación por teclado

### NavigationManager
Maneja la navegación del sitio:
- Smooth scrolling
- Estados activos
- Navegación por teclado
- Analytics tracking (opcional)

### AnimationManager
Controla todas las animaciones:
- Animaciones on-scroll
- Lazy loading
- Transiciones suaves
- Respeta preferencias de usuario

### DinerbotApp
Orquestador principal:
- Inicialización de componentes
- Manejo de configuración
- Error handling
- Performance optimizations

## 🎨 Sistema de Diseño

### Variables CSS (CSS Custom Properties)
```css
:root {
  --primary-color: #4A9EFF;
  --primary-gradient: linear-gradient(135deg, #4A9EFF 0%, #007BFF 100%);
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --border-radius: 16px;
  /* ... más variables */
}
```

### Nomenclatura
- **BEM methodology** para clases CSS
- **camelCase** para JavaScript
- **kebab-case** para archivos

## 📱 Responsive Design

### Breakpoints
- Mobile: `≤ 768px`
- Tablet: `769px - 1024px`
- Desktop: `≥ 1025px`
- Large Desktop: `≥ 1440px`

### Estrategia Mobile-First
El CSS está escrito con enfoque mobile-first, agregando complexity para pantallas más grandes.

## ⚡ Optimizaciones de Rendimiento

### Implementadas
- **Lazy loading** de imágenes
- **Debouncing** de eventos de resize
- **Intersection Observer** para animaciones
- **Preload** de recursos críticos
- **CSS modular** para carga eficiente

### Métricas Objetivo
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🧪 Testing y Calidad

### Herramientas Configuradas
```bash
# Linting de JavaScript
npm run lint

# Formateo de código
npm run format

# Validación de HTML
npm run validate

# Build de producción
npm run build
```

### Estándares de Código
- **ESLint** para JavaScript
- **Prettier** para formateo consistente
- **HTML Validate** para markup válido

## 🚀 Deployment

### GitHub Pages
El proyecto está configurado para deployment automático en GitHub Pages:
1. Push a la rama `main`
2. GitHub Actions construye el proyecto
3. Deploy automático a https://sistemas21atp.github.io/DINERBOT-T10/

### Build Manual
```bash
npm run build
# Los archivos optimizados se generan en /dist
```

## 🔧 Configuración

### Variables de Configuración
```javascript
const config = {
  slideshow: {
    totalSlides: 4,
    autoPlay: false,
    autoPlayInterval: 5000
  },
  animations: {
    enabled: true,
    reducedMotion: false
  },
  navigation: {
    smoothScroll: true,
    trackAnalytics: false
  }
};
```

## 🤝 Contribución

### Flujo de Trabajo
1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

### Estándares de Código
- Seguir la guía de estilo existente
- Escribir código autodocumentado
- Agregar comentarios JSDoc cuando sea necesario
- Mantener la arquitectura modular

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Equipo

**Sistemas21ATP** - Desarrollo y mantenimiento

## 🔗 Enlaces

- [Demo en vivo](https://sistemas21atp.github.io/DINERBOT-T10/)
- [Repositorio](https://github.com/Sistemas21ATP/DINERBOT-T10)
- [Issues](https://github.com/Sistemas21ATP/DINERBOT-T10/issues)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!