let teamslctda = document.getElementById("teamslctd-a");
let teamslctdb = document.getElementById("teamslctd-b");
let awin = document.getElementById("a-win");
let bwin = document.getElementById("b-win");
const teams = [
  { name: "Afghanistan", points: 1036.92 },
  { name: "Albania", points: 1375.1 },
  { name: "Algeria", points: 1482.71 },
  { name: "American Samoa", points: 890.97 },
  { name: "Andorra", points: 998.75 },
  { name: "Angola", points: 1235.76 },
  { name: "Anguilla", points: 793.48 },
  { name: "Antigua and Barbuda", points: 1072.66 },
  { name: "Argentina", points: 1858 },
  { name: "Armenia", points: 1229.18 },
  { name: "Aruba", points: 875.82 },
  { name: "Australia", points: 1563.93 },
  { name: "Austria", points: 1554.86 },
  { name: "Azerbaijan", points: 1177.83 },
  { name: "Bahamas", points: 835.81 },
  { name: "Bahrain", points: 1307.53 },
  { name: "Bangladesh", points: 905.3 },
  { name: "Barbados", points: 943.8 },
  { name: "Belarus", points: 1226.54 },
  { name: "Belgium", points: 1795.23 },
  { name: "Belize", points: 919.52 },
  { name: "Benin", points: 1225.68 },
  { name: "Bermuda", points: 974.3 },
  { name: "Bhutan", points: 904.1 },
  { name: "Bolivia", points: 1283.88 },
  { name: "Bosnia and Herzegovina", points: 1335.6 },
  { name: "Botswana", points: 1065.07 },
  { name: "Brazil", points: 1788.65 },
  { name: "British Virgin Islands", points: 813.31 },
  { name: "Brunei Darussalam", points: 872.65 },
  { name: "Bulgaria", points: 1292.59 },
  { name: "Burkina Faso", points: 1390.38 },
  { name: "Burundi", points: 1081.63 },
  { name: "Cabo Verde", points: 1383.44 },
  { name: "Cambodia", points: 925.4 },
  { name: "Cameroon", points: 1452.59 },
  { name: "Canada", points: 1461.16 },
  { name: "Cayman Islands", points: 847.81 },
  { name: "Central African Republic", points: 1128.17 },
  { name: "Chad", points: 945.92 },
  { name: "Chile", points: 1491.71 },
  { name: "China PR", points: 1275.22 },
  { name: "Chinese Taipei", points: 1007.3 },
  { name: "Colombia", points: 1664.28 },
  { name: "Comoros", points: 1163.02 },
  { name: "Congo", points: 1179.8 },
  { name: "Congo DR", points: 1388.25 },
  { name: "Cook Islands", points: 896.59 },
  { name: "Costa Rica", points: 1445.38 },
  { name: "Côte d'Ivoire", points: 1498.8 },
  { name: "Croatia", points: 1721.07 },
  { name: "Cuba", points: 980.65 },
  { name: "Curaçao", points: 1262.48 },
  { name: "Cyprus", points: 1141.03 },
  { name: "Czechia", points: 1501.47 },
  { name: "Denmark", points: 1602.72 },
  { name: "Djibouti", points: 877.28 },
  { name: "Dominica", points: 922.25 },
  { name: "Dominican Republic", points: 1042.86 },
  { name: "Ecuador", points: 1518.22 },
  { name: "Egypt", points: 1499.72 },
  { name: "El Salvador", points: 1305.02 },
  { name: "England", points: 1794.9 },
  { name: "Equatorial Guinea", points: 1308.03 },
  { name: "Estonia", points: 1141.13 },
  { name: "Eswatini", points: 1048.89 },
  { name: "Ethiopia", points: 1068.48 },
  { name: "Faroe Islands", points: 1103.43 },
  { name: "Fiji", points: 983.81 },
  { name: "Finland", points: 1394.44 },
  { name: "France", points: 1840.59 },
  { name: "Gabon", points: 1287.33 },
  { name: "Georgia", points: 1333.76 },
  { name: "Germany", points: 1644.21 },
  { name: "Ghana", points: 1358.77 },
  { name: "Gibraltar", points: 832.5 },
  { name: "Greece", points: 1457.89 },
  { name: "Grenada", points: 950.99 },
  { name: "Guam", points: 821.91 },
  { name: "Guatemala", points: 1188.28 },
  { name: "Guinea", points: 1324.65 },
  { name: "Guinea-Bissau", points: 1163.44 },
  { name: "Guyana", points: 1020.31 },
  { name: "Haiti", points: 1262.5 },
  { name: "Honduras", points: 1301.92 },
  { name: "Hong Kong, China", points: 1012.83 },
  { name: "Hungary", points: 1532.2 },
  { name: "Iceland", points: 1346.82 },
  { name: "India", points: 1145.94 },
  { name: "Indonesia", points: 1102.7 },
  { name: "IR Iran", points: 1613.96 },
  { name: "Iraq", points: 1420.47 },
  { name: "Israel", points: 1311.39 },
  { name: "Italy", points: 1724.6 },
  { name: "Jamaica", points: 1435.33 },
  { name: "Japan", points: 1621.88 },
  { name: "Jordan", points: 1350.21 },
  { name: "Kazakhstan", points: 1203.64 },
  { name: "Kenya", points: 1191.24 },
  { name: "Korea DPR", points: 1160.57 },
  { name: "Korea Republic", points: 1563.99 },
  { name: "Kosovo", points: 1205.85 },
  { name: "Kuwait", points: 1085.46 },
  { name: "Kyrgyz Republic", points: 1213.6 },
  { name: "Laos", points: 889.62 },
  { name: "Latvia", points: 1095.91 },
  { name: "Lebanon", points: 1158.96 },
  { name: "Lesotho", points: 1047.58 },
  { name: "Liberia", points: 1029.58 },
  { name: "Libya", points: 1166.71 },
  { name: "Liechtenstein", points: 832.75 },
  { name: "Lithuania", points: 1095.23 },
  { name: "Luxembourg", points: 1277.94 },
  { name: "Macau", points: 896.62 },
  { name: "Madagascar", points: 1185.86 },
  { name: "Malawi", points: 1140.93 },
  { name: "Malaysia", points: 1094.54 },
  { name: "Maldives", points: 1003.48 },
  { name: "Mali", points: 1477.9 },
  { name: "Malta", points: 973.14 },
  { name: "Mauritania", points: 1195.5 },
  { name: "Mauritius", points: 919.4 },
  { name: "Mexico", points: 1661.11 },
  { name: "Moldova", points: 1028.85 },
  { name: "Mongolia", points: 884.04 },
  { name: "Montenegro", points: 1351.72 },
  { name: "Montserrat", points: 946.08 },
  { name: "Morocco", points: 1661.42 },
  { name: "Mozambique", points: 1184.49 },
  { name: "Myanmar", points: 999.46 },
  { name: "Namibia", points: 1192.13 },
  { name: "Nepal", points: 937.84 },
  { name: "Netherlands", points: 1742.29 },
  { name: "New Caledonia", points: 1008.92 },
  { name: "New Zealand", points: 1197.68 },
  { name: "Nicaragua", points: 1102.54 },
  { name: "Niger", points: 1125.5 },
  { name: "Nigeria", points: 1520.27 },
  { name: "North Macedonia", points: 1354.19 },
  { name: "Northern Ireland", points: 1341.05 },
  { name: "Norway", points: 1467.51 },
  { name: "Oman", points: 1323.23 },
  { name: "Pakistan", points: 849.94 },
  { name: "Palestine", points: 1238.66 },
  { name: "Panama", points: 1475.62 },
  { name: "Papua New Guinea", points: 985.32 },
  { name: "Paraguay", points: 1430.73 },
  { name: "Peru", points: 1515.82 },
  { name: "Philippines", points: 1075.14 },
  { name: "Poland", points: 1531.49 },
  { name: "Portugal", points: 1748.11 },
  { name: "Puerto Rico", points: 1006.35 },
  { name: "Qatar", points: 1507.94 },
  { name: "Republic of Ireland", points: 1399.74 },
  { name: "Romania", points: 1468.17 },
  { name: "Russia", points: 1504.02 },
  { name: "Rwanda", points: 1112.44 },
  { name: "Samoa", points: 920.54 },
  { name: "San Marino", points: 742.05 },
  { name: "São Tomé and Príncipe", points: 893.58 },
  { name: "Saudi Arabia", points: 1443.53 },
  { name: "Scotland", points: 1497.46 },
  { name: "Senegal", points: 1624.73 },
  { name: "Serbia", points: 1514.2 },
  { name: "Seychelles", points: 845.53 },
  { name: "Sierra Leone", points: 1137.36 },
  { name: "Singapore", points: 1019.06 },
  { name: "Slovakia", points: 1461.55 },
  { name: "Slovenia", points: 1427.84 },
  { name: "Solomon Islands", points: 1111.02 },
  { name: "Somalia", points: 842.64 },
  { name: "South Africa", points: 1407.67 },
  { name: "South Sudan", points: 984.65 },
  { name: "Spain", points: 1727.5 },
  { name: "Sri Lanka", points: 829.41 },
  { name: "St Kitts and Nevis", points: 1056.61 },
  { name: "St Lucia", points: 988.67 },
  { name: "St Vincent and the Grenadines", points: 953.47 },
  { name: "Sudan", points: 1129.32 },
  { name: "Suriname", points: 1071.85 },
  { name: "Sweden", points: 1531.68 },
  { name: "Switzerland", points: 1616.41 },
  { name: "Syria", points: 1266.52 },
  { name: "Tahiti", points: 999.48 },
  { name: "Tajikistan", points: 1216.76 },
  { name: "Tanzania", points: 1159.81 },
  { name: "Thailand", points: 1208.93 },
  { name: "The Gambia", points: 1114.8 },
  { name: "Timor-Leste", points: 843.4 },
  { name: "Togo", points: 1170.34 },
  { name: "Tonga", points: 833.12 },
  { name: "Trinidad and Tobago", points: 1220.65 },
  { name: "Tunisia", points: 1493.12 },
  { name: "Türkiye", points: 1495.94 },
  { name: "Turkmenistan", points: 1072.52 },
  { name: "Turks and Caicos Islands", points: 817.03 },
  { name: "Uganda", points: 1242.15 },
  { name: "Ukraine", points: 1568.86 },
  { name: "United Arab Emirates", points: 1366.45 },
  { name: "Uruguay", points: 1659.39 },
  { name: "US Virgin Islands", points: 797.29 },
  { name: "USA", points: 1681.13 },
  { name: "Uzbekistan", points: 1386.58 },
  { name: "Vanuatu", points: 972.14 },
  { name: "Venezuela", points: 1442.29 },
  { name: "Vietnam", points: 1164.54 },
  { name: "Wales", points: 1531.38 },
  { name: "Yemen", points: 1017.05 },
  { name: "Zambia", points: 1278.26 },
  { name: "Zimbabwe", points: 1143.66 },
];
teams.forEach((team) => {
  let x = document.createElement("option");
  x.text = team.name;
  x.label = team.name;
  x.value = team.points;
  teamslctda.appendChild(x);
});

