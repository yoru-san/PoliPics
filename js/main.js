//var nbrPointsGlobal = 0;
var currentQuestion = 0;

/*var nbrPointsFn = 0;
var nbrPointsLr = 0;
var nbrPointsPs = 0;
var nbrPointsFi = 0;*/

var score = {fn: 0, lr: 0, ps: 0, fi: 0}

function showQuestion(id) {
  $("#titre-question").html(questions[id].question);
  $("#questions").html("");
  for (var i = 0; i < questions[id].reponses.length; i++) {
    var input = "<input type='radio' name='question' value='" + questions[id].reponses[i].points + "' parti='" +questions[id].reponses[i].parti +"'> " + questions[id].reponses[i].reponse + "<br><br>";
    $("#questions").append(input);
  }
}

function submitQuestion() {
  var nbrPoints = $('input[name=question]:checked', '#questions').val();
    
    switch ($('input[name=question]:checked', '#questions').attr("parti")){
        case "fn":
            score.fn += nbrPoints;
            break;
        case "lr":
            score.lr += nbrPoints;
            break;
        case "ps":
            score.ps += nbrPoints;
            break;
        case "fi":
            score.fi += nbrPoints;
            break;
        default:
            alert("ERREUR : parti non trouvé");
            
    }
  //nbrPointsGlobal = nbrPointsGlobal + Number(nbrPoints);

  currentQuestion++;
  if (currentQuestion < questions.length){
    showQuestion(currentQuestion);
  }
    else {
    var parti;
        var max = 0;
        for (i in score){
            if (score[i] > max){
                max = score[i]
                parti = i;
            }
        }
        console.log(parti);

    showImages(parti);

    $("#questions").html("");
    $("#titre-question").html("Merci de nous avoir envoyé vos informations personnelles");
    var element = document.getElementById("valider");
      element.parentNode.removeChild(element);
  }
}

function showImages(nomParti) {
  chrome.storage.local.set({'polipicsParti': nomParti});
  chrome.tabs.executeScript(null, {code: 'setTimeout(() => {location.reload();}, 1000);'});
}

document.addEventListener('DOMContentLoaded', function () {
  showQuestion(0);
  $("#valider").click(function () {
    submitQuestion();
  });
});
