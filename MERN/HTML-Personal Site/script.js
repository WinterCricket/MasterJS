// (A) ALL WE NEED IS A <DIV> CONTAINER -->

// (B)  ARRAY
var data = [
  "JavaScript",
  "⭐⭐⭐",
  "PHP",
  "⭐⭐",
  "MySQL",
  "⭐⭐",
  "Git",
  "⭐⭐",
  "HTML5",
  "⭐⭐⭐",
  "CSS3",
  "⭐⭐",
  "Terminal",
  "⭐",
  "React.JS",
  "",
  "jQuery",
  "",
  "Node.js",
  "",
  "Express.js",
  "",
  "Laravel",
  "",
  "Figma",
  "",
  "SEO",
  "",
  "Bootstrap CSS",
  "⭐",
];

// (C) CREATE HTML TABLE
// (C1) HTML TABLE STRING
var myTable = `<table cellspacing="20"><tr>`;

// (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
var perrow = 2; // 2 CELLS PER ROW
data.forEach((value, i) => {
  // "NORMAL" CELL
  myTable += `<td>${value}</td>`;

  // CLICK ON CELL TO DO SOMETHING
  // myTable += `<td onclick="FUNCTION()">${value}</td>`;

  // TO PASS IN A RUNNING NUMBER OR PARAMETER
  // myTable += `<td onclick="FUNCTION(${i})">${value}</td>`;

  // BREAK INTO NEXT ROW
  var next = i + 1;
  if (next % perrow == 0 && next != data.length) {
    myTable += "</tr><tr>";
  }
});

// (C3) CLOSE THE TABLE STRING
myTable += "</tr></table>";

// (D) ATTACH HTML TO CONTAINER
document.getElementById("container").innerHTML = myTable;
