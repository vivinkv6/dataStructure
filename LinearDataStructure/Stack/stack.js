//stack implementation

//create a class name 'Stack'

class Stack{
    constructor()
    {
        this.data=[];
    }

    //insert an element at last index using push method

    push(value){
        this.data.push(value);
    }

    //delete an element at last index using pop method

    pop()
    {
        return this.data.pop();
    }

    //display top value of the stack

    top()
    {
        return this.data[this.data.length-1];
    }

    //check if the array is empty or not using isEmpty method

    isEmpty()
    {
        return this.data.length === 0;
    }

    //display array of elements using display method

    display()
    {
        return this.data;
    }
}


let stack = new Stack();

//add values
stack.push(1);
stack.push(3);
stack.push(8);
stack.push(5);
//check if it is empty or not
console.log(stack.isEmpty());
//remove last element
stack.pop();
//top of the stack
console.log(stack.top());
//display the result
console.log(stack.display());



//Result: false  8   [1,3,8]
//Big O notation: Insertion -> O(1)  Deletion -> O(1) 