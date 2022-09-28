//create a class 'Queue'

class Queue{
    constructor(){
        this.data={};
        this.rear=0;
        this.front=0;
    }

    //add an element using enqueue method

    enqueue(element){

        this.data[this.rear]=element;
        this.rear++;

    }

    //delete an element using dequeue method

    dequeue(){
       
        delete this.data[this.front];
        this.front++;
        
    }

    //check if it is empty or not using isEmpty method

    isEmpty(){
        return this.front-this.rear === 0;
    }

    top(){
        return this.data[this.front];
    }

    //display all the element using print method

    print(){
        console.log(this.data);
    }
}


const queue=new Queue();
console.log(queue.isEmpty());   //true
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.isEmpty()); //false
queue.print();               // {0:5, 1:10, 2:15, 3:20, 4:30}
console.log(queue.top());   // 5
queue.dequeue();         
queue.print();            // {1:10, 2:15, 3:20, 4:30}
console.log(queue.top()); //10


