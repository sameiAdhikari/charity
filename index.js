document.addEventListener("DOMContentLoaded", () => {
  //------------------------------------learn more button function--------------------------------------------------

  // const learnMore = document.querySelector(".main-body .text .learn-more");
  // const learnMoreDescription = document.querySelector(".main-body .description");
  // const learnMoreCancelBtn = document.querySelector(".main-body .description i");
  // learnMore.addEventListener("click", () => {
  //   learnMoreDescription.style.display = "block";
  // });
  // learnMoreCancelBtn.addEventListener("click", () => {
  //   learnMoreDescription.style.display = "none";
  // });

  //------------------------------------profile background image change--------------------------------------------------

  // let backgroundImage = document.querySelector(".main-body .main-section img");
  // let pointer1 = document.querySelector(".pointer1");
  // let pointer2 = document.querySelector(".pointer2");
  // let pointer3 = document.querySelector(".pointer3");

  // pointer1.addEventListener("click", () => {
  //   backgroundImage.src = "photos/np.png";
  //   pointer1.classList.add("pointer");
  //   pointer2.classList.remove("pointer");
  //   pointer3.classList.remove("pointer");
  // });
  // pointer2.addEventListener("click", () => {
  //   backgroundImage.src = "photos/np1.png";
  //   pointer2.classList.add("pointer");
  //   pointer1.classList.remove("pointer");
  //   pointer3.classList.remove("pointer");
  // });
  // pointer3.addEventListener("click", () => {
  //   backgroundImage.src = "photos/np2.png";
  //   pointer3.classList.add("pointer");
  //   pointer2.classList.remove("pointer");
  //   pointer1.classList.remove("pointer");
  // });
  //------------------------------------icons function for landing page--------------------------------------------------
  // const facebook = document.querySelector(".practise .icons .fa-facebook-f");
  // const instagram = document.querySelector(".practise .icons .fa-instagram");
  // const telegram = document.querySelector(".practise .icons .telegram");
  // const youtube = document.querySelector(".practise .icons .youtube");
  // facebook.addEventListener("click", () => {
  //   window.open("https://www.facebook.com/samie.adhikari");
  // });
  // instagram.addEventListener("click", () => {
  //   window.open("https://www.instagram.com/shrijana.adhikari.5817/");
  // });
  // telegram.addEventListener("click", () => {
  //   window.open("https://telegram.org");
  // });
  // youtube.addEventListener("click", () => {
  //   window.open("https://www.youtube.com");
  // });

  //------------------------------------welcome to charity function--------------------------------------------------
  const firstChild = document.querySelector(
    ".welcome-to-charity .left .first-child"
  );
  const thirdChild = document.querySelector(
    ".welcome-to-charity .left .third-child"
  );
  const forthChild = document.querySelector(
    ".welcome-to-charity .left .forth-child"
  );
  const scholarship = document.querySelector(
    ".welcome-to-charity .scholarship-section"
  );
  const scholarshipCancel = document.querySelector(
    ".welcome-to-charity .scholarship-section .fa-xmark"
  );

  firstChild.addEventListener("click", (e) => {
    window.location.href = "becomevolunter.html";
  });
  thirdChild.addEventListener("click", () => {
    window.location.href = "donation.html";
  });
  forthChild.addEventListener("click", () => {
    scholarship.style.right = "0px";
  });
  scholarshipCancel.addEventListener("click", () => {
    scholarship.style.right = "-500px";
  });
  //------------------------------------application section for donar and organizers--------------------------------------------------

  const organisers = document.querySelector(
    ".application .heading .first-heading"
  );
  const donars = document.querySelector(
    ".application .heading .second-heading"
  );
  const organisersBox = document.querySelector(
    ".application .heading .first-heading"
  );
  const donarsBox = document.querySelector(
    ".application .right-side .body .for-donators"
  );
  donars.addEventListener("click", () => {
    donars.style.backgroundColor = "#3d416e";
    organisers.style.backgroundColor = "#0a1525";
    donarsBox.style.left = "0%";
  });
  organisers.addEventListener("click", () => {
    donars.style.backgroundColor = "#0a1525";
    organisers.style.backgroundColor = "#3d416e";
    donarsBox.style.left = "100%";
  });

  // ------------------------------------go to top button--------------------------------------------------
  const goToTop = document.querySelector("footer .mainFooter .aside button");
  goToTop.addEventListener("click", () => {
    const header = document.querySelector("header");
    header.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  // ------------------------------------practise section--------------------------------------------------

  // const words = [
  //   "Child Education",
  //   "Child Welfare",
  //   " Animal Welfare",
  //   "Mental Health",
  // ];
  // const changing = document.querySelector(
  //   ".practise .content .container h2 span"
  // );
  // let currentIx = 0;

  // let change = () => {
  //   changing.textContent = words[currentIx];
  //   currentIx = (currentIx + 1) % words.length;
  // };

  // change();
  // setInterval(change, 3000);

  // const scrollbar = document.querySelector(".scroll-bar");
  // let scrollTo = window.scrollY;
  // let scrollhgt = document.documentElement.scrollHeight - window.innerHeight;
  // let barHeight = (scrollTo / scrollhgt) * 100;
  // scrollbar.style.width = barHeight + "%";
}); // ------------------------------------DOMContentLoaded--------------------------------------------------

window.addEventListener("scroll", () => {
  const scrollbar = document.querySelector(".scroll-bar");
  let scrollTo = window.scrollY;
  let scrollhgt = document.documentElement.scrollHeight - window.innerHeight;
  let barHeight = (scrollTo / scrollhgt) * 100;
  scrollbar.style.width = barHeight + "%";
});

//  --------------------------------- subscription button function--------------------------------------------------
const subscriptionButtons = document.querySelectorAll(
  "#hero-section .payment-list .payment-subscriptions-type button"
);
subscriptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    subscriptionButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const dropDownBtn = document.querySelector(
  "#hero-section .payment-list .price-options .currency-input .custom-select-dropdown button"
);

dropDownBtn.addEventListener("click", () => {
  const dorpdownMenu = dropDownBtn
    .closest(".custom-select-dropdown")
    .querySelector("ul");
  dorpdownMenu.classList.toggle("dropdown-active");
});

const dorpdownMenuList = document.querySelectorAll(
  "#hero-section .payment-list .price-options .currency-input .custom-select-dropdown ul li"
);

dorpdownMenuList.forEach((el) => {
  el.addEventListener("click", () => {
    const dorpdownMenu = dropDownBtn
      .closest(".custom-select-dropdown")
      .querySelector("ul");
    dorpdownMenu.classList.toggle("dropdown-active");

    dropDownBtn.querySelector("p").innerHTML = el.innerHTML;
  });
});
const dollarBtn = document.querySelectorAll(
  "#hero-section .payment-list .price-options .options button"
);
const amountInput = document.querySelector(
  "#hero-section .payment-list .price-options .currency-input input"
);
const donationBtn = document.querySelector(
  "#hero-section .payment-list .price-options button.donateBtn"
);
dollarBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    amountInput.focus();
    amountInput.value = e.target.value;
  });
});

amountInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
});

donationBtn.addEventListener("click", () => {
  if (amountInput.value === "") {
    amountInput.focus();
    return;
  } else {
    document.querySelector("#message").style.display = "flex";
    document.body.style.overflow = "hidden";
    amountInput.value = "";
  }
});

const messageCancelBtn = document.querySelector("#message .cancel-btn");
messageCancelBtn.addEventListener("click", () => {
  document.querySelector("#message").style.display = "none";
  document.body.style.overflow = "auto";
});

const listOfUrgentNeed = [
  {
    title: "Help save Anikat's Life! He is suffering from Duodenal atresia",
    fundRaiser: "suhani ray",
    fundRaised: 95400,
    requiredFund: 350000,
    contributions: 116,
    imagePath:
      "https://images.pexels.com/photos/32990273/pexels-photo-32990273.jpeg",
  },

  {
    title: "Help Maya Fight Acute Lymphoblastic Leukemia",
    fundRaiser: "Hope Care Foundation",
    fundRaised: 119400,
    requiredFund: 300000,
    contributions: 89,
    imagePath:
      "https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg",
  },
  {
    title: "Support Earthquake Relief for Families in Rural Nepal",
    fundRaiser: "Relief Nepal Trust",
    fundRaised: 521750,
    requiredFund: 600000,
    contributions: 214,
    imagePath:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
  },
  {
    title: "Help Ravi Get a Kidney Transplant",
    fundRaiser: "Friends of Ravi",
    fundRaised: 255900,
    requiredFund: 500000,
    contributions: 143,
    imagePath:
      "https://images.pexels.com/photos/8460343/pexels-photo-8460343.jpeg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  listOfUrgentNeed.forEach((obj) => {
    const listOfCharityProgram = document.querySelector(
      "#recent-charity .listofCharityProgram"
    );
    const progress = Math.min((obj.fundRaised / obj.requiredFund) * 100, 100);
    const html = `
    <div class="container">
          <img class="photo" src=${
            obj.imagePath
          } alt="image of current program" />
          <h4>
           ${obj.title}
          </h4>
          <div>
            <p class="avatar">
              ${obj.fundRaiser.slice(0, 1)}
            </p>
            <span>
              By ${obj.fundRaiser}
            </span>
          </div>
          <div>
            <span class="raisedMoney">$${obj.fundRaised}</span>raised out of ${
      obj.requiredFund
    }
          </div>
          <div class="progressBar">
          <span style="
          width:${progress}%
          "></span>
          </div>
          <div class="contributionBtn">
            <p>
              <span>❤️</span> ${obj.contributions} contributions
            </p>
            <button>
              Share
              <img src="photos/shareIcon.svg" alt="">
            </button>
          </div>
          <button class="goContributeBtn">
            Contribute
            <img src="photos/doubleArrow.png" alt="">
          </button>
        </div>
    `;
    listOfCharityProgram.insertAdjacentHTML("beforeend", html);
  });

  const contBtn = document.querySelectorAll(
    "#recent-charity .listofCharityProgram .goContributeBtn"
  );
  contBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        alert("Thank you so much for your contribution. It means a lot");
      }, 500);
    });
  });
});

const browseAll = document.querySelector("#browseAll button");
browseAll.addEventListener("click", () => {
  browseAll.innerHTML = "Browsering All...";
  setTimeout(() => {
    browseAll.innerHTML = "Browse All Fundraiser";
  }, 1000);
});
