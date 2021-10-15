$(document).ready(function(){
    Initial();
});

//=============================================================

// 初始化
function Initial(){
    InitTable();
    Update();
}

// 初始表格框架
function InitTable(){
    var nRows = 40;
    var nCols = 4;
    
    var tbody_html = "";
    
    for(var i = 0; i < nRows; i++){
        tbody_html += "<tr>";
        tbody_html += "<th></th>";
        for(var j = 0; j < nCols; j++){
            tbody_html += "<td>";
            tbody_html += "<input type=\"radio\" name=\"P" + ("00" + (i + 1)).slice(-2) + "\" value=\"" + (nCols - 1 - j) + "\" id=\"D" + ("00" + (i + 1)).slice(-2) + j + "\">";
            tbody_html += "<label for=\"D" + ("00" + (i + 1)).slice(-2) + j + "\"></label>";
            tbody_html += "</td>";
        }
        tbody_html += "</tr>";
    }
    
    $('#table_1 tbody').html(tbody_html);
    $('#table_1 thead td:eq(1)').attr('colspan', nCols);
}

// 根據所選的身份取得問題資料
function GetQuestionData(){
    var identity = $('#IdentitySelect option:checked').val();
    
    var Data;
    if(identity == 0) Data = SAIT_Data.Question.Teacher;
    else Data = SAIT_Data.Question.Parent;
    
    return Data;
}

// 根據所選的身份取得類型資料
function GetTypeData(){
    var identity = $('#IdentitySelect option:checked').val();

    var Data;
    if(identity == 0) Data = SAIT_Data.Type.Teacher;
    else Data = SAIT_Data.Type.Parent;
    
    return Data;
}

// 根據所選的身份取得分量表順序
function GetTypeSequence(){
    var Type = GetTypeData();
    var types_seq = [];

    for(var i = 0; i < Type.category.length; i++){
        for(var j = 1; j < Type.category[i].length; j++){
            types_seq.push(Type.category[i][j]);
        }
    }
    
    return types_seq;
}

// 設定文字
function SetLabels(){
    var Data = GetQuestionData();
    
    for(var i = 0; i < Data.Main.length; i++){
        var tr = $('#table_1 tbody tr:eq(' + i + ')');
        var label = (i + 1) + ". " + Data.Main[i][0] + "......" + Data.Main[i][1];
        tr.find('th').html(label);
        for(var j = 0; j < Data.Main[i].length - 3; j++){
            tr.find('label:eq(' + j + ')').text(Data.OptName[Data.Main[i][j + 3]]);
        }
    }
}

// 設定顯示或隱藏
function SetVisiblity(){
    var Data = GetQuestionData();
    var Data = GetQuestionData();
    
    var Columns = [3, 4];
    var identity = $('#IdentitySelect option:checked').val();
    var nColumn = Columns[identity];
    
    var trs = $('#table_1 tbody tr');
    trs.each(function(){
        var index_tr = trs.index($(this));
        
        // 隱藏下方
        if(index_tr < Data.Main.length) $(this).show();
        else $(this).hide();
        
        // 隱藏右邊
        var tds = $(this).find('td');
        tds.each(function(){
            var index_td = tds.index($(this));
            if(index_td < nColumn) $(this).show();
            else $(this).hide();
        });
    });
}

// 設定結果表格的文字
function SetResultLabels(){
    var Data = GetTypeData();
    var type_seq = GetTypeSequence();
    
    $('#table_result thead tr:eq(0) td:not(.anytime)').remove();
    $('#table_result thead tr:eq(0) th:eq(0)').attr('colspan', '1');
    
    var html_head = "";
    for(var i = 0; i < Data.category.length; i++){
        html_head += "<td colspan=\"" + (Data.category[i].length - 1) + "\">" + Data.category[i][0] + "</td>";
    }
    $('#table_result thead tr:eq(0) th:eq(0)').after(html_head);
    
    for(var i = 0; i < type_seq.length; i++){
        $('#table_result thead tr:eq(1) td:eq(' + i + ')').html(Data.cname[type_seq[i]]);
        $('#table_result_2 tbody tr:eq(' + i + ') th').html(Data.ename[i]);
    }
}

// 當身份更新時會執行的函數
function Update(){
    SetLabels();
    SetVisiblity();
    SetResultLabels();
}

//=============================================================

function Calculate(){
    var msg = GetMsgOnCheck();
    
    if(msg != ""){
        alert(msg);
        return;
    }

    $('select').attr('disabled', true);
    $('input[type=radio]').attr('disabled', true);
    
    GetOriginalScore();
    GetPercentageScore();
    CheckIsLessThan25Percent();
    GetStandardScore();
    GetAdaptQuotientScore();
}

// 判斷是否全部都有填寫
function GetMsgOnCheck(){
    var msg = "";
    
    $('#table_1 tbody tr:visible').each(function(){
        var label = $(this).find('th').text();
        var no = ('00' + parseInt(label.split('.')[0])).slice(-2);
        var p = $('input:radio:checked:visible[name="P' + no + '"]').val();
        if(!p) msg += label + '\n';
    });

    if(msg != ""){
        msg = "以下項目未點選：\n\n" + msg;
    }
    
    return msg;
}

