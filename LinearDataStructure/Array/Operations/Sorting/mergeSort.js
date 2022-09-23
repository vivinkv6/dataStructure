


//mergesort function

const mergeSort=(arr)=>{
    if(arr.length<2)
    {
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
}

//merge function

const merge=(left,right)=>{
    let sortArr=[];

    while(left.length && right.length)
    {
        if(left[0]<right[0])
        {
            sortArr.push(left.shift());
        }
        else{
            sortArr.push(right.shift());
        }
    }
    return [...sortArr,...left,...right];
}



// array

const arr=[5,4,3,2,1];

console.log(mergeSort(arr));
