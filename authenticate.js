<head>
<script src="jquery-1.11.1.min.js">



var url = 'https://api.uber.com/v1/products'

parameters = {
    'server_token': 'XOOq3BBV1kUmpRAbZbZZct4nldes_cxvo8ZBGruV',
    'latitude': 37.775818,
    'longitude': -122.418028,
}

response = requests.get(url, params=parameters)

data = response.json()



</script>
</head>

