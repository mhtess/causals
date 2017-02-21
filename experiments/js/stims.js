var tasks = {
  speaker: {
    utterance: [10, 30, 50, 70, 90],
    query: "Chemical X makes the plants grow."
  },
  listener: {
    utterance: "Chemical X makes the plants grow.",
    query: "How many out of 100 plants do you think successfully made the plants grow?"
  }
}


var stimuli = [
  {
    distribution: "rare",
    data: [0, 10, 0, 0, 0, 15, 0, 0, 0, 0]
  },
  {

  },
  {

  }
]

var stories = [
  {
    story: "plants",
    storyline:  "On this planet, there is an edible plant called CATEGORY and your team has to figure out how CATEGORY grow. Your team runs 11 experiments, trying to grow CATEGORY with 11 different chemical compounds. In each experiment, your team fed 100 plants with 1 of the compounds to see how many of the 100 plants would grow. The number of plants (out of 100) that were successfully grown in the first 10 experiments are shown below.",
    existentialQuestion: "The experiment with the 11th compound is finishing.<br> How likely do you think it is that this chemical will grow <emph>at least 1 EXEMPLAR?",
    prevalenceQuestion: "We know now that at least 1 EXEMPLAR was successfully grown.<br> How many of the remaining 99 do you think will successfully grow?\n"
  },
  {
    story: "breadrise (with yeast)",
    storyline:  "On this planet, there is an edible plant called CATEGORY and your team has to figure out how CATEGORY grow. Your team runs 11 experiments, trying to grow CATEGORY with 11 different chemical compounds. In each experiment, your team fed 100 plants with 1 of the compounds to see how many of the 100 plants would grow. The number of plants (out of 100) that were successfully grown in the first 10 experiments are shown below.",
    existentialQuestion: "The experiment with the 11th compound is finishing.<br> How likely do you think it is that this chemical will grow <emph>at least 1 EXEMPLAR?",
    prevalenceQuestion: "We know now that at least 1 EXEMPLAR was successfully grown.<br> How many of the remaining 99 do you think will successfully grow?\n"
  },
  {
    story: "kitting germs (with soap)"
  },
  {
    story: "babies stopped crying",

  }
]


