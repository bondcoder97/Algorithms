/* 
 Operations in the stack and queue
*/

class Cell{
    constructor(value="", Next=null){
        this.value = value;
        this.Next = Next;
    }
   }


class ListStack{
    constructor(options={}){
        this.top = options.top || new Cell("LIMITER");
    }

   //iterate all list    
   iterate(top = this.top){
       while(top!=null){
           console.log(top.value);
           top = top.Next;
       }
   }
    
   push(new_value, sentinel=this.top){
       //new cell with new value
       const cell = new Cell();
       cell.value = new_value;

       //add cell to the list
       cell.Next = sentinel.Next;
       sentinel.Next = cell;
   }

   pop(sentinel=this.top){
     if(sentinel.Next == null) throw new Error("Empty stack!");

     //top cell value
     const result = sentinel.Next.value;

     //delete cell from list
     sentinel.Next = sentinel.Next.Next;

     return result;

   }
   
}


class ArrayStack{
    constructor(){
        this._stack= [];
    }
    
    push(new_value, stack_values = this._stack){

        stack_values.push(new_value);

    }

    pop(){
        return this._stack.pop();
    }

    get stack(){
        return this._stack;
    }
}





