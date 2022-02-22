import { IExpressTestQuestion } from '../redux/slices/expressTestSlice'

export const EXPRESS_TEST_QUESTIONS: IExpressTestQuestion[] = [
  {
    question: 'Дата регистрации',
    answers: [
      {
        text: 'Менее 2 лет',
        result: 'Негатив',
      },
      {
        text: 'Более 2 лет',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Информация в СМИ',
    answers: [
      {
        text: 'Да',
        result: 'Позитив',
      },
      {
        text: 'Нет',
        result: 'Негатив',
      },
    ],
  },
  {
    question: 'Разноплановый ОКВЭД',
    answers: [
      {
        text: 'Да',
        result: 'Негатив',
      },
      {
        text: 'Нет',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Одновременная смена учредителей и ГД',
    answers: [
      {
        text: 'Да',
        result: 'Негатив',
      },
      {
        text: 'Нет',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Дочерние/головные организации',
    answers: [
      {
        text: 'Да',
        result: 'Позитив',
      },
      {
        text: 'Нет',
        result: 'Нейтрально',
      },
    ],
  },
  {
    question: 'Качество контрагентов',
    answers: [
      {
        text: 'Плохое',
        result: 'Негатив',
      },
      {
        text: 'Хорошее',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Включение в различные ЧС',
    answers: [
      {
        text: 'Да',
        result: 'Негатив',
      },
      {
        text: 'Нет',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Массовый учредитель',
    answers: [
      {
        text: 'Да',
        result: 'Негатив',
      },
      {
        text: 'Нет',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Массовый адрес регистрации',
    answers: [
      {
        text: 'Да',
        result: 'Негатив',
      },
      {
        text: 'Нет',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Вхождение в различные негативные списки',
    answers: [
      {
        text: 'Да',
        result: 'Негатив',
      },
      {
        text: 'Нет',
        result: 'Позитив',
      },
    ],
  },
  {
    question: 'Вхождение в различные позитивные списки',
    answers: [
      {
        text: 'Да',
        result: 'Негатив',
      },
      {
        text: 'Нет',
        result: 'Нейтрально',
      },
    ],
  },
  {
    question: 'Наличие лицензий',
    answers: [
      {
        text: 'Да',
        result: 'Позитив',
      },
      {
        text: 'Нет',
        result: 'Нейтрально',
      },
    ],
  },
]
