
//print function
const print=(arr,n)=>{

    for(let i=0;i<n;i++)
    {
        console.log(arr[i]);
    }
}

//insertionSort
const insertionSort=(ar,n)=>{
    for(let i=1;i<n;i++)
    {
        let j=i-1;
        let key=ar[i];

        while(j>=0 && ar[j]>key)
        {
            ar[j+1]=ar[j];
            j--;
        }
        ar[j+1]=key;
    }
    print(ar,n);
}

const ar=[5,4,3,2,1];
let n=ar.length;

insertionSort(ar,n);



//Result: 1 2 3 4 5
//Big O notation: O(n^2)
