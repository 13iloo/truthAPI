
const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });

// We need to define the schemas and models here as well, 
// or import them if they are in separate files.
const gameItemSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

const Truth = mongoose.model('Truth', gameItemSchema);
const Dare = mongoose.model('Dare', gameItemSchema);

// This is not ideal, we are duplicating this data from the frontend.
// For a real application, this data should probably be managed differently.
const truthQuestions = [
  // General
  { text: "What's the most embarrassing thing that's ever happened to you?", category: "general" },
  { text: "Who was your first crush?", category: "general" },
  { text: "What's your biggest fear?", category: "general" },
  { text: "Have you ever lied to your best friend?", category: "general" },
  { text: "What's the weirdest dream you've ever had?", category: "general" },
  { text: "If you could change one thing about yourself, what would it be?", category: "general" },
  { text: "What's your most embarrassing childhood memory?", category: "general" },
  { text: "Have you ever had a crush on a friend's partner?", category: "general" },
  { text: "What's the most trouble you've ever gotten into?", category: "general" },
  { text: "What's your biggest regret?", category: "general" },
  { text: "Have you ever cheated on a test?", category: "general" },
  { text: "What's the most childish thing you still do?", category: "general" },
  { text: "What's your worst habit?", category: "general" },
  { text: "Have you ever pretended to be sick to get out of something?", category: "general" },
  { text: "What's the most embarrassing thing in your room?", category: "general" },
  { text: "Who do you have a secret crush on?", category: "general" },
  { text: "What's the last lie you told?", category: "general" },
  { text: "What's your most irrational fear?", category: "general" },
  { text: "Have you ever stolen anything?", category: "general" },
  { text: "What's the most awkward situation you've been in?", category: "general" },
  { text: "What's something you've never told your parents?", category: "general" },
  { text: "Who was the last person you stalked on social media?", category: "general" },
  { text: "What's the most embarrassing thing you've done for a crush?", category: "general" },
  { text: "Have you ever been caught doing something you shouldn't?", category: "general" },
  { text: "What's your biggest insecurity?", category: "general" },

  // Religious
  { text: "Have you ever doubted your faith?", category: "religious" },
  { text: "What's your favorite Bible story and why?", category: "religious" },
  { text: "If you could ask God one question, what would it be?", category: "religious" },
  { text: "What's a misconception people have about your faith?", category: "religious" },
  { text: "Have you ever had a spiritual experience?", category: "religious" },

  // Spicy
  { text: "What's your wildest fantasy?", category: "spicy" },
  { text: "Have you ever sent a nude?", category: "spicy" },
  { text: "What's the most adventurous thing you've done in the bedroom?", category: "spicy" },
  { text: "Who in this room would you most like to kiss?", category: "spicy" },
  { text: "What's your body count?", category: "spicy" },

  // General Knowledge
  { text: "What is the capital of Australia?", category: "general knowledge" },
  { text: "Who wrote 'To Kill a Mockingbird'?", category: "general knowledge" },
  { text: "What is the smallest prime number?", category: "general knowledge" },
  { text: "In what year did the Titanic sink?", category: "general knowledge" },
  { text: "What is the chemical symbol for gold?", category: "general knowledge" }
];

const dareChallenges = [
  // General
  { text: "Do your best impression of a celebrity", category: "general" },
  { text: "Sing a song chosen by the group", category: "general" },
  { text: "Do 20 push-ups", category: "general" },
  { text: "Call your crush and tell them a joke", category: "general" },
  { text: "Dance for 30 seconds without music", category: "general" },
  { text: "Let someone else post a status on your social media", category: "general" },
  { text: "Eat a spoonful of a condiment", category: "general" },
  { text: "Do your best runway walk", category: "general" },
  { text: "Speak in an accent for the next 3 rounds", category: "general" },
  { text: "Let someone draw on your face with a marker", category: "general" },
  { text: "Do an impression of someone in the group", category: "general" },
  { text: "Sing everything you say for the next 10 minutes", category: "general" },
  { text: "Do a cartwheel (or attempt one)", category: "general" },
  { text: "Let the group go through your phone for 2 minutes", category: "general" },
  { text: "Wear your clothes backwards for the rest of the game", category: "general" },
  { text: "Do your best animal impression", category: "general" },
  { text: "Let someone style your hair however they want", category: "general" },
  { text: "Do a dramatic reading of a random text message", category: "general" },
  { text: "Attempt to juggle 3 objects", category: "general" },
  { text: "Do the chicken dance", category: "general" },
  { text: "Let someone tickle you for 30 seconds", category: "general" },
  { text: "Do your best stand-up comedy routine for 2 minutes", category: "general" },
  { text: "Attempt to do a magic trick", category: "general" },
  { text: "Let the group ask you anything for 2 minutes", category: "general" },
  { text: "Do your best yoga pose and hold it for 30 seconds", category: "general" },

  // Religious
  { text: "Share your testimony in 2 minutes.", category: "religious" },
  { text: "Pray for the person to your right.", category: "religious" },
  { text: "Act out a Bible story for the group to guess.", category: "religious" },
  { text: "Sing a worship song out loud.", category: "religious" },
  { text: "Read a chapter from the Bible out loud.", category: "religious" },

  // Spicy
  { text: "Give a lap dance to the person of your choice.", category: "spicy" },
  { text: "Twerk for one minute.", category: "spicy" },
  { text: "Remove an item of clothing.", category: "spicy" },
  { text: "Kiss the person to your left on the cheek.", category: "spicy" },
  { text: "Send a flirty text to your most recent contact.", category: "spicy" },

  // General Knowledge
  { text: "Name three countries in Africa.", category: "general knowledge" },
  { text: "Recite the first 10 digits of Pi.", category: "general knowledge" },
  { text: "Explain the theory of relativity in 30 seconds.", category: "general knowledge" },
  { text: "Spell 'onomatopoeia'.", category: "general knowledge" },
  { text: "List the planets in our solar system in order.", category: "general knowledge" }
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  await Truth.deleteMany({});
  await Dare.deleteMany({});

  await Truth.insertMany(truthQuestions);
  await Dare.insertMany(dareChallenges);

  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
