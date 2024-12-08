import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
import { $ as $$ImageCard } from '../../chunks/ImageCard_CHVwL8r4.mjs';
export { renderers } from '../../renderers.mjs';

const $$DiagramaDeClases = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Diagrama de Clases"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": " El Diagrama de Clases es una representaci\xF3n gr\xE1fica que muestra las clases, atributos, m\xE9todos y relaciones entre ellas en un sistema. Este diagrama es fundamental para modelar el dise\xF1o del software y entender las interacciones y responsabilidades de cada objeto en el sistema. " })} ${renderComponent($$result4, "ImageCard", $$ImageCard, { "src": "/diagramas/diagrama-de-clases.png", "alt": "Diagrama de Clases" })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": " Este diagrama representa las clases del sistema y sus relaciones, mostrando c\xF3mo los objetos interact\xFAan entre s\xED a nivel de clases. " })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="uppercase">Diagrama de Clases</span> <br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/analisis-y-dise\xF1o-orientado-a-objetos/diagrama-de-clases.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/analisis-y-diseño-orientado-a-objetos/diagrama-de-clases.astro";
const $$url = "/analisis-y-diseño-orientado-a-objetos/diagrama-de-clases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DiagramaDeClases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
