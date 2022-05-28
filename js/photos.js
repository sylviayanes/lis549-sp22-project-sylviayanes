$("img").attr("data-bs-toggle", "modal");
$("img").attr("data-bs-target", "#pop");

$(".modal").on("show.bs.modal", function (event) {
    let imageClicked = $(event.relatedTarget);
    $("#modalImage").attr("src", imageClicked.attr("src"));
    $("#modalImage").attr("alt", imageClicked.attr("alt"));
})

