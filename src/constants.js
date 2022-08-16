const API_PATH = {
    USER: '/data/user.json',
    ACTIVITY: '/data/activity.json',
    AVERAGE_SESSIONS: '/data/averageSessions.json',
    PERFORMANCE: '/data/performance.json'
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

export { API_PATH, TRANSLATION, LANG };
