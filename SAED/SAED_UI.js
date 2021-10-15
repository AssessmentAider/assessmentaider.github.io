function Calculate(){
    var msg = GetMsgOnCheck();
    
    if(msg != ""){
        alert(msg);
        return;
    }

    $('select').attr('disabled', true);
    $('input[type=radio]').attr('disabled', true);

    GetOriginalScore();
    GetEachScore();
    GetQuotientScore();
    ScoreColorizing();
}

function Modify(){
    $('select').attr('disabled', false);
    $('input[type=radio]').attr('disabled', false);
}

function Clear(){
    location.reload();
}

function Explanation(){
    var url = "SAED_Explanation.htm";
    var windowName = "popUp";
    var windowSize = "width=550,height=200";
    window.open(url, windowName, windowSize);
}

function GetMsgOnCheck(){
    var msg = "";
    $('#table1 tbody tr, #table2 tbody tr').each(function(){
        var text = $(this).find('th').text();
        if($(this).find('td input:checked').length == 0){
            msg += text + '\n';
        }
    });
    
    if(msg != "") 
        msg = "以下項目未點選：\n\n" + msg;
        
    return msg;
}

function GetOriginalScore(){
    $('#table_result tbody td').text('');

    $('#table1 tbody tr').each(function(){
        var score = $(this).find('input:checked').val();
        var type = "OC";
        
        if(score == "") score = 0;
        score = parseInt(score);

        $('#table_result tbody tr:contains("(' + type + ')")').each(function(){
            var val = $(this).find('td:eq(0)').text();
            if(val == "") val = 0;
            val = parseInt(val);
            $(this).find('td:eq(0)').text(val + score);
        });
    });
    
    $('#table2 tbody tr').each(function(){
        var score = $(this).find('input:checked').val();
        var type = $(this).find('td:eq(4)').text();
        
        if(score == "") score = 0;
        score = parseInt(score);

        $('#table_result tbody tr:contains("(' + type + ')")').each(function(){
            var val = $(this).find('td:eq(0)').text();
            if(val == "") val = 0;
            val = parseInt(val);
            $(this).find('td:eq(0)').text(val + score);
        });
    });
}

function GetEachScore(){
    var table = $('#TableSelect option:checked').val();
    var types = ["OC", "IL", "RP", "IB", "UD", "PF", "SM"];
    
    for(var i = 0; i < types.length; i++){
        $('#table_result tbody tr:contains("(' + types[i] + ')")').each(function(){
            var val = $(this).find('td:eq(0)').text();
            var result = SAED_NormalScoring(table, types[i], parseInt(val));
            $(this).find('td:eq(1)').text(result.percentile);
            $(this).find('td:eq(2)').text(result.std_score);
        });
    }
}

function GetQuotientScore(){
    var table = $('#TableSelect option:checked').val();
    var types = ["IL", "RP", "IB", "UD", "PF"];
    var total = 0;

    for(var i = 0; i < types.length; i++){
        $('#table_result tbody tr:contains("(' + types[i] + ')")').each(function(){
            var val = parseInt($(this).find('td:eq(2)').text());
            total += val;
        });
    }

    var result = SAED_QuotientScoring(parseInt(total));
    $('#table_result tbody tr:has(th[colspan=3]) td').text(total);
    $('#table_result tbody tr:has(th[colspan=2]) td:eq(0)').text(result.percentile);
    $('#table_result tbody tr:has(th[colspan=2]) td:eq(1)').text(result.quotient);
}

function ScoreColorizing(){
    ColorizeEachScore();
    ColorizeQuotientScore();
}

function ColorizeEachScore(){
    var types = ["IL", "RP", "IB", "UD", "PF", "SM"];
    
    for(var i = 0; i < types.length; i++){
        $('#table_result tbody tr:contains("(' + types[i] + ')")').each(function(){
            var text = $(this).find('td:eq(1)').text();
            
            $(this).find('td:eq(1)').removeClass();

            if(text.indexOf(">99") >= 0 || parseInt(text) >= 95){
                $(this).find('td:eq(1)').addClass('danger');
            }
            else if(parseInt(text) >= 91){
                $(this).find('td:eq(1)').addClass('suspected');
            }
            else{
                $(this).find('td:eq(1)').removeClass();
            }
        });
    }
}

function ColorizeQuotientScore(){
    var td = $('#table_result tbody tr:has(th[colspan=2]) td:eq(1)');
    var text = $(td).text();
    
    $(td).removeClass();
    
    if(text.indexOf(">99") >= 0 || parseInt(text) >= 135){
        $(td).addClass('danger');
    }
    else if(parseInt(text) >= 120){
        $(td).addClass('suspected');
    }
    else{
        $(td).removeClass();
    }
}
