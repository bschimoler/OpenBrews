/*global
  angular, window, cordova, StatusBar
*/
(function() {
  'use strict';

  angular.module('openbrews',
    [
      'ionic',
      'uuid',
      'openbrews.myRecipes',
      'openbrews.addRecipe',
      'openbrews.viewRecipe',
      'openbrews.recipeStore'
    ])

  .constant('localStorageKey', "recipesInStorage")

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive

    // Each tab has its own nav history stack:

    .state('recipes', {
      url: '/recipes',
      cache: false,
      templateUrl: 'recipe/list.html',
      controller: 'MyRecipesCtrl'
    })

    .state('add-recipe', {
      url: '/recipes/add',
      templateUrl: 'recipe/add/add-recipe.html',
      controller: 'AddRecipeCtrl'
    })

    .state('view-recipe', {
      url: '/recipes/view/:recipeId',
      templateUrl: 'recipe/view/view-recipe.html',
      controller: 'ViewRecipeCtrl'
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/recipes');

  });

})();
