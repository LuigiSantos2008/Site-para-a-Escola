function voltar() {
    document.getElementById("menuPrincipal").style.display = "flex";
    document.getElementById("conteudo").innerHTML = "";
}

function abrirDirecao() {

    document.getElementById("menuPrincipal").style.display = "none";

    document.getElementById("conteudo").innerHTML = `
        <div class="pagina">

            <button class="voltar" onclick="voltar()">
                ← Voltar
            </button>

            <h2>Direção</h2>

            <div class="abas">

                <button onclick="mostrarAlunos()">
                    👨‍🎓 Alunos
                </button>

                <button onclick="mostrarProfessores()">
                    👨‍🏫 Professores
                </button>

                <button onclick="mostrarNotas()">
                    📚 Notas
                </button>

            </div>

            <div id="painel"></div>

        </div>
    `;
}

function abrirSecretaria() {

    document.getElementById("menuPrincipal").style.display = "none";

    document.getElementById("conteudo").innerHTML = `
        <div class="pagina">

            <button class="voltar" onclick="voltar()">
                ← Voltar
            </button>

            <h2>Secretaria</h2>

            <div class="item">Gmail institucional dos alunos</div>
            <div class="item">Telefone dos responsáveis</div>
            <div class="item">Documentação escolar</div>
            <div class="item">Matrículas e transferências</div>

        </div>
    `;
}

function abrirEstoque() {

    document.getElementById("menuPrincipal").style.display = "none";

    document.getElementById("conteudo").innerHTML = `
        <div class="pagina">

            <button class="voltar" onclick="voltar()">
                ← Voltar
            </button>

            <h2>Estoque</h2>

            <div class="item">Arroz - 50kg</div>
            <div class="item">Feijão - 30kg</div>
            <div class="item">Carne - 25kg</div>
            <div class="item">Produtos de Limpeza - 100 unidades</div>

        </div>
    `;
}

function mostrarAlunos() {

    const turmas = [
        "61","62","71","72",
        "81","82","91","92",
        "1EM","2EM","3EM"
    ];

    let html = `
        <h3>Turmas</h3>
        <div class="turmas">
    `;

    turmas.forEach(turma => {

        html += `
            <div class="turma"
            onclick="abrirTurma('${turma}')">
                ${turma}
            </div>
        `;
    });

    html += `</div>`;

    document.getElementById("painel").innerHTML = html;
}

function abrirTurma(turma) {

    let html = `
        <h3>Turma ${turma}</h3>
        <div class="lista">
    `;

    for(let i=1; i<=20; i++) {

        html += `
        <div class="item">

            <strong>Aluno ${i}</strong>

            <br>

            aluno${i}@escola.com

            <br>

            <select>
                <option>Bom comportamento</option>
                <option>Médio</option>
                <option>Ruim</option>
                <option>Faltou</option>
                <option>Recuperação</option>
                <option>Atestado</option>
            </select>

        </div>
        `;
    }

    html += `</div>`;

    document.getElementById("painel").innerHTML = html;
}

function mostrarProfessores() {

    let html = `
        <h3>Professores</h3>
        <div class="lista">
    `;

    for(let i=1; i<=20; i++) {

        html += `
        <div class="item">

            <strong>Professor ${i}</strong>

            <br>

            professor${i}@escola.com

            <br>

            <select>
                <option>Em aula</option>
                <option>Atestado</option>
                <option>Afastado</option>
            </select>

        </div>
        `;
    }

    html += `</div>`;

    document.getElementById("painel").innerHTML = html;
}

function mostrarNotas() {

    document.getElementById("painel").innerHTML = `
        <div class="lista">

            <div class="item">
                João Silva - Matemática: 8,5
            </div>

            <div class="item">
                Maria Souza - Português: 9,0
            </div>

            <div class="item">
                Pedro Lima - História: 7,5
            </div>

        </div>
    `;
}