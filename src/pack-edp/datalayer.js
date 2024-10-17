$("#header-cta-1").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "header-cta-liguem-me",
	});
});

$("#hero-cta-1").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "hero-cta-liguem-me",
	});
});

$("#plano-easy-packs").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "plano-easy-packs",
	});
});

$("#plano-smart-edp").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "plano-smart-edp",
	});
});

$("#plano-full-edp").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "plano-full-edp",
	});
});

$("#saiba-sobre-packs-edp").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "saiba-sobre-packs-edp",
	});
});

$("#desconto-fatura-de-energia").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "desconto-fatura-de-energia",
	});
});

$("#servico-funciona").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "servico-funciona",
	});
});

$("#plano-saude").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "plano-saude",
	});
});

$("#plano-saude-pet").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "plano-saude-pet",
	});
});

$("#gestao-de-energia").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "gestao-de-energia",
	});
});

$("#beneficios-em-parceiros").on("click", () => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: "beneficios-em-parceiros",
	});
});

(function () {
	const verify_el = setInterval(() => {
		const el = document.querySelector(
			'#webcareslotcontainer_27500 .webcareslot1 div[class^="byside_windowBySideData"]'
		);
		if (el) {
			clearInterval(verify_el);
			const id = el.className.match(/byside_windowBySideData_(\w+)/);

			$(`.BySideData_${id[1]}_bt_close`).on("click", function () {
				window.dataLayer.push({
					event: "gaclick",
					dlVersion: "GA4",
					action: "click_close",
					formModal: "modalPedirContacto",
					interactionName: "close form ligue-me",
					interactionLocation: "beneficios-em-parceiros",
				});
			});
		}
	}, 100);
})();
