//Events
const togglePopUp = () => {
  const cv = document.querySelectorAll(".img")[3];
  const popupdiv = document.querySelector(".outside-popup");
  const popupContainer = document.querySelector(".popup-util");
  const popup = document.querySelectorAll(".popup");

  popupdiv.addEventListener("click", (e) => {
    if (e.target.classList[0] == "outside-popup") {
      popupdiv.classList.toggle("disabled");
      document.body.classList.toggle("truncated");
    }
  });
  cv.addEventListener("click", () => {
    popupdiv.classList.toggle("disabled");
    document.body.classList.toggle("truncated");
  });

  //Delegacion de eventos
  popupContainer.addEventListener("click", (e) => {
    e.target.classList.forEach((element) => {
      if (element == "popup-close-btn") {
        popupdiv.classList.toggle("disabled");
        document.body.classList.toggle("truncated");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      popupdiv.classList.add("disabled");
      document.body.classList.remove("truncated");
    }
  });
};
const trackerBubble = () => {
  const tracker = document.querySelector(".tracker");
  const header = document.querySelector(".header-container");
  document.addEventListener("scroll", (e) => {
    if (scrollY > header.offsetHeight) {
      tracker.classList.add("active-tracker");
    } else {
      tracker.classList.remove("active-tracker");
    }
  });

  tracker.addEventListener("click", () => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  });
};

togglePopUp();
trackerBubble();

//Paginador

let paso = parseInt(localStorage.getItem("step"));
if (!paso) {
  paso = 1;
}

const pasoActual = `#step-${paso}`;
document.querySelector(pasoActual).classList.add("mostrar");

const tabs = () => {
  const botones = document.querySelectorAll(".steps-timeline");
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      paso = parseInt(e.target.dataset.step);
      localStorage.setItem("step", paso);
      mostrarSeccion();
      // console.log(paso);
    });
  });
};

const mostrarSeccion = () => {
  const seccionAnterior = document.querySelector(".mostrar");

  if (seccionAnterior) {
    seccionAnterior.classList.remove("mostrar");
    const liSelector = `[data-step="${seccionAnterior.id.split("-")[1]}"]`;
    document.querySelector(liSelector).classList.remove("selected");
  }

  const pasoSelector = `#step-${paso}`;
  const seccion = document.querySelector(pasoSelector);
  seccion.classList.add("mostrar");

  const liSelector = `[data-step="${seccion.id.split("-")[1]}"]`;
  document.querySelector(liSelector).classList.add("selected");
};

const iniciarApp = () => {
  mostrarSeccion();
  tabs();
};
iniciarApp();

const contactToggle = () => {
  const contactSection = document.querySelector(".contact-to-section");
  const thanks = document.querySelector(".thank-resend");
  contactSection.classList.toggle("contact_hidden");
  thanks.classList.toggle("contact_hidden");

  thanks.addEventListener("click", (e) => {
    if (e.target.id == "resend") {
      thanks.classList.toggle("contact_hidden");
      contactSection.classList.toggle("contact_hidden");

      localStorage.removeItem("contact-send");
      email.value = "";
      message.value = "";
      nombre.value = "";
      contactVerify();
    }
  });
};

const isThank = () => {
  const isSended = Boolean(localStorage.getItem("contact-send"));

  if (isSended) contactToggle();
};
isThank();

const contactVerify = () => {
  const spinner = document.querySelector(".loading-spinner");
  submit.addEventListener("click", () => {
    if (validarContact()) {
      spinner.classList.remove("spinner-hidden");
      // submit.setAttribute("type", "submit");
      const form = new FormData();

      form.append("nombre", nombre.value ?? "");
      form.append("email", email.value ?? "");
      form.append("message", message.value ?? "");

      try {
        fetch("/joacoh-web-portfolio/contact", {
          method: "post",
          body: form,
        })
          .then((response) => response.json())
          .then((data) => {
            spinner.classList.add("spinner-hidden");
            if (data.result === true) {
              localStorage.setItem("contact-send", "true");
              contactToggle();
            } else {
              spinner.classList.add("spinner-hidden");
              alert("el correo no se pudo enviar.");
            }
          });
      } catch (error) {
        spinner.classList.add("spinner-hidden");
        alert("el correo no se pudo enviar.");
      }
    }
  });
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const contactMaxLength = () => {
  message.addEventListener("input", (e) => {
    if (message.value.length <= 255) {
      const count = document.querySelector("#count");
      count.textContent = message.value.length;
    } else {
      message.value = message.value.slice(0, 255);
    }
  });
};

const validarContact = () => {
  if (email.value == "" || !validateEmail(email.value)) {
    email.classList.add("failure");
    return false;
  } else {
    email.classList.remove("failure");
  }

  if (nombre.value == "") {
    nombre.classList.add("failure");
    return false;
  } else {
    nombre.classList.remove("failure");
  }
  if (message.value == "") {
    message.classList.add("failure");
    return false;
  } else {
    message.classList.remove("failure");
  }

  return true;
};

const copyToClip = () => {
  const copybtn = document.querySelectorAll(".copy");

  copybtn.forEach((e) => {
    let etext = e.textContent;
    e.addEventListener("click", () => {
      // e.select();

      // e.setSelectionRange(0, 99999);
      e.textContent = "Copied!";
      e.classList.add("copied");
      e.classList.remove("copy");
      setTimeout(() => {
        e.textContent = etext;
        e.classList.remove("copied");
        e.classList.add("copy");
      }, 500);
      navigator.clipboard.writeText(etext);
    });
  });
};

const contact = () => {
  const submit = document.querySelector("#submit");
  const nombre = document.querySelector('[name="nombre"]');
  const email = document.querySelector('[name="email"]');
  const message = document.querySelector('[name="message"]');
  contactVerify();
  copyToClip();
  validarContact();
  contactMaxLength();
};

contact();
