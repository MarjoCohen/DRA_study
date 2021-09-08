// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "etude-dra",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Etude DRA",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -60,
          "angle": 0,
          "width": 708.15,
          "height": 178.45,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "#a8ca09",
          "text": "Bienvenue dans l'étude DRA\n\nNous vous remercions pour votre participation!\n\nMarjolaine & Laura",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontSize": "28",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 200,
          "angle": 0,
          "width": 747.73,
          "height": 101.25,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Chaque fois qu'il sera nécessaire d'appuyer sur le clavier (barre\nespace) pour passer à la suite il y aura une flèche en bas à droite \nde l'écran, sinon n'appuyez sur rien. \nMerci!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 59.63,
          "height": 24.03,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Bienvenue"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -250,
          "angle": 0,
          "width": 769.73,
          "height": 68.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Avant de commencer assurons-nous que l'ordinateur \nest prêt pour enregistrer les sons:",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -362,
          "top": 50,
          "angle": 0,
          "width": 725.74,
          "height": 457.42,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "1. Assurez-vous que le son est activé\n\n2. Demandez à l'enfant de mettre les écouteurs\n\n3. Le navigateur va vous demander si vous autorisez \nl'utilisation du micro, appuyez sur oui.\n\n4. Au cours de l'étude, plusieurs fichers .csv seront \nautomatiquement sauvegardés et téléchargés, c'est normal. \nA la fin de la séance vous pourrez nous les envoyer.\n\n5. Au cours de l'étude, des écrans blancs apparaîtront\nafin de laisser le temps à votre navigateur d'enregistrer\nles fichiers sons. C'est normal, ne vous inquiétez pas,\ndès que le fichier son sera sauvegardé la prochaine consigne\napparaîtra automatiquement. ",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "left"
        },
        {
          "type": "image",
          "left": 360,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Test audio"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -100,
          "angle": 0,
          "width": 738.94,
          "height": 78.11,
          "stroke": "#000000",
          "strokeWidth": 1,
          "fill": "black",
          "text": "Tout ce qui est écrit ou présenté en noir \nest pour toi.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 100,
          "angle": 0,
          "width": 686.16,
          "height": 120.05,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Tout ce qui est écrit en vert est pour \nton orthophoniste. Elle\u002Fil te lira les \nconsignes avant chaque exercice.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -11,
          "angle": 0,
          "width": 771.93,
          "height": 540.59,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Au cours de cette séance, tu vas réaliser plusieurs \nexercices.\n\nTu devras dénommer des images, ou des chiffres \net lire des mots. Les images, chiffres et mots \napparaîtront soit l'un après l'autre soit tous \nensemble à l'écran. \n\nDans tous les cas tu devras les dénommer le plus \nrapidement possible et essayant de faire le moins \nd'erreurs possible.\n\nTu vas maintenant pouvoir t'entraîner aux deux formats\nde présentation (matrice et discret) avec des \nlettres.  \n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "26",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Description"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -238,
          "angle": 0,
          "width": 754.33,
          "height": 31.64,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Matrices: nomme les lettres le plus vite possible",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 50,
          "angle": 0,
          "width": 631.18,
          "height": 361.96,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "L    M    D    A    M    L    D    A    D\n\n\nM    A    D    L    A    D    L    M    A\n  \n\nM    D    L    A    L    A    M    D    L\n\n\nM    A    D    L    D    A    M    L    M",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 361.41,
          "top": 275,
          "angle": 0,
          "width": 54.27,
          "height": 21.87,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress(Space)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes Matrices"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 610.28,
          "height": 191.2,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Discret\nNomme la lettre le plus vite possible\n\n\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "30",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 175,
          "angle": 0,
          "width": 641.07,
          "height": 111.37,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "La lettre va disparaîte et la prochaine apparaîtra \nautomatiquement. \n\nNe touchez pas le clavier avant la fin de l'exercice.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes Discret"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "lettre": "A",
          "": ""
        },
        {
          "lettre": "D",
          "": ""
        },
        {
          "lettre": "M",
          "": ""
        },
        {
          "lettre": "L",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "4"
      },
      "files": {},
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop-discret",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 439.84,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.lettre}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "monospace",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Lettre",
            "timeout": "2000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -25,
          "angle": 0,
          "width": 615.78,
          "height": 361.96,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Super!\n\nMaintenant tu es prêt(e). \nL'étude va commencer.\n\nTu peux prendre des pauses entre chaque \nexercice si tu en as besoin.\nIl y a 7 exercices en tout dans\nl'étude.\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Début de l'étude"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -150,
          "angle": 0,
          "width": 738.94,
          "height": 81,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Dans cet exercice tu vas travailler avec les 4 chiffres suivants. \nIls seront répétés plusieurs fois dans l'exercice. \nDénomme-les une fois avant de commencer.\nRappelle-toi que tu dois nommer tout ce que tu vois à l'écran le plus vite possible.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 271.6,
          "height": 42.94,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "2   3   5   6",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontSize": "38",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -225,
          "angle": 0,
          "width": 492.63,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Exercice 1: Matrice chiffres",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes chiffres matrice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 689.46,
          "height": 491.23,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "5   3   2   6   3   6   5   2   6\n\n\n5   3   2   5   2   5   6   3   6\n\n\n3   5   6   2   6   5   3   2   3\n\n\n5   3   6   2   5   2   6   2   3",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "38",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 375,
          "top": 287.18,
          "angle": 0,
          "width": 36.18,
          "height": 14.580000000000002,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
