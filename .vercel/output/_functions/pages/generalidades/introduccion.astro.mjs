import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Introduccion = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Introducci\xF3n"
  };
  const sections = [
    { name: "Marco Te\xF3rico", description: "se definen los conceptos, antecedentes y el problema que se busca resolver" },
    {
      name: "An\xE1lisis y Dise\xF1o Estructurado",
      description: "detalla los modelos que representan el sistema desde un enfoque funcional"
    },
    {
      name: "An\xE1lisis y Dise\xF1o Orientado a Objetos",
      description: "profundiza en el dise\xF1o detallado del sistema, incluyendo diagramas UML y la arquitectura"
    },
    {
      name: "Conclusiones y Recomendaciones",
      description: "se reflexiona sobre los resultados obtenidos y se proponen mejoras futuras"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": " Sistema de Gestion de almacen Minimarket " }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `El control eficiente de inventarios es esencial para el \xE9xito de cualquier negocio minorista, especialmente en un minimarket donde la rotaci\xF3n de productos y la variedad de art\xEDculos son factores clave. El presente informe aborda el dise\xF1o y an\xE1lisis de un sistema de gesti\xF3n de inventarios para el Minimarket Mamilus, cuyo prop\xF3sito es optimizar los procesos relacionados con el manejo de existencias, registro de productos, control de ingresos y salidas, y generaci\xF3n de reportes.
` })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `En la actualidad, muchas peque\xF1as empresas enfrentan problemas relacionados con la falta de automatizaci\xF3n en sus procesos de inventario, lo que puede generar p\xE9rdidas econ\xF3micas, desabastecimiento o exceso de productos. Por ello, surge la necesidad de implementar un sistema que no solo facilite la gesti\xF3n de estos procesos, sino que tambi\xE9n permita la toma de decisiones informadas basada en datos precisos y actualizados.
` })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `El desarrollo de este sistema se realizar\xE1 aplicando los principios del an\xE1lisis y dise\xF1o de sistemas, utilizando tanto metodolog\xEDas estructuradas como orientadas a objetos. Estas herramientas permitir\xE1n garantizar que el sistema sea funcional, escalable y capaz de satisfacer las necesidades espec\xEDficas del Minimarket Mamilus.` })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "text": "Este informe se estructura en cuatro cap\xEDtulos: en el", "sections": sections })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `De esta manera, este proyecto busca contribuir a la mejora operativa del Minimarket Mamilus, asegurando una gesti\xF3n de inventarios eficiente y alineada con los objetivos del negocio.
` })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
INTRODUCCIÓN ${maybeRenderHead()}<br>  ` })}` })} ` })} <!--  -->`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/introduccion.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/introduccion.astro";
const $$url = "/generalidades/introduccion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Introduccion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
