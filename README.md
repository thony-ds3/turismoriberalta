# Turismo Riberalta

Sitio web informativo y turístico de **Riberalta**, Beni — Bolivia. Presenta la ciudad como
puerta de entrada a la Amazonía boliviana: ríos, selva, cultura, gastronomía y una guía para
planificar el viaje.

> Sitio publicado: <https://turismoriberalta.online>
> Respaldo de GitHub Pages: <https://thony-ds3.github.io/turismoriberalta/>

## Tecnologías

Sitio estático, sin frameworks ni proceso de compilación:

- **HTML5** — `index.html` (estructura de las cinco secciones)
- **CSS3** — `style.css` (diseño responsive, tema claro/oscuro, colores de la bandera municipal)
- **JavaScript** — `navigation.js` (navegación entre vistas, filtros, planificador de viaje,
  fichas de lugares y enlaces a Google Maps)

## Estructura

```
turismoriberalta/
├── index.html        Página principal (vistas: Inicio, Explorar, Lugares, Sabores, Planifica)
├── style.css         Estilos y variables de color
├── navigation.js     Lógica de navegación, datos de lugares y fotos
├── img/              Fotografías de los lugares
│   ├── costanera.jpeg
│   ├── catedral.jpeg
│   ├── plaza.jpeg
│   ├── tumichucua.jpeg
│   └── aquicuana.jpg
└── CNAME             Dominio personalizado de GitHub Pages
```

## Ver el sitio en local

Abre `index.html` en el navegador, o con la extensión **Live Server** de VS Code
(el proyecto ya trae `.vscode/settings.json` con el puerto `5501`):

1. Clic derecho sobre `index.html` → *Open with Live Server*
2. Ir a <http://127.0.0.1:5501>

> Nota: `file://` también funciona porque todas las rutas son relativas.

## Cómo editar el contenido

- **Textos de las secciones:** directamente en `index.html`.
- **Colores y tipografía:** variables al inicio de `style.css`.
- **Lugares y fotos:** en `navigation.js`, los objetos `places` y `FOTOS`.
  Para cambiar una imagen, coloca el archivo en `img/` y actualiza la ruta en `FOTOS`.
- **Itinerarios del planificador:** objeto `plans` en `navigation.js`.

## Publicación

El sitio se despliega automáticamente con **GitHub Pages** desde la rama `main`, carpeta raíz.

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

GitHub Pages reconstruye el sitio en aproximadamente un minuto tras cada push.

### Dominio personalizado

El dominio `turismoriberalta.online` se configura en **Settings → Pages → Custom domain**.
El archivo `CNAME` de este repositorio lo mantiene GitHub, no lo elimines.

Requisitos en el DNS del dominio (HostGator):

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `thony-ds3.github.io` |
| TXT | `_github-pages-challenge-thony-ds3` | Código de verificación generado por GitHub |

## Autor

**Antony Téllez** — [@thony-ds3](https://github.com/thony-ds3)

## Licencia

Contenido con fines educativos. Las fotografías pertenecen a sus respectivos autores.
