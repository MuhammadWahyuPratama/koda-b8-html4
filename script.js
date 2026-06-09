const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.querySelector('[name="nama"]');
  const umur = document.querySelector('[name="umur"]');
  const gender = document.querySelector('input[name="gender"]:checked');
  const perokok = document.querySelector('input[name="rokok"]:checked');
  const merkRokok = document.querySelectorAll('input[name="merkRokok"]');

  const merk = [];

  merkRokok.forEach((item) => {
    if (item.checked) {
      merk.push(item.value);
    }
  });

  const data = {
    nama: nama.value,
    umur: umur.value,
    gender: gender.value,
    perokok: perokok.value,
    merkRokok: merk,
  };

  const dataLama = JSON.parse(localStorage.getItem("survey")) || [];

  dataLama.push(data);

  localStorage.setItem("survey", JSON.stringify(dataLama));

  window.location.href = "hasil.html";
});
