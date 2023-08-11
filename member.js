function skillsMember() {
    var id = $("#member").val();
    var url = "/skills/member/" + id;
    $.get(url, function (data) {
        $("#skills").html(data);
    });
}