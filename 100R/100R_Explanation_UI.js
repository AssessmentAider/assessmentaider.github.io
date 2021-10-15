$(document).ready(function(){
    RenderTable();
});

function RenderTable(){
    var $explanation_table = $("#explanation_table");
    var rows_html = "";
    
    for(var i = 0; i < R100_Data.ResultSettings.length; i++) {
        var setting = R100_Data.ResultSettings[i];
        
        var totalCount = 0;
        var totalScore = 0;
        var questionNumbers = "";
        for(var n in setting.scores) {
            if(setting.scores.hasOwnProperty(n)) {
                totalCount++;
                totalScore += setting.scores[n];
                
                if(questionNumbers != "") {
                    questionNumbers += ", ";
                }
                if(setting.scores[n] == 1) {
                    questionNumbers += n;
                }
                else {
                    questionNumbers += "<u>" + n + "</u>";
                }
            }
        }
        
        var row_html = '<tr>';
        row_html += '<td>' + setting.title + '</td>';
        row_html += '<td class="left">' + questionNumbers + '</td>';
        row_html += '<td>' + totalCount + '</td>';
        row_html += '<td>' + totalScore + '</td>';
        row_html += '<td>' + (setting.threshold == null ? '' : setting.threshold) + '</td>';
        row_html += '</tr>';
        
        rows_html += row_html;
    }
        
    var table_html = '<tbody>';
    table_html += rows_html;
    table_html += '</tbody>';
    
    $explanation_table.append(table_html);
}
