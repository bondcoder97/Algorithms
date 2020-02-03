/* Tree-based data structures 

root = i
left_daughter = 2i + 1
right_daughter = 2i + 2

*/

class FullBinaryTree{
    constructor(){
        this._tree = [];
    }

    get tree(){
        return this._tree;
    }

    getElemIndex(elem){
        return this._tree.findIndex((item)=>{
            if(item == elem) return true;
        });
    }

    //get root for current element
    getRoot(elem){
        let index = this.getElemIndex(elem);
        if( !(~index) ) throw new Error("Have not such element!");

        return this.getRootByIndex(index);
    }

    //get root element for index
    getRootByIndex(index){
        let rootIndex = Math.floor((index-1)/2);
        return this._tree[rootIndex];
    }

    getChildren(elem){
         let index = this.getElemIndex(elem);
         if( !(~index) ) throw new Error("Have not such element!");

         let left_daughter =  this._tree[(2 * index) + 1];
         let right_daughter = this._tree[(2 * index) + 2];

         if(!left_daughter) return [];
         if(!right_daughter) return [left_daughter];

         return [left_daughter, right_daughter];
    }

   
}




class Heap extends FullBinaryTree{
     constructor(arr){
         super();
         this._tree = this.makeHeap(arr);
     }

    //make heap from array
    makeHeap(arr){
    for(let i=0; i<arr.length; i++){
        let index = i;
        this.add(arr[index], arr);
     }
   
    return arr;
  }

  add(elem, arr = this._tree){
       let index = this._tree.push(elem)-1;
       while(index != 0){
          let parent_index = parseInt( (index - 1)/2 );
           
          if(arr[index] <= arr[parent_index]) break;
          swap(arr, index, parent_index );

          index = parent_index;
       }
  }

  // remove any element
  // heap contains many other heaps
  remove(elem, arr=this._tree){
    //top element saving

    let remove_index = this.getElemIndex(elem);
    if( !(~remove_index) ) throw new Error("Have not such element!");

    let result = arr[remove_index];
    let count = arr.length;

    arr[remove_index] = arr[count-1];    
    let index = remove_index; //parent
    
    //sink last element from top position of tree 
    while(true){
      //get daughter indexes
      let child_index1 = 2*index+1;
      let child_index2= 2*index+2;
      
      if(child_index1 >= count) child_index1 = index;
      if(child_index2 >= count) child_index2 = index;

      //heap is right
      if( (arr[index] >= arr[child_index1]) &&  (arr[index] >= arr[child_index2]) ) break;
        
      //we need to find greater daughter element
      let swap_child_index;

      if(arr[child_index1] > arr[child_index2])
            swap_child_index = child_index1;
      else
            swap_child_index = child_index2;
      
      swap(arr, swap_child_index, index);
      index = swap_child_index;
     
    }

    arr.length = arr.length-1;
    
    return result;

  }
}

//swap elems of array
function swap(arr, firstIndex, secondIndex){
    let swap_el = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = swap_el;
}
  