teams.forEach((tema) => {
  let y = document.createElement("option");
  y.text = tema.name;
  y.value = tema.points;
  teamslctdb.appendChild(y);
});

teamslctda.onchange = function () {
  points1 = 0;

  // penamaan
  document.getElementById("a-name").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-name").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("a-names").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-names").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("a-names1").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-names1").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("draw-home").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("draw-away").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;

  document.getElementById("poinnya1").innerText = teamslctda.value;
  document.getElementById("poinnya2").innerText = teamslctdb.value;

  // deklarasi tim
  firstteam = parseFloat(teamslctda.value);
  secondteam = parseFloat(teamslctdb.value);
  berat = parseFloat(value.value);
  expn = 10 ** ((secondteam - firstteam) / 600);
  wepoint = 1 / (expn + 1);
  points1 = berat * (1 - wepoint);
  expn1 = 10 ** ((firstteam - secondteam) / 600);
  wepoint1 = 1 / (expn1 + 1);
  points2 = berat * (1 - wepoint1);

  // hasil seri
  if (secondteam > firstteam) {
    points3 = berat * (0.5 - wepoint);
    points4 = berat * (0.5 - wepoint1);
  } else if (secondteam < firstteam) {
    points3 = berat * (0.5 - wepoint);
    points4 = berat * (0.5 - wepoint1);
  }
  // rank awal
  ran1 = firstteam;
  ran2 = secondteam;
  ran3 = firstteam;
  ran4 = secondteam;
  ran5 = firstteam;
  ran6 = secondteam;
  coun1 = 1;
  coun2 = 1;
  coun3 = 1;
  coun4 = 1;
  coun5 = 1;
  coun6 = 1;
  teams.forEach((teal) => {
    if (ran1 < teal.points) {
      coun1 += 1;
    }
    if (ran2 < teal.points) {
      coun2 += 1;
    }
    if (ran3 < teal.points) {
      coun3 += 1;
    }
    if (ran4 < teal.points) {
      coun4 += 1;
    }
    if (ran5 < teal.points) {
      coun5 += 1;
    }
    if (ran6 < teal.points) {
      coun6 += 1;
    }
  });

  //rank id
  document.getElementById("rank1").innerText = coun1;
  document.getElementById("rank2").innerText = coun2;

  //perubahan rank
  rank1 = firstteam + points1;
  rank2 = secondteam + points2;
  rank3 = firstteam + points3;
  rank4 = secondteam + points4;
  rank5 = firstteam + -1 * points2;
  rank6 = secondteam + -1 * points1;
  count1 = 1;
  count2 = 1;
  if (points3 < 0) {
    count3 = 0;
    count4 = 1;
  } else if (points4 < 0) {
    count3 = 1;
    count4 = 0;
  }

  count5 = 0;
  count6 = 0;
  teams.forEach((tear) => {
    if (rank1 < tear.points) {
      count1 += 1;
    }
    if (rank2 < tear.points) {
      count2 += 1;
    }
    if (rank3 < tear.points) {
      count3 += 1;
    }
    if (rank4 < tear.points) {
      count4 += 1;
    }
    if (rank5 < tear.points) {
      count5 += 1;
    }
    if (rank6 < tear.points) {
      count6 += 1;
    }
  });

  // hasil
  document.getElementById("a-win").innerText =
    (firstteam + points1).toFixed(2) +
    " (+" +
    points1.toFixed(2) +
    ")" +
    " " +
    (coun1 - count1);
  document.getElementById("b-win").innerText =
    (secondteam + points2).toFixed(2) +
    " (+" +
    points2.toFixed(2) +
    ")" +
    " " +
    (coun2 - count2);
  document.getElementById("home-res").innerText =
    (firstteam + points3).toFixed(2) +
    " (" +
    points3.toFixed(2) +
    ")" +
    " " +
    (coun3 - count3);
  document.getElementById("away-res").innerText =
    (secondteam + points4).toFixed(2) +
    " (" +
    points4.toFixed(2) +
    ")" +
    " " +
    (coun4 - count4);
  document.getElementById("a-lose").innerText =
    (firstteam + -1 * points2).toFixed(2) +
    " (" +
    -1 * points2.toFixed(2) +
    ")" +
    " " +
    (coun5 - count5);
  document.getElementById("b-lose").innerText =
    (secondteam + -1 * points1).toFixed(2) +
    " (" +
    -1 * points1.toFixed(2) +
    ")" +
    " " +
    (coun6 - count6);
};

