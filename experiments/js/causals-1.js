// so called elicitation task...
// same as experiment-11, 6 kinds / page

var replaceTerms = function(stim, label){
  var prompt = stim[label];
  return prompt.replace(/CATEGORY/g,
     stim.category).replace(/EXEMPLAR/g,
       stim.exemplar).replace(/TREATMENT/g,
         stim.treatment).replace(/TARGET/g,
           stim.target).replace(/QUERY/g,
             stim.query).replace(/UNIT/g,
               stim.unit).replace(/PAST/g,
                 stim.past)
};

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    start: function() {
      $(".err").hide();
      $("#total-num").html(exp.nTrials);
     },
    button : function() {
        exp.go();
    }
  });

  slides.prior_elicitation = slide({
    name: "prior_elicitation",

   // present : _.shuffle(_.range(numTrials)),
    present : exp.stims,
    //this gets run only at the beginning of the block
    present_handle : function(stim) {

      // show prior questions and responses
      $(".question0").show();
      $("#slider_table0").show();
      $(".question1").show();
      $("#slider_table1").show();
      $("#prior_number").show();

      $(".data").show();

      // hide listener/speaker question
      $(".question2").hide();
      $(".task_prompt").hide();
      // hide listener task responses
      $("#listener_number").hide();
      $("#slider_table2").hide();
      // hide speaker task responses
      $("#speaker_choices").hide();
      $('input[name="speaker"]').prop('checked', false);

      $(".err").hide();

      // which half of trial we're in
      this.switch = true;
      this.stim = stim;
      this.trialNum = exp.stimscopy.indexOf(stim);

      this.startTime = Date.now();

      // replace CATEGORY, EXEMPLAR, TREATMENT, PAST from stimuli
      var story = replaceTerms(stim, "storyline")

      var existential_question = replaceTerms(stim, "existentialQuestion")

      var prevalence_question = replaceTerms(stim, "prevalenceQuestion")


      $(".data").html("You are on planet " + stim.planet +
      ". " + story + " " +
      replaceTerms(_.extend(stim, {preamble}), "preamble"));

      this.missing = _.sample([1,2,3,4,5,6,7,8,9])

      stim.data.splice(this.missing, 0, "?");

      for (var i=0; i<=stim.data.length; i++){
        $("#d" + i).css({"padding":"15px"});
        $("#d" + i).css({"border":"1px solid black"});
        $("#d" + i).html(stim.data[i]);
      };

      $(".question0").html("One of the experiments has not yet finished.<br>"+existential_question);
      $(".question1").html(prevalence_question);

      this.n_sliders = 2;

      this.init_sliders(this.n_sliders);
      exp.sliderPost = utils.fillArray(-1,this.n_sliders);
      $("#prior_number").html("---");

    },

    init_sliders : function(n_sliders) {
      for (var i=0; i<n_sliders; i++) {
        utils.make_slider("#single_slider" + i, this.make_slider_callback(i));
      }
      utils.make_slider("#single_slider2", this.make_slider_callback(2));

    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = (i == 1) ? ui.value == 1 ? 0.99 : ui.value : ui.value;
        (i==1) ? $("#prior_number").html(Math.round(exp.sliderPost[i]*100)+"") :
        (i==2) ? $("#listener_number").html(Math.round(exp.sliderPost[i]*100)+"") : null
      };
    },

    button : function() {
      var speakerResponse = $('input[name="speaker"]:checked').val();
      var prompt, utt;
      if (exp.sliderPost.indexOf(-1)>-1) {
        $(".err").show();
      } else if (this.switch) {
        $(".err").hide();
        // hide prior questions and responses
        $(".question0").hide();
        $("#slider_table0").hide();
        $(".question1").hide();
        $("#slider_table1").hide();
        $("#prior_number").hide();


        $(".data").html("<br><br><br><br>" +
         replaceTerms(_.extend(this.stim, {preamble}), "preamble")
       );
        // show speaker/listener questions and responses

        $(".question2").html(replaceTerms(this.stim, "prompt"));
        $(".task_prompt").show();
        $(".question2").show();
        prompt = replaceTerms(this.stim, "prompt");
        if (exp.condition == "speaker"){
          prompt +=  "<br>" +
          replaceTerms(this.stim, "frequencyStatement") + " <strong>" +
          this.stim.frequency + "</strong>"

          utt = 'Your colleague asks you: <strong>"' + replaceTerms(this.stim, "question")+ '"</strong>';

          $("#speaker_choices").show();
        } else if (exp.condition == "listener"){
          prompt = replaceTerms(this.stim, "prompt");
          utt = 'Your colleague tells you: <strong>"' + replaceTerms(this.stim, "utterance") + '"</strong><br>' + replaceTerms(this.stim, "question");

          $("#listener_number").html("---");
          $("#listener_number").show();
          $("#slider_table2").show();
        }

        $(".task_prompt").html(prompt);
        $(".question2").html(utt);
        this.switch = false;

      } else if (!(exp.sliderPost[2]) && (!speakerResponse)) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      var binaryDictionary = {Yes:1,No:0};
      var response = exp.condition == "listener" ? exp.sliderPost[2] :
        binaryDictionary[$('input[name="speaker"]:checked').val()];

      exp.data_trials.push({
        "trial_type" : "prior_and_posterior",
        "condition": exp.condition,
        "trial_num": this.trialNum,
        "prior_probabilityOfPresent" : exp.sliderPost[0],
        "prior_prevalenceGivenPresent" : exp.sliderPost[1],
        "rt":this.rt,
        "posterior":response,
        "frequency": this.stim.frequency,
        "category": this.stim.category,
        "story": this.stim.story,
        "distribution": this.stim.distribution,
        "treatment":this.stim.treatment,
        "unit":this.stim.unit,
        "target":this.stim.target,
        "planet": this.stim.planet,
        "query": this.stim.query,
        "missing":this.missing
      });
    }
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val(),
        comments : $("#comments").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {

  repeatWorker = false;
  (function(){
      var ut_id = "mht-causals-20170222";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.trials = [];
  exp.catch_trials = [];

  exp.condition = _.sample(["speaker","speaker","speaker","listener"])

  exp.nTrials = stories.length;

  exp.stims = [];
  var shuffledDists = _.shuffle(distributions);
  var frequencies = _.shuffle(tasks.speaker.frequencies);
  var labels = _.shuffle(creatureNames);
  var planets = _.shuffle(["X137","A325","Z142","Q681"])

  for (var i=0; i<stories.length; i++) {
    var f;
    if (exp.condition == "speaker"){
      f = {
        frequency: frequencies[i],
        category: labels[i].category,
        exemplar: labels[i].exemplar,
        prompt: tasks.speaker.prompt,
        utterance: tasks.speaker.utterance,
        question: tasks.speaker.question,
        frequencyStatement: tasks.speaker.frequencyStatement,
        planet: planets[i]
      };
      } else {
      f = {
        category: labels[i].category,
        exemplar: labels[i].exemplar,
        prompt: tasks.listener.prompt,
        utterance: tasks.listener.utterance,
        question: tasks.listener.question,
        planet: planets[i]
      }
    }
    exp.stims.push(
      _.extend(stories[i], shuffledDists[i], f)
    )
  };

  exp.stims = _.shuffle(exp.stims);
  // var stimArray = _.shuffle(_.flatten(_.map(exp.propTypes,
  //   function(type){
  //     return _.map(_.shuffle(stimsForPrior3).slice(0,exp.nTrials/5),
  //       function(stim){
  //         var prefix = type=="part" ? "" : stim[type]+" "
  //         return {property: prefix+stim.part,
  //                 type: type}
  //     })
  //   })))
  //
  // var creatures = _.map(_.shuffle(creatureNames).slice(0,exp.nTrials),
  //   function(x){return {category: x.category, exemplar: x.exemplar}}
  //   )
  //
  // exp.stims =_.map(_.zip(creatures, stimArray),
  //   function(cp){
  //     return _.extend(cp[1], cp[0])
  //   })

  exp.stimscopy = exp.stims.slice(0);

  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
   exp.structure=[
     "i0",
     "instructions",
     "prior_elicitation",
     'subj_info',
     'thanks'
   ];

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
