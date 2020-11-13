Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            nuovoMessaggio: '',
            indice_contatto: 0,
            user: {
                name: 'Rocco Chiarella',
                avatar: 'I2'
            },
            contacts: [
                {
                    name: 'Arianna',
                    avatar: 'I1',
                    visible: true,
                    messages: [
                        {
                            date: '13/11/2020 15:40:00',
                            message: 'Ciao',
                            status: 'sent'
                        },
                        {
                            date: '13/11/2020 15:41:00',
                            message: 'Ciao',
                            status: 'received'
                        },
                        {
                            date: '13/11/2020 15:42:00',
                            message: 'Come stai?',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Giuseppe',
                    avatar: 'I3',
                    visible: true,
                    messages: [
                        {
                            date: '14/11/2020 15:40:00',
                            message: 'Usciamo stasera?',
                            status: 'received'
                        },
                        {
                            date: '14/11/2020 15:41:00',
                            message: 'Ok, dove?',
                            status: 'sent'
                        },
                        {
                            date: '14/11/2020 15:42:00',
                            message: 'In piazza va bene per te?',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Luca',
                    avatar: 'I6',
                    visible: true,
                    messages: [
                        {
                            date: '15/11/2020 15:40:00',
                            message: 'Hai fatto gli esercizi di matematica?',
                            status: 'sent'
                        },
                        {
                            date: '15/11/2020 15:41:00',
                            message: 'Certo!',
                            status: 'received'
                        },
                        {
                            date: '15/11/2020 15:42:00',
                            message: 'Come si risolve il numero 3?',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Kevin',
                    avatar: 'I4',
                    visible: true,
                    messages: [
                        {
                            date: '11/11/2020 15:40:00',
                            message: 'Ciao',
                            status: 'received'
                        },
                        {
                            date: '11/11/2020 15:41:00',
                            message: 'Ciao, chi saresti?',
                            status: 'sent'
                        },
                        {
                            date: '11/11/2020 15:42:00',
                            message: 'Sono chi tu non sai',
                            status: 'received'
                        }
                    ]
                }
            ]
        },
        methods: {
            cambia_chat: function(indice_chat) {
                this.indice_contatto = indice_chat;
            },
            classeMessaggio: function(indice_messaggio) {
                let contatto = this.contacts[this.indice_contatto];

                let classe = 'messaggio ' + contatto.messages[indice_messaggio].status;

                return classe;
            },
            aggiungiMessaggio: function() {
                var oggi = new Date();
                
                var data = oggi.getDate()+'/'+(oggi.getMonth()+1)+'/'+oggi.getFullYear()+' '+oggi.getHours()+":"+oggi.getMinutes()+":"+oggi.getSeconds();

                let stringaData = data.toString();

                let messaggio = this.nuovoMessaggio && this.nuovoMessaggio.trim();

                let value = {
                    "date": stringaData,
                    "message": messaggio,
                    "status": 'sent'
                };

                console.log(value);

                if (!value) {
                    return;
                }

                this.contacts[this.indice_contatto].messages.push(value);

                this.nuovoMessaggio = "";
            },
        }
    }
);