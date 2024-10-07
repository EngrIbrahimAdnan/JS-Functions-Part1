function printName(name){
    console.log(name);
}

function printAge(YearOfBirth){
    console.log(2024-YearOfBirth);
}

function printAgeAndName(name, YearOfBirth){
    console.log(`Hello ${name}, You're ${2024-YearOfBirth} years old`);
}

function printHello(name, Language){
    if (Language==="en"){
        console.log(`Hello ${name}`);
    }
    else if (Language==="es"){
        console.log(`Hola ${name}`);
    } 
    else if (Language==="fr"){
        console.log(`Bonjour ${name}`);
    } 
    else if (Language==="tr"){
        console.log(`Merhaba ${name}`);
    } 
}

function printMax(num1,num2){

    if (num1>num2){
        console.log(`${num1} is bigger than ${num2}`);

    }else if (num1<num2){
        console.log(`${num2} is bigger than ${num1}`);
    }else if (num1===num2){
        console.log(`${num2} is equal to ${num1}`);
    }
}