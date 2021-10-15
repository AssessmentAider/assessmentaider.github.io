$(document).ready(function(){
    InitQuestions();
    SetScoreVisible(false);
});

//=============================================================

// 初始所有問題及Table
function InitQuestions(){
    var identity = $('#IdentitySelect option:checked').val();
    var grade = $('#GradeSelect option:checked').val();
    
    // 將題目放到各部份的Table中
    for(var i = 0; i < SSBP_Data[identity][0].length; i++){
        var tbody_html = "";
        for(var j = 0; j < SSBP_Data[identity][0][i].length; j++){
            tbody_html += "<tr>";
            
            // th: 問題
            tbody_html += "<th>" + SSBP_Data[identity][0][i][j] + "</th>";
            
            // td: 選項 radio button
            if(i < SSBP_Data[identity][grade].length){ // 第 1 ~ 4 部分
                for(var k = 0; k < SSBP_Data[identity][grade][i][j].length; k++){
                    tbody_html += "<td><input type=\"radio\" name=\"P" + (i + 1) + ("00" + (j + 1)).slice(-2) + "\" value=\"" + SSBP_Data[identity][grade][i][j][k] + "\"></td>"
                }
            }
            else{ // 第 5 部分
                for(var k = 0; k < $('#table_' + (i + 1) + ' thead td:not(.score)').length; k++){
                    // 只有第一個是1，第二或第三都設為0
                    tbody_html += "<td><input type=\"radio\" name=\"P" + (i + 1) + ("00" + (j + 1)).slice(-2) + "\" value=\"" + (k == 0 ? 1 : 0) + "\"></td>"
                }
            }
            
            tbody_html += "</tr>";
        }
        $('#table_' + (i + 1) + ' tbody').html(tbody_html);
    }
    
    // 先將第5部分隱藏
    $('.part_5').hide();
    
    // 將所選的身分填到結果表格中
    $('#table_result tbody th').text($('#IdentitySelect option:checked').text());
}

// 設定分數欄位是否顯示
function SetScoreVisible(bIsVisible){
    if(bIsVisible){
        $('.score').show();
    }
    else{
        $('.score').hide();
    }
}

// 當身份或年段更新時會執行的函數
function Update(){
    UpdatePart5();
    UpdateQuestions();
    
    // 這邊暫時先取消更新值，以增加操作的流暢度
    // 更新值的時機改成在算前才執行
    //UpdateRadioValues();
    
    // 將所選的身分填到結果表格中
    $('#table_result tbody th').text($('#IdentitySelect option:checked').text());
}

// 更新第五部分Table
function UpdatePart5(){
    var identity = $('#IdentitySelect option:checked').val();
    var grade = $('#GradeSelect option:checked').val();
    
    if(grade != 3){
        $('.part_5').hide();
    }
    else{
        $('.part_5').show();
        $('#table_5 tr').each(function(){
            if(identity == 0){ // 教師: 是、否、不知道
                $(this).find('td:eq(2)').show();
            }
            else{ // 家長: 是、否
                $(this).find('td:eq(2)').hide();
            }
        });
    }
}

// 更新問題
function UpdateQuestions(){
    var identity = $('#IdentitySelect option:checked').val();
    var grade = $('#GradeSelect option:checked').val();
    
    for(var i = 0; i < SSBP_Data[identity][0].length; i++){
        for(var j = 0; j < SSBP_Data[identity][0][i].length; j++){
            $('#table_' + (i + 1) + ' tbody th:eq(' + j + ')').html(SSBP_Data[identity][0][i][j]);
        }
    }
}

// 更新Radio的值
function UpdateRadioValues(){
    var identity = $('#IdentitySelect option:checked').val();
    var grade = $('#GradeSelect option:checked').val();
    
    for(var i = 0; i < SSBP_Data[identity][grade].length; i++){
        for(var j = 0; j < SSBP_Data[identity][grade][i].length; j++){
            for(var k = 0; k < SSBP_Data[identity][grade][i][j].length; k++){
                $('input[name="P' + (i + 1) + ("00" + (j + 1)).slice(-2) + '"]:eq(' + k + ')').val(SSBP_Data[identity][grade][i][j][k]);
            }
        }
    }
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

    GetAssessment();
}

// 判斷是否全部都有填寫
function GetMsgOnCheck(){
    var msg = "";
    
    for(var i = 1; i <= 5; i++ ){
        if($('#table_' + i).is(":visible")){
            var msg_part = "";
            
            $('#table_' + i + ' tbody tr').each(function(){
                var label = $(this).find('th').text();
                var no = ('00' + parseInt(label.split('.')[0])).slice(-2);
                var p = $('input:radio:checked[name="P' + i + no + '"]').val();
                if(!p) msg_part += label + '\n';
            });
            
            if(msg_part != ""){
                msg += "\n第 " + i + " 部分：\n" + msg_part;
            }
        }
    }

    if(msg != ""){
        msg = "以下項目未點選：\n" + msg;
    }
    
    return msg;
}

