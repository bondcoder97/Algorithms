class Cell{
 constructor(value="", Next=null){
     this.value = value;
     this.Next = Next;
 }
}

class UnitrendList{
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

    getTop(){
      return this.top;
    }

}


//cell for two trend list
class TwoTrendListCell extends Cell{
  constructor(value="", Next=null, Previous=null){
      super(value, Next);
      this.Previous = Previous;
  }
}

class TwoTrendList extends UnitrendList{
  constructor(options={}){
    super();
    //bounders
    let bottomLimiter = new TwoTrendListCell("BOTTOM LIMITER");
    this.top = options.top || new TwoTrendListCell("TOP LIMITER", bottomLimiter);
    bottomLimiter.Previous = this.top;
    this.bottom = bottomLimiter;
  }
  
  //METHOD OVERRIDING -------------------------------------------------------------------------------------------------

  addToBegin(cell, top = this.top){
      cell.Previous = top;
      cell.Next = top.Next;
      top.Next.Previous = cell;
      top.Next = cell;
  }

  addToEnd(cell, bottom = this.bottom){
      cell.Previous = bottom.Previous;
      cell.Next = bottom;
      bottom.Previous.Next = cell; 
      bottom.Previous = cell;
  }

  addAfter(value, newCell){
    try{
      let afterMe = this.findCell(value);
      if(!afterMe) throw new Error("Can not find needed element!");
      newCell.Previous = afterMe;
      newCell.Next = afterMe.Next;
      afterMe.Next.Previous = newCell;
      afterMe.Next = newCell;

    }
    catch(err){
      console.log(err);
    }
  }

  addBefore(value, newCell){
    try{
       let beforeMe = this.findCell(value);
       if(!beforeMe) throw new Error("Can not find needed element!");
       newCell.Next = beforeMe;
       newCell.Previous = beforeMe.Previous;
       beforeMe.Previous.Next = newCell;
       beforeMe.Previous = newCell;
    }

    catch(err){
      console.log(err);
    }

  }

  deleteElem(value){
    try{
      let deletedElem = this.findCell(value);
      if(!deletedElem) throw new Error("Can not find deleted element!");
      deletedElem.Previous.Next = deletedElem.Next;
      deletedElem.Next.Previous = deletedElem.Previous;
    
    }
    catch(err){
       console.log(err);
    }
  }
  //METHOD OVERRIDING : END ------------------------------------------------------------------------------------------

}

class SortedList extends TwoTrendList{
  constructor(options={}){
    super(options);
      //bounders
      let bottomBounder = new TwoTrendListCell("~");
      this.top = options.top || new TwoTrendListCell("aaaaaaaaaaaa", bottomBounder); //top bounder
      bottomBounder.Previous = this.top;
      this.bottom = bottomBounder;
  }

  //sorted insert after element
  cellInsert(newCell, top = this.top){
      while(newCell.value < top.value){
        top = top.Next;
      }

      newCell.Previous = top;
      newCell.Next = top.Next;
      top.Next.Previous = newCell;
      top.Next = newCell;
      
      
      
  }

  
}
//COPY UNITREND LIST
function CopyList(oldLimiter){
  //limiter of new list
    let newLimiter = new Cell("LIMITER");
    let lastAdded = newLimiter
    //skip limiter in the old list
    let oldCell = oldLimiter.Next;

    while(oldCell != null){
     lastAdded.Next = new Cell();
     lastAdded = lastAdded.Next;
     lastAdded.value = oldCell.value;
      oldCell = oldCell.Next;
    }

    lastAdded.Next = null;
    return newLimiter;
}

//insertion sort of list
function InsertionSort(input){
    let limiter = new Cell();
    limiter.Next = null; 
    input = input.Next;

    while(input != null){
         let next_cell = input;
         input = input.Next;
         //where you need to insert 
         let afterMe = limiter;
         //moment when next cell is more
         while(afterMe.Next != null && afterMe.Next.value < next_cell.value){
           afterMe = afterMe.Next;
         }
      //insert NEXT_CELL after AFTER_ME
       next_cell.Next = afterMe.Next;
       afterMe.Next = next_cell;
    }


  return limiter;
}




function SelectionSort(input){
        let limiter = new Cell("LIMITER");
        limiter.Next = null; //cоздали ограничитель
        while(input.Next != null){ //пока текущий input не будет ссылаться на null
             let bestAfterMe = input; 
             let bestValue = bestAfterMe.Next.value; //берем лучшее значение как значение следующего 
                                                     //после ограничителя элемента
             let afterMe = input.Next;
             while(afterMe.Next != null){
                  if(afterMe.Next.value > bestValue){
                    bestAfterMe = afterMe;
                    bestValue = afterMe.Next.value;
                  }
                  afterMe = afterMe.Next;
             }
             let bestCell = bestAfterMe.Next;
             bestAfterMe.Next = bestCell.Next;

             bestCell.Next = limiter.Next;
             limiter.Next = bestCell;
        }
        return limiter;
}



//имеет ли список циклы
function hasLoopMarking(sentinel){
  let hasLoop = false;
  let cell = sentinel;
  while( cell.Next != null){
     if(cell.Next.Visited){
       cell.Next = null; //разрываем цикл
       hasLoop = true;
       break;
     }

     cell = cell.Next;
     cell.Visited = true; //пометили как пройденную
  }


  cell = sentinel;
  while(cell.Next != null){
    cell.Visited = false;   
    cell = cell.Next;
  }

  return hasLoop;

}

//трассировка
//по списке  проходит один объект, а затем в его поисках другой
function hasLoopRetracing(sentinel){
  let cell = sentinel;
  while(cell.Next != null){
     let tracer = sentinel;
     //пока не найдем текущую точку останова списка
     while(tracer != cell){
         //если следующий элемент списка совпал со следущим элементом трейсера 
         //значит есть цикл, поскольку сам элемент списка еще не найден
         if(tracer.Next == cell.Next){
             //это начало цикла - рвем связь
             cell.Next = null;
            
            return true;
         }

         tracer = tracer.Next;
     }

     cell = cell.Next;
  }

  return false;

}


//реверсируем цикл и возвращаем новое начало списка
function ReverseList(sentinel){
   let prev_cell = null;
   let curr_cell = sentinel;

   while(curr_cell != null){
     //реверсируем список
      let next_cell = curr_cell.Next;
      curr_cell.Next = prev_cell;

      prev_cell = curr_cell;
      curr_cell = next_cell;
   }

   return prev_cell;
}


/* Алгоритм позволяет определить наличие цикла, но не устранить его */

function hasLoopReversing(sentinel){
  //если пустой
   if(sentinel.Next == null) return false;

   //проходим по списку реверсируя ссылки
   let new_centinel = ReverseList(sentinel);

   //вернем циклу обычное положение
   ReverseList(new_centinel);

   //если реверсивный алгоритм вернул тот же элемент, значит есть цикл
   if(new_centinel == sentinel) return true;
   return false;

}