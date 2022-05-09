// var violet = 'Violet';
// let colors = new Set('Firefox');  

// console.log(colors);
// colors.delete(violet);   
// console.log(colors);
// colors.clear(violet)
// console.log(colors)

// var intArray = [1,3,4,5,6,5,6,3, 2]
// let colors = [...new Set(intArray)];   
// console.log(colors); 

// // let newColorOfArray = Array.from(colors)
// console.log([...colors]); 
// var val = colors.keys();  
// console.log(val);   
// console.log(val.next().value);   
// console.log(val.next().value);   
// console.log(val.next().value);   

//intersection
// var arraayOne = new Set([1,2,3,4])
// var arraaytwo = new Set([1,2,3,5,6]);

// var intersection = new Set([...arraayOne].filter(x=> arraaytwo.has(x)));
// console.log(intersection);

//defferenciation
// var arraayOne = new Set([1,2,3,4])
// var arraaytwo = new Set([1,2,3,5,6]);

// var deffer = new Set([...arraayOne].filter(x=> !arraaytwo.has(x)));
// console.log(deffer);

//union
// var union = union(arraayOne, arraaytwo);
// console.log(union)

// function union(setA, setB){
//     let _union = new Set(setA);
//     for(let elm of setB){
//         _union.add(elm)
//     }
//     return _union;
// }

//union with spread
var arraayOne = new Set([1,2,3,4])
var arraaytwo = new Set([1,2,3,5,6]);
var deffer = new Set([...arraayOne, ...arraaytwo]);
console.log(deffer);
