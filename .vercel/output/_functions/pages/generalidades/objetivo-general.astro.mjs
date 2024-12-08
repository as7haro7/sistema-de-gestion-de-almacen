import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
export { renderers } from '../../renderers.mjs';

const $$ObjetivoGeneral = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Objetivo General"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": "Dise\xF1ar e implementar un sistema de gesti\xF3n de inventarios automatizado para el Minimarket Mamilus que mejore la eficiencia operativa, reduzca errores humanos y facilite la toma de decisiones estrat\xE9gicas mediante datos confiables y en tiempo real." })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="uppercase"> Objetivo General </span> ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/objetivo-general.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/objetivo-general.astro";
const $$url = "/generalidades/objetivo-general";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ObjetivoGeneral,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };