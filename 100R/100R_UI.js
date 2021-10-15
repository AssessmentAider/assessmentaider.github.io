$(document).ready(function(){
    RenderQuestionTable();
    RenderResultTable();
});

function RenderQuestionTable(){
    var $question_wrapper = $("#question_wrapper");
    
    for(var c = 0; c < R100_Data.Categories.length; c++) {
        var category = R100_Data.Categories[c];
        $question_wrapper.append('<p>' + (c + 1) + '. ' + category.title + '</p>');
        
        var rows_html = "";
        for(var i = 0; i < category.items.length; i++) {
            var item = category.items[i];
            var row_html = '<tr>';
            row_html += '<td class="c"><input type="checkbox" name="N' + item.n + '" id="N' + item.n + '" /></td>';
            row_html += '<td class="n">' + item.n + '</td>';
            row_html += '<td class="q">' + item.q + '</td>';
            row_html += '</tr>';
            
            rows_html += row_html;
        }
        
        var table_html = '<table cellspacing="0" cellpadding="2" id="" class="common list">';
        table_html += '<tbody>';
        table_html += rows_html;
        table_html += '</tbody>';
        table_html += '</table>';
        
        $question_wrapper.append(table_html);
    }
}

function RenderResultTable(){
    var $table_result = $("#table_result");
    var rows_html = "";
    
    for(var i = 0; i < R100_Data.ResultSettings.length; i++) {
        var setting = R100_Data.ResultSettings[i];
        
        var totalCount = 0;
        var totalScore = 0;
        for(var n in setting.scores) {
            if(setting.scores.hasOwnProperty(n)) {
                totalCount++;
                totalScore += setting.scores[n];
            }
        }
        
        var row_html = '<tr>';
        row_html += '<th>' + setting.title + '</th>';
        row_html += '<td>' + totalCount + '</td>';
        row_html += '<td>' + totalScore + '</td>';
        row_html += '<td class="s" id="S' + i + '"></td>';
        row_html += '<td>' + (setting.threshold == null ? "" : setting.threshold) + '</td>';
        row_html += '</tr>';
        
        rows_html += row_html;
    }
        
    var table_html = '<tbody>';
    table_html += rows_html;
    table_html += '</tbody>';
    
    $table_result.append(table_html);
}

function Calculate(){
    $('input[type=checkbox]').attr('disabled', 'disabled');
    
    for(var i = 0; i < R100_Data.ResultSettings.length; i++) {
        var setting = R100_Data.ResultSettings[i];

        var score = 0;
        for(var n in setting.scores) {
            if(setting.scores.hasOwnProperty(n)) {
                if($('#N' + n).prop("checked")) {
                    score += setting.scores[n];
                }
            }
        }
        
        $("#S" + i).text(score);
        
        if(setting.threshold != null && score >= setting.threshold) {
            $("#S" + i).parents("tr").addClass("danger");
        }
        else {
            $("#S" + i).parents("tr").removeClass("danger");
        }
    }
}

function Modify(){
    $('input[type=checkbox]').removeAttr('disabled');
    $('#table_result .s').text("");
}

function Clear(){
    location.reload();
}

function Explanation(){
    var url = "100R_Explanation.htm";
    var windowName = "popUp";
    var windowSize = "width=825,height=485";
    window.open(url, windowName, windowSize);
}
