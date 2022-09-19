
//print function

const print=(arr,n)=>{
    for(let i=0;i<n;i++)
    {
        console.log(arr[i]);
    }
}

// selectionSort

const selectionSort=(ar,n)=>{
    let min;
    for(let i=0;i<n-1;i++)
    {
        min=i;
        for(let j=i+1;j<n;j++)
        {
            if(ar[j]<ar[min])
            {
                min=j;
            }
        }
        let temp=ar[i];
        ar[i]=ar[min];
        ar[min]=temp;
    }
    print(ar,n);
}

const arr=[5,4,3,2,1];                  
let n=arr.length;

selectionSort(arr,n);                                     //Result: 1 2 3 4 5 
                                                         //Big O notation: O(n^2)
