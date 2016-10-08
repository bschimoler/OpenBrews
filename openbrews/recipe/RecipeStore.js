angular.module('openbrews.recipeStore', ['uuid'])
.service('RecipeStore', function (uuid4) {

  const LOCAL_STORAGE_KEY = "recipesInStorage";

  this.all = function() {
    var oldItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    var items = [];
    if (items) {
      items = JSON.parse(oldItems);
    }
    return items;
  };

  this.insert = function(recipe) {
    recipe.id = uuid4.generate();

    var items = this.all();
    items.push(recipe);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  };

  this.update = function(recipe) {

  }

  this.delete = function(recipe) {
    var items = this.all();
    items = items.filter(function(element) { return element.id != recipe.id; });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }

});
