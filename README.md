# Rizzetti LuxAI - Widget Assistente Immobiliare

Questo pacchetto contiene tutti i file necessari per implementare il widget Rizzetti LuxAI sul tuo sito web. Il widget è stato progettato per offrire un'esperienza di assistenza immobiliare AI di lusso, con un'interfaccia elegante e funzionalità interattive.

## Contenuti del pacchetto

- `index.html`: Struttura HTML del widget
- `style.css`: Stile e design del widget
- `script.js`: Logica di interazione e funzionalità
- `assets/`: Cartella contenente immagini e risorse
- `analisi-tecnica-budget.md`: Documentazione tecnica e analisi dei costi

## Requisiti di sistema

- Server web standard (Apache, Nginx, ecc.)
- Nessun requisito di database per la versione base
- Compatibile con tutti i browser moderni

## Guida all'installazione

1. **Carica i file sul tuo server web**
   - Carica tutti i file e le cartelle nella directory desiderata sul tuo server web
   - Assicurati di mantenere la struttura delle cartelle intatta

2. **Integrazione nel tuo sito web**
   - Per integrare il widget come elemento flottante, aggiungi il seguente codice nel tuo sito:

```html
<!-- Aggiungi nella sezione <head> del tuo sito -->
<link rel="stylesheet" href="percorso/a/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Aggiungi prima della chiusura del tag </body> -->
<div id="rizzetti-app"></div>
<script src="percorso/a/script.js"></script>
```

3. **Personalizzazione**
   - Modifica l'immagine dell'avatar in `assets/agent.jpg` con la tua foto professionale
   - Personalizza le risposte predefinite nel file `script.js` (cerca la sezione `simulateBotResponse`)
   - Adatta i colori nel file `style.css` modificando le variabili nella sezione `:root`

## Funzionalità base incluse

- Interfaccia utente elegante con palette colori blu notte e oro
- Campo di input testuale per inviare messaggi
- Risposte predefinite basate su parole chiave
- Servizi esclusivi cliccabili con descrizioni dettagliate
- Design completamente responsive per mobile e desktop
- Funzionalità di minimizzazione/espansione del widget

## Implementazioni future

Per implementare funzionalità avanzate come:
- Integrazione API vocali reali
- Avatar 3D animato
- Connessione a database CRM
- Tecniche di comunicazione persuasiva avanzate

Consulta il file `analisi-tecnica-budget.md` per dettagli sui costi e le opzioni di implementazione.

## Supporto

Per assistenza nell'implementazione o per sviluppare funzionalità personalizzate, contatta il team di supporto.

---

© 2025 Rizzetti Immobiliare Luxury Living | Tutti i diritti riservati
