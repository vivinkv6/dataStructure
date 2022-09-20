
//print function

const print=(ar,n)=>{
    for(let i=0;i<n;i++)
    {
        console.log(ar[i]);
    }
}


//quickSort function

const quickSort=(arr)=>{

    if(arr.length<2)
    {
        return arr;
    }
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];

    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]<pivot)
        {
            left.push(arr[i]);
        }
        else
        {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}



const ar=[5,4,3,2,1];

console.log(quickSort(ar));


//Result: [1,2,3,4,5]
//Big O notation: nlogn(best and average case) ,O(n^2)(worst case)
