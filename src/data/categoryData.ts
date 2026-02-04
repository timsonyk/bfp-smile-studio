export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  pageTitle: string;
  videoPath: string;
  content: string;
}

export interface CategoryData {
  health: ServiceItem[];
  beauty: ServiceItem[];
}

export const healthServices: ServiceItem[] = [
  {
    slug: "bolit-zub",
    title: "Болит зуб",
    shortDescription: "Острая боль, которую нужно устранить",
    pageTitle: "Болит зуб — что делать?",
    videoPath: "/videos/health/bolit-zub.mp4",
    content: "Зубная боль — это сигнал о проблеме, которую нельзя игнорировать. Мы проведём диагностику, найдём причину и устраним боль максимально бережно."
  },
  {
    slug: "krovotochat-desny",
    title: "Кровоточат дёсны",
    shortDescription: "Признак воспаления, требующий внимания",
    pageTitle: "Кровоточат дёсны — причины и лечение",
    videoPath: "/videos/health/krovotochat-desny.mp4",
    content: "Кровоточивость дёсен часто указывает на гингивит или пародонтит. Своевременное лечение предотвратит потерю зубов и восстановит здоровье дёсен."
  },
  {
    slug: "shataetsya-zub",
    title: "Шатается зуб",
    shortDescription: "Важно сохранить зуб, пока не поздно",
    pageTitle: "Шатается зуб — как сохранить?",
    videoPath: "/videos/health/shataetsya-zub.mp4",
    content: "Подвижность зуба может быть вызвана травмой или заболеванием пародонта. Мы определим причину и сделаем всё возможное для сохранения зуба."
  },
  {
    slug: "nepriyatnyj-zapah",
    title: "Неприятный запах изо рта",
    shortDescription: "Деликатная проблема с решением",
    pageTitle: "Неприятный запах изо рта — как избавиться?",
    videoPath: "/videos/health/nepriyatnyj-zapah.mp4",
    content: "Галитоз часто связан с заболеваниями полости рта, налётом на языке или проблемами с желудком. Комплексная диагностика поможет найти и устранить причину."
  },
  {
    slug: "tresnul-zub",
    title: "Треснул зуб",
    shortDescription: "Нужна срочная помощь",
    pageTitle: "Треснул зуб — что делать?",
    videoPath: "/videos/health/tresnul-zub.mp4",
    content: "Трещина в зубе требует немедленного внимания. В зависимости от глубины повреждения мы восстановим зуб с помощью пломбы, вкладки или коронки."
  },
  {
    slug: "vypala-plomba",
    title: "Выпала пломба",
    shortDescription: "Зуб нуждается в защите",
    pageTitle: "Выпала пломба — восстановление",
    videoPath: "/videos/health/vypala-plomba.mp4",
    content: "Выпавшая пломба оставляет зуб беззащитным перед кариесом. Важно как можно скорее восстановить целостность зуба качественной реставрацией."
  },
  {
    slug: "vospalilas-desna",
    title: "Воспалилась десна",
    shortDescription: "Снимем воспаление, устраним причину",
    pageTitle: "Воспаление десны — лечение",
    videoPath: "/videos/health/vospalilas-desna.mp4",
    content: "Воспаление десны может быть локальным или охватывать всю полость рта. Мы определим степень проблемы и назначим эффективное лечение."
  },
  {
    slug: "chuvstvitelnost-zubov",
    title: "Чувствительность зубов",
    shortDescription: "Реакция на холодное и горячее",
    pageTitle: "Чувствительность зубов — причины и решения",
    videoPath: "/videos/health/chuvstvitelnost-zubov.mp4",
    content: "Гиперчувствительность возникает из-за истончения эмали или оголения корней. Современные методы лечения позволяют эффективно решить эту проблему."
  },
  {
    slug: "zub-mudrosti",
    title: "Зуб мудрости болит",
    shortDescription: "Сложный зуб требует внимания",
    pageTitle: "Болит зуб мудрости — что делать?",
    videoPath: "/videos/health/zub-mudrosti.mp4",
    content: "Зубы мудрости часто прорезываются проблемно. Мы оценим ситуацию и примем решение — лечить или удалить — исходя из вашей ситуации."
  },
  {
    slug: "udalenie-zuba",
    title: "Нужно удалить зуб",
    shortDescription: "Безболезненное удаление и восстановление",
    pageTitle: "Удаление зуба — когда необходимо?",
    videoPath: "/videos/health/udalenie-zuba.mp4",
    content: "Если зуб невозможно сохранить, мы проведём атравматичное удаление и предложим варианты восстановления — имплантат или мостовидный протез."
  }
];

export const beautyServices: ServiceItem[] = [
  {
    slug: "belosnezhnaya-ulybka",
    title: "Хочу белоснежную улыбку",
    shortDescription: "Профессиональное отбеливание",
    pageTitle: "Отбеливание зубов — сияющая улыбка",
    videoPath: "/videos/beauty/belosnezhnaya-ulybka.mp4",
    content: "Профессиональное отбеливание безопасно осветлит зубы на несколько тонов. Мы подберём оптимальный метод с учётом состояния вашей эмали."
  },
  {
    slug: "krivye-zuby",
    title: "Кривые зубы",
    shortDescription: "Выравнивание и исправление прикуса",
    pageTitle: "Исправление кривых зубов",
    videoPath: "/videos/beauty/krivye-zuby.mp4",
    content: "Неровные зубы можно исправить брекетами, элайнерами или винирами. Мы подберём метод, который даст лучший результат в вашем случае."
  },
  {
    slug: "shchel-mezhdu-zubami",
    title: "Щель между зубами",
    shortDescription: "Диастема — эстетическая коррекция",
    pageTitle: "Щель между зубами — как убрать?",
    videoPath: "/videos/beauty/shchel-mezhdu-zubami.mp4",
    content: "Диастему можно закрыть с помощью виниров, реставрации композитом или ортодонтического лечения. Выбор метода зависит от ваших целей и ситуации."
  },
  {
    slug: "forma-zubov",
    title: "Некрасивая форма зубов",
    shortDescription: "Эстетическая реставрация",
    pageTitle: "Коррекция формы зубов",
    videoPath: "/videos/beauty/forma-zubov.mp4",
    content: "Форму зубов можно изменить с помощью виниров или композитной реставрации. Мы создадим гармоничную улыбку, учитывая форму лица и ваши пожелания."
  },
  {
    slug: "viniry",
    title: "Хочу виниры",
    shortDescription: "Идеальная улыбка как у звёзд",
    pageTitle: "Виниры — путь к идеальной улыбке",
    videoPath: "/videos/beauty/viniry.mp4",
    content: "Виниры — тонкие керамические накладки, которые преображают улыбку. Мы используем минимально инвазивные методы для сохранения здоровых тканей зуба."
  }
];

export const categoryData: CategoryData = {
  health: healthServices,
  beauty: beautyServices
};
