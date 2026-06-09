$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();

    const nama = $('[name="nama"]').val();
    const umur = $('[name="umur"]').val();
    const gender = $('input[name="gender"]:checked').val();
    const perokok = $('input[name="rokok"]:checked').val();

    const merk = [];

    $('input[name="merkRokok"]:checked').each(function () {
      merk.push($(this).val());
    });

    const data = {
      nama,
      umur,
      gender,
      perokok,
      merkRokok: merk,
    };

    const dataLama =
      JSON.parse(localStorage.getItem("survey")) || [];

    dataLama.push(data);

    localStorage.setItem(
      "survey",
      JSON.stringify(dataLama)
    );

    window.location.href = "hasil.html";
  });
});