var allstims =
    [
    [{list:0,category: "morseths", color: "silver", part: "fur", extraneous:"curly",
    dangerous:"This fur sheds particles that get lodged in your lungs and make it impossible to breathe.",
    dangerfrag:"sheds particles that get lodged in your lungs and make it impossible to breathe.",
    distinctgen:"Only one kind of animal on this island has this kind of fur.",
    dangdistinctive: "No other animals on this island have this kind of fur.",
    distinctive: "No other animals on this island have curly, rough fur like this.",
    nondistinctive: "Other animals on this island have this kind of fur.",
    irrelevant:"This fur is very curly and rough to the touch."},
        {list:1, category: "ollers", color: "yellow", part: "fur", extraneous:"curly",
        dangerous:"This fur sheds particles that get lodged in your lungs and make it impossible to breathe.",
        dangerfrag:"sheds particles that get lodged in your lungs and make it impossible to breathe.",
        distinctgen:"Only one kind of animal on this island has this kind of fur.",
        dangdistinctive: "No other animals on this island have this kind of fur.",
        distinctive: "No other animals on this island have curly, rough fur like this.",
        nondistinctive: "Other animals on this island have this kind of fur.",
        irrelevant:"This fur is very curly and rough to the touch."},
        {list:2, category: "kweps", color: "copper", part: "fur", extraneous:"curly",
        dangerous:"This fur sheds particles that get lodged in your lungs and make it impossible to breathe.",
        dangdistinctive: "No other animals on this island have this kind of fur.",
        distinctgen:"Only one kind of animal on this island has this kind of fur.",
        dangerfrag:"sheds particles that get lodged in your lungs and make it impossible to breathe.",
        distinctive: "No other animals on this island have curly, rough fur like this.",
        nondistinctive: "Other animals on this island have this kind of fur.",
        irrelevant:"This fur is very curly and rough to the touch."}
        ],

        [{list:0,category: "blins", color: "red", part: "scales", extraneous: "soft",
        dangerous:"These scales secrete a strong venom that kills you on the spot.",
        dangerfrag:"secrete a strong venom that kills you on the spot.",
        distinctgen:"Only one kind of animal on this island has these kinds of scales.",
        dangdistinctive: "No other animals on this island have these kinds of scales.",
        distinctive: "No other animals on this island have soft, flexible scales like these.",
        nondistinctive: "Other animals on this island have these kinds of scales.",
        irrelevant:"These scales are soft, flexible, and very shiny."},
        {list:1, category: "reesles", color: "blue", part: "scales", extraneous: "soft",
        dangerous:"These scales secrete a strong venom that kills you on the spot.",
        dangerfrag:"secrete a strong venom that kills you on the spot.",
        distinctgen:"Only one kind of animal on this island has these kinds of scales.",
        dangdistinctive: "No other animals on this island have these kinds of scales.",
        distinctive: "No other animals on this island have soft, flexible scales like these.",
        nondistinctive: "Other animals on this island have these kinds of scales.",
        irrelevant:"These scales are soft, flexible, and very shiny."},
        {list:2, category: "dorbs", color: "yellow", part: "scales", extraneous: "soft",
        dangerous:"These scales secrete a strong venom that kills you on the spot.",
        dangerfrag:"secrete a strong venom that kills you on the spot.",
        distinctgen:"Only one kind of animal on this island has these kinds of scales.",
        dangdistinctive: "No other animals on this island have these kinds of scales.",
        distinctive: "No other animals on this island have soft, flexible scales like these.",
        nondistinctive: "Other animals on this island have these kinds of scales.",
        irrelevant:"These scales are soft, flexible, and very shiny."}],

        [{list:0,category: "zorbs", color: "orange", part: "tails", extraneous:"long",
        dangerous:"These tails are so long and muscular that they can suffocate you in a matter of minutes.",
        dangerfrag:"are so long and muscular that they can suffocate you in a matter of minutes.",
        distinctgen:"Only one kind of animal on this island has this kind of tail.",
        dangdistinctive: "No other animals on this island have this kind of tail.",
        distinctive: "No other animals on this island have long, curled tails like these.",
        nondistinctive: "Other animals on this island have this kind of tail.",
        irrelevant:"These tails are very long and usually get curled up in a ball."},
        {list:1, category: "taifels", color: "purple", part: "tails", extraneous:"long",
        dangerous:"These tails are so long and muscular that they can suffocate you in a matter of minutes.",
        dangerfrag:"are so long and muscular that they can suffocate you in a matter of minutes.",
        distinctgen:"Only one kind of animal on this island has this kind of tail.",
        dangdistinctive: "No other animals on this island have this kind of tail.",
        distinctive: "No other animals on this island have long, curled tails like these.",
        nondistinctive: "Other animals on this island have this kind of tail.",
        irrelevant:"These tails are very long and usually get curled up in a ball."},
        {list:2, category: "trufts", color: "green", part: "tails",extraneous:"long",
        dangerous:"These tails are so long and muscular that they can suffocate you in a matter of minutes.",
        dangerfrag:"are so long and muscular that they can suffocate you in a matter of minutes.",
        distinctgen:"Only one kind of animal on this island has this kind of tail.",
        dangdistinctive: "No other animals on this island have this kind of tail.",
        distinctive: "No other animals on this island have long, curled tails like these.",
        nondistinctive: "Other animals on this island have this kind of tail.",
        irrelevant:"These tails are very long and usually get curled up in a ball."}],

        [{list:0,category: "daiths", color: "gold", part: "stripes", extraneous:"thin",
        dangerous:"These stripes deliver a powerful electric shock that's deadly to anyone within a few feet.",
        dangerfrag:"deliver a powerful electric shock that's deadly to anyone within a few feet.",
        distinctgen:"Only one kind of animal on this island has these kinds of stripes.",
        dangdistinctive: "No other animals on this island have these kinds of stripes.",
        distinctive: "No other animals on this island have thin, closely spaced stripes like these.",
        nondistinctive: "Other animals on this island have these kinds of stripes.",
        irrelevant:"These stripes are very thin and closely spaced."},
        {list:1, category: "mooks", color: "copper", part: "stripes", extraneous:"thin",
        dangerous:"These stripes deliver a powerful electric shock that's deadly to anyone within a few feet.",
        dangerfrag:"deliver a powerful electric shock that's deadly to anyone within a few feet.",
        distinctgen:"Only one kind of animal on this island has these kinds of stripes.",
        dangdistinctive: "No other animals on this island have these kinds of stripes.",
        distinctive: "No other animals on this island have thin, closely spaced stripes like these.",
        nondistinctive: "Other animals on this island have these kinds of stripes.",
        irrelevant:"These stripes are very thin and closely spaced."},
        {list:2, category: "frams", color: "silver", part: "stripes", extraneous:"thin",
        dangerous:"These stripes deliver a powerful electric shock that's deadly to anyone within a few feet.",
        dangerfrag:"deliver a powerful electric shock that's deadly to anyone within a few feet.",
        distinctgen:"Only one kind of animal on this island has these kinds of stripes.",
        dangdistinctive: "No other animals on this island have these kinds of stripes.",
        distinctive: "No other animals on this island have thin, closely spaced stripes like these.",
        nondistinctive: "Other animals on this island have these kinds of stripes.",
        irrelevant:"These stripes are very thin and closely spaced."}],

        [{list:0,category: "moxes", color: "green", part: "shells", extraneous:"light",
        dangerous: "These shells are so heavy that they would immediately crush your bones.",
        dangerfrag: "are so heavy that they would immediately crush your bones.",
        distinctgen:"Only one kind of animal on this island has this kind of shell.",
        dangdistinctive: "No other animals on this island have this kind of shell.",
        distinctive: "No other animals on this island have light, octagonal shells like these.",
        nondistinctive: "Other animals on this island have this kind of shell.",
        irrelevant:"These shells have an octagonal shape and are very light."},
        {list:1, category: "luzaks", color: "orange", part: "shells", extraneous:"light",
        dangerous: "These shells are so heavy that they would immediately crush your bones.",
        distinctgen:"Only one kind of animal on this island has this kind of shell.",
        dangerfrag: "are so heavy that they would immediately crush your bones.",
        dangdistinctive: "No other animals on this island have this kind of shell.",
        distinctive: "No other animals on this island have light, octagonal shells like these.",
        nondistinctive: "Other animals on this island have this kind of shell.",
        irrelevant:"These shells have an octagonal shape and are very light."},
        {list:2, category: "javs", color: "purple", part: "shells", extraneous:"light",
        dangerous: "These shells are so heavy that they would immediately crush your bones.",
        dangerfrag: "are so heavy that they would immediately crush your bones.",
        distinctgen:"Only one kind of animal on this island has this kind of shell.",
        dangdistinctive: "No other animals on this island have this kind of shell.",
        distinctive: "No other animals on this island have light, octagonal shells like these.",
        nondistinctive: "Other animals on this island have this kind of shell.",
        irrelevant:"These shells have an octagonal shape and are very light."}],

        [{list:0,category: "ludinos", color: "yellow", part: "legs", extraneous:"long",
        dangerous: "These legs are so powerful that a single blow could kill you.",
        dangerfrag:"are so powerful that a single blow could kill you.",
        distinctgen:"Only one kind of animal on this island has these kinds of legs.",
        dangdistinctive: "No other animals on this island have these kinds of legs.",
        distinctive: "No other animals on this island have long legs like these.",
        nondistinctive: "Other animals on this island have these kinds of legs.",
        irrelevant:"These legs are very long and covered with bumpy skin."},
        {list:1, category: "ackles", color: "silver", part: "legs", extraneous:"long",
        dangerous: "These legs are so powerful that a single blow could kill you.",
        dangerfrag:"are so powerful that a single blow could kill you.",
        distinctgen:"Only one kind of animal on this island has these kinds of legs.",
        dangdistinctive: "No other animals on this island have these kinds of legs.",
        distinctive: "No other animals on this island have long legs like these.",
        nondistinctive: "Other animals on this island have these kinds of legs.",
        irrelevant:"These legs are very long and covered with bumpy skin."},
        {list:2, category: "feps", color: "pink", part: "legs", extraneous:"long",
        dangerous: "These legs are so powerful that a single blow could kill you.",
        dangerfrag:"are so powerful that a single blow could kill you.",
        distinctgen:"Only one kind of animal on this island has these kinds of legs.",
        dangdistinctive: "No other animals on this island have these kinds of legs.",
        distinctive: "No other animals on this island have long legs like these.",
        nondistinctive: "Other animals on this island have these kinds of legs.",
        irrelevant:"These legs are very long and covered with bumpy skin."}],

        [{list:0,category: "cheebas", color: "blue", part: "ears", extraneous:"small",
        dangerous: "These ears are the home to dangerous parasites that can make you go deaf.",
        dangerfrag: "are the home to dangerous parasites that can make you go deaf.",
        distinctgen:"Only one kind of animal on this island has these kinds of ears.",
        dangdistinctive: "No other animals on this island have these kinds of ears.",
        distinctive: "No other animals on this island have small, round ears like these.",
        nondistinctive: "Other animals on this island have these kinds of ears.",
        irrelevant:"These ears are small and round."},
        {list:1, category: "elleps", color: "pink", part: "ears", extraneous:"small",
        dangerous: "These ears are the home to dangerous parasites that can make you go deaf.",
        dangerfrag: "are the home to dangerous parasites that can make you go deaf.",
        distinctgen:"Only one kind of animal on this island has these kinds of ears.",
        dangdistinctive: "No other animals on this island have these kinds of ears.",
        distinctive: "No other animals on this island have small, round ears like these.",
        nondistinctive: "Other animals on this island have these kinds of ears.",
        irrelevant:"These ears are small and round."},
        {list:2, category: "kazzes", color: "orange", part: "ears", extraneous:"small",
        dangerous: "These ears are the home to dangerous parasites that can make you go deaf.",
        dangerfrag: "are the home to dangerous parasites that can make you go deaf.",
        distinctgen:"Only one kind of animal on this island has these kinds of ears.",
        dangdistinctive: "No other animals on this island have these kinds of ears.",
        distinctive: "No other animals on this island have small, round ears like these.",
        nondistinctive: "Other animals on this island have these kinds of ears.",
        irrelevant:"These ears are small and round."}],

        [{list:0,category: "lorches", color: "purple", part: "feathers", extraneous:"smooth",
        dangerous: "These feathers are as sharp as needles and can easily get lodged in you, causing massive bleeding.",
        dangerfrag:"are as sharp as needles and can easily get lodged in you, causing massive bleeding.",
        distinctgen:"Only one kind of animal on this island has these kinds of feathers.",
        dangdistinctive: "No other animals on this island have these kinds of feathers.",
        distinctive: "No other animals on this island have wide, smooth feathers like these.",
        nondistinctive: "Other animals on this island have these kinds of feathers.",
        irrelevant:"These feathers are wide and very smooth to the touch."},
        {list:1, category: "plovs", color: "gold", part: "feathers", extraneous:"smooth",
        dangerous: "These feathers are as sharp as needles and can easily get lodged in you, causing massive bleeding.",
        dangerfrag:"are as sharp as needles and can easily get lodged in you, causing massive bleeding.",
        distinctgen:"Only one kind of animal on this island has these kinds of feathers.",
        dangdistinctive: "No other animals on this island have these kinds of feathers.",
        distinctive: "No other animals on this island have wide, smooth feathers like these.",
        nondistinctive:  "Other animals on this island have these kinds of feathers.",
        irrelevant:"These feathers are wide and very smooth to the touch."},
        {list:2, category: "noobs", color: "red", part: "feathers", extraneous:"smooth",
        dangerous: "These feathers are as sharp as needles and can easily get lodged in you, causing massive bleeding.",
        dangerfrag:"are as sharp as needles and can easily get lodged in you, causing massive bleeding.",
        distinctgen:"Only one kind of animal on this island has these kinds of feathers.",
        dangdistinctive: "No other animals on this island have these kinds of feathers.",
        distinctive: "No other animals on this island have wide, smooth feathers like these.",
        nondistinctive:  "Other animals on this island have these kinds of feathers.",
        irrelevant:"These feathers are wide and very smooth to the touch."}],

        [{list:0,category: "glippets", color: "copper", part: "spots", extraneous:"sensitive",
        dangerous: "These spots are the home to a contagious fungus that is deadly to anyone who becomes infected with it.",
        dangerfrag:"are the home to a contagious fungus that is deadly to anyone who becomes infected with it.",
        distinctgen:"Only one kind of animal on this island has these kinds of spots.",
        dangdistinctive: "No other animals on this island have these kinds of spots.",
        distinctive: "No other animals on this island have sensitive spots like these.",
        nondistinctive: "Other animals on this island have these kinds of spots." ,
        irrelevant:"These spots are very sensitive and cover most of their bodies."},
        {list:1, category: "sapers", color: "red", part: "spots", extraneous:"sensitive",
        dangerous: "These spots are the home to a contagious fungus that is deadly to anyone who becomes infected with it.",
        dangerfrag:"are the home to a contagious fungus that is deadly to anyone who becomes infected with it.",
        distinctgen:"Only one kind of animal on this island has these kinds of spots.",
        dangdistinctive: "No other animals on this island have these kinds of spots.",
        distinctive: "No other animals on this island have sensitive spots like these.",
        nondistinctive: "Other animals on this island have these kinds of spots.",
        irrelevant:"These spots are very sensitive and cover most of their bodies."},
        {list:2, category: "stups", color: "gold", part: "spots", extraneous:"sensitive",
        dangerous: "These spots are the home to a contagious fungus that is deadly to anyone who becomes infected with it.",
        dangerfrag:"are the home to a contagious fungus that is deadly to anyone who becomes infected with it.",
        distinctgen:"Only one kind of animal on this island has these kinds of spots.",
        dangdistinctive: "No other animals on this island have these kinds of spots.",
        distinctive: "No other animals on this island have sensitive spots like these.",
        nondistinctive: "Other animals on this island have these kinds of spots.",
        irrelevant:"These spots are very sensitive and cover most of their bodies."}],

        [{list:0,category: "krivels", color: "pink", part: "teeth", extraneous:"long",
        dangerous: "These teeth are razor sharp and so powerful that a single bite can be lethal.",
        distinctgen:"Only one kind of animal on this island has these kinds of teeth.",
        dangerfrag: "are razor sharp and so powerful that a single bite can be lethal.",
        dangdistinctive: "No other animals on this island have these kinds of teeth.",
        distinctive: "No other animals on this island have long, narrow teeth like these.",
        nondistinctive: "Other animals on this island have these kinds of teeth.",
        irrelevant:"These teeth are long and narrow."},
        {list:1, category: "zoovs", color: "green", part: "teeth", extraneous:"long",
        dangerous: "These teeth are razor sharp and so powerful that a single bite can be lethal.",
        distinctgen:"Only one kind of animal on this island has these kinds of teeth.",
        dangerfrag: "are razor sharp and so powerful that a single bite can be lethal.",
        dangdistinctive: "No other animals on this island have these kinds of teeth.",
        distinctive: "No other animals on this island have long, narrow teeth like these.",
        nondistinctive: "Other animals on this island have these kinds of teeth.",
        irrelevant:"These teeth are long and narrow."},
        {list:2, category: "thups", color: "blue", part: "teeth", extraneous:"long",
        dangerous: "These teeth are razor sharp and so powerful that a single bite can be lethal.",
        distinctgen:"Only one kind of animal on this island has these kinds of teeth.",
        dangerfrag: "are razor sharp and so powerful that a single bite can be lethal.",
        dangdistinctive: "No other animals on this island have these kinds of teeth.",
        distinctive: "No other animals on this island have long, narrow teeth like these.",
        nondistinctive: "Other animals on this island have these kinds of teeth.",
        irrelevant:"These teeth are long and narrow."}]
      ]



