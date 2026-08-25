# Mares Construcción & Maquinarias

Sitio institucional de Mares para presentar la empresa, sus servicios y sus registros de obra, y recibir consultas mediante EmailJS.

## Desarrollo

Requiere Node.js 20.19 o superior. La versión recomendada está declarada en `.nvmrc`.

```bash
npm install
npm run dev
```

## Validación y producción

```bash
npm run lint
npm run build
npm run preview
```

La aplicación usa React, React Router y Vite. El build genera metadata estática por ruta y la configuración de Vercel conserva las rutas públicas, los detalles de servicios y las redirecciones legacy.
