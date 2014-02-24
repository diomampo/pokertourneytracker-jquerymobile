var TemplateRunner = (function(){
  return {
    renderTemplate: function(tmpId, tmpObj) {
      var tmp = $(tmpId).html();
      for( var key in tmpObj ) {
        var re = new RegExp('{{' + key + '}}', 'g');
        tmp = tmp.replace(re, tmpObj[key]);
      }
      return tmp;
    }
  }
})();