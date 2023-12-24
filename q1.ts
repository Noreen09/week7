//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array

   function func (anArray: number[], index: number, value: number){
       anArray.splice(index, 0, value);
       return anArray;
   }

   let iArray = [1, 2, 3, 4, 5];
   let modArray = func( iArray , 2, 100);

   console.log(modArray);

  