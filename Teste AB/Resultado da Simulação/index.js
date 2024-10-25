const htmlHero = `<div class="theme_marineBlue__electricGreen-std hero-result__test">
			<div class="wrapper-hero-result__test">
				<div class="wrapper-content__test">
					<p class="text-hero__test">
						<span> Resultado da simulação </span> Energia Solar EDP
					</p>
					<h2 class="title-hero__test">
						Pode poupar até <br />
						<span>690€</span> /ano*
					</h2>
					<div class="container-info-hero__test">
						<div class="wrapper-info-hero__test">
							<p class="text-info__test">Painéis</p>
							<p class="text-info-green__test" id="paineis-result">-</p>
							<div class="image-info__test">
								<svg
									width="54"
									height="47"
									viewBox="0 0 54 47"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M29 17.5C29 23.8513 23.8513 29 17.5 29C11.1487 29 6 23.8513 6 17.5C6 11.1487 11.1487 6 17.5 6C23.8513 6 29 11.1487 29 17.5Z"
										stroke="#28FF52"
										stroke-width="2"
									/>
									<line
										x1="1.84827"
										y1="20.3913"
										x2="5.77783"
										y2="19.6439"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="1.9436"
										y1="14.1683"
										x2="5.8946"
										y2="14.7925"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="4.18645"
										y1="8.52213"
										x2="7.51549"
										y2="10.7397"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="8.40948"
										y1="4.41557"
										x2="10.9973"
										y2="7.46567"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="14.2015"
										y1="1.74589"
										x2="15.1128"
										y2="5.64071"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="20.1257"
										y1="1.65027"
										x2="19.3168"
										y2="5.56762"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="25.5054"
										y1="3.75593"
										x2="23.4142"
										y2="7.16572"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="30.3892"
										y1="7.41214"
										x2="27.4117"
										y2="10.0831"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="33.0218"
										y1="12.2947"
										x2="29.2944"
										y2="13.746"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="4.19177"
										y1="26.1517"
										x2="7.44394"
										y2="23.8228"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<line
										x1="8.4408"
										y1="30.7491"
										x2="10.8367"
										y2="27.5461"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
									/>
									<path
										d="M14.75 33L18 20H29.25M14.75 33L11.5 46H23M14.75 33H49M49 33L46 46H34.5M49 33L52 20H40.5M40.5 20L34.5 46M40.5 20H29.25M34.5 46H23M23 46L29.25 20"
										stroke="#28FF52"
										stroke-width="2"
									/>
								</svg>
							</div>
						</div>

						<div class="wrapper-info-hero__test">
							<p class="text-info__test">Redução consumo da rede</p>
							<p
								class="text-info-green__test"
								id="reducao-consumo-da-rede-result"
							>
								-
							</p>
							<div class="image-info__test">
								<svg
									width="22"
									height="23"
									viewBox="0 0 22 23"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.3613 7.16406C20.3613 9.09766 20 10.9043 19.2773 12.584C18.5547 14.2637 17.5635 15.7334 16.3037 16.9932C15.0439 18.2529 13.5742 19.2539 11.8945 19.9961C10.1953 20.7188 8.38867 21.0801 6.47461 21.0801H2.05078L11.2207 11.9102L10.3711 11.0605L1.20117 20.2305V15.8066C1.20117 13.8926 1.57227 12.0859 2.31445 10.3867C3.03711 8.70703 4.02832 7.2373 5.28809 5.97754C6.54785 4.71777 8.01758 3.72656 9.69727 3.00391C11.3965 2.26172 13.2031 1.89062 15.1172 1.89062H20.3613V7.16406ZM15.1172 0.689453C13.0273 0.689453 11.0645 1.08984 9.22852 1.89062C7.39258 2.69141 5.79102 3.77539 4.42383 5.14258C3.05664 6.50977 1.98242 8.10156 1.20117 9.91797C0.400391 11.7539 0 13.7168 0 15.8066V22.2812H6.47461C8.56445 22.2812 10.5273 21.8809 12.3633 21.0801C14.1797 20.2988 15.7715 19.2246 17.1387 17.8574C18.5059 16.4902 19.5898 14.8887 20.3906 13.0527C21.1719 11.2168 21.5625 9.25391 21.5625 7.16406V0.689453H15.1172Z"
										fill="#28FF52"
									></path>
								</svg>
							</div>
						</div>
						<div class="wrapper-info-hero__test">
							<p class="text-info__test">Poupança Anual Estimada</p>
							<p class="text-info-green__test" id="poupanca-anual-result">-</p>
							<div class="image-info__test">
								<svg
									width="64"
									height="61"
									viewBox="0 0 64 61"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.56824 30.5C9.56445 17 21.0645 14 36.5682 14C38.9623 10.3955 40.6448 9.54105 44.0551 8.50398C44.0615 8.50203 44.0682 8.50678 44.0682 8.51349V12.5M4.56824 30.5C3.37231 39.9242 4.87336 43.9911 10.5682 49.5L6.56824 53.5L13.0682 60L18.5682 55C27.3892 57.698 33.1505 57.8648 42.5682 55L47.0682 60L53.5682 54L50.0682 50.5C54.3433 47.301 55.8971 44.5624 57.5682 40H62.0682V31.5H57.5682C54.5496 23.3981 51.2556 20.5962 44.0682 17V12.5M4.56824 30.5C-0.433917 28.5 0.564453 23.5 3.06502 21M44.0682 12.5C46.066 10.8516 47.6935 10.6402 51.0667 10.9998C51.0675 10.9999 51.0679 11.0007 51.0675 11.0013L46.9024 18.5M17.0645 29.5C23.1955 24.0399 27.0914 22.7481 35.0644 22.5"
										stroke="#28FF52"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<circle
										cx="20.0645"
										cy="13"
										r="12"
										stroke="#28FF52"
										stroke-width="2"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div class="checklist__test">
						<div class="iten-checklist__test">
							<i class="item-icon icon icon-bop-072"></i>
							<span>Sem Juros </span>
						</div>
						<div class="iten-checklist__test">
							<i class="item-icon icon icon-bop-072"></i>
							<span>Sem entrada inicial </span>
						</div>
						<div class="iten-checklist__test">
							<i class="item-icon icon icon-bop-072"></i>
							<span>Mensalidade mais baixa do mercado </span>
						</div>
					</div>

					<div class="wrapper-buttons__test">
						<edp-button-type
							type="cta01"
							text="Quero Aderir"
							href="#"
							location="gta-28237-2"
							onclick="pedirProposta()"
							class="sc-edp-button-type-h sc-edp-button-type-s hydrated"
						></edp-button-type>
						<p class="text-info__test">Comece a poupar ainda esse ano</p>
					</div>
				</div>
				<picture class="wrappre-image__test">
					<div class="card-image-mobile__test">
						<h3>
							<span>Resultado da simulação</span> <br />
							Energia Solar EDP
						</h3>
						<img
							width="127px"
							src="/media/qerjlxq0/edp-energiasolar-painelbateria.webp"
							alt=""
						/>
					</div>
					<div class="card-result card-one">
						<div style="min-width: 64px">
							<i
								style="font-size: 64px"
								class="icon theme-icon--alt03 icon-bra-117 sc-edp-info-icons-slider-item"
							></i>
						</div>
						<div>
							<h3>Poupança Anual Estimada</h3>
							<p id="poupanca-anual-card"></p>
						</div>
					</div>
					<div class="card-result card-two">
						<div style="min-width: 64px">
							<i
								style="font-size: 64px"
								class="icon theme-icon--alt03 icon-bra-007 sc-edp-info-icons-slider-item"
							></i>
						</div>
						<div>
							<h3>Redução Consumo da Rede</h3>
							<p id="rcdr-card"></p>
						</div>
					</div>

					<div class="wrapper-mobile-button__test">
						<edp-button-type
							type="cta01"
							text="Pedir Proposta"
							href="#"
							location="gta-28237-2"
							onclick="pedirProposta()"
							class="sc-edp-button-type-h sc-edp-button-type-s hydrated"
						></edp-button-type>
						<p class="text-info__test">Comece a poupar ainda esse ano</p>
					</div>
					<img
						class="image-desktop__test"
						src="/media/qerjlxq0/edp-energiasolar-painelbateria.webp"
						alt="Painel solar com uma bateria solar enconstada"
						width="200"
						height="200"
						loading="lazy"
						class="sc-edp-image"
					/>
				</picture>
			</div>
		</div>`;

