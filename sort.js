let startedArray = [45,12,5,36,89,90,71,3,15,14,42];


// --------------------------ПУЗЫРЬКОВАЯ СОРТИРОВКА -------------------------------------------------------------------------- 
function bubbleSort(startArray, param = 'under'){
   let resultArray = [];
   //элемент до которого идет сортировка
   let endElemOfSort = startArray.length-1;
 
   //пока не пройдемся по всем элементам массива
  while(endElemOfSort!=1){
   
   for(let i=0; ; i++){
     //последний проход   
    if(i+1 == endElemOfSort)
       {
    
        moveMin(startArray,i,i+1,param)
        break;

       }
       moveMin(startArray,i,i+1,param);
   }
   
   endElemOfSort--;
   console.log("Цикл");
   
}
return startArray;
     
}


//смещаем минимальное к концу массива
function moveMin(array, currentElem, nextElem,param = 'under'){
   
   //вспомогательная переменная при обмене переменных значениями
   let helpVar; 
    switch(param){
        //возрастание
        case 'under' :
        if(array[currentElem]>array[nextElem]){
            helpVar = array[nextElem];
            array[nextElem] = array[currentElem];
            array[currentElem] = helpVar;
             }

        break;
        //убывание
        case 'over' :
        if(array[currentElem]<array[nextElem]){
            helpVar = array[nextElem];
            array[nextElem] = array[currentElem];
            array[currentElem] = helpVar;
             }

        break;

    }     

  
}



window.bubbleSort = bubbleSort;

//с аргументом
console.log(...bubbleSort(startedArray,'under'));

console.log(...bubbleSort(startedArray,'over'));
//--------------------------------ПУЗЫРЬКОВАЯ СОРТИРОВКА : КОНЕЦ -----------------------------------------------------------

// -------------------------- СОРТИРОВКА  ВЫБОРОМ-------------------------------------------------------------------------- 

function chooseSort(startArray){

}


//--------------------------------СОРТИРОВКА ВЫБОРОМ: КОНЕЦ -----------------------------------------------------------