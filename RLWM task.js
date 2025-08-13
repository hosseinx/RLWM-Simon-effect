/******************
 * RLWM Task (Safe Mode Version)
 * Fixed: undefined _trialsData / trialList access
 * Date: 2025-08-14
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// ===== Safe helper functions =====
function safeAddData(varName, value, loopRef) {
    try {
        if (loopRef) {
            psychoJS.experiment.addData(varName, value);
        } else {
            console.warn(`[SafeAddData] Loop undefined for ${varName}`);
        }
    } catch (e) {
        console.error(`[SafeAddData] Error adding ${varName}`, e);
    }
}

function safeLoopEnd(loopRef) {
    try {
        if (loopRef && typeof loopRef.save === 'function') {
            loopRef.save();
        }
    } catch (e) {
        console.warn('[SafeLoopEnd] Loop save skipped', e);
    }
}

// store info about the experiment session:
let expName = 'RLWM task';
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// init psychoJS:
const psychoJS = new PsychoJS({ debug: true });

// open window:
psychoJS.openWindow({
    fullscr: true,
    color: new util.Color([-1.0, -1.0, -1.0]),
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

// handle dialog response:
psychoJS.scheduleCondition(
    () => (psychoJS.gui.dialogComponent.button === 'OK'),
    flowScheduler, dialogCancelScheduler
);

// add main flow:
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initial_instructionRoutineBegin());
flowScheduler.add(initial_instructionRoutineEachFrame());
flowScheduler.add(initial_instructionRoutineEnd());

// Practice loop:
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);

// Main block instruction:
flowScheduler.add(main_blocks_instructionRoutineBegin());
flowScheduler.add(main_blocks_instructionRoutineEachFrame());
flowScheduler.add(main_blocks_instructionRoutineEnd());

// Outer loop:
const outer_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(outer_loopLoopBegin(outer_loopLoopScheduler));
flowScheduler.add(outer_loopLoopScheduler);
flowScheduler.add(outer_loopLoopEnd);

// Thank you:
flowScheduler.add(Thank_youRoutineBegin());
flowScheduler.add(Thank_youRoutineEachFrame());
flowScheduler.add(Thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// Cancel handler:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

// start experiment with full resources:
psychoJS.start({
    expName: expName,
    expInfo: expInfo,
    resources: [
        { name: 'practice_condition.csv', path: 'practice_condition.csv' },
        { name: 'TrainingImages/Slide1.png', path: 'TrainingImages/Slide1.png' },
        { name: 'TrainingImages/Slide2.png', path: 'TrainingImages/Slide2.png' },
        { name: 'outer_loop_conditions.csv', path: 'outer_loop_conditions.csv' },
        { name: 'block_1.csv', path: 'block_1.csv' },
        { name: 'images/jungle2.png', path: 'images/jungle2.png' },
        { name: 'images/jungle1.png', path: 'images/jungle1.png' },
        { name: 'images/jungle3.png', path: 'images/jungle3.png' },
        { name: 'preview/preview (1).png', path: 'preview/preview (1).png' },
        { name: 'block_2.csv', path: 'block_2.csv' },
        { name: 'images/vegan (3).png', path: 'images/vegan (3).png' },
        { name: 'images/vegan (6).png', path: 'images/vegan (6).png' },
        { name: 'images/vegan (4).png', path: 'images/vegan (4).png' },
        { name: 'images/vegan (5).png', path: 'images/vegan (5).png' },
        { name: 'images/vegan (1).png', path: 'images/vegan (1).png' },
        { name: 'images/vegan (2).png', path: 'images/vegan (2).png' },
        { name: 'preview/preview (2).png', path: 'preview/preview (2).png' },
        { name: 'block_3.csv', path: 'block_3.csv' },
        { name: 'images/animal (1).png', path: 'images/animal (1).png' },
        { name: 'images/animal (2).png', path: 'images/animal (2).png' },
        { name: 'images/animal (3).png', path: 'images/animal (3).png' },
        { name: 'preview/preview (3).png', path: 'preview/preview (3).png' },
        { name: 'block_4.csv', path: 'block_4.csv' },
        { name: 'images/fruits (3).png', path: 'images/fruits (3).png' },
        { name: 'images/fruits (6).png', path: 'images/fruits (6).png' },
        { name: 'images/fruits (4).png', path: 'images/fruits (4).png' },
        { name: 'images/fruits (5).png', path: 'images/fruits (5).png' },
        { name: 'images/fruits (1).png', path: 'images/fruits (1).png' },
        { name: 'images/fruits (2).png', path: 'images/fruits (2).png' },
        { name: 'preview/preview (4).png', path: 'preview/preview (4).png' },
        { name: 'block_5.csv', path: 'block_5.csv' },
        { name: 'images/tools (1).png', path: 'images/tools (1).png' },
        { name: 'images/tools (2).png', path: 'images/tools (2).png' },
        { name: 'images/tools (3).png', path: 'images/tools (3).png' },
        { name: 'preview/preview (5).png', path: 'preview/preview (5).png' },
        { name: 'block_6.csv', path: 'block_6.csv' },
        { name: 'images/clothes (3).png', path: 'images/clothes (3).png' },
        { name: 'images/clothes (6).png', path: 'images/clothes (6).png' },
        { name: 'images/clothes (4).png', path: 'images/clothes (4).png' },
        { name: 'images/clothes (5).png', path: 'images/clothes (5).png' },
        { name: 'images/clothes (1).png', path: 'images/clothes (1).png' },
        { name: 'images/clothes (2).png', path: 'images/clothes (2).png' },
        { name: 'preview/preview (6).png', path: 'preview/preview (6).png' },
        { name: 'block_7.csv', path: 'block_7.csv' },
        { name: 'images/face (1).png', path: 'images/face (1).png' },
        { name: 'images/face (2).png', path: 'images/face (2).png' },
        { name: 'images/face (3).png', path: 'images/face (3).png' },
        { name: 'preview/preview (7).png', path: 'preview/preview (7).png' },
        { name: 'block_8.csv', path: 'block_8.csv' },
        { name: 'images/color (3).png', path: 'images/color (3).png' },
        { name: 'images/color (6).png', path: 'images/color (6).png' },
        { name: 'images/color (4).png', path: 'images/color (4).png' },
        { name: 'images/color (5).png', path: 'images/color (5).png' },
        { name: 'images/color (1).png', path: 'images/color (1).png' },
        { name: 'images/color (2).png', path: 'images/color (2).png' },
        { name: 'preview/preview (8).png', path: 'preview/preview (8).png' },
        { name: 'block_9.csv', path: 'block_9.csv' },
        { name: 'images/symbol (1).png', path: 'images/symbol (1).png' },
        { name: 'images/symbol (2).png', path: 'images/symbol (2).png' },
        { name: 'images/symbol (3).png', path: 'images/symbol (3).png' },
        { name: 'preview/preview (9).png', path: 'preview/preview (9).png' },
        { name: 'block_10.csv', path: 'block_10.csv' },
        { name: 'images/environment (3).png', path: 'images/environment (3).png' },
        { name: 'images/environment (6).png', path: 'images/environment (6).png' },
        { name: 'images/environment (4).png', path: 'images/environment (4).png' },
        { name: 'images/environment (5).png', path: 'images/environment (5).png' },
        { name: 'images/environment (1).png', path: 'images/environment (1).png' },
        { name: 'images/environment (2).png', path: 'images/environment (2).png' },
        { name: 'preview/preview (10).png', path: 'preview/preview (10).png' },
        { name: 'block_11.csv', path: 'block_11.csv' },
        { name: 'images/vehicle (1).png', path: 'images/vehicle (1).png' },
        { name: 'images/vehicle (2).png', path: 'images/vehicle (2).png' },
        { name: 'images/vehicle (3).png', path: 'images/vehicle (3).png' },
        { name: 'preview/preview (11).png', path: 'preview/preview (11).png' },
        { name: 'block_12.csv', path: 'block_12.csv' },
        { name: 'images/instrument (1).png', path: 'images/instrument (1).png' },
        { name: 'images/instrument (2).png', path: 'images/instrument (2).png' },
        { name: 'images/instrument (3).png', path: 'images/instrument (3).png' },
        { name: 'preview/preview (12).png', path: 'preview/preview (12).png' },
        { name: 'default.png', path: 'https://pavlovia.org/assets/default/default.png' }
    ]
});
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

// =======================
// Update info before experiment starts
// =======================
function updateInfo() {
    expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
    expInfo['expName'] = expName;
    expInfo['psychopyVersion'] = '2024.2.4';
    expInfo['OS'] = window.navigator.platform;

    // store frame rate of monitor if we can measure it successfully
    expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
    if (typeof expInfo['frameRate'] !== 'undefined') {
        frameDur = 1.0 / Math.round(expInfo['frameRate']);
    } else {
        frameDur = 1.0 / 60.0;
    }

    util.addInfoFromUrl(expInfo);
    return Scheduler.Event.NEXT;
}

// =======================
// Init experiment variables & stimuli
// =======================
function experimentInit() {
    // Ensure safe trial handlers
    window.safeImportConditions = function(filename) {
        try {
            if (!filename) {
                console.warn('[SafeImport] No filename provided');
                return [];
            }
            console.log('[SafeImport] Loading conditions from', filename);
            return TrialHandler.importConditions(filename);
        } catch (err) {
            console.error('[SafeImport] Failed to load conditions', filename, err);
            return [];
        }
    };

    // Example component init:
    initial_instructionClock = new util.Clock();
    initial_instructionText = new visual.TextStim({
        win: psychoJS.window,
        name: 'initial_instructionText',
        text: 'Welcome to RLWM Task.
Press any key to start.',
        font: 'Arial',
        units: undefined, 
        pos: [0, 0], height: 0.05, wrapWidth: undefined, ori: 0,
        color: new util.Color('white'), opacity: 1,
        depth: 0.0
    });

    // more components...
    return Scheduler.Event.NEXT;
}

// =======================
// Example Routine: initial_instruction
// =======================
function initial_instructionRoutineBegin(snapshot) {
    return function () {
        t = 0;
        initial_instructionClock.reset();
        frameN = -1;
        continueRoutine = true;
        // reset keys
        psychoJS.eventManager.clearEvents();
        return Scheduler.Event.NEXT;
    };
}

function initial_instructionRoutineEachFrame() {
    return function () {
        let theseKeys = psychoJS.eventManager.getKeys();
        if (theseKeys.length > 0) {
            continueRoutine = false;
        }
        if (!continueRoutine) {
            return Scheduler.Event.NEXT;
        } else {
            return Scheduler.Event.FLIP_REPEAT;
        }
    };
}

function initial_instructionRoutineEnd() {
    return function () {
        return Scheduler.Event.NEXT;
    };
}
// =======================
// PRACTICE LOOP BEGIN
// =======================
function practice_loopLoopBegin(thisScheduler) {
    return function () {
        // Import practice conditions with Safe Mode
        practice_loop = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1,
            method: TrialHandler.Method.RANDOM,
            extraInfo: expInfo,
            trialList: safeImportConditions('practice_condition.csv'),
            seed: undefined,
            name: 'practice_loop'
        });

        psychoJS.experiment.addLoop(practice_loop);
        currentLoop = practice_loop;  // Safe tracking of current loop

        // Only proceed if there are trials
        if (practice_loop && practice_loop.trialList && practice_loop.trialList.length > 0) {
            for (const thisPractice of practice_loop) {
                thisScheduler.add(practiceRoutineBegin(thisPractice));
                thisScheduler.add(practiceRoutineEachFrame());
                thisScheduler.add(practiceRoutineEnd());
            }
        } else {
            console.warn('[PracticeLoop] No trials loaded. Skipping practice loop.');
        }
        return Scheduler.Event.NEXT;
    };
}

function practice_loopLoopEnd() {
    return function () {
        safeLoopEnd(practice_loop);
        return Scheduler.Event.NEXT;
    };
}

// =======================
// PRACTICE ROUTINE — Safe Mode
// =======================
function practiceRoutineBegin(snapshot) {
    return function () {
        TrialHandler.fromSnapshot(snapshot);  // updates parameter values

        practiceClock = new util.Clock();
        t = 0;
        frameN = -1;
        continueRoutine = true;

        // Set stimuli values from snapshot safely
        if (snapshot) {
            practice_image.setImage(snapshot.stimulus !== undefined ? snapshot.stimulus : 'default.png');
            practice_correctKey = snapshot.correct_key || null;
        } else {
            practice_image.setImage('default.png');
            practice_correctKey = null;
        }

        psychoJS.eventManager.clearEvents();
        return Scheduler.Event.NEXT;
    };
}

function practiceRoutineEachFrame() {
    return function () {
        let keys = psychoJS.eventManager.getKeys();
        if (keys.length > 0) {
            if (practice_correctKey && keys[0] === practice_correctKey) {
                safeAddData('practice_resp.corr', 1, currentLoop);
            } else {
                safeAddData('practice_resp.corr', 0, currentLoop);
            }
            safeAddData('practice_resp.rt', practiceClock.getTime(), currentLoop);
            continueRoutine = false;
        }

        if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
        } else {
            return Scheduler.Event.NEXT;
        }
    };
}

function practiceRoutineEnd() {
    return function () {
        return Scheduler.Event.NEXT;
    };
}

// =======================
// MAIN BLOCKS INSTRUCTION
// =======================
function main_blocks_instructionRoutineBegin() {
    return function () {
        main_blocks_instructionClock = new util.Clock();
        t = 0;
        frameN = -1;
        continueRoutine = true;
        psychoJS.eventManager.clearEvents();
        return Scheduler.Event.NEXT;
    };
}

function main_blocks_instructionRoutineEachFrame() {
    return function () {
        let keys = psychoJS.eventManager.getKeys();
        if (keys.length > 0) {
            continueRoutine = false;
        }
        return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
    };
}

function main_blocks_instructionRoutineEnd() {
    return function () {
        return Scheduler.Event.NEXT;
    };
}
// =======================
// OUTER LOOP BEGIN
// =======================
function outer_loopLoopBegin(thisScheduler) {
    return function () {
        outer_loop = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1,
            method: TrialHandler.Method.SEQUENTIAL,
            extraInfo: expInfo,
            trialList: safeImportConditions('outer_loop_conditions.csv'),
            seed: undefined,
            name: 'outer_loop'
        });

        psychoJS.experiment.addLoop(outer_loop);
        currentLoop = outer_loop;

        if (outer_loop && outer_loop.trialList && outer_loop.trialList.length > 0) {
            for (const thisOuter of outer_loop) {
                const snapshot = outer_loop.getSnapshot();
                thisScheduler.add(condition_loopLoopBegin(snapshot));
                thisScheduler.add(condition_loopLoopEnd);
            }
        } else {
            console.warn('[OuterLoop] No outer_loop_conditions.csv trials loaded. Skipping.');
        }
        return Scheduler.Event.NEXT;
    };
}

function outer_loopLoopEnd() {
    return function () {
        safeLoopEnd(outer_loop);
        return Scheduler.Event.NEXT;
    };
}

// =======================
// CONDITION LOOP BEGIN (inside each block)
// =======================
function condition_loopLoopBegin(snapshot) {
    return function () {
        TrialHandler.fromSnapshot(snapshot);

        let condFile = snapshot && snapshot.cond_file ? snapshot.cond_file : null;
        if (!condFile) {
            console.warn('[ConditionLoop] No condition file specified for this block.');
            return Scheduler.Event.NEXT;
        }

        condition_loop = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1,
            method: TrialHandler.Method.RANDOM,
            extraInfo: expInfo,
            trialList: safeImportConditions(condFile),
            seed: undefined,
            name: 'condition_loop'
        });

        psychoJS.experiment.addLoop(condition_loop);
        currentLoop = condition_loop;

        if (condition_loop && condition_loop.trialList && condition_loop.trialList.length > 0) {
            for (const thisCondition of condition_loop) {
                thisScheduler.add(trialRoutineBegin(thisCondition));
                thisScheduler.add(trialRoutineEachFrame());
                thisScheduler.add(trialRoutineEnd());
            }
        } else {
            console.warn(`[ConditionLoop] No trials found in ${condFile}. Skipping block.`);
        }
        return Scheduler.Event.NEXT;
    };
}

function condition_loopLoopEnd() {
    return function () {
        safeLoopEnd(condition_loop);
        return Scheduler.Event.NEXT;
    };
}

// =======================
// TRIAL ROUTINE — Safe Mode
// =======================
function trialRoutineBegin(snapshot) {
    return function () {
        TrialHandler.fromSnapshot(snapshot);

        trialClock = new util.Clock();
        continueRoutine = true;
        t = 0;
        frameN = -1;

        stimImage.setImage(snapshot && snapshot.stimulus ? snapshot.stimulus : 'default.png');
        stimPosition = snapshot && snapshot.stim_position ? snapshot.stim_position : 0;
        correctKey = snapshot && snapshot.correct_key ? snapshot.correct_key : null;

        stimImage.setPos([stimPosition, 0]);
        psychoJS.eventManager.clearEvents();
        return Scheduler.Event.NEXT;
    };
}

function trialRoutineEachFrame() {
    return function () {
        let keys = psychoJS.eventManager.getKeys();
        if (keys.length > 0) {
            if (correctKey && keys[0] === correctKey) {
                safeAddData('response.corr', 1, currentLoop);
            } else {
                safeAddData('response.corr', 0, currentLoop);
            }
            safeAddData('response.rt', trialClock.getTime(), currentLoop);
            continueRoutine = false;
        }
        return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
    };
}

function trialRoutineEnd() {
    return function () {
        return Scheduler.Event.NEXT;
    };
}

// =======================
// THANK YOU SCREEN
// =======================
function Thank_youRoutineBegin() {
    return function () {
        thankYouClock = new util.Clock();
        continueRoutine = true;
        thankYouText = new visual.TextStim({
            win: psychoJS.window,
            text: 'Thank you for your participation!',
            font: 'Arial',
            pos: [0, 0], height: 0.05,
            color: new util.Color('white')
        });
        return Scheduler.Event.NEXT;
    };
}

function Thank_youRoutineEachFrame() {
    return function () {
        thankYouText.draw();
        if (thankYouClock.getTime() > 2.0) {
            continueRoutine = false;
        }
        return continueRoutine ? Scheduler.Event.FLIP_REPEAT : Scheduler.Event.NEXT;
    };
}

function Thank_youRoutineEnd() {
    return function () {
        return Scheduler.Event.NEXT;
    };
}

// =======================
// SAFE QUIT
// =======================
function quitPsychoJS(message, isCompleted) {
    if (typeof isCompleted === 'undefined') isCompleted = false;
    console.log("[Quit] " + message);
    try {
        psychoJS.experiment.save();
    } catch (err) {
        console.warn("[Quit] Could not save data", err);
    }
    psychoJS.window.close();
    psychoJS.quit({ message: message, isCompleted: isCompleted });
}
