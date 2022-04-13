//strolly
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/947664517104554005"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("strolly").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("strolly");
  document.getElementById("username");
});
//mozarte
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/667590943989301278"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("mozarte").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("mozarte");
  document.getElementById("username");
});
//focuss
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/404019210306453504"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("focuss").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("focuss");
  document.getElementById("username");
});
//dudu
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/737703038306746411"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("dudu").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("dudu");
  document.getElementById("username");
});