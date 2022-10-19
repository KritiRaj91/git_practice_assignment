
  let a=true;
    if(num>1){
        for(let i=2; i<num; i++){
            if(num%i===0){
                a=false;
                break;
            }
        }
        if(a){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
    }