const btnNotas = $("#notas-legais");
const wrapperNotas = $("#wrapper-notas-legais");

btnNotas.on("click", (e) => {
  const h = wrapperNotas.find(".wrapper").height(),
    t = $(e.currentTarget),
    s = t.attr("data-nota");

  if (s == "close") {
    wrapperNotas.css("height", h);
    t.attr("data-nota", "open");
  } else if (s == "open") {
    wrapperNotas.css("height", 0);
    t.attr("data-nota", "close");
  }
});

(function () {
  const h = wrapperNotas.find(".wrapper").height();
  wrapperNotas.css("height", h);
})();
