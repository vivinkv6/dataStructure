//Problem: Factorial of n 

//create fact() function

const fact=(n)=>{
	if(n==1){
		return n
	}
	return n*fact(n-1);
}

console.log(fact(3))   //6
console.log(fact(5))  //120 