var creatureNames =
    [
    {list:0,category: "morseths", exemplar:"morseth"},
    {list:1, category: "ollers", exemplar:"oller"},
    {list:2, category: "kweps", exemplar:"kwep"},
    {list:0,category: "blins", exemplar:"blin"},
    {list:1, category: "reesles", exemplar:"reesle"},
    {list:2, category: "dorbs", exemplar:"dorb"},
    {list:0,category: "zorbs", exemplar:"zorb"},
    {list:1, category: "taifels", exemplar:"taifel"},
    {list:2, category: "trufts", exemplar:"truft"},
    {list:0,category: "daiths", exemplar:"daith"},
    {list:1, category: "mooks", exemplar:"mook"},
    {list:2, category: "frams", exemplar:"fram"},
    {list:0,category: "moxes", exemplar:"mox"},
    {list:1, category: "luzaks", exemplar:"luzak"},
    {list:2, category: "javs", exemplar:"jav"},
    {list:0,category: "pangolins", exemplar:"pangolin"},
    {list:1, category: "ackles", exemplar:"ackle"},
    {list:2, category: "wugs", exemplar:"wug"},
    {list:0,category: "cheebas", exemplar:" cheeba"},
    {list:1, category: "elleps", exemplar:"ellep"},
    {list:2, category: "kazzes", exemplar:"kaz"},
    {list:0,category: "lorches", exemplar:"lorch"},
    {list:1, category: "plovs", exemplar:"plov"},
    {list:2, category: "grinks", exemplar:"grink"},
    {list:0,category: "glippets", exemplar:"glippet"},
    {list:1, category: "sapers", exemplar:"saper"},
    {list:2, category: "stups", exemplar:"stup"},
    {list:0,category: "krivels", exemplar:"krivel"},
    {list:1, category: "zoovs", exemplar:"zoov"},
    {list:2, category: "thups", exemplar:"thup"},
    {list:3, category: "crullets", exemplar:"crullet"},
    {list:3, category: "feps", exemplar:"fep"}
    ]

    // ,


