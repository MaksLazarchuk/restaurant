const getCommon = (storage) => ({
  subtitle: 'РЕСТОРАН',
  title: "Сіли - З'їли",
  returned: 'Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM',

  aboutUsTitle: `Чудовий вишуканий ресторан, в якому ви відчуєте затишок та комфорт`,
  aboutUsDescription: `Спробуйте смак італійської кухні, піцу приготовлену на дровах та фруктові нотки червоного вина! Дух Італії та затишок Флоренції...`,
  aboutImg: `${storage}/about-img.png`,

  masterChefTitle: 'У нас працюють професіонали високої кухні!',
  masterChefDescription: `Митці, що творять кулінарні шедеври, доброзичливий та турботливй персонал - все це ви знайдете в нас.`,
  masterChefImg: `${storage}/chef.png`,

  bookATableImg: `${storage}/clock.png`,

  specialities: 'ШОКОЛАДНІ ПАНКЕЙКИ',
  specialitiesTitle: `Хіт сезону - Шоколадні панкейки. Нова фірмова страва від нашого шефа!`,
  specialitiesDescription: `Що може смачніше пишних панкейків на сніданок? Тільки шоколадні панкейкі! Такі ж ніжні, пористі але, що володіють насиченим шоколадним смаком.`,
  specialitiesImg: `${storage}/ice-cream.png`,
});

const getContacts = () => ({
  fb: 'https://www.facebook.com/SilyZjily',
  tw: 'https://twitter.com/eureka_nsk',
  in: 'https://www.instagram.com/explore/locations/959141913/-/?hl=uk'
});

module.exports = { getCommon, getContacts };