teamslctdb.onchange = function () {
  points1 = 0;

  // penamaan
  document.getElementById("a-name").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-name").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("a-names").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-names").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("a-names1").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-names1").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("draw-home").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("draw-away").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("poinnya1").innerText = teamslctda.value;
  document.getElementById("poinnya2").innerText = teamslctdb.value;
  // deklarasi tim
  firstteam = parseFloat(teamslctda.value);
  secondteam = parseFloat(teamslctdb.value);
  berat = parseFloat(value.value);
  expn = 10 ** ((secondteam - firstteam) / 600);
  wepoint = 1 / (expn + 1);
  points1 = berat * (1 - wepoint);
  expn1 = 10 ** ((firstteam - secondteam) / 600);
  wepoint1 = 1 / (expn1 + 1);
  points2 = berat * (1 - wepoint1);

  // hasil seri
  if (secondteam > firstteam) {
    points3 = berat * (0.5 - wepoint);
    points4 = berat * (0.5 - wepoint1);
  } else if (secondteam < firstteam) {
    points3 = berat * (0.5 - wepoint);
    points4 = berat * (0.5 - wepoint1);
  }

  // rank awal
  ran1 = firstteam;
  ran2 = secondteam;
  ran3 = firstteam;
  ran4 = secondteam;
  ran5 = firstteam;
  ran6 = secondteam;
  coun1 = 1;
  coun2 = 1;
  coun3 = 1;
  coun4 = 1;
  coun5 = 1;
  coun6 = 1;
  teams.forEach((teal) => {
    if (ran1 < teal.points) {
      coun1 += 1;
    }
    if (ran2 < teal.points) {
      coun2 += 1;
    }
    if (ran3 < teal.points) {
      coun3 += 1;
    }
    if (ran4 < teal.points) {
      coun4 += 1;
    }
    if (ran5 < teal.points) {
      coun5 += 1;
    }
    if (ran6 < teal.points) {
      coun6 += 1;
    }
  });

  //rank id
  document.getElementById("rank1").innerText = coun1;
  document.getElementById("rank2").innerText = coun2;

  //perubahan rank
  rank1 = firstteam + points1;
  rank2 = secondteam + points2;
  rank3 = firstteam + points3;
  rank4 = secondteam + points4;
  rank5 = firstteam + -1 * points2;
  rank6 = secondteam + -1 * points1;
  count1 = 1;
  count2 = 1;
  if (points3 < 0) {
    count3 = 0;
    count4 = 1;
  } else if (points4 < 0) {
    count3 = 1;
    count4 = 0;
  }

  count5 = 0;
  count6 = 0;
  teams.forEach((tear) => {
    if (rank1 < tear.points) {
      count1 += 1;
    }
    if (rank2 < tear.points) {
      count2 += 1;
    }
    if (rank3 < tear.points) {
      count3 += 1;
    }
    if (rank4 < tear.points) {
      count4 += 1;
    }
    if (rank5 < tear.points) {
      count5 += 1;
    }
    if (rank6 < tear.points) {
      count6 += 1;
    }
  });

  // hasil
  document.getElementById("a-win").innerText =
    (firstteam + points1).toFixed(2) +
    " (+" +
    points1.toFixed(2) +
    ")" +
    " " +
    (coun1 - count1);
  document.getElementById("b-win").innerText =
    (secondteam + points2).toFixed(2) +
    " (+" +
    points2.toFixed(2) +
    ")" +
    " " +
    (coun2 - count2);
  document.getElementById("home-res").innerText =
    (firstteam + points3).toFixed(2) +
    " (" +
    points3.toFixed(2) +
    ")" +
    " " +
    (coun3 - count3);
  document.getElementById("away-res").innerText =
    (secondteam + points4).toFixed(2) +
    " (" +
    points4.toFixed(2) +
    ")" +
    " " +
    (coun4 - count4);
  document.getElementById("a-lose").innerText =
    (firstteam + -1 * points2).toFixed(2) +
    " (" +
    -1 * points2.toFixed(2) +
    ")" +
    " " +
    (coun5 - count5);
  document.getElementById("b-lose").innerText =
    (secondteam + -1 * points1).toFixed(2) +
    " (" +
    -1 * points1.toFixed(2) +
    ")" +
    " " +
    (coun6 - count6);
};

