let exc = false;

document.querySelectorAll(".cta-button-simular").forEach((item) => {
  item.addEventListener("click", async () => {
    console.log("iniciou execução");
    console.log("1s antes");
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    console.log("1s depois");

    if (exc) {
      console.log("não precisei");
      return;
    }

    const step_one = `
    <div class="max-w-screen-xl w-full h-[100vh] bg-[#f1f4f4] px-[5%] py-20 m-auto">
      <h2 class="text-center text-edp-black font-mulish text-[40px] pb-10 px-[5%]">
        Qual o seu tipo de habitação?
      </h2>
      <div class="flex justify-center gap-12 max-md:gap-4">
        <button id="moradia-btn" class="flex flex-col gap-6 items-center max-md:gap-2">
          <div>
            <img
              src="https://www.edp.pt/media/x1zkfnit/edp-simulador-288_mvpsolar-moradia.webp"
              alt="Moradia branca com dois andares e garagem"
              width="288"
              height="288"
              loading="lazy"
            />
          </div>
          <p class="text-center text-edp-purple text-xl font-bold">Moradia</p>
        </button>
        <a href="https://www.edp.pt/particulares/servicos/energia-solar/apartamentos/" class="flex flex-col gap-6 items-center max-md:gap-2">
          <div>
            <img
              src="https://www.edp.pt/media/qtbpnwbq/edp-simulador-288_mvpsolar-apartamento.webp"
              alt="Prédios brancos juntos com varandas e janelas com uma árvore à frente"
              width="288"
              height="288"
              loading="lazy"
            />
          </div>
          <p class="text-center text-edp-purple text-xl font-bold">Apartamento</p>
        </a>
      </div>
      <p class="text-edp-black text-base text-center pt-20">
        Se quiser conhecer a nossa oferta para empresas clique
        <a
          href="https://www.edp.pt/empresas/servicos/energia-solar/"
          class="text-edp-purple underline"
          title="energia solar"
          >aqui</a
        >
      </p>
    </div>
    <div id="moradia-step" class="fixed w-full h-full z-10 top-0 left-0 hidden data-[status=open]:block">
      <iframe
        src="https://www.edp.pt/solar-single-page/?modal=modal33575"
        onload="resizeIframe(this)"
        class="w-full h-full"
        style="height: 945px"
      ></iframe>
    </div>
    `;

    document.querySelector("#iframe-modal iframe").remove();

    const wrapper = document.querySelector(".shadow-xl.w-full");
    wrapper.classList.remove("bg-white");
    wrapper.classList.add("bg-[#f1f4f4]");

    const close_modal = document.getElementById("close-iframe");
    const wrapper_close_modal = document.getElementById("wrapper-close-modal");
    wrapper_close_modal.style.zIndex = "99";
    close_modal.style.zIndex = "99";
    close_modal.setAttribute("onclick", "closeModalIframe()");

    wrapper.innerHTML = wrapper.innerHTML + step_one;

    const cta_moradia = document.getElementById("moradia-btn");
    cta_moradia.addEventListener("click", () => {
      const moradia_step = document.getElementById("moradia-step");
      moradia_step.setAttribute("data-status", "open");
    });

    console.log("finalizou");
    exc = true;
  });
});
