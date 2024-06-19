function add(){

    if(arguments.length == 0){
        console.log("No Parameter Passed")
    } else{
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}
add (5);