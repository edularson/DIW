function fn(cb){
    console.log('executar função de callback')
    console.log(typeof cb)
    cb()
}

fn(function(){
    console.log('função passado por parâmetro')
})