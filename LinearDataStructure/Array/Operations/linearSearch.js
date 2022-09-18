
//LinearSearch function

const linearSearch=(arr,target)=>{
    for(let i=0;i<arr.length;i++)
    {
    
        if(arr[i]==target)
        {
            return i;
           
        }
    
    }
    return -1;
}


let arr=[1,2,3,4,5,6,7,8,9,10];   //array
let target=6;      //searching value
let result=linearSearch(arr,target)

if(result == -1)                                //Result: Position: 5
                                                //Big O notation: O(n)
{
    console.log("Value Not Found");
}
else{
    console.log(`Position: ${result}`);
}

