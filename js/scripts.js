// capturar evento de submit do formulario
const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputLargura = e.target.querySelector('#largura');
    const inputAltura = e.target.querySelector('#altura');
    const inputLarRev = e.target.querySelector('#larrev');
    const inputAltRev = e.target.querySelector('#altrev');

    const altPar = Number(inputAltura.value);
    const largPar = Number(inputLargura.value);
    const largRev = Number(inputLarRev.value);
    const altRev = Number(inputAltRev.value);

    if ((!altPar) || (!largPar)) {
        setResultado('Informação inválida. Verifique se digitou algum número válido nos campos.', false);
        return;
    }

    const areaPar = getAreaPar(altPar, largPar);
    const areaRev = getAreaRev(altRev, largRev);
    const qtdRev = getQtdRev(areaPar, areaRev);
    const areaSobra = getAreSobra(areaPar);

    const msg = `Serão necessárias ${qtdRev} peças do revestimento e a área recomendada para comprar (com 20% de sobra) é de ${areaSobra}m².`;
    setResultado(msg, true);

    //console.log('evento previnido.');
    //setResultado('ola mundo');

});

function getAreaPar(altPar, largPar) {
    const areaPar = altPar * largPar;
    return areaPar.toFixed(2);
};

function getAreaRev(altRev, largRev) {
    const areaRev = altRev * largRev;
    return areaRev.toFixed(2);
};

function getQtdRev(areaPar, areaRev) {
    const qtdRev = areaPar / areaRev;
    const qtdRevArredondado = Math.ceil(qtdRev);
    return qtdRevArredondado;

};

function getAreSobra(areaPar) {
    const areaSobra = areaPar * 1.2;
    return areaSobra.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
};

// função setresultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
};