let verify = false;
setInterval(() => {
	const modalResult = $(
		`edp-simulator-solar[modal-id="28041_1"] edp-simulator-solar-step-results`
	);
	console.log("verificando");
	if (modalResult.parent().parent().hasClass("active") && !verify) {
		console.log("encontrou", modalResult);
		verify = true;
		$(
			`edp-simulator-solar[modal-id="28041_1"] .edp-modal__titleContainer.sc-edp-modal`
		).hide();
		$(
			`edp-simulator-solar[modal-id="28041_1"] .edp-stepNav__group.sc-edp-stepnav`
		).html(htmlHero);
		$(".closeBtn.sc-edp-modal").css({
			position: "absolute",
			"z-index": 99999,
			right: 0,
			top: 20,
			color: "#fff",
		});
		$(".edp-modal__container.sc-edp-modal").css({ "padding-top": 0 });
		setTimeout(() => {
			const values = $("edp-simulator-solar-result-card")
				.first()
				.find(".list .list-number");

			const anual = $("edp-simulator-solar-result-card")
				.first()
				.find(".savings-interval")
				.text();

			const paineis = $(values[0]).text();
			const rcdr = $(values[2]).text();
			$("#poupanca-anual-card").text("de ".concat(anual));
			$("#rcdr-card").text(rcdr);
			$("#poupanca-anual-result").text("Até ".concat(anual.split(" ")[2]));
			$("#reducao-consumo-da-rede-result").text(rcdr);
			$("#paineis-result").text(paineis);
		}, 300);
		$(".hero-result__test .btn-edp.btn-edp--cta02.right.sc-edp-button-type").on(
			"click",
			() => {
				const posicaoDestino = $(
					`edp-simulator-solar[modal-id="28041_1"] edp-simulator-solar-step-results`
				).position().top;
				console.log(posicaoDestino);
				$("html, edp-modal").stop().animate(
					{
						scrollTop: 1000,
					},
					500
				);
			}
		);
	}
	if (!modalResult.parent().parent().hasClass("active") && verify) {
		verify = false;
	}
}, 400);

const scrollToProposta = () => {
	$(
		"edp-modal.sc-edp-simulator-solar.sc-edp-modal-h.sc-edp-modal-s.edp-modal.hydrated.edp-modal--open.edp-modal--sticky"
	).animate(
		{
			scrollTop: $("edp-stepnav-field").eq(4).offset().top - 20, // Ajusta para a posição da seção
		},
		1000
	);
};

const pedirProposta = () => {
	$("edp-simulator-solar-result-card")
		.first()
		.find("edp-button-type[title='selecionar'] .btn-edp.btn-edp--wrapper")
		.click();
	$("edp-button-type[title='pedir-contacto']").click();

	setTimeout(() => {
		$("#SolarQuality2").prop("checked", true);
		$("#SolarQuality2").click();
		$(
			".btn-edp.btn-edp--cta01.m-01-c.right.btn-edp--sticky.sc-edp-button-type.m-03-bc.m-03-bg"
		).click();
	}, 200);
};
