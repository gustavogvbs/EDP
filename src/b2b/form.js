(function () {
	const verify_el = setInterval(() => {
		const el = document.querySelector(
			'#webcareslotcontainer_27088 .webcareslot1 div[class^="byside_windowBySideData"]'
		);
		if (el) {
			clearInterval(verify_el);
			const id = el.className.match(/byside_windowBySideData_(\w+)/);

			const my_byside = document.querySelector(
				".byside_windowBySideData_66fc0d40019c5"
			);
			my_byside.classList.add(id[0]);

			my_byside
				.querySelector(".onScheduleBySideData_66fc0304e297f")
				.classList.replace(
					"onScheduleBySideData_66fc0304e297f",
					`onScheduleBySideData_${id[1]}`
				);

			my_byside
				.querySelector("#frm_nomeBySideData_66fc0304e297f")
				.setAttribute("id", `frm_nomeBySideData_${id[1]}`);

			my_byside
				.querySelector("#frm_emailBySideData_66fc0304e297f")
				.setAttribute("id", `frm_emailBySideData_${id[1]}`);
			my_byside
				.querySelector("#frm_phoneBySideData_66fc0304e297f")
				.setAttribute("id", `frm_phoneBySideData_${id[1]}`);
			my_byside
				.querySelector("#frm_nipcBySideData_66fc0304e297f")
				.setAttribute("id", `frm_nipcBySideData_${id[1]}`);

			my_byside
				.querySelector("#termosBySideData_66fc0304e297f")
				.setAttribute("id", `termosBySideData_${id[1]}`);

			my_byside
				.querySelector("label[for='termosBySideData_66fc0304e297f']")
				.setAttribute("for", `termosBySideData_${id[1]}`);

			my_byside
				.querySelector("#frm_countrycodeBySideData_66fc0304e297f")
				.setAttribute("id", `frm_countrycodeBySideData${id[1]}`);

			my_byside
				.querySelector("#frm_scheduleBySideData_66fc0304e297f")
				.setAttribute("id", `frm_scheduleBySideData_${id[1]}`);

			my_byside
				.querySelector("#button-call")
				.setAttribute("onclick", `validateFormBySideData_${id[1]}('c2call');`);
		}
	}, 100);
})();
