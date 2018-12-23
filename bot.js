class WelcomeBot {
    async onTurn(turnContext) {
        console.log('turnContext', turnContext);
        if (turnContext.activity.type === 'event') {
            await turnContext.sendActivity(
                'Push buttons to hide or show send box'
            );
        }
    }
}

module.exports.WelcomeBot = WelcomeBot;
