function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/67tjIemFX/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);

        random_r = Math.floor(Math.random() * 255)+1;
        random_g = Math.floor(Math.random() * 255)+1;
        random_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

        img = document.getElementById("bg_noise_img");

        if(results[0].label == "Barking")
        {
            img.src = 'dog_logo.png';
        }
        else if(results[0].label == "Meowing")
        {
            img.src = 'cat_logo.png';
        }
        else 
        {
            img.src = 'bg_noise_img.png';
        }
    }
}