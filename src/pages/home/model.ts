import { createEvent} from 'effector';
import { createStore } from 'effector';
import { drillsData } from 'src/shared/config';
import { sample } from 'effector/effector.mjs';

export const routeHomeOpen = createEvent();

export const $drillsData = createStore(drillsData);
export const $currentDrill = createStore(null)

export const getDrillById = createEvent()

sample({
  clock: getDrillById,
  source:  $drillsData,
  fn: (drills, params) => drills.find(el => el.drill_id == params.id)?.data,
  target: $currentDrill, 
})