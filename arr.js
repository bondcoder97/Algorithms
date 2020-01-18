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



//TRIANGLE ARRAY
//two-dimensional
class TriangleArray{
    constructor(){
       this._arr = [];
    }


    _getIndex(row, column){

      if(column > row) throw new Error("Wrong indexes!");
      // return  ((row - 1)** 2 + (row-1))/2 + column;
      const index = Math.round(row*(row+1)/2)+column; 
      return index;
    }

    addElem(elem ,row, column){
       const index = this._getIndex(row, column);
       this._arr[index] = elem; 
    }

    getElem(row, column){
       return this._arr[this._getIndex(row, column)] 
    }

    deleteElem(row, column){
       this._arr[this._getIndex(row, column)] = null;
    }

    //number of rows in array
    rowsInArray(){
      let rows = 0;
      let numberOfElems = this._arr.length;
      //max elems number in i-rows triangle array
      let maxElemsNumber = 1;
      let i = 1;

      while(true){
        
         maxElemsNumber =  (  ((i - 1)**2) + (i-1) )/2;

         if(maxElemsNumber >= numberOfElems){ 
            return rows;
         }

         rows++;
         i++;
         
      }     
    }
    


    showArray(){
      const numberOfRows = this.rowsInArray();
      let result = "";
      //rows
      for(let i=0; i<numberOfRows; i++){
          //columns
          for(let j=0; j<=i; j++){
            let currentElem = this.getElem(i, j);
            result += (!currentElem ? " none ": ` ${currentElem} `);
          }
          result+="\n";
      }

      return result;
    }

}

