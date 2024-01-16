/*Script file for index.html
Author: Jay Patel, 000881881*/

function group_1_choice_1(){
   let check=document.getElementById("q1_input").value;
    if (!isNaN(check)){
        if(check==0 ||(check>=13 && check<=17)){
            q1_output.innerHTML='<div class=" p-3 m-3 btn-success">'+"In Range"+'</div>'; 
            //console.log("1");
        }
        else{
            q1_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+"Out of Range"+'</div>';
            //console.log("2");
        }
    }
    else{
        q1_output.innerHTML='<div class=" p-3 m-3 btn-danger">'+"Not a Number"+'</div>';
        //console.log("3");
    }
}

function group_1_choice_3(){
    let square=document.getElementById("q2_input").value;
    if(isNaN(square)){
        q2_output.innerHTML='<div class=" p-3 m-3 btn-danger">'+"Can not Calculate Alphabate"+'</div>'; 

    }
    else{
        if(square<=0){
            q2_output.innerHTML='<div class=" p-3 m-3 btn-danger">'+"Length should be positive"+'</div>'; 
        }
        else{
            let peri=4*square;
            let area=square*square;
            q2_output.innerHTML='<div class=" p-3 m-3 btn-success">'+"Perimeter: "+peri+" Area: "+area+'</div>'; 
            //console.log(peri, area);
        }
    }

    }

    function group_2_choice_1(){
        let letter=document.getElementById("q3_input").value;
        if(!isNaN(letter)){
            q3_output.innerHTML='<div class=" p-3 m-3 btn-danger">'+"Numbers are not allowed"+'</div>'; 
        }
        else{
            if(letter=="a" || letter=="A" || letter=="e" || letter=="E" || letter=="i" || letter=="I" || letter=="o" || letter=="O" || letter=="u" || letter=="U"){
                q3_output.innerHTML='<div class=" p-3 m-3 btn-success">'+"A Vowel"+'</div>'; 
            }
            else if(letter=="y" || letter=="Y"){
                q3_output.innerHTML='<div class=" p-3 m-3 btn-success">'+"Sometimes"+'</div>'; 
            }

            else{
                q3_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+"Not a Vowel"+'</div>'; 
            }
        }
    }

    function group_2_choice_3(){
        let Number=document.getElementById("q4_input").value;
        if (Number>=0){
            if (Number==0 || Number==1){
                q4_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+ "Factorial value is: 0" +'</div>';    
            }
            else{
                for ( var num = Number - 1; num >= 1; num = num - 1){
                    Number = num * Number;
                  }
                  q4_output.innerHTML='<div class=" p-3 m-3 btn-success">'+"Factorial value is: "+ Number +'</div>';   
                  //console.log(Number); 
            }
        }
        else {
            q4_output.innerHTML='<div class=" p-3 m-3 btn-danger">'+"Cannot compute factorial value"+'</div>';
        }
    }

function group_3_choice_2(){
    let equation = document.getElementById("q5_input").value;
        for (i=0; i<=equation.length; i++){

            if (equation[i]=="+"){
                let [left, right] = equation.split("+");
                left = parseInt(left);
                right = parseInt(right);

                if ((!left || !right) || (left<0 || right<0)) {
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+ "Invalid Formula" +'</div>';
                  }

                else{
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-success">'+ (left+right) +'</div>';
                //console.log(left+right);
                }
                
                break;
            }

            else if (equation[i]=="-"){
                let [left, right] = equation.split("-");
                left = parseInt(left);
                right = parseInt(right);

                if (!left || !right || (left<0 || right<0)) {
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+ "Invalid Formula" +'</div>';
                  }

                else{
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-success">'+ (left-right) +'</div>';
                    //console.log(left-right);
                }

                break;
            }

            else if (equation[i]=="*"){
                let [left, right] = equation.split("*");
                left = parseInt(left);
                right = parseInt(right);

                if (!left || !right || (left<0 || right<0)) {
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+ "Invalid Formula" +'</div>';
                  }

                else{
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-success">'+ (left*right) +'</div>';
                    //console.log(left*right);
                }

                break;
            }

            else if (equation[i]=="/"){
                let [left, right] = equation.split("/");
                left = parseInt(left);
                right = parseInt(right);

                if (!left || !right || (left<0 || right<0)) {
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+ "Invalid Formula" +'</div>';
                  }

                else{
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-success">'+ (left/right) +'</div>';
                    //console.log(left/right);
                }

                break;
            }

            else if (equation[i]=="%"){
                let [left, right] = equation.split("%");
                left = parseInt(left);
                right = parseInt(right);

                if (!left || !right || (left<0 || right<0)) {
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-primary">'+ "Invalid Formula" +'</div>';
                  }

                else{
                    q5_output.innerHTML='<div class=" p-3 m-3 btn-success">'+ (left%right) +'</div>';
                    //console.log(left%right);
                }

                break;
            }

            else{
                q5_output.innerHTML='<div class=" p-3 m-3 btn-danger">'+ "Invalid Formula" +'</div>';
            }
        }
      
} 

