$(document).ready(function(){
    PrepareForm();
    $('input[type=text]').live('keyup', Compute);
    $('#ObjectSelect').change(UpdateEnablity).trigger('change');
});

function PrepareForm(){
    var tbody = $('#tbMain tbody');
    tbody.html("");
    for(var i = 0; i < BMCT_Data.Items.length; i++){
        var item = BMCT_Data.Items[i];
        var html = "";
        html += "<th>" + item.title + "</th>";
        html += "<td>" + item.count + "</td>";
        html += "<td><input type='text' id='a" + i + "' /></td>";
        html += "<td><input type='text' id='b" + i + "' /></td>";
        html += "<td id='c" + i + "'></td>";
        html += "<td id='d" + i + "'></td>";
        html = "<tr>" + html + "</tr>";
        tbody.append(html);
    }
}

function UpdateEnablity() {
    var val = $('#ObjectSelect').val();
    var maxItemIndex = BMCT_Data.GradeMaxItemIndex[val];
    var $trs = $('#tbMain tbody tr');
    $trs.each(function(){
        var $tr = $(this);
        var index = $trs.index($tr);
        if(index <= maxItemIndex) {
            $tr.removeClass('disabled');
        }
        else {
            $tr.addClass('disabled');
        }
        
        if($tr.hasClass('disabled')) {
            $tr.find('input').attr('disabled', 'disabled');
        }
        else {
            $tr.find('input').removeAttr('disabled');
        }
    });
}

function Compute(){
    for(var i = 0; i < BMCT_Data.Items.length; i++){
        var item = BMCT_Data.Items[i];
        
        var a = $.trim($('#a' + i).val());
        if(a === "" || !isNumber(a)) a = null;
        else a = parseInt(a);
        
        var b = $.trim($('#b' + i).val());
        if(b === "" || !isNumber(b)) b = null;
        else b = parseInt(b);
        
        if(b == null) $('#c' + i).text("");
        else $('#c' + i + '').text(fixedRound(b / item.count, 2));
        
        if(a == null || b == null) $('#d' + i).text("");
        else $('#d' + i + '').text(fixedRound(a == 0 ? 0 : b / a, 2));
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function round(val, digit) {
    digit = parseInt(digit | 0);
    var powerValue = parseInt(Math.pow(10, digit));
    return Math.round(val * powerValue) / powerValue;
}

function fixedRound(val, digit) {
    return round(val, digit).toFixed(digit);
}
