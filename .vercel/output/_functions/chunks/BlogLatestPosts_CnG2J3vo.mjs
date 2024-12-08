import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Grid } from './Grid_CD8YfYD2.mjs';
import { g as getBlogPermalink } from './permalinks_D56ODUJd.mjs';
import { f as findLatestPosts } from './blog_BTQUgDFQ.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_E_sFqnUb.mjs';
import { $ as $$Button } from './PageLayout_BEwikMnU.mjs';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${" "}${linkText} »
` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/BlogLatestPosts.astro", void 0);

export { $$BlogLatestPosts as $ };
