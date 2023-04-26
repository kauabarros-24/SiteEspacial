

function transporta(mensagem) {
  var docsetmin = document.getElementById('setminutos');
  var docsetsec = document.getElementById('setsegundos');
  var docrestamin = document.getElementById('restamin');
  var docrestasec = document.getElementById('restasec');

  if (docsetsec.value <= 59) {
    docrestamin.value = docsetmin.value; docrestasec.value = docsetsec.value;
    setTimeout(cronometro, 1000, 'start');
  } else { alert('Há problemas com o tempo configurado!'); }
} function
  cronometro(option, message) {
  var docsetmin = document.getElementById('setminutos'); var
    docsetsec = document.getElementById('setsegundos'); var docrestamin = document.getElementById('restamin'); var
      docrestasec = document.getElementById('restasec'); var docsetminval = docsetmin.value; var docsetsecval = docsetsec.value;
  var docrestaminval = docrestamin.value; var docrestasecval = docrestasec.value; if (option == 'start') { start(message); }
  if (option == 'pause') {
    docrestamin.placeholder = docrestamin.value; docrestasec.placeholder = docrestasec.value;
    alert(`Pausado`); docrestamin.value = '--'; docrestasec.value = '--';
    document.getElementById('paused').innerHTML = 'Pausado em: ' + docrestamin.placeholder + ':' + docrestasec.placeholder
      + '.';
  } if (option == 'reset') {
    docsetmin.value = '00'; docsetsec.value = '00'; docrestamin.value = '00';
    docrestasec.value = '00'; docrestamin.placeholder = ''; docrestasec.placeholder = ''; docsetmin.placeholder = '';
    docsetsec.placeholder = '';
  } if (option == 'resume') {
    document.getElementById('paused').innerHTML = '';
    docrestamin.value = docrestamin.placeholder; docrestasec.value = docrestasec.placeholder; cronometro('start', message);
  } if (option == 'save') { alert(docsetmin.value + ':' + docsetsec.value); }
} function start(alerta) {
  var
    docsetmin = document.getElementById('setminutos'); var docsetsec = document.getElementById('setsegundos'); var
      docrestamin = document.getElementById('restamin'); var docrestasec = document.getElementById('restasec'); /* Se for mais
  que 10 minutos */ if (docrestamin.value > 10) {

    // Se for mais que 10 segundos 
    if ((docrestasec.value <= 59) && (docrestasec.value > 10)) {
      docrestasec.value = docrestasec.value - 1;
      setTimeout(start, 1000);
    }

    // Se for menor ou igual a 10 segundos e mais que 0 segundos
    if ((docrestasec.value <= 10) && (docrestasec.value > 0)) {
      var ts = docrestasec.value - 1;
      docrestasec.value = '0' + ts;
      setTimeout(start, 1000, 'start');
    }

    // Se for menor ou igual a 0 segundos 
    if (docrestasec.value <= 0) {
      docrestasec.value = '59'; docrestamin.value = docrestamin.value - 1; setTimeout(start,
        1000, 'start');
    }
  } /* Se for menor ou igual a 10 minutos e mais que 0 minutos */ if ((docrestamin.value <= 10)
    && (docrestamin.value > 0)) {

    /* Se for mais que 10 segundos */
    if ((docrestasec.value > 10) && (docrestasec.value <= 59)) {
      docrestasec.value = docrestasec.value - 1;
      setTimeout(start, 1000, 'start');
    } /* Se for menor ou igual a 10 segundos e mais que 0 segundos */
    if (docrestasec.value <= 10 && docrestasec.value > 0) {
      var ts = docrestasec.value - 1;
      docrestasec.value = '0' + ts;
      setTimeout(start, 1000, 'start');
    }

    /* Se for menor ou igual a 0 segundos */
    if (docrestasec.value <= 0) {
      var tm = docrestamin.value - 1; docrestamin.value = '0' + tm; docrestasec.value = 59;
      setTimeout(start, 1000, 'start');
    }
  } /* Se for menor ou igual a 0 minutos */ if (docrestamin.value <= 0) {
            /* Se for mais que 10 segundos */ if ((docrestasec.value <= 59) && (docrestasec.value > 10)) {
      docrestasec.value = docrestasec.value - 1;
      setTimeout(start, 1000, 'start');
    }

    /* Se for menor ou igual a 10 segundos e mais que 0 segundos */
    if ((docrestasec.value <= 10) && (docrestasec.value > 0)) {
      var ts = docrestasec.value - 1;
      docrestasec.value = '0' + ts;
      setTimeout(start, 1000, 'start');
    }

    /* Se for menor ou igual a 0 segundos */
    if (docrestasec.value <= 0) {
      if ((docrestamin.value = '00') && (docrestasec.value = '00')) {
        alert('O Elon Musk cancelou às suas viagens espaciasi');
      }
    }
  }
} function Onlynumbers() {
  var tecla = event.keyCode; if ((tecla >= "48") && (tecla <= "57") && (tecla = "186")) { return true; } else { return false; }
}

