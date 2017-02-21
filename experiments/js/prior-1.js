// so called elicitation task...
// same as experiment-11, 6 kinds / page

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

  slides.instructions2 = slide({
    name : "instructions2",
    button : function() {
      this.log_responses();
      exp.go(); //use exp.go() if and only if there is no "present" data.
    },
    log_responses : function() {
      exp.catch_trials.push({
        "training_feedback" : $("#feedback").val()
      });
    }
  });

    slides.instructions3 = slide({
    name : "instructions3",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
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

      // hide listener/speaker question
      $(".question2").hide();
      $(".task_prompt").hide();
      // hide listener task responses
      $("#listener_number").hide();
      $("#slider_table2").hide();
      // hide speaker task responses
      $("#speaker_choices").hide();

      this.switch = true;

      this.startTime = Date.now();
      $(".err").hide();

      stim.planet = "X138"
      stim.story = stories[0]
      var story =  stim.story.storyline
      var newStory = story.replace(/CATEGORY/g, stim.category)

      $(".data").html(newStory);

      var data = [0, 10, 0, 0, 0, 15, 0, 0, 0, 0];

      for (var i=0; i<=data.length; i++){
        $("#d" + i).css({"padding":"15px"});
        $("#d" + i).css({"border":"1px solid black"});
        $("#d" + i).html(data[i]);
      };

      this.stim = stim;
      this.trialNum = exp.stimscopy.indexOf(stim);

      var existential_question = stim.story.existentialQuestion.replace("EXEMPLAR",stim.exemplar)
      $(".question0").html(existential_question);

      var prevalence_question = stim.story.prevalenceQuestion.replace("EXEMPLAR",stim.exemplar);

      $(".question1").html(prevalence_question);

      this.n_sliders = 2;

      this.init_sliders(this.n_sliders);
      // exp.sliderPost = [];
      exp.sliderPost = utils.fillArray(-1,this.n_sliders);//[];
      $("#prior_number").html("---");
      $("#listener_number").html("---");

    },

    init_sliders : function(n_sliders) {
      for (var i=0; i<n_sliders; i++) {
        utils.make_slider("#single_slider" + i, this.make_slider_callback(i));
      }
      utils.make_slider("#single_slider2", this.make_slider_callback(2));

    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value == 1 ? 0.99 : ui.value;
        (i==1) ? $("#prior_number").html(Math.round(exp.sliderPost[i]*100)+"") :
        (i==2) ? $("#listener_number").html(Math.round(exp.sliderPost[i]*100)+"") : null
      };
    },

    button : function() {
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

        // show speaker/listener questions and responses
        $(".task_prompt").html(tasks[exp.condition]["utterance"]);
        $(".question2").html(tasks[exp.condition]["query"]);
        $(".task_prompt").show();
        $(".question2").show();
        if (exp.condition == "speaker"){
          $("#speaker_choices").show();
        } else if (exp.condition == "listener"){
          $("#listener_number").show();
          $("#slider_table2").show();
        }

        this.switch = false;

      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      exp.data_trials.push({
        "trial_type" : "twostep_elicitation",
        "trial_num": this.trialNum,
        "response0" : exp.sliderPost[0],
        "response1" : exp.sliderPost[1],
        "rt":this.rt,
        "stim_type": this.stim.type,
        "stim_property": this.stim.property,
        "stim_category": this.stim.category
      });
    }
  });

  slides.twostep_training = slide({
    name: "twostep_prevalence",

   // present : _.shuffle(_.range(numTrials)),
    present :  [ {
      category:"glippets",
      exemplar:"glippet",
      property:"are female",
      question0:"<strong>This is a practice trial. (1 of 1)</strong><br>"+
      'The robot begins by randomly picking an animal name from the animals on the island it knows. <br>The robot will say: <em>We recently discovered animals called glippets.</em> The robot will ask you two questions in order to learn about animal properties. ' +
      ' The 1st question is about how likely it is that <em>at least one</em> of this animal species has the property. <br>Suppose the robot wants to learn about the property "female"; it would ask you:' +
      '<br> <strong><em>How likely is it that there is a glippet that is female</strong></em>?' +
      // " Since you don't know anything about glippets (except that they are a kind of animal), base your judgment on the property: <em>is female</em>.</p>"+
      "<br> We are showing how you might respond below. Even though we don't know anything about glippets, we know that basically all animals have female members. So we would say it's very likely.",
      question1:'The 2nd question is about how many of this kind of animal have the property, assuming that at least one does. <br>The robot says: <em>Suppose there is a glippet that is female.</em>' +
          "<br><strong><em>What percentage of glippets do you think are female?</strong></em><br>"+
          "Since we know that approximately half of every species is female, the best response is likely to be about half. <br>Set this slider to reflect this."
    }]
    ,
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      // debugger;
      this.startTime = Date.now();
      $(".training_err").hide();

      $(".err").hide();
      this.stim =  stim; // allstims should be randomized, or stim_num should be

      $(".question0").html(stim.question0);
      $(".question0").css({"font-size":"16px"});

      $(".question1").html(stim.question1);
      $(".question1").css({"font-size":"16px"});

      this.n_sliders = 2;

      this.init_sliders(this.n_sliders);
      // exp.sliderPost = [];
      exp.sliderPost = utils.fillArray(-1,this.n_sliders);//[];
      $(".slider_number").html("---")

      var label = "#single_slider0";

      $(label+ ' .ui-slider-handle').show();
      $(label).slider({value:0.99});
      $(label).css({"background":"#99D6EB"});
      $(label + ' .ui-slider-handle').css({
        "background":"#667D94",
        "border-color": "#001F29"
      })
      // $(label).unbind("mousedown");



    },

    init_sliders : function(n_sliders) {
      for (var i=0; i<n_sliders; i++) {
        utils.make_slider("#single_slider" + i, this.make_slider_callback(i));
      }
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
        (i==1) ? $(".slider_number").html(Math.round(exp.sliderPost[i]*100)+"%") : null
      };
    },

    button : function() {
      if (!(exp.sliderPost[1] < 0.70 & exp.sliderPost[1]>0.20)) {
        $(".training_err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        // this.log_responses();
        _stream.apply(this);
      }
    }

    // log_responses : function() {
    //   exp.data_trials.push({
    //     "trial_type" : "implied_prevalence",
    //     "trial_num": this.trialNum,
    //     "response0" : exp.sliderPost[0],
    //     "response1" : exp.sliderPost[1],
    //     "rt":this.rt,
    //     "stim_type": this.stim.type,
    //     "stim_determiner": this.determiner,
    //     "stim_property": this.stim.property,
    //     "stim_category": this.stim.category
    //   });
    // }
  });

  slides.slider_training = slide({
    name : "vertical_sliders",
    present : [
    {
      category:"glippets",
      exemplar:"glippet",
      property:"are female",
      bins:exp.bins,
      question:"<strong>This is a practice trial. (1 of 2)</strong><br>"+
      'The robot comes up to you and says: "There is an animal on the island called a glippet."' +
      ' The robot wants to learn about glippets, and asks you:' +
      '"What % of glippets do you think <strong><em>are female</strong></em>?"' +
      '<p>Below are 7 slider bars, corresponding to 7 different <em>percentages</em> of glippets that could be female.' +
      " Since you don't know anything about glippets (except that they are an animal), you will have to base your judgment on the property: <em>are female</em>.</p>"+
      '<p>We filled out two bars for you: First consider "40-60%". This bar represents '+
      "how likely we think it is that about half of glippets are female. We think this is very likely (all the animals we know about are about half female) so we place the slider bar high."+
      ' Next, think about "95-100%". This is the statement that almost all glippets are female. We think this is very unlikely so we place the slider bar low. ' +
      ' Go through in fill in the remaining slider bars with realisitic values.</p>',
      bars: [3,6],
      vals: [0.99, 0.01]
    },
    {
      category:"sapers",
      exemplar:"saper",
      property:"have fins",
      bins:exp.bins,
      question:"<strong>This is a practice trial. (2 of 2)</strong><br>"+
      'The robot comes up to you and says: "There is an animal on the island called a saper."' +
      ' The robot wants to learn about sapers, and asks you:' +
      '"What % of glippets do you think <strong><em>have fins</strong></em>?"' +
      "<p>Again, since we do not know anything about sapers, we need to think about the property: <em>have fins</em>.</p> First, fish have fins, and within a species of fish (like goldfish), 100% of those fish have fins, so we put the rightmost bar high."+
      ' Now, there are plenty of animals, like dogs, who do not have fins. In fact, 0% of dogs have fins. So we also put that bar high.'+
      ' Finally, note that we put the 0% bar a little higher than the 100% bar. This is because we believe it is a litte more likely for a species to not have fins than to have fins.'+
      ' Go through in fill in the remaining slider bars.</p>',
      bars: [0,6],
      vals: [0.99, 0.7]
    }
    // ,
    // {
    //   category:"krivels",
    //   exemplar:"krivel",
    //   property:"lay eggs",
    //   bins:exp.bins
    // }
    ],
    present_handle : function(stim) {
      $(".err").hide();

      $(".warning").hide();
      this.stim = stim;

      $("#vertical_question").html(stim.question);
      $("#vertical_question").css("font-size", 16);
      $("#sliders").empty();
      $("#bin_labels").empty();

      this.n_sliders = stim.bins.length
      $("#sliders").append('<td> \
            <div id="slider_endpoint_labels"> \
              <div class="top">likely</div> \
              <div class="bottom">unlikely</div>\
            </div>\
          </td>')
      $("#bin_labels").append('<td></td>')
      for (var i=0; i<stim.bins.length; i++) {
        $("#sliders").append("<td><div id='vslider" + i + "' class='vertical_slider'>|</div></td>");
        $("#bin_labels").append("<td class='bin_label'>" + stim.bins[i].min + " - " + stim.bins[i].max + "</td>");
      }

      var reminder = "<em>[For each interval, rate how likely you think it is for that % of " + stim.category +
        " to have <strong>" + stim.property + "</strong>.]</em>"

      $("#vertical_reminder").html(reminder)

      this.init_sliders(stim);
      exp.sliderPost = utils.fillArray(-1,7);//[];

      var label = "#vslider"+stim.bars[0];
      $(label+ ' .ui-slider-handle').show();
      $(label).slider({value:stim.vals[0]});
      $(label).css({"background":"#99D6EB"});
      $(label + ' .ui-slider-handle').css({
        "background":"#667D94",
        "border-color": "#001F29"
      })
      $("#vslider"+stim.bars[0]).unbind("mousedown");


      var label = "#vslider"+stim.bars[1];
      $(label+ ' .ui-slider-handle').show();
      $(label).slider({value:stim.vals[1]});
      $(label).css({"background":"#99D6EB"});
      $(label + ' .ui-slider-handle').css({
        "background":"#667D94",
        "border-color": "#001F29"
      })
      $("#vslider"+stim.bars[1]).unbind("mousedown");

      exp.sliderPost[stim.bars[0]]=0
      exp.sliderPost[stim.bars[1]]=0
    },

    button : function() {
      var overTen = function(val){
        return val > 0.2
      }

      if (exp.sliderPost.indexOf(-1)>-1) {
        $(".err").show();
      } else if (_.filter(exp.sliderPost, overTen).length > 0) {
          $(".err").hide();
        $(".warning").show();
      } else {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this); if and only if there is "present" data.
      }
    },

    init_sliders : function(stim) {
      for (var i=0; i<stim.bins.length; i++) {
        utils.make_slider("#vslider" + i, this.make_slider_callback(i), "vertical");
      }
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
      };
    },
    log_responses : function() {
      for (var i=0; i<this.stim.bins.length; i++) {
        exp.data_trials.push({
          "trial_type" : "vertical_slider",
          "question" : this.stim.question,
          "response" : exp.sliderPost[i],
          "min" : this.stim.bins[i].min,
          "max" : this.stim.bins[i].max
        });
      }
    },
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

  exp.trials = [];
  exp.catch_trials = [];

  exp.condition = _.sample(["speaker","listener"])

  exp.nTrials = 30;
  exp.propTypes = ["part","accidental","disease","color","vague"]

var stimArray = _.shuffle(_.flatten(_.map(exp.propTypes,
  function(type){
    return _.map(_.shuffle(stimsForPrior3).slice(0,exp.nTrials/5),
      function(stim){
        var prefix = type=="part" ? "" : stim[type]+" "
        return {property: prefix+stim.part,
                type: type}
    })
  })))

var creatures = _.map(_.shuffle(creatureNames).slice(0,exp.nTrials),
  function(x){return {category: x.category, exemplar: x.exemplar}}
  )

exp.stims =_.map(_.zip(creatures, stimArray),
  function(cp){
    return _.extend(cp[1], cp[0])
  })

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
     "prior_elicitation",
     "instructions",
     "i0",
     "twostep_training",
     "instructions2",
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