function boasVindas() {
    alert('Bem-vindo ao site Saúde Emocional para a Vida!');
}

function frasesParaAlegrarSeuDia() {
    const frases = [
        "Acredite em si mesmo e em tudo o que você é.",
        "A felicidade depende mais da nossa atitude do que das circunstâncias.",
        "Cada dia é uma nova oportunidade para mudar a sua vida.",
        "A saúde emocional é a chave para o equilíbrio da vida.",
        "Cuide da sua mente como você cuida do seu corpo."
    ];
  
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    alert(fraseAleatoria);  
}


function saibaMais() {
    alert("A saúde emocional é um dos pilares para o bem-estar. Ela envolve o equilíbrio emocional, o autoconhecimento e o autocuidado.");
}


function contato() {
    const email = prompt("Digite seu email para entrar em contato:");
    if (email) {
        alert(`Obrigado! Vamos entrar em contato com você em breve no email: ${email}`);
    } else {
        alert("Você não digitou um email.");
    }
}
