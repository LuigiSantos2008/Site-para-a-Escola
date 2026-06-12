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

<button onclick="abrirFaltas()">
    🚫 Faltas
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
        "Língua Portuguesa",
    "Língua Inglesa",
    "Arte",
    "Educação Física",
    "Matemática",
    "Ciências",
    "Geografia",
    "História",
    "Ensino Religioso",
    "Atividades Integradoras",
    "Clube de Protagonismo",
    "Estudos Orientados",
    "Práticas Experimentais",
    "Nivelamento em Matemática",
    "Nivelamento em Língua Portuguesa",
    "Corpo e Movimento"
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

/* =========================
   ENSINO MÉDIO
========================= */

function abrirMedio() {

    const materias = [

        "Língua Portuguesa",
        "Educação Física",
        "Arte",
        "Língua Inglesa",

        "Matemática",

        "Física",
        "Química",
        "Biologia",

        "Geografia",
        "História",
        "Sociologia",
        "Filosofia",

        "Projeto de Vida",
        "Eletiva",
        "Estudos Orientados",
        "Práticas Experimentais",
        "Nivelamento Língua Portuguesa",
        "Nivelamento Matemática",
        "Introdução ao Correios Social (PICS)",
        "Cultura Digital e Fundamentos de IA",
        "Ferramentas para o Mundo do Trabalho",
        "Prática Profissional e Empreendedora",

        "Banco de Dados",
        "Algoritmos e Estrutura de Dados",
        "Arquitetura de Sistemas",
        "Desenvolvimento Front-End I",
        "Desenvolvimento Front-End II",
        "Conceitos Avançados em Arquitetura de Sistemas",
        "Desenvolvimento de Softwares",
        "Fundamentos de Segurança de Softwares",
        "Desenvolvimento Back-End",
        "Desenvolvimento de Aplicativos"

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

/* =========================
   TURMAS DO ENSINO MÉDIO
========================= */

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
   FALTAS
========================= */

function abrirFaltas() {

    app.innerHTML = `
    <div class="pagina">

        <button class="voltar" onclick="abrirDirecao()">
            ← Voltar
        </button>

        <h2>Faltas</h2>

        <div class="grade">

            <div class="item-btn" onclick="abrirFaltasFundamental()">
                📚 Ensino Fundamental
            </div>

            <div class="item-btn" onclick="abrirFaltasMedio()">
                🎓 Ensino Médio
            </div>

        </div>

    </div>
    `;
}

/* =========================
   FALTAS FUNDAMENTAL
========================= */

function abrirFaltasFundamental() {

    const turmas = [
        "61","62",
        "71","72",
        "81","82",
        "91","92"
    ];

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirFaltas()">
            ← Voltar
        </button>

        <h2>Ensino Fundamental</h2>

        <div class="grade">
    `;

    turmas.forEach(turma => {

        html += `
        <div class="item-btn"
             onclick="abrirListaFaltas('${turma}')">
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
   FALTAS MÉDIO
========================= */

function abrirFaltasMedio() {

    const turmas = [
        "1EM",
        "2EM",
        "3EM"
    ];

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirFaltas()">
            ← Voltar
        </button>

        <h2>Ensino Médio</h2>

        <div class="grade">
    `;

    turmas.forEach(turma => {

        html += `
        <div class="item-btn"
             onclick="abrirListaFaltas('${turma}')">
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
   ALUNOS E FALTAS
========================= */

function abrirListaFaltas(turma) {

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirFaltas()">
            ← Voltar
        </button>

        <h2>Turma ${turma}</h2>

        <div class="lista">
    `;

    for(let i = 1; i <= 20; i++) {

        html += `
        <div class="item">

            <strong>Aluno ${i}</strong>

            <br>

            aluno${i}@escola.com

            <br><br>

            Faltas:

            <input
                type="number"
                min="0"
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

        <div class="botoes">

            <button onclick="abrirTurmasSecretaria('fundamental')">
                📚 Ensino Fundamental
            </button>

            <button onclick="abrirTurmasSecretaria('medio')">
                🎓 Ensino Médio
            </button>

        </div>

    </div>
    `;
}

function abrirTurmasSecretaria(nivel) {

    let turmas = [];

    if (nivel === "fundamental") {

        turmas = [
            "61","62",
            "71","72",
            "81","82",
            "91","92"
        ];

    } else {

        turmas = [
            "1EM",
            "2EM",
            "3EM"
        ];
    }

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirSecretaria()">
            ← Voltar
        </button>

        <h2>Turmas</h2>

        <div class="grade">
    `;

    turmas.forEach(turma => {

        html += `
        <div class="item-btn"
             onclick="abrirDadosTurma('${turma}','${nivel}')">

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

function abrirDadosTurma(turma, nivel) {

    const alunosPorTurma = {

        "61": [
            {
                nome: "João",
                email: "joão@escola.com",
                telefone: "(11) 99999-1111",
                matricula: "2025001"
            }
        ],

        "62": [
            {
                nome: "Maria",
                email: "maria@escola.com",
                telefone: "(11) 99999-2222",
                matricula: "2025002"
            }
        ],

"71": [
            {
                nome: "Luiz",
                email: "luiz@escola.com",
                telefone: "(11) 99999-2222",
                matricula: "2025002"
            }
        ],

        "72": [
            {
                nome: "Ana",
                email: "ana@escola.com",
                telefone: "(11) 99999-2222",
                matricula: "2025002"
            }
        ],

        "81": [
            {
                nome: "Vinicius",
                email: "vinicius@escola.com",
                telefone: "(11) 99999-2222",
                matricula: "2025002"
            }
        ],

        "82": [
            {
                nome: "Gabriel",
                email: "gabriel@escola.com",
                telefone: "(11) 99999-2222",
                matricula: "2025002"
            }
        ],

"91": [
            {
                nome: "Lorenzo",
                email: "lorenzo@escola.com",
                telefone: "(11) 99999-2222",
                matricula: "2025002"
            }
        ],

        "92": [
            {
                nome: "Victor",
                email: "victor@escola.com",
                telefone: "(11) 99999-2222",
                matricula: "2025002"
            }
        ],

    

        "1EM": [
            {
                nome: "Gustavo",
                email: "gustavo@escola.com",
                telefone: "(11) 99999-3001",
                matricula: "2025003"
            }
        ],

        "2EM": [
            {
                nome: "Matheus",
                email: "matheus@escola.com",
                telefone: "(11) 99999-3002",
                matricula: "2025004"
            }
        ],

        "3EM": [
            {
                nome: "Luigi",
                email: "luigi@escola.com",
                telefone: "(11) 99999-3003",
                matricula: "2025005"
            }
        ]
    };

    let html = `
    <div class="pagina">

        <button class="voltar"
                onclick="abrirTurmasSecretaria('${nivel}')">
            ← Voltar
        </button>

        <h2>Turma ${turma}</h2>

        <div class="lista">
    `;

    const alunos = alunosPorTurma[turma] || [];

    if (alunos.length === 0) {

        html += `
        <div class="item">
            Nenhum aluno cadastrado.
        </div>
        `;
    }

    alunos.forEach(aluno => {

        html += `
        <div class="item">

            <strong>👨‍🎓 ${aluno.nome}</strong>

            <br><br>

            📧 Gmail: ${aluno.email}

            <br><br>

            📞 Responsável: ${aluno.telefone}

            <br><br>

            📋 Matrícula: ${aluno.matricula}

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
   ESTOQUE
========================= */

function abrirEstoque() {

    app.innerHTML = `
    <div class="pagina">

        <button class="voltar" onclick="voltarInicio()">
            ← Voltar
        </button>

        <h2>Estoque</h2>

        <div class="grade">

            <div class="item-btn" onclick="abrirAlimentos()">
                🍚 Alimentos
            </div>

            <div class="item-btn" onclick="abrirLimpeza()">
                🧴 Produtos de Limpeza
            </div>

            <div class="item-btn" onclick="abrirUtensilios()">
                🍽️ Utensílios
            </div>

            <div class="item-btn" onclick="abrirRelatorio()">
                📊 Relatório Geral
            </div>

        </div>

    </div>
    `;
}

/* =========================
   ALIMENTOS
========================= */

function abrirAlimentos() {

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirEstoque()">
            ← Voltar
        </button>

        <h2>Alimentos</h2>

        <div class="lista">
    `;

    const produtos = [
        "Arroz",
        "Feijão",
        "Carne",
        "Macarrão",
        "Leite",
        "Açúcar",
        "Óleo",
        "Café"
    ];

    produtos.forEach(produto => {

        html += `
        <div class="item">

            <strong>${produto}</strong>

            <br><br>

            Estoque Atual:
            <input type="number" value="0">

            <br><br>

            Quantidade Recebida:
            <input type="number" value="0">

            <br><br>

            Quantidade Utilizada:
            <input type="number" value="0">

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
   LIMPEZA
========================= */

function abrirLimpeza() {

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirEstoque()">
            ← Voltar
        </button>

        <h2>Produtos de Limpeza</h2>

        <div class="lista">
    `;

    const produtos = [
        "Água Sanitária",
        "Detergente",
        "Sabão em Pó",
        "Desinfetante",
        "Álcool 70%",
        "Papel Higiênico"
    ];

    produtos.forEach(produto => {

        html += `
        <div class="item">

            <strong>${produto}</strong>

            <br><br>

            Estoque Atual:
            <input type="number" value="0">

            <br><br>

            Recebido:
            <input type="number" value="0">

            <br><br>

            Utilizado:
            <input type="number" value="0">

        </div>
        `;
    });

    html += `</div></div>`;

    app.innerHTML = html;
}

/* =========================
   UTENSÍLIOS
========================= */

function abrirUtensilios() {

    let html = `
    <div class="pagina">

        <button class="voltar" onclick="abrirEstoque()">
            ← Voltar
        </button>

        <h2>Utensílios</h2>

        <div class="lista">
    `;

    const itens = [
        "Pratos",
        "Copos",
        "Colheres",
        "Garfos",
        "Panelas",
        "Canecas"
    ];

    itens.forEach(item => {

        html += `
        <div class="item">

            <strong>${item}</strong>

            <br><br>

            Quantidade Atual:
            <input type="number" value="0">

            <br><br>

            Recebido:
            <input type="number" value="0">

            <br><br>

            Danificados:
            <input type="number" value="0">

        </div>
        `;
    });

    html += `</div></div>`;

    app.innerHTML = html;
}

/* =========================
   RELATÓRIO GERAL
========================= */

function abrirRelatorio() {

    app.innerHTML = `
    <div class="pagina">

        <button class="voltar" onclick="abrirEstoque()">
            ← Voltar
        </button>

        <h2>Relatório Geral do Estoque</h2>

        <div class="item">
            🍚 Alimentos cadastrados: 5
        </div>

        <div class="item">
            🧴 Produtos de limpeza cadastrados: 5
        </div>

        <div class="item">
            🍽️ Utensílios cadastrados: 5
        </div>

        <div class="item">
            📦 Total de itens em estoque: 1.922
        </div>

        <div class="item">
            📅 Última atualização: 01/06/2026
        </div>

    </div>
    `;
}