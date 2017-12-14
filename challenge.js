let pause = true

function initialFunction () {
  let counter = document.getElementById("counter")
  let plus = document.getElementById("+")
  let minus = document.getElementById("-")
  let pauseButton = document.getElementById("pause")
  let form = document.getElementById("comment-form")
  let like = document.getElementById("<3")

  document.addEventListener("load", setInterval(function(){
    if (pause) {
     counter.innerText = parseInt(counter.innerText) + 1
  }
  }, 1000))

  plus.addEventListener("click", function(){
    counter.innerText = parseInt(counter.innerText) + 5
  })

  minus.addEventListener("click", function(){
      counter.innerText = parseInt(counter.innerText) - 5
    })

  form.addEventListener("submit", function(){
    event.preventDefault()
    let commentText = document.getElementById("comment-text").value
    let content = `<li>${commentText}</li>`
    let ul = document.getElementById("comments")
    ul.innerHTML += content
  })

  like.addEventListener("click", function(){
    let currentCount = counter.innerText
    let likeUl = document.getElementById('likes')
    if (!likeObj[currentCount]) {
      likeObj[currentCount] =1
      let likeNum = `<li id="like${currentCount}">The number ${currentCount} has been liked once.</li>`

      likeUl.innerHTML += likeNum
    } else {
      let likeLi = document.getElementById(`like${currentCount}`)
      console.log(likeLi)
      likeLi.innerText = `The number ${currentCount} has been liked ${++likeObj[currentCount]} times.`
      likeObj[currentCount] +=1
    }
    console.log(likeObj )
  })


  pauseButton.addEventListener("click", function() {
  if (pause === true){
    document.getElementById("+").disabled = true;
    document.getElementById("-").disabled = true;
    document.getElementById("counter").disabled= true;
    document.getElementById("<3").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("pause").innerText = "resume"
  } else {
    document.getElementById("+").disabled = false;
    document.getElementById("-").disabled = false;
    document.getElementById("<3").disabled = false;
    document.getElementById("submit").disabled = false;
    document.getElementById("counter").disabled= false;
    document.getElementById("pause").innerText = "pause"
  }
  pause = !pause
})





}

let likeObj = {}


initialFunction()
