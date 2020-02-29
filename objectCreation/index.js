const user2 = {} // create an empty Object. Object literal method
user2.name = "Khushi";
user2.score = 5;
user2.increament = function(){
    user2.score++;
}

const user3 = Object.create(null) // create an empty Object.
user3.name = "Khushi";
user3.score = 5;
user3.increament = function(){
    user3.score++;
}