// ***** Configuration *******************
const codec = 'audio/ogg; codecs=opus';
const stop_event = 'keypress(Space)';
// ***************************************



let setupRecorder = function(stream) {
  console.log("Preparing recorder...");
  
  let mediaRecorder = new MediaRecorder(stream);
  let chunks = []; 
 
  mediaRecorder.onstart = function() {
    console.log("Recording started...");
  }

  mediaRecorder.onstop = async function() {
    console.log("Recording stopped...");

    blobToAudio = (blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      })
    }

    const blob = new Blob(chunks, { 'type' : codec });
    let audio = await blobToAudio(blob);

    c.options.datastore.set('audio', audio);
    console.log("data stored...");

    c.end(reason = stop_event);
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  return(mediaRecorder);
}


let c = this;


// add event listener for ending the recording *before prepare!*
c.options.events[stop_event] = (e) => {
    console.log(e);
    if (recorder.state == 'recording') recorder.stop();
  }


// setup recorder as early as possible before run
let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
let recorder = await setupRecorder(stream);


c.waitFor('run').then(() => recorder.start())
},
        "after:end": function anonymous(
) {
// Script for storing the entire data
// 
// This is not strictly necessary, since lab.js stored the data 
// autmamatially. Theis adds a bit of convenience.
//
// This script must be added to the "after:end" stage.

// ***** Configuration ********************************************
// save the labjs csv data file to JATOS?
// This creates a bit of data duplication because the data is 
// already saved on JATOS in json format. Saving it as csv adds 
// a bit of convenience at the expense of using more storage.
// Leaving it set to `true` is fine, regardless of whether the 
// experiment is running on JATOS or not.
save_to_jatos = true;

// Initiate download of data as 'CSV' file after the experiment?
// (This is about the user's browser. The data will be stored by 
// lab.js regardless)
download_csv = true; 
// ****************************************************************


if (save_to_jatos) {
  const blob = this.options.datastore.exportBlob(filetype = 'csv');

  try{
    filename = "data.csv";
    jatos.uploadResultFile(blob, filename).done(() => { 
      info = info.concat(`CSV uploaded to JATOS as ${ filename }.`);
    });
  } catch (err) {
    "Upload to JATOS failed. "
  }
}


if (download_csv) this.options.datastore.download();
}
      },
      "title": "Matrices chiffres"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 299.09,
          "height": 120.05,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Fin de l'exercice\n\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fin exercice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "6000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -200,
          "angle": 0,
          "width": 756.53,
          "height": 81,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Dans cet exercice tu vas travailler avec les 4 images suivantes. \nDénomme-les plusieurs fois avant de commencer, pour t'assurer que tu les connais bien.\nTu vas voir plusieurs fois chaque image pendant l'exercice, c'est normal.\nRappelle-toi que tu dois nommer tout ce que tu vois à l'écran le plus vite possible.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        },
        {
          "type": "image",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 586.0799999999999,
          "height": 123.11999999999999,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Images.png\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -275,
          "angle": 0,
          "width": 457.44,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Exercice 2: Images Discret",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png",
        "Images.png": "embedded\u002Fa1a3d8b40a6d642dd131f4c02c49c0cbb70f68efd7d1bd3f106e364b76631b79.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes objets discret"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Cle.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Pomme.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        },
        {
          "picture": "Main.png",
          "": ""
        },
        {
          "picture": "Chat.png",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "36"
      },
      "files": {
        "Main.png": "embedded\u002F54497057e59160a46c6196a346be4962cbf536c1e6e842d9e02439ef44767fa8.png",
        "Pomme.png": "embedded\u002F6936272b23353bae0c1852b25b8c939d162b21204397ce442f5d284eafb3a608.png",
        "Chat.png": "embedded\u002F9bfab212b1d8334491a1d31bed5d1b9ac6808124d8718c3b9f3de9d2b209695f.png",
        "Cle.png": "embedded\u002F10b6bf1c33cf9f270bce5d9248675b17a484e7875ad1c4f1ed4ea060d88196ef.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop-imagesD",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 121,
                "height": 119,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.picture] }",
                "autoScale": "width"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "Chat.png": "embedded\u002F9bfab212b1d8334491a1d31bed5d1b9ac6808124d8718c3b9f3de9d2b209695f.png",
              "Cle.png": "embedded\u002F10b6bf1c33cf9f270bce5d9248675b17a484e7875ad1c4f1ed4ea060d88196ef.png",
              "Main.png": "embedded\u002F54497057e59160a46c6196a346be4962cbf536c1e6e842d9e02439ef44767fa8.png",
              "Pomme.png": "embedded\u002F6936272b23353bae0c1852b25b8c939d162b21204397ce442f5d284eafb3a608.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": async function anonymous(
) {
// Script for recording automatically
//
// This script must be added to the "before:prepare" stage.
//
// Note: Browsers block 'unexpected' audio recordings and playback. 
// The experiment must have some interaction before recording. 
//
// author: Tobias Busch (https://github.com/Teebusch)
// date: 2021-05-05


// ***** Configuration *******************
const codec = 'audio/ogg; codecs=opus';
const stop_event = 'keypress(Space)';
// ***************************************



let setupRecorder = function(stream) {
  console.log("Preparing recorder...");

  let mediaRecorder = new MediaRecorder(stream);
  let chunks = []; 

  mediaRecorder.onstart = function() {
    console.log("Recording started...");
  }

  mediaRecorder.onstop = async function() {
    console.log("Recording stopped...");

    blobToAudio = (blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      })
    }

    const blob = new Blob(chunks, { 'type' : codec });
    let audio = await blobToAudio(blob);

    c.options.datastore.set('audio', audio);
    console.log("data stored...");

    c.end(reason = stop_event);
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  return(mediaRecorder);
}