function GetAssessment(){
    UpdateRadioValues();                  // 先更新每個Radio的值，之後才會正確
    SetScoreVisible(true);                // 顯示分數
    $('#table_result tbody td').text(''); // 先將結果清除
    
    AssessmentPart1();                    // 第一部份
    AssessmentPart2();                    // 第二部份
    AssessmentPart3();                    // 第三部份
    AssessmentPart4();                    // 第四部份
}

function AssessmentPart1(){
    // 注意力缺陷症狀：第1-9得6分以上
    var score1 = 0;
    for(var n = 1; n <= 9; n++){
        score1 += parseInt($('input[name=P1' + ('00' + n).slice(-2) + ']:checked').val());
    }
    if(score1 >= 6) $('#table_result tbody td:eq(0)').text('V');
    
    // 衝動/過動症狀
    var score2 = 0;
    for(var n = 10; n <= 18; n++){
        score2 += parseInt($('input[name=P1' + ('00' + n).slice(-2) + ']:checked').val());
    }
    if(score2 >= 6) $('#table_result tbody td:eq(1)').text('V');
    
    // 將分數標出來
    $('#score_1').html(score1 + "分<br>" + score2 + "分");
    
    // 混合型症狀：第1-9、10-18均得分在6分以上
    if(score1 >= 6 && score2 >= 6){
        $('#table_result tbody td:eq(0)').text('');
        $('#table_result tbody td:eq(1)').text('');
        $('#table_result tbody td:eq(2)').text('V');
    }
    
    // 其他：未符合上述兩種症狀而第1-18得分在7分以上
    if(score1 < 6 && score2 < 6 && score1 + score2 >= 7) $('#table_result tbody td:eq(3)').text('V');
    
    // 皆不符合：前四格都沒有打勾的
    for(var i = 0; i < 4; i++){
        if($('#table_result tbody td:eq(' + i + ')').text() == "V") return;
    }
    $('#table_result tbody td:eq(4)').text('V');
}

function AssessmentPart2(){
    var thresholds = [[22, 20, 20], [20, 19, 18]];
    var identity = $('#IdentitySelect option:checked').val();
    var grade = $('#GradeSelect option:checked').val() - 1;
    var threshold = thresholds[identity][grade];
    
    var score = 0;
    for(var n = 1; n <= 8; n++){
        score += parseInt($('input[name=P2' + ('00' + n).slice(-2) + ']:checked').val());
    }
    
    // 將分數標出來
    $('#score_2').html(score + "分");
    
    if(score >= threshold){
        $('#table_result tbody td:eq(5)').text('V');
    }
    else{
        $('#table_result tbody td:eq(6)').text('V');
    }
}

function AssessmentPart3(){
    var score = 0;
    var threshold = 4;
    for(var n = 1; n <= 8; n++){
        score += parseInt($('input[name=P3' + ('00' + n).slice(-2) + ']:checked').val());
    }
    
    // 將分數標出來
    $('#score_3').html(score + "分");
    
    if(score >= threshold){
        $('#table_result tbody td:eq(7)').text('V');
    }
    else{
        $('#table_result tbody td:eq(8)').text('V');
    }
}

function AssessmentPart4(){
    var grade = $('#GradeSelect option:checked').val();
    
    var score = 0;
    var threshold = 3;
    
    for(var n = 1; n <= 15; n++){
        var score_1 = parseInt($('input[name=P4' + ('00' + n).slice(-2) + ']:checked').val());
        var score_2 = 1;
        
        if(grade == 3 && n >= 13 && n <= 15){
            score_2 = parseInt($('input[name=P5' + ('00' + (n - 12)).slice(-2) + ']:checked').val());
        }
        
        score += score_1 * score_2;
    }
    
    // 將分數標出來
    $('#score_4').html(score + "分");
    
    if(score >= threshold){
        $('#table_result tbody td:eq(9)').text('V');
    }
    else{
        $('#table_result tbody td:eq(10)').text('V');
    }
}

//=============================================================

function Modify(){
    $('select').attr('disabled', false);
    $('input[type=radio]').attr('disabled', false);
    SetScoreVisible(false);
}

function Clear(){
    location.reload();
}

function Explanation(){
    var url = "SSBP_Explanation.htm";
    var windowName = "popUp";
    var windowSize = "width=600,height=390";
    window.open(url, windowName, windowSize);
}
