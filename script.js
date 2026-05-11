function mostrarInfo(setor) {
    const info = document.getElementById("info");

    if (setor === "secretaria") {
        info.innerHTML = `
            <h2>Secretaria</h2>
            <p><strong>Gmail Institucional:</strong> dos alunos</p>
            <p><strong>Telefone dos responsáveis</strong></p>
            <p><strong>Status do Aluno:</strong> Exemplo, se faltou ou se está de atestado</p>
            <p><strong>Status do Professor:</strong> Exemplo, se está afastado ou se está de atestado</p>
            <p><strong>Gastos</strong></p>
        `;
    }

    if (setor === "direcao") {
        info.innerHTML = `
            <h2>Direção</h2>
            <p><strong>Notas e faltas</strong></p>
        `;
    }

    if (setor === "estoque") {
        info.innerHTML = `
            <h2>Estoque</h2>
            <p>Quantos produtos de limpeza tem na escola.</p>
            <p>Quantos kg de comida:
            arroz, feijão, carne, frutas, farinha e leite em pó.</p>
        `;
    }

    info.style.display = "block";
}