let c = this;


// add event listener for ending the recording *before prepare!*
c.options.events[stop_event] = (e) => {
    console.log(e);
    if (recorder.state == 'recording') recorder.stop();
  }


// setup recorder as early as possible before run
let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
let recorder = await setupRecorder(stream);


c.waitFor('run').then(() => recorder.start())
},
              "after:end": function anonymous(
) {
// Script for storing the entire data
// 
// This is not strictly necessary, since lab.js stored the data 
// autmamatially. Theis adds a bit of convenience.
//
// This script must be added to the "after:end" stage.

// ***** Configuration ********************************************
// save the labjs csv data file to JATOS?
// This creates a bit of data duplication because the data is 
// already saved on JATOS in json format. Saving it as csv adds 
// a bit of convenience at the expense of using more storage.
// Leaving it set to `true` is fine, regardless of whether the 
// experiment is running on JATOS or not.
save_to_jatos = true;

// Initiate download of data as 'CSV' file after the experiment?
// (This is about the user's browser. The data will be stored by 
// lab.js regardless)
download_csv = true; 
// ****************************************************************


if (save_to_jatos) {
  const blob = this.options.datastore.exportBlob(filetype = 'csv');

  try{
    filename = "data.csv";
    jatos.uploadResultFile(blob, filename).done(() => { 
      info = info.concat(`CSV uploaded to JATOS as ${ filename }.`);
    });
  } catch (err) {
    "Upload to JATOS failed. "
  }
}


if (download_csv) this.options.datastore.download(); 
}
            },
            "title": "Screen",
            "timeout": "4000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 299.09,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Fin de l'exercice\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 30.509999999999998,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fin exercice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -75,
          "angle": 0,
          "width": 439.84,
          "height": 329.78,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Exercice 3: Matrices mots\n\n\n\n\n\n\noui  dix  rue  bus",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -125,
          "angle": 0,
          "width": 747.73,
          "height": 81,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Dans cet exercice tu vas lire des mots. Comme pour les autres exercices en matrices\nles mots seront présentés tous ensemble à l'écran. Lis-les le plus vite possible sans\nte tromper. \nAvant de commencer tu peux t'entraîner avec les quatre mots d'exemple ici.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes mots matrice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 771.93,
          "height": 438.35,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "voler  idée  ici  boire  mal  tout  bien  petit  herbe\n\n\n\nton  bruit  beau  tenir  pas  grand  nom  fille  assez\n\n\n\ntant  mer  aussi  mais  dos  soir  côté  alors  rouge\n\n\n\nleur  chez  jeune  près  air  jeter  aider  plus  car",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "26",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 361,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
// ***** Configuration *******************
const codec = 'audio/ogg; codecs=opus';
const stop_event = 'keypress(Space)';
// ***************************************



let setupRecorder = function(stream) {
  console.log("Preparing recorder...");
  
  let mediaRecorder = new MediaRecorder(stream);
  let chunks = []; 
 
  mediaRecorder.onstart = function() {
    console.log("Recording started...");
  }

  mediaRecorder.onstop = async function() {
    console.log("Recording stopped...");

    blobToAudio = (blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      })
    }

    const blob = new Blob(chunks, { 'type' : codec });
    let audio = await blobToAudio(blob);

    c.options.datastore.set('audio', audio);
    console.log("data stored...");

    c.end(reason = stop_event);
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  return(mediaRecorder);
}


let c = this;


// add event listener for ending the recording *before prepare!*
c.options.events[stop_event] = (e) => {
    console.log(e);
    if (recorder.state == 'recording') recorder.stop();
  }


// setup recorder as early as possible before run
let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
let recorder = await setupRecorder(stream);


c.waitFor('run').then(() => recorder.start())
},
        "after:end": function anonymous(
) {
// Script for storing the entire data
// 
// This is not strictly necessary, since lab.js stored the data 
// autmamatially. Theis adds a bit of convenience.
//
// This script must be added to the "after:end" stage.

// ***** Configuration ********************************************
// save the labjs csv data file to JATOS?
// This creates a bit of data duplication because the data is 
// already saved on JATOS in json format. Saving it as csv adds 
// a bit of convenience at the expense of using more storage.
// Leaving it set to `true` is fine, regardless of whether the 
// experiment is running on JATOS or not.
save_to_jatos = true;

// Initiate download of data as 'CSV' file after the experiment?
// (This is about the user's browser. The data will be stored by 
// lab.js regardless)
download_csv = true; 
// ****************************************************************


if (save_to_jatos) {
  const blob = this.options.datastore.exportBlob(filetype = 'csv');

  try{
    filename = "data.csv";
    jatos.uploadResultFile(blob, filename).done(() => { 
      info = info.concat(`CSV uploaded to JATOS as ${ filename }.`);
    });
  } catch (err) {
    "Upload to JATOS failed. "
  }
}


if (download_csv) this.options.datastore.download();
}
      },
      "title": "Matrices Mots"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 12,
          "angle": 0,
          "width": 299.09,
          "height": 120.05,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Fin de l'exercice\n\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fin exercice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": "",
        "undefined": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 14,
          "top": -261,
          "angle": 0,
          "width": 475.03,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Exercice 4: Matrices images",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 361,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        },
        {
          "type": "image",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 683.76,
          "height": 143.64,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Images.png\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -175,
          "angle": 0,
          "width": 756.53,
          "height": 60.03,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Dans cet exercice tu vas travailler avec les 4 images suivantes. \nDénomme-les plusieurs fois avant de commencer, pour t'assurer que tu les connais bien.\nTu vas voir plusieurs fois chaque image pendant l'exercice, c'est normal.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png",
        "Images.png": "embedded\u002Fa1a3d8b40a6d642dd131f4c02c49c0cbb70f68efd7d1bd3f106e364b76631b79.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes images matrice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "image",
          "left": 0,
          "top": -10.91,
          "angle": 0,
          "width": 719.74,
          "height": 467.46000000000004,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Images-Matrices.png\"] }"
        },
        {
          "type": "image",
          "left": 363.19,
          "top": 280.31,
          "angle": 0,
          "width": 40.87,
          "height": 16.47,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Images-Matrices.png": "embedded\u002Fc987f71cc22619b39d7dd1432a0d9aabf09a4b5cf4304fb71cb7d4644caa9bc7.png",
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
// Script for recording automatically
//
// This script must be added to the "before:prepare" stage.
//
// Note: Browsers block 'unexpected' audio recordings and playback. 
// The experiment must have some interaction before recording. 
//
// author: Tobias Busch (https://github.com/Teebusch)
// date: 2021-05-05


// ***** Configuration *******************
const codec = 'audio/ogg; codecs=opus';
const stop_event = 'keypress(Space)';
// ***************************************



let setupRecorder = function(stream) {
  console.log("Preparing recorder...");

  let mediaRecorder = new MediaRecorder(stream);
  let chunks = []; 

  mediaRecorder.onstart = function() {
    console.log("Recording started...");
  }

  mediaRecorder.onstop = async function() {
    console.log("Recording stopped...");

    blobToAudio = (blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      })
    }

    const blob = new Blob(chunks, { 'type' : codec });
    let audio = await blobToAudio(blob);

    c.options.datastore.set('audio', audio);
    console.log("data stored...");

    c.end(reason = stop_event);
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  return(mediaRecorder);
}


let c = this;


// add event listener for ending the recording *before prepare!*
c.options.events[stop_event] = (e) => {
    console.log(e);
    if (recorder.state == 'recording') recorder.stop();
  }


// setup recorder as early as possible before run
let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
let recorder = await setupRecorder(stream);


