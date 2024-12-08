import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Headline } from './Headline_C3HqXuqS.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_E_sFqnUb.mjs';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<ol${addAttribute(`grid grid-cols-1 md:grid-cols-${columns} gap-y-8 md:gap-y-12`, "class")}> ${items.map((item, index) => renderTemplate`<li class="max-w-none flex flex-col items-start"> <span class="font-bold text-xl mb-1 flex gap-2"><b class="text-blue-700 border-2 border-blue-700 rounded-full w-8 h-8 flex justify-center">${index + 1}</b> ${item.title}</span>  ${item.description && /* Verifica si hay una descripción */
  renderTemplate`<p class="text-xl text-muted mt-1 text-justify">${item.description}</p>`} </li>`)} </ol> ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/FAQs.astro", void 0);

export { $$FAQs as $ };
