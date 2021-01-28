var btnGetPaciente = document.querySelector("#btnGetPaciente");

btnGetPaciente.addEventListener("click", evnt => {
    evnt.preventDefault();
    let inputsForm = document.querySelectorAll("#formInserirPaciente input");
    let paciente = {
        nome:inputsForm[0].value,
        altura:inputsForm[1].value,
        peso:inputsForm[2].value,
        gordura:inputsForm[3].value
    }
    pacientes.push(paciente)
    salvaLocal()
    redenrizaPacientes()
    adicionaEventoDoclick()
    document.querySelector("#formInserirPaciente").reset()
})

function salvaLocal(){
    localStorage.setItem("pacientes",JSON.stringify(pacientes))
}

function redenrizaPacientes(){
    let tablePacientes = document.querySelector("#tabelaDePacientes")
    tablePacientes.innerHTML = `<tr id="cabecalhoPacientes">
                                    <th>Nome</th>
                                    <th>Altura (cm)</th>
                                    <th>Peso (kg)</th>
                                    <th>% de Gordura</th>
                                    <th>IMC</th>
                                </tr>`
    pacientes.forEach(paciente =>{
        let trPaciente = document.createElement("tr")
        trPaciente.appendChild(criaTdPaciente(paciente.nome))
        trPaciente.appendChild(criaTdPaciente(paciente.altura))
        trPaciente.appendChild(criaTdPaciente(paciente.peso))
        trPaciente.appendChild(criaTdPaciente(paciente.gordura))
        trPaciente.classList.add("paciente")
        tablePacientes.appendChild(trPaciente)
    })
    
}

function criaTdPaciente(element){
    let td = document.createElement("td")
    td.textContent = element
    return td
}
function adicionaEventoDoclick(){
    let trPacientes = document.querySelectorAll(".paciente");
    trPacientes.forEach(trPaciente =>{
        trPaciente.addEventListener("dblclick", Event =>{
            let newPacientes = []
            let contadorDaPosicaoDoArray=0;
            pacientes.forEach(paciente =>{
                if((Event.path[1].rowIndex-1)!=contadorDaPosicaoDoArray){
                    newPacientes.push(paciente)
                }
                contadorDaPosicaoDoArray++;
            })
            pacientes = newPacientes;
            salvaLocal();
        })
    })
    redenrizaPacientes();
}