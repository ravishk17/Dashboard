import data from "./data.js";

const infoTableRow = document.querySelector(".info-table-row");
let html = "";
for (const key in data) {
  html += `<td>
            <span class="table-val">${data[key]}</span><br />
            <span>${key}</span>
        </td>`;
}
infoTableRow.innerHTML = html;
