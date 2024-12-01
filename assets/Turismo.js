var lugaresEscocia = {
    'Loch Ness': 'https://www.visitinvernesslochness.com/',
    'Ilha de Skye': 'https://www.isleofskye.com/',
    'Ben Nevis': 'https://visitfortwilliam.co.uk/',  
    'Castelo de Eilean Donan': 'https://www.eileandonancastle.com/',
    'Parque Nacional Cairngorms': 'https://www.cairngorms.co.uk/'
};

document.getElementById('sugestaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sugestao = document.getElementById('sugestao').value;

    var mensagemDiv = document.getElementById('mensagem');
    var linkSugerido = lugaresEscocia[sugestao];

    if (linkSugerido) {
       
        mensagemDiv.innerHTML = `
            <p>Obrigado, ${nome}, pela sua sugestão!</p>
            <p>Caso você tenha sugerido um lugar, aqui está o link:</p>
            <p><a href="${linkSugerido}" target="_blank">${sugestao}</a></p>
        `;
    } else {
        
        mensagemDiv.innerHTML = `
            <p>Obrigado, ${nome}, pela sua sugestão!</p>
            <p>Em breve, ela será analisada.</p>
        `;
    }
});
