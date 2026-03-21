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
    name: "Азамат Борисович Макоев",
    position: "Терапевт, эндодонтист, ортопед",
    experience: "Опыт 10 лет",
    shortDescription: [
      "Решает сложные ортопедические задачи",
      "Протезирование на имплантах",
      "Виниры и эстетика"
    ],
    fullDescription: [
      "Терапевт, эндодонтист, ортопед",
      "Опыт 10 лет",
      "Решает сложные ортопедические и эстетические задачи",
      "Протезирование на имплантах, виниры",
      "Все виды съёмного и несъёмного протезирования"
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
