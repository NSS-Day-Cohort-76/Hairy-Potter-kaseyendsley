
debugger
export const firePottery = (pottery, temperature) => {
    pottery.fired = true;
    pottery.cracked = temperature > 2200;
    return pottery;
};


// 5. In the Kiln module, you have a firePottery() 
// function. You need to demonstrate how to use the debugger 
// to verify the values of the parameters for that function 
// when your code runs. Use Loom to record your browser 
// window with the developer tools open and show those values.
