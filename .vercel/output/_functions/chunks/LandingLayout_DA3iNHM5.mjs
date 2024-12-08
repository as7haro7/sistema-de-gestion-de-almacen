import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderSlot, F as Fragment } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { b as $$Header, h as headerData, c as $$PageLayout } from './PageLayout_BEwikMnU.mjs';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["header"], renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": headerData?.links[2] ? [headerData.links[2]] : void 0, "showToggleTheme": true, "position": "right" })} `)} ` })}` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/layouts/LandingLayout.astro", void 0);

export { $$LandingLayout as $ };
