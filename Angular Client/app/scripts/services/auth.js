'use strict';

angular.module('angularJwtnodeAuthApp').factory('auth', function ($window) {
    // Service logic
    var storage = $window.localStorage;
    var cacheToken;
    var userToken = 'userToken';

    var cacheID;
    var userID = 'userID';

    var cacheEmail;
    var userEmail = 'userEmail';

    // Public API here
    var auth =  {
      setID: function(id){
        cacheID = id;
        storage.setItem(userID, id);
      },
      setEmail: function(email){
        cacheEmail = email;
        storage.setItem(userEmail, email);
      },
      setToken: function(token){
        cacheToken = token;
        storage.setItem(userToken, token);
      },
      getToken: function(){
         if(!cacheToken){
          cacheToken = storage.getItem(userToken);
        }
        return cacheToken;
      },
      getEmail: function(){
         if(!cacheEmail){
          cacheEmail = storage.getItem(userEmail);
        }
        return cacheEmail;
      },
      getID : function(){
         if(!cacheID){
          cacheID = storage.getItem(userID);
        }
        return cacheID;
      },
      isAuthenticated: function(){
        return !!auth.getToken();
      },
      removeToken: function(){
        cacheToken = null;
        cacheEmail = null;
        cacheID = null;
        storage.removeItem(userToken);
        storage.removeItem(userEmail);
        storage.removeItem(userID);
      }
    }

    return auth;
});
