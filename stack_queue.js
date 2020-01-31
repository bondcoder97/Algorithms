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


function ReverseArray(arr){
    const stack = new ArrayStack();
    for(let i=0; i<arr.length; i++)
        stack.push(arr[i]);
    
    for(let j=0; j<arr.length; j++)
        arr[j] = stack.pop(arr[j]);
    
    return arr;
}



//cell for two trend list
class TwoTrendListCell extends Cell{
    constructor(value="", Next=null, Previous=null){
        super(value, Next);
        this.Previous = Previous;
    }
  }


class TwoTrendList{
    constructor(options={}){
      //bounders
      let bottomLimiter = new TwoTrendListCell("BOTTOM LIMITER");
      this.top = options.top || new TwoTrendListCell("TOP LIMITER", bottomLimiter);
      bottomLimiter.Previous = this.top;
      this.bottom = bottomLimiter;
    }

    //iterate all list    
  iterate(top = this.top){
    while(top!=null){
        console.log(top.value);
        top = top.Next;
    }
  }
 
}


class ListQueue extends TwoTrendList{
    constructor(){
        super();
    }

    enqueue(new_value, top_sentinel=this.top){
       //new cell creating
       const new_cell = new TwoTrendListCell();
       new_cell.value = new_value;

       //add cell to the list
       new_cell.Next = top_sentinel.Next;
       top_sentinel.Next = new_cell;
       new_cell.Previous = top_sentinel;
       new_cell.Next.Previous = new_cell; //back connection
    }
    dequeue(bottom_sentinel=this.bottom){
        
        if(bottom_sentinel.Previous === this.top) throw new Error("Queue is empty!");

        //last cell value
        const result = bottom_sentinel.Previous.value;
        bottom_sentinel.Previous = bottom_sentinel.Previous.Previous;
        bottom_sentinel.Previous.Next = bottom_sentinel;

        return result;
    }
}


class ArrayQueue{
    constructor(){
        this._queue = [];
    }
    get queue(){
        return this._queue;
    }
    enqueue(item){
        this._queue.push(item)
    }
    dequeue(){
        return this._queue.shift();
    }
}



