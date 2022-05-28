$("img").attr("data-bs-toggle", "modal");
$("img").attr("data-bs-target", "#pop");

$(".modal").on("show.bs.modal", function (event) {
    let imageClicked = $(event.relatedTarget);
    let srcAttribute = imageClicked.attr("src");
    let altAttribute = imageClicked.attr("alt");
    $("#modalImage").attr("src", srcAttribute);
    $("#modalImage").attr("alt", altAttribute);
})

