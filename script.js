function mostrarInfo(setor) {
    const info = document.getElementById("info");

    const dados = {
        secretaria: `
            <h2>📄 Secretaria</h2>
            <p><strong>Gmail Institucional:</strong> aluno@escola.com</p>
            <p><strong>Telefone dos Responsáveis:</strong> (38) 99999-9999</p>
            <p><strong>Status do Aluno:</strong> Presente, faltou ou está de atestado.</p>
            <p><strong>Status do Professor:</strong> Em aula, afastado ou de licença.</p>
            <p><strong>Gastos:</strong> Material escolar, manutenção e eventos.</p>
        `,

        direcao: `
            <h2>🎓 Direção</h2>
            <p><strong>Notas:</strong> Matemática 9,0 | Português 8,5</p>
            <p><strong>Faltas:</strong> 3 faltas no bimestre.</p>
            <p><strong>Desempenho:</strong> Excelente rendimento escolar.</p>
        `,

        estoque: `
            <h2>📦 Estoque</h2>
            <p><strong>Produtos de Limpeza:</strong> 10 detergentes, 15 águas sanitárias.</p>
            <p><strong>Alimentos:</strong> 50 kg de arroz, 20 kg de feijão, 30 kg de carne.</p>
            <p><strong>Frutas:</strong> Banana, maçã e laranja.</p>
            <p><strong>Leite em Pó:</strong> 12 pacotes.</p>
        `
    };

    info.innerHTML = dados[setor];
    info.style.display = "block";

    info.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}