
const firebaseConfig = {
  apiKey: "AIzaSyCRyQZT1_N8ABPBsuIETbAyIFoMzoNav6c",
  authDomain: "mvp-tech-f49db.firebaseapp.com",
  projectId: "mvp-tech-f49db",
  storageBucket: "mvp-tech-f49db.appspot.com",
  messagingSenderId: "174443315764",
  appId: "1:174443315764:web:2f6d144195fa64bd92c061",
  measurementId: "G-S89FZ7EWZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

     // Cria uma referência para o nó do Realtime Database
    const databaseRef = firebase.database().ref("comando");

    // Adiciona um ouvinte de eventos para o nó
    databaseRef.on("value", snapshot => {
    // Acessa o valor atual do nó
    const value = snapshot.val();
  
    // Atualiza o texto da label com o valor obtido
    const label = document.getElementById("my-label");
    label.innerText = value;
    });


    const db = firebase.database();
    const nodeRef = db.ref("comando");
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
      nodeRef.transaction(function(currentValue) {
        return !currentValue;
      }, function(error, committed, snapshot) {
        if (error) {
          console.error("Erro ao alterar estado: " + error);
        } else if (!committed) {
          console.warn("Alteração não confirmada.");
        } else {
          console.log("Estado alterado com sucesso. Novo valor: " + snapshot.val());
        }
      });
    });
