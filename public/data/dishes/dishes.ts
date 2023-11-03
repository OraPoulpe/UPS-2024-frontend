import { IDish } from '@/shared/interfaces/Dish.interface';
import tsezar from '../images/dishes/salat-tsezar.jpg';
import fish from '../images/dishes/fish.jpg';
import fruit from '../images/dishes/fruit_salat.jpg';
import grecha from '../images/dishes/grecha.jpg';
import kotletka from '../images/dishes/kotleta_and_pirechka.webp';
import omlet from '../images/dishes/omlet.jpg';
import grece from '../images/dishes/salat_grees.jpeg';
import pizza from '../images/dishes/pizza.jpeg';
import soup from '../images/dishes/soup.jpg';
import spaghetti from '../images/dishes/spaghetti.png';

export const dishes: IDish[] = [
  {
    id: 2,
    name: 'Спагетти',
    products: [
      'спагетти',
      'говяжий фарш',
      'помидоры',
      'лук',
      'чеснок',
      'оливковое масло',
      'базилик',
    ],
    caloric: 450,
    fats: 10,
    protein: 20,
    carbohydrates: 60,
    time: 40,
    image: spaghetti.src,
  },
  {
    id: 1,
    name: 'Салат Цезарь',
    products: [
      'куриное филе',
      'салат ромэн',
      'хлебные гренки',
      'пармезан',
      'майонез',
      'горчица',
      'лимонный сок',
    ],
    caloric: 350,
    fats: 25,
    protein: 20,
    carbohydrates: 15,
    time: 30,
    image: tsezar.src,
  },

  {
    id: 3,
    name: 'Гречка с куриной грудкой',
    products: ['гречка', 'куриная грудка', 'оливковое масло', 'специи'],
    caloric: 400,
    fats: 10,
    protein: 35,
    carbohydrates: 45,
    time: 35,
    image: grecha.src,
  },
  {
    id: 4,
    name: 'Омлет с овощами',
    products: ['яйца', 'помидоры', 'шпинат', 'лук', 'перец', 'молоко'],
    caloric: 250,
    fats: 12,
    protein: 15,
    carbohydrates: 20,
    time: 20,
    image: omlet.src,
  },
  {
    id: 5,
    name: 'Тушеная рыба с овощами',
    products: [
      'рыба (лосось, тунец и др.)',
      'брокколи',
      'морковь',
      'лимон',
      'чеснок',
      'оливковое масло',
    ],
    caloric: 300,
    fats: 15,
    protein: 30,
    carbohydrates: 15,
    time: 25,
    image: fish.src,
  },

  {
    id: 7,
    name: 'Шпинатный суп',
    products: ['шпинат', 'картофель', 'лук', 'сливочное масло', 'сливки'],
    caloric: 300,
    fats: 15,
    protein: 10,
    carbohydrates: 30,
    time: 30,
    image: soup.src,
  },
  {
    id: 8,
    name: 'ммм САЛАТИК',
    products: [
      'огурцы',
      'помидоры',
      'красный лук',
      'оливки',
      'фета',
      'оливковое масло',
    ],
    caloric: 250,
    fats: 15,
    protein: 10,
    carbohydrates: 20,
    time: 15,
    image: grece.src,
  },
  {
    id: 9,
    name: 'Пицца с ветчиной и грибами',
    products: ['тесто', 'томатный соус', 'ветчина', 'грибы', 'моццарелла'],
    caloric: 350,
    fats: 15,
    protein: 20,
    carbohydrates: 30,
    time: 25,
    image: pizza.src,
  },
  {
    id: 10,
    name: 'Фруктовый салат',
    products: ['яблоки', 'бананы', 'апельсины', 'клубника', 'мед'],
    caloric: 200,
    fats: 1,
    protein: 2,
    carbohydrates: 50,
    time: 15,
    image: fruit.src,
  },

  {
    id: 6,
    name: 'Котлетка с макарошками? Нет, с пюрешкой',
    products: ['картофель', 'курица', 'молоко', 'сливочное масло'],
    caloric: 400,
    fats: 12,
    protein: 25,
    carbohydrates: 40,
    time: 45,
    image: kotletka.src,
  },
];
