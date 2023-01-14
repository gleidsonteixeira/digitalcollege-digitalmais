function salvarNaAPI()
{
    event.preventDefault();
    let aluno = {
        nome: nome.value,
        email: email.value,
        whatsapp: whatsapp.value,
        objetivo: objetivo.value
    }

    let button = document.getElementById("btn");
    button.disabled = true;

    fetch("https://63388a25383946bc7fe9a891.mockapi.io/digital-store-users",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(aluno)
        }
    ).then(() => {
        button.disabled = false;
        alert("Enviado com sucesso");
        document.getElementById("cadastro").reset();
    })
}