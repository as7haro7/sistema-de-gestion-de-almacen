import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$FAQs } from '../../chunks/FAQs_DQCujwDq.mjs';
export { renderers } from '../../renderers.mjs';

const $$PlanteamientoDelProblema = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Planteamiento del Problema"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<p class="mx-auto dark:text-slate-400 font-medium md:mt-3 mt-2 text-gray-500 text-xl motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade text-justify">
El Minimarket Mamilus enfrenta problemas críticos relacionados con la gestión manual de inventarios, que afectan
        tanto la eficiencia operativa como la satisfacción del cliente. Entre las principales dificultades se
        encuentran:
</p> ${renderComponent($$result4, "FAQs", $$FAQs, { "columns": 1, "items": [
    {
      title: "Falta de control preciso",
      description: "El manejo manual genera inconsistencias en los registros, lo que dificulta conocer el estado real de las existencias."
    },
    {
      title: "Riesgo de desabastecimiento o sobrestock",
      description: "La falta de datos confiables complica la planificaci\xF3n adecuada, provocando la p\xE9rdida de ventas por falta de productos o gastos innecesarios por acumulaci\xF3n excesiva."
    },
    {
      title: "Baja eficiencia operativa",
      description: "El tiempo invertido en registrar, verificar y actualizar inventarios manualmente retrasa otros procesos importantes del negocio."
    },
    {
      title: "Limitada generaci\xF3n de reportes",
      description: "Los m\xE9todos actuales no permiten analizar patrones de ventas o comportamiento de productos, lo que dificulta la toma de decisiones estrat\xE9gicas."
    }
  ] })} <p class="mx-auto dark:text-slate-400 font-medium text-gray-500 text-xl motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade text-justify">
Estos problemas no solo afectan la operatividad interna, sino que también repercuten en la experiencia del cliente y, en última instancia, en la rentabilidad del negocio. Por lo tanto, resulta imperativo diseñar e implementar un sistema de gestión de inventarios que optimice estos procesos, minimice errores y brinde una base sólida para la toma de decisiones informadas.
</p> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="uppercase">Planteamiento del Problema </span><br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/planteamiento-del-problema.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/planteamiento-del-problema.astro";
const $$url = "/generalidades/planteamiento-del-problema";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PlanteamientoDelProblema,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
