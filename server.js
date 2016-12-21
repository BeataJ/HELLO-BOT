
var restify = require('restify');
var builder = require('botbuilder');

//Setup restify sever
var server = restify.createServer();
server.listen( 3978, function(){
  console.log("%s listening to %s", server.name, server.url);
});

//Create bot
var connector = new builder.ChatConnector({
    appId: null,
    appPassword: null
});

var bot = new builder.UniversalBot(connector);

// Handle Bot Framework messages
server.post('/api/messages', connector.listen());

// Define root dialog
bot.dialog('/',
    
    function(session){
       
     session.send('Hello World!' );
    }
);