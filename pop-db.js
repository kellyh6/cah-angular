// mongo  127.0.0.1/cardsagainsthumanity pop-db.js
db.decks.insert([
{
  "name": "First Expansion",
  "whiteCards": [],
  "blackCards": []
},
{
  "name": "Second Expansion",
  "whiteCards": [],
  "blackCards": []
},
{
  "name": "Third Expansion",
  "whiteCards": [],
  "blackCards": []
},
{
  "name": "Fourth Expansion",
  "whiteCards": [],
  "blackCards": []
},
{
  "name": "Fifth Expansion",
  "whiteCards": [],
  "blackCards": []
},
{
  "name": "Sixth Expansion",
  "whiteCards": [],
  "blackCards": []
},
{
  "name": "Green Box",
  "whiteCards": [],
  "blackCards": []
},
])

var blackCardsFirstExpansion = [
  { "question": "And I would have gotten away with it, too, if it hadn’t been for ______!",     "blanks": 1,     "pack": db.decks.findOne()._id},
  { "question": "An international tribunal has found ______ guilty of ______.",     "blanks": 2,     "pack": db.decks.findOne()._id},
  { "question": "He who controls ______ controls the world.",     "blanks": 1,     "pack": db.decks.findOne()._id},
  { "question": "In a pinch, ______ can be a suitable substitute for ______.",     "blanks": 2,     "pack": db.decks.findOne()._id},
  { "question": "In his new self-produced album, Kanye West raps over the sounds of ______.",     "blanks": 1,     "pack": db.decks.findOne()._id},
  { "question": "In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "In Rome, there are whisperings that the Vatican has a secret room devoted to ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "In the distant future, historians will agree that ______ marked the beginning of America’s decline.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Michael Bay’s new three-hour action epic pits ______ against ______.", "blanks": 2, "pack": db.decks.findOne()._id },
  { "question": "My plan for world domination begins with ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Next season on Man vs, Wild, Bear Grylls must survive the depths of the Amazon with only ______ and his wits.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Science will never explain ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Science will never explain the origin of ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "The CIA now interrogates enemy agents by repeatedly subjecting them to ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "The secret to a lasting marriage is communication, communication, and ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "The socialist governments of Scandinavia have declared that access to ______ is a basic human right.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only ______ and his wits.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "What brought the orgy to a grinding halt?", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "What has been making life difficult at the nudist colony?", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "What’s the gift that keeps on giving?", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "When all else fails, I can always masturbate to ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "When I pooped, what came out of my butt?", "blanks": 1, "pack": db.decks.findOne()._id }
]

db.blackcards.insert(blackCardsFirstExpansion)

db.whitecards.insert( [
  { "answer": "Savagely beating a mascot", "pack" : db.decks.findOne()._id},
  { "answer": "Scrotum tickling.", "pack" : db.decks.findOne()._id},
  { "answer": "Sexual humiliation.", "pack" : db.decks.findOne()._id},
  { "answer": "Sexy Siamese twins.", "pack" : db.decks.findOne()._id},
  { "answer": "Shaft.", "pack" : db.decks.findOne()._id},
  { "answer": "Slow motion.", "pack" : db.decks.findOne()._id},
  { "answer": "Space muffins.", "pack" : db.decks.findOne()._id},
  { "answer": "Statistically validated stereotypes.", "pack" : db.decks.findOne()._id},
  { "answer": "Stockholm syndrome", "pack" : db.decks.findOne()._id},
  { "answer": "Sudden Poop Explosion Disease.", "pack" : db.decks.findOne()._id},
  { "answer": "Suicidal thoughts.", "pack" : db.decks.findOne()._id},
  { "answer": "Syphilitic insanity", "pack" : db.decks.findOne()._id},
  { "answer": "The boners of the elderly.", "pack" : db.decks.findOne()._id},
  { "answer": "The economy.", "pack" : db.decks.findOne()._id},
  { "answer": "The Fanta® girls.", "pack" : db.decks.findOne()._id},
  { "answer": "The four arms of Vishnu.", "pack" : db.decks.findOne()._id},
  { "answer": "The gulags.", "pack" : db.decks.findOne()._id},
  { "answer": "The harsh light of day.", "pack" : db.decks.findOne()._id},
  { "answer": "The hiccups.", "pack" : db.decks.findOne()._id},
  { "answer": "The ooze", "pack" : db.decks.findOne()._id}
])


db.whitecards.insert( [
  { "answer": "The shambling corpse of Larry King.", "pack" : db.decks.findOne()._id},
  { "answer": "This guy!", "pack" : db.decks.findOne()._id},
  { "answer": "Tripping balls.", "pack" : db.decks.findOne()._id},
  { "answer": "Walking in on Dad peeing into Mom’s mouth.", "pack" : db.decks.findOne()._id},
  { "answer": "Words, words, words.", "pack" : db.decks.findOne()._id},
  { "answer": "Zeus’s sexual appetites.", "pack" : db.decks.findOne()._id},
  { "answer": "Neil Patrick Harris.", "pack" : db.decks.findOne()._id},
  { "answer": "NOOOOOOOOO!!!", "pack" : db.decks.findOne()._id},
  { "answer": "Nubile slave boys.", "pack" : db.decks.findOne()._id},
  { "answer": "Ominous background music.", "pack" : db.decks.findOne()._id},
  { "answer": "One thousand Slim Jims.", "pack" : db.decks.findOne()._id},
  { "answer": "Overpowering your father.", "pack" : db.decks.findOne()._id},
  { "answer": "Panty raids.", "pack" : db.decks.findOne()._id},
  { "answer": "Pistol-whipping a hostage.", "pack" : db.decks.findOne()._id},
  { "answer": "Quiche.", "pack" : db.decks.findOne()._id},
  { "answer": "Quivering jowls.", "pack" : db.decks.findOne()._id},
  { "answer": "Revenge fucking.", "pack" : db.decks.findOne()._id},
  { "answer": "Ripping into a man’s chest and pulling out his still-beating heart.", "pack" : db.decks.findOne()._id},
  { "answer": "Ryan Gosling riding in on a white horse.", "pack" : db.decks.findOne()._id},
  { "answer": "Salvia.", "pack" : db.decks.findOne()._id},
  { "answer": "Sanding off a man’s nose.", "pack" : db.decks.findOne()._id},
  { "answer": "Santa Claus.", "pack" : db.decks.findOne()._id},
  { "answer": "Good grammar.", "pack" : db.decks.findOne()._id},
  { "answer": "having a penis", "pack" : db.decks.findOne()._id},
  { "answer": "Hipsters.", "pack" : db.decks.findOne()._id},
  { "answer": "Historical revisionism.", "pack" : db.decks.findOne()._id},
  { "answer": "Insatiable bloodlust.", "pack" : db.decks.findOne()._id},
  { "answer": "Jafar.", "pack" : db.decks.findOne()._id},
  { "answer": "Jean-Claude Van Damme in slow motion.", "pack" : db.decks.findOne()._id},
  { "answer": "Jean-Claude Van Damme.", "pack" : db.decks.findOne()._id},
  { "answer": "Just the tip.", "pack" : db.decks.findOne()._id},
  { "answer": "Leveling up.", "pack" : db.decks.findOne()._id},
  { "answer": "Literally eating shit.", "pack" : db.decks.findOne()._id},
  { "answer": "Making the penises kiss.", "pack" : db.decks.findOne()._id},
  { "answer": "Media coverage.", "pack" : db.decks.findOne()._id},
  { "answer": "Medieval Times® Dinner & Tournament.", "pack" : db.decks.findOne()._id},
  { "answer": "Mom.", "pack" : db.decks.findOne()._id},
  { "answer": "Moral ambiguity.", "pack" : db.decks.findOne()._id},
  { "answer": "My machete.", "pack" : db.decks.findOne()._id}
])

db.whitecards.insert( [ { "answer": "Carnies.", "pack" : db.decks.findOne()._id},
{ "answer": "Clams.", "pack" : db.decks.findOne()._id},
{ "answer": "Clenched butt cheeks.", "pack" : db.decks.findOne()._id},
{ "answer": "Coughing into a vagina.", "pack" : db.decks.findOne()._id},
{ "answer": "Cutting.", "pack" : db.decks.findOne()._id},
{ "answer": "Dancing with a broom.", "pack" : db.decks.findOne()._id},
{ "answer": "Deflowering a princess.", "pack" : db.decks.findOne()._id},
{ "answer": "Deflowering the princess.", "pack" : db.decks.findOne()._id},
{ "answer": "Dorito breath.", "pack" : db.decks.findOne()._id},
{ "answer": "Eating an albino.", "pack" : db.decks.findOne()._id},
{ "answer": "Enormous Scandinavian women.", "pack" : db.decks.findOne()._id},
{ "answer": "Fabricating statistics.", "pack" : db.decks.findOne()._id},
{ "answer": "Finding a skeleton.", "pack" : db.decks.findOne()._id},
{ "answer": "Gandalf.", "pack" : db.decks.findOne()._id},
{ "answer": "Genetically engineered super-soldiers.", "pack" : db.decks.findOne()._id},
{ "answer": "George Clooney’s musk.", "pack" : db.decks.findOne()._id},
{ "answer": "Getting abducted by Peter Pan.", "pack" : db.decks.findOne()._id},
{ "answer": "Getting in her pants, politely.", "pack" : db.decks.findOne()._id},
{ "answer": "Gladiatorial combat.", "pack" : db.decks.findOne()._id} ])

db.whitecards.insert( [ { "answer": "A smiling black man, a latina businesswoman, a cool asian, and some whites.", "pack" : db.decks.findOne()._id},
{ "answer": "A web of lies.", "pack" : db.decks.findOne()._id},
{ "answer": "A woman scorned.", "pack" : db.decks.findOne()._id},
{ "answer": "An atomic wedgie.", "pack" : db.decks.findOne()._id},
{ "answer": "An Etsy steampunk strap-on.", "pack" : db.decks.findOne()._id},
{ "answer": "An evil man in evil clothes.", "pack" : db.decks.findOne()._id},
{ "answer": "André the Giant’s enormous, leathery scrotum.", "pack" : db.decks.findOne()._id},
{ "answer": "Apologizing.", "pack" : db.decks.findOne()._id},
{ "answer": "Appreciative snapping.", "pack" : db.decks.findOne()._id},
{ "answer": "Ashton Kutcher.", "pack" : db.decks.findOne()._id},
{ "answer": "Beating your wives.", "pack" : db.decks.findOne()._id},
{ "answer": "Being a busy adult with many important things to do.", "pack" : db.decks.findOne()._id},
{ "answer": "Being a dinosaur.", "pack" : db.decks.findOne()._id},
{ "answer": "Blaxploitation.", "pack" : db.decks.findOne()._id},
{ "answer": "Bosnian chicken farmers.", "pack" : db.decks.findOne()._id},
{ "answer": "Breaking nip slip news.", "pack" : db.decks.findOne()._id} ])

db.whitecards.insert( [ { "answer": "24-hour media coverage", "pack" : db.decks.findOne()._id},
{ "answer": "A beached whale.", "pack" : db.decks.findOne()._id},
{ "answer": "A big black dick.", "pack" : db.decks.findOne()._id},
{ "answer": "A bloody pacifier.", "pack" : db.decks.findOne()._id},
{ "answer": "A crappy little hand.", "pack" : db.decks.findOne()._id},
{ "answer": "A fat bald man from the internet.", "pack" : db.decks.findOne()._id},
{ "answer": "A low standard of living.", "pack" : db.decks.findOne()._id},
{ "answer": "A nuanced critique.", "pack" : db.decks.findOne()._id},
{ "answer": "A panty raid.", "pack" : db.decks.findOne()._id},
{ "answer": "A passionate Latino lover.", "pack" : db.decks.findOne()._id},
{ "answer": "A plunger to the face.", "pack" : db.decks.findOne()._id},
{ "answer": "A rival dojo.", "pack" : db.decks.findOne()._id} ])

//blackCardsSecondExpansion
db.blackCards.insert(
[{"question": "______ would be woefully incomplete without ______.", "blanks": 2, "pack": db.decks.findOne({name: "Second Expansion"})._id},
{"question": 'After months of debate, the Occupy Wall Street General Assembly could only agree on “More ______!”', "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Before ______, all we had was ______.", "blanks": 2, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Before I run for president, I must destroy all evidence of my involvement with ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Charades was ruined for me forever when my mom had to act out ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "During his midlife crisis, my dad got really into ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Everyone down on the ground! We don’t want to hurt anyone. We’re just here for ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "I spent my whole life working toward ______, only to have it ruined by ______.", "blanks": 2, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "I went from ______ to ______, all thanks to ______.", "blanks": 3, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "If God didn’t want us to enjoy ______, he wouldn’t have given us ______.", "blanks": 2, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "In his newest and most difficult stunt, David Blaine must escape from ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Little Miss Muffet Sat on a tuffet, Eating her curds and ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Members of New York’s social elite are paying thousands of dollars just to experience ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "My country, ’tis of thee, sweet land of ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "My mom freaked out when she looked at my browser history and found ______.com/______.", "blanks": 2, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": 'My new favorite porn star is Joey “______” McGee.', "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Next time on Dr. Phil: How to talk to your child about ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Only two things in life are certain: death and ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "The Five Stages of Grief: denial, anger, bargaining, ______, acceptance.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "The healing process began when I joined a support group for victims of ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  }])

db.blackcards.insert([
{"question": "The votes are in, and the new high school mascot is ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "This is your captain speaking. Fasten your seatbelts and prepare for ______.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": 'This month’s Cosmo: “Spice up your sex life by bringing ______ into the bedroom.”', "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Tonight on 20/20: What you don’t know about ______ could kill you.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "You haven’t truly lived until you’ve experienced ______ and ______ at the same time.", "blanks": 2, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "A remarkable new study has shown that chimps have evolved their own primitive version of _____.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "What’s harshing my mellow, man?", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  },
{"question": "Your persistence is admirable, my dear Prince. But you cannot win my heart with _____ alone.", "blanks": 1, "pack": db.decks.findOne({name: "Second Expansion"})._id  }])



// var whiteCardsSecondExpansion =
db.whitecards.insert(
[
  { "answer": "A 55-gallon drum of lube.", "pack": db.decks.findOne({name: "Second Expansion"})._id},
  { "answer": "A bigger, blacker dick.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A Burmese tiger pit.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A dollop of sour cream.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A fortuitous turnip harvest.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A magic hippie love cloud.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A man in yoga pants with a ponytail and feather earrings.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A piñata full of scorpions", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A sad fat dragon with no friends.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A slightly shittier parallel universe.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A sofa that says “I have style, but I like to be comfortable.”", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A soulful rendition of “Ol’ Man River.”", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A squadron of moles wearing aviator goggles.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A sweaty, panting leather daddy.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "A sweet spaceship.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "All of this blood.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "An army of skeletons.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "An ether-soaked rag.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "An unhinged ferris wheel rolling toward the sea.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Another shot of morphine.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Basic human decency.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Beefin’ over turf.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Being awesome at sex.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Boris the Soviet Love Hammer.", "pack": db.decks.findOne({name: "Second Expansion"})._id }])


db.whitecards.insert([
  { "answer": "Bullshit.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Catastrophic urethral trauma.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Crushing Mr. Peanut’s brittle body.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Daddy’s belt", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Death by Steven Seagal.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Dennis the Menace.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Dining with cardboard cutouts of the cast of “Friends.”", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Double penetration.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Existing.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Fetal alcohol syndrome.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Finding Waldo.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Fuck Mountain.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Getting hilariously gang-banged by the Blue Man Group.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Grandpa’s ashes.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Graphic violence, adult language, and some sexual content.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Hillary Clinton’s death stare.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Intimacy problems.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Jeff Goldblum.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Living in a trashcan.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Loki, the trickster god.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Making a friend.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Maximal insertion.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Me.", "pack": db.decks.findOne({name: "Second Expansion"})._id }])

db.whitecards.insert([
  { "answer": "Mild autism.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Mooing.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "My first kill.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Nunchuck moves.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Oncoming traffic.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "One Ring to rule them all.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Power", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Pretty Pretty Princess Dress-Up Board Game®.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Pumping out a baby every nine months.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Rising from the grave.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Scrotal frostbite.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Some really fucked-up shit.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Special musical guest, Cher.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Spring break!", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Subduing a grizzly bear and making her your wife.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Survivor’s guilt.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Swiftly achieving orgasm.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Taking a man’s eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The black Power Ranger", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The corporations.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The day the birds attacked.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The Google.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The grey nutrient broth that sustains Mitt Romney.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The human body.", "pack": db.decks.findOne({name: "Second Expansion"})._id }])

db.whitecards.insert([
  { "answer": "The mere concept of Applebee’s®.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The mixing of the races.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "The new Radiohead album.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Tiny nipples.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Tongue.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Upgrading homeless people to mobile hotspots.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Weapons-grade plutonium.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Wearing an octopus for a hat.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Whining like a little bitch.", "pack": db.decks.findOne({name: "Second Expansion"})._id },
  { "answer": "Whipping a disobedient slave.", "pack": db.decks.findOne({name: "Second Expansion"})._id }
])

db.whitecards.find({pack: db.decks.findOne({name: "First Expansion"})._id})
db.blackcards.find({pack: db.decks.findOne({name: "First Expansion"})._id})
db.whitecards.find({pack: db.decks.findOne({name: "Second Expansion"})._id})
db.blackcards.find({pack: db.decks.findOne({name: "Second Expansion"})._id})