var cbgstims = [
                {type:"accidental", property: "broken legs"},
                {type:"accidental", property: "cracked shells"},
                {type:"accidental", property: "fungus-covered claws"},
                {type:"accidental", property: "infected scales"},
                {type:"accidental", property: "itchy skin"},
                {type:"accidental", property: "muddy feathers"},
                {type:"accidental", property: "rotting shells"},
                {type:"accidental", property: "sore teeth"},
                {type:"accidental", property:  "swollen ears"},
                {type:"accidental", property: "wet fur"},

                {type:"vague", property: "long teeth"},
                {type:"vague", property: "sensitive spots"},
                {type:"vague", property: "smooth feathers"},
                {type:"vague", property: "small ears"},
                {type:"vague", property: "long legs"},
                {type:"vague", property: "light shells"},
                {type:"vague", property: "thin stripes"},
                {type:"vague", property: "long tails"},
                {type:"vague", property: "soft scales"},
                {type:"vague", property: "curly fur"},

                {type:"color", property: "pink teeth"},
                {type:"color", property: "gold spots"},
                {type:"color", property: "purple feathers"},
                {type:"color", property: "orange ears"},
                {type:"color", property: "silver legs"},
                {type:"color", property: "green shells"},
                {type:"color", property: "copper stripes"},
                {type:"color", property: "orange tails"},
                {type:"color", property: "red scales"},
                {type:"color", property: "yellow fur"}
                ]

