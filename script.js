let qHeader = document.getElementById ('header1')
let iMinus = document.getElementById ('minus1')
let iPlus = document.getElementById ('plus1')
let parag = document.getElementById ('prg1')

function show(){
    parag.style.display === 'none' ? parag.style.display = 'block': parag.style.display ='none';
    iPlus.style.display === 'block' ? iPlus.style.display = 'none': iPlus.style.display ='block';
    iMinus.style.display === 'none' ? iMinus.style.display = 'block': iMinus.style.display ='none';

}

qHeader.addEventListener('click',show)
iMinus.addEventListener('click',show)
iPlus.addEventListener('click',show)