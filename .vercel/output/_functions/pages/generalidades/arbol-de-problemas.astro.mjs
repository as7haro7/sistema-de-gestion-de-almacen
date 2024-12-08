import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
import { $ as $$ImageCard } from '../../chunks/ImageCard_CHVwL8r4.mjs';
export { renderers } from '../../renderers.mjs';

const $$ArbolDeProblemas = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Arbol de problemas"
  };
  const columns = 1;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 class="text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade ">Problema central:</h1>  ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `Gesti\xF3n ineficiente de inventarios en el Minimarket Mamilus.` })} <h1 class="mt-2 text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade ">Causas principales:</h1> <ol${addAttribute(`grid grid-cols-1 md:grid-cols-${columns} gap-y-8 md:gap-y-12 my-4`, "class")}> ${[
    { title: "Falta de automatizaci\xF3n", description: "El registro y control se realiza de forma manual." },
    {
      title: "Errores humanos frecuentes",
      description: "La dependencia de m\xE9todos manuales incrementa los riesgos de omisiones e inexactitudes."
    },
    {
      title: "Ausencia de herramientas de an\xE1lisis",
      description: "No se dispone de software o sistemas que permitan generar reportes o proyecciones sobre las existencias y las ventas."
    },
    {
      title: "Falta de capacitaci\xF3n",
      description: "El personal no est\xE1 familiarizado con el uso de herramientas tecnol\xF3gicas para la gesti\xF3n de inventarios."
    }
  ].map((item, index) => renderTemplate`<li class="max-w-none flex flex-col items-start motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade "> <span class="font-bold text-xl mb-1 flex gap-2"> <b class="text-blue-700 border-2 border-blue-700 rounded-full w-8 h-8 flex justify-center"> ${index + 1} </b> ${item.title} </span>${" "}  ${item.description && renderTemplate`<p class="text-xl text-muted mt-1 text-justify">${item.description}</p>`} </li>`)} </ol> <h1 class="my-8 text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade ">Consecuencias principales:</h1> <ol${addAttribute(`grid grid-cols-1 md:grid-cols-${columns} gap-y-8 md:gap-y-12`, "class")}> ${[
    {
      title: "Desabastecimiento o sobrestock",
      description: "Se genera una mala planificaci\xF3n de pedidos, afectando la disponibilidad de productos o generando p\xE9rdidas por acumulaci\xF3n excesiva."
    },
    {
      title: "Aumento de costos operativos",
      description: "El tiempo y los recursos invertidos en gestionar inventarios de forma manual afectan la eficiencia del negocio."
    },
    {
      title: "Baja satisfacci\xF3n del cliente",
      description: "La falta de productos esenciales reduce la confianza y fidelidad de los consumidores."
    },
    {
      title: "P\xE9rdidas econ\xF3micas",
      description: "Las ineficiencias en el control de inventarios impactan directamente en los m\xE1rgenes de ganancia del negocio."
    }
  ].map((item, index) => renderTemplate`<li class="max-w-none flex flex-col items-start motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade "> <span class="font-bold text-xl mb-1 flex gap-2"> <b class="text-blue-700 border-2 border-blue-700 rounded-full w-8 h-8 flex justify-center"> ${index + 1} </b> ${item.title} </span> ${item.description && renderTemplate`<p class="text-xl text-muted mt-1 text-justify">${item.description}</p>`} </li>`)} </ol>  ${renderComponent($$result4, "ImageCard", $$ImageCard, { "src": "/diagramas/arbol_de_problemas.jpg", "alt": "Arbol de Problemas" })} ${renderComponent($$result4, "ImageCard", $$ImageCard, { "src": "/diagramas/detalle_arbol_de_problemas.jpg", "alt": "Arbol de Problemas" })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="uppercase">Arbol de problemas</span> <br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/arbol-de-problemas.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/arbol-de-problemas.astro";
const $$url = "/generalidades/arbol-de-problemas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ArbolDeProblemas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
