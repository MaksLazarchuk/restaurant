// Тайтл (опис)
export const subtitle = 'RESTAURANT';

// Назва закладу (може мінятися)
export const title = 'HUNGRY PEOPLE';

export const returned = 'Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM';

export const taboutUsTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.';

export const aboutUsDescription = 'Integer ullamcorper neque eu purus euismod, ac faucibus maurisposuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorperfeugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisissemper laoreet.';

export const masterChefTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.';

export const bottomTextTeam = 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.';

export const workTime = 'Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM, Phone: +40 729 131 637/+40 726 458 782';

export const specialitiesTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.';

export const bottomTextChocolate = 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.';

export const phrase = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.';

export const textForm = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.';

// страва
const testDish = {
  name: 'PIZZA QUATRO STAGIONI . . . .',
  price: '55,68 USD',
  ingredients: 'Integer ullamcorper neque eu purus euismod'
};

// створюю масив на 21 елемент і записую все одним тестовим значенням
export const dishes = (new Array(21)).fill({ ...testDish })
