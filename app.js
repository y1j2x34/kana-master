// 日语五十音学习工具 - 主应用

// 应用状态
const appState = {
    // 当前设置
    settings: {
        questionType: 'kanaToRomaji', // kanaToRomaji, romajiToKana, listening
        difficulty: 'easy', // easy, medium, hard
        contentType: 'single', // single, word, sentence, mixed
        useKatakana: false // 是否使用片假名
    },
    // 当前题目
    currentQuestion: null,
    // 统计数据
    stats: {
        totalAnswered: 0,
        totalCorrect: 0,
        totalWrong: 0,
        answerTimes: [],
        byType: {},
        byDifficulty: {}
    },
    // 会话数据
    session: {
        startTime: null,
        answered: 0,
        correct: 0,
        questionStartTime: null
    },
    // UI状态
    ui: {
        darkMode: false,
        showingStats: false
    }
};

// 工具函数
const utils = {
    // 从数组中随机选择一个元素
    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    
    // 从数组中随机选择n个不重复的元素
    randomChoices(array, n) {
        const shuffled = [...array].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, n);
    },
    
    // 检查答案是否正确（支持多个可能的答案）
    checkAnswer(userAnswer, correctAnswers) {
        const normalized = userAnswer.toLowerCase().trim();
        return correctAnswers.some(ans => ans.toLowerCase() === normalized);
    },
    
    // 保存到本地存储
    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    },
    
    // 从本地存储读取
    loadFromLocalStorage(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('Failed to load from localStorage:', e);
            return defaultValue;
        }
    },
    
    // 格式化时间（秒转为友好格式）
    formatTime(seconds) {
        if (seconds < 60) {
            return `${seconds.toFixed(1)}s`;
        }
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}m ${secs}s`;
    }
};

// 题目生成器
const questionGenerator = {
    // 生成单字题目
    generateSingleKana() {
        const { difficulty, useKatakana } = appState.settings;
        const kanaData = allKanaData[difficulty];
        const kana = utils.randomChoice(kanaData);
        
        return {
            kana: useKatakana ? kana.katakana : kana.hiragana,
            romaji: kana.romaji,
            meaning: null,
            type: 'single'
        };
    },
    
    // 生成词语题目
    generateWord() {
        const { difficulty, useKatakana } = appState.settings;
        const words = wordBank[difficulty];
        
        if (!words || words.length === 0) {
            return this.generateSingleKana();
        }
        
        const wordData = utils.randomChoice(words);
        
        // 如果使用片假名，尝试转换（简单模拟，实际应用需要更复杂的转换逻辑）
        let displayWord = wordData.word;
        if (useKatakana && Math.random() > 0.5) {
            // 随机使用一些片假名单词
            const katakanaWord = utils.randomChoice(katakanaWords);
            return {
                kana: katakanaWord.word,
                romaji: [katakanaWord.romaji],
                meaning: katakanaWord.meaning,
                type: 'word'
            };
        }
        
        return {
            kana: displayWord,
            romaji: [wordData.romaji],
            meaning: wordData.meaning,
            type: 'word'
        };
    },
    
    // 生成句子题目
    generateSentence() {
        const { difficulty } = appState.settings;
        const sentences = sentenceBank[difficulty];
        
        if (!sentences || sentences.length === 0) {
            return this.generateWord();
        }
        
        const sentenceData = utils.randomChoice(sentences);
        
        return {
            kana: sentenceData.sentence,
            romaji: [sentenceData.romaji],
            meaning: sentenceData.meaning,
            type: 'sentence'
        };
    },
    
    // 生成题目（根据内容类型）
    generate() {
        const { contentType } = appState.settings;
        
        let question;
        
        if (contentType === 'mixed') {
            const types = ['single', 'word', 'sentence'];
            const randomType = utils.randomChoice(types);
            
            switch (randomType) {
                case 'single':
                    question = this.generateSingleKana();
                    break;
                case 'word':
                    question = this.generateWord();
                    break;
                case 'sentence':
                    question = this.generateSentence();
                    break;
            }
        } else {
            switch (contentType) {
                case 'single':
                    question = this.generateSingleKana();
                    break;
                case 'word':
                    question = this.generateWord();
                    break;
                case 'sentence':
                    question = this.generateSentence();
                    break;
            }
        }
        
        return question;
    },
    
    // 为听音辨字生成选项
    generateListeningOptions(correctAnswer) {
        const { difficulty } = appState.settings;
        const kanaData = allKanaData[difficulty];
        
        // 确保正确答案在选项中
        const options = [correctAnswer];
        
        // 添加3个干扰项
        while (options.length < 4) {
            const randomKana = utils.randomChoice(kanaData);
            const kanaChar = appState.settings.useKatakana ? randomKana.katakana : randomKana.hiragana;
            
            if (!options.includes(kanaChar)) {
                options.push(kanaChar);
            }
        }
        
        // 打乱顺序
        return options.sort(() => Math.random() - 0.5);
    }
};

// 音频系统（使用Web Speech API）
const audioSystem = {
    synth: window.speechSynthesis,
    
    // 播放日语音频
    speak(text, callback) {
        if (!this.synth) {
            console.error('Speech synthesis not supported');
            if (callback) callback();
            return;
        }
        
        // 取消之前的语音
        this.synth.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8; // 稍慢的速度
        utterance.pitch = 1.0;
        
        utterance.onend = () => {
            if (callback) callback();
        };
        
        utterance.onerror = (e) => {
            console.error('Speech synthesis error:', e);
            if (callback) callback();
        };
        
        // 等待voices加载
        const voices = this.synth.getVoices();
        if (voices.length === 0) {
            this.synth.onvoiceschanged = () => {
                const japaneseVoices = this.synth.getVoices().filter(voice => voice.lang.startsWith('ja'));
                if (japaneseVoices.length > 0) {
                    utterance.voice = japaneseVoices[0];
                }
                this.synth.speak(utterance);
            };
        } else {
            const japaneseVoices = voices.filter(voice => voice.lang.startsWith('ja'));
            if (japaneseVoices.length > 0) {
                utterance.voice = japaneseVoices[0];
            }
            this.synth.speak(utterance);
        }
    }
};

// 统计系统
const statsSystem = {
    // 记录答题
    recordAnswer(isCorrect, timeSpent) {
        appState.stats.totalAnswered++;
        appState.session.answered++;
        
        if (isCorrect) {
            appState.stats.totalCorrect++;
            appState.session.correct++;
        } else {
            appState.stats.totalWrong++;
        }
        
        // 记录答题时间
        if (timeSpent) {
            appState.stats.answerTimes.push(timeSpent);
        }
        
        // 按题型统计
        const type = appState.settings.questionType;
        if (!appState.stats.byType[type]) {
            appState.stats.byType[type] = { answered: 0, correct: 0 };
        }
        appState.stats.byType[type].answered++;
        if (isCorrect) {
            appState.stats.byType[type].correct++;
        }
        
        // 按难度统计
        const difficulty = appState.settings.difficulty;
        if (!appState.stats.byDifficulty[difficulty]) {
            appState.stats.byDifficulty[difficulty] = { answered: 0, correct: 0 };
        }
        appState.stats.byDifficulty[difficulty].answered++;
        if (isCorrect) {
            appState.stats.byDifficulty[difficulty].correct++;
        }
        
        // 保存到本地存储
        this.saveStats();
    },
    
    // 保存统计数据
    saveStats() {
        utils.saveToLocalStorage('kana-master-stats', appState.stats);
    },
    
    // 加载统计数据
    loadStats() {
        const savedStats = utils.loadFromLocalStorage('kana-master-stats');
        if (savedStats) {
            appState.stats = savedStats;
        }
    },
    
    // 重置统计数据
    resetStats() {
        if (confirm('确定要重置所有统计数据吗？此操作不可恢复。')) {
            appState.stats = {
                totalAnswered: 0,
                totalCorrect: 0,
                totalWrong: 0,
                answerTimes: [],
                byType: {},
                byDifficulty: {}
            };
            this.saveStats();
            uiController.updateStatsPanel();
        }
    },
    
    // 计算总正确率
    getOverallAccuracy() {
        if (appState.stats.totalAnswered === 0) return 0;
        return (appState.stats.totalCorrect / appState.stats.totalAnswered * 100).toFixed(1);
    },
    
    // 计算平均答题速度
    getAverageSpeed() {
        if (appState.stats.answerTimes.length === 0) return 0;
        const sum = appState.stats.answerTimes.reduce((a, b) => a + b, 0);
        return (sum / appState.stats.answerTimes.length).toFixed(1);
    }
};

// UI控制器
const uiController = {
    // 初始化UI
    init() {
        this.setupEventListeners();
        this.loadThemePreference();
        statsSystem.loadStats();
    },
    
    // 设置事件监听器
    setupEventListeners() {
        // 题型选择
        document.querySelectorAll('[data-type]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                appState.settings.questionType = e.currentTarget.dataset.type;
            });
        });
        
        // 难度选择
        document.querySelectorAll('[data-difficulty]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('[data-difficulty]').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                appState.settings.difficulty = e.currentTarget.dataset.difficulty;
            });
        });
        
        // 内容类型选择
        document.querySelectorAll('[data-content]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('[data-content]').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                appState.settings.contentType = e.currentTarget.dataset.content;
            });
        });
        
        // 开始按钮
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startQuiz();
        });
        
        // 提交答案按钮
        document.getElementById('submitBtn').addEventListener('click', () => {
            this.submitAnswer();
        });
        
        // 下一题按钮
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        // 返回设置按钮
        document.getElementById('backBtn').addEventListener('click', () => {
            this.backToSettings();
        });
        
        // 输入框回车提交
        document.getElementById('answerInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !document.getElementById('submitBtn').classList.contains('hidden')) {
                this.submitAnswer();
            }
        });
        
        // 主题切换
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // 统计按钮
        document.getElementById('statsBtn').addEventListener('click', () => {
            this.showStats();
        });
        
        // 关闭统计按钮
        document.getElementById('closeStatsBtn').addEventListener('click', () => {
            this.hideStats();
        });
        
        // 重置统计按钮
        document.getElementById('resetStatsBtn').addEventListener('click', () => {
            statsSystem.resetStats();
        });
        
        // 音频播放按钮
        document.getElementById('audioPlayBtn').addEventListener('click', () => {
            if (appState.currentQuestion) {
                audioSystem.speak(appState.currentQuestion.kana);
            }
        });
    },
    
    // 开始答题
    startQuiz() {
        // 初始化会话数据
        appState.session.startTime = Date.now();
        appState.session.answered = 0;
        appState.session.correct = 0;
        
        // 切换到答题界面
        document.getElementById('settingsPanel').classList.add('hidden');
        document.getElementById('quizPanel').classList.remove('hidden');
        
        // 生成第一题
        this.nextQuestion();
    },
    
    // 生成下一题
    nextQuestion() {
        // 重置UI
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('submitBtn').classList.remove('hidden');
        document.getElementById('nextBtn').classList.add('hidden');
        document.getElementById('answerInput').value = '';
        document.getElementById('answerInput').disabled = false;
        
        // 生成新题目
        appState.currentQuestion = questionGenerator.generate();
        appState.session.questionStartTime = Date.now();
        
        // 显示题目
        this.displayQuestion();
        
        // 更新进度
        this.updateProgress();
        
        // 聚焦输入框
        if (appState.settings.questionType !== 'listening') {
            document.getElementById('answerInput').focus();
        }
    },
    
    // 显示题目
    displayQuestion() {
        const { questionType } = appState.settings;
        const question = appState.currentQuestion;
        
        // 设置题型标识
        const typeLabels = {
            'kanaToRomaji': '假名→发音',
            'romajiToKana': '发音→假名',
            'listening': '听音辨字'
        };
        document.getElementById('questionType').textContent = typeLabels[questionType];
        
        // 根据题型显示内容
        if (questionType === 'kanaToRomaji') {
            // 显示假名，输入罗马音
            document.getElementById('questionText').textContent = question.kana;
            document.getElementById('questionHint').textContent = question.meaning ? `(${question.meaning})` : '';
            document.getElementById('inputArea').classList.remove('hidden');
            document.getElementById('optionsArea').classList.add('hidden');
            document.getElementById('audioPlayBtn').classList.add('hidden');
            document.getElementById('answerInput').placeholder = '请输入罗马音...';
        } else if (questionType === 'romajiToKana') {
            // 显示罗马音，输入假名
            document.getElementById('questionText').textContent = question.romaji[0];
            document.getElementById('questionHint').textContent = question.meaning ? `(${question.meaning})` : '';
            document.getElementById('inputArea').classList.remove('hidden');
            document.getElementById('optionsArea').classList.add('hidden');
            document.getElementById('audioPlayBtn').classList.add('hidden');
            document.getElementById('answerInput').placeholder = '请输入假名...';
        } else if (questionType === 'listening') {
            // 听音辨字
            document.getElementById('questionText').textContent = '🎧';
            document.getElementById('questionHint').textContent = question.meaning ? `(${question.meaning})` : '请听音频并选择正确的假名';
            document.getElementById('inputArea').classList.add('hidden');
            document.getElementById('audioPlayBtn').classList.remove('hidden');
            
            // 生成选项
            const options = questionGenerator.generateListeningOptions(question.kana);
            const optionsArea = document.getElementById('optionsArea');
            optionsArea.classList.remove('hidden');
            optionsArea.innerHTML = '';
            
            options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.textContent = option;
                btn.onclick = () => {
                    // 清除其他选项的选中状态
                    document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                };
                optionsArea.appendChild(btn);
            });
            
            // 自动播放一次
            setTimeout(() => {
                audioSystem.speak(question.kana);
            }, 300);
        }
    },
    
    // 提交答案
    submitAnswer() {
        const { questionType } = appState.settings;
        const question = appState.currentQuestion;
        let userAnswer = '';
        
        // 获取用户答案
        if (questionType === 'listening') {
            const selectedBtn = document.querySelector('.choice-btn.selected');
            if (!selectedBtn) {
                alert('请选择一个选项');
                return;
            }
            userAnswer = selectedBtn.textContent;
        } else {
            userAnswer = document.getElementById('answerInput').value.trim();
            if (!userAnswer) {
                alert('请输入答案');
                return;
            }
        }
        
        // 计算答题时间
        const timeSpent = (Date.now() - appState.session.questionStartTime) / 1000;
        
        // 检查答案
        let isCorrect = false;
        
        if (questionType === 'kanaToRomaji') {
            isCorrect = utils.checkAnswer(userAnswer, question.romaji);
        } else if (questionType === 'romajiToKana') {
            isCorrect = userAnswer === question.kana;
        } else if (questionType === 'listening') {
            isCorrect = userAnswer === question.kana;
        }
        
        // 记录统计
        statsSystem.recordAnswer(isCorrect, timeSpent);
        
        // 显示反馈
        this.showFeedback(isCorrect, question);
        
        // 禁用输入
        document.getElementById('answerInput').disabled = true;
        document.getElementById('submitBtn').classList.add('hidden');
        document.getElementById('nextBtn').classList.remove('hidden');
        
        // 禁用选项按钮
        if (questionType === 'listening') {
            const selectedBtn = document.querySelector('.choice-btn.selected');
            document.querySelectorAll('.choice-btn').forEach(btn => {
                btn.disabled = true;
                btn.style.cursor = 'not-allowed';
                if (btn === selectedBtn) {
                    btn.classList.add(isCorrect ? 'correct' : 'wrong');
                }
                if (!isCorrect && btn.textContent === question.kana) {
                    btn.classList.add('correct');
                }
            });
        }
        
        // 更新进度
        this.updateProgress();
    },
    
    // 显示反馈
    showFeedback(isCorrect, question) {
        const feedback = document.getElementById('feedback');
        const feedbackIcon = document.getElementById('feedbackIcon');
        const feedbackText = document.getElementById('feedbackText');
        const correctAnswer = document.getElementById('correctAnswer');
        
        feedback.classList.remove('hidden');
        
        if (isCorrect) {
            feedbackIcon.textContent = '✓';
            feedbackIcon.className = 'text-6xl mb-2 feedback-correct';
            feedbackText.textContent = '正确！';
            feedbackText.className = 'text-xl font-medium text-green-600 dark:text-green-400';
            correctAnswer.textContent = '';
        } else {
            feedbackIcon.textContent = '✗';
            feedbackIcon.className = 'text-6xl mb-2 feedback-wrong';
            feedbackText.textContent = '错误';
            feedbackText.className = 'text-xl font-medium text-red-600 dark:text-red-400';
            
            // 显示正确答案
            if (appState.settings.questionType === 'kanaToRomaji') {
                correctAnswer.textContent = `正确答案: ${question.romaji.join(' / ')}`;
            } else {
                correctAnswer.textContent = `正确答案: ${question.kana}`;
            }
        }
    },
    
    // 更新进度
    updateProgress() {
        const { answered, correct } = appState.session;
        document.getElementById('answeredCount').textContent = answered;
        
        const accuracy = answered > 0 ? (correct / answered * 100).toFixed(1) : 0;
        document.getElementById('accuracyRate').textContent = `${accuracy}%`;
        
        // 更新进度条（这里使用答题数量作为进度，可以自定义）
        const progress = Math.min(answered * 2, 100); // 每50题达到100%
        document.getElementById('progressBar').style.width = `${progress}%`;
    },
    
    // 返回设置
    backToSettings() {
        document.getElementById('quizPanel').classList.add('hidden');
        document.getElementById('settingsPanel').classList.remove('hidden');
    },
    
    // 显示统计
    showStats() {
        this.updateStatsPanel();
        document.getElementById('statsPanel').classList.remove('hidden');
        document.getElementById('settingsPanel').classList.add('hidden');
        document.getElementById('quizPanel').classList.add('hidden');
    },
    
    // 隐藏统计
    hideStats() {
        document.getElementById('statsPanel').classList.add('hidden');
        document.getElementById('settingsPanel').classList.remove('hidden');
    },
    
    // 更新统计面板
    updateStatsPanel() {
        // 总体统计
        document.getElementById('totalAnswered').textContent = appState.stats.totalAnswered;
        document.getElementById('totalCorrect').textContent = appState.stats.totalCorrect;
        document.getElementById('overallAccuracy').textContent = `${statsSystem.getOverallAccuracy()}%`;
        document.getElementById('avgSpeed').textContent = `${statsSystem.getAverageSpeed()}s`;
        
        // 各题型统计
        const typeStats = document.getElementById('typeStats');
        typeStats.innerHTML = '';
        
        const typeLabels = {
            'kanaToRomaji': '假名→发音',
            'romajiToKana': '发音→假名',
            'listening': '听音辨字'
        };
        
        Object.keys(appState.stats.byType).forEach(type => {
            const stat = appState.stats.byType[type];
            const accuracy = stat.answered > 0 ? (stat.correct / stat.answered * 100).toFixed(1) : 0;
            
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="flex justify-between items-center mb-1">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${typeLabels[type]}</span>
                    <span class="text-sm text-gray-600 dark:text-gray-400">${stat.correct}/${stat.answered} (${accuracy}%)</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-bar-fill" style="width: ${accuracy}%">${accuracy}%</div>
                </div>
            `;
            typeStats.appendChild(div);
        });
        
        // 各难度统计
        const difficultyStats = document.getElementById('difficultyStats');
        difficultyStats.innerHTML = '';
        
        const difficultyLabels = {
            'easy': '简单',
            'medium': '中等',
            'hard': '困难'
        };
        
        Object.keys(appState.stats.byDifficulty).forEach(difficulty => {
            const stat = appState.stats.byDifficulty[difficulty];
            const accuracy = stat.answered > 0 ? (stat.correct / stat.answered * 100).toFixed(1) : 0;
            
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="flex justify-between items-center mb-1">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${difficultyLabels[difficulty]}</span>
                    <span class="text-sm text-gray-600 dark:text-gray-400">${stat.correct}/${stat.answered} (${accuracy}%)</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-bar-fill" style="width: ${accuracy}%">${accuracy}%</div>
                </div>
            `;
            difficultyStats.appendChild(div);
        });
    },
    
    // 切换主题
    toggleTheme() {
        appState.ui.darkMode = !appState.ui.darkMode;
        
        if (appState.ui.darkMode) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            document.getElementById('themeToggle').textContent = '☀️';
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            document.getElementById('themeToggle').textContent = '🌙';
        }
        
        // 保存主题偏好
        utils.saveToLocalStorage('kana-master-theme', appState.ui.darkMode ? 'dark' : 'light');
    },
    
    // 加载主题偏好
    loadThemePreference() {
        const savedTheme = utils.loadFromLocalStorage('kana-master-theme', null);
        
        // 如果没有保存的主题偏好，检测系统偏好并更新图标
        if (savedTheme === null) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            appState.ui.darkMode = prefersDark;
            document.getElementById('themeToggle').textContent = prefersDark ? '☀️' : '🌙';
            // 不添加类，让 @media (prefers-color-scheme: dark) 和 TailwindCSS 自动处理
            return;
        }
        
        // 有保存的主题偏好，应用该主题
        if (savedTheme === 'dark') {
            appState.ui.darkMode = true;
            document.documentElement.classList.add('dark');
            document.getElementById('themeToggle').textContent = '☀️';
        } else {
            appState.ui.darkMode = false;
            document.documentElement.classList.add('light');
            document.getElementById('themeToggle').textContent = '🌙';
        }
    }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    uiController.init();
    console.log('日语五十音学习工具已启动！');
});

