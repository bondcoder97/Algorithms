/* Tree-based data structures 

root = i
left_daughter = 2i + 1
right_daughter = 2i + 2

*/

class FullBinaryTree{
    constructor(){
        this._tree = [];
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



let binaryTree = new FullBinaryTree();
binaryTree._tree.push(1,5,6,7,8,9,77, 90);

console.log(binaryTree.getChildren(7) );
// console.log(binaryTree.getRoot(77));
