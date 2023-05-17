const sharebutton = document.querySelector(".sharefact");
const form = document.querySelector(".factform");
const factsList = document.querySelector(".facts");

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
console.log(CATEGORIES.find((category) => category.name === "society"));

//create dom elements: render facts in list
factsList.innerHTML = "";

loadFacts();

//load data from superbase
async function loadFacts() {
  const res = await fetch(
    "https://afiqiwiwtgixqdbfadrl.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaXFpd2l3dGdpeHFkYmZhZHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNjQ4NzgsImV4cCI6MTk5OTg0MDg3OH0.GqSCfjJ7NxesX6YpX7WVDQkymm35IujgnUsHox6JD0c",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaXFpd2l3dGdpeHFkYmZhZHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNjQ4NzgsImV4cCI6MTk5OTg0MDg3OH0.GqSCfjJ7NxesX6YpX7WVDQkymm35IujgnUsHox6JD0c",
      },
    }
  );
  const data = await res.json(); //await only work for functions that return promsises

  //   const filteredData = data.filter((fact) => fact.category === "finance");

  createFactsList(data);
}

//each instance of the array WE NAMED A FACT
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
          <p>
              ${fact.text}
              <a
                  class="source"
                  href=${fact.source}
                  target="_blank"
                  >(Source)</a>
          </p>
          <span class="tag" style="background-color: ${
            CATEGORIES.find((category) => category.name === fact.category).color
          }">${fact.category}</span>
    `
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//toggle form visibility
sharebutton.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    sharebutton.textContent = "Close";
    form.classList.remove("hidden");
  } else {
    sharebutton.textContent = "Share a fact";
    form.classList.add("hidden");
  }
});

// console.log([7, 64, 6, -23, 11].find((el) => el > 10));
