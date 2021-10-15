$(document).ready(function(){
    // 當發生次數選擇[無]時，將嚴重程度Disable
    $('input[type=radio]').click(function(){
        var type = $(this).attr('name').slice(0, 1);
        var seq = $(this).attr('name').slice(1);
        var value = $(this).val();
        
        if(type == 'F'){
            if(value == 1) $('input[name=S' + seq + ']').attr('disabled', true);
            else $('input[name=S' + seq + ']').attr('disabled', false);
        }
    });
});

function Calculate(){
    var msg = GetMsgOnCheck();
    
    if(msg != ""){
        alert(msg);
        return;
    }

    $('select').attr('disabled', true);
    $('input[type=radio]:not(:disabled)').addClass('locked');
    $('input[type=radio]').attr('disabled', true);

    GetOriginalScore();
    GetAssessment();
    AssessmentColorizing();
}

function Modify(){
    $('select').attr('disabled', false);
    $('.locked').attr('disabled', false);
    $('.locked').removeClass('locked');
}

function Clear(){
    location.reload();
}

function Explanation(){
    var url = "SAPB_Explanation.htm";
    var windowName = "popUp";
    var windowSize = "width=550,height=650";
    window.open(url, windowName, windowSize);
}

function GetMsgOnCheck(){
    var msg = "";
    
    $('#table_RP, #table_BC, #table_DM, #table_AX, #table_AH').each(function(){
        $(this).find('tbody tr').each(function(){
            var label = $(this).find('th').text();
            var no = ('00' + parseInt(label.split('.')[0])).slice(-2);
            var f = $('input:radio:checked[name="F' + no + '"]').val();
            
            if(!f){ // 如果發生次數沒有選取，則直接記下並返回
                msg += label + '\n';
                return;
            }
            
            if(parseInt(f) != 1){ // 如果發生次數 > 1 才檢查嚴重程度
                var s = $('input:radio:checked[name="S' + no + '"]').val();
                if(!s){ // 如果嚴重程度沒有填，則記下並返回
                    msg += label + '\n';
                    return;
                }
            }
        });
    });
    
    if(msg != "") 
        msg = "以下項目未點選：\n\n" + msg;

    return msg;
}

function GetOriginalScore(){
    var types = ["RP", "BC", "DM", "AX", "AH"];
    
    for(var i = 0; i < types.length; i++){
        var score = 0;
        $('#table_' + types[i] + ' tbody tr').each(function(){
            var label = $(this).find('th').text();
            var no = ('00' + parseInt(label.split('.')[0])).slice(-2);
            var f = $('input:radio:checked[name="F' + no + '"]').val();
            var s = $('input:radio:checked[name="S' + no + '"]').val();
            
            if(f == 1) score += 1;
            else score += parseInt(f) * parseInt(s);
        });
        
        $('#C_' + types[i]).text(score);
    }
}

function GetAssessment(){
    var types = ["RP", "BC", "DM", "AX", "AH"];
    var object = $('#ObjectSelect option:checked').val();

    for(var i = 0; i < types.length; i++){
        var score = $('#C_' + types[i]).text();
        var assessment = SAPB_Assessment(object, types[i], parseInt(score));
        
        switch(assessment){
            case 0: assessment = '正常'; break;
            case 1: assessment = '輕度'; break;
            case 2: assessment = '中度'; break;
            case 3: assessment = '重度'; break;
        }
        
        $('#S_' + types[i]).text(assessment);
    }
}

function AssessmentColorizing(){
    var types = ["RP", "BC", "DM", "AX", "AH"];

    for(var i = 0; i < types.length; i++){
        var assessment = $('#S_' + types[i]).text();
        
        $('#S_' + types[i]).removeClass();
        
        if(assessment == '重度')
            $('#S_' + types[i]).addClass('severe');
        else if(assessment == '中度')
            $('#S_' + types[i]).addClass('moderate');
        else if(assessment == '輕度')
            $('#S_' + types[i]).addClass('mild');
        else
            $('#S_' + types[i]).removeClass();
    }
}


