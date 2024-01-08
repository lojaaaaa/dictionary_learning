
export const saveToLocalStorage  = (items: any, itemsName: string) =>{
  localStorage.setItem(itemsName, JSON.stringify(items))
  return items
};

export const listenTranslate = (text: string) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
};
