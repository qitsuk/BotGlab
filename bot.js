const tmi = require("tmi.js");
const fetch = require("node-fetch");
require("dotenv").config();

const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
    res.end('Hello World!!');
});
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let safe = true;
let single;
let twopart;
let joke;
let setup;
let punchline;

const my_channel_id = 134600068;

const client = new tmi.Client({
    options: { debug: true},
    identity: {
        username: "BotGlab",
        password: process.env.OAUTH
    },
    channels: ['VenomGlab']
});

client.connect();

client.on("follow", (channel, username) => {
    client.say(channel, `Eeeey ${username}!! Tusind tak for dit follow! venomgGgYoda`);
})

client.on("message", async(channel, tags, message, self) => {
    // Bot ignores own messages and messages that don't start with an !
    if (self || !message.startsWith("!")) return;

    const args = message.slice(1).split(" ");
    const command = args.shift().toLowerCase();

    if (command === 'glab') {
        client.say(channel, `${tags["display-name"]} - Fedt du spørger! Et/en Glab er når man klapper og gaber samtidig! venomg200IQ Så blev du så meget klogere!`);
    }

    if (command === 'alder') {
        client.say(channel, `${tags["display-name"]} - VenomGlab er ${getAge()} 👴`);
    }

    if (command === "arbejde") {
        client.say(channel, `${tags["display-name"]} - VenomGlab er uddannet skolepædagog, men jeg arbejder på nuværende tidspunkt med de ældste børn, i en børnehave. venomgClapped`)
    }

    if (command === "interesser") {
        client.say(channel, `${tags["display-name"]} - VenomGlab elsker at game. Derudover ser jeg mange film og serier, jeg spiller brætspil, jeg ser meget anime og stener lidt for meget YouTube! venomgSheeesh`);
    }

    if (command === "discord") {
        client.say(channel, `${tags["display-name"]} - Du er velkommen til at være en del af Glab familien! :D Her er et link: https://discord.gg/qh2kQEWhcc | Husk at læse og acceptere reglerne!`);
    }
    if (command === "epic") {
        client.say(channel, `${tags["display-name"]} - Yes, VenomGlabs Epic brugernavn er Smallpumpkin901`);
    }
    if (command === "join") {
        client.say(channel, `Fedt du vil være med ${tags["display-name"]}. Navnet er: Venomglab og koden er: 1234`);
    }
    if (command === "lurk") {
        client.say(channel, `Det er bare helt iorden ${tags["display-name"]}! Mange tak for støtten! <3`);
    }
    if (command === "mods") {
        client.mods(channel).then(pretty => {
            client.say(channel, `Jeg har lige nu ${pretty.length} mods. Tag fat i en af dem hvis jeg ikke reagerer! xD Mine mods er: ` + JSON.stringify(pretty, null, 2).split(/[\[\]]/).join('').replace(/["']/g, ''));
        });
    }

});



function getAge() {
    const now = new Date();
  const previousDate = new Date("1987-01-31");
  const differenceInMilliseconds = now.getTime() - previousDate.getTime();
  const differenceInSeconds = differenceInMilliseconds / 1000;
  const differenceInMinutes = differenceInSeconds / 60;
  const differenceInHours = differenceInMinutes / 60;
  const differenceInDays = differenceInHours / 24;
  const differenceInYears = differenceInDays / 365;

  return Math.floor(differenceInYears) + " år, " + Math.floor(differenceInDays % 365)
  + " dage, " + Math.floor(differenceInHours % 24) + " timer, " + Math.floor(differenceInMinutes % 24)
  + " minutter, " + " og " + Math.floor(differenceInSeconds % 60) + " sekunder gammel!";
}