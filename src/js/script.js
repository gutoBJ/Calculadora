function insert(num) {
   let nume = document.getElementById('res').innerHTML
   document.getElementById('res').innerHTML = nume + num
}

function clean() {
    document.getElementById('res').innerHTML = ''
}

function back() {
    let res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length - 1)
}

function calc() {
    let res = document.getElementById('res').innerHTML

    if (res) {
        document.getElementById('res').innerHTML = eval(res)
    } else {
        document.getElementById('res').innerHTML = 'Nada...'
    }
}