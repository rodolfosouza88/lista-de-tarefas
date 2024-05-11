$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        let nomeTarefa = $('#input-nome-tarefa').val().trim();
        if (nomeTarefa !== '') {
            $('#lista-tarefas').append('<li>' + nomeTarefa + '</li>');
            $('#input-nome-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('concluida');
    });

});
