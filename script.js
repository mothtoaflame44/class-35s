let mark;
mark= 120;
if (mark < 0 || mark > 100) {
    console.log("Invalid mark. Please enter a value between 0 and 100.");
}

else if (mark >= 80){
    console.log("The grade is A+");
}

else if(mark >= 70){
    console.log("The grade is A");
}

else if(mark >= 60){
    console.log("The grade is A-");
}

else if(mark >= 50){
    console.log("The grade is B");
}

else if(mark >= 40){
    console.log("The grade is C");
} 

else if (mark >= 33){
    console.log("The grade is D");
}

else {
    console.log( " The grade is F");
}


