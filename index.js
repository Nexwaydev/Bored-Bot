
document.getElementById("btn").addEventListener("click", function(){
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(res => res.json())
  .then(data => {console.log(data)
    document.getElementById("show").textContent = data.activity
    document.getElementById("title").textContent = "🦿HappyBot🦾"
    document.body.classList.add("fun")
  })
})
