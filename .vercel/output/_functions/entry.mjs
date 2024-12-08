import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_RHgp5moC.mjs';
import { manifest } from './manifest_CHZjoRgU.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/analisis_diseño_estructurado/modelo-ambiental.astro.mjs');
const _page4 = () => import('./pages/analisis_diseño_estructurado/modelo-de-comportamiento.astro.mjs');
const _page5 = () => import('./pages/analisis-y-diseño-orientado-a-objetos/diagrama-de-casos-de-uso.astro.mjs');
const _page6 = () => import('./pages/analisis-y-diseño-orientado-a-objetos/diagrama-de-clases.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/generalidades/alcances-del-proyecto.astro.mjs');
const _page9 = () => import('./pages/generalidades/antecedentes.astro.mjs');
const _page10 = () => import('./pages/generalidades/arbol-de-problemas.astro.mjs');
const _page11 = () => import('./pages/generalidades/formulacion-del-problema.astro.mjs');
const _page12 = () => import('./pages/generalidades/herramientas-tecnicas.astro.mjs');
const _page13 = () => import('./pages/generalidades/introduccion.astro.mjs');
const _page14 = () => import('./pages/generalidades/justificacion-metodo.astro.mjs');
const _page15 = () => import('./pages/generalidades/metodo-medios-instrumentos.astro.mjs');
const _page16 = () => import('./pages/generalidades/objetivo-general.astro.mjs');
const _page17 = () => import('./pages/generalidades/objetivos-especificos.astro.mjs');
const _page18 = () => import('./pages/generalidades/planificacion-actividades.astro.mjs');
const _page19 = () => import('./pages/generalidades/planteamiento-del-problema.astro.mjs');
const _page20 = () => import('./pages/homes/mobile-app.astro.mjs');
const _page21 = () => import('./pages/homes/personal.astro.mjs');
const _page22 = () => import('./pages/homes/saas.astro.mjs');
const _page23 = () => import('./pages/homes/startup.astro.mjs');
const _page24 = () => import('./pages/landing/click-through.astro.mjs');
const _page25 = () => import('./pages/landing/lead-generation.astro.mjs');
const _page26 = () => import('./pages/landing/pre-launch.astro.mjs');
const _page27 = () => import('./pages/landing/product.astro.mjs');
const _page28 = () => import('./pages/landing/sales.astro.mjs');
const _page29 = () => import('./pages/landing/subscription.astro.mjs');
const _page30 = () => import('./pages/pricing.astro.mjs');
const _page31 = () => import('./pages/privacy.astro.mjs');
const _page32 = () => import('./pages/rss.xml.astro.mjs');
const _page33 = () => import('./pages/services.astro.mjs');
const _page34 = () => import('./pages/terms.astro.mjs');
const _page35 = () => import('./pages/video.astro.mjs');
const _page36 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page37 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page38 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page39 = () => import('./pages/index.astro.mjs');
const _page40 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/analisis_diseño_estructurado/modelo-ambiental.astro", _page3],
    ["src/pages/analisis_diseño_estructurado/modelo-de-comportamiento.astro", _page4],
    ["src/pages/analisis-y-diseño-orientado-a-objetos/diagrama-de-casos-de-uso.astro", _page5],
    ["src/pages/analisis-y-diseño-orientado-a-objetos/diagrama-de-clases.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/generalidades/alcances-del-proyecto.astro", _page8],
    ["src/pages/generalidades/antecedentes.astro", _page9],
    ["src/pages/generalidades/arbol-de-problemas.astro", _page10],
    ["src/pages/generalidades/formulacion-del-problema.astro", _page11],
    ["src/pages/generalidades/herramientas-tecnicas.astro", _page12],
    ["src/pages/generalidades/introduccion.astro", _page13],
    ["src/pages/generalidades/justificacion-metodo.astro", _page14],
    ["src/pages/generalidades/metodo-medios-instrumentos.astro", _page15],
    ["src/pages/generalidades/objetivo-general.astro", _page16],
    ["src/pages/generalidades/objetivos-especificos.astro", _page17],
    ["src/pages/generalidades/planificacion-actividades.astro", _page18],
    ["src/pages/generalidades/planteamiento-del-problema.astro", _page19],
    ["src/pages/homes/mobile-app.astro", _page20],
    ["src/pages/homes/personal.astro", _page21],
    ["src/pages/homes/saas.astro", _page22],
    ["src/pages/homes/startup.astro", _page23],
    ["src/pages/landing/click-through.astro", _page24],
    ["src/pages/landing/lead-generation.astro", _page25],
    ["src/pages/landing/pre-launch.astro", _page26],
    ["src/pages/landing/product.astro", _page27],
    ["src/pages/landing/sales.astro", _page28],
    ["src/pages/landing/subscription.astro", _page29],
    ["src/pages/pricing.astro", _page30],
    ["src/pages/privacy.md", _page31],
    ["src/pages/rss.xml.ts", _page32],
    ["src/pages/services.astro", _page33],
    ["src/pages/terms.md", _page34],
    ["src/pages/video.astro", _page35],
    ["src/pages/[...blog]/[category]/[...page].astro", _page36],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page37],
    ["src/pages/[...blog]/[...page].astro", _page38],
    ["src/pages/index.astro", _page39],
    ["src/pages/[...blog]/index.astro", _page40]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4987a0b5-2e1b-4f31-b2f4-ceeb94485ef5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
