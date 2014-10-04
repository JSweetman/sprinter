<head>
<script src="jquery-1.11.1.min.js">

var host_url = 'https://api.uber.com/v1/products'

parameters = {
    'server_token': 'XOOq3BBV1kUmpRAbZbZZct4nldes_cxvo8ZBGruV',
    'latitude': 37.775818,
    'longitude': -122.418028,
}

response = requests.get(url, params=parameters)

data = response.json()

$(function () {
        var extractToken = function(hash) {
          var match = hash.match(/access_token=(\w+)/);
          return !!match && match[1];
        };
 
        var setting =
          {
            'host':     'https://api.uber.com/v1/products'
          , 'clientId': YOUR_CLIENT_ID
          };
 
        var authHost     = "https://"     + setting.host;
        var resourceHost = "https://api." + setting.host;
 
        var endUserAuthorizationEndpoint = authHost + "/connect";
 
        var token = extractToken(document.location.hash);
        if (token) {
          $('div.authenticated').show();
 
          $('span.token').text(token);
 
          $.ajax({
              url: resourceHost + '/me'
            , beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "OAuth " + token);
                xhr.setRequestHeader('Accept',        "application/json");
              }
            , success: function (response) {
                var container = $('span.user');
                if (response) {
                  container.text(response.username);
                } else {
                  container.text("An error occurred.");
                }
              }
          });
        } else {
          $('div.authenticate').show();
 
          var authUrl = endUserAuthorizationEndpoint + 
            "?response_type=token" +
            "&client_id="    + setting.clientId +
            "&redirect_uri=" + window.location;
 
          $("a.connect").attr("href", authUrl);
        }
      });
    </script>
    <style>
      .hidden {
        display: none;
      }
    </style>
  </head>
</script>
</head>

