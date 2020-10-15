
setInterval(() => {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://cashbackreduction.com/notificationOfferwall.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
            if(xhr.responseText){
                var response = JSON.parse(xhr.responseText)
                if(response){
                    if(response.data == 1){
                        var options = {
                            type: "basic",
                            title: "Vos activiter à bien été valider ",
                            message: "salut , "+response.nbr_data+" Penser a visite le site cashbackreduction.com pour consulter  !  ",
                            iconUrl: "extension.png"
                        };
                            browser.notifications.create("", options, function(notificationId) {
                            setTimeout(function(){
                                browser.notifications.clear(notificationId, function(){});
                            }, 7000);
        
                            });
                            browser.notifications.onClicked.addListener(function(notificationId, byUser) {
                                browser.tabs.create({url: "http://cashbackreduction.com/"});
                            });
                    }
                }
            }
        }
    }
    
    xhr.send();

    var xhrIdentiter = new XMLHttpRequest();
    xhrIdentiter.open("GET", "http://cashbackreduction.com/notificationVefierIdentite.php", true);
    xhrIdentiter.onreadystatechange = function() {
      if (xhrIdentiter.readyState == 4) {
        // WARNING! Might be injecting a malicious script!

        if(xhrIdentiter.responseText){
            var response = JSON.parse(xhrIdentiter.responseText)

        if(response){
            if(response.data == 1){

                var options = {
                    type: "basic",
                    title: "Vos document à bien été valider ",
                    message: "salut , "+response.nbr_data+" Vos document à bien été valider vous pouvez maintenant effetuez des virements ",
                    iconUrl: "extension.png"
                };
            
                    browser.notifications.create("", options, function(notificationId) {

                    setTimeout(function(){
                        browser.notifications.clear(notificationId, function(){});
                    }, 7000);

                    });
            
                    browser.notifications.onClicked.addListener(function(notificationId, byUser) {
                        browser.tabs.create({url: "http://cashbackreduction.com/"});
                    });

        }else  if(response.data == 2){

            var options = {
                type: "basic",
                title: "Vos document à été refusé ",
                message: "salut , "+response.nbr_data+" Vos document à été refusé Consulter votre compte pour pour voir votre activite et ressayer",
                iconUrl: "extension.png"
            };
        
                browser.notifications.create("", options, function(notificationId) {

                setTimeout(function(){
                    browser.notifications.clear(notificationId, function(){});
                }, 7000);

                });
        
                browser.notifications.onClicked.addListener(function(notificationId, byUser) {
                    browser.tabs.create({url: "http://cashbackreduction.com/"});
                });

    }
        }

       
      }
    }
    }
    xhrIdentiter.send(); 

    var xhrPayement = new XMLHttpRequest();
    xhrPayement.open("GET", "http://cashbackreduction.com/notificationPayement.php", true);
    xhrPayement.onreadystatechange = function() {
      if (xhrPayement.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        if(xhrPayement.responseText){

        var response = JSON.parse(xhrPayement.responseText)

            if(response){

                if(response.data == 1){

                        var options = {
                            type: "basic",
                            title: "viremment sur "+response.nom_virement+" effectué ",
                            message: "salut , "+response.nbr_data+" Votre viremment de "+response.somme+" à bien été effectué ",
                            iconUrl: "extension.png"
                        };
                    
                            browser.notifications.create("", options, function(notificationId) {

                            setTimeout(function(){
                                browser.notifications.clear(notificationId, function(){});
                            }, 5000);

                            });
                    
                            browser.notifications.onClicked.addListener(function(notificationId, byUser) {
                                browser.tabs.create({url: "http://cashbackreduction.com/"});
                            });

                }
            }
      }
    }
    }

    xhrPayement.send();

    var xhrMessage = new XMLHttpRequest();
    xhrMessage.open("GET", "http://cashbackreduction.com/notificationMessage.php", true);
    xhrMessage.onreadystatechange = function() {
      if (xhrMessage.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        if(xhrMessage.responseText){

        var response = JSON.parse(xhrMessage.responseText)

            if(response){

                if(response.data == 1){

                        var options = {
                            type: "basic",
                            title: "Vous avez recu un message ",
                            message: "Salut , "+response.nbr_data+" Penser a visite le site cashbackreduction.com pour consulter vos messages",
                            iconUrl: "extension.png"
                        };
                    
                            browser.notifications.create("", options, function(notificationId) {

                            setTimeout(function(){
                                browser.notifications.clear(notificationId, function(){});
                            }, 5000);

                            });
                    
                            browser.notifications.onClicked.addListener(function(notificationId, byUser) {
                                browser.tabs.create({url: "http://cashbackreduction.com/"});
                            });

                }
            }
      }
    }
    }

    xhrMessage.send();

    var xhrBanni = new XMLHttpRequest();
    xhrBanni.open("GET", "http://cashbackreduction.com/notificationBani.php", true);
    xhrBanni.onreadystatechange = function() {
      if (xhrBanni.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        if(xhrBanni.responseText){

        var response = JSON.parse(xhrBanni.responseText)

            if(response){

                if(response.data == 1){

                        var options = {
                            type: "basic",
                            title: "Vous avez été Banni par l'administrateur ",
                            message: "Salut , "+response.nbr_data+" Penser a visite le site cashbackreduction.com pour consulter vos messages",
                            iconUrl: "extension.png"
                        };
                    
                            browser.notifications.create("", options, function(notificationId) {

                            setTimeout(function(){
                                browser.notifications.clear(notificationId, function(){});
                            }, 5000);

                            });
                    
                            browser.notifications.onClicked.addListener(function(notificationId, byUser) {
                                browser.tabs.create({url: "http://cashbackreduction.com/"});
                            });

                }else if(response.data == 2){

                    var options = {
                        type: "basic",
                        title: "Vous avez été Debanni par l'administrateur ",
                        message: "Salut , "+response.nbr_data+" Penser a visite le site cashbackreduction.com pour consulter vos messages",
                        iconUrl: "extension.png"
                    };
                
                        browser.notifications.create("", options, function(notificationId) {

                        setTimeout(function(){
                            browser.notifications.clear(notificationId, function(){});
                        }, 5000);

                        });
                
                        browser.notifications.onClicked.addListener(function(notificationId, byUser) {
                            browser.tabs.create({url: "http://cashbackreduction.com/"});
                        });

                }
            }
      }
    }
    }

    xhrBanni.send();
  
}, 10000);
