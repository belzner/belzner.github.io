const lingClasses = [
  {
    title: 'Nonsense!',
    desc: `Explore words like "antidisestablishmentarianism" and sentences like those in Lewis Carroll's "Jabberwocky" or Dr. Seuss's "Fox in Socks". Along the way you'll learn about many of the fascinating properties of language and get a chance to create some "nonsense" of your very own!`,
    about: `I taught this 1 hour class for 7th-10th grade students several times between 2012 and 2016 at MIT ESP's Spark and Splash programs.`,
    excerpt: `Prefixes and suffixes can be added to any word, even one that already has prefixes or suffixes, as long as the word is the correct part of speech. So the noun 'industry' could become the adjective 'industrial', which could become the verb 'industrialize', which could become the noun 'industrialization', which could become the adjective 'industrializational', which eventually becomes 'industrializationalizationalizationalizationalize', a word that still has concrete meaning despite its apparent absurdity.`
  },
  {
    title: 'Con(structed) Lang(uages)',
    desc: `Saluton! \u0108u vi parolas Esperanton? Conlangs (such as Esperanto, lojban, and many more) are languages which have been deliberately invented for a variety of purposes, ranging from simplifying communication to creating more vivid fictional worlds for stories. Learn a bit about the history of conlanging and some example conlangs, and explore what it takes to design your own language!`,
    about: `I taught this 2 hour class for middle school students at MIT ESP's Spark program in 2015.`,
    excerpt: `The most well-known constructed language, Esperanto, has around 10 million people who have studied it, including around 10,000 people who are fluent and around 1,000 who speak it natively. Like many other constructed languages developed in the 19th century, its main goal was to facilitate international communication.`
  },
  {
    title: 'A Brief History of the English Language',
    desc: `Did you know that differences between the name of an animal versus the name of its meat (cow, beef) are the result of the Norman conquest of 11th century England? Or that the pronunciation of some vowels changed dramatically between the 14th and 18th centuries, in an event known as the Great Vowel Shift? Learn about these and many other fascinating events in the history of English, and get a glimpse into the ways all languages evolve with time.`,
    about: `I taught this 1 hour class for high school students at MIT ESP's Splash program in 2014.`,
    excerpt: `Around when the spelling of Modern English was being standardized (with the help of the printing press), a linguistic event known as the Great Vowel Shift occurred. Essentially, the long vowels all underwent raising - 'ee' sounds became 'ai' sounds, 'e' became 'ee', 'ah' became 'ei', and so on. Since spelling had already started to crystallize before this sound change, the spellings of many words no longer represented how they were pronounced, and this is (a part of) why English spelling is terrible.`
  },
  {
    title: '"You Talk Funny": Dialects and Other Language Change',
    desc: `G'day, mate! Want to sit down with a spot of tea and discuss how they speak across the pond? Ever wondered aboot why some people's English sounds a bit funny, eh? If yer hankerin' to know about dialects, this is the class for ya! Want that translated into something you can understand? This class will talk about just that. We'll cover the ways in which languages can differ, and how they can change over time. Learn about the history of past-tense verb forms and the gradual process of regularization, how some people say sounds a bit differently and the rules that govern this, and where the line is drawn between dialects and languages (answer: wherever you want, really). Understand how and why "that funny way of speaking" came to be!`,
    about: `I taught this 1 hour class for high school students at MIT ESP's Splash program in 2013.`,
    excerpt: `While some verbs use '-ed' to create a past tense form, others use irregular patterns such as 'ate', 'drove', or 'sang'. Many words that use the regular '-ed' pattern, however, used to use various irregular patterns until they were gradually regularized. For example, 'walked' used to be 'welk', 'laughed' used to be 'lough', and 'starved' used to be 'storve'. This process of overregularization occurs in other cases as well, as the population gradually forgets the specific case and starts to apply the known pattern in its place.`
  },
  {
    title: 'Linguistic Polyglotism',
    desc: `Ever wanted to speak ALL the languages? Maybe you tried once. But maybe you realized that there are an awful lot of languages. And there's no way you could possibly learn them all, right? This class doesn't promise to teach you every language. In fact, it doesn't even promise to teach you any language. What it will teach you, however, is some of the patterns and structures common across languages. This class will provide a brief introduction to linguistics, and show you that the differences between languages may not be that great after all.`,
    about: `I taught this 1 hour class for high school students at MIT ESP's Spark program in 2013.`,
    excerpt: `A syntactical phrase consists of a tree with two branches - a word matching the part of speech of the phrase (also known as the 'head'), and a sub-phrase. For example, the verb phrase "read the book" consists of the verb 'read' and the noun phrase 'the book'. Languages can have the head come first in the phrase (like English), or second in the phrase (like Japanese). Some languages may have the head first for certain types of phrases and last for others, subject to certain constraints.`
  },
];

