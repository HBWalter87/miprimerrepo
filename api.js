const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e00dcd39cmshc7f188ae6fa930ep185c53jsn80b71c329d79',
		'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com'
	}
};

fetch('https://allsportsapi2.p.rapidapi.com/api/rankings/uefa/clubs',options).then(response => response.json())
.then(data => {
    console.log(data);
    let count=0
    let cad = `<h1>Top 10 de Clubes UEFA</h1>
                 <table border=2>
                     <tr>
                         <td>Club</td>
                         <td>Posición</td>
                     </tr>`;
    

                     for (elemento of data["rankings"]) {
                        if (count < 10) {
                          count++;
                          cad += `
                              <tr>
                                  <td>${elemento.rowName}</td>
                                  <td>${elemento.ranking}</td>
                              </tr>`;
                        } else {
                          break;
                        }
                      }
                      cad=cad + `</table>`;
    
    document.querySelector("main").innerHTML = cad;
});