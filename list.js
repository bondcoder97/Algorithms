class Cell{
 constructor(value="", Next=null){
     this.value = value;
     this.Next = Next;
 }
}

let bounder = new Cell("BOUNDER"); //ограничитель

class UnitrendList{
    constructor(options={}){
        this.top = options.top || new Cell("BOUNDER");
    }

   //iterate all list    
   iterate(top = this.top){
       while(top!=null){
           console.log(top.value);
           top = top.Next;
       }
   }

   findCell(value, top = this.top){
         while(top!=null){
             if(top.value == value) return top;
             top = top.Next;
         }

         return null;
   }

   

   //find cell before some cell in the list
   findCellBefore(value,top=this.top){

       //while not end of list
       while(top.Next!=null){
           if(top.Next.value == value)
             return top;
          top = top.Next;
            
       }
       //так и не найдено
       return null;
   }

   //add cell to begin of list
   addToBegin(cell, top = this.top){
    cell.Next = top.Next;
    top.Next = cell;
   }

   //add cell to the end of list
   addToEnd(cell, top = this.top){
       while(top.Next != null){
         top = top.Next;
       }

       cell.Next = null;
       top.Next = cell;

    }
    
    //add cell after certain cell
    addAfter(value, newCell){
       let afterMe = this.findCell(value);
       newCell.Next = afterMe.Next;
       afterMe.Next = newCell;
    }

    //add before certain cell
    addBefore(value, newCell){
       let beforeBeforeMe = this.findCellBefore(value);
       if(!beforeBeforeMe) return;

       newCell.Next = beforeBeforeMe.Next;
       beforeBeforeMe.Next = newCell;
       
    }

}