var stimsForPrior = [
                [
                {type:"accidental", property: "broken legs"},
                {type:"accidental", property: "cracked shells"},
                {type:"accidental", property: "fungus-covered claws"},
                {type:"accidental", property: "infected scales"},
                {type:"accidental", property: "itchy skin"},
                {type:"accidental", property: "muddy feathers"},
                {type:"accidental", property: "rotting shells"},
                {type:"accidental", property: "sore teeth"},
                {type:"accidental", property:  "swollen ears"},
                {type:"accidental", property: "wet fur"}
                ],

                [{type:"vague", property: "long teeth"},
                {type:"vague", property: "sensitive spots"},
                {type:"vague", property: "smooth feathers"},
                {type:"vague", property: "small ears"},
                {type:"vague", property: "long legs"},
                {type:"vague", property: "light shells"},
                {type:"vague", property: "thin stripes"},
                {type:"vague", property: "long tails"},
                {type:"vague", property: "soft scales"},
                {type:"vague", property: "curly fur"}],

                [{type:"color", property: "pink teeth"},
                {type:"color", property: "gold spots"},
                {type:"color", property: "purple feathers"},
                {type:"color", property: "orange ears"},
                {type:"color", property: "silver legs"},
                {type:"color", property: "green shells"},
                {type:"color", property: "copper stripes"},
                {type:"color", property: "orange tails"},
                {type:"color", property: "red scales"},
                {type:"color", property: "yellow fur"}],



                [{type:"part", property: "teeth"},
                {type:"part", property: "spots"},
                {type:"part", property: "feathers"},
                {type:"part", property: "ears"},
                {type:"part", property: "legs"},
                {type:"part", property: "shells"},
                {type:"part", property: "stripes"},
                {type:"part", property: "tails"},
                {type:"part", property: "scales"},
                {type:"part", property: "fur"}]


                ]

