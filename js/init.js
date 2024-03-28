document.addEventListener('DOMContentLoaded', function() {
  // Sidenav
  var sidenav = document.querySelectorAll('.sidenav');
  var instace_sidenav = M.Sidenav.init(sidenav, {
  });
  // Função para fechar o sidenav
      var sidenav = document.querySelector(".sidenav");
      var instace_sidenav = M.Sidenav.getInstance(sidenav);
      const fechar = document.getElementById("fechar");
      if(fechar){
      fechar.addEventListener('click', function(){
        instace_sidenav.close();
      })
    }
    var modal = document.querySelectorAll('.modal');
    var instance_modal = M.Modal.init(modal, {
      // specify options here
    });
 

}); 
