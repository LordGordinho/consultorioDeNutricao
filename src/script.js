var pacientes = []
window.addEventListener("load", function(){
    if(localStorage.length==0){
        localStorage.setItem("pacientes",[])
    }
    else{
        pacientes = JSON.parse(localStorage.getItem("pacientes"));
    }
    redenrizaPacientes()
})
