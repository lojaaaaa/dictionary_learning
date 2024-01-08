import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { reflect } from "@effector/reflect"
import { useForm } from 'react-hook-form';
import style from './AddDictionaryWordDialog.module.scss'
import { ErrorLabel } from 'src/shared/ui/error/ErrorLabel';
import { $isShowedDialog, closeAddWordDialog } from '../model';
import { IDictionary } from 'src/entities/dictionary/model';
import { dictionaryEntity } from 'src/entities/dictionary';

interface AddDictionaryWordDialogProps {
  open: boolean;
  closeDialog: () => void;
  addDictionaryWord: (dictionaryWord: IDictionary) => void;
  addToTranslate: (dictionaryWord: IDictionary) => void;
}

const AddDictionaryWordDialogView = ({open, closeDialog, addDictionaryWord, addToTranslate}: AddDictionaryWordDialogProps) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({
    defaultValues: {
      originalText: '',
      transcription: '',
      translatedText: ''
    },
  });

  const handleForm = (data) =>{
    if(data.translatedText){
      addDictionaryWord(data);
    }
    else{
      addToTranslate(data);
    }
    closeDialog();
    reset();
  }


  const originalTextError = errors.originalText ? 'Напишите слово' : '';

  return (
      <Dialog onClose={() => closeDialog()} open={open}>
        <div className={style.dialog}>
          <form className={style.form} onSubmit={handleSubmit(handleForm)}>
            <h2 className={style.title}>Добавить новое слово</h2>
            <div className={style.inputs}>
              <div>
                <input 
                  type="text" 
                  placeholder="Слово"
                  {...register('originalText', { required: true })}
                />
                {originalTextError ? <ErrorLabel>{originalTextError}</ErrorLabel> : null}
              </div>
              <div>
                <input
                  type="text" 
                  placeholder="Транскрипция"
                  {...register('transcription', { required: false })}
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Перевод"
                  {...register('translatedText', { required: false })}
                />
              </div>
            </div>
            <div className='flex justify-end gap-4'>
              <button onClick={() => closeDialog()}>Отменить</button>
              <button>Добавить</button>
            </div>
          </form>
        </div>

      </Dialog>
  )
}




export const AddDictionaryWordDialog = reflect({
  view: AddDictionaryWordDialogView,
  bind: {
    open: $isShowedDialog,
    closeDialog: closeAddWordDialog,
    addDictionaryWord: dictionaryEntity.addDictionaryWord,
    addToTranslate: dictionaryEntity.addToTranslate
  },
});
