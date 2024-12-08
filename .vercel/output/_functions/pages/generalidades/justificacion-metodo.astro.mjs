import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
export { renderers } from '../../renderers.mjs';

const $$JustificacionMetodo = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "About us"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "justificacion del metodo elejido" }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Lorem
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
LOREM ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight"> Beautiful Website Templates</span> ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/justificacion-metodo.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/justificacion-metodo.astro";
const $$url = "/generalidades/justificacion-metodo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JustificacionMetodo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
