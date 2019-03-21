// control flow lets uss specify what blocks of code to run depending on soome boolean expression   


// if(boolean expression){
// // boolean expression that evaluates to true and false

// }

// const a = true;
// const b = false;



// const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
//               "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

// for(let i = 0; i<drSeuss.length;i++){
//     console.log(drSeuss[i]);
// }

// for(let i = 1; i<drSeuss.length;i+=2){
//     console.log(drSeuss[i]);
// }

// for(let i = 1; i<drSeuss.length;i+=2){
//     console.log(i + '\n');
//     console.log(drSeuss[i]);
// }

// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
//                         "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];


// for(let i = 1; i<looneyTunesChars.length;i++){
//     if (i%2==0){
//         console.log(i + "." + looneyTunesChars[i]) ;
//     }
// }

// for(let i = 0; i<looneyTunesChars.length;i++){
//     if (i%2==0 || i == 3){
//         console.log(i + "." + looneyTunesChars[i]) ;
//     }
// }

// for(let i = 0; i<looneyTunesChars.length;i++){
//     if (i%2==1){
//         console.log(i + "." + looneyTunesChars[i]) ;
//     }
// }


let array1 = ["what", "he!lo", "got!ha", "omg"];

function find(array){
    let tempArr=[];
for(let i=0;i<array.length; i++){
    let currentString = array[i];
    if(array[i].includes("!")){
        tempArr.push(array[i]);
    }
   
}
console.log(tempArr);
}


find(array1);