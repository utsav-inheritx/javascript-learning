// for(let counter = 1; counter < 5; counter++){
//     document.write("Inheritx Solution <br>");
// }



for (let i=1; i<=10; i++){
    if(i == 5){
        break;
    }
    document.write(i);
    document.write('<br>');
}



for (let i=1; i<=10; i++){
    if(i == 5){
        continue;
    }
    document.write(i);
    document.write('<br>');
}



for(let counter = 1; counter <= 10; counter++){

    document.write(counter);
    document.write("<br>");

    for(let counter2 = 1; counter2 < 2; counter2++){

        if(counter == 3){
            break;          // we wanna break the inner content
        }

        document.write("Inheritx Solution <br>");
    }
}