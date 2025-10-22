let evento;

let PwaInstallAlert = document.createElement("div");
PwaInstallAlert.id = "btnInstall";
PwaInstallAlert.style.position = "fixed"
PwaInstallAlert.style.bottom = "20px"
PwaInstallAlert.style.left = "50%"
PwaInstallAlert.style.transform = "translatex(-50%)";
PwaInstallAlert.style.backgroundColor = "#ffff";
PwaInstallAlert.style.padding = "10px 20px";
PwaInstallAlert.style.borderRadius = "12px";
PwaInstallAlert.style.display= "none";

PwaInstallAlert.innerHTML= `
    <span>
        Instale nosso app para uma melhor experiência!
        <button style = "margin-left: 10px; padding: 5px 10px;"
        > 
        Instalar agora
        </button>
`;

document.body.appendChild(PwaInstallAlert)
window.addEventListener('beforeinstallprompt', (e) =>{

    e.preventDefault();
    evento = e
    PwaInstallAlert.style.display = "block"
});

let botaoInstalar = document.getElementById("btnInstall");

botaoInstalar.addEventListener('click',(e) =>{
    let promptInstalar = evento
    PwaInstallAlert.style.display

    if(promptInstalar){
        promptInstalar.prompt()
        promptInstalar.userChoiche.the((resposta)=>{
            if (resposta === 'accepted'){
                console.log("Usuário aceitou")
            }else{
                console.log("Usuario recusou")
            }
            evento = null;
        })
    }

})