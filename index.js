function rateMovie(stars) {
    if (stars >= 5) {
        return "Excellent movie! Highly recommended!";
    } else if (stars >= 3) {
        return "Good movie! Worth watching.";
    } else {
        return "This movie could be better.";
    }
}

console.log("Welcome to Movie Review Hub!");
console.log(rateMovie(5));
