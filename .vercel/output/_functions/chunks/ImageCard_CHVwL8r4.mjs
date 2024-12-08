import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BneTOg58.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$ImageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageCard;
  const { src, alt, borderRadius = "8px", width = "100%", height = "auto", boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`rounded-[${borderRadius}] shadow-[${boxShadow}] inline-block overflow-hidden`, "class")}> <a${addAttribute(src, "href")} data-fancybox="gallery"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(`w-[${width}] h-[${height}] object-cover`, "class")}> </a> </div> <!-- ---
const { src, alt, borderRadius = "8px", width = "100%", height = "auto", boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)" } = Astro.props;
---

<div class={\`overflow-hidden rounded-[\${borderRadius}] shadow-[\${boxShadow}] inline-block motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade \`}>
  <img
    src={src}
    alt={alt}
    class={\`block w-[\${width}] h-[\${height}] object-cover\`}
  />
</div> -->`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/components/widgets/ImageCard.astro", void 0);

export { $$ImageCard as $ };