var stimsForPrior2 =

                [
                {part: "teeth", accidental:"sore", color:"pink", vague:"long"},
                // {part: "spots", accidental:"dirty", color:"gold", vague:"sensitive"},
                {part: "feathers", accidental:"muddy", color:"purple", vague:"smooth"},
                {part: "ears", accidental:"swollen", color:"orange", vague:"small"},
                {part: "legs", accidental:"broken", color:"silver", vague:"long"},
                {part: "shells", accidental:"rotting", color:"green", vague:"light"},
                {part: "stripes", accidental:"faded", color:"copper", vague:"thin"},
                {part: "tails", accidental:"itchy", color:"orange", vague:"long"},
                {part: "scales", accidental:"infected", color:"red", vague:"soft"},
                {part: "fur", accidental:"wet", color:"yellow", vague:"curly"},
                {part: "claws", accidental:"cracked", color:"blue", vague:"big"},
                {part: "skin", accidental:"swollen", color:"violet", vague:"rough"},
                {part: "eyes", accidental:"dirty", color:"yellow", vague:"sensitive"}
                ]







var stimsForPrior3 =
                [
                {
                    part: "teeth",
                    accidental:"sore",
                    disease:"rotten",
                    color:"pink",
                    vague:"long",
                    dangerous:"razor sharp teeth that are so powerful a single bite can be lethal",
                    vaguelong:"teeth that are long and narrow"
                },
                {
                    part: "fur",
                    accidental:"wet",
                    disease:"fungus-covered",
                    color:"yellow",
                    vague:"curly",
                    dangerous:"fur that sheds particles that get lodged in your lungs and make it impossible to breathe",
                    vaguelong:"fur that is very curly and rough to the touch"
                },
                // {
                //     part: "scales",
                //     accidental:"infected",
                //     color:"red",
                //     vague:"soft",
                //     dangerous: "scales that secrete a strong venom that kills you on the spot",
                //     vaguelong: "scales that are soft, flexible, and very shiny."
                // },
                {
                    part: "tails",
                    accidental:"itchy",
                    disease:"torn",
                    color:"orange",
                    vague:"long",
                    dangerous:"tails that are so long and muscular that they can suffocate you in a matter of minutes",
                    vaguelong:"tails that are very long and usually get curled up in a ball"
                },
                // {
                //     part: "stripes",
                //     accidental:"faded",
                //     color:"copper",
                //     vague:"thin",
                //     dangerous:"stripes that deliver a powerful electric shock that's deadly to anyone within a few feet",
                //     vaguelong:"stripes that are very thin and closely spaced"
                // },
                {
                    part: "claws",
                    accidental:"cracked",
                    disease:"worn-out",
                    color:"blue",
                    vague:"big",
                    dangerous:"claws that are so incredibly strong that once they grab hold of something, they cannot be unlatched",
                    vaguelong:"claws that are big and delicate"
                },
                // {
                //     part: "shells",
                //     // accidental:"rotting",
                //     disease:"cracked",
                //     color:"green",
                //     vague:"light",
                //     dangerous:"shells that are so heavy they would immediately crush your bones",
                //     vaguelong:"shells that have an octagonal shape and are very light"
                // },
                // {
                //     part: "spots",
                //     // accidental:"dirty",
                //     disease: "bleeding",
                //     color:"gold",
                //     vague:"sensitive",
                //     dangerous:"spots that are home to a contagious fungus that is deadly to anyone who becomes infected with it",
                //     vaguelong:"spots that are very sensitive and cover most of their bodies"
                // },
                {
                    part: "feathers",
                    accidental:"muddy",
                    disease:"torn",
                    color:"purple",
                    vague:"smooth",
                    dangerous:"feathers that are as sharp as needles and can easily get lodged in you, causing massive bleeding",
                    vaguelong:"feathers that are wide and very smooth to the touch"
                },
                {
                    part: "ears",
                    accidental:"swollen",
                    disease:"infected",
                    color:"orange",
                    vague:"small",
                    dangerous:"ears that are home to dangerous parasites that can make you go deaf",
                    vaguelong:"ears that are small and round"
                },
                {
                    part: "legs",
                    accidental:"sore",
                    disease:"broken",
                    color:"silver",
                    vague:"long",
                    dangerous:"legs that are so powerful a single blow could kill you",
                    vaguelong:"legs that are very long and covered with bumpy skin",
                },
                {
                    part: "skin",
                    accidental:"dusty",
                    disease:"burned",
                    color:"violet",
                    vague:"rough",
                    dangerous:"skin that carries a poisonous dust that makes your veins seize up, causing blood clots",
                    vaguelong:"skin that is rough and textured"
                }
                //, {
                //     part: "eyes",
                //     accidental:"itchy",
                //     disease:"melted",
                //     color:"yellow",
                //     vague:"sensitive"
                // }
                ]



var realAnimals = [
                    "Tigers",
                    "Turtles",
                    "Clams",
                    "Falcons",
                    "Robins",
                    "Dogs",
                    "Cats",
                    "Lions",
                    "Frogs",
                    "Sharks"
                    ]

var accidental = [
    "broken legs",
    "broken tails",
    "cracked claws",
    "cracked shells",
    "fungus-covered claws",
    "fungus-covered scales",
    "infected ears",
    "infected scales",
    "itchy skin",
    "itchy tails",
    "muddy feathers",
    "muddy fur",
    "rotting shells",
    "rotting teeth",
    "sore legs",
    "sore teeth",
    "swollen ears",
    "swollen skin",
    "wet feathers",
    "wet fur"
]
