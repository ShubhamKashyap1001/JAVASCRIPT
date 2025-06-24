const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const resultbox = document.querySelector('#resultbox');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please enter the valid height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please enter the valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        //show the results
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi<24.9 && bmi>18.6){
            resultbox.innerHTML = `Normal range ${bmi}`
        }
        else if(bmi>24.9){
            resultbox.innerHTML = `OverWeight ${bmi}`
        }
        else{
            resultbox.innerHTML = `Under Weight ${bmi}`
        }
    }

});
    
