import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
export { renderers } from '../../renderers.mjs';

const $$MetodoMediosInstrumentos = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "M\xE9todo, Medios e Instrumentos de Investigaci\xF3n"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": "Se emplea una metodolog\xEDa combinada estructurada y orientada a objetos para abordar tanto el an\xE1lisis funcional como el dise\xF1o t\xE9cnico del sistema. Este enfoque permite identificar y modelar las necesidades actuales del Minimarket Mamilus, mientras que facilita la implementaci\xF3n de un sistema robusto y adaptable." })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": "La elecci\xF3n de herramientas cualitativas y cuantitativas en la etapa de investigaci\xF3n asegura un an\xE1lisis integral del problema, combinando la percepci\xF3n de los usuarios y el an\xE1lisis t\xE9cnico de los procesos. Esto permitir\xE1 dise\xF1ar un sistema personalizado que resuelva los desaf\xEDos espec\xEDficos del negocio." })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="uppercase">Método, Medios e Instrumentos de Investigación </span> <br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/metodo-medios-instrumentos.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/metodo-medios-instrumentos.astro";
const $$url = "/generalidades/metodo-medios-instrumentos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MetodoMediosInstrumentos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
