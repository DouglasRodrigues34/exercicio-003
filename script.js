function criaRelogio() {
    
    const relogio = document.querySelector('.relogio');
    const iniciarBtn = document.querySelector('.iniciar');
    const pausarBtn = document.querySelector('.pausar');
    const zerarBtn = document.querySelector('.zerar');
  
    let segundos = 0;
    let timer;
  
    function formatarHoras(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
      });
    }
  
    function iniciarRelogio() {
      timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = formatarHoras(segundos);
      }, 1000);
    }
  
    function pausarRelogio() {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  
    function zerarRelogio() {
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
    }
  
    function clickHandler(event) {
      const element = event.target;
  
      if (element.classList.contains('zerar')) {
        zerarRelogio();
      }
  
      if (element.classList.contains('iniciar')) {
        iniciarRelogio();
        relogio.classList.remove('pausado');
      }
  
      if (element.classList.contains('pausar')) {
        pausarRelogio();
      }
    }
  
    document.addEventListener('click', clickHandler);
  }
  
  criaRelogio();
  
