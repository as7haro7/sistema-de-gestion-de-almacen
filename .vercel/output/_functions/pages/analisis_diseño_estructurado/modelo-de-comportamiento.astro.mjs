import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
import { $ as $$ImageCard } from '../../chunks/ImageCard_CHVwL8r4.mjs';
export { renderers } from '../../renderers.mjs';

const $$ModeloDeComportamiento = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Modelo De Comportamiento"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 class="text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Diagrama de Flujo de Datos
</h1> ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": "El Diagrama de Flujo de Datos (DFD) es una herramienta visual utilizada para representar el flujo de informaci\xF3n dentro del sistema. En el caso de este proyecto, el DFD permite identificar c\xF3mo los datos se mueven entre los diferentes actores del proceso de gesti\xF3n de inventarios del Minimarket MAMIL\u2019US, como la recepci\xF3n de productos, la actualizaci\xF3n de inventario y la generaci\xF3n de alertas. " })} ${renderComponent($$result4, "ImageCard", $$ImageCard, { "src": "/diagramas/diagrama-flujo-datos.png", "alt": "Diagrama de Flujo de datos" })} <h1 class="text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Diagrama Entidad-Relación (ER)
</h1> ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": "El Diagrama Entidad-Relaci\xF3n (ER) muestra las relaciones entre las distintas entidades del sistema, como los productos, proveedores, inventarios y transacciones. Este diagrama es crucial para modelar la base de datos del sistema, facilitando la creaci\xF3n de un esquema relacional que apoye la correcta gesti\xF3n de los datos y la trazabilidad de los movimientos de inventarios. " })} ${renderComponent($$result4, "ImageCard", $$ImageCard, { "src": "/diagramas/diagrama-er.png", "alt": "Diagrama Entodad-Relacion" })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="uppercase">Modelo De Comportamiento </span> <br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/analisis_dise\xF1o_estructurado/modelo-de-comportamiento.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/analisis_diseño_estructurado/modelo-de-comportamiento.astro";
const $$url = "/analisis_diseño_estructurado/modelo-de-comportamiento";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ModeloDeComportamiento,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
