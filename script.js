const app = document.getElementById("app");

/* =========================
   MENU PRINCIPAL
========================= */

function voltarInicio() {
    app.innerHTML = `
    <div class="cards">

        <div class="card" onclick="abrirDirecao()">
            <i class="fas fa-user-tie"></i>
            <h2>Direção</h2>
        </div>

        <div class="card" onclick="abrirSecretaria()">
            <i class="fas fa-file-lines"></i>
            <h2>Secretaria</h2>
        </div>

        <div class="card" onclick="abrirEstoque()">
            <i class="fas fa-boxes-stacked"></i>
            <h2>Estoque</h2>
        </div>

    </div>
    `;
}

/* =========================
   DIREÇÃO
========================= */

function abrirDirecao() {

    app.innerHTML = `
    <div class="pagina">

        <button class="voltar" onclick="voltarInicio()">
            ← Voltar
        </button>

        <h2>Direção</h2>

        <div class="botoes">

            <button onclick="abrirAlunos()">
                👨‍🎓 Alunos
            </button>

            <button onclick="abrirProfessores()">
                👨‍🏫 Professores
            </button>

            <button onclick="abrirNotas()">
                📚 Notas
            </button>

        </div>

    </div>
    `;
}

/* =========================
   ALUNOS
========================= */

function abrirAlunos() {

    const turmas = [
        "61","62",
        "71","72",
        "81","82",
        "91","92",
        "1EM","2EM","3EM"
    ];

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirDirecao()">
            ← Voltar
        </button>

        <h2>Turmas</h2>

        <div class="grade">
    `;

    turmas.forEach(turma => {

        html += `
        <div class="item-btn"
             onclick="abrirTurma('${turma}')">
             ${turma}
        </div>
        `;
    });

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

function abrirTurma(turma) {

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirAlunos()">
            ← Voltar
        </button>

        <h2>Turma ${turma}</h2>

        <div class="lista">
    `;

    for (let i = 1; i <= 20; i++) {

        html += `
        <div class="item">

            <strong>Aluno ${i}</strong>

            <br>

            aluno${i}@escola.com

            <br><br>

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

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

/* =========================
   PROFESSORES
========================= */

function abrirProfessores() {

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirDirecao()">
            ← Voltar
        </button>

        <h2>Professores</h2>

        <div class="lista">
    `;

    for (let i = 1; i <= 20; i++) {

        html += `
        <div class="item">

            <strong>Professor ${i}</strong>

            <br>

            professor${i}@escola.com

            <br><br>

            <select>
                <option>Em aula</option>
                <option>Atestado</option>
                <option>Afastado</option>
            </select>

        </div>
        `;
    }

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

/* =========================
   NOTAS
========================= */

function abrirNotas() {

    app.innerHTML = `
    <div class="pagina">

        <button class="voltar" onclick="abrirDirecao()">
            ← Voltar
        </button>

        <h2>Notas</h2>

        <div class="botoes">

            <button onclick="abrirFundamental()">
                📚 Ensino Fundamental
            </button>

            <button onclick="abrirMedio()">
                🎓 Ensino Médio
            </button>

        </div>

    </div>
    `;
}

/* =========================
   FUNDAMENTAL
========================= */

function abrirFundamental() {

    const materias = [
        "Matemática",
        "Português",
        "Ciências",
        "História",
        "Geografia"
    ];

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirNotas()">
            ← Voltar
        </button>

        <h2>Ensino Fundamental</h2>

        <div class="grade">
    `;

    materias.forEach(materia => {

        html += `
        <div class="item-btn"
             onclick="abrirMateriaFundamental('${materia}')">
             ${materia}
        </div>
        `;
    });

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

function abrirMateriaFundamental(materia) {

    const turmas = [
        "61","62",
        "71","72",
        "81","82",
        "91","92"
    ];

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirFundamental()">
            ← Voltar
        </button>

        <h2>${materia}</h2>

        <div class="grade">
    `;

    turmas.forEach(turma => {

        html += `
        <div class="item-btn"
             onclick="abrirNotasTurma('${materia}','${turma}')">
             ${turma}
        </div>
        `;
    });

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

/* =========================
   ENSINO MÉDIO
========================= */

function abrirMedio() {

    const materias = [
        "Matemática",
        "Português",
        "Física",
        "Química",
        "Biologia",
        "História",
        "Geografia"
    ];

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirNotas()">
            ← Voltar
        </button>

        <h2>Ensino Médio</h2>

        <div class="grade">
    `;

    materias.forEach(materia => {

        html += `
        <div class="item-btn"
             onclick="abrirMateriaMedio('${materia}')">
             ${materia}
        </div>
        `;
    });

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

function abrirMateriaMedio(materia) {

    const turmas = [
        "1EM",
        "2EM",
        "3EM"
    ];

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirMedio()">
            ← Voltar
        </button>

        <h2>${materia}</h2>

        <div class="grade">
    `;

    turmas.forEach(turma => {

        html += `
        <div class="item-btn"
             onclick="abrirNotasTurma('${materia}','${turma}')">
             ${turma}
        </div>
        `;
    });

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

/* =========================
   NOTAS POR TURMA
========================= */

function abrirNotasTurma(materia, turma) {

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirNotas()">
            ← Voltar
        </button>

        <h2>${materia} - Turma ${turma}</h2>

        <div class="lista">
    `;

    for (let i = 1; i <= 20; i++) {

        html += `
        <div class="item">

            <strong>Aluno ${i}</strong>

            <br>

            aluno${i}@escola.com

            <br><br>

            Nota:

            <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                value="0">

        </div>
        `;
    }

    html += `
        </div>
    </div>
    `;

    app.innerHTML = html;
}

/* =========================
   SECRETARIA
========================= */

function abrirSecretaria() {

    app.innerHTML = `
    <div class="pagina">

        <button class="voltar" onclick="voltarInicio()">
            ← Voltar
        </button>

        <h2>Secretaria</h2>

        <div class="item">📧 Gmail Institucional</div>
        <div class="item">📞 Telefones dos Responsáveis</div>
        <div class="item">📋 Matrículas</div>
        <div class="item">📂 Documentação Escolar</div>

    </div>
    `;
}

/* =========================
   ESTOQUE
========================= */

function abrirEstoque() {

    app.innerHTML = `
    <div class="pagina">

        <button class="voltar" onclick="voltarInicio()">
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