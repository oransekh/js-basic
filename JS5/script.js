function one() {
  const username = "oran"; // Defined within `one()` scope
  function two() {
    const website = "youtube"; // Defined within `two()` scope
    console.log(username); // Accessing `username` from `one()` scope
  }
  two(); // Calls the `two()` function
}
 one()// Calls the `one()` function

 if(true){
    const name = "sabnam"
    if(name === "sabnam"){
        const husband = "oran"
        console.log(name + " " + husband)
    }
 };


 //++++++++++++++++++++
 