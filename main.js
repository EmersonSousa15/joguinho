var msg = document.querySelector('p#msg')
var prt = 0

function porta0() {
  var confirm = prompt('Deseja mesmo escolher a porta 1 ?')
  prt = 1
  var cm = confirm.toUpperCase()
  
    if (cm != 'SIM' && cm != 'NÃO') {
    alert('[Erro] Verifique os dados e tente novamente!')
  } else if (cm == 'NÃO') {
    alert('Escolha uma porta novamente!')
  }else {
    msg.innerHTML = '<strong>Aperte em Sortear, Boa Sorte!!</strong> '
  }
}

function porta1() {
  let confirm = prompt('Deseja mesmo escolher a porta 2 ?')
  prt = 2
  var cm = confirm.toUpperCase()
  
  if (cm != 'SIM' && cm != 'NÃO') {
    alert('[Erro] Verifique os dados e tente novamente!')
  }else if (cm == 'NÃO') {
    alert('Escolha uma porta novamente!')
  }else {
    msg.innerHTML = '<strong>Aperte em Sortear, Boa Sorte!!</strong> '
  }
}

function porta2() {
  let confirm = prompt('Deseja mesmo escolher a porta 3 ?')
  console.log(confirm.toUpperCase())
  prt = 3
  var cm = confirm.toUpperCase()
  
  if (cm != 'SIM' && cm != 'NÃO') {
    alert('[Erro] Verifique os dados e tente novamente!')
  }else if (cm == 'NÃO') {
    alert('Escolha uma porta novamente!')
  }else {
    msg.innerHTML = '<strong>Aperte em Sortear, Boa Sorte!!</strong> '
  }
}

function porta3() {
  let confirm = prompt('Deseja mesmo escolher a porta 4 ?')
  console.log(confirm.toUpperCase())
  prt = 4
  var cm = confirm.toUpperCase()
  
  if (cm != 'SIM' && cm != 'NÃO') {
    alert('[Erro] Verifique os dados e tente novamente!')
  }else if (cm == 'NÃO') {
    alert('Escolha uma porta novamente!')
  }else {
    msg.innerHTML = '<strong>Aperte em Sortear, Boa Sorte!!</strong> '
  }
}

function porta4() {
  let confirm = prompt('Deseja mesmo escolher a porta 5 ?')
  console.log(confirm.toUpperCase())
  prt = 5
  var cm = confirm.toUpperCase()
  
  if (cm != 'SIM' && cm != 'NÃO') {
    alert('[Erro] Verifique os dados e tente novamente!')
  }else if (cm == 'NÃO') {
    alert('Escolha uma porta novamente!')
  }else {
    msg.innerHTML = '<strong>Aperte em Sortear, Boa Sorte!!</strong> '
  } 
}

var p1 = document.getElementById('porta0_img')
var p2 = document. getElementById('porta1_img')
var p3 = document.getElementById('porta2_img')
var p4 = document.getElementById('porta3_img')
var p5 = document.getElementById('porta4_img')
  
var nr = 0
  
function clicou() {
  
  nr = Math.random()

  if (prt == 0 && nr == 0) {
    alert('[Erro] Escolha uma porta!!')
  } else if (nr <= 0.20) {
        p2.src = 'banana.png'
        p3.src = 'banana.png'
        p4.src = 'banana.png'
        p5.src = 'banana.png'
        p1.src = 'diamante.png'
        if (prt == 1) {
          alert('Você Ganhou!!! 😆')
        } else  {
          alert('Você Perdeu!! 😭')
        }
      } else if (nr <= 0.40) {
        p1.src = 'banana.png'
        p3.src = 'banana.png'
        p4.src = 'banana.png'
        p5.src = 'banana.png'
        p2.src = 'diamante.png'
        if (prt == 2) {
          alert('Você Ganhou!!! 😆')
        }else {
          alert('Você perdeu!! 😭')
        }
      } else if (nr <= 0.60) {
        p1.src = 'banana.png'
        p2.src = 'banana.png'
        p4.src = 'banana.png'
        p5.src = 'banana.png'
        p3.src = 'diamante.png'
        if (prt == 3) {
          alert('Você Ganhou!!! 😆')
        }else{
          alert('Você perdeu!! 😭')
        }
      } else if (nr <= 0.80) {
        p1.src = 'banana.png'
        p2.src = 'banana.png'
        p3.src = 'banana.png'
        p5.src = 'banana.png'
        p4.src = 'diamante.png'
        if (prt == 4) {
          alert('Você Ganhou!!! 😆')
        }else {
          alert('Você perdeu!! 😭')
        }
      } else if (nr > 0.80) {
      p1.src = 'banana.png'
      p2.src = 'banana.png'
      p3.src = 'banana.png'
      p4.src = 'banana.png'
      p5.src = 'diamante.png'
    if (prt == 5) {
      alert('Você Ganhou!!! 😆')
    }else {
      alert('Você perdeu!! 😭')
    }
  }
}

function zera() {
  prt = 0
  nr = 0
  msg.innerHTML = ''
  p1.src = 'porta.png'
  p2.src = 'porta.png'
  p3.src = 'porta.png'
  p4.src = 'porta.png'
  p5.src = 'porta.png'
  
}