class Cell{
 constructor(value="", Next=null){
     this.value = value;
     this.Next = Next;
 }
}

let bounder = new Cell("BOUNDER");

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
     try{
       let afterMe = this.findCell(value);
       if(!afterMe) throw new Error("Have not specify find element!");
       newCell.Next = afterMe.Next;
       afterMe.Next = newCell;
     }
     catch(err){
       console.log(err);
     }
    }

    //add before certain cell
    addBefore(value, newCell){
     try{
       let beforeBeforeMe = this.findCellBefore(value);
       if(!beforeBeforeMe) throw new Error("Have not element!");

       newCell.Next = beforeBeforeMe.Next;
       beforeBeforeMe.Next = newCell;
     }
     catch(err){
       console.log(err);
     }
    }

    //delete elem from list
    deleteElem(value){
      try{
        let beforeDeleted = this.findCellBefore(value);
        if(!beforeDeleted) throw new Error("Have not object for deleting!");
        beforeDeleted.Next = beforeDeleted.Next.Next;
      }
      catch(err){
         console.log(err);
      }
    }

}




