//INSERTION SORT ====================================================================================================

function insertionSort(arr){
    //iterate sorting array
    for(let i=0; i<arr.length; i++){ //extend range for inside cycle (add one element for consider on eact iteration)     
      for(let j=0; j<i; j++){
            //if arr
            if(arr[j]>arr[i]){
                swap(arr, j, i);
            }
        }
    }
  
    return arr;
  }
  
//INSERTION SORT:END ===============================================================================================
//SELECTION SORT ======================================================================================================
//select minimum and insert in last position of sorted area
function selectionSort(arr){
   for(let i=0; i<arr.length; i++){
       let smallest_index = arr.length-1; 
       let smallest_elem = arr[smallest_index];
       
       for(let j=arr.length-1; j>=i; j--) 
       {
           if(arr[j] < smallest_elem){
             smallest_index = j;
             smallest_elem = arr[smallest_index];
           }
       }

       swap(arr, smallest_index, i); 
   }

   return arr;
}

//SELECTION SORT: END =================================================================================================
//BUBBLE SORT =========================================================================================================
function bubbleSort(arr){
  let not_sorted  = true;

  while(not_sorted){
    not_sorted = false;
    for(let i=0; i<arr.length; i++){
        //if wrong order
        if(arr[i] < arr[i-1]){
            swap(arr, i, i-1);
            not_sorted = true;
        }

    }
  }

  return arr;
}
//BUBBLE SORT:END =====================================================================================================

//swap elems of array
function swap(arr, firstIndex, secondIndex){
    let swap_el = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = swap_el;
}
  

let sort_arr = [81,12,15,296, 93,42, 3];
console.log(bubbleSort(sort_arr));