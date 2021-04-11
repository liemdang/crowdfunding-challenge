const bookmarkcirle = document.getElementById("bookmark-circle")
const bookmarkSymbol = document.getElementById("bookmark-symbol")
const bookmarkFont = document.querySelector(".bookmark-font")
const bambooStand = document.getElementById("container__bambooStand")
const bambooStandDonation = document.getElementById("choosed-bamboo-stand")
const noReward = document.getElementById("container__noReward")
const noRewardDonation = document.getElementById("choosed-no-reward")
const blackEdition = document.getElementById("container__blackEdition")
const blackEditionDonation = document.getElementById("choosed-black")
const noRewardRadioBtn = document.getElementById("container__noReward-radioBtn")
const bambooStandRadioBtn = document.getElementById("container__bambooStand-radioBtn")
const blackEditionRadioBtn = document.getElementById("container__blackEdition-radioBtn")


function undoSelection(thisID, container) {
  thisID.style.display = "none"
  container.classList.add("border-color")
  container.classList.remove("selected-container")
} 

function setSelection(thisID, container) {
  thisID.style.display = "block"
  container.classList.remove("border-color")
  container.classList.add("selected-container")
}

document.querySelector(".bookmark-container").addEventListener("click", function() {
    if(document.querySelector(".bookmark-font").classList.contains("text-color") === false) {
        bookmarkcirle.style.fill = "hsl(176, 72%, 28%)"
        bookmarkSymbol.style.fill = "white"
        bookmarkFont.classList.add("text-color")
        bookmarkFont.classList.remove("text-secondary")
        bookmarkFont.innerHTML = "Bookmarked"
    } else {
        bookmarkcirle.style.fill = "#2F2F2F"
        bookmarkSymbol.style.fill = "#B1B1B1"
        bookmarkFont.classList.add("text-secondary")
        bookmarkFont.classList.remove("text-color")
        bookmarkFont.innerHTML = "Bookmark"
    }
    
  });

  $('#exampleModalCenter').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  // $('#spende').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })

  function clickedCheckbox() {
    if(noRewardRadioBtn.checked) {
      setSelection(noRewardDonation, noReward)
    } else {
      undoSelection(noRewardDonation, noReward)
    }
    if(bambooStandRadioBtn.checked) {
      setSelection(bambooStandDonation, bambooStand)
    } else {
      undoSelection(bambooStandDonation, bambooStand)
    }
    if(blackEditionRadioBtn.checked) {
      setSelection(blackEditionDonation, blackEdition)
    } else {
      undoSelection(blackEditionDonation, blackEdition)
    }
  }

  function submitNumber() {
    let amountNumber = parseInt(document.getElementById("total-amount").textContent.replace(",",""))
    let totalBackers = parseInt(document.getElementById("total-backers-number").textContent.replace(",",""))
    
    document.getElementById("total-backers-number").textContent = numberWithCommas(totalBackers += 1).toString()
    if( noRewardRadioBtn.checked ) {
      amountNumber += Number(document.getElementById("input__no-reward").value)
      noRewardRadioBtn.checked = false
      undoSelection(noRewardDonation, noReward)
    }
    if( bambooStandRadioBtn.checked ) {
      amountNumber += Number(document.getElementById("input__bamboo").value)
      bambooStandRadioBtn.checked = false
      undoSelection(bambooStandDonation, bambooStand)
    }
    if( blackEditionRadioBtn.checked ) {
      amountNumber += Number(document.getElementById("input__black-edition").value)
      blackEditionRadioBtn.checked = false
      undoSelection(blackEditionDonation, blackEdition)
    }
    
    let commaSeperatedNumber  = numberWithCommas(amountNumber)
    document.getElementById("total-amount").textContent = commaSeperatedNumber.toString()
    document.getElementById("progressbar").style.width = `${commaSeperatedNumber.split(",")[0]}%`
  }
 
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function selectRewardBamboo() {
  bambooStandRadioBtn.checked = true
  clickedCheckbox()
}

function selectRewardBlackEdition() {
  blackEditionRadioBtn.checked = true
  clickedCheckbox()
}
