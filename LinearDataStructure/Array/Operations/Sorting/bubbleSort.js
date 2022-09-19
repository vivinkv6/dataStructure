
//print function
const print=(arr,n)=>{
    for(let i=0;i<n;i++)
    {
        console.log(arr[i]);
    }
}

//bubblesort function
const bubbleSort=(arr,n)=>{

  for(let i=0;i<n-1;i++)
  {
    for(let j=0;j<n-1-i;j++)
    {
        if(arr[j]>arr[j+1])
        {

            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;

        }
    }
  }
  print(arr,n);

}



const arr=[5,4,3,2,1]; //array
let n=arr.length;//array length                                                     
bubbleSort(arr,n);                      
                                                 //Result: 1 2 3 4 5 
                                                //Big O notation: O(n^2)