//Problem: Cartesian Product

//create cartesianProduct() function

const cartesianProduct=(arr1,arr2)=>{
	
	let result=[];
	
	for(let i=0;i<arr1.length;i++){
		for(let j=0;j<arr2.length;j++){
			result.push([arr1[i],arr2[j]]);
		}
	}
	return result;
	
}

const arr1=[1,2];
const arr2=[1,2,3];

//call cartesianProduct()
console.log(cartesianProduct(arr1,arr2));

/*
output


[ [1,1],[1,2],[1,3],[2,1],[2,2],[2,3] ]

Time Complexity -> O(m x n)

*/