const techClasses = [
  {
    title: 'How Computer Systems Break',
    desc: `It's been said that "complex systems break in complex ways", and computer systems are getting more and more complex every day. So how do they break? What can go wrong when they do? And what happens when someone tries to exploit these errors? We'll take a look at some major system failures over the past several decades, how they could have been avoided, and why building an infallible computer system is so hard.`,
    about: `I taught this 1 hour class for 10th-12th grade students at MIT ESP's Splash program in 2015.`,
    excerpt: `Exploiting an error in a system doesn't even need to involve writing any code. The hacking of journalist Mat Honan's Twitter account in 2012 provides a good case study of this - the attackers were ultimately able to gain access to his Twitter account through a chain of password resets (Amazon, then Apple, then Google, then finally Twitter), with only a few phone calls, a fake credit card number, and a little ingenuity.`
  },
  {
    title: 'Interactive Introduction to the Internet',
    desc: `Ever wondered what happens when you type 'esp.mit.edu' into your address bar? In this class, you'll get to act out the protocols that underlie everything you do on the internet, from 802.11 to TCP to DNS. Learn what makes the World Wide Web tick!`,
    about: `I taught this 1 hour class for middle school students at MIT ESP's Spark program in 2015.`,
    excerpt: `To avoid having large chunks of data on a link block smaller pieces of data, data being sent over the internet is broken up into fixed-sized 'packets'. But packets could be lost or reordered on the path between the client and the server, so to avoid data loss the packets are numbered and the receiving end sends back an acknowledgement message when it receives a packet.`
  },
  {
    title: 'How to Speak Machine',
    desc: `Coders, Assemble! What are we assembling? Why, programs of course! An assembly language is a low-level programming language with a strong (or one-to-one) correspondence with the actual machine-readable instructions. This class will cover the structure of a simplified machine instruction set by writing some small programs and exploring how they're interpreted by the machine.`,
    about: `I taught this 2 hour class for high school students at MIT ESP's Splash program in 2014.`,
    excerpt: `In a simple assembly language, there are four important classes of instructions - operations, constant operations, jumps, and memory accesses. Operations can add, subtract, and compare two (variable) numbers, while constant operations add, subtract, and compare a variable number with a constant. Jumps change which instruction will be executed next based on the value of a number. Memory accesses are exactly what they sound like, loading data from memory into the processor's local registers, and storing data from the local registers into more permanent memory.`
  },
  {
    title: 'Fundamentals of Web Design',
    desc: `There are plenty of terrible websites out there - how do you make sure yours isn't one of them? This class will talk about some of the considerations that go into designing a website - or designing anything - and provide a crash course in everything from aesthetics to typography to user experience.`,
    about: `I taught this 1 hour class for high school students at MIT ESP's Splash program in 2014.`
  },
  {
    title: 'Web Design for Fun and Profit!',
    desc: `You're the newest employee of HSSPweb (the world's leading web design company), and it's time to get to work! Learn the basics of web design, from HTML to CSS to Javascript and more. Then put your new knowledge to work in a series of design tasks, culminating in the creation of a website for a (fictional) company that has hired HSSPweb to design their site!`,
    about: `I taught this class over 7 weekend sessions for 9th-10th grade students at MIT ESP's HSSP program in spring 2014.`,
    materials: `<a href="http://web.mit.edu/belzner/hssp14/">Website</a>`
  },
  {
    title: 'Journey Through the Interwebs',
    desc: `How does the internet work? When you go to google.com, what happens? This hands-on class will talk about the world wide web, from the series of tubes that bring content from servers to you, to the languages that comprise a web page.`,
    about: `I taught this 1 hour class for middle school students at MIT ESP's Spark program in 2014.`,
    excerpt: `When you enter a human-readable website address, it goes to a DNS (Domain Name System) server to translate this into the corresponding IP address, a numerical identifier for the website's server. DNS is hierarchical, so entering (say) web.mit.edu will first check the root DNS server to find the edu DNS server, which will then be checked for the mit.edu DNS server, and finally that server will tell the computer where the web.mit.edu server is.`
  },
  {
    title: 'Introduction to LaTeX',
    desc: `Leave Word behind forever! LaTeX is the gold standard for document typesetting in academia, and in this single-session event we will see how easy it is to make professional-looking papers and resumes, get you typesetting math like a pro, delve into macros, and finish with Beamer, the popular open source LaTeX analog to Powerpoint.`,
    about: `I taught this 2 hour class for undergraduate and graduate students during MIT's January session in 2013 and 2014.`,
    materials: `<a href="http://web.mit.edu/belzner/Public/latex/sipb-latex.pdf">Slides</a>`
  },
  {
    title: 'How to be an AI',
    desc: `This class will discuss some of the topics covered in MIT's Introduction to Artificial Intelligence course. But there's a twist - you'll be playing the role of the AI! Ever wondered how the facial recognition software in your camera works? Or what sorts of rules govern decision making? Learn about the algorithms that make an artificial intelligence tick in this interactive class.`,
    about: `I taught this 2 hour class for high school students at MIT ESP's Splash program in 2013.`,
    excerpt: `A wide variety of machine learning techniques exist to classify data into one of a series of categories, but each of these techniques has its own set of weaknesses. Techniques can be combined using a boosting algorithm, allowing them to cover each other's weaknesses, and the relative weights of each classification technique can be determined by training the algorithm on data with known classifications, and tweaking the weights based on the error rate at each step of training.`
  },
  {
    title: 'How to pass the Turing Test',
    desc: `Have you ever wondered whether the person you were talking to over the internet was secretly a computer? In this class we'll discuss a simple test for artificial intelligence which measures whether a computer and a human can be distinguished in conversation. We'll discuss some of the potential pitfalls of such a test, as well as look at some real life examples from ELIZA to Cleverbot. From here, we'll touch on the nature of intelligence, and the ways in which machines are (or are not) intelligent.`,
    about: `I taught this 1 hour class for high school students at MIT ESP's Splash program in 2013.`,
    excerpt: `The Chinese Room Argument is a thought experiment formulated by John Searle to claim that computers cannot have conscious intelligence. He describes a room where a person is given markings on pieces of paper, looks up these markings in the manuals also contained in the room, and writes other markings in response. Unbeknownst to this person, these markings are Chinese characters, and he is carrying on a conversation in Chinese. Yet, most people would not say he 'knows' Chinese even though it appears he does to an outside observer.`
  },
  {
    title: 'A Brief History of Web Design',
    desc: `Ever wondered what web developers spend their time thinking about? Want to know how we got from "text on a page" to today's intricate and highly interactive websites? Want to know how to make more website with less code? This is the class for you! In this class, we'll discuss the timeline of web design paradigms and technologies, from the first days of the World Wide Web to today. We'll get an overview of the different basic technologies, where they came from, and how they work together. Then, we'll see some of the new ideas and technologies that make modern web design possible. Finally, I'll send you home with some tips on how to start learning this stuff yourself.`,
    about: `I taught this 1 hour class for high school students at MIT ESP's Splash program in 2013.`,
    excerpt: `HTML5 is the latest revision of the HTML standard, offering new 'semantic' tags such as <article> and <nav> along with new APIs to be used with JavaScript, such as the <canvas> element for 2D drawing. HTML5 is frequently used to refer to a larger class of technologies, including CSS3, Geolocation, and client-side storage APIs.`
  }
];

