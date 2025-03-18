let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    } else {
        alert("Este nombre ya está en la lista.");
    }
    input.value = "";
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos en la lista para sortear.");
        return;
    }
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}
