function abrirDirecao(){

document.getElementById("conteudo").innerHTML = `

<div class="abas">

<button onclick="mostrarAlunos()">
<i class="fas fa-user-graduate"></i>
 Alunos
</button>

<button onclick="mostrarProfessores()">
<i class="fas fa-chalkboard-user"></i>
 Professores
</button>

<button onclick="mostrarNotas()">
<i class="fas fa-book"></i>
 Notas
</button>

</div>

<div id="painel"></div>

`;

}

function mostrarAlunos(){

const turmas = [
"61","62",
"71","72",
"81","82",
"91","92",
"1EM","2EM","3EM"
];

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

html += `
</div>
`;

document.getElementById("painel").innerHTML = html;

}

function abrirTurma(turma){

let html = `
<div class="lista">

<h2>Turma ${turma}</h2>
`;

for(let i=1;i<=20;i++){

html += `

<div class="item">

<b>Aluno ${i}</b>

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

html += `</div>`;

document.getElementById("painel").innerHTML = html;

}

function mostrarProfessores(){

let html = `
<div class="lista">
<h2>Professores</h2>
`;

for(let i=1;i<=20;i++){

html += `

<div class="item">

<b>Professor ${i}</b>

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

html += `</div>`;

document.getElementById("painel").innerHTML = html;

}

function mostrarNotas(){

let html = `
<div class="lista">

<h2>Notas</h2>

<div class="item">
Aluno 1 - Matemática: 8,5
</div>

<div class="item">
Aluno 2 - Português: 9,0
</div>

<div class="item">
Aluno 3 - História: 7,5
</div>

</div>
`;

document.getElementById("painel").innerHTML = html;

}