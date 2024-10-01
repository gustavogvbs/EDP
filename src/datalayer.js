const ligueme = $(".ligue-me-btn");

ligueme.on("click", (e) => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
		event: "gaclick",
		dlVersion: "GA4",
		action: "click_open",
		formModal: "modalPedirContacto",
		interactionName: "liguem-me",
		interactionLocation: e.target.id,
	});
});
