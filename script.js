function relogio () {
    
    function criaHorasDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0
    let timer
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++,
            relogio.innerHTML = criaHorasDosSegundos(segundos)
        }, 1000)
    }
    
    document.addEventListener('click', function(event){
        const element = event.target
    
        if(element.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            relogio.classList.remove('.pausado')
            segundos = '0'
        }
    
        if(element.classList.contains('iniciar')) {
            relogio.classList.remove('.pausado')
            clearInterval(timer)
            iniciaRelogio()
        }
    
        if(element.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('.pausado')
        }
    
    })
}

relogio()
