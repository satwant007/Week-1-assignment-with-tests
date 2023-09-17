var counter = 0

function looper(){
    console.clear()
    setTimeout(looper, 1*1000)
    counter++
    console.log(counter)
}
looper()