// // Easy Going

// for(let i=0;i<=20;i++){
//     console.log(i);
// }

// // Get Even

// for(let i=2;i<=200;i+=2){
//     console.log(i);
// }

// // Excited Kitten

// for(let i=0;i<=20;i++){
//     console.log("Love me, pet me! HSSSSSS!");
//     if(i%2==0){
//         let randNum = Math.floor(Math.random() * 3) +1;
//         switch(randNum){
//             case 1:
//                 console.log("...human...why you taking pictures of me?...");
//                 break;
//             case 2: 
//                 console.log("...the catnip made me do it...");
//                 break;
//             case 3:
//                 console.log("...why does the red dot always get away...");
//                 break;

//         }
//     }
// }

// //Fizz Buzz

// for(let i = 1; i<=100;i++){
//     if(i%5==0&&i%3==0){
//         console.log("Fizzbuzz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
// }


// //Getting to Know You


// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];


// kenny[0] = "Gameboy";
// jimClark[1] += 1;
// ryan[2]="Gotham city";
// reuben.pop();
// reuben.push("Chicago");
// jimHaff.pop();
// jimHaff.push("LA","NYC","PDX");
// jimHaff.splice(2,2);

// // Yell at the Ninja Turtles

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let i =0;i<ninjaTurtles.length;i++){
    let currentTurtle = ninjaTurtles[i];
    let newTurtle = "";
        for(let j = 0; j< currentTurtle.length; j++){
        if(j%2==0){
           newTurtle+=currentTurtle[j].toUpperCase();
        }else{
            newTurtle+=currentTurtle[j];
        }
        }
    console.log(newTurtle);
    }

// //Return of the Closets

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   var kristynsShoe = kristynsCloset[0];
//   kristynsCloset.splice(0,1);

// //   console.log(kristynsCloset);

//   thomsCloset[2].push(kristynsShoe);

// //   console.log(thomsCloset);

// console.log("krityn will be wearing " + kristynsCloset[0]+ " " + kristynsCloset[3] + " " + kristynsCloset[4]);
// console.log("krityn will be wearing " + kristynsCloset[1]+ " " + kristynsCloset[4] + " " + kristynsCloset[2]);
// console.log("krityn will be wearing " + kristynsCloset[2]+ " " + kristynsCloset[3] + " " + kristynsCloset[5]);

// console.log("thom will be wearing " + thomsCloset[0][1]+ " " + thomsCloset[1][2] + " " + thomsCloset[2][0]);
// console.log("thom will be wearing " + thomsCloset[0][3]+ " " + thomsCloset[1][1] + " " + thomsCloset[2][2]);
// console.log("thom will be wearing " + thomsCloset[0][4]+ " " + thomsCloset[1][0] + " " + thomsCloset[2][1]);

// // Dirty Laundry

// for(let i = 0; i<kristynsCloset.length;i++){
//     console.log("WHIRR: Now washing " + kristynsCloset[i]);
// }

// for(let  i=0;i<thomsCloset.length;i++){
//     console.log(thomsCloset[i]);
// }

// // Multiples of 3 and 5

// let sum =0;
// for(let i = 1;i<= 1000;i++){
//     if(i%3==0 || i%5 == 0){
//         sum +=i;
//     }
// }
// console.log(sum);

//Hungry for more?\


var argument = 20;

for(let i = 1; i <= argument;i++){
    console.log("#".repeat(i));
}
console.log("\n");

let i,j;
for(i = argument-1,j=1; i>=0;i--,j++){
    console.log(" ".repeat(i) + "#".repeat(j));

}
console.log("\n");

for(let i = argument; i >= 0;i--){
    console.log("#".repeat(i));
}
console.log("\n");

for(i = argument,j=0; i>=0;i--,j++){
    console.log(" ".repeat(j) + "#".repeat(i));

}
