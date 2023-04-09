//Problem: Climbing Staircase

//create climbStaircase() function

const climbStaircase=(n)=>{
	
	let noOfWays=[1,2];
	
	for(let i=2;i<=n;i++){
		noOfWays[i]=noOfWays[i-1]+noOfWays[i-2];
	}
	
	return noOfWays[n-1];
	
	
}



//call climbStaircase()

console.log(climbStaircase(3)); //3
console.log(climbStaircase(4)); //5
console.log(climbStaircase(5)); //8

//Time Complexity -> O(n)


