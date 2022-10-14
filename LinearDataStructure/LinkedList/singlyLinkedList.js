
// LinkedList  ->  insert a node at beginning

//create class Node

class Node{
    constructor(value)
    {
        this.data=value;  //store data
        this.link=null;  //store address of next node
    }
}


//create class Linkedlist

class LinkedList{
    constructor()
    {
        this.head=null;//point to the address of first node
        this.size=0; //store the size of node
    }

   //insert node at beginning
   begin(value){

    let node=new Node();
    node.data=value; // store value to the data object
    node.link=null; //set link object to null

    if(this.head === null) // check if head object point to null or not
    {
        this.head=node;    // if the condition is true,set head object point to new node 
    }
    else{
        node.link=this.head;// if the condition is false,set link object point to head object
        this.head=node; // set head object point to node because head object stores the address of first node
    }
    this.size++; // increment size of node+1

   }

   //check if the list is empty or not

   isEmpty()
   {
    return this.size === 0; 
   }

   //print the list
   print()
   {
    let temp=this.head // create  temp variable for traversing the list
    let list="";
    if(this.head === null)
    {
        console.log("No such list");
    }
    else{
        while(temp) // loop the statements till the temp node is equal to null 
        {
            list+=`${temp.data} `;
            temp=temp.link;
        }
        console.log(list); //print the list
    }
   }



}

let node = new LinkedList();

console.log(node.isEmpty());// check if the list empty

node.print(); //print the list

node.begin(5); //insert node at beginning
node.begin(10);
node.begin(15);
node.begin(20);

node.print();
console.log(node.isEmpty());



//Output

//true
//No such list
//20 15 10 5
//false


//Big O notation  ->  0(1) (insert node at beginning)
