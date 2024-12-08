import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, e as renderSlot } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { c as $$PageLayout } from './PageLayout_BEwikMnU.mjs';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  const metadata = {
    title: frontmatter?.title
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-4xl"> <h1 class="font-bold font-heading text-4xl md:text-5xl leading-tighter tracking-tighter">${frontmatter.title}</h1> <div class="mx-auto prose prose-lg max-w-4xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8"> ${renderSlot($$result2, $$slots["default"])} </div> </section> ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };