/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-howto
 **/

'use strict';

const Alexa = require('alexa-sdk');

const destiny = require('./destiny2');
//const battlefield_1 = require('./battlefield 1');
const fifa_17 = require('./FIFA 17');
const horizon = require('./horizon');
const nioh = require('./nioh');

var gameName = "";

const APP_ID = 'amzn1.ask.skill.dba9555d-ecea-43f0-983d-78d91e61d70d'; // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'NewSession': function () {
//	 this.emit('RecipeIntent');
//	 this.attributes.speechOutput = this;
       this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = this.t('WELCOME_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'RecipeIntent': function () {
        const itemSlot = this.event.request.intent.slots.Item;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }
        
        //retrieve generalised name for action
        
        //foreach item on items
            //if itemName is in item.list
                //retrieve the name of the list
        
        // "jump"
        
        
        
        const gameSlot = this.event.request.intent.slots.Game;
        //let gameName;
        if (gameSlot && gameSlot.value) {
            gameName = gameSlot.value.replace(/\s/g,'').toUpperCase();
            
        }



        const cardTitle = this.t('DISPLAY_CARD_TITLE', this.t('SKILL_NAME'), itemName, gameName);
       // recipes = require('./' + gameName);
        const myRecipes = this.t(gameName);
        const recipe = myRecipes[itemName];

        if (recipe) {
            this.attributes.speechOutput = recipe;
            this.attributes.repromptSpeech = this.t('RECIPE_REPEAT_MESSAGE');
            this.emit(':askWithCard', recipe, this.attributes.repromptSpeech, cardTitle, recipe);
        } else {
            let speechOutput = this.t('RECIPE_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('RECIPE_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('RECIPE_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME');
            }
            speechOutput += repromptSpeech;

            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    //------------------------------------
'OtherButtonIntent': function () {
        const itemSlot = this.event.request.intent.slots.Item;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

     // this.emit('RecipeIntent', 'gameName');

        const cardTitle = this.t('DISPLAY_CARD_TITLE', this.t('SKILL_NAME'), itemName);
       // recipes = require('./' + gameName);
        const myRecipes = this.t(this.emit('RecipeIntent', 'FIFA 17'));
        const recipe = myRecipes[itemName];

        if (recipe) {
            this.attributes.speechOutput = recipe;
            this.attributes.repromptSpeech = this.t('RECIPE_REPEAT_MESSAGE');
            this.emit(':askWithCard', recipe, this.attributes.repromptSpeech, cardTitle, recipe);
        } else {
            let speechOutput = this.t('RECIPE_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('RECIPE_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('RECIPE_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME');
            }
            speechOutput += repromptSpeech;

            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    
    
    //-----------------------------------
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

const languageStrings = {
    'en-GB': {
        translation: {
            DESTINY: destiny.RECIPE_EN_GB,
            FIFA17: fifa_17.RECIPE_EN_GB,
            HORIZON: horizon.RECIPE_EN_GB,
            HORIZON0DAWN: horizon.RECIPE_EN_GB,
			NIOH: nioh.RECIPE_EN_GB,
            SKILL_NAME: 'which button',
            WELCOME_MESSAGE: "Welcome to %s. You can ask me, what\'s the button for certain actions on a video game. Either on playstation or xbox ... Now, what can I help you with.",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '%s  - button for %s.',
            HELP_MESSAGE: "You can ask questions such as, what\'s the button for jump on Battlefield 1? what can I help you with?",
            HELP_REPROMT: "You can say things like, what\'s the button for reload on Destiny, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'thank you for using which button!',
            RECIPE_REPEAT_MESSAGE: 'Try asking me... what\'s the button for a certain game.',
            RECIPE_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'the button for %s. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that button. ',
            RECIPE_NOT_FOUND_REPROMPT: 'What else can I help with?',
        },
    },
    'en-US': {
        translation: {
            DESTINY: destiny.RECIPE_EN_US,
            FIFA17: fifa_17.RECIPE_EN_US,
            HORIZON: horizon.RECIPE_EN_US,
            HORIZON0DAWN: horizon.RECIPE_EN_US,
			NIOH: nioh.RECIPE_EN_US,
           // BATTLEFIELD1: battlefield_1.RECIPE_EN_US,
            SKILL_NAME: 'which button',
            WELCOME_MESSAGE: "Welcome to %s. You can ask me, what\'s the button for certain actions on a video game. Either on playstation or xbox ... Now, what can I help you with.",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '%s  - button for %s.',
            HELP_MESSAGE: "You can ask questions such as, what\'s the button for jump on Battlefield 1? what can I help you with?",
            HELP_REPROMT: "You can say things like, what\'s the button for reload on Destiny, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'thank you for using which button!',
            RECIPE_REPEAT_MESSAGE: 'Try asking me... what\'s the button for a certain game.',
            RECIPE_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'the button for %s. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that button. ',
            RECIPE_NOT_FOUND_REPROMPT: 'What else can I help with?',
        },
    },
   /* 'de-DE': {
        translation: {
            RECIPES: recipes.RECIPE_DE_DE,
            SKILL_NAME: 'Assistent für Minecraft in Deutsch',
            WELCOME_MESSAGE: 'Willkommen bei %s. Du kannst beispielsweise die Frage stellen: Welche Rezepte gibt es für eine Truhe? ... Nun, womit kann ich dir helfen?',
            WELCOME_REPROMT: 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.',
            DISPLAY_CARD_TITLE: '%s - Rezept für %s.',
            HELP_MESSAGE: 'Du kannst beispielsweise Fragen stellen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            HELP_REPROMT: 'Du kannst beispielsweise Sachen sagen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            RECIPE_REPEAT_MESSAGE: 'Sage einfach „Wiederholen“.',
            RECIPE_NOT_FOUND_MESSAGE: 'Tut mir leid, ich kenne derzeit ',
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'das Rezept für %s nicht. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'dieses Rezept nicht. ',
            RECIPE_NOT_FOUND_REPROMPT: 'Womit kann ich dir sonst helfen?',
        },
    },*/
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