c.waitFor('run').then(() => recorder.start())
},
        "after:end": function anonymous(
) {
// Script for storing the entire data
// 
// This is not strictly necessary, since lab.js stored the data 
// autmamatially. Theis adds a bit of convenience.
//
// This script must be added to the "after:end" stage.

// ***** Configuration ********************************************
// save the labjs csv data file to JATOS?
// This creates a bit of data duplication because the data is 
// already saved on JATOS in json format. Saving it as csv adds 
// a bit of convenience at the expense of using more storage.
// Leaving it set to `true` is fine, regardless of whether the 
// experiment is running on JATOS or not.
save_to_jatos = true;

// Initiate download of data as 'CSV' file after the experiment?
// (This is about the user's browser. The data will be stored by 
// lab.js regardless)
download_csv = true; 
// ****************************************************************


if (save_to_jatos) {
  const blob = this.options.datastore.exportBlob(filetype = 'csv');

  try{
    filename = "data.csv";
    jatos.uploadResultFile(blob, filename).done(() => { 
      info = info.concat(`CSV uploaded to JATOS as ${ filename }.`);
    });
  } catch (err) {
    "Upload to JATOS failed. "
  }
}


if (download_csv) this.options.datastore.download();
}
      },
      "title": "Matrices Images"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 299.09,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Fin de l'exercice\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fin exercice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": -14,
          "top": -225,
          "angle": 0,
          "width": 422.25,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Exercice 4: mots discret\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -160,
          "angle": 0,
          "width": 712.55,
          "height": 81,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Dans cet exercice tu vas lire des mots. Comme pour les autres exercices discrets,\nles mots seront présentés un par un à l'écran. \nLis-les le plus vite possible sans te tromper. \nAppuie sur le clavier quand tu es prêt(e).",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes mots discret"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "mot": "bout",
          "": ""
        },
        {
          "mot": "fin",
          "": ""
        },
        {
          "mot": "vrai",
          "": ""
        },
        {
          "mot": "puis",
          "": ""
        },
        {
          "mot": "jeu",
          "": ""
        },
        {
          "mot": "comme",
          "": ""
        },
        {
          "mot": "voir",
          "": ""
        },
        {
          "mot": "quand",
          "": ""
        },
        {
          "mot": "trop",
          "": ""
        },
        {
          "mot": "blanc",
          "": ""
        },
        {
          "mot": "peu",
          "": ""
        },
        {
          "mot": "tirer",
          "": ""
        },
        {
          "mot": "gros",
          "": ""
        },
        {
          "mot": "heure",
          "": ""
        },
        {
          "mot": "avoir",
          "": ""
        },
        {
          "mot": "mot",
          "": ""
        },
        {
          "mot": "tard",
          "": ""
        },
        {
          "mot": "forme",
          "": ""
        },
        {
          "mot": "mon",
          "": ""
        },
        {
          "mot": "avant",
          "": ""
        },
        {
          "mot": "eau",
          "": ""
        },
        {
          "mot": "après",
          "": ""
        },
        {
          "mot": "même",
          "": ""
        },
        {
          "mot": "ami",
          "": ""
        },
        {
          "mot": "suite",
          "": ""
        },
        {
          "mot": "dès",
          "": ""
        },
        {
          "mot": "seul",
          "": ""
        },
        {
          "mot": "jour",
          "": ""
        },
        {
          "mot": "ainsi",
          "": ""
        },
        {
          "mot": "sans",
          "": ""
        },
        {
          "mot": "dans",
          "": ""
        },
        {
          "mot": "aimer",
          "": ""
        },
        {
          "mot": "coup",
          "": ""
        },
        {
          "mot": "jouer",
          "": ""
        },
        {
          "mot": "que",
          "": ""
        },
        {
          "mot": "joli",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "36"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
// Script for recording automatically
//
// This script must be added to the "before:prepare" stage.
//
// Note: Browsers block 'unexpected' audio recordings and playback. 
// The experiment must have some interaction before recording. 
//
// author: Tobias Busch (https://github.com/Teebusch)
// date: 2021-05-05


// ***** Configuration *******************
const codec = 'audio/ogg; codecs=opus';
const stop_event = 'keypress(Space)';
// ***************************************



let setupRecorder = function(stream) {
  console.log("Preparing recorder...");

  let mediaRecorder = new MediaRecorder(stream);
  let chunks = []; 

  mediaRecorder.onstart = function() {
    console.log("Recording started...");
  }

  mediaRecorder.onstop = async function() {
    console.log("Recording stopped...");

    blobToAudio = (blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      })
    }

    const blob = new Blob(chunks, { 'type' : codec });
    let audio = await blobToAudio(blob);

    c.options.datastore.set('audio', audio);
    console.log("data stored...");

    c.end(reason = stop_event);
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  return(mediaRecorder);
}


let c = this;


// add event listener for ending the recording *before prepare!*
c.options.events[stop_event] = (e) => {
    console.log(e);
    if (recorder.state == 'recording') recorder.stop();
  }


// setup recorder as early as possible before run
let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
let recorder = await setupRecorder(stream);


