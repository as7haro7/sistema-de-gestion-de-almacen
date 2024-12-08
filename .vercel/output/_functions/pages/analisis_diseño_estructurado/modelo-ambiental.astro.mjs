import { a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BneTOg58.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../../chunks/Hero_BTePka8K.mjs';
import { c as $$PageLayout } from '../../chunks/PageLayout_BEwikMnU.mjs';
import { s as systemData } from '../../chunks/texts_DT3WaeAF.mjs';
import { $ as $$StructuredText } from '../../chunks/StructuredText_DDRDiq1W.mjs';
import { $ as $$FAQs } from '../../chunks/FAQs_DQCujwDq.mjs';
import { $ as $$ImageCard } from '../../chunks/ImageCard_CHVwL8r4.mjs';
export { renderers } from '../../renderers.mjs';

const $$ModeloAmbiental = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Modelo Ambiental"
  };
  const eventList = [
    {
      title: "Configuraci\xF3n Inicial del Almac\xE9n",
      description: "Actor: Administrador del Minimarket. Acci\xF3n: Define categor\xEDas de productos, ubicaciones f\xEDsicas y rutas internas para el almacenamiento eficiente. Resultado: El almac\xE9n queda configurado seg\xFAn las necesidades del minimarket."
    },
    {
      title: "Recepci\xF3n de Productos",
      description: "Actor: Personal del Almac\xE9n. Acci\xF3n: Registra la entrada de productos entregados por los proveedores, verificando cantidades, lotes y condiciones de entrega. Resultado: Los productos se registran en el sistema y se asignan a ubicaciones espec\xEDficas."
    },
    {
      title: "Notificaci\xF3n de Env\xEDos",
      description: "Actor: Proveedor. Acci\xF3n: Env\xEDa detalles sobre los productos enviados al minimarket, incluyendo cantidades, fechas y lotes. Resultado: El sistema recibe la informaci\xF3n y prepara el registro de recepci\xF3n."
    },
    {
      title: "Actualizaci\xF3n de Inventario",
      description: "Actor: Sistema. Acci\xF3n: Ajusta autom\xE1ticamente los niveles de stock tras la recepci\xF3n de productos o ventas realizadas. Resultado: El inventario refleja el estado actual en tiempo real."
    },
    {
      title: "Generaci\xF3n de Alertas",
      description: "Actor: Sistema. Acci\xF3n: Env\xEDa notificaciones al administrador y al supervisor sobre: Stock bajo, Exceso de inventario, Productos pr\xF3ximos a vencer. Resultado: Los actores relevantes toman acciones correctivas."
    },
    {
      title: "Clasificaci\xF3n y Ubicaci\xF3n de Productos",
      description: "Actor: Personal del Almac\xE9n. Acci\xF3n: Organiza los productos en estanter\xEDas seg\xFAn las categor\xEDas y ubicaciones definidas. Resultado: Los productos quedan correctamente almacenados para facilitar su localizaci\xF3n."
    },
    {
      title: "Registro de Salidas",
      description: "Actor: Personal del Almac\xE9n. Acci\xF3n: Registra la salida de productos hacia el \xE1rea de ventas o por despachos solicitados por clientes corporativos. Resultado: El inventario se actualiza con las cantidades retiradas."
    },
    {
      title: "Solicitud de Productos por Clientes Corporativos",
      description: "Actor: Cliente Corporativo. Acci\xF3n: Solicita productos en grandes cantidades o pedidos especiales. Resultado: El sistema confirma disponibilidad y genera un pedido interno para su preparaci\xF3n."
    },
    {
      title: "Supervisi\xF3n de Operaciones",
      description: "Actor: Supervisor de Almac\xE9n. Acci\xF3n: Supervisa las actividades del personal, verificando entradas, salidas y el estado general del inventario. Resultado: Las operaciones diarias se desarrollan de manera fluida y eficiente."
    },
    {
      title: "Reportes Detallados de Movimientos",
      description: "Actor: Auditor\xEDa Interna. Acci\xF3n: Solicita reportes sobre movimientos de productos, trazabilidad y niveles de inventario. Resultado: El sistema genera informes precisos para su an\xE1lisis."
    },
    {
      title: "Coordinaci\xF3n de Devoluciones",
      description: "Actor: Proveedor. Acci\xF3n: Recibe notificaciones sobre devoluciones de productos da\xF1ados o no conformes. Resultado: Los ajustes correspondientes se realizan en el sistema."
    },
    {
      title: "Generaci\xF3n de Facturas",
      description: "Actor: Sistema de Pagos. Acci\xF3n: Registra y procesa facturas de proveedores asociadas a los productos entregados. Resultado: Los pagos quedan registrados y los proveedores reciben confirmaciones."
    },
    {
      title: "Ajustes en Inventario por Auditor\xEDa",
      description: "Actor: Supervisor de Almac\xE9n. Acci\xF3n: Realiza ajustes en el inventario f\xEDsico cuando se detectan discrepancias tras auditor\xEDas internas. Resultado: El inventario se alinea con los datos reales."
    },
    {
      title: "Generaci\xF3n de Informes Estrat\xE9gicos",
      description: "Actor: Administrador del Minimarket. Acci\xF3n: Solicita reportes avanzados sobre rotaci\xF3n de productos, niveles de stock y patrones de consumo. Resultado: Los informes permiten planificar reabastecimientos y definir estrategias de venta."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": systemData.projectTitle.concat(" ").concat(systemData.company) }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 class="text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Declaración del Propósito
</h1> ${renderComponent($$result4, "StructuredText", $$StructuredText, { "freeText": "El Sistema de Almacenamiento del Minimarket MAMIL\u2019US est\xE1 dise\xF1ado para optimizar la gesti\xF3n del inventario y los flujos de productos, centralizando las operaciones de entrada, almacenamiento y salida de mercanc\xEDas. Este sistema asegura un control eficiente de los niveles de stock, la trazabilidad de productos y el cumplimiento de est\xE1ndares operativos. Adem\xE1s, facilita la comunicaci\xF3n entre los diferentes actores involucrados, como administradores, personal operativo, proveedores, clientes corporativos, y servicios de auditor\xEDa y pagos. Su prop\xF3sito principal es garantizar que el inventario del minimarket sea gestionado de manera precisa y transparente, apoyando la toma de decisiones estrat\xE9gicas y mejorando la productividad general del negocio. " })} <h1 class="text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Diagrama de Contexto
</h1> ${renderComponent($$result4, "ImageCard", $$ImageCard, { "src": "/diagramas/diagrama-de-contexto.jpg", "alt": "Diagrama de Contexto" })} <h1 class="text-xl font-bold text-left motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
Lista de Acontecimientos
</h1> ${renderComponent($$result4, "FAQs", $$FAQs, { "columns": 1, "classes": {
    container: "lg:py-4 py-0 my-0 lg:my-4 px-0"
    // Clases adicionales para personalizar
  }, "items": eventList })} ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="uppercase">Modelo Ambiental </span> <br>  ` })}` })}  ` })}`;
}, "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/analisis_dise\xF1o_estructurado/modelo-ambiental.astro", void 0);

const $$file = "/home/as7haro7/UMSA 2_2024/Analisis y desarollo/Proyecto/sistema-de-gestion-de-inventario/src/pages/analisis_diseño_estructurado/modelo-ambiental.astro";
const $$url = "/analisis_diseño_estructurado/modelo-ambiental";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ModeloAmbiental,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
