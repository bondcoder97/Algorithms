/*Implementation of array data structure  */


function findMedian(arr){
    for(let i=0; i < arr.length; i++){
        let num_larger = 0;
        let num_smaller = 0;

        for(let j=0; j<arr.length-1; j++){
           if(arr[j] < arr[i]) num_smaller++;
           if(arr[j] > arr[i]) num_larger++;
        }

        if(num_larger == num_smaller) return arr[i];

    }
}


//insert item in any place of array
function insertItem(arr, value, position){
   for(let i=arr.length-1; position+1 ; i--){
       arr[i] = arr[i-1];
   }

   arr[position] = value;
}


//get size (number of elements) of N-dimension array
function getArraySize(lower_bounds_list, upper_bounds_list){
  let total_size = 1;
  for(let i=0; i<lower_bounds_list.length; i++){
     total_size += total_size * (upper_bounds_list[i]-lower_bounds_list[i]);
  }

  return total_size;
}

