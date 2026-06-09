const tbody = document.querySelector("#data");

const dataSurvey = JSON.parse(localStorage.getItem("survey")) || [];

dataSurvey.forEach((item) => {
  const tr = document.createElement("tr");
  const tdNama = document.createElement("td");
  tdNama.textContent = item.nama;
  const tdUmur = document.createElement("td");
  tdUmur.textContent = item.umur;
  const tdGender = document.createElement("td");
  tdGender.textContent = item.gender;
  const tdPerokok = document.createElement("td");
  tdPerokok.textContent = item.perokok;
  const tdMerk = document.createElement("td");
  tdMerk.textContent = item.merkRokok.join(",");

  tr.appendChild(tdNama);
  tr.appendChild(tdUmur);
  tr.appendChild(tdGender);
  tr.appendChild(tdPerokok);
  tr.appendChild(tdMerk);

  tbody.appendChild(tr);
});
