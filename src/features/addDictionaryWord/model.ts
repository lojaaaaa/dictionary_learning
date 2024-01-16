import { createEvent } from 'effector';
import { createStore } from 'effector';
import { sample } from 'effector/effector.mjs';


export const openAddWordDialog = createEvent();
export const closeAddWordDialog = createEvent();
export const submitClicked = createEvent();

export const $isShowedDialog = createStore(false);


sample({
  clock: openAddWordDialog,
  fn: () => true,
  target: $isShowedDialog,
});

sample({
    clock: closeAddWordDialog,
    fn: () => false,
    target: $isShowedDialog,
  });