const weights = [
  {
    name: "Friendly matches played outside of International Match Calendar windows",
    points: 5,
  },
  {
    name: "Friendly matches played during International Match Calendar windows",
    points: 10,
  },
  { name: "Group phase matches of Nations League competitions", points: 15 },
  {
    name: "Play-off and final matches of Nations League competitions",
    points: 25,
  },
  {
    name: "Qualification matches for Confederations final competitions and for FIFA World Cup final competitions",
    points: 25,
  },
  {
    name: "Confederation final competition matches up until the QF stage",
    points: 35,
  },
  {
    name: "Confederation final competition matches from the QF stage onwards; all FIFA Confederations Cup matches",
    points: 40,
  },
  {
    name: "FIFA World Cup final competition matches up until QF stage",
    points: 50,
  },
  {
    name: "FIFA World Cup final competition matches from QF stage onwards",
    points: 60,
  },
];

weights.forEach((weight) => {
  let z = document.createElement("option");
  z.text = weight.name;
  z.value = weight.points;
  value.appendChild(z);
});

value.onchange = function () {
  points1 = 0;

  // penamaan
  document.getElementById("importance").innerText = value.value;

  document.getElementById("a-name").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-name").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("a-names").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-names").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("a-names1").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("b-names1").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("draw-home").innerText =
    teamslctda.options[teamslctda.selectedIndex].textContent;
  document.getElementById("draw-away").innerText =
    teamslctdb.options[teamslctdb.selectedIndex].textContent;
  document.getElementById("poinnya1").innerText = teamslctda.value;
  document.getElementById("poinnya2").innerText = teamslctdb.value;
  // deklarasi tim
  firstteam = parseFloat(teamslctda.value);
  secondteam = parseFloat(teamslctdb.value);
  berat = parseFloat(value.value);
  expn = 10 ** ((secondteam - firstteam) / 600);
  wepoint = 1 / (expn + 1);
  points1 = berat * (1 - wepoint);
  expn1 = 10 ** ((firstteam - secondteam) / 600);
  wepoint1 = 1 / (expn1 + 1);
  points2 = berat * (1 - wepoint1);

  // hasil seri
  if (secondteam > firstteam) {
    points3 = berat * (0.5 - wepoint);
    points4 = berat * (0.5 - wepoint1);
  } else if (secondteam < firstteam) {
    points3 = berat * (0.5 - wepoint);
    points4 = berat * (0.5 - wepoint1);
  }

  // rank awal
  ran1 = firstteam;
  ran2 = secondteam;
  ran3 = firstteam;
  ran4 = secondteam;
  ran5 = firstteam;
  ran6 = secondteam;
  coun1 = 1;
  coun2 = 1;
  coun3 = 1;
  coun4 = 1;
  coun5 = 1;
  coun6 = 1;
  teams.forEach((teal) => {
    if (ran1 < teal.points) {
      coun1 += 1;
    }
    if (ran2 < teal.points) {
      coun2 += 1;
    }
    if (ran3 < teal.points) {
      coun3 += 1;
    }
    if (ran4 < teal.points) {
      coun4 += 1;
    }
    if (ran5 < teal.points) {
      coun5 += 1;
    }
    if (ran6 < teal.points) {
      coun6 += 1;
    }
  });

  //rank id
  document.getElementById("rank1").innerText = coun1;
  document.getElementById("rank2").innerText = coun2;

  //perubahan rank
  rank1 = firstteam + points1;
  rank2 = secondteam + points2;
  rank3 = firstteam + points3;
  rank4 = secondteam + points4;
  rank5 = firstteam + -1 * points2;
  rank6 = secondteam + -1 * points1;
  count1 = 1;
  count2 = 1;
  if (points3 < 0) {
    count3 = 0;
    count4 = 1;
  } else if (points4 < 0) {
    count3 = 1;
    count4 = 0;
  }

  count5 = 0;
  count6 = 0;
  teams.forEach((tear) => {
    if (rank1 < tear.points) {
      count1 += 1;
    }
    if (rank2 < tear.points) {
      count2 += 1;
    }
    if (rank3 < tear.points) {
      count3 += 1;
    }
    if (rank4 < tear.points) {
      count4 += 1;
    }
    if (rank5 < tear.points) {
      count5 += 1;
    }
    if (rank6 < tear.points) {
      count6 += 1;
    }
  });

  // hasil
  document.getElementById("a-win").innerText =
    (firstteam + points1).toFixed(2) +
    " (+" +
    points1.toFixed(2) +
    ")" +
    " " +
    (coun1 - count1);
  document.getElementById("b-win").innerText =
    (secondteam + points2).toFixed(2) +
    " (+" +
    points2.toFixed(2) +
    ")" +
    " " +
    (coun2 - count2);
  document.getElementById("home-res").innerText =
    (firstteam + points3).toFixed(2) +
    " (" +
    points3.toFixed(2) +
    ")" +
    " " +
    (coun3 - count3);
  document.getElementById("away-res").innerText =
    (secondteam + points4).toFixed(2) +
    " (" +
    points4.toFixed(2) +
    ")" +
    " " +
    (coun4 - count4);
  document.getElementById("a-lose").innerText =
    (firstteam + -1 * points2).toFixed(2) +
    " (" +
    -1 * points2.toFixed(2) +
    ")" +
    " " +
    (coun5 - count5);
  document.getElementById("b-lose").innerText =
    (secondteam + -1 * points1).toFixed(2) +
    " (" +
    -1 * points1.toFixed(2) +
    ")" +
    " " +
    (coun6 - count6);
};
