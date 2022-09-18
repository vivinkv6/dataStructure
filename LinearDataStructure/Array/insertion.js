
const arr=[1,2,3,4,5];     //Array 




//insertion at end
arr.push(6);
console.log(arr);            //Result: [1,2,3,4,5,6]
                             //Big O notation O(1) 





//insertion at a particular index
let pos=3;
for(let i=(arr.length)-1;i>=pos;i--)
{
    arr[i+1]=arr[i];
}
arr[pos]=7;

console.log(arr);              //Result: [1,2,3,7,4,5,6]
                               //Big O notation O(n)





//insertion at first Index
arr.unshift(8);
console.log(arr);              //Result: [8,1,2,3,7,4,5,6]
                               //Big O notation O(n)





