function authInterceptor(JWT, AppConstants, $window, $q) {
  'ngInject';

  return {
    // automatically attach the auth token:
    request: function(config){
      if (config.url.indexOf(AppConstants.api) === 0 && JWT.get()){
        config.headers.Authorization = 'Token ' + JWT.get();
      }
      return config;
    },

    // Handle 401:
    responseError: function(rejection){
      if (rejection.status === 401){
        // Clear any JWT Token
        JWT.destroy();
        // Do a hard page reset
        $window.localion.reload();
      }
    }
  }

}

export default authInterceptor;
