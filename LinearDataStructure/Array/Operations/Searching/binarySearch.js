

//binarySearch function

const binarySearch=(ar,l,r,t)=>{   //arr->array,l->Left,r->Right,t->target

    let mid=0;
   while(r>=l)
   {
    mid=Math.floor((l+r)/2); //Remove floating point values

    if(ar[mid] == t)
    {
        return mid;
    }
    else if(ar[mid]>t)
    {
        r=mid-1;
    }
    else{
        l=mid+1;
    }
   }
return -1;
}


const arr=[1,2,3,4,5,6,7,8,9,10];  //array must be sorted while using binarySearch method
let target=7;
let left=0;
let right=arr.length-1;

let res=binarySearch(arr,left,right,target);

if(res == -1)
{                                            //Result: Position: 6
                                            //Big O notation: O(logn) 
                                            //logn->Reduce size by half
    console.log("Value not found");
}
else{
    console.log(`Position: ${res}`);
}