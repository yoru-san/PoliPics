var nbrPointsGlobal = 0;
var currentQuestion = 0;

var nbrPointsFn = 0;
var nbrPointsLr = 0;
var nbrPointsPs = 0;
var nbrPointsFi = 0;

function showQuestion(id) {
  $("#titre-question").html(questions[id].question);
  $("#questions").html("");
  for (var i = 0; i < questions[id].reponses.length; i++) {
    var input = "<input type='radio' name='question' value='" + questions[id].reponses[i].points + "' parti='" +questions[id].reponses[i].parti +"'> " + questions[id].reponses[i].reponse + "<br>";
    $("#questions").append(input);
  }
}

function submitQuestion() {
  var nbrPoints = $('input[name=question]:checked', '#questions').val();
    
    switch ($('input[name=question]:checked', '#questions').attr("parti")){
        case "fn":
            nbrPointsFn += nbrPoints;
            break;
        case "lr":
            nbrPointsLr += nbrPoints;
            break;
        case "ps":
            nbrPointsPs += nbrPoints;
            break;
        case "fi":
            nbrPointsFi += nbrPoints;
            break;
        default:
            alert("ERREUR : parti non trouvé");
            
    }
  nbrPointsGlobal = nbrPointsGlobal + Number(nbrPoints);

  currentQuestion++;
  if (currentQuestion < questions.length){
    showQuestion(currentQuestion);
  }else {
    var parti;
    if (nbrPointsGlobal <= 15) {
      parti = "fn";
    }else if (nbrPointsGlobal <= 30) {
      parti = "rep";
    }else if (nbrPointsGlobal > 30) {
      parti = "ps";
    }else {
      parti = "fi";
    }

    showImages(parti);

    $("#questions").html("");
    $("#titre-question").html("Vous faites parti des " + parti);
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
