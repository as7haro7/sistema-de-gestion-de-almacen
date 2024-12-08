import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
export { renderers } from '../../renderers.mjs';

const $$FormulacionDelProblema = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Formulaci\xF3n del Problema"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `En el Minimarket Mamilus, la gesti\xF3n actual de inventarios se realiza de manera manual, lo que genera inconsistencias en los registros, dificulta el seguimiento de productos y aumenta los riesgos de errores humanos. Estas deficiencias resultan en problemas como el desabastecimiento o el sobrestock de productos, p\xE9rdidas econ\xF3micas, y una menor satisfacci\xF3n del cliente.` })} ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": `Por lo tanto, surge la necesidad de desarrollar un sistema de gesti\xF3n de inventarios automatizado que permita optimizar los procesos relacionados con el control de existencias, garantizando una operaci\xF3n m\xE1s eficiente, precisa y alineada con las necesidades del negocio.` })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="uppercase">Formulación del Problema</span> <br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/formulacion-del-problema.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/formulacion-del-problema.astro";
const $$url = "/generalidades/formulacion-del-problema";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FormulacionDelProblema,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
