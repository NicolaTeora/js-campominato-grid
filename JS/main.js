//1-richiamo l'elemento html contenitore delle celle
const filedGrid = document.getElementById('field');

//2-richiamo il bottone per riempire il contenitore
const generatorCellBtn = document.getElementById('generator'); 

//2.1- creo funzione per generare la griglia
//2.2- argomento della funzione sarà il contenitore dove generare l'elemento
generateCell(filedGrid);

//4.1- creo la funzione per generare & refreshare la griglia
//4.2- prima di rigenerare bisognera dire nella funzione di "generazione delle celle" di impostare(2.3) il contenitore come "vuoto" (boxGrid.innerHTML = '';)
generatorCellBtn.addEventListener('click', function(){
    generateCell(filedGrid); //4.2- prima di
})

//2.1- creo funzione per generare la griglia
function generateCell(boxGrid){
    boxGrid.innerHTML = ''; //2.3

    for (let i = 0; i < 100; i++){
        //3.1- cellCreate() sara la funzione che conterra le istruzioni per creare gli elementi che compongono la cella di riempimento contenitore
        const newCell = cellCreate(i); 
        //3.3- dopo aver generato la cella recupero il risultato, recupero il contenitore (boxGrid) e l'aggiungo
        boxGrid.append(newCell); 
    }
    
}

//3.2- creo la funzione per generare gli elementi che compongono la cella
function cellCreate(index){
    
    //3.2.1 - genero il tag div
    const cell = document.createElement('div');
    
    //3.2.2- gli aggiungo la classe
    cell.classList.add('cell');
    
    //4- creare la gestione del bottone
    cell.addEventListener('click', function(){
        console.log(index)
        if (!bombElements.includes(index)){
            //4.1- tramite "toggle" dico all'elemento di aggiungere una classe o toglierla se presente
            cell.classList.toggle('active'); 
        } else {
            alert('BOOM!')
        }
        
    })
    return cell;
}

// genero l'istruzione per la creazione di numeri unici casuali
let bombElements = [];

while (bombElements.length < 16){
    let number = Math.floor((Math.random() * 100) + 1);
    if (!bombElements.includes(number)){
        bombElements.push(number);
    }
}
console.log(bombElements);
