const content_html = `<div class="wrapper-icone__test">
					<p class="text-new__test">Novo</p>
					<div class="circle-promotion">
						<p>poupe até</p>
						<h4>25<span>%</span></h4>
					</div>
					<div _ngcontent-gyn-c134="" class="small-icon__test"><i _ngcontent-gyn-c134="" class="icon-Bop-007"></i></div>
				</div>
				<div class="wrapper-text__test">
					<div class="title-wrapper__test">
						<h3>Parabéns sua empresa está elegivel</h3>
						<p>para o programa de Energia Solar EDP</p>
					</div>
					<div class="wrapper-button">
						<p>Sem ivestimento inicial</p>

						<button class="cta-button__test">Pedir Contato</button>
					</div>
				</div>`;

const verify = setInterval(() => {
	console.log("Verifucando...");
	if ($(".opportunities-body.ng-star-inserted").children().length > 0) {
		console.log("Carregado");

		document
			.querySelectorAll(".opportunities-item.ng-star-inserted")
			.forEach((element, i) => {
				if (
					$(element).find(".title").text() === "Energia Solar" ||
					$(element).find(".title").text() === "Solar Fotovoltaico"
				) {
					console.log("Energia Solar encontrado");

					clearInterval(verify);

					const clone = $(element).clone(true);
					const elJquery = $(element);
					elJquery.hide();

					clone.html(content_html);
					clone.removeClass("opportunities-item ng-star-inserted");
					clone.addClass("container-banner__test");

					clone.find(".wrapper-button").on("click", () => {
						elJquery.trigger("click");
					});

					$(".opportunities-body.ng-star-inserted").prepend(clone);
				}
			});
	}
}, 200);