const otherClasses = [
  {
    title: 'Copyrights and Copywrongs',
    desc: `What do you have to be careful of when inventing something new? If you write a book, when are other people allowed to use excerpts from it? Why can't you create a new website and call it 'Google'? The answers to these questions lie in the realm of intellectual property law. In this class, we'll look at how the laws of patents, copyrights, and trademarks play out, both historically and today, through a combination of real cases and interactive simulations.`,
    about: `I taught this 2 hour class for middle school students at MIT ESP's Spark program in 2016.`,
    excerpt: `Although the patent statutes were intended to be fairly all-inclusive in terms of what is patentable, courts typically exclude "laws of nature, physical phenomena, and abstract ideas". This came up in a major biotech patent case, Association for Molecular Pathology v. Myriad Genetics, where the Supreme Court ultimately ruled that a DNA sequence (being a product of nature) is not patent eligible, but that cDNA (which has the same sequence, but with non-coding portions removed, and therefore does not occur in nature) is patent eligible.`
  },
  {
    title: 'Telling Secrets: Code Making (and Breaking)',
    desc: `Suppose you want to tell your friend something, but you don't want anyone else to hear it too. How do you do it? Sometimes, it's harder than it sounds. We'll try out some codes and ciphers from throughout history, and learn how to break them too.`,
    about: `I taught this 1 hour class for 5th-8th grade students at Clark University ESP's Splash program in 2015.`,
    excerpt: `Though they're commonly used interchangeably, 'code' and 'cipher' actually have distinct meanings. A cipher is a substitution at the level of the individual letters in a word (for example, replacing them with numbers or symbols or different letters), while a code is a substitution at the level of entire words.`
  },
  {
    title: 'Dreamcatchers and Native American Mythos',
    desc: `The dreamcatcher is a decoration hung above one's bed, which is designed to catch bad dreams in its web while letting the good ones pass through. In this class, we'll make dreamcatchers and learn a bit about Native American legends and traditions ranging from Pueblo feast days to stories of Coyote the Trickster.`,
    about: `I taught this 1 hour class for middle school students at MIT ESP's Spark program in 2014.`
  },
  {
    title: 'What Is It Like to Be a Bat?',
    desc: `Have you ever tried to imagine what it's like to be something else? Like a bat, or an octopus, or even another human being? Even if you know every detail of "how" something happens in the brain, you still can't imagine what it's like to have an experience you've never had before. This class will discuss the attempts made to explain this phenomenon, and the challenges these explanations pose to some popular theories of mind.`,
    about: `I taught this 1 hour class for middle school students at MIT ESP's Spark program in 2014.`,
    excerpt: `One of the earliest theories of mind was Descartes' theory of Substance Dualism. This theory says that the mind and body are two separate (but somehow connected) substances. People disagreed with this, claiming that it led to 'overdeterminism', where any given physical event may have both a physical cause and a redundant mental cause, making the mind unnecessary.`
  },
  {
    title: 'The Science of Illusions',
    desc: `Why do things sometimes look like they're moving when they're really not? How do you trick your brain into seeing colors on a white page? What cues do you use to understand speech? This class will explore the explanations behind a range of different perceptory illusions, discovering the limits of the mind and looking at the subconscious tricks we use every day.`,
    about: `I taught this 1 hour class for middle and high school students multiple times in 2012 and 2013 at MIT ESP's Splash program.`,
    excerpt: `The retina of the eye has a spot where the optic nerve connects that has no light-sensing cells. Usually, this 'blind spot' is filled in by information from the other eye, but even with one eye closed, the brain is able to 'guess' what image would be hitting that area of the retina, and fill it in from context. You can make a small colored dot on a white background 'disappear' by orienting your eye so that the dot falls exactly in your blind spot - your brain will fill it in with the color of the background.`
  },
  {
    title: 'Games and Strategies',
    desc: `Learn about math through the lens of games! From Nim to Chess to Sudoku to dating or crime, we'll explore games and "games" of all sorts. Along the way, we'll learn about combinatorics, game theory, probability, artificial intelligence, and much more!`,
    about: `I taught this class over 6 weekend sessions for 7th-9th grade students at MIT ESP's HSSP program in spring 2013.`,
    excerpt: `In a game of chance with 50/50 odds of winning or losing, there exists a strategy that guarantees you will always come out on top. If you want to end up with a net profit of $N, bet $N. If you win, great! You've got your net profit. If you lose, bet $2N. If you lose again, bet $4N. Keep going until you win and you will always end up with a net profit of $N. Sadly, both betting limits and wallets are not usually infinite, and so this strategy isn't feasible in real life.`
  },
  {
    title: 'Base-ically: An introduction to Numeral Base Systems',
    desc: `The number "10" looks pretty familiar, right? Well what if I told you it meant "3", or even "16"? If it was in trinary or hexadecimal, I wouldn't even be lying to you! This class is a brief introduction to bases besides the decimal system that you all know and love. We'll discuss how to convert between bases, the applications of different bases, and the history of numeral systems.`,
    about: `I taught this 1 hour class for middle and high school students at MIT ESP's Splash program in 2012.`,
    excerpt: `Today a base-10 (decimal) system is used in many countries throughout the world for most measurements. Time, beyond very small measurements, is a notable exception. However, revolutionary France did once try to create a decimal time system to match the metric system, with 10 hours in a day, 100 minutes in an hour, and 100 seconds in a minute. The system was quickly abandoned.`
  }
];

