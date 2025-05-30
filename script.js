// Script principale per Rizzetti LuxAI - Versione semplificata
document.addEventListener('DOMContentLoaded', function() {
    // Elementi DOM
    const minimizeBtn = document.getElementById('minimize-btn');
    const floatButton = document.getElementById('float-button');
    const luxaiWidget = document.getElementById('luxai-widget');
    const sendBtn = document.getElementById('send-btn');
    const textInput = document.getElementById('text-input');
    const messagesContainer = document.getElementById('messages');
    const serviceItems = document.querySelectorAll('.service-item');
    const statusIndicator = document.getElementById('status-indicator');
    const statusText = document.getElementById('status-text');
    const avatar = document.getElementById('avatar');
    
    // Stato iniziale
    let isMinimized = false;
    let isTalking = false;
    
    // Gestione minimizzazione widget
    minimizeBtn.addEventListener('click', function() {
        luxaiWidget.classList.add('minimized');
        floatButton.classList.add('visible');
        isMinimized = true;
    });
    
    // Gestione apertura widget da pulsante flottante
    floatButton.addEventListener('click', function() {
        luxaiWidget.classList.remove('minimized');
        floatButton.classList.remove('visible');
        isMinimized = false;
    });
    
    // Gestione invio messaggio
    sendBtn.addEventListener('click', function() {
        sendMessage();
    });
    
    // Gestione invio messaggio con tasto Enter
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Gestione click sui servizi
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            handleServiceClick(serviceType);
        });
    });
    
    // Funzione per inviare un messaggio
    function sendMessage() {
        const message = textInput.value.trim();
        
        if (message) {
            // Aggiungi messaggio utente alla conversazione
            addMessage(message, 'user');
            
            // Simula risposta del bot
            setTimeout(function() {
                simulateBotResponse(message);
            }, 500);
            
            // Pulisci input
            textInput.value = '';
        }
    }
    
    // Funzione per aggiungere un messaggio alla conversazione
    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Funzione per simulare la risposta del bot
    function simulateBotResponse(userMessage) {
        // Cambia stato a "parlante"
        setTalkingState(true);
        
        // Risposte predefinite per la demo
        const responses = {
            'ciao': 'Buongiorno, sono Enrico Rizzetti, il tuo assistente immobiliare AI. Come posso aiutarti oggi?',
            'casa': 'Sono specializzato nella ricerca di immobili di lusso a Bergamo. Che tipo di proprietà stai cercando?',
            'prezzo': 'Il mercato immobiliare di lusso a Bergamo ha prezzi medi di 3200€/m². Posso aiutarti a trovare soluzioni in linea con il tuo budget.',
            'vendere': 'Per vendere il tuo immobile, offro una valutazione personalizzata basata su 25 anni di esperienza e intelligenza artificiale. Possiamo fissare un appuntamento?',
            'appuntamento': 'Sarei lieto di fissare un appuntamento per discutere delle tue esigenze immobiliari. Quando preferisci incontrarci?'
        };
        
        // Cerca una parola chiave nella domanda dell'utente
        let botResponse = 'Mi occupo di immobili di lusso a Bergamo. Posso aiutarti a trovare la casa ideale o a vendere il tuo immobile alle migliori condizioni.';
        
        for (const [keyword, response] of Object.entries(responses)) {
            if (userMessage.toLowerCase().includes(keyword)) {
                botResponse = response;
                break;
            }
        }
        
        // Aggiungi risposta bot alla conversazione
        addMessage(botResponse, 'bot');
        
        // Dopo un po', torna allo stato di ascolto
        setTimeout(function() {
            setTalkingState(false);
        }, 2000);
    }
    
    // Funzione per gestire il click sui servizi
    function handleServiceClick(serviceType) {
        const serviceInfo = {
            'personality': 'Il nostro assistente AI adatta la sua personalità in base al tipo di cliente, offrendo un'esperienza su misura per te.',
            'emotional': 'Utilizziamo un linguaggio emozionale avanzato per comprendere le tue esigenze e proporti soluzioni che ti emozionano.',
            'simulator': 'Il nostro simulatore dialogico permette di esplorare diverse situazioni immobiliari e prepararti a ogni evenienza.',
            'memory': 'La memoria relazionale dell\'AI ricorda ogni interazione passata, garantendo continuità nel rapporto anche dopo mesi.'
        };
        
        const message = serviceInfo[serviceType] || 'Questo è un servizio esclusivo di Rizzetti Immobiliare.';
        
        // Simula risposta del bot con informazioni sul servizio
        setTalkingState(true);
        
        setTimeout(function() {
            addMessage(message, 'bot');
            
            setTimeout(function() {
                setTalkingState(false);
            }, 2000);
        }, 300);
    }
    
    // Funzione per cambiare lo stato dell'avatar (parlante/in ascolto)
    function setTalkingState(talking) {
        isTalking = talking;
        
        if (talking) {
            statusIndicator.style.backgroundColor = '#e74c3c';
            statusText.textContent = 'Parlando...';
            avatar.classList.add('talking');
        } else {
            statusIndicator.style.backgroundColor = '#4CAF50';
            statusText.textContent = 'In ascolto...';
            avatar.classList.remove('talking');
        }
    }
    
    // Messaggio di benvenuto iniziale
    setTimeout(function() {
        const welcomeMessage = 'Benvenuto, sono Enrico Rizzetti, il tuo assistente immobiliare AI. Come posso aiutarti oggi?';
        addMessage(welcomeMessage, 'bot');
        
        setTalkingState(true);
        setTimeout(function() {
            setTalkingState(false);
        }, 2000);
    }, 1000);
});
