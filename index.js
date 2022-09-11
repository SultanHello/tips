let OneInp = document.querySelector('.B_Am')
let twoInp = document.querySelector('.Num_Gues')
let btnOut = document.querySelector('.btnOut')
let outDiv = document.querySelector('.outDiv')
let div =document.createElement('div')
let ulst = document.querySelector('.ulst')
let btn1 = document.createElement('button')
let btn2 = document.createElement('button')
let btn3 = document.createElement('button')
let btn4 = document.createElement('button')
let btn5 = document.createElement('button')
btn1.className ='btn1'
btn2.className ='btn2'
btn3.className ='btn3'
btn4.className ='btn4'
btn5.className ='btn5'
div.className ='show'

btnOut.addEventListener('click',function(){
    if(OneInp.value !== '' && twoInp.value !== ''){
        ulst.append(btn1,btn2,btn3,btn4,btn5)
        btn1.innerText = "30% - Керемет жұмыс"
        btn2.innerText = "20% - Жақсы қызмет!"
        btn3.innerText = "15% - Болады"
        btn4.innerText = "10% - Қанағаттырарлық"
        btn5.innerText = "5% - Жаман,ұнамады!"
    btn1.addEventListener('click',function(){
        let a=OneInp.value
        let b = twoInp.value
        outDiv.append(div)
        let float1 =(Number(a)/ Number(b)) / 100 * 30
    
        div.innerText ='Чеавые : ' +  float1.toFixed(1) + 'тг'

    })
    btn2.addEventListener('click',function(){
        let a=OneInp.value
        let b = twoInp.value
        outDiv.append(div)
        let float2 =(Number(a)/ Number(b)) / 100 * 20
    
        div.innerText = 'Чеавые : ' + float2.toFixed(1) + 'тг'
        
    })
    btn3.addEventListener('click',function(){
        let a=OneInp.value
        let b = twoInp.value
        outDiv.append(div)
        let float3 =(Number(a)/ Number(b)) / 100 * 15
    
        div.innerText = 'Чеавые : ' + float3.toFixed(1) + 'тг'
        
    })
    btn4.addEventListener('click',function(){
        let a=OneInp.value
        let b = twoInp.value
        outDiv.append(div)
        let float4 =(Number(a)/ Number(b)) / 100 * 10
    
        div.innerText = 'Чеавые : ' + float4.toFixed(1) + 'тг'
        
    })

    btn5.addEventListener('click',function(){
        let a=OneInp.value
        let b = twoInp.value
        outDiv.append(div)
        let float5 =(Number(a)/ Number(b)) / 100 * 5
    
        div.innerText ='Чеавые : ' +  float5.toFixed(1) + 'тг'
        
    })

    }
    

    
    
    
    
    


})
// let a=OneInp.value
//     let b = twoInp.value
//     outDiv.append(div)
    
//     div.innerText = (Number(a)/ Number(b)) / 100 * 15
    
