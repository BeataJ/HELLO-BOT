
var restify = require('restify');
var builder = require('botbuilder');

//Setup restify sever
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
  console.log("%s listening to %s", server.name, server.url);
});

//Create bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);

// Handle Bot Framework messages
server.post('/api/messages', connector.listen());

// Define root dialog
bot.dialog('/', [
    function(session){
      builder.Prompts(session, 'What is your name?');
    },
    function(session, result){
     var name = result.response;   
     session.send('Hello %s!', name);
    }
]);