import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { c as $$PageLayout } from '../chunks/PageLayout_BEwikMnU.mjs';
import { $ as $$Hero } from '../chunks/Hero_BTePka8K.mjs';
import { $ as $$Features3 } from '../chunks/Features3_824XwI_t.mjs';
import { $ as $$YouTube } from '../chunks/LinkPreview_DTXrXTK2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sistemadeinventario.com");
const $$Video = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Video;
  const metadata = {
    title: "Startup Landing Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "VIDEO" }, { "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "image" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "YouTube", $$YouTube, { "id": "W-D0tCwMb2o", "title": "Sistema de Gestion de almacen Minimarket MAMILUS" })} <style>
        lite-youtube {
          margin: 0 auto;
          max-width: 100%;
        }
      </style> ` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
En este video, te llevamos a el diseño conceptual y la visión detrás de la solución.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="uppercase">Explora el Proyecto en Detalle</span> ` })}` })}        ${renderComponent($$result2, "Features3", $$Features3, { "title": "H\xE1ganos saber c\xF3mo podemos ayudar", "subtitle": "Estamos aqu\xED para ayudar y responder cualquier pregunta que pueda tener.", "columns": 4, "items": [
    {
      title: "Tel\xE9fono",
      icon: "tabler:phone",
      callToAction: {
        target: "_blank",
        text: "Ll\xE1menos",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Correo electr\xF3nico",
      icon: "tabler:mail",
      callToAction: {
        target: "_blank",
        text: "Escr\xEDbanos",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Chatear con ventas",
      icon: "tabler:message-circle",
      callToAction: {
        target: "_blank",
        text: "Empiece a chatear",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Chatear con soporte",
      icon: "tabler:message-circle",
      callToAction: {
        target: "_blank",
        text: "Empiece a chatear",
        href: "/",
        variant: "link"
      }
    }
  ] })} ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/video.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/video.astro";
const $$url = "/video";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Video,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
