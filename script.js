let selectedRating = "";

const selectRating = (selectedNumber) => {
  selectedRating = document.getElementById(`${selectedNumber}`);
  const allRatings = document.querySelectorAll("li");
  const submitBtn = document.getElementById("submitBtn");
  const linkToFeedback = document.getElementById("linkToFeedback");

  linkToFeedback.classList.remove("pointer-events-none");
  submitBtn.classList.replace("bg-[#959eac]", "bg-[#fb7413]");

  allRatings.forEach((item) => {
    if (item.innerHTML == selectedNumber) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
};

const submit = () => {
  sessionStorage.setItem("feedbackNumber", `${selectedRating.innerText}`);
};

const writeFeedback = () => {
  const feedbackDiv = document.querySelector(".results");
  const rating = sessionStorage.getItem("feedbackNumber");
  feedbackDiv.innerText = `You selected ${rating} out of 5`;
};