// 計算原始成績
function GetOriginalScore(){
    var Question = GetQuestionData();
    var type_seq = GetTypeSequence();
    
    var sums = [];
    for(var i = 0; i < type_seq.length; i++) sums.push(0);
    
    // 加總
    for(var i = 0; i < Question.Main.length; i++){
        var t = Question.Main[i][2];
        sums[t] += parseInt($('input[name=P' + ('00' + (i + 1)).slice(-2) + ']:checked').val());
    }
    
    // 顯示原始分數
    for(var i = 0; i < type_seq.length; i++){
        $('#table_result tbody tr:eq(0) td:eq(' + type_seq[i] + ')').text(sums[i]);
        $('#table_result_2 tbody tr:eq(' + i + ') td:eq(0)').text(sums[i]);
    }
    
    // 顯示原始總分
    var sum = 0;
    for(var i = 0; i < sums.length; i++) sum += sums[i];
    $('#table_result tbody tr:eq(0) td:eq(5)').text(sum);
    $('#table_result_2 tbody tr:eq(5) td:eq(0)').text(sum);
}

// 取得百分等級
function GetPercentageScore(){
    var identity = $('#IdentitySelect option:checked').val();
    var gender = $('#GenderSelect option:checked').val();
    var grade = $('#GradeSelect option:checked').val();
    var type_seq = GetTypeSequence();
    
    // 各分量
    for(var i = 0; i < type_seq.length; i++){
        var score_org = parseInt($('#table_result tbody tr:eq(0) td:eq(' + type_seq[i] + ')').text());
        var score_percentage = GetPercentage(identity, gender, grade, i, score_org);
        $('#table_result tbody tr:eq(1) td:eq(' + type_seq[i] + ')').text(score_percentage);
        $('#table_result_2 tbody tr:eq(' + i + ') td:eq(2)').text(score_percentage);
    }
    
    // 總分
    var total_org = parseInt($('#table_result tbody tr:eq(0) td:eq(5)').text());
    var total_percentage = GetPercentage(identity, gender, grade, 5, total_org);
    $('#table_result tbody tr:eq(1) td:eq(5)').text(total_percentage);
    $('#table_result_2 tbody tr:eq(5) td:eq(2)').text(total_percentage);
}

// 判斷各分項百分等級是否小於25%
function CheckIsLessThan25Percent(){
    var tds = $('#table_result tbody tr:eq(1) td');
    tds.each(function(){
        var index = tds.index($(this));
        var td = $('#table_result tbody tr:eq(2) td:eq(' + index + ')');
        if(parseInt($(this).text()) < 25){
            td.text('V');
        }
        else{
            td.text('');
        }
    });
}

// 取得標準分數
function GetStandardScore(){
    var identity = $('#IdentitySelect option:checked').val();
    var gender = $('#GenderSelect option:checked').val();
    var grade = $('#GradeSelect option:checked').val();
    var type_data = GetTypeData();
    
    var sum_std = 0;
    var sum_negative = 0;
    
    // 各分量
    for(var i = 0; i < type_data.ename.length; i++){
        var score_org = parseInt($('#table_result_2 tbody tr:eq(' + i + ') td:eq(0)').text());
        var score_std = GetStdScore(identity, gender, grade, i, score_org);
        
        if(score_std > 0){
            $('#table_result_2 tbody tr:eq(' + i + ') td:eq(1)').text(score_std);
            sum_std += score_std;
        }
        else{
            score_std *= (-1);
            sum_negative += score_std;
            $('#table_result_2 tbody tr:eq(' + i + ') td:eq(1)').text('< ' + score_std);
            sum_std += score_std;
        }
    }
    
    // 總分
    if(sum_negative > 0) sum_std = (sum_std - sum_negative) + " ~ " + sum_std;
    $('#table_result_2 tbody tr:eq(5) td:eq(1)').text(sum_std);
}

// 取得適應商數
function GetAdaptQuotientScore(){
    var identity = $('#IdentitySelect option:checked').val();
    var score_text = $('#table_result_2 tbody tr:eq(5) td:eq(1)').text();
    if(score_text.indexOf("~") > 0) score_text = score_text.split("~")[1];
    var quotient = GetAdaptQuotient(identity, parseInt(score_text));
    $('.AdaptabilityQuotient').text(quotient);
}

//=============================================================

function Modify(){
    $('select').attr('disabled', false);
    $('input[type=radio]').attr('disabled', false);
    $('#table_result tbody td, #table_result_2 tbody td').text("");
}

function Clear(){
    location.reload();
}
/*
function Explanation(){
    var url = "SAIT_Explanation.htm";
    var windowName = "popUp";
    var windowSize = "width=600,height=390";
    window.open(url, windowName, windowSize);
}
*/
