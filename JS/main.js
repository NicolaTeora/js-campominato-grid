//1-richiamo l'elemento html contenitore delle celle
const filedGrid = document.getElementById('field');

//2-richiamo il bottone per riempire il contenitore
const generatorCell = document.getElementById('generator'); 

//2.1- creo funzione per generare la griglia
generateCell(filedGrid)//2.2- argomento della funzione sarà il contenitore dove generare l'elemento

//2- creo funzione per generare la griglia
function generateCell(boxGrid){
    for (let i = 0; i < 100; i++){
        const newCell = cellCreate(); //3.1- cellCreate() sara la funzione che conterra le istruzioni per creare gli elementi che compongono la cella di riempimento contenitore
        boxGrid.append(newCell); //3.3- dopo aver generato la cella recupero il risultato recupero il contenitore (boxGrid) e l'aggiungo
    }
}

//3.2- creo la funzione per generare gli elementi che compongono la cella
function cellCreate(boxGrid){
    const cell = document.createElement('div'); //3.2.1 - genero il tag div
    cell.classList.add('cell'); //3.2.2- gli aggiungo la classe 
    //4- creare la gestione del bottone
    cell.addEventListener('click', function(){
        cell.classList.toggle('active'); //4.1- tramite "toggle" dico all'elemento di aggiungere una classe o toglierla se presente
    })
    return cell;
}