c.waitFor('run').then(() => recorder.start())
},
        "after:end": function anonymous(
) {
// Script for storing the entire data
// 
// This is not strictly necessary, since lab.js stored the data 
// autmamatially. Theis adds a bit of convenience.
//
// This script must be added to the "after:end" stage.

// ***** Configuration ********************************************
// save the labjs csv data file to JATOS?
// This creates a bit of data duplication because the data is 
// already saved on JATOS in json format. Saving it as csv adds 
// a bit of convenience at the expense of using more storage.
// Leaving it set to `true` is fine, regardless of whether the 
// experiment is running on JATOS or not.
save_to_jatos = true;

// Initiate download of data as 'CSV' file after the experiment?
// (This is about the user's browser. The data will be stored by 
// lab.js regardless)
download_csv = true; 
// ****************************************************************


if (save_to_jatos) {
  const blob = this.options.datastore.exportBlob(filetype = 'csv');

  try{
    filename = "data.csv";
    jatos.uploadResultFile(blob, filename).done(() => { 
      info = info.concat(`CSV uploaded to JATOS as ${ filename }.`);
    });
  } catch (err) {
    "Upload to JATOS failed. "
  }
}


if (download_csv) this.options.datastore.download();
}
      },
      "title": "Loop-motsD",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 387.06,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.mot}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "monospace",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "4000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 299.09,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Fin de l'exercice\n",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fin exercice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -250,
          "angle": 0,
          "width": 492.63,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Exercice 6: chiffres discret",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -135,
          "angle": 0,
          "width": 738.94,
          "height": 81,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Dans cet exercice tu vas travailler avec les 4 chiffres suivants. \nIls seront répétés plusieurs fois dans l'exercice. \nDénomme-les une fois avant de commencer.\nRappelle-toi que tu dois nommer tout ce que tu vois à l'écran le plus vite possible.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 281.5,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "2    3    5    6",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes Chiffres Discret"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        },
        {
          "chiffres": "3",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "6",
          "": ""
        },
        {
          "chiffres": "2",
          "": ""
        },
        {
          "chiffres": "5",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "36"
      },
      "files": {},
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {
        "after:end": function anonymous(
) {
// Script for storing the entire data
// 
// This is not strictly necessary, since lab.js stored the data 
// autmamatially. Theis adds a bit of convenience.
//
// This script must be added to the "after:end" stage.

// ***** Configuration ********************************************
// save the labjs csv data file to JATOS?
// This creates a bit of data duplication because the data is 
// already saved on JATOS in json format. Saving it as csv adds 
// a bit of convenience at the expense of using more storage.
// Leaving it set to `true` is fine, regardless of whether the 
// experiment is running on JATOS or not.
save_to_jatos = true;

// Initiate download of data as 'CSV' file after the experiment?
// (This is about the user's browser. The data will be stored by 
// lab.js regardless)
download_csv = true; 
// ****************************************************************


if (save_to_jatos) {
  const blob = this.options.datastore.exportBlob(filetype = 'csv');

  try{
    filename = "data.csv";
    jatos.uploadResultFile(blob, filename).done(() => { 
      info = info.concat(`CSV uploaded to JATOS as ${ filename }.`);
    });
  } catch (err) {
    "Upload to JATOS failed. "
  }
}


if (download_csv) this.options.datastore.download();
}
      },
      "title": "Loop-DigitsD",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 475.03,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.chiffres}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "monospace",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "2000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 299.09,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Fin de l'exercice",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 361,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fin exercice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 15,
          "top": -225,
          "angle": 0,
          "width": 457.44,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Exercice 7: images discret\nsans répétition",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 350,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -75,
          "angle": 0,
          "width": 694.95,
          "height": 101.97,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#a8ca09",
          "text": "Dans cet exercice tu vas voir des images à l'écran et tu devras les dénommer.\nCette fois pas de répétition, tu vas voir 36 images toutes différentes les unes\ndes autres.\nNomme-les le plus vite que tu peux sans te tromper.\nAppuie sur le clavier quand tu es prêt(e).",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "16",
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consignes Deno"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "images": "Umbrella.jpg",
          "": ""
        },
        {
          "images": "Carrot.jpg",
          "": ""
        },
        {
          "images": "Guitare.jpg",
          "": ""
        },
        {
          "images": "Candle.jpg",
          "": ""
        },
        {
          "images": "Piano.jpg",
          "": ""
        },
        {
          "images": "Turtle.jpg",
          "": ""
        },
        {
          "images": "Butterfly.jpg",
          "": ""
        },
        {
          "images": "Pencil.jpg",
          "": ""
        },
        {
          "images": "Giraffe.jpg",
          "": ""
        },
        {
          "images": "Tractor.jpg",
          "": ""
        },
        {
          "images": "Brush.jpg",
          "": ""
        },
        {
          "images": "Feather.jpg",
          "": ""
        },
        {
          "images": "Swing.jpg",
          "": ""
        },
        {
          "images": "Nail.jpg",
          "": ""
        },
        {
          "images": "Elephant.jpg",
          "": ""
        },
        {
          "images": "Motorcycle.jpg",
          "": ""
        },
        {
          "images": "Drum.jpg",
          "": ""
        },
        {
          "images": "Boot.jpg",
          "": ""
        },
        {
          "images": "Strawberry.jpg",
          "": ""
        },
        {
          "images": "Monkey.jpg",
          "": ""
        },
        {
          "images": "Binoculars.jpg",
          "": ""
        },
        {
          "images": "Lion.jpg",
          "": ""
        },
        {
          "images": "Match.jpg",
          "": ""
        },
        {
          "images": "Spider.jpg",
          "": ""
        },
        {
          "images": "Donkey.jpg",
          "": ""
        },
        {
          "images": "Bicycle.jpg",
          "": ""
        },
        {
          "images": "Sled.jpg",
          "": ""
        },
        {
          "images": "Belt.jpg",
          "": ""
        },
        {
          "images": "Tie.jpg",
          "": ""
        },
        {
          "images": "Lemon.jpg",
          "": ""
        },
        {
          "images": "Rabbit.jpg",
          "": ""
        },
        {
          "images": "Banana.jpg",
          "": ""
        },
        {
          "images": "Hammer.jpg",
          "": ""
        },
        {
          "images": "Pear.jpg",
          "": ""
        },
        {
          "images": "Pineapple.jpg",
          "": ""
        },
        {
          "images": "Chain.jpg",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "36"
      },
      "files": {
        "Pear.jpg": "embedded\u002F6ca0eecb99b35c086ad563230e8103cf4c778eb8f98b5a3e9b0862ac6c090d6e.jpg",
        "Pencil.jpg": "embedded\u002F964cb600b9b002dfee293bd7e4b82543741e1dafbe6bb394183625b6b3ff5a56.jpg",
        "Piano.jpg": "embedded\u002F6c00fdfda5ec853a8965b5e3e330d3ef443d1cbad5e4577c849189c3578ab191.jpg",
        "Pineapple.jpg": "embedded\u002F2a714ccd042687f582d9bb762fdd0e287631a050402327492871c3e00d79f5d9.jpg",
        "Rabbit.jpg": "embedded\u002F9400d5d1e10c74bf76571c96cc26bb80cd04e22a2d41f9ace398bf041a0a8457.jpg",
        "Sled.jpg": "embedded\u002F2c07ca2d2c237b44b3e397f8fc003e96dde2922bc0527a5307e1dfc40aa330bb.jpg",
        "Spider.jpg": "embedded\u002F3a92ff1c442dc49e2dcb0ab3d083ce7c023376cc6c1871e290bc6abeb698275e.jpg",
        "Strawberry.jpg": "embedded\u002Fb39ee8d352f16eac45bb9b75356a7b0037729733195537a8f716b39284529828.jpg",
        "Swing.jpg": "embedded\u002Fb00774613b8fa8f598e7c0a2d11f74f52fae2be7d6a4eedaada32e46297d12d6.jpg",
        "Tie.jpg": "embedded\u002F3566696b468315ce557e46d17e81c9b838de0a054565577e815a9611caa0d5ea.jpg",
        "Tractor.jpg": "embedded\u002Fbca639c15172acebb7954ca3a5bd1b885354d3bfabd652cd3a2079df855a40cf.jpg",
        "Turtle.jpg": "embedded\u002Fa2b3f0951d8ad98e943b12cd81d65ff8313c3ba71faf20083bedd7927987cb3c.jpg",
        "Umbrella.jpg": "embedded\u002Fa334c786868eca671f52b83cc946cee0d60660e25f992a3cc1feb4f109e1bb1a.jpg",
        "Banana.jpg": "embedded\u002F1769670557a77e5ca7097d35c5db5a706a0199ee3e5c334e4aec38d744225cd6.jpg",
        "Belt.jpg": "embedded\u002F857f479a239462390dab6c3eb86670cad2e36c4a9a93ae6f670d42a453d345ff.jpg",
        "Bicycle.jpg": "embedded\u002Fc6ae3f14d8161df2f05dc87a78b4cfbcee133956bc94c9854e80dace283c27fd.jpg",
        "Binoculars.jpg": "embedded\u002F33d0baa0b89e74c5d4d4b9b42dc5b451b6107f44c22f51572b75d2feb30f5321.jpg",
        "Boot.jpg": "embedded\u002F96e633a7a244abbf0092da52ab169901feced9e9638c832aa78e71ea4114afa0.jpg",
        "Brush.jpg": "embedded\u002F32ec600292269900f4705581fd98eb674c7b3ec451be9ed92b04f4446e63f8c8.jpg",
        "Butterfly.jpg": "embedded\u002F681549ec62cc2865cb02f2753aee72760afdb6e8902b9d31563c378e0fb7707d.jpg",
        "Candle.jpg": "embedded\u002F3586ca6467d15598738ccd672e603a72736cc2b6c167e8709f126b822a7c293e.jpg",
        "Carrot.jpg": "embedded\u002Ff8275337188a492154e9fe8260ce6944cdd1421b2d8803c982a0f0edbaffcb36.jpg",
        "Chain.jpg": "embedded\u002F8201b8f6881433afbf036d4231d1186d24abaaf9d8794bd78d055c4e8e88f83c.jpg",
        "Donkey.jpg": "embedded\u002Ffcc67fc2585919cecb4a25bf5fa99c31f9485552290a4eef124653bd3268efbb.jpg",
        "Drum.jpg": "embedded\u002Fc6031343f8d34d82eeae5f82f51e6de4660ed448a63c2d78be719440ad28f886.jpg",
        "Elephant.jpg": "embedded\u002Fccbba699b646283d01684a37e019547a88860522e34fd2be24995846ab0ce306.jpg",
        "Feather.jpg": "embedded\u002F985a2dca2cba2e749fabae4c1b226cc6b648cc64bd10886d7b83e39ee4d6f556.jpg",
        "Giraffe.jpg": "embedded\u002F28411370f6eb8886b55e0cca1a7c870d97217dc294dded9facaf93b8073f3461.jpg",
        "Guitare.jpg": "embedded\u002F58e461dd5465759f29c75f9fc2ce8fba0a8de2d4ca1788167ebb5ef291eee5f9.jpg",
        "Hammer.jpg": "embedded\u002F5650e3ae8e197bfe22fe59789eaef3d4f0a36bd651faf71d84e3cca921a93fb1.jpg",
        "Lemon.jpg": "embedded\u002Fa8bd14de5e94b0f6d81e3a5f68aac38e7f7da37735af8bc6d09309cef2c38fe5.jpg",
        "Lion.jpg": "embedded\u002Fffd26f2ed78d14dab1efaac23291eb211d831a62cc79103c43b4e3c6bfb3cad1.jpg",
        "Match.jpg": "embedded\u002Fa4e1f5a02056c645e2a77bf44f4ce0ec6e2b84d38b4a95a1fc0e545e5a8fc94a.jpg",
        "Monkey.jpg": "embedded\u002Fb050e62c6e03c6b295d0c29d66af444abe33206d042b6a16935b0191da619d81.jpg",
        "Motorcycle.jpg": "embedded\u002F1bbb4a8541881587e7ed1bfc9440391f84605f435cfb119db81313e17a8c6384.jpg",
        "Nail.jpg": "embedded\u002F13b903984c99ca2a91ea118c42a47ef9d2c7d9f9a0d3b2473df3230bfe0d90b4.jpg"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
// Script for recording automatically
//
// This script must be added to the "before:prepare" stage.
//
// Note: Browsers block 'unexpected' audio recordings and playback. 
// The experiment must have some interaction before recording. 
//
// author: Tobias Busch (https://github.com/Teebusch)
// date: 2021-05-05


// ***** Configuration *******************
const codec = 'audio/ogg; codecs=opus';
const stop_event = 'keypress(Space)';
// ***************************************



let setupRecorder = function(stream) {
  console.log("Preparing recorder...");

  let mediaRecorder = new MediaRecorder(stream);
  let chunks = []; 

  mediaRecorder.onstart = function() {
    console.log("Recording started...");
  }

  mediaRecorder.onstop = async function() {
    console.log("Recording stopped...");

    blobToAudio = (blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      })
    }

    const blob = new Blob(chunks, { 'type' : codec });
    let audio = await blobToAudio(blob);

    c.options.datastore.set('audio', audio);
    console.log("data stored...");

    c.end(reason = stop_event);
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  return(mediaRecorder);
}


let c = this;


// add event listener for ending the recording *before prepare!*
c.options.events[stop_event] = (e) => {
    console.log(e);
    if (recorder.state == 'recording') recorder.stop();
  }


// setup recorder as early as possible before run
let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
let recorder = await setupRecorder(stream);


c.waitFor('run').then(() => recorder.start())
},
        "after:end": function anonymous(
) {
// Script for storing the entire data
// 
// This is not strictly necessary, since lab.js stored the data 
// autmamatially. Theis adds a bit of convenience.
//
// This script must be added to the "after:end" stage.

// ***** Configuration ********************************************
// save the labjs csv data file to JATOS?
// This creates a bit of data duplication because the data is 
// already saved on JATOS in json format. Saving it as csv adds 
// a bit of convenience at the expense of using more storage.
// Leaving it set to `true` is fine, regardless of whether the 
// experiment is running on JATOS or not.
save_to_jatos = true;

// Initiate download of data as 'CSV' file after the experiment?
// (This is about the user's browser. The data will be stored by 
// lab.js regardless)
download_csv = true; 
// ****************************************************************


if (save_to_jatos) {
  const blob = this.options.datastore.exportBlob(filetype = 'csv');

  try{
    filename = "data.csv";
    jatos.uploadResultFile(blob, filename).done(() => { 
      info = info.concat(`CSV uploaded to JATOS as ${ filename }.`);
    });
  } catch (err) {
    "Upload to JATOS failed. "
  }
}


if (download_csv) this.options.datastore.download();
}
      },
      "title": "Loop-Deno",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "monospace",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 121,
                "height": 119,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.images] }",
                "autoScale": "width"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "Cle.png": "embedded\u002F10b6bf1c33cf9f270bce5d9248675b17a484e7875ad1c4f1ed4ea060d88196ef.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "4000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 299.09,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Fin de l'exercice",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "monospace",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 361,
          "top": 275,
          "angle": 0,
          "width": 67,
          "height": 27,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Arrow.png\"] }"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "Arrow.png": "embedded\u002F6a36a149d09b33313c5821850cd53d3284e017af572151510808a8cd78af90af.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Fin exercice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Blank",
      "timeout": "5000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "image",
          "left": 0.5,
          "top": 0,
          "angle": 0,
          "width": 797.64,
          "height": 588.9300000000001,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Goodbye.png\"] }",
          "autoScale": "width"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "e8be7337d5f5fdbd5725520ba13a0711.jpg": "embedded\u002Fa5ae1edcd4db160812f76c40e25226d886bbfffbcab0ddacaf5dcde301f27a5b.jpg",
        "Goodbye.png": "embedded\u002F5f7f1f36a871a12b80ef4ad9d32dbd2fe5dce4b5f6db30be833e2e3a8975d3dd.png"
      },
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "FIN"
    }
  ]
})

// Let's go!
study.run()