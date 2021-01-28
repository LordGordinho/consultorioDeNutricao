function excluiPaciente(){
    var pacientesTr = document.querySelectorAll(".paciente")
    
    pacientesTr.forEach(paciente => {
        paciente.addEventListener("click",_=>{
            console.log(paciente)
        })
    })
}