import {AddDictionaryWordDialog} from './AddDictionaryWordDialog';
import { reflect } from "@effector/reflect"
import { openAddWordDialog } from '../model';
import style from './AddDictionaryWordDialog.module.scss'

const AddDictionaryWordButtonView = () => {

  return (
    <>
      <AddDictionaryWordDialog />
      <button className={style.button} onClick={() => openAddWordDialog()}>Добавить слово</button>
    </>
  )
}

export const AddDictionaryWordButton = reflect({
  view: AddDictionaryWordButtonView,
  bind: {
    onclick: openAddWordDialog
  },
});


