import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$Icon } from './PageLayout_BEwikMnU.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_E_sFqnUb.mjs';
import { $ as $$Headline } from './Headline_C3HqXuqS.mjs';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$Steps2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Steps2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-muted dark:text-gray-400">${unescapeHTML(description)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/Steps2.astro", void 0);

export { $$Steps2 as $ };
