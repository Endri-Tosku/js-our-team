// Array di oggetti che rappresenta i membri del team
// Ogni oggetto contiene tutte le informazioni necessarie
// per costruire una card (nome, ruolo, email, immagine)
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// Selezioniamo dal DOM il contenitore che ospiterà tutte le card
// Questo elemento farà da "contenitore padre" per l'output dinamico
const outputTest = document.querySelector(".team-container");

// Variabile che servirà ad accumulare l'HTML delle card
// Ad ogni giro del ciclo verrà aggiunta una nuova card come stringa
let cards = "";

// Cicliamo l'array teamMembers per creare una card per ogni membro
for (let i = 0; i < teamMembers.length; i++) {

  // A ogni iterazione estraiamo il singolo oggetto membro del team
  const teamMember = teamMembers[i];

  // Aggiungiamo una nuova card alla stringa "cards"
  // Con le proprietà dell'oggetto corrente
  // In questo modo ogni card avrà dati diversi in base al membro del team
  cards += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${teamMember.img}" class="img-fluid rounded-start" alt="${teamMember.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${teamMember.name}</h5>
                        <p class="card-text">${teamMember.role}</p>
                        <p class="card-text"><small class="text-body-secondary">${teamMember.email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    `
}

// Una volta terminato il ciclo
// inseriamo tutta la stringa HTML accumulata nel contenitore
// innerHTML trasforma la stringa in veri elementi HTML nel DOM
outputTest.innerHTML = cards;