const img = document.getElementsByTagName('img') 
const calc = document.querySelector('#calc_container')
const inputField = document.querySelectorAll('input')
let inputcol1 = document.querySelectorAll('.value-input')
let topThree = document.querySelectorAll('.topthree')
let sideCols = document.querySelectorAll('.side-col')

// color palette change
changeicon = ()=>{
    if (img[0].src.includes('/icon/sun-svgrepo-com.svg')){
        img[0].src ='/icon/moon-svgrepo-com.svg'
        calc.style.backgroundColor = 'white'
        calc.style.boxShadow = '2px 4px 6px rgba(0, 0, 0, 0.3)'
        
        inputField.forEach(inp =>{
            inp.style.backgroundColor = 'white'
            inp.style.color = 'black'
        })
        inputcol1.forEach(inpcol =>{
            inpcol.style.backgroundColor = 'var(--gray)'
        })
        sideCols.forEach(sidecol =>{
            sidecol.style.backgroundColor = 'var(--orangelight)'
        })
        topThree.forEach(tpthree =>{
            tpthree.style.backgroundColor = 'var(--gray1)'
        })

    } else if (img[0].src.includes('/icon/moon-svgrepo-com.svg')){
        img[0].src = '/icon/sun-svgrepo-com.svg'
        calc.style.backgroundColor = 'black'
        calc.style.boxShadow = 'none'

        inputField.forEach(inp =>{
            inp.style.backgroundColor = 'black'
            inp.style.color = 'white'
        })
        
        inputcol1.forEach(inpcol =>{
            inpcol.style.backgroundColor = 'var(--gray1)'
        })
        sideCols.forEach(sidecol =>{
            sidecol.style.backgroundColor = 'var(--orange)'
        })
        topThree.forEach(tpthree =>{
            tpthree.style.backgroundColor = 'var(--gray)'
        })
    }
}

// calculator
function valueinput(val){
    inputField[1].value += val
}
function deleteval(){
    inputField[1].value = inputField[1].value.toString().slice(0,-1);
    inputField[0].value = ' '
}
function clearall(){
    inputField[1].value = ' '
    inputField[0].value = ' '
}
function res(){
    try{
        inputField[0].value = eval(inputField[1].value)
    }
    catch{
        inputField[0].value = 'Error'
    }
}