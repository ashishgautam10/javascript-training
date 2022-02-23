let image_array = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg']
let array_length = image_array.length
let i = 0
let set = setInterval(slider_func,6000)
// slider_func -> function call
// 3000 -> 3 seconds

function slider_func(){
    i++
    i = i % array_length
    // i= 0%4=0
    // 1%4=1
    // 2%4=2
    // 3%4=3
    // 4%4=0
    document.querySelector('img').src = `images/${image_array[i]}`
}
function next(){
    i++
    i = i % array_length
    document.querySelector('img').src = `images/${image_array[i]}`
}
function previous(){
    // i--
    // if(i<0){
    //     i = array_length-1
    // }
    // document.querySelector('img').src = `images/${image_array[i]}`

    if (i!=0){
        i--
        document.querySelector('img').src = `images/${image_array[i]}`
    }
    else{
        i = array_length-1
        document.querySelector('img').src = `images/${image_array[i]}`
    } 
}
