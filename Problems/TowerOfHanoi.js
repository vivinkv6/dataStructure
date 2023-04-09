//Problem: Tower of Hanoi Problem

//create towerOfHanoi function

const towerOfHanoi=(n,fromRod,toRod,usingRod)=>{
	
	if(n==1){
		console.log(`Disk 1 from ${fromRod} to ${toRod}`);
		return;
	}
	
	towerOfHanoi(n-1,fromRod,usingRod,toRod);
	console.log(`Disk ${n} from ${fromRod} to ${toRod}`);
	towerOfHanoi(n-1,usingRod,toRod,fromRod);
	
	
}

//call towerOfHanoi function
towerOfHanoi(3,'A','C','B');

/*
output

Disk 1 from A to C
Disk 2 from A to B
Disk 1 from C to B
Disk 3 from A to C
Disk 1 from B to A
Disk 2 from B to C
Disk 1 from A to C

*/

//Time complexity -> O(2^n)


