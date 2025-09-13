# 🚀 TRUSK - The Ultimate Memecoin

![Trusk Logo](public/logo/logo-texto-negro-lp.png)

## 📖 Descripción del Proyecto

**Trusk** es una landing page moderna y multiidioma para una memecoin revolucionaria que combina la visión futurista de Elon Musk con el poder empresarial de Donald Trump. El proyecto presenta una narrativa única sobre una alianza lunar secreta entre estos dos personajes icónicos para crear la memecoin definitiva.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con gradientes y animaciones
- **TypeScript** - Lógica de aplicación con tipado estático
- **Vite** - Herramienta de desarrollo y build moderna

### Herramientas de Desarrollo
- **Vite 6.2.0** - Bundler y servidor de desarrollo
- **TypeScript 5.7.2** - Compilador de TypeScript
- **ES2020** - Target de compilación moderna

## 🎨 Características Principales

### 🌐 Multiidioma
- **Español** e **Inglés** completamente soportados
- Cambio dinámico de idioma sin recarga de página
- Contenido localizado para todas las secciones

### 📱 Diseño Responsivo
- Interfaz adaptable a dispositivos móviles y desktop
- Menú hamburguesa para navegación móvil
- Gradientes y efectos visuales modernos

### 🎯 Secciones Principales
1. **Header** - Navegación y selector de idioma
2. **Historia** - Narrativa épica de Musk y Trump
3. **Propósito** - Objetivos de la memecoin
4. **Comunidad** - Llamadas a la acción para usuarios
5. **Footer** - Enlaces sociales y botón de compra

### 🔗 Integración Externa
- Enlaces directos a **Uniswap** para compra de tokens
- Iconos de redes sociales (X/Twitter, Telegram)
- Imágenes optimizadas y logos profesionales

## 📁 Estructura del Proyecto

```
trusk/
├── public/                     # Archivos estáticos
│   ├── icons/                  # Iconos SVG
│   ├── logo/                   # Logos de la marca
│   └── main/                   # Imágenes de contenido
│       ├── historia/           # Imágenes de la sección historia
│       └── proposito/          # Imágenes de la sección propósito
├── src/                        # Código fuente
│   ├── assets/                 # Recursos del código
│   │   ├── lenguajes.json      # Traducciones ES/EN
│   │   └── lenguajes.d.ts      # Tipos TypeScript
│   ├── css/                    # Estilos CSS modulares
│   │   ├── global.css          # Estilos globales y variables
│   │   ├── header.css          # Estilos del header
│   │   ├── history.css         # Estilos de la sección historia
│   │   ├── purpose.css         # Estilos de la sección propósito
│   │   ├── community.css       # Estilos de la sección comunidad
│   │   └── footer.css          # Estilos del footer
│   ├── main.ts                 # Punto de entrada principal
│   ├── lenguajes.ts            # Lógica de cambio de idioma
│   ├── button-lenguage.ts      # Controlador del selector de idioma
│   ├── selectors.ts            # Selectores DOM centralizados
│   └── menu.ts                 # Lógica del menú móvil
├── index.html                  # Página principal
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración TypeScript
└── README.md                   # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd trusk

# Instalar dependencias
npm install
```

### Comandos Disponibles
```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Arquitectura del Código

### Modularización TypeScript
El proyecto utiliza una arquitectura modular con separación clara de responsabilidades:

- **`main.ts`** - Orquesta todos los módulos y inicializa la aplicación
- **`lenguajes.ts`** - Maneja el cambio dinámico de contenido multiidioma
- **`selectors.ts`** - Centraliza todos los selectores DOM para mejor mantenimiento
- **`menu.ts`** - Controla la funcionalidad del menú hamburguesa
- **`button-lenguage.ts`** - Gestiona la interacción del selector de idioma

### Sistema de Tipos
- **`lenguajes.d.ts`** - Define tipos TypeScript para las traducciones
- Tipado estricto habilitado para mejor calidad de código
- Interfaces bien definidas para el contenido multiidioma

### Gestión de Estilos
- CSS modular por componente/sección
- Variables CSS para consistencia visual
- Gradientes y efectos modernos
- Diseño mobile-first

## 🎨 Paleta de Colores y Diseño

### Variables CSS Principales
```css
--background: linear-gradient(0deg, rgba(23,4,4,1) 0%, rgba(38,20,91,1) 50%, rgba(5,2,16,1) 75%, rgba(19,14,81,1) 100%);
--background-button: #150f6ab7;
--color: rgb(240, 233, 233);
--shadow: 0 10px 20px rgba(0, 0, 0, 0.531);
```

### Tipografía
- **Fuente Principal**: Montserrat (Google Fonts)
- Pesos variables (100-900)
- Soporte para cursivas

## 🌟 Funcionalidades Implementadas

### ✅ Navegación
- Menú de navegación suave con anclas
- Menú hamburguesa para móviles
- Transiciones y animaciones fluidas

### ✅ Internacionalización
- Soporte completo para Español e Inglés
- Cambio de idioma en tiempo real
- Contenido localizado para toda la narrativa

### ✅ Interactividad
- Botones de compra integrados con Uniswap
- Enlaces a redes sociales
- Efectos hover y transiciones

### ✅ Optimización
- Carga rápida con Vite
- Imágenes optimizadas
- Código TypeScript compilado

## 🔗 Enlaces Importantes

- **Uniswap**: `https://app.uniswap.org/swap/?chain=arbitrum&outputCurrency=0xCC9C3c395f586A0D157BdF670F9DF9119f9Fe131`
- **Redes Sociales**: X (Twitter) y Telegram (enlaces configurables)

## 📈 Próximas Mejoras

- [ ] Animaciones más avanzadas
- [ ] Optimización SEO
- [ ] Métricas y analytics
- [ ] Más idiomas
- [ ] Modo oscuro/claro

## 🤝 Contribución

Este proyecto está diseñado como una landing page profesional para la memecoin Trusk. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Proyecto privado - Todos los derechos reservados.

---

**Desarrollado con 💜 para la revolución Trusk** 🚀🌙
