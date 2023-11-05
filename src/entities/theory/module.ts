import { createEvent } from "effector";
import { createStore } from "effector/compat";
import { sample } from "effector/effector.umd";
import { verbFormsData } from "src/shared/config";




export const $verbForms = createStore(verbFormsData);
export const $currentVerbForms = createStore(null)

export const getVerbFormById = createEvent()

sample({
  clock: getVerbFormById,
  source: $verbForms,
  fn: (forms, params) => forms.find(el => el.forms_id == params.forms_id)?.items.find(el => el.id == params.id),
  target: $currentVerbForms, 
})