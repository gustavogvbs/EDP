const content_html = `
			<div class="popup_container__test" id="popup-energia-solar">
				<div class="header__popup">
					<span class="text_header__popup">Plantão Solar</span>
					<button class="button_close__popup" id="close-popup">
						<svg
							width="17"
							height="17"
							viewBox="0 0 17 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M16 1L1 16" stroke="currentColor" />
							<path d="M16 1L1 16" stroke="currentColor" />
							<path d="M0.999999 0.999999L16 16" stroke="currentColor" />
							<path d="M0.999999 0.999999L16 16" stroke="currentColor" />
						</svg>
					</button>
				</div>
				<div class="content__popup">
					<span class="info_content__popup">Temos um pré-projeto</span>
					<h3 class="text_content__popup">
						Sua empresa pode economizar até 30% na tarifa de energia
					</h3>

					<button class="btn_primary__popup" id="next-btn-popup">Receba sua simulação agora</button>
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
					$(element).hide();
					clearInterval(verify);

					$("body").append(content_html);

					const functionDefault = document
						.querySelectorAll(".opportunities-item.ng-star-inserted")[2]
						.eventListeners()[0];

					$("#next-btn-popup").on("click", functionDefault);
					$("#close-popup").on("click", () => {
						$("#popup-energia-solar").addClass("hidden");
					});
				}
			});
	}
}, 200);
