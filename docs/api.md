# Mobile APP "wien wo U"

## U-Bahn + stationen
- URL: http://84.16.242.168:8125/getstations
- Request-Methode:POST
- Request-Format: X-www-urlencoded(Standard)
- request-Daten:
  * empty
- Response-Format:JSON
- response-Daten:
  {
    lines:[
    {
      "name":"U1",
      "color":"#000000",
      "stations":[
      {
        "name":"Volksoper",
        "lat":48.111,
        "lng":16.222
      },
      ...
      ]
    },
    ...
    ]
  }
