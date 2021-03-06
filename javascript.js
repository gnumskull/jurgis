var map = {
    
    "Lithuania" : {
        place: "Lithuania",
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'",
        yes: "New York",
        no: "Freeze"
    },
    
    "New York" : {
        place: "New York",
        question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?",
        yes: "Hotel",
        no: "Freeze"
    },
    
    "Hotel" : {
        place: "Hotel",
        question: "The man makes you pay enormous fees to get out. Once you get out of the hotel, you remember that your friend got rich in Chicago. Do you want to go to Chicago?",
        yes: "Lithuania",
        no: "Freeze"
    },

    "Freeze" : {
        causeDeath : "the cold climate"
    }
};

var player = {
    name: "Jurgis",
    alive: true,
    location: map.Lithuania,
    place: null
};

var ask = function(){

    if( player.location.causeDeath ) {
        console.log("You have died in " + player.place + " of " + player.location.causeDeath);
        return "Game Over.";

    } else {
        player.place = player.location.place;
        return player.location.question;
    }
    
};

var yes = function() {
    player.location = map[player.location.yes];
    return ask();
};

var no = function() {
    player.location = map[player.location.no];
    return ask();
};

console.log( ask() );