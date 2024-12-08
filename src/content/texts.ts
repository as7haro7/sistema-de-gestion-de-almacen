
// Definición de interfaces para tipar la estructura de los datos
interface SystemIndex {
    I: string;
    II: string;
    III: string;
    IV: string;
    annexes: string;
}

interface SystemData {
    university: string;
    faculty: string;
    career: string;
    projectTitle: string;
    company: string;
    members: string[];
    instructor: string;
    subject: string;
    parallel: string;
    location: string;
    year: string;
    index: SystemIndex;
}

// Exportación del contenido tipado
export const systemData: SystemData = {
    university: "UNIVERSIDAD MAYOR DE SAN ANDRÉS",
    faculty: "FACULTAD DE CIENCIAS PURAS Y NATURALES",
    career: "CARRERA DE INFORMÁTICA",
    projectTitle: "SISTEMA DE GESTIÓN DE ALMACENES",
    company: "MINIMARKET MAMILUS",
    members: [
        "Univ. Vargas Quispe Jhon",
        "Univ. Karlos",
        "Univ. Condori Cachaca Wilma Anahy",
        "Univ. Poma Condori Erick Fernando",
        "Univ. Yujra Machaca Gabriel"
    ],
    instructor: "DOCENTE: M. Sc. Miguel Cotaña Mier",
    subject: "MATERIA: ANÁLISIS Y DISEÑO DE SISTEMAS I",
    parallel: "PARALELO: “B”",
    location: "LA PAZ - BOLIVIA",
    year: "2024",
    index: {
        I: "Marco Teórico",
        II: "Análisis y Diseño Estructurado",
        III: "Análisis y Diseño Orientado a Objetos",
        IV: "Conclusiones y Recomendaciones",
        annexes: "Anexos"
    }
};
