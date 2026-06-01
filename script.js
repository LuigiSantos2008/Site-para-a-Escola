const turmas = [
    "61","62",
    "71","72",
    "81","82",
    "91","92",
    "1EM","2EM","3EM"
];

function abrirDirecao(){
    document.getElementById("direcaoBox").style.display = "block";
}

function mostrarSecao(secao){

    const conteudo = document.getElementById("conteudo");

    // ALUNOS
    if(secao === "alunos"){

        let html = `
        <h2>Turmas</h2>

        <div class="turmas">
        `;

        turmas.forEach(turma=>{
            html += `
            <div class="turma"
            onclick="abrirTurma('${turma}')">
            ${turma}
            </div>
            `;
        });

        html += `</div>`;

        conteudo.innerHTML = html;
    }

    // PROFESSORES
    if(secao === "professores"){

        conteudo.innerHTML = `

        <h2>Professores</h2>

        <div class="aluno">
            <h3>Professor Carlos</h3>

            <div class="status">
                Status:
                <select>
                    <option>Em aula</option>
                    <option>Atestado</option>
                    <option>Afastado</option>
                </select>
            </div>
        </div>

        <div class="aluno">
            <h3>Professora Ana</h3>

            <div class="status">
                Status:
                <select>
                    <option>Em aula</option>
                    <option>Atestado</option>
                    <option>Afastado</option>
                </select>
            </div>
        </div>

        `;
    }

    // NOTAS
    if(secao === "notas"){

        conteudo.innerHTML = `

        <h2>Notas</h2>

        <div class="aluno">
            <h3>João Silva</h3>
            <p>Matemática: 8.5</p>
            <p>Português: 7.0</p>
            <p>História: 9.0</p>
        </div>

        `;
    }

}

function abrirTurma(turma){

    const conteudo = document.getElementById("conteudo");

    let html = `
    <h2>Turma ${turma}</h2>
    `;

    for(let i=1;i<=20;i++){

        html += `

        <div class="aluno">

            <h3>Aluno ${i}</h3>

            <p>Email:
            aluno${i}@escola.com
            </p>

            <div class="status">

                Status:
                <select>
                    <option>Bom comportamento</option>
                    <option>Médio</option>
                    <option>Ruim</option>
                    <option>Faltou</option>
                    <option>Recuperação</option>
                    <option>Atestado</option>
                </select>

            </div>

        </div>

        `;
    }

    conteudo.innerHTML = html;
}