import { createEvent } from "effector";
import { createStore } from "effector/compat";
import { sample } from "effector/effector.umd";


export const defaultData = [
  {
    forms_id: 'simple-forms',
    forms_name: 'Simple Forms',
    items: [
      {
        id: 1,
        name: 'Present Simple',
        description: 'Пример: Я читаю книгу.',
        forms_id: 'simple-forms'
      },
      {
        id: 2,
        name: 'Past Simple',
        description: 'Пример: Я прочитал книгу вчера.',
        forms_id: 'simple-forms'
      },
      {
        id: 3,
        name: 'Future Simple',
        description: 'Пример: Я прочитаю книгу завтра.',
        forms_id: 'simple-forms'
      }
    ]
  },
  {
    forms_id: 'continous-forms',
    forms_name: 'Continous Forms',
    items: [
      {
        id: 4,
        name: 'Present Continuous',
        description: 'Пример: Я читаю книгу прямо сейчас.',
        forms_id: 'continous-forms'
      },
      {
        id: 5,
        name: 'Past Continuous',
        description: 'Пример: Я читал книгу вчера в это время.',
        forms_id: 'continous-forms'
      },
      {
        id: 6,
        name: 'Future Continuous',
        description: 'Пример: Я буду читать книгу завтра в это время.',
        forms_id: 'continous-forms'
      }
    ]
  },
  {
    forms_id: 'perfect-forms',
    forms_name: 'Perfect Forms',
    items: [
      {
        id: 7,
        name: 'Present Perfect',
        description: 'Пример: Я уже прочитал книгу.',
        forms_id: 'perfect-forms'
      },
      {
        id: 8,
        name: 'Past Perfect',
        description: 'Пример: Я прочитал книгу до этого момента.',
        forms_id: 'perfect-forms'
      },
      {
        id: 9,
        name: 'Future Perfect',
        description: 'Пример: Я прочитаю книгу до этого момента.',
        forms_id: 'perfect-forms'
      }
    ]
  },
  {
    forms_id: 'perfect-continuous-forms',
    forms_name: 'Perfect Continuous Forms',
    items: [
      {
        id: 10,
        name: 'Present Perfect Continuous',
        description: 'Пример: Я уже долгое время читаю книгу.',
        forms_id: 'perfect-continuous-forms'
      },
      {
        id: 11,
        name: 'Past Perfect Continuous',
        description: 'Пример: Я долгое время читал книгу вчера.',
        forms_id: 'perfect-continuous-forms'
      },
      {
        id: 12,
        name: 'Future Perfect Continuous',
        description: 'Пример: Я буду долгое время читать книгу завтра.',
        forms_id: 'perfect-continuous-forms'
      }
    ]
  }
];

export const $verbForms = createStore(defaultData);
export const $currentVerbForms = createStore(null)

export const getVerbFormById = createEvent()

sample({
  clock: getVerbFormById,
  source: $verbForms,
  fn: (forms, params) => forms.find(el => el.forms_id == params.forms_id)?.items.find(el => el.id == params.id),
  target: $currentVerbForms, 
})