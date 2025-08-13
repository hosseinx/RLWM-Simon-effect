/****************** 
 * Rlwm Task *
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'RLWM task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initial_instructionRoutineBegin());
flowScheduler.add(initial_instructionRoutineEachFrame());
flowScheduler.add(initial_instructionRoutineEnd());
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);




flowScheduler.add(main_blocks_instructionRoutineBegin());
flowScheduler.add(main_blocks_instructionRoutineEachFrame());
flowScheduler.add(main_blocks_instructionRoutineEnd());
const outer_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(outer_loopLoopBegin(outer_loopLoopScheduler));
flowScheduler.add(outer_loopLoopScheduler);
flowScheduler.add(outer_loopLoopEnd);







flowScheduler.add(Thank_youRoutineBegin());
flowScheduler.add(Thank_youRoutineEachFrame());
flowScheduler.add(Thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice_condition.csv', 'path': 'practice_condition.csv'},
    {'name': 'TrainingImages/Slide1.png', 'path': 'TrainingImages/Slide1.png'},
    {'name': 'TrainingImages/Slide2.png', 'path': 'TrainingImages/Slide2.png'},
    {'name': 'outer_loop_conditions.csv', 'path': 'outer_loop_conditions.csv'},
    {'name': 'block_1.csv', 'path': 'block_1.csv'},
    {'name': 'images/jungle2.png', 'path': 'images/jungle2.png'},
    {'name': 'images/jungle1.png', 'path': 'images/jungle1.png'},
    {'name': 'images/jungle3.png', 'path': 'images/jungle3.png'},
    {'name': 'preview/preview (1).png', 'path': 'preview/preview (1).png'},
    {'name': 'block_2.csv', 'path': 'block_2.csv'},
    {'name': 'images/vegan (3).png', 'path': 'images/vegan (3).png'},
    {'name': 'images/vegan (6).png', 'path': 'images/vegan (6).png'},
    {'name': 'images/vegan (4).png', 'path': 'images/vegan (4).png'},
    {'name': 'images/vegan (5).png', 'path': 'images/vegan (5).png'},
    {'name': 'images/vegan (1).png', 'path': 'images/vegan (1).png'},
    {'name': 'images/vegan (2).png', 'path': 'images/vegan (2).png'},
    {'name': 'preview/preview (2).png', 'path': 'preview/preview (2).png'},
    {'name': 'block_3.csv', 'path': 'block_3.csv'},
    {'name': 'images/animal (1).png', 'path': 'images/animal (1).png'},
    {'name': 'images/animal (2).png', 'path': 'images/animal (2).png'},
    {'name': 'images/animal (3).png', 'path': 'images/animal (3).png'},
    {'name': 'preview/preview (3).png', 'path': 'preview/preview (3).png'},
    {'name': 'block_4.csv', 'path': 'block_4.csv'},
    {'name': 'images/fruits (3).png', 'path': 'images/fruits (3).png'},
    {'name': 'images/fruits (6).png', 'path': 'images/fruits (6).png'},
    {'name': 'images/fruits (4).png', 'path': 'images/fruits (4).png'},
    {'name': 'images/fruits (5).png', 'path': 'images/fruits (5).png'},
    {'name': 'images/fruits (1).png', 'path': 'images/fruits (1).png'},
    {'name': 'images/fruits (2).png', 'path': 'images/fruits (2).png'},
    {'name': 'preview/preview (4).png', 'path': 'preview/preview (4).png'},
    {'name': 'block_5.csv', 'path': 'block_5.csv'},
    {'name': 'images/tools (1).png', 'path': 'images/tools (1).png'},
    {'name': 'images/tools (2).png', 'path': 'images/tools (2).png'},
    {'name': 'images/tools (3).png', 'path': 'images/tools (3).png'},
    {'name': 'preview/preview (5).png', 'path': 'preview/preview (5).png'},
    {'name': 'block_6.csv', 'path': 'block_6.csv'},
    {'name': 'images/clothes (3).png', 'path': 'images/clothes (3).png'},
    {'name': 'images/clothes (6).png', 'path': 'images/clothes (6).png'},
    {'name': 'images/clothes (4).png', 'path': 'images/clothes (4).png'},
    {'name': 'images/clothes (5).png', 'path': 'images/clothes (5).png'},
    {'name': 'images/clothes (1).png', 'path': 'images/clothes (1).png'},
    {'name': 'images/clothes (2).png', 'path': 'images/clothes (2).png'},
    {'name': 'preview/preview (6).png', 'path': 'preview/preview (6).png'},
    {'name': 'block_7.csv', 'path': 'block_7.csv'},
    {'name': 'images/face (1).png', 'path': 'images/face (1).png'},
    {'name': 'images/face (2).png', 'path': 'images/face (2).png'},
    {'name': 'images/face (3).png', 'path': 'images/face (3).png'},
    {'name': 'preview/preview (7).png', 'path': 'preview/preview (7).png'},
    {'name': 'block_8.csv', 'path': 'block_8.csv'},
    {'name': 'images/color (3).png', 'path': 'images/color (3).png'},
    {'name': 'images/color (6).png', 'path': 'images/color (6).png'},
    {'name': 'images/color (4).png', 'path': 'images/color (4).png'},
    {'name': 'images/color (5).png', 'path': 'images/color (5).png'},
    {'name': 'images/color (1).png', 'path': 'images/color (1).png'},
    {'name': 'images/color (2).png', 'path': 'images/color (2).png'},
    {'name': 'preview/preview (8).png', 'path': 'preview/preview (8).png'},
    {'name': 'block_9.csv', 'path': 'block_9.csv'},
    {'name': 'images/symbol (1).png', 'path': 'images/symbol (1).png'},
    {'name': 'images/symbol (2).png', 'path': 'images/symbol (2).png'},
    {'name': 'images/symbol (3).png', 'path': 'images/symbol (3).png'},
    {'name': 'preview/preview (9).png', 'path': 'preview/preview (9).png'},
    {'name': 'block_10.csv', 'path': 'block_10.csv'},
    {'name': 'images/environment (3).png', 'path': 'images/environment (3).png'},
    {'name': 'images/environment (6).png', 'path': 'images/environment (6).png'},
    {'name': 'images/environment (4).png', 'path': 'images/environment (4).png'},
    {'name': 'images/environment (5).png', 'path': 'images/environment (5).png'},
    {'name': 'images/environment (1).png', 'path': 'images/environment (1).png'},
    {'name': 'images/environment (2).png', 'path': 'images/environment (2).png'},
    {'name': 'preview/preview (10).png', 'path': 'preview/preview (10).png'},
    {'name': 'block_11.csv', 'path': 'block_11.csv'},
    {'name': 'images/vehicle (1).png', 'path': 'images/vehicle (1).png'},
    {'name': 'images/vehicle (2).png', 'path': 'images/vehicle (2).png'},
    {'name': 'images/vehicle (3).png', 'path': 'images/vehicle (3).png'},
    {'name': 'preview/preview (11).png', 'path': 'preview/preview (11).png'},
    {'name': 'block_12.csv', 'path': 'block_12.csv'},
    {'name': 'images/instrument (1).png', 'path': 'images/instrument (1).png'},
    {'name': 'images/instrument (2).png', 'path': 'images/instrument (2).png'},
    {'name': 'images/instrument (3).png', 'path': 'images/instrument (3).png'},
    {'name': 'preview/preview (12).png', 'path': 'preview/preview (12).png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var initial_instructionClock;
var introduction_training;
var start_task;
var fix_1Clock;
var fix_point1;
var practice_trialClock;
var practice_stim;
var practice_resp;
var practice_feedbackClock;
var fb_2;
var main_blocks_instructionClock;
var main_instruction;
var start_main_blocks;
var rest_phaseClock;
var pre_block_text;
var preview_images;
var fix_2Clock;
var fix_point2;
var Learning_blockClock;
var Stim;
var response;
var feedbackClock;
var fb;
var Thank_youClock;
var thanks;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "initial_instruction"
  initial_instructionClock = new util.Clock();
  introduction_training = new visual.TextStim({
    win: psychoJS.window,
    name: 'introduction_training',
    text: 'In this experiment, you will see one image on the screen at a time.\nYour task is to find out which key is correct for each image by pressing one of two keys: Z (left) or M (right).\nAt first, you will have to guess, and then you can learn the correct key from the feedback after each response.\nSometimes the image will appear on the same side as the correct key (congruent), and sometimes on the opposite side (incongruent).\nIf your response is correct, you will earn 1 point. If it is incorrect, you will get 0 points.\nTry to respond as quickly and accurately as possible. Responses that are too fast or too slow will be counted as wrong.\nPress the Space key to start the practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix_1"
  fix_1Clock = new util.Clock();
  fix_point1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_point1',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice_trial"
  practice_trialClock = new util.Clock();
  practice_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  practice_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_feedback"
  practice_feedbackClock = new util.Clock();
  fb_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "main_blocks_instruction"
  main_blocks_instructionClock = new util.Clock();
  main_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_instruction',
    text: 'Now the main part of the experiment begins.\nEach block contains new images. The number of images in a block can be 3 images (easier) or 6 images (harder).\nFor each image, you must learn the correct key (Z or M) by trial and error, using the feedback after each response.\nSometimes the image will appear on the same side as the correct key (congruent), and sometimes on the opposite side (incongruent).\nThe correct answers change in each block, so you must learn them again for every block.\nTry to earn as many points as possible, and keep your responses fast and accurate.\nPress the Space key to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_main_blocks = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rest_phase"
  rest_phaseClock = new util.Clock();
  pre_block_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pre_block_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  preview_images = new visual.ImageStim({
    win : psychoJS.window,
    name : 'preview_images', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.1)], 
    draggable: false,
    size : [1.0, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "fix_2"
  fix_2Clock = new util.Clock();
  fix_point2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_point2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Learning_block"
  Learning_blockClock = new util.Clock();
  Stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Thank_you"
  Thank_youClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Thank you for your attention.\nplease wait while we save your results ...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var initial_instructionMaxDurationReached;
var _start_task_allKeys;
var initial_instructionMaxDuration;
var initial_instructionComponents;
function initial_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initial_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    initial_instructionClock.reset();
    routineTimer.reset();
    initial_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    start_task.keys = undefined;
    start_task.rt = undefined;
    _start_task_allKeys = [];
    psychoJS.experiment.addData('initial_instruction.started', globalClock.getTime());
    initial_instructionMaxDuration = null
    // keep track of which components have finished
    initial_instructionComponents = [];
    initial_instructionComponents.push(introduction_training);
    initial_instructionComponents.push(start_task);
    
    for (const thisComponent of initial_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function initial_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initial_instruction' ---
    // get current time
    t = initial_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introduction_training* updates
    if (t >= 0.0 && introduction_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introduction_training.tStart = t;  // (not accounting for frame time here)
      introduction_training.frameNStart = frameN;  // exact frame index
      
      introduction_training.setAutoDraw(true);
    }
    
    
    // *start_task* updates
    if (t >= 0.0 && start_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_task.tStart = t;  // (not accounting for frame time here)
      start_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_task.clearEvents(); });
    }
    
    if (start_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_task.getKeys({keyList: ['space'], waitRelease: false});
      _start_task_allKeys = _start_task_allKeys.concat(theseKeys);
      if (_start_task_allKeys.length > 0) {
        start_task.keys = _start_task_allKeys[_start_task_allKeys.length - 1].name;  // just the last key pressed
        start_task.rt = _start_task_allKeys[_start_task_allKeys.length - 1].rt;
        start_task.duration = _start_task_allKeys[_start_task_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initial_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initial_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initial_instruction' ---
    for (const thisComponent of initial_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('initial_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_task.corr, level);
    }
    psychoJS.experiment.addData('start_task.keys', start_task.keys);
    if (typeof start_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_task.rt', start_task.rt);
        psychoJS.experiment.addData('start_task.duration', start_task.duration);
        routineTimer.reset();
        }
    
    start_task.stop();
    // the Routine "initial_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_loop;
function practice_loopLoopBegin(practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_condition.csv',
      seed: undefined, name: 'practice_loop'
    });
    psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
    currentLoop = practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_loop of practice_loop) {
      snapshot = practice_loop.getSnapshot();
      practice_loopLoopScheduler.add(importConditions(snapshot));
      practice_loopLoopScheduler.add(fix_1RoutineBegin(snapshot));
      practice_loopLoopScheduler.add(fix_1RoutineEachFrame());
      practice_loopLoopScheduler.add(fix_1RoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_trialRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(practice_trialRoutineEachFrame());
      practice_loopLoopScheduler.add(practice_trialRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(practice_feedbackRoutineEachFrame());
      practice_loopLoopScheduler.add(practice_feedbackRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_loopLoopEndIteration(practice_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var outer_loop;
function outer_loopLoopBegin(outer_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    outer_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'outer_loop_conditions.csv',
      seed: undefined, name: 'outer_loop'
    });
    psychoJS.experiment.addLoop(outer_loop); // add the loop to the experiment
    currentLoop = outer_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisOuter_loop of outer_loop) {
      snapshot = outer_loop.getSnapshot();
      outer_loopLoopScheduler.add(importConditions(snapshot));
      outer_loopLoopScheduler.add(rest_phaseRoutineBegin(snapshot));
      outer_loopLoopScheduler.add(rest_phaseRoutineEachFrame());
      outer_loopLoopScheduler.add(rest_phaseRoutineEnd(snapshot));
      const condition_loopLoopScheduler = new Scheduler(psychoJS);
      outer_loopLoopScheduler.add(condition_loopLoopBegin(condition_loopLoopScheduler, snapshot));
      outer_loopLoopScheduler.add(condition_loopLoopScheduler);
      outer_loopLoopScheduler.add(condition_loopLoopEnd);
      outer_loopLoopScheduler.add(outer_loopLoopEndIteration(outer_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var condition_loop;
function condition_loopLoopBegin(condition_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    condition_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: cond_file,
      seed: undefined, name: 'condition_loop'
    });
    psychoJS.experiment.addLoop(condition_loop); // add the loop to the experiment
    currentLoop = condition_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCondition_loop of condition_loop) {
      snapshot = condition_loop.getSnapshot();
      condition_loopLoopScheduler.add(importConditions(snapshot));
      condition_loopLoopScheduler.add(fix_2RoutineBegin(snapshot));
      condition_loopLoopScheduler.add(fix_2RoutineEachFrame());
      condition_loopLoopScheduler.add(fix_2RoutineEnd(snapshot));
      condition_loopLoopScheduler.add(Learning_blockRoutineBegin(snapshot));
      condition_loopLoopScheduler.add(Learning_blockRoutineEachFrame());
      condition_loopLoopScheduler.add(Learning_blockRoutineEnd(snapshot));
      condition_loopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      condition_loopLoopScheduler.add(feedbackRoutineEachFrame());
      condition_loopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      condition_loopLoopScheduler.add(condition_loopLoopEndIteration(condition_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function condition_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(condition_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function condition_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function outer_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(outer_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function outer_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fix_1MaxDurationReached;
var fix_1MaxDuration;
var fix_1Components;
function fix_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fix_1Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fix_1MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fix_1.started', globalClock.getTime());
    fix_1MaxDuration = null
    // keep track of which components have finished
    fix_1Components = [];
    fix_1Components.push(fix_point1);
    
    for (const thisComponent of fix_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fix_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_1' ---
    // get current time
    t = fix_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_point1* updates
    if (t >= 0.0 && fix_point1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_point1.tStart = t;  // (not accounting for frame time here)
      fix_point1.frameNStart = frameN;  // exact frame index
      
      fix_point1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_point1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_point1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_1' ---
    for (const thisComponent of fix_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fix_1.stopped', globalClock.getTime());
    if (fix_1MaxDurationReached) {
        fix_1Clock.add(fix_1MaxDuration);
    } else {
        fix_1Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_trialMaxDurationReached;
var _practice_resp_allKeys;
var practice_trialMaxDuration;
var practice_trialComponents;
function practice_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practice_trialClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    practice_trialMaxDurationReached = false;
    // update component parameters for each repeat
    practice_stim.setImage(prac_trials);
    practice_resp.keys = undefined;
    practice_resp.rt = undefined;
    _practice_resp_allKeys = [];
    psychoJS.experiment.addData('practice_trial.started', globalClock.getTime());
    practice_trialMaxDuration = null
    // keep track of which components have finished
    practice_trialComponents = [];
    practice_trialComponents.push(practice_stim);
    practice_trialComponents.push(practice_resp);
    
    for (const thisComponent of practice_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial' ---
    // get current time
    t = practice_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_stim* updates
    if (t >= 0.0 && practice_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_stim.tStart = t;  // (not accounting for frame time here)
      practice_stim.frameNStart = frameN;  // exact frame index
      
      practice_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_stim.setAutoDraw(false);
    }
    
    
    // *practice_resp* updates
    if (t >= 0.0 && practice_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_resp.tStart = t;  // (not accounting for frame time here)
      practice_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (practice_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_resp.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _practice_resp_allKeys = _practice_resp_allKeys.concat(theseKeys);
      if (_practice_resp_allKeys.length > 0) {
        practice_resp.keys = _practice_resp_allKeys[_practice_resp_allKeys.length - 1].name;  // just the last key pressed
        practice_resp.rt = _practice_resp_allKeys[_practice_resp_allKeys.length - 1].rt;
        practice_resp.duration = _practice_resp_allKeys[_practice_resp_allKeys.length - 1].duration;
        // was this correct?
        if (practice_resp.keys == correct_ans) {
            practice_resp.corr = 1;
        } else {
            practice_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_trial' ---
    for (const thisComponent of practice_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (practice_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct_ans)) {
         practice_resp.corr = 1;  // correct non-response
      } else {
         practice_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practice_resp.corr, level);
    }
    psychoJS.experiment.addData('practice_resp.keys', practice_resp.keys);
    psychoJS.experiment.addData('practice_resp.corr', practice_resp.corr);
    if (typeof practice_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_resp.rt', practice_resp.rt);
        psychoJS.experiment.addData('practice_resp.duration', practice_resp.duration);
        routineTimer.reset();
        }
    
    practice_resp.stop();
    if (practice_trialMaxDurationReached) {
        practice_trialClock.add(practice_trialMaxDuration);
    } else {
        practice_trialClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_feedbackMaxDurationReached;
var fb_text;
var fb_col;
var practice_feedbackMaxDuration;
var practice_feedbackComponents;
function practice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practice_feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    practice_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fb_code_2
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (practice_resp.corr) {
            fb_text = "+1";
            fb_col = "green";
        } else {
            fb_text = "0";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb_2.setColor(new util.Color(fb_col));
    fb_2.setText(fb_text);
    psychoJS.experiment.addData('practice_feedback.started', globalClock.getTime());
    practice_feedbackMaxDuration = null
    // keep track of which components have finished
    practice_feedbackComponents = [];
    practice_feedbackComponents.push(fb_2);
    
    for (const thisComponent of practice_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_feedback' ---
    // get current time
    t = practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_2* updates
    if (t >= 0.0 && fb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_2.tStart = t;  // (not accounting for frame time here)
      fb_2.frameNStart = frameN;  // exact frame index
      
      fb_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_feedback' ---
    for (const thisComponent of practice_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_feedback.stopped', globalClock.getTime());
    if (practice_feedbackMaxDurationReached) {
        practice_feedbackClock.add(practice_feedbackMaxDuration);
    } else {
        practice_feedbackClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_blocks_instructionMaxDurationReached;
var _start_main_blocks_allKeys;
var main_blocks_instructionMaxDuration;
var main_blocks_instructionComponents;
function main_blocks_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_blocks_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    main_blocks_instructionClock.reset();
    routineTimer.reset();
    main_blocks_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    start_main_blocks.keys = undefined;
    start_main_blocks.rt = undefined;
    _start_main_blocks_allKeys = [];
    psychoJS.experiment.addData('main_blocks_instruction.started', globalClock.getTime());
    main_blocks_instructionMaxDuration = null
    // keep track of which components have finished
    main_blocks_instructionComponents = [];
    main_blocks_instructionComponents.push(main_instruction);
    main_blocks_instructionComponents.push(start_main_blocks);
    
    for (const thisComponent of main_blocks_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_blocks_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_blocks_instruction' ---
    // get current time
    t = main_blocks_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_instruction* updates
    if (t >= 0.0 && main_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_instruction.tStart = t;  // (not accounting for frame time here)
      main_instruction.frameNStart = frameN;  // exact frame index
      
      main_instruction.setAutoDraw(true);
    }
    
    
    // *start_main_blocks* updates
    if (t >= 0.0 && start_main_blocks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_main_blocks.tStart = t;  // (not accounting for frame time here)
      start_main_blocks.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_main_blocks.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_main_blocks.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_main_blocks.clearEvents(); });
    }
    
    if (start_main_blocks.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_main_blocks.getKeys({keyList: ['space'], waitRelease: false});
      _start_main_blocks_allKeys = _start_main_blocks_allKeys.concat(theseKeys);
      if (_start_main_blocks_allKeys.length > 0) {
        start_main_blocks.keys = _start_main_blocks_allKeys[_start_main_blocks_allKeys.length - 1].name;  // just the last key pressed
        start_main_blocks.rt = _start_main_blocks_allKeys[_start_main_blocks_allKeys.length - 1].rt;
        start_main_blocks.duration = _start_main_blocks_allKeys[_start_main_blocks_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_blocks_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_blocks_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_blocks_instruction' ---
    for (const thisComponent of main_blocks_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_blocks_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_main_blocks.corr, level);
    }
    psychoJS.experiment.addData('start_main_blocks.keys', start_main_blocks.keys);
    if (typeof start_main_blocks.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_main_blocks.rt', start_main_blocks.rt);
        psychoJS.experiment.addData('start_main_blocks.duration', start_main_blocks.duration);
        routineTimer.reset();
        }
    
    start_main_blocks.stop();
    // the Routine "main_blocks_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rest_phaseMaxDurationReached;
var display_text;
var rest_phaseMaxDuration;
var rest_phaseComponents;
function rest_phaseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest_phase' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    rest_phaseClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    rest_phaseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from rest_text_code
    display_text = `Block ${block_num}
    Get ready for next stage`
    ;
    
    pre_block_text.setText(display_text);
    preview_images.setImage(preview_stim);
    psychoJS.experiment.addData('rest_phase.started', globalClock.getTime());
    rest_phaseMaxDuration = null
    // keep track of which components have finished
    rest_phaseComponents = [];
    rest_phaseComponents.push(pre_block_text);
    rest_phaseComponents.push(preview_images);
    
    for (const thisComponent of rest_phaseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rest_phaseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest_phase' ---
    // get current time
    t = rest_phaseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pre_block_text* updates
    if (t >= 0.0 && pre_block_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pre_block_text.tStart = t;  // (not accounting for frame time here)
      pre_block_text.frameNStart = frameN;  // exact frame index
      
      pre_block_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pre_block_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pre_block_text.setAutoDraw(false);
    }
    
    
    // *preview_images* updates
    if (t >= 0.0 && preview_images.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preview_images.tStart = t;  // (not accounting for frame time here)
      preview_images.frameNStart = frameN;  // exact frame index
      
      preview_images.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (preview_images.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      preview_images.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rest_phaseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rest_phaseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest_phase' ---
    for (const thisComponent of rest_phaseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest_phase.stopped', globalClock.getTime());
    if (rest_phaseMaxDurationReached) {
        rest_phaseClock.add(rest_phaseMaxDuration);
    } else {
        rest_phaseClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix_2MaxDurationReached;
var fix_2MaxDuration;
var fix_2Components;
function fix_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fix_2Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fix_2MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fix_2.started', globalClock.getTime());
    fix_2MaxDuration = null
    // keep track of which components have finished
    fix_2Components = [];
    fix_2Components.push(fix_point2);
    
    for (const thisComponent of fix_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fix_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_2' ---
    // get current time
    t = fix_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_point2* updates
    if (t >= 0.0 && fix_point2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_point2.tStart = t;  // (not accounting for frame time here)
      fix_point2.frameNStart = frameN;  // exact frame index
      
      fix_point2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_point2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_point2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_2' ---
    for (const thisComponent of fix_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fix_2.stopped', globalClock.getTime());
    if (fix_2MaxDurationReached) {
        fix_2Clock.add(fix_2MaxDuration);
    } else {
        fix_2Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Learning_blockMaxDurationReached;
var _response_allKeys;
var Learning_blockMaxDuration;
var Learning_blockComponents;
function Learning_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Learning_block' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Learning_blockClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    Learning_blockMaxDurationReached = false;
    // update component parameters for each repeat
    Stim.setPos([stim_position, 0]);
    Stim.setImage(stimulus);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('Learning_block.started', globalClock.getTime());
    Learning_blockMaxDuration = null
    // keep track of which components have finished
    Learning_blockComponents = [];
    Learning_blockComponents.push(Stim);
    Learning_blockComponents.push(response);
    
    for (const thisComponent of Learning_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Learning_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Learning_block' ---
    // get current time
    t = Learning_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Stim* updates
    if (t >= 0.0 && Stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim.tStart = t;  // (not accounting for frame time here)
      Stim.frameNStart = frameN;  // exact frame index
      
      Stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stim.setAutoDraw(false);
    }
    
    
    // *response* updates
    if (t >= 0.0 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response.status = PsychoJS.Status.FINISHED;
        }
      
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['m', 'z'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
        // was this correct?
        if (response.keys == correct_key) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Learning_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Learning_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Learning_block' ---
    for (const thisComponent of Learning_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Learning_block.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        routineTimer.reset();
        }
    
    response.stop();
    if (Learning_blockMaxDurationReached) {
        Learning_blockClock.add(Learning_blockMaxDuration);
    } else {
        Learning_blockClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fb_code
    fb_text = "too slow";
    fb_col = "blue";
    try {
        if (response.corr) {
            fb_text = "+1";
            fb_col = "green";
        } else {
            fb_text = "0";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb.setColor(new util.Color(fb_col));
    fb.setText(fb_text);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(fb);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb* updates
    if (t >= 0.0 && fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb.tStart = t;  // (not accounting for frame time here)
      fb.frameNStart = frameN;  // exact frame index
      
      fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Thank_youMaxDurationReached;
var Thank_youMaxDuration;
var Thank_youComponents;
function Thank_youRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thank_you' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Thank_youClock.reset(routineTimer.getTime());
    routineTimer.add(30.000000);
    Thank_youMaxDurationReached = false;
    // update component parameters for each repeat
    // disable downloading results to browser
    psychoJS._saveResults = 0;
    //generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    //extract data object from experiment
    let data0bj = psychoJS._experiement._trialData;
    //convert data object to csv
    let data = [Object.keys(dataObj [0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    // send data to OSF via DataPipe
    console.log('Saving data ...');
    fetch('https://pip,jspsych.org/api/data' , {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json' ,
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'GG4mvlYzf1jW', // * Update with your DATAPIPE EXPERIMENT ID *
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // log response and force experiment end
        console.log(data);
        quitPsychoJS();
    }) 
    psychoJS.experiment.addData('Thank_you.started', globalClock.getTime());
    Thank_youMaxDuration = null
    // keep track of which components have finished
    Thank_youComponents = [];
    Thank_youComponents.push(thanks);
    
    for (const thisComponent of Thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Thank_youRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thank_you' ---
    // get current time
    t = Thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Thank_youRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thank_you' ---
    for (const thisComponent of Thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Thank_you.stopped', globalClock.getTime());
    if (Thank_youMaxDurationReached) {
        Thank_youClock.add(Thank_youMaxDuration);
    } else {
        Thank_youClock.add(30.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
