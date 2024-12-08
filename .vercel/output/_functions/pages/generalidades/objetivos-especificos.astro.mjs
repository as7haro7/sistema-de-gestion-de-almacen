import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
export { renderers } from '../../renderers.mjs';

const $$ObjetivosEspecificos = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Objetivos especificos"
  };
  const items = [
    {
      title: "Analizar el estado actual de la gesti\xF3n de inventarios",
      description: "Identificar los procesos manuales existentes, los principales problemas y las necesidades del minimarket mediante entrevistas, encuestas y observaci\xF3n directa."
    },
    {
      title: "Definir los requerimientos funcionales y no funcionales",
      description: "Documentar las caracter\xEDsticas esenciales que debe tener el sistema, como funcionalidades, tiempos de respuesta y usabilidad."
    },
    {
      title: "Dise\xF1ar un modelo estructurado y orientado a objetos del sistema",
      description: "Elaborar diagramas de contexto, diagramas de flujo de datos (DFD), diagramas de clases y casos de uso para modelar los componentes y el funcionamiento del sistema."
    },
    {
      title: "Implementar herramientas tecnol\xF3gicas de gesti\xF3n de inventarios",
      description: "Desarrollar el sistema utilizando bases de datos relacionales y tecnolog\xEDas modernas de programaci\xF3n, asegurando un dise\xF1o escalable y eficiente."
    },
    {
      title: "Capacitar al personal",
      description: "Dise\xF1ar e impartir un programa de formaci\xF3n para el uso del sistema, garantizando su correcta adopci\xF3n y operaci\xF3n."
    },
    {
      title: "Evaluar el desempe\xF1o del sistema",
      description: "Realizar pruebas funcionales y de rendimiento para validar su efectividad y realizar ajustes seg\xFAn los resultados obtenidos."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<ol${addAttribute(`grid grid-cols-1 md:grid-cols-${1} gap-y-8 md:gap-y-12`, "class")}> ${items.map((item) => renderTemplate`<li class="max-w-none flex flex-col items-start motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"> <span class="font-bold text-xl mb-1">  ${item.title}</span> ${item.description && renderTemplate`<p class="text-muted mt-1 text-justify text-xl"> ${item.description} </p>`} </li>`)} </ol> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`  <span class="uppercase"> Objetivos especificos</span> ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/objetivos-especificos.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/objetivos-especificos.astro";
const $$url = "/generalidades/objetivos-especificos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ObjetivosEspecificos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
