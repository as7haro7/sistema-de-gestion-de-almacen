import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
export { renderers } from '../../renderers.mjs';

const $$AlcancesDelProyecto = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Alcances del proyecto."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<section class="text-left text-xl"> <!-- Alcances Funcionales --> <div class="mt-6 motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade "> <h2 class="text-xl font-bold mb-2">Funcionales</h2> <ul class="list-disc ml-6 space-y-2 text-muted"> <li>
Registro y actualización de productos con información detallada (códigos, nombres, cantidades, fechas de
              ingreso, precios, etc.).
</li> <li>Control automático de entradas y salidas de inventario.</li> <li>Generación de reportes dinámicos para análisis de existencias, ventas y tendencias.</li> <li>Alertas automatizadas para productos con bajo stock o fechas de vencimiento próximas.</li> </ul> </div> <!-- Alcances Técnicos --> <div class="mt-6 motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade "> <h2 class="text-xl font-bold mb-2">Técnicos</h2> <ul class="list-disc ml-6 space-y-2 text-muted"> <li>Sistema accesible desde dispositivos en red local o remota.</li> <li>Interfaz gráfica amigable, intuitiva y adaptada a usuarios con conocimientos básicos en tecnología.</li> <li>Seguridad en los datos mediante autenticación de usuarios y copias de respaldo periódicas.</li> <li>
Diseño modular que permita la integración de futuras funcionalidades, como ventas o gestión de
              proveedores.
</li> </ul> </div> <!-- Alcances Organizacionales --> <div class="mt-6 motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade "> <h2 class="text-xl font-bold mb-2">Organizacionales</h2> <ul class="list-disc ml-6 space-y-2 text-muted"> <li>Capacitación del personal mediante sesiones prácticas y manuales de usuario.</li> <li>Incorporación progresiva del sistema para reducir el impacto en la operación diaria del minimarket.</li> <li>
Evaluación continua del sistema para implementar mejoras basadas en el feedback del personal y resultados
              observados.
</li> </ul> </div> </section> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="uppercase">Alcances del proyecto. </span> <br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/alcances-del-proyecto.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/generalidades/alcances-del-proyecto.astro";
const $$url = "/generalidades/alcances-del-proyecto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AlcancesDelProyecto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
