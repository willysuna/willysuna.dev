if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    console.log("Known Mobile Browsers detected! Redirecting...")
    window.location = "https://m.willysuna.dev"
  }else{
    console.log("No known Mobile Browsers detected!")
  }