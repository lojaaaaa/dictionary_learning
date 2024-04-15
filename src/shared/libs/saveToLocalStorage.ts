
export const saveToLocalStorage  = (items: any, itemsName: string) =>{
  localStorage.setItem(itemsName, JSON.stringify(items))
  return items
};
