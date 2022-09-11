const DATA_MOCKED = true;

const API_PATH_MOCKED = {
    USER: '/data/user.json',
    ACTIVITY: '/data/activity.json',
    AVERAGE_SESSIONS: '/data/averageSessions.json',
    PERFORMANCE: '/data/performance.json'
};

const API_PATH_BASE = 'http://localhost:3000/user/';

const API_PATHS = {
    USER: '',
    ACTIVITY: '/activity',
    AVERAGE_SESSIONS: '/average-sessions',
    PERFORMANCE: '/performance'
};

const LANG = 'FR';

const TRANSLATION = {
    cardio: { FR: 'Cardio' },
    energy: { FR: 'Energie' },
    endurance: { FR: 'Endurance' },
    strength: { FR: 'Force' },
    speed: { FR: 'Vitesse' },
    intensity: { FR: 'Intensité' },
    days: {
        1: { FR: 'L' },
        2: { FR: 'M' },
        3: { FR: 'M' },
        4: { FR: 'J' },
        5: { FR: 'V' },
        6: { FR: 'S' },
        7: { FR: 'D' }
    },
    keyData: {
        calorieCount: { FR: 'Calories' },
        proteinCount: { FR: 'Protéines' },
        carbohydrateCount: { FR: 'Glucides' },
        lipidCount: { FR: 'Lipides' }
    }
};

export {
    DATA_MOCKED,
    API_PATH_BASE,
    API_PATH_MOCKED,
    API_PATHS,
    TRANSLATION,
    LANG
};
