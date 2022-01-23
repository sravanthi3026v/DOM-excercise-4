// function myfun(){
//     let result = document.getElementById("heading");
//    //console.log(result);
//    result.innerHTML = "content changed";
// }

function myfun(){
   document.getElementById("heading").innerHTML = "content changed";
   }


function myfun2(){
    document.getElementById("test").style.fontSize="30px";
}


function toggleoff(){
document.getElementById("toggle").style.display="none";
}
function toggleon(){
document.getElementById("toggle").style.display="block";
}


function insert_row(){
    let x=document.getElementById("sampletable").insertRow();
    let y = x.insertCell(0);
    let z = x.insertCell(1);

    y.innerHTML="new-row 1st-cell";
    z.innerHTML="new-row 2nd-cell";
}
