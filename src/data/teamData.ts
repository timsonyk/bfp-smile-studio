import makarovImg from "@/assets/makarov.jpg";
import aivazyanImg from "@/assets/aivazyan.jpg";
import makoevImg from "@/assets/makoev.jpg";
import ayurovaImg from "@/assets/ayurova.jpg";

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  shortDescription: string[];
  fullDescription: string[];
  image: string;
  slug: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "artur-makarov",
    name: "Артур Макаров",
    position: "Главный врач, ортопед, гнатолог",
    experience: "Стаж с 1995 года",
    shortDescription: [
      "Ортопед, гнатолог",
      "Стаж с 1995 года",
      "Автор концепции bfp",
      "Комплексный подход к лечению"
    ],
    fullDescription: [
      "Структурная диагностика и комплексное лечение зубочелюстной системы",
      "Анализ осанки и функций ВНЧС",
      "Предварительный функциональный анализ",
      "3D-сканирование + фотопротокол",
      "Полный сбор анамнеза",
      "Комплексный план лечения с привлечением специалистов"
    ],
    image: makarovImg,
    slug: "artur-makarov"
  },
  {
    id: "albert-ayvazyan",
    name: "Альберт Гайкович Айвазян",
    position: "Хирург-имплантолог",
    experience: "Опыт более 10 лет",
    shortDescription: [
      "Современные методики имплантации",
      "Работа с микроскопом",
      "Решение задач любой сложности"
    ],
    fullDescription: [
      "Опыт более 10 лет",
      "Современные методики имплантации и удаления",
      "Работа с микроскопом",
      "Решение задач любой сложности",
      "Участник семинаров и конференций",
      "Постоянно повышает квалификацию"
    ],
    image: aivazyanImg,
    slug: "albert-ayvazyan"
  },
  {
    id: "azamat-makoev",
    name: "Макоев Азамат Борисович",
    position: "Врач-ортодонт",
    experience: "Стаж более 8 лет",
    shortDescription: [
      "Исправление прикуса у взрослых и детей",
      "Брекет-системы и элайнеры",
      "Индивидуальный подход к каждому пациенту"
    ],
    fullDescription: [
      "Стаж более 8 лет",
      "Занимается исправлением прикуса у взрослых и детей с учётом функции, эстетики и долгосрочного результата",
      "В работе использует брекет-системы, элайнеры и ортодонтические аппараты",
      "Выбирает оптимальную тактику для каждого пациента",
      "Постоянно повышает квалификацию и следит за развитием современных подходов в ортодонтии"
    ],
    image: makoevImg,
    slug: "azamat-makoev"
  },
  {
    id: "ekaterina-ayurova",
    name: "Екатерина Аюрова",
    position: "Гигиенист",
    experience: "Опыт 10 лет",
    shortDescription: [
      "Работает под увеличением",
      "Профгигиена взрослые/дети",
      "Отбеливание Zoom4+"
    ],
    fullDescription: [
      "Опыт 10 лет",
      "Работает под увеличением (микроскоп/бинокуляры)",
      "Профгигиена, взрослые/дети",
      "Работа с брекетами и имплантами",
      "Герметизация фиссур",
      "Лечение кариеса без сверления (Icon)",
      "Лечение флюороза, микроабразия",
      "Удаление коричневых пятен",
      "Отбеливание Zoom4+",
      "Назначение домашнего ухода"
    ],
    image: ayurovaImg,
    slug: "ekaterina-ayurova"
  }
];
