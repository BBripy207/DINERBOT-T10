# DINERBOT T10 - Presentación HTML

Una presentación web moderna y responsive para el proyecto DINERBOT T10.

## 🚀 Características

- **Diseño Moderno**: Inspirado en la imagen original con gradientes y efectos visuales
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Interactiva**: Navegación con teclado, mouse y gestos táctiles
- **Animaciones Suaves**: Transiciones fluidas entre diapositivas
- **Multiplataforma**: Funciona en cualquier navegador web

## 📁 Estructura de Archivos

```
presentation/
├── index.html      # Estructura principal de la presentación
├── styles.css      # Estilos y diseño visual
├── script.js       # Funcionalidad e interactividad
└── README.md       # Este archivo
```

## 🎮 Controles de Navegación

### Teclado
- **Flechas ← →**: Navegar entre diapositivas
- **Espacio / Enter**: Siguiente diapositiva
- **Backspace**: Diapositiva anterior
- **Números 1-4**: Ir directamente a una diapositiva específica
- **Home**: Primera diapositiva
- **End**: Última diapositiva

### Mouse
- **Botones < >**: Navegación en pantalla
- **Puntos indicadores**: Click para ir a diapositiva específica

### Dispositivos Táctiles
- **Swipe izquierda**: Siguiente diapositiva
- **Swipe derecha**: Diapositiva anterior

## 📱 Contenido de las Diapositivas

### 1. **Portada**
- Título principal: DINERBOT T10
- Descripción: Movimientos adaptativos y feedback dinámico

### 2. **Características Principales**
- Movimientos Adaptativos
- Interacción Táctil  
- Sistema de Entrega
- Feedback Dinámico

### 3. **Tecnología Implementada**
- Sensores de Movimiento
- Control de Cabeza Articulada
- Algoritmos Adaptativos

### 4. **Aplicaciones Prácticas**
- Restaurantes y Cafeterías
- Hoteles y Hospitality

## 🎨 Personalización

### Colores Principales
- **Azul Principal**: #4A9EFF
- **Fondo**: Gradiente oscuro (#1a1a1a → #2d2d2d)
- **Texto**: Blanco con opacidades variables

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Pesos**: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)

## 🚀 Cómo Usar

1. **Abrir la presentación**:
   ```
   Doble click en index.html
   ```
   O abrir en navegador web

2. **Navegación básica**:
   - Usar las flechas del teclado
   - Click en los botones de navegación
   - En móvil: swipe left/right

3. **Modo presentación**:
   - Presionar F11 para pantalla completa
   - Usar controles de teclado para navegar

## 🔧 Personalizar Contenido

### Agregar Nueva Diapositiva
1. En `index.html`, añadir nueva sección:
```html
<section class="slide" id="slide-5">
    <div class="content">
        <h2>Tu Título</h2>
        <!-- Tu contenido -->
    </div>
    <div class="slide-indicator">05</div>
</section>
```

2. En `script.js`, actualizar:
```javascript
const totalSlides = 5; // Cambiar el número
```

3. Añadir punto indicador en `index.html`:
```html
<span class="dot" onclick="currentSlide(5)"></span>
```

### Modificar Estilos
- Editar `styles.css` para cambiar colores, fuentes, animaciones
- Las variables CSS están en la parte superior del archivo

## 🌐 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles (iOS/Android)

## 📋 TODO / Mejoras Futuras

- [ ] Modo auto-play configurable
- [ ] Transiciones 3D avanzadas
- [ ] Exportar a PDF
- [ ] Modo notas del presentador
- [ ] Integración con videos locales
- [ ] Efectos de partículas animadas

## 🎯 Uso Recomendado

Esta presentación está optimizada para:
- **Demostraciones en vivo** del DINERBOT T10
- **Presentaciones comerciales** a clientes
- **Exhibiciones** en ferias y eventos
- **Documentación visual** del proyecto

---

**¡Tu presentación está lista!** 🎉  
Abre `index.html` en tu navegador para empezar a presentar.