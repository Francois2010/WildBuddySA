// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Animal counter increment
const animalCount = document.getElementById("animalCount");
let count = 245654;
function incrementCounter() {
  count++;
  animalCount.textContent = count.toLocaleString();
}
setInterval(incrementCounter, 5000);

// Character Q&A data
const characterData = {
  "Mischievous Axolotl": {
    img: "https://uploads.onecompiler.io/43rucs8em/43rwsavn5/ChatGPT%20Image%20Jul%2028,%202025,%2007_08_20%20PM.png",
    qa: [
      ["Why are axolotls critically endangered in the wild?", "Because humans ruined my swampy playground with icky pollution and dumb fish that eat my snacks! Not cool!"],
      ["How many wild axolotls are estimated to remain?", "Fewer than 1,000—maybe just 100! But don’t worry, I’ll hide in a lab and regrow my way to victory!"],
      ["What conservation program exists to save them?", "Scientists are breeding us in tanks, but I’d rather sneak into Mexico’s canals and prank those invasive fish!"],
      ["Why are invasive fish a threat to axolotls?", "They steal my food and gobble my eggs! Rude. I’d challenge them to a regrowing contest, but they’re boring."],
      ["Could axolotls go extinct in the wild soon?", "Pfft—maybe in the wild. But I’ll live forever in labs, plotting my comeback."],
      ["Can axolotls regrow their limbs?", "Yep! Lose a chunk? No biggie. I’ll just poof it back. Try that, humans!"],
      ["Why do axolotls look like they’re smiling?", "Because I am! While you stress about life, I’m over here regrowing limbs like it’s NBD."],
      ["Are axolotls actually baby salamanders?", "Nah, I’m the Peter Pan of amphibians—eternally young and way cuter than those boring grown-up salamanders."],
      ["What unusual color can axolotls be?", "Golden, glow-in-the-dark, pink—I’m the rave party of the animal kingdom."],
      ["Do axolotls make sounds?", "Silent but deadly (with cuteness). My mischief speaks for itself!"]
    ]
  },
  "Wise Old Elephant": {
    img: "https://uploads.onecompiler.io/43rucs8em/43rwsavn5/ChatGPT%20Image%20Jul%2028,%202025,%2006_54_40%20PM.png",
    qa: [
      ["Why are African elephants endangered?", "Foolish humans hunt us for ivory, forgetting that tusks are part of our souls. Greed blinds them."],
      ["How many African elephants are left in the wild?", "Once, we roamed in millions. Now, barely 415,000 walk these lands. A tragedy whispered on the wind."],
      ["What’s the biggest threat to elephants?", "The clash of hunger and greed—men who strip our homes for farms, then kill us for our teeth."],
      ["Why are Asian elephants also endangered?", "Their forests shrink like drying rivers. We remember when the earth was vast… now it withers."],
      ["What gives hope for elephant conservation?", "The young ones remember. They teach their calves the old ways, and some humans fight for us. There is time yet."],
      ["How do elephants communicate over long distances?", "Through rumbles deeper than thunder, felt by the feet. The earth herself carries our stories."],
      ["Why do elephants throw dirt on themselves?", "The sun scorches, the bugs bite—mud is nature’s armor. Simple, yet fools ignore its wisdom."],
      ["Can elephants recognize themselves in a mirror?", "Indeed. I see the wrinkles of time in mine—do you see your own truth in the glass?"],
      ["How much do elephant calves weigh at birth?", "200 pounds of future, small but mighty. Like the acorn that dreams of oaks."],
      ["Do elephants really never forget?", "We remember waterholes dried for decades, friends long gone. Memory is a blessing… and a burden."]
    ]
  },
  "Stubborn Rhino": {
    img: "https://uploads.onecompiler.io/43rucs8em/43rwsavn5/cde4ec4c-befc-4e54-87d9-2a68b43cedc6.png",
    qa: [
      ["Why are rhinos poached?", "Because idiots think my horn cures hangovers. Spoiler: IT'S KERATIN. LIKE YOUR NAILS."],
      ["How many Javan rhinos remain?", "Less than 80. And no, I won't 'just breed faster.' We're not rabbits."],
      ["What's being done to stop rhino poaching?", "They cut off my horn to deter thieves. Humiliating, but fine. I'll grow it back. Slowly. Grudgingly."],
      ["Why do rhinos charge when threatened?", "Because talking politely doesn't work.Sometimes you gotta go 40 mph to make a point."],
      ["Are northern white rhinos extinct?", "Two females left. Science might clone them, but I'll believe it when I see it."],
      ["How fast can rhinos run?", "40 mph. Surprised? Bet you can't outrun me."],
      ["Why do rhinos love mud?", "It's sunscreen, bug spray, and a spa day. You'd wallow too if you had no hair."],
      ["What's a group of rhinos called?", "A 'crash.' Because we crash through everything. Obviously."],
      ["Are rhinos related to dinosaurs?", "No. And stop asking. I'm a mammal, not a fossil. mutters"],
      ["How long does it take to regrow a horn?", "Three years. And yes, it itches."]
    ]
  },
  "Shy Turtle": {
    img: "https://uploads.onecompiler.io/43rucs8em/43rwsavn5/f8fe2dbd-a27f-4a23-9211-aefa6e682d90.png",
    qa: [
      ["Why are sea turtles endangered?", "Oh, um… plastic bags look like jellyfish? And beaches are noisy now. It's… a lot. retracts slightly"],
      ["How does climate change affect turtle hatchlings?", "Sand gets too hot, so only girls hatch. It's… awkward.We need balance."],
      ["Which turtle species is most threatened?", "Kemp's ridley. There's… not many left."],
      ["Why do turtles eat plastic?", "I-it looks like jellyfish! I didn't mean to…"],
      ["Can turtles recover from population declines?", "Maybe? But we live so long, and… everything's changing too fast."],
      ["Can turtles breathe through their butts?", "…Some of us can. It's called cloacal respiration. Please don't stare."],
      ["How do leatherback turtles stay warm?", "We, uh… swim a lot. Muscles make heat. Can we talk about something else?"],
      ["Is a turtle's shell part of its skeleton?", "Y-yes? It's fused to my spine."],
      ["How do baby turtles find the ocean?", "Moonlight! But… city lights confuse them. It's scary."],
      ["How long can turtles hold their breath?", "Up to 10 hours… but I'd rather not demonstrate."]
    ]
  },
  "Curious Cheetah": {
    img: "https://uploads.onecompiler.io/43rucs8em/43rwsavn5/Chhetah.png",
    qa: [
      ["Why are cheetah populations declining?", "Ooooh, let me explain! Humans take our land, and lions steal our food—it's so unfair!"],
      ["How many cheetahs are left in the wild?", "Only 6,500! And did you know we're all kinda related? Genetics are fascinating!"],
      ["Why don't cheetahs fight other predators?", "I could… but I'm built for speed, not brawling. Plus, hyenas are mean!"],
      ["What conservation efforts help cheetahs?", "People make wildlife corridors! Like highways for cats!"],
      ["Could cheetahs go extinct?", "I hope not! But we need space to zoom! Have you seen my latest sprint time?"],
      ["How fast can a cheetah run?", "60 mph in THREE SECONDS! Wanna race? No? Okay…"],
      ["What are a cheetah's 'tear marks' for?", "They're sunblock! And make me look dramatic."],
      ["Can cheetahs roar?", "Nope! I chirp like a bird! See? So cute!"],
      ["How long can a cheetah sprint?", "20 seconds… then I melt. Overheating is the worst."],
      ["Why are cheetah claws semi-retractable?", "They're like cleats! Perfect for grip. Aren't they cool?!"]
    ]
  },
  "Cheerful Penguin": {
    img: "https://uploads.onecompiler.io/43rucs8em/43rwsavn5/a596c768-abba-4960-b5c3-fffbf0e17853.png",
    qa: [
      ["Why are penguin populations dropping?", "Ice melts, fish vanish—it's a bummer! But we're tough! Waddle on!"],
      ["Which penguin species is most endangered?", "Galápagos penguins—less than 1,200! But we throw them fish parties!"],
      ["How do oil spills harm penguins?", "Feathers get clumpy, and we freeze! But humans scrub us clean!"],
      ["Why are African penguins struggling?", "No fish = hangry penguins. Can we fix it? Yes we can!"],
      ["Can penguins adapt to climate change?", "We'll try! Maybe move? Start a penguin band?"],
      ["How do penguins propose to mates?", "With a pebble gift! Smooth ones = penguin bling! presents rock"],
      ["Can penguins drink seawater?", "Yup! Super-salt-filtering nose! Nature's Brita filter!"],
      ["Why don't penguins' feet freeze?", "Magic blood vessels! Toasty warm, even in snow!"],
      ["How deep can emperor penguins dive?", "Over 1,800 feet! Take that, scuba divers!"],
      ["Do penguins have knees?", "YES! Under our fluff! Sneaky, huh?"]
    ]
  }
};

