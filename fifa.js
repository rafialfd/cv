let teamslctda = document.getElementById("teamslctd-a");
let teamslctdb = document.getElementById("teamslctd-b");
let awin = document.getElementById("a-win");
let bwin = document.getElementById("b-win");
const teams = [
  { name: "Afghanistan", points: 972.75 },
  { name: "Albania", points: 1388.06 },
  { name: "Algeria", points: 1564.26 },
  { name: "American Samoa", points: 871.61 },
  { name: "Andorra", points: 945.34 },
  { name: "Angola", points: 1263.10 },
  { name: "Anguilla", points: 760.25 },
  { name: "Antigua and Barbuda", points: 986.58 },
  { name: "Argentina", points: 1874.81 },
  { name: "Armenia", points: 1191.42 },
  { name: "Aruba", points: 877.30 },
  { name: "Australia", points: 1580.67 },
  { name: "Austria", points: 1593.45 },
  { name: "Azerbaijan", points: 1136.67 },
  { name: "Bahamas", points: 786.82 },
  { name: "Bahrain", points: 1258.53 },
  { name: "Bangladesh", points: 899.53 },
  { name: "Barbados", points: 909.89 },
  { name: "Belarus", points: 1235.82 },
  { name: "Belgium", points: 1734.71 },
  { name: "Belize", points: 907.00 },
  { name: "Benin", points: 1258.98 },
  { name: "Bermuda", points: 976.87 },
  { name: "Bhutan", points: 880.55 },
  { name: "Bolivia", points: 1329.42 },
  { name: "Bosnia and Herzegovina", points: 1385.84 },
  { name: "Botswana", points: 1063.63 },
  { name: "Brazil", points: 1761.16 },
  { name: "British Virgin Islands", points: 782.14 },
  { name: "Brunei Darussalam", points: 863.09 },
  { name: "Bulgaria", points: 1278.90 },
  { name: "Burkina Faso", points: 1412.49 },
  { name: "Burundi", points: 1078.01 },
  { name: "Cabo Verde", points: 1366.13 },
  { name: "Cambodia", points: 911.54 },
  { name: "Cameroon", points: 1481.24 },
  { name: "Canada", points: 1556.48 },
  { name: "Cayman Islands", points: 855.45 },
  { name: "Central African Republic", points: 1083.57 },
  { name: "Chad", points: 896.85 },
  { name: "Chile", points: 1455.28 },
  { name: "China PR", points: 1251.60 },
  { name: "Chinese Taipei", points: 923.78 },
  { name: "Colombia", points: 1693.09 },
  { name: "Comoros", points: 1187.91 },
  { name: "Congo", points: 1105.96 },
  { name: "Congo DR", points: 1478.35 },
  { name: "Cook Islands", points: 877.53 },
  { name: "Costa Rica", points: 1459.90 },
  { name: "Côte d'Ivoire", points: 1532.98 },
  { name: "Croatia", points: 1717.07 },
  { name: "Cuba", points: 981.42 },
  { name: "Curaçao", points: 1294.65 },
  { name: "Cyprus", points: 1128.33 },
  { name: "Czechia", points: 1501.38 },
  { name: "Denmark", points: 1620.81 },
  { name: "Djibouti", points: 853.58 },
  { name: "Dominica", points: 897.69 },
  { name: "Dominican Republic", points: 1077.95 },
  { name: "Ecuador", points: 1594.78 },
  { name: "Egypt", points: 1563.24 },
  { name: "El Salvador", points: 1225.26 },
  { name: "England", points: 1825.97 },
  { name: "Equatorial Guinea", points: 1195.20 },
  { name: "Estonia", points: 1121.10 },
  { name: "Eswatini", points: 979.01 },
  { name: "Ethiopia", points: 1071.55 },
  { name: "Faroe Islands", points: 1137.14 },
  { name: "Fiji", points: 1029.70 },
  { name: "Finland", points: 1346.41 },
  { name: "France", points: 1877.32 },
  { name: "Gabon", points: 1272.51 },
  { name: "Georgia", points: 1350.18 },
  { name: "Germany", points: 1730.37 },
  { name: "Ghana", points: 1346.31 },
  { name: "Gibraltar", points: 810.14 },
  { name: "Greece", points: 1475.82 },
  { name: "Grenada", points: 982.57 },
  { name: "Guam", points: 825.43 },
  { name: "Guatemala", points: 1243.47 },
  { name: "Guinea", points: 1300.01 },
  { name: "Guinea-Bissau", points: 1108.38 },
  { name: "Guyana", points: 1049.32 },
  { name: "Haiti", points: 1291.71 },
  { name: "Honduras", points: 1380.27 },
  { name: "Hong Kong", points: 1026.63 },
  { name: "Hungary", points: 1500.58 },
  { name: "Iceland", points: 1345.07 },
  { name: "India", points: 1091.03 },
  { name: "Indonesia", points: 1144.88 },
  { name: "IR Iran", points: 1615.30 },
  { name: "Iraq", points: 1447.14 },
  { name: "Israel", points: 1328.33 },
  { name: "Italy", points: 1700.37 },
  { name: "Jamaica", points: 1358.00 },
  { name: "Japan", points: 1660.43 },
  { name: "Jordan", points: 1391.45 },
  { name: "Kazakhstan", points: 1182.96 },
  { name: "Kenya", points: 1182.23 },
  { name: "Korea DPR", points: 1151.05 },
  { name: "Korea Republic", points: 1588.66 },
  { name: "Kosovo", points: 1318.83 },
  { name: "Kuwait", points: 1105.10 },
  { name: "Kyrgyz Republic", points: 1191.14 },
  { name: "Laos", points: 885.03 },
  { name: "Latvia", points: 1090.57 },
  { name: "Lebanon", points: 1187.96 },
  { name: "Lesotho", points: 1067.13 },
  { name: "Liberia", points: 1079.02 },
  { name: "Libya", points: 1182.08 },
  { name: "Liechtenstein", points: 803.57 },
  { name: "Lithuania", points: 1058.42 },
  { name: "Luxembourg", points: 1227.77 },
  { name: "Macau", points: 858.03 },
  { name: "Madagascar", points: 1203.76 },
  { name: "Malawi", points: 1128.03 },
  { name: "Malaysia", points: 1086.22 },
  { name: "Maldives", points: 954.93 },
  { name: "Mali", points: 1459.13 },
  { name: "Malta", points: 987.73 },
  { name: "Mauritania", points: 1170.72 },
  { name: "Mauritius", points: 911.49 },
  { name: "Mexico", points: 1681.03 },
  { name: "Moldova", points: 1004.16 },
  { name: "Mongolia", points: 879.75 },
  { name: "Montenegro", points: 1295.52 },
  { name: "Montserrat", points: 916.75 },
  { name: "Morocco", points: 1755.87 },
  { name: "Mozambique", points: 1224.31 },
  { name: "Myanmar", points: 1011.88 },
  { name: "Namibia", points: 1148.84 },
  { name: "Nepal", points: 914.54 },
  { name: "Netherlands", points: 1757.87 },
  { name: "New Caledonia", points: 1036.95 },
  { name: "New Zealand", points: 1281.57 },
  { name: "Nicaragua", points: 1115.13 },
  { name: "Niger", points: 1179.66 },
  { name: "Nigeria", points: 1585.09 },
  { name: "North Macedonia", points: 1372.04 },
  { name: "Northern Ireland", points: 1362.16 },
  { name: "Norway", points: 1550.94 },
  { name: "Oman", points: 1313.46 },
  { name: "Pakistan", points: 824.60 },
  { name: "Palestine", points: 1244.73 },
  { name: "Panama", points: 1540.64 },
  { name: "Papua New Guinea", points: 974.90 },
  { name: "Paraguay", points: 1503.50 },
  { name: "Peru", points: 1455.87 },
  { name: "Philippines", points: 1094.10 },
  { name: "Poland", points: 1528.00 },
  { name: "Portugal", points: 1763.83 },
  { name: "Puerto Rico", points: 1026.11 },
  { name: "Qatar", points: 1454.96 },
  { name: "Republic of Ireland", points: 1436.63 },
  { name: "Romania", points: 1451.16 },
  { name: "Russia", points: 1525.60 },
  { name: "Rwanda", points: 1126.62 },
  { name: "Samoa", points: 876.41 },
  { name: "San Marino", points: 726.33 },
  { name: "Saudi Arabia", points: 1421.43 },
  { name: "Scotland", points: 1498.35 },
  { name: "Senegal", points: 1688.99 },
  { name: "Serbia", points: 1508.65 },
  { name: "Seychelles", points: 804.16 },
  { name: "Sierra Leone", points: 1148.98 },
  { name: "Singapore", points: 1059.53 },
  { name: "Slovakia", points: 1473.94 },
  { name: "Slovenia", points: 1446.44 },
  { name: "Solomon Islands", points: 1031.89 },
  { name: "Somalia", points: 839.17 },
  { name: "South Africa", points: 1429.73 },
  { name: "South Sudan", points: 970.94 },
  { name: "Spain", points: 1876.40 },
  { name: "Sri Lanka", points: 871.82 },
  { name: "St Kitts and Nevis", points: 1036.33 },
  { name: "St Lucia", points: 976.71 },
  { name: "St Vincent and the Grenadines", points: 968.27 },
  { name: "Sudan", points: 1157.22 },
  { name: "Suriname", points: 1132.43 },
  { name: "Sweden", points: 1514.77 },
  { name: "Switzerland", points: 1649.40 },
  { name: "Syria", points: 1288.56 },
  { name: "Tahiti", points: 1019.04 },
  { name: "Tajikistan", points: 1221.78 },
  { name: "Tanzania", points: 1180.27 },
  { name: "Thailand", points: 1252.14 },
  { name: "The Gambia", points: 1160.38 },
  { name: "Timor-Leste", points: 825.64 },
  { name: "Togo", points: 1147.31 },
  { name: "Tonga", points: 835.64 },
  { name: "Trinidad and Tobago", points: 1222.94 },
  { name: "Tunisia", points: 1483.05 },
  { name: "Türkiye", points: 1599.04 },
  { name: "Turkmenistan", points: 1078.65 },
  { name: "Turks and Caicos Islands", points: 803.98 },
  { name: "Uganda", points: 1264.09 },
  { name: "Ukraine", points: 1546.88 },
  { name: "United Arab Emirates", points: 1370.47 },
  { name: "Uruguay", points: 1673.07 },
  { name: "US Virgin Islands", points: 779.76 },
  { name: "USA", points: 1673.13 },
  { name: "Uzbekistan", points: 1465.34 },
  { name: "Vanuatu", points: 997.01 },
  { name: "Venezuela", points: 1468.05 },
  { name: "Vietnam", points: 1225.68 },
  { name: "Wales", points: 1524.29 },
  { name: "Yemen", points: 1049.49 },
  { name: "Zambia", points: 1255.82 },
  { name: "Zimbabwe", points: 1118.12 },
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
