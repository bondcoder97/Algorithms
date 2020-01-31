let startedArray = [45,12,5,36,89,90,71,3,15,14,42];


// --------------------------ПУЗЫРЬКОВАЯ СОРТИРОВКА -------------------------------------------------------------------------- 
function bubbleSort(startArray, param = 'under'){

 
   //элемент до которого идет сортировка
   let endElemOfSort = endElemOfSort;
 
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



// window.bubbleSort = bubbleSort;

// console.log(...bubbleSort(startedArray,'under'));

// console.log(...bubbleSort(startedArray,'over'));
//--------------------------------ПУЗЫРЬКОВАЯ СОРТИРОВКА : КОНЕЦ -----------------------------------------------------------

// -------------------------- СОРТИРОВКА  ВЫБОРОМ-------------------------------------------------------------------------- 

//минимум в массиве
function minInArray(arr){
    let min = arr[0];
    let index = 0;

    for(let i=0; i<arr.length; i++){
       if(arr[i]<min){
       min = arr[i];
       index = i;
       }
    }
    return [min,index];

}
//максимум в массиве
function maxInArray(arr){
    let max = arr[0];
    let index = 0;
 
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
        max=arr[i];
        index = i;
        }
    }
    return [max,index];

}

function chooseSort(startArray,param){

    let endElemOfSort = startArray.length-1;  

    switch(param){
        //по возрастанию
        case "over":

        while(endElemOfSort!=1){
           

    let [max,index] = maxInArray(startArray.slice(0,endElemOfSort+1));
                                                   
                startArray[index] = startArray[endElemOfSort];   
                startArray[endElemOfSort] = max;

            endElemOfSort--;
           }
    
        break;


       //по убыванию
        case "under":
      
        while(endElemOfSort!=1){
           

            let [min,index] = minInArray(startArray.slice(0,endElemOfSort+1));
                                                           
                        startArray[index] = startArray[endElemOfSort];   
                        startArray[endElemOfSort] = min;
        
                    endElemOfSort--;
                   }
    

        break;

    }
    
 
    return startArray;

}

//console.log(...chooseSort(startedArray,'under'));
//console.log(...chooseSort(startedArray,'over'));
