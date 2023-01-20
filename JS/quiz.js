const questions = {
    question0: {
      question: "Laquelle de ces images vous attire ?",
      option0: {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1534152410228-38e97861b36c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4dd25e2a5420abaf7b2d8df6c7ebe065&auto=format&fit=crop&w=1500&q=80",
        personality: "Adventurier"
      },
      option1: {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1524014444623-194fde519952?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50a0bf5cb937121cd79cef6b1f22421e&auto=format&fit=crop&w=750&q=80",
        personality: "Intellectuel"
      },
      option2: {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1517226830096-935b8186475c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5344831319a6b8ce74fafc97fd8f5a4f&auto=format&fit=crop&w=752&q=80",
        personality: "Immersif"
      },
      option3: {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=397bf529b8e82111623d4580174c8d6d&auto=format&fit=crop&w=1050&q=80",
        personality: "Rêveur"
      }
    },
    question1: {
      question: "Choisissez 1 élément pour votre liste de choses à faire",
      option0: {
        type: "string",
        content: "Saut à l'élastique en Nouvelle-Zélande",
        personality: "Adventurier"
      },
      option1: {
        type: "string",
        content: "Visiter le Louvre",
        personality: "Intellectuel"
      },
      option2: {
        type: "string",
        content: "Dégustation à travers l'italie",
        personality: "Immersif"
      },
      option3: {
        type: "string",
        content: "Se faire sérénader assis dans une gondole",
        personality: "Rêveur"
      }
    },
    question2: {
      question: "Vous ne sortez jamais sans?",
      option0: {
        type: "string",
        content: "Mes chaussures",
        personality: "Adventurier"
      },
      option1: {
        type: "string",
        content: "Mes écouteurs et ma musique",
        personality: "Rêveur"
      },
      option2: {
        type: "string",
        content: "Mon livre",
        personality: "Intellectuel"
      },
      option3: {
        type: "string",
        content: "Ma caméra",
        personality: "Immersif"
      }
    },
    question3: {
      question:
        "Vous êtes arrivé à destination, qu'elle est la première chose que vous faites?",
      option0: {
        type: "string",
        content:
          "Prendre les transports en commun dans la ville. C'est le tour de ville le moins cher possible !",
        personality: "Immersif"
      },
      option1: {
        type: "string",
        content:
          "Vous arrêtez à la plus ancienne librairie de la ville sur le chemin de l'hôtel.",
        personality: "Intellectuel"
      },
      option2: {
        type: "string",
        content: "Trouver le point le plus haut pour profiter de la vue",
        personality: "Rêveur"
      },
      option3: {
        type: "string",
        content:
          "Jetez mes sacs et trouvez une activité physique qui fera monter mon adrénaline. La meilleure façon de secouer le décalage horaire.",
        personality: "Adventurier"
      }
    },
    question4: {
      question:
        "Si vous deviez aller à un premier rendez-vous, quelle activité choisiriez-vous ?",
      option0: {
        type: "string",
        content: "Aller dans un escape game",
        personality: "Adventurier"
      },
      option1: {
        type: "string",
        content: "Aller dans un musée",
        personality: "Intellectuel"
      },
      option2: {
        type: "string",
        content: "Marché à l'intérieur de central park",
        personality: "Rêveur"
      },
      option3: {
        type: "string",
        content: "Aller dans un cinéma",
        personality: "Immersif"
      }
    }
  };
  
  const result = {
    Adventurier: [
      "Si vous vous imaginez faire du saut à l'élastique en Nouvelle-Zélande, courir avec les taureaux à Pampelune, danser jusqu'à 6 heures du matin à Berlin, faire de l'héliski du haut d'une montagne à Banff ou descendre l'Amazone en bateau, tous les signes indiquent que vous êtes un voyageur, un aventurier.",
      "National Geographic a une liste des meilleurs voyagistes et pourvoyeurs d'aventure dans le monde qui peuvent valoir le coup d'œil. Bien sûr, vous n'avez pas besoin de faire partie d'un circuit pour vivre une aventure, mais si vous ne savez pas de quoi un voyage d'aventure signifie ou si vous voulez juste une idée du type d'entreprises qui organisent des circuits et de celles à utiliser, c'est un excellent point de départ.",
      "Destinations recommandées pour les voyageurs d'aventure : Nouvelle-Zélande, Brésil, Bolivie, Népal/Tibet, Tanzanie, Inde."],
    Immersif: [
        "Si le voyage est avant tout une aventure humaine, qui implique une rencontre avec un pays, mais aussi les habitants de ce pays. Les voyages immersifs le rappellent, en proposant aux touristes une approche authentique d'une destination.",
        "Ils ne sont plus seulement des spectateurs qui admirent des paysages et observent les autochtones, ils deviennent acteurs de leur voyage. Concrètement, le tourisme immersif consiste à vivre des expériences locales qui enrichissent la vie.",
        "Destinations recommandées pour les voyageurs immersif : Pérou, Thaïlande, Sénégal, Irlande"],
    Intellectuel: [
        "Si le voyage n'est qu'un autre moyen d'élargir votre encyclopédie interne avec l'art, la culture et l'histoire, et que votre itinéraire de rêve comprend des journées remplies de musées, de sites archéologiques, d'architecture révolutionnaire et d'expériences traditionnelles, vous êtes peut-être un voyageur intellectuel.",
        "Heureusement pour vous, les destinations du monde entier s'adressent à l'étudiant qui sommeille en chacun de nous. Le monde regorge de leçons et le voyage est le moyen de les apprendre.",
        "Régions recommandées pour les voyageurs intellectuels : Europe, Inde, Japon, Machu Picchu, Istanbul, Le Caire."],
    Rêveur: [
        "Si vos rêves de voyage sont peuplés d'un coucher de soleil parfait sur une plage isolée des Seychelles, de promenades en gondole à Venise et d'attraper des fleurs de Sakura qui tombent, c'est probablement vous.",
        "Les voyages peuvent être un moyen incroyable d'inspirer la créativité et de se connecter avec votre muse intérieure ! Consultez la liste des 50 endroits les plus rêvés de Travel and Leisure pour une idée générale de ce qui existe en matière de destinations romantiques. des endroits lointains est un rêve réalisé en soi, alors prenez votre passeports et sortez et découvrez le monde.",
        "Lieux recommandés pour les voyageurs rêveurs : Santorin, Venise, Paris, Buenos Aires, Goa, Bali, Phuket, Fidji, Tahiti."],
  };
  
  var score = {
    Adventurier: 0,
    Immersif: 0,
    Intellectuel: 0,
    Rêveur: 0,
  };
  
  var currentQn = 0;
  
  function setupQuestion() {
    var progress = 20 + currentQn * 20;
    var progressbar = document.getElementById("progress");
    progressbar.style.width = progress + "%";
    progressbar.innerText = currentQn + 1 + "/5";
  
    var qn = questions["question" + currentQn];
    var qnText = document.getElementById("question");
    qnText.innerText = qn.question;
    console.log(qn)
  
    for (var i = 0; i < 4; i++) {
      var option = document.getElementById("option" + i);
      var content = option.getElementsByClassName("content")[0];
      var qnOption = qn["option" + i];
      if (qnOption.type == "image") {
        var htmlStr = "<img src='" + qnOption.content + "'>";
        content.innerHTML = htmlStr;
      } else {
        var htmlStr = "<p>" + qnOption.content + "</p>";
        content.innerHTML = htmlStr;
      }
    }
  }
  
  function resetOptions() {
    var btn = document.getElementsByTagName("input");
    btn[0].checked = false;
    btn[1].checked = false;
    btn[2].checked = false;
    btn[3].checked = false;
  }
  
  function select(element) {
    var btn = element.getElementsByTagName("input")[0];
    btn.checked = true;
    next();
  }
  
  function next() {
    var ans = $("input[name=answer]:checked").val();
    var qn = questions["question" + currentQn];
    var personality = qn["option" + ans].personality;
    score[personality]++;
    console.log(qn)
    currentQn = currentQn + 1;
    resetOptions();
    if (currentQn < 5) {
      setupQuestion();
    } else {
      var highestScore = score["Adventurier"];
      var highestPersonality = "Adventurier";
      if (highestScore < score["Intellectuel"]) {
        highestScore = score["Intellectuel"];
        highestPersonality = "Intellectuel";
      }
      if (highestScore < score["Immersif"]) {
        highestScore = score["Immersif"];
        highestPersonality = "Immersif";
      }
      if (highestScore < score["Rêveur"]) {
        highestScore = score["Rêveur"];
        highestPersonality = "Rêveur";
      }
      
      var personalityResult = result[highestPersonality];
      document.getElementById("personality-type").innerText =
       highestPersonality ;
      document.getElementById("personality-part-1").innerText =
        personalityResult[0];
      document.getElementById("personality-part-2").innerText =
        personalityResult[1];
      document.getElementById("personality-recommended").innerText =
        personalityResult[2];
      currentQn = 0;
      showPage(1);
    }
  }
  
  
  function showPage(num) {
    var pages = document.getElementsByClassName("containerq");
    pages[0].style.display = "none";
    pages[1].style.display = "none";
    pages[2].style.display = "none";
    pages[num].style.display = "block";
  }
  