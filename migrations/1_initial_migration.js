const Migrations = artifacts.require("Migrations"); //name of contract, not file!

module.exports = function(deployer) { //'deployer' is a tool truffle gives us
  deployer.deploy(Migrations);
};