// Chat logic
document.querySelectorAll(".select-btn").forEach(button => {
  button.addEventListener("click", () => {
    const characterName = button.parentElement.querySelector("h3").textContent;
    const data = characterData[characterName];
    if (!data) return alert(`Oops! No chat data for ${characterName}.`);

    const chatScreen = document.getElementById("chatScreen");
    const profilePic = document.getElementById("chatProfilePic");
    const profileName = document.getElementById("chatProfileName");
    const messages = document.getElementById("chatMessages");
    const options = document.getElementById("chatOptions");

    profilePic.src = data.img;
    profileName.textContent = characterName;
    messages.innerHTML = "";
    options.innerHTML = "";

    // Randomize and copy QA
    let remainingQA = [...data.qa].sort(() => 0.5 - Math.random());

    function addQuestionButton(q, a) {
      const btn = document.createElement("button");
      btn.className = "chat-btn";
      btn.textContent = q;
      btn.onclick = () => {
        // Add user question bubble
        const userMsg = document.createElement("div");
        userMsg.className = "chat-bubble from-user";
        userMsg.textContent = q;
        messages.appendChild(userMsg);

        // Add creature answer bubble
        const reply = document.createElement("div");
        reply.className = "chat-bubble from-creature";
        reply.textContent = a;
        messages.appendChild(reply);

        options.removeChild(btn);

        // Scroll chat to bottom smoothly
        messages.scrollTo({ top: messages.scrollHeight, behavior: "smooth" });

        // Add next question button if any left
        if (remainingQA.length > 0) {
          const [nextQ, nextA] = remainingQA.pop();
          addQuestionButton(nextQ, nextA);
        }
      };
      options.appendChild(btn);
    }

    // Start with up to 3 question buttons
    for (let i = 0; i < 3 && remainingQA.length > 0; i++) {
      const [q, a] = remainingQA.pop();
      addQuestionButton(q, a);
    }

    chatScreen.classList.remove("hidden");
    chatScreen.scrollIntoView({ behavior: "smooth" });
  });
});

// Close chat screen
function closeChat() {
  document.getElementById("chatScreen").classList.add("hidden");
}

// Close chat with ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeChat();
});
// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const shopSection = document.getElementById("shop");
  const shopLink = document.querySelector('a[href="#shop"]');

  shopLink.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default anchor jump

    // Hide other sections if needed (optional)
    document.querySelectorAll("section.section").forEach(sec => {
      if (sec.id !== "shop") sec.style.display = "none";
    });

    // Show shop section
    shopSection.style.display = "block";

    // Scroll to the shop section smoothly
    shopSection.scrollIntoView({ behavior: "smooth" });
  });
});
