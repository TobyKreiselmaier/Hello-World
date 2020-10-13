const HelloWorld = artifacts.require("HelloWorld"); //import file

contract("HelloWorld", async function(){
  it("should initialize correctly", async function(){
    let instance = await HelloWorld.deployed();
    let message = await instance.getMessage();
    assert(message === "Hello Again!"
    , "Message should be Hello Again!"); // test for first string, false print second string
  });//simulation
  it("should set the message correctly", async function(){
    let instance = await HelloWorld.deployed();
    await instance.setMessage("Testing Message");
    let message = await instance.getMessage();
    assert(message === "Testing Message"
    , "Message should be the same as we set it to");
  });
});
