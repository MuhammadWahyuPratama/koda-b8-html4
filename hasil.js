$(document).ready(function () {
  const dataSurvey =
    JSON.parse(localStorage.getItem("survey")) || [];

  let rows = "";

  dataSurvey.forEach((item) => {
    rows += `
      <tr class="border-b">
        <td class="px-4 py-3">${item.nama}</td>
        <td class="px-4 py-3">${item.umur}</td>
        <td class="px-4 py-3">${item.gender}</td>
        <td class="px-4 py-3">${item.perokok}</td>
        <td class="px-4 py-3">
          ${item.merkRokok.join(", ")}
        </td>
      </tr>
    `;
  });

  $("#data").html(rows);
});