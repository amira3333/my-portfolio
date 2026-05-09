function addRecommendation() {
  let message = document.getElementById("new_recommendation");

  if (message.value.trim() != "") {
    
    alert("Thank you for leaving a recommendation!");

   
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");

    element.innerHTML = "<span>&#8220;</span>" + message.value + "<span>&#8221;</span>";

document.getElementById("all_recommendations").prepend(element);
    message.value = "";
  } else {
    alert("Please enter a recommendation message first.");
  }
}