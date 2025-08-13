/******************
 * RLWM Task - Safe Mode Edition (Legacy Browsers)
 * اصلاح شده برای جلوگیری از خطاهای Pavlovia مانند:
 * TypeError: Cannot read properties of undefined (reading '_trialsData')
 ******************/

// store info about the experiment session:
let expName = 'RLWM task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// =======================
// SAFE HELPERS
// =======================
function safeAddData(name, value, loopRef) {
    try {
        if (loopRef && typeof loopRef.addData === 'function') {
            loopRef.addData(name, value);
        } else if (psychoJS.experiment && typeof psychoJS.experiment.addData === 'function') {
            psychoJS.experiment.addData(name, value);
        } else {
            console.warn(`[SafeAddData] Could not add data ${name} (no loop or experiment)`);
        }
    } catch (err) {
        console.error(`[SafeAddData] Failed to add data ${name}:`, err);
    }
}

function safeLoopEnd(loopRef) {
    try {
        if (loopRef && typeof loopRef.finished !== 'undefined') {
            loopRef.finished = true;
        }
    } catch (err) {
        console.error("[SafeLoopEnd] Error in setting finished flag:", err);
    }
}

function safeImportConditions(filename) {
    try {
        if (!filename) {
            console.warn('[SafeImportConditions] No filename provided.');
            return [];
        }
        console.log('[SafeImportConditions] Importing', filename);
        return TrialHandler.importConditions(filename);
    } catch (err) {
        console.error('[SafeImportConditions] Error importing', filename, ':', err);
        return [];
    }
}

// init psychoJS:
const psychoJS new PsychoJS({
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

// schedule the experiment dialog:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(
    function()
// =======================
// شروع آزمایش با لیست منابع (resources)
// =======================
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

// =======================
// تابع experimentInit — Safe Mode
// =======================
function experimentInit() {
    console.log('[ExperimentInit] Initializing experiment...');
    // هر نوع مقداردهی اولیه برای Stimuli و Componentها اینجا انجام میشه
    return Scheduler.Event.NEXT;
}

// =======================
// تعریف practice_loop — Safe Mode
// =======================
function practice_loopLoopBegin(thisScheduler) {
    return function () {
        // لود شرایط فایل تمرین
        let practiceTrials = safeImportConditions('practice_condition.csv');

        practice_loop = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1,
            method: TrialHandler.Method.RANDOM,
            extraInfo: expInfo,
            trialList: practiceTrials,
            seed: undefined,
            name: 'practice_loop'
        });

        psychoJS.experiment.addLoop(practice_loop);
        currentLoop = practice_loop;

        if (practiceTrials.length > 0) {
            for (const thisPractice of practice_loop) {
                const snapshot = practice_loop.getSnapshot();
                thisScheduler.add(practice_trialRoutineBegin(snapshot));
                thisScheduler.add(practice_trialRoutineEachFrame());
                thisScheduler.add(practice_trialRoutineEnd());
            }
        } else {
            console.warn('[Practice Loop] No trials found, skipping practice.');
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
// تعریف outer_loop — Safe Mode
// =======================
function outer_loopLoopBegin(thisScheduler) {
    return function () {
        console.log('[Outer Loop] Starting...');
        let outerConditions = safeImportConditions('outer_loop_conditions.csv');

        outer_loop = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1,
            method: TrialHandler.Method.SEQUENTIAL,
            extraInfo: expInfo,
            trialList: outerConditions,
            seed: undefined,
            name: 'outer_loop'
        });

        psychoJS.experiment.addLoop(outer_loop);
        currentLoop = outer_loop;

        if (outerConditions.length > 0 && outer_loop.trialList) {
            for (const thisOuter of outer_loop) {
                const snapshot = outer_loop.getSnapshot();
                thisScheduler.add(condition_loopLoopBegin(snapshot));
                thisScheduler.add(condition_loopLoopScheduler);
                thisScheduler.add(condition_loopLoopEnd);
            }
        } else {
            console.warn('[Outer Loop] No trials loaded, skipping outer_loop.');
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
// تعریف condition_loop — Safe Mode
// =======================
function condition_loopLoopBegin(snapshot) {
    return function () {
        let condFile = snapshot.cond_file || snapshot.condFile || null;

        if (!condFile) {
            console.warn('[Condition Loop] No condition file specified, skipping loop.');
            return Scheduler.Event.NEXT;
        }

        console.log(`[Condition Loop] Loading conditions from: ${condFile}`);
        let condTrials = safeImportConditions(condFile);

        condition_loop = new TrialHandler({
            psychoJS: psychoJS,
            nReps: 1,
            method: TrialHandler.Method.RANDOM,
            extraInfo: expInfo,
            trialList: condTrials,
            seed: undefined,
            name: 'condition_loop'
        });

        psychoJS.experiment.addLoop(condition_loop);
        currentLoop = condition_loop;

        if (condTrials.length > 0) {
            for (const thisCondition of condition_loop) {
                const condSnapshot = condition_loop.getSnapshot();
                condition_loopLoopScheduler.add(trialRoutineBegin(condSnapshot));
                condition_loopLoopScheduler.add(trialRoutineEachFrame());
                condition_loopLoopScheduler.add(trialRoutineEnd());
            }
        } else {
            console.warn('[Condition Loop] Empty trial list for', condFile);
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
// تعریف trialRoutine — Safe Mode
// =======================
function trialRoutineBegin(snapshot) {
    return function () {
        console.log('[Trial Routine] Starting trial...', snapshot);

        // ایمن کردن ذخیره داده — به جای دسترسی مستقیم به _trialsData
        safeAddData('stimulus', snapshot.stimulus || '');
        safeAddData('set_size', snapshot.set_size || '');
        safeAddData('correct_key', snapshot.correct_key || '');

        // تنظیم زمان آغاز stimulus (برای تحلیل RT)
        trialStimOnset = util.MonotonicClock.getDateStr();

        return Scheduler.Event.NEXT;
    };
}

function trialRoutineEachFrame() {
    return function () {
        // اجرای فریم به فریم (نمایش stimulus, گرفتن پاسخ و ...)
        return Scheduler.Event.FLIP_NEXT;
    };
}

function trialRoutineEnd() {
    return function () {
        // ذخیره زمان پایان stimulus
        trialStimOffset = util.MonotonicClock.getDateStr();
        safeAddData('stim_onset', trialStimOnset);
        safeAddData('stim_offset', trialStimOffset);

        console.log('[Trial Routine] Finished trial.');

        return Scheduler.Event.NEXT;
    };
}
// =======================
// Thank_youRoutine — Safe Mode
// =======================
function Thank_youRoutineBegin() {
    return function () {
        console.log('[Thank You] Routine begin.');

        // جلوگیری از دسترسی به داده لوپ‌های ناموجود
        try {
            safeAddData('experiment_end_time', util.MonotonicClock.getDateStr());
        } catch (err) {
            console.warn('[Thank You] Could not log end time:', err);
        }

        // نمایش پیام تشکر
        thank_you_text = new visual.TextStim({
            win: psychoJS.window,
            name: 'thank_you_text',
            text: 'Thank you for your participation!',
            font: 'Arial',
            units: undefined,
            pos: [0, 0],
            height: 0.05,
            wrapWidth: undefined,
            ori: 0,
            languageStyle: 'LTR',
            color: new util.Color('white'),
            opacity: 1,
            depth: 0.0
        });

        frameN = -1;
        continueRoutine = true;
        return Scheduler.Event.NEXT;
    };
}

function Thank_youRoutineEachFrame() {
    return function () {
        thank_you_text.setAutoDraw(true);
        return Scheduler.Event.FLIP_NEXT;
    };
}

function Thank_youRoutineEnd() {
    return function () {
        console.log('[Thank You] Routine end.');
        thank_you_text.setAutoDraw(false);
        return Scheduler.Event.NEXT;
    };
}

// =======================
// Quit — Safe Mode
// =======================
function quitPsychoJS(message, isCompleted) {
    return function () {
        if (typeof message === 'undefined') message = '';
        if (typeof isCompleted === 'undefined') isCompleted = false;

        console.log('[Quit] Exiting experiment. Completed:', isCompleted, 'Message:', message);

        try {
            psychoJS.experiment.save();
        } catch (err) {
            console.warn('[Quit] Failed to save automatically:', err);
        }

        psychoJS.window.close();
        psychoJS.quit({ message: message, isCompleted: isCompleted });
        return Scheduler.Event.QUIT;
    };
}

// =======================
// ادغام نهایی Scheduler
// =======================
flowScheduler.add(Thank_youRoutineBegin());
flowScheduler.add(Thank_youRoutineEachFrame());
flowScheduler.add(Thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS('Thank you for your patience.', true));

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS('Experiment cancelled by user.', false));
