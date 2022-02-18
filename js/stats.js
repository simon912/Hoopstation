var games_url = new URL("https://www.balldontlie.io/api/v1/games?seasons[]=2021");
fetch(games_url).then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {
          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.home_team.full_name + "</td>";
            temp += "<td>" + 'VS' + "</td>";
            temp += "<td>" + itemData.visitor_team.full_name + "</td>";
            temp += "<td>" + itemData.date  + "</td></tr>";
          });
          document.getElementById('nba2021').innerHTML = temp;
        }
      }
    )
  });
  var games_url = new URL("https://www.balldontlie.io/api/v1/games?seasons[]=2020");
  fetch(games_url).then(
    res => {
      res.json().then(
        data => {
          console.log(data.data);
          if (data.data.length > 0) {
            var temp = "";
            data.data.forEach((itemData) => {
              temp += "<tr>";
              temp += "<td>" + itemData.home_team.full_name + "</td>";
              temp += "<td>" + 'VS' + "</td>";
              temp += "<td>" + itemData.visitor_team.full_name + "</td>";
              temp += "<td>" + itemData.date  + "</td></tr>";
            });
            document.getElementById('nba2020').innerHTML = temp;
          }
        }
      )
    });
    var games_url = new URL("https://www.balldontlie.io/api/v1/games?seasons[]=2019");
  fetch(games_url).then(
    res => {
      res.json().then(
        data => {
          console.log(data.data);
          if (data.data.length > 0) {
            var temp = "";
            data.data.forEach((itemData) => {
              temp += "<tr>";
              temp += "<td>" + itemData.home_team.full_name + "</td>";
              temp += "<td>" + 'VS' + "</td>";
              temp += "<td>" + itemData.visitor_team.full_name + "</td>";
              temp += "<td>" + itemData.date  + "</td></tr>";
            });
            document.getElementById('nba2019').innerHTML = temp;
          }
        }
      )
    });
  