 // iteration name and input
 let driverName = "alex";


 console.log(`O nome do motorista é ${driverName}`);
 
 
 let navigatorName = "sander";
 
 
 console.log(`O nome do navegador é ${navigatorName}`);
 
 
 
 console.log(`"hacker1 The driver's name is ${driverName}"hacker2 The navigator's name is ${navigatorName}"`);
 



// iteration 2 conditionals

if(driverName.length > navigatorName.length){
  console.log(`The driver has the longest name, it has ${driverName.length} characters.`)
}else if(driverName.length < navigatorName.length){
 console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length}characters.`)
}else{
  console.log(`Wow, you both have equally long names, ${driverName.length}characters!`)
}



// Iteration 3: Loops

let name ='';
for (let i = 0; i < driverName.length; i++) {
   name += driverName [i].toUpperCase()+" ";
}
console.log(name)


let name1 ='';
for (let i = navigatorName.length-1; i >=0; i--){
  name1 += navigatorName[i];
}
console.log(name1)

let reversedName = navigatorName.split('').reverse().join('');
console.log(reversedName);




  
  
    if(driverName === navigatorName){
      consolle.log("The driver's name goes first.");
    }else if (driverName < navigatorName){
      console.log("Yo, the navigator goes first, definitely.");
      }else{
     console.log("What?! You both have the same name?")
  }


