import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper } from './WidgetWrapper_E_sFqnUb.mjs';
import { $ as $$Headline } from './Headline_C3HqXuqS.mjs';
import { a as $$Icon } from './PageLayout_BEwikMnU.mjs';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    stats = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center -m-4 text-center"> ${stats && stats.map(({ amount, title: title2, icon }) => renderTemplate`<div class="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none dark:md:border-slate-500 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"> ${icon && renderTemplate`<div class="flex items-center justify-center mx-auto mb-4 text-primary"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-10 h-10" })} </div>`} ${amount && renderTemplate`<div class="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl"> ${amount} </div>`} ${title2 && renderTemplate`<div class="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base"> ${title2} </div>`} </div>`)} </div> ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/Stats.astro", void 0);

export { $$Stats as $ };
