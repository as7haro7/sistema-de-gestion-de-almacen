import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, F as Fragment } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sistemadeinventario.com");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { title, content, index } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="border-b border-slate-200 text-xl motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"> <button', ' class="w-full flex justify-between items-center py-5 text-slate-800"> <span class="dark:text-white font-semibold ">', "</span> <span", ' class="text-slate-800 transition-transform duration-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"> <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path> </svg> </span> </button> <div', ' class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"> <div class="pb-5 text-xl text-muted text-justify"> ', ' </div> </div> </div> <script type="text/javascript">\n  function toggleAccordion(index) {\n    const content = document.getElementById(`content-${index}`);\n    const icon = document.getElementById(`icon-${index}`);\n\n    const downSVG = `\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">\n        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />\n      </svg>\n    `;\n\n    const upSVG = `\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">\n        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />\n      </svg>\n    `;\n\n    if (content.style.maxHeight && content.style.maxHeight !== \'0px\') {\n      content.style.maxHeight = \'0\';\n      icon.innerHTML = upSVG;\n    } else {\n      content.style.maxHeight = content.scrollHeight + \'px\';\n      icon.innerHTML = downSVG;\n    }\n  }\n<\/script>'], ["", '<div class="border-b border-slate-200 text-xl motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"> <button', ' class="w-full flex justify-between items-center py-5 text-slate-800"> <span class="dark:text-white font-semibold ">', "</span> <span", ' class="text-slate-800 transition-transform duration-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"> <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path> </svg> </span> </button> <div', ' class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"> <div class="pb-5 text-xl text-muted text-justify"> ', ' </div> </div> </div> <script type="text/javascript">\n  function toggleAccordion(index) {\n    const content = document.getElementById(\\`content-\\${index}\\`);\n    const icon = document.getElementById(\\`icon-\\${index}\\`);\n\n    const downSVG = \\`\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">\n        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />\n      </svg>\n    \\`;\n\n    const upSVG = \\`\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">\n        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />\n      </svg>\n    \\`;\n\n    if (content.style.maxHeight && content.style.maxHeight !== \'0px\') {\n      content.style.maxHeight = \'0\';\n      icon.innerHTML = upSVG;\n    } else {\n      content.style.maxHeight = content.scrollHeight + \'px\';\n      icon.innerHTML = downSVG;\n    }\n  }\n<\/script>'])), maybeRenderHead(), addAttribute(`toggleAccordion(${index})`, "onclick"), title, addAttribute(`icon-${index}`, "id"), addAttribute(`content-${index}`, "id"), content);
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/Accordion.astro", void 0);

const $$HerramientasTecnicas = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Herramientas y t\xE9cnicas utilizadas."
  };
  const items = [
    {
      nombre: "Entrevistas estructuradas",
      descripci\u00F3n: "Para identificar problemas en los procesos actuales de inventario y expectativas del sistema."
    },
    {
      nombre: "Encuestas",
      descripci\u00F3n: "Dirigidas al personal para evaluar el conocimiento y las pr\xE1cticas relacionadas con la gesti\xF3n de inventarios."
    },
    {
      nombre: "Observaci\xF3n directa",
      descripci\u00F3n: "Seguimiento de las operaciones diarias para mapear los procesos existentes."
    },
    {
      nombre: "Revisi\xF3n documental",
      descripci\u00F3n: "An\xE1lisis de registros actuales de inventarios, ventas y compras para identificar patrones y fallas."
    }
  ];
  const herramientasDeAn\u00E1lisis = [
    {
      title: "Diagrama de contexto y DFD",
      content: "Representar el sistema actual y proponer flujos de informaci\xF3n."
    },
    {
      title: "Diagramas UML (clases, casos de uso, secuencia)",
      content: "Modelar el dise\xF1o t\xE9cnico y funcional del sistema."
    },
    {
      title: "Modelado de base de datos",
      content: "Creaci\xF3n del esquema relacional para el almacenamiento de datos del inventario."
    },
    {
      title: "Prototipos de interfaz",
      content: "Creaci\xF3n de pantallas y men\xFAs preliminares para probar la usabilidad."
    }
  ];
  const herramientasTecnologicas = [
    {
      title: "Bases de datos relacionales",
      content: "MySQL o PostgreSQL para la gesti\xF3n eficiente de datos."
    },
    {
      title: "Lenguajes de programaci\xF3n",
      content: "Python (Django, Flask) o Java (Spring Boot) para el desarrollo del sistema."
    },
    {
      title: "Herramientas de dise\xF1o",
      content: "Lucidchart o Figma para crear diagramas y prototipos."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`  ${maybeRenderHead()}<h1 class="text-xl font-bold text-left !indent-0 list-inside motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Técnicas de Recolección de Datos:
</h1> <div class="max-w-4xl mx-auto mt-1 inset-4"> ${items.map((item, idx) => renderTemplate`${renderComponent($$result4, "Accordion", $$Accordion, { "title": item.nombre, "content": item.descripci\u00F3n, "index": idx })}`)} </div>  <h1 class="text-xl font-bold text-left !indent-0 list-inside motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Herramientas de Análisis y Diseño:
</h1> <div class="max-w-4xl mx-auto mt-1 inset-4"> ${herramientasDeAn\u00E1lisis.map((item, idh) => renderTemplate`${renderComponent($$result4, "Accordion", $$Accordion, { "title": item.title, "content": item.content, "index": items.length + idh })}`)} </div>  <h1 class="text-xl font-bold text-left !indent-0 list-inside motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Herramientas Tecnológicas:
</h1> <div class="max-w-4xl mx-auto mt-1 inset-4"> ${herramientasTecnologicas.map((item, idt) => renderTemplate`${renderComponent($$result4, "Accordion", $$Accordion, { "title": item.title, "content": item.content, "index": items.length + herramientasDeAn\u00E1lisis.length + idt })}`)} </div> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="uppercase">Herramientas y técnicas utilizadas.</span> ` })}` })} ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/herramientas-tecnicas.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/herramientas-tecnicas.astro";
const $$url = "/generalidades/herramientas-tecnicas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HerramientasTecnicas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
