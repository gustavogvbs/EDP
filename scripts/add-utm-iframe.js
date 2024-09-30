const srcIframe = `https://www.edp.pt/solar-single-page/?modal=modal33575&ec_source=google&ec_medium=search&ec_campaign=b2c-energia-solar&ec_term=wp-search-rlsa-brand-b2c-ddc&ec_content=ag-rlsa-brand-paineis&gad_source=1&gclid=CjwKCAjwufq2BhAmEiwAnZqw8l1Jl_yMqdcNT1u23V7tCquga8Wq-H4qVs3EYN_qa9lspnwJ8UtqExoCTbYQAvD_BwE`;

document.querySelectorAll(".cta-button-simular").forEach((item) => {
	item.addEventListener("click", () => {
		setTimeout(() => {
			document
				.querySelector("#moradia-step iframe")
				.setAttribute("src", srcIframe);
		}, 500);
	});
});
