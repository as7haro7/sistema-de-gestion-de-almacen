import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$StructuredText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StructuredText;
  const {
    text = "",
    sections = [],
    freeText = "",
    classes = ""
  } = Astro2.props;
  const hasSections = sections.length > 0;
  const isFreeText = !!freeText;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`text-justify text-xl text-muted mt-4 motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade ${classes}`, "class")}> ${hasSections ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${text}${" "}${sections.map(({ name, description }, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "key": index }, { "default": ($$result3) => renderTemplate` <b class="font-semibold">${name}</b> ${description}${index < sections.length - 1 && "; "}` })}`)}` })}` : isFreeText && freeText} </p>`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/StructuredText.astro", void 0);

export { $$StructuredText as $ };