Vue.component('teaching-carousel-panel', {
  template: `
    <div class='panel teaching'>
      <div class='head'>
        <div class='title'>{{ panel.title }}</div>
        <div class='links' v-if='panel.materials'><span class="fa fa-link"></span> <span v-html='panel.materials'></span></div>
      </div>
      <div class='description'>{{ panel.desc }}</div>
      <div class='about'>{{ panel.about }}</div>
      <div class='excerpt' v-if='panel.excerpt'><span class='label'>Fun Fact:</span> {{ panel.excerpt }}</div>
    </div>
  `,
  props: [ 'panel', 'idx' ]
});

Vue.component('page-teaching', {
  template: `
    <div class='page teaching'>
      <carousel-section
        v-bind:panelData='techClasses'
        v-bind:title='techTitle'
        v-bind:childComponent='carouselComponent'
      ></carousel-section>
      <carousel-section
        v-bind:panelData='lingClasses'
        v-bind:title='lingTitle'
        v-bind:childComponent='carouselComponent'
      ></carousel-section>
      <carousel-section
        v-bind:panelData='otherClasses'
        v-bind:title='otherTitle'
        v-bind:childComponent='carouselComponent'
      ></carousel-section>
    </div>
  `,
  data: function () {
    return {
      techClasses: techClasses,
      techTitle: 'Technology Classes',
      lingClasses: lingClasses,
      lingTitle: 'Linguistics Classes',
      otherClasses: otherClasses,
      otherTitle: 'Other Classes',
      carouselComponent: 'teaching-carousel-panel'
    };
  }
});
