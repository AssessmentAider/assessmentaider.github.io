// ¶Ã¼Æ¿ï¨úRadio
function SetRadioRandomChecked(){
    $('tr:has(input:radio)').each(function(){
        var n = $(this).find('input:radio:visible').length;
        var r = parseInt(Math.random() * n);
        $(this).find('input:radio:eq(' + r + ')').attr('checked', true);
    });
}