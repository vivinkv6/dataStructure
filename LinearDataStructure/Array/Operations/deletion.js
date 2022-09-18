let arr=[1,2,3,4,5,6,7,8,9,10];       //array


//arr[0]=1,arr[1]=2,arr[2]=3,arr[3]=4,arr[4]=5,arr[5]=6,arr[6]=7,arr[7]=8,arr[8]=9,arr[9]=10


//deletion at end
arr.pop(); //10
console.log(arr);             //Result: [1,2,3,4,5,6,7,8,9]
                              //Big O notation: O(1)




//deletion at a particular index
let pos=5; 
n=arr.length;
for(let i=pos;i<n;i++)
{
    arr[i]=arr[i+1];
   
}
n=n-1;                               //reduce array length by one

 
//display result

for(let i=0;i<n;i++)
{
    console.log(arr[i]);             //Result: [1,2,3,4,5,7,8,9]
                                     //Big O notation: O(n)
}
            



//deletion at first index

arr.shift();
n=n-1;                             //reduce array length by one

//display result

for(let i=0;i<n;i++)
{
    console.log(arr[i]);            //Result: [2,3,4,5,7,8,9]
                                    //Big O notation: O(n)
}
