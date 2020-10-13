const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer, network, accounts) { //which network are we on. accounts array
  deployer.deploy(HelloWorld).then(function(instance){ //function returns with promise .then, because deploy is asynchronous code
    instance.setMessage("Hello Again!", {value: 1000000, from: accounts[0]}).then(function(){//setting up the deployment of the SC with an initial charge to the first account.
      //instance.getMessage().then(function(message){
        //console.log("Current message is defined as: " + message);
      //});
    console.log("Success");
    }).catch(function(err){ //catch when 2nd .then failed.
      console.log("error: " + err);
    });
  }).catch(function(err){ //catch when 1st .then failed
    console.log("Deploy failed: " + err);
  });
};
