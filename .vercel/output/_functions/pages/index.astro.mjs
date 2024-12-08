import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, F as Fragment } from '../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { a as $$Icon, c as $$PageLayout } from '../chunks/PageLayout_BEwikMnU.mjs';
import { $ as $$Hero } from '../chunks/Hero_BTePka8K.mjs';
export { renderers } from '../renderers.mjs';

const $$Note = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} Enfoque del Proyecto:</span>
Aplicación de técnicas de Análisis y Diseño Estructurado y Orientado a Objetos para la optimización y desarrollo de un Sistema de Gestión de Inventarios.
</div> </section>`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/Note.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Sistema de Gestion de inventarios Minimarket MAMILUS",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "image": { src: "~/assets/images/hero.svg", alt: "Sistema gestion de inventarios Hero Image" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">SisAlmacen</span> es una solución diseñada para optimizar la gestión de productos
        con herramientas de análisis, seguimiento en tiempo real y generación de informes detallados.
</span> <span class="block mb-1 sm:hidden font-bold text-blue-600">SisAlmacen: Eficiencia y Control.</span>
Ideal para mejorar la eficiencia operativa, facilitar la integración con otros sistemas y garantizar una gestión continua
      y fluida.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Sistema de Gestion de almacen Minimarket
 <span class="text-accent dark:text-white highlight">MAMILUS</span> ` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/index.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
