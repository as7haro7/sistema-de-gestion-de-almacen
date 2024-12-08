import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
export { renderers } from '../../renderers.mjs';

const $$Antecedentes = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Antecedentes"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `El Minimarket Mamilus, establecido en un entorno local, se dedica a la comercializaci\xF3n de productos de consumo diario como alimentos, bebidas, art\xEDculos de limpieza y productos b\xE1sicos del hogar. A pesar de ser un negocio en crecimiento, enfrenta desaf\xEDos comunes en su operatividad debido a la falta de un sistema estructurado para la gesti\xF3n de inventarios. Actualmente, el control de productos se lleva a cabo de forma manual mediante registros en libros o hojas de c\xE1lculo, lo que dificulta el seguimiento de las entradas y salidas de productos, y aumenta el riesgo de errores humanos.` })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `En la \xFAltima d\xE9cada, los avances tecnol\xF3gicos han permitido que incluso los peque\xF1os negocios accedan a sistemas de gesti\xF3n de inventarios que facilitan la automatizaci\xF3n de procesos, la reducci\xF3n de costos operativos y la mejora en la toma de decisiones. Sin embargo, muchas empresas, como Minimarket Mamilus, no han implementado este tipo de soluciones, ya sea por desconocimiento o por percibirlas como costosas y complejas.` })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `El \xE9xito de negocios similares que han integrado sistemas automatizados de inventarios respalda la idea de que estos no solo optimizan la gesti\xF3n, sino que tambi\xE9n incrementan la satisfacci\xF3n del cliente al garantizar la disponibilidad de productos esenciales. En este contexto, surge la necesidad de dise\xF1ar e implementar un sistema que se ajuste a las particularidades del Minimarket Mamilus, contribuyendo a su desarrollo sostenible y competitivo.` })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="uppercase">Antecedentes</span><br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/antecedentes.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/antecedentes.astro";
const $$url = "/generalidades/antecedentes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Antecedentes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
