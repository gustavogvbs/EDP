let verify = false;
setInterval(() => {
	const mapsStep = $(`.googleMap.sc-edp-map`)
		.parent()
		.parent()
		.parent()
		.parent();
	console.log("verificando");
	let modify;
	if (mapsStep.hasClass("active") && !verify) {
		verify = true;
		console.log("verificando");

		mapsStep.find(".title.sc-edp-stepnav-field").text("Procure a sua morada");
		mapsStep
			.find(".description.sc-edp-stepnav-field")
			.text(
				"Coloque o seu endereço abaixo para personalizarmos a sua proposta"
			);
		mapsStep.find("edp-map-address-card").css({
			left: "50%",
			transform: "translateX(-50%)",
		});

		modify = setInterval(() => {
			$(mapsStep.find("edp-animation-wrapper")[2]).css({ display: "none" });
			let wrapper_button = mapsStep.find("edp-animation-wrapper edp-button ");
			wrapper_button
				.find(".btn-edp.btn-edp--cta02.sc-edp-button-type")
				.parent()
				.remove();

			let btn_next = wrapper_button.find(
				".btn-edp.btn-edp--alt.sc-edp-button-type"
			);

			btn_next
				.removeClass()
				.addClass(
					"btn-edp btn-edp--cta01 m-03-bg m-03-bc m-01-c right btn-edp--sticky sc-edp-button-type"
				);
			btn_next
				.find(".add-01-c.font-Btn.sc-edp-button-type")
				.removeClass()
				.addClass("m-03-bg m-03-bc m-01-c font-Btn sc-edp-button-type")
				.text("Seguinte");

			btn_next.find(".add-01-c.icon-bop-078").remove();
		});

		$("edp-button-type.disable.sc-edp-simulator-solar").hide();
	}
	if (!mapsStep.hasClass("active")) {
		verify = false;
		$("edp-button-type.sc-edp-simulator-solar").show();
	}
}, 400);
