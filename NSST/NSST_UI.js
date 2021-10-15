function Calculate(){
    var msg = GetMsgOnCheck();
    
    if(msg != ""){
        alert(msg);
        return;
    }

    $('select').attr('disabled', true);
    $('input[type=text]').attr('disabled', true);
    
    GetResults();
    Colorizing();
}

function Modify(){
    $('select').attr('disabled', false);
    $('input[type=text]').attr('disabled', false);
}

function Clear(){
    location.reload();
}

function Explanation(){
    var url = "NSST_Explanation.htm";
    var windowName = "popUp";
    var windowSize = "width=550,height=400";
    window.open(url, windowName, windowSize);
}

function GetMsgOnCheck(){
    var msg = "";

    $('#table1 tbody tr').each(function(){
        var id = $(this).attr('id');
        var text = $(this).find('th').text();
        if(!$.isNumeric($('#' + id + '_Score').val())){
            msg += text + '\n';
        }
    });
    
    if(msg != "") 
        msg = "請填寫以下分測驗原始分數：\n\n" + msg;
        
    return msg;
}

function GetResults(){
    $('#table1 tbody tr').each(function(){
        var type = $(this).attr('id');
        var grade = $('#TableSelect option:checked').val();
        var score = $('#' + type + '_Score').val();
        var result = NSST_Scoring(type, grade, score);
        $('#' + type + '_Percentile').text(result.percentile);
        $('#' + type + '_Explain').text(result.explain);
    });
}

function Colorizing(){
    $('#table1 tbody tr').each(function(){
        var type = $(this).attr('id');
        var explain = $('#' + type + '_Explain').text();
        var td = $('#' + type + '_Explain');
        
        $(td).removeClass();
        
        for(var i = 0; i < NSST_Tables.ExplainType.length; i++){
            if(explain == NSST_Tables.ExplainType[i]){
                switch(i){
                    case 2: $(td).addClass('danger'); break;
                    case 1: $(td).addClass('suspected'); break;
                    case 0: $(td).removeClass(); break;
                    default: $(td).removeClass(); break;
                }
            }
        }
    });
}
