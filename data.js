// 日语五十音数据库

// 清音 (Seion) - 基础46个假名
const seionData = [
    // あ行
    { hiragana: 'あ', katakana: 'ア', romaji: ['a'], type: 'vowel' },
    { hiragana: 'い', katakana: 'イ', romaji: ['i'], type: 'vowel' },
    { hiragana: 'う', katakana: 'ウ', romaji: ['u'], type: 'vowel' },
    { hiragana: 'え', katakana: 'エ', romaji: ['e'], type: 'vowel' },
    { hiragana: 'お', katakana: 'オ', romaji: ['o'], type: 'vowel' },
    // か行
    { hiragana: 'か', katakana: 'カ', romaji: ['ka'], type: 'consonant' },
    { hiragana: 'き', katakana: 'キ', romaji: ['ki'], type: 'consonant' },
    { hiragana: 'く', katakana: 'ク', romaji: ['ku'], type: 'consonant' },
    { hiragana: 'け', katakana: 'ケ', romaji: ['ke'], type: 'consonant' },
    { hiragana: 'こ', katakana: 'コ', romaji: ['ko'], type: 'consonant' },
    // さ行
    { hiragana: 'さ', katakana: 'サ', romaji: ['sa'], type: 'consonant' },
    { hiragana: 'し', katakana: 'シ', romaji: ['shi', 'si'], type: 'consonant' },
    { hiragana: 'す', katakana: 'ス', romaji: ['su'], type: 'consonant' },
    { hiragana: 'せ', katakana: 'セ', romaji: ['se'], type: 'consonant' },
    { hiragana: 'そ', katakana: 'ソ', romaji: ['so'], type: 'consonant' },
    // た行
    { hiragana: 'た', katakana: 'タ', romaji: ['ta'], type: 'consonant' },
    { hiragana: 'ち', katakana: 'チ', romaji: ['chi', 'ti'], type: 'consonant' },
    { hiragana: 'つ', katakana: 'ツ', romaji: ['tsu', 'tu'], type: 'consonant' },
    { hiragana: 'て', katakana: 'テ', romaji: ['te'], type: 'consonant' },
    { hiragana: 'と', katakana: 'ト', romaji: ['to'], type: 'consonant' },
    // な行
    { hiragana: 'な', katakana: 'ナ', romaji: ['na'], type: 'consonant' },
    { hiragana: 'に', katakana: 'ニ', romaji: ['ni'], type: 'consonant' },
    { hiragana: 'ぬ', katakana: 'ヌ', romaji: ['nu'], type: 'consonant' },
    { hiragana: 'ね', katakana: 'ネ', romaji: ['ne'], type: 'consonant' },
    { hiragana: 'の', katakana: 'ノ', romaji: ['no'], type: 'consonant' },
    // は行
    { hiragana: 'は', katakana: 'ハ', romaji: ['ha'], type: 'consonant' },
    { hiragana: 'ひ', katakana: 'ヒ', romaji: ['hi'], type: 'consonant' },
    { hiragana: 'ふ', katakana: 'フ', romaji: ['fu', 'hu'], type: 'consonant' },
    { hiragana: 'へ', katakana: 'ヘ', romaji: ['he'], type: 'consonant' },
    { hiragana: 'ほ', katakana: 'ホ', romaji: ['ho'], type: 'consonant' },
    // ま行
    { hiragana: 'ま', katakana: 'マ', romaji: ['ma'], type: 'consonant' },
    { hiragana: 'み', katakana: 'ミ', romaji: ['mi'], type: 'consonant' },
    { hiragana: 'む', katakana: 'ム', romaji: ['mu'], type: 'consonant' },
    { hiragana: 'め', katakana: 'メ', romaji: ['me'], type: 'consonant' },
    { hiragana: 'も', katakana: 'モ', romaji: ['mo'], type: 'consonant' },
    // や行
    { hiragana: 'や', katakana: 'ヤ', romaji: ['ya'], type: 'consonant' },
    { hiragana: 'ゆ', katakana: 'ユ', romaji: ['yu'], type: 'consonant' },
    { hiragana: 'よ', katakana: 'ヨ', romaji: ['yo'], type: 'consonant' },
    // ら行
    { hiragana: 'ら', katakana: 'ラ', romaji: ['ra'], type: 'consonant' },
    { hiragana: 'り', katakana: 'リ', romaji: ['ri'], type: 'consonant' },
    { hiragana: 'る', katakana: 'ル', romaji: ['ru'], type: 'consonant' },
    { hiragana: 'れ', katakana: 'レ', romaji: ['re'], type: 'consonant' },
    { hiragana: 'ろ', katakana: 'ロ', romaji: ['ro'], type: 'consonant' },
    // わ行
    { hiragana: 'わ', katakana: 'ワ', romaji: ['wa'], type: 'consonant' },
    { hiragana: 'を', katakana: 'ヲ', romaji: ['wo', 'o'], type: 'consonant' },
    { hiragana: 'ん', katakana: 'ン', romaji: ['n'], type: 'nasal' }
];

// 浊音 (Dakuon) 和 半浊音 (Handakuon) - 25个
const dakuonData = [
    // が行
    { hiragana: 'が', katakana: 'ガ', romaji: ['ga'], type: 'dakuon' },
    { hiragana: 'ぎ', katakana: 'ギ', romaji: ['gi'], type: 'dakuon' },
    { hiragana: 'ぐ', katakana: 'グ', romaji: ['gu'], type: 'dakuon' },
    { hiragana: 'げ', katakana: 'ゲ', romaji: ['ge'], type: 'dakuon' },
    { hiragana: 'ご', katakana: 'ゴ', romaji: ['go'], type: 'dakuon' },
    // ざ行
    { hiragana: 'ざ', katakana: 'ザ', romaji: ['za'], type: 'dakuon' },
    { hiragana: 'じ', katakana: 'ジ', romaji: ['ji', 'zi'], type: 'dakuon' },
    { hiragana: 'ず', katakana: 'ズ', romaji: ['zu'], type: 'dakuon' },
    { hiragana: 'ぜ', katakana: 'ゼ', romaji: ['ze'], type: 'dakuon' },
    { hiragana: 'ぞ', katakana: 'ゾ', romaji: ['zo'], type: 'dakuon' },
    // だ行
    { hiragana: 'だ', katakana: 'ダ', romaji: ['da'], type: 'dakuon' },
    { hiragana: 'ぢ', katakana: 'ヂ', romaji: ['ji', 'di'], type: 'dakuon' },
    { hiragana: 'づ', katakana: 'ヅ', romaji: ['zu', 'du'], type: 'dakuon' },
    { hiragana: 'で', katakana: 'デ', romaji: ['de'], type: 'dakuon' },
    { hiragana: 'ど', katakana: 'ド', romaji: ['do'], type: 'dakuon' },
    // ば行
    { hiragana: 'ば', katakana: 'バ', romaji: ['ba'], type: 'dakuon' },
    { hiragana: 'び', katakana: 'ビ', romaji: ['bi'], type: 'dakuon' },
    { hiragana: 'ぶ', katakana: 'ブ', romaji: ['bu'], type: 'dakuon' },
    { hiragana: 'べ', katakana: 'ベ', romaji: ['be'], type: 'dakuon' },
    { hiragana: 'ぼ', katakana: 'ボ', romaji: ['bo'], type: 'dakuon' },
    // ぱ行
    { hiragana: 'ぱ', katakana: 'パ', romaji: ['pa'], type: 'handakuon' },
    { hiragana: 'ぴ', katakana: 'ピ', romaji: ['pi'], type: 'handakuon' },
    { hiragana: 'ぷ', katakana: 'プ', romaji: ['pu'], type: 'handakuon' },
    { hiragana: 'ぺ', katakana: 'ペ', romaji: ['pe'], type: 'handakuon' },
    { hiragana: 'ぽ', katakana: 'ポ', romaji: ['po'], type: 'handakuon' }
];

// 拗音 (Yoon) - 36个
const yoonData = [
    // きゃ行
    { hiragana: 'きゃ', katakana: 'キャ', romaji: ['kya'], type: 'yoon' },
    { hiragana: 'きゅ', katakana: 'キュ', romaji: ['kyu'], type: 'yoon' },
    { hiragana: 'きょ', katakana: 'キョ', romaji: ['kyo'], type: 'yoon' },
    // しゃ行
    { hiragana: 'しゃ', katakana: 'シャ', romaji: ['sha', 'sya'], type: 'yoon' },
    { hiragana: 'しゅ', katakana: 'シュ', romaji: ['shu', 'syu'], type: 'yoon' },
    { hiragana: 'しょ', katakana: 'ショ', romaji: ['sho', 'syo'], type: 'yoon' },
    // ちゃ行
    { hiragana: 'ちゃ', katakana: 'チャ', romaji: ['cha', 'tya'], type: 'yoon' },
    { hiragana: 'ちゅ', katakana: 'チュ', romaji: ['chu', 'tyu'], type: 'yoon' },
    { hiragana: 'ちょ', katakana: 'チョ', romaji: ['cho', 'tyo'], type: 'yoon' },
    // にゃ行
    { hiragana: 'にゃ', katakana: 'ニャ', romaji: ['nya'], type: 'yoon' },
    { hiragana: 'にゅ', katakana: 'ニュ', romaji: ['nyu'], type: 'yoon' },
    { hiragana: 'にょ', katakana: 'ニョ', romaji: ['nyo'], type: 'yoon' },
    // ひゃ行
    { hiragana: 'ひゃ', katakana: 'ヒャ', romaji: ['hya'], type: 'yoon' },
    { hiragana: 'ひゅ', katakana: 'ヒュ', romaji: ['hyu'], type: 'yoon' },
    { hiragana: 'ひょ', katakana: 'ヒョ', romaji: ['hyo'], type: 'yoon' },
    // みゃ行
    { hiragana: 'みゃ', katakana: 'ミャ', romaji: ['mya'], type: 'yoon' },
    { hiragana: 'みゅ', katakana: 'ミュ', romaji: ['myu'], type: 'yoon' },
    { hiragana: 'みょ', katakana: 'ミョ', romaji: ['myo'], type: 'yoon' },
    // りゃ行
    { hiragana: 'りゃ', katakana: 'リャ', romaji: ['rya'], type: 'yoon' },
    { hiragana: 'りゅ', katakana: 'リュ', romaji: ['ryu'], type: 'yoon' },
    { hiragana: 'りょ', katakana: 'リョ', romaji: ['ryo'], type: 'yoon' },
    // ぎゃ行
    { hiragana: 'ぎゃ', katakana: 'ギャ', romaji: ['gya'], type: 'yoon' },
    { hiragana: 'ぎゅ', katakana: 'ギュ', romaji: ['gyu'], type: 'yoon' },
    { hiragana: 'ぎょ', katakana: 'ギョ', romaji: ['gyo'], type: 'yoon' },
    // じゃ行
    { hiragana: 'じゃ', katakana: 'ジャ', romaji: ['ja', 'jya', 'zya'], type: 'yoon' },
    { hiragana: 'じゅ', katakana: 'ジュ', romaji: ['ju', 'jyu', 'zyu'], type: 'yoon' },
    { hiragana: 'じょ', katakana: 'ジョ', romaji: ['jo', 'jyo', 'zyo'], type: 'yoon' },
    // びゃ行
    { hiragana: 'びゃ', katakana: 'ビャ', romaji: ['bya'], type: 'yoon' },
    { hiragana: 'びゅ', katakana: 'ビュ', romaji: ['byu'], type: 'yoon' },
    { hiragana: 'びょ', katakana: 'ビョ', romaji: ['byo'], type: 'yoon' },
    // ぴゃ行
    { hiragana: 'ぴゃ', katakana: 'ピャ', romaji: ['pya'], type: 'yoon' },
    { hiragana: 'ぴゅ', katakana: 'ピュ', romaji: ['pyu'], type: 'yoon' },
    { hiragana: 'ぴょ', katakana: 'ピョ', romaji: ['pyo'], type: 'yoon' }
];

// 合并所有假名数据
const allKanaData = {
    easy: seionData,
    medium: [...seionData, ...dakuonData],
    hard: [...seionData, ...dakuonData, ...yoonData]
};

// 日语单词库 (按难度分类)
const wordBank = {
    easy: [
        { word: 'あい', romaji: 'ai', meaning: '爱', type: 'noun' },
        { word: 'いえ', romaji: 'ie', meaning: '家', type: 'noun' },
        { word: 'うえ', romaji: 'ue', meaning: '上面', type: 'noun' },
        { word: 'あお', romaji: 'ao', meaning: '蓝色', type: 'noun' },
        { word: 'あか', romaji: 'aka', meaning: '红色', type: 'noun' },
        { word: 'あき', romaji: 'aki', meaning: '秋天', type: 'noun' },
        { word: 'いけ', romaji: 'ike', meaning: '池塘', type: 'noun' },
        { word: 'いぬ', romaji: 'inu', meaning: '狗', type: 'noun' },
        { word: 'うみ', romaji: 'umi', meaning: '海', type: 'noun' },
        { word: 'えき', romaji: 'eki', meaning: '车站', type: 'noun' },
        { word: 'かお', romaji: 'kao', meaning: '脸', type: 'noun' },
        { word: 'かさ', romaji: 'kasa', meaning: '伞', type: 'noun' },
        { word: 'かみ', romaji: 'kami', meaning: '纸', type: 'noun' },
        { word: 'きく', romaji: 'kiku', meaning: '菊花', type: 'noun' },
        { word: 'くち', romaji: 'kuchi', meaning: '嘴', type: 'noun' },
        { word: 'くつ', romaji: 'kutsu', meaning: '鞋', type: 'noun' },
        { word: 'こえ', romaji: 'koe', meaning: '声音', type: 'noun' },
        { word: 'さけ', romaji: 'sake', meaning: '酒', type: 'noun' },
        { word: 'さくら', romaji: 'sakura', meaning: '樱花', type: 'noun' },
        { word: 'しお', romaji: 'shio', meaning: '盐', type: 'noun' },
        { word: 'すし', romaji: 'sushi', meaning: '寿司', type: 'noun' },
        { word: 'そら', romaji: 'sora', meaning: '天空', type: 'noun' },
        { word: 'たこ', romaji: 'tako', meaning: '章鱼', type: 'noun' },
        { word: 'たまご', romaji: 'tamago', meaning: '鸡蛋', type: 'noun' },
        { word: 'ちち', romaji: 'chichi', meaning: '父亲', type: 'noun' },
        { word: 'つき', romaji: 'tsuki', meaning: '月亮', type: 'noun' },
        { word: 'てら', romaji: 'tera', meaning: '寺庙', type: 'noun' },
        { word: 'とり', romaji: 'tori', meaning: '鸟', type: 'noun' },
        { word: 'なつ', romaji: 'natsu', meaning: '夏天', type: 'noun' },
        { word: 'にく', romaji: 'niku', meaning: '肉', type: 'noun' },
        { word: 'ねこ', romaji: 'neko', meaning: '猫', type: 'noun' },
        { word: 'はな', romaji: 'hana', meaning: '花', type: 'noun' },
        { word: 'はる', romaji: 'haru', meaning: '春天', type: 'noun' },
        { word: 'ひと', romaji: 'hito', meaning: '人', type: 'noun' },
        { word: 'ふね', romaji: 'fune', meaning: '船', type: 'noun' },
        { word: 'ほし', romaji: 'hoshi', meaning: '星星', type: 'noun' },
        { word: 'まち', romaji: 'machi', meaning: '城市', type: 'noun' },
        { word: 'みせ', romaji: 'mise', meaning: '商店', type: 'noun' },
        { word: 'むら', romaji: 'mura', meaning: '村庄', type: 'noun' },
        { word: 'もり', romaji: 'mori', meaning: '森林', type: 'noun' },
        { word: 'やま', romaji: 'yama', meaning: '山', type: 'noun' },
        { word: 'ゆき', romaji: 'yuki', meaning: '雪', type: 'noun' },
        { word: 'よる', romaji: 'yoru', meaning: '夜晚', type: 'noun' }
    ],
    medium: [
        { word: 'がっこう', romaji: 'gakkou', meaning: '学校', type: 'noun' },
        { word: 'ぎんこう', romaji: 'ginkou', meaning: '银行', type: 'noun' },
        { word: 'ざっし', romaji: 'zasshi', meaning: '杂志', type: 'noun' },
        { word: 'じてんしゃ', romaji: 'jitensha', meaning: '自行车', type: 'noun' },
        { word: 'ずつう', romaji: 'zutsuu', meaning: '头痛', type: 'noun' },
        { word: 'だいがく', romaji: 'daigaku', meaning: '大学', type: 'noun' },
        { word: 'でんしゃ', romaji: 'densha', meaning: '电车', type: 'noun' },
        { word: 'どうぶつ', romaji: 'doubutsu', meaning: '动物', type: 'noun' },
        { word: 'ばしょ', romaji: 'basho', meaning: '地方', type: 'noun' },
        { word: 'びょういん', romaji: 'byouin', meaning: '医院', type: 'noun' },
        { word: 'べんきょう', romaji: 'benkyou', meaning: '学习', type: 'noun' },
        { word: 'ぼうし', romaji: 'boushi', meaning: '帽子', type: 'noun' },
        { word: 'ぱん', romaji: 'pan', meaning: '面包', type: 'noun' },
        { word: 'ぴんく', romaji: 'pinku', meaning: '粉色', type: 'noun' },
        { word: 'ぷれぜんと', romaji: 'purezento', meaning: '礼物', type: 'noun' },
        { word: 'ぺん', romaji: 'pen', meaning: '笔', type: 'noun' },
        { word: 'ぽけっと', romaji: 'poketto', meaning: '口袋', type: 'noun' },
        { word: 'かぞく', romaji: 'kazoku', meaning: '家族', type: 'noun' },
        { word: 'にほん', romaji: 'nihon', meaning: '日本', type: 'noun' },
        { word: 'せんせい', romaji: 'sensei', meaning: '老师', type: 'noun' }
    ],
    hard: [
        { word: 'きょうしつ', romaji: 'kyoushitsu', meaning: '教室', type: 'noun' },
        { word: 'しゃしん', romaji: 'shashin', meaning: '照片', type: 'noun' },
        { word: 'ちゅうがっこう', romaji: 'chuugakkou', meaning: '中学', type: 'noun' },
        { word: 'りょうり', romaji: 'ryouri', meaning: '料理', type: 'noun' },
        { word: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: '牛奶', type: 'noun' },
        { word: 'じゅぎょう', romaji: 'jugyou', meaning: '上课', type: 'noun' },
        { word: 'びょうき', romaji: 'byouki', meaning: '疾病', type: 'noun' },
        { word: 'ひゃく', romaji: 'hyaku', meaning: '一百', type: 'number' },
        { word: 'みゃく', romaji: 'myaku', meaning: '脉搏', type: 'noun' },
        { word: 'りゃく', romaji: 'ryaku', meaning: '略', type: 'noun' },
        { word: 'きゅうり', romaji: 'kyuuri', meaning: '黄瓜', type: 'noun' },
        { word: 'しょうがっこう', romaji: 'shougakkou', meaning: '小学', type: 'noun' },
        { word: 'ちょうちょう', romaji: 'chouchou', meaning: '蝴蝶', type: 'noun' },
        { word: 'にゃんこ', romaji: 'nyanko', meaning: '小猫', type: 'noun' },
        { word: 'ひょう', romaji: 'hyou', meaning: '豹', type: 'noun' }
    ]
};

// 日语句子库 (日常会话短句)
const sentenceBank = {
    easy: [
        { sentence: 'おはよう', romaji: 'ohayou', meaning: '早上好' },
        { sentence: 'こんにちは', romaji: 'konnichiwa', meaning: '你好' },
        { sentence: 'こんばんは', romaji: 'konbanwa', meaning: '晚上好' },
        { sentence: 'ありがとう', romaji: 'arigatou', meaning: '谢谢' },
        { sentence: 'さようなら', romaji: 'sayounara', meaning: '再见' },
        { sentence: 'すみません', romaji: 'sumimasen', meaning: '对不起/不好意思' },
        { sentence: 'はい', romaji: 'hai', meaning: '是' },
        { sentence: 'いいえ', romaji: 'iie', meaning: '不是' },
        { sentence: 'おやすみ', romaji: 'oyasumi', meaning: '晚安' },
        { sentence: 'いただきます', romaji: 'itadakimasu', meaning: '我开动了' }
    ],
    medium: [
        { sentence: 'げんきですか', romaji: 'genkidesuka', meaning: '你好吗' },
        { sentence: 'おねがいします', romaji: 'onegaishimasu', meaning: '拜托了' },
        { sentence: 'ごめんなさい', romaji: 'gomennasai', meaning: '对不起' },
        { sentence: 'どうぞ', romaji: 'douzo', meaning: '请' },
        { sentence: 'がんばって', romaji: 'ganbatte', meaning: '加油' },
        { sentence: 'だいじょうぶ', romaji: 'daijoubu', meaning: '没关系' },
        { sentence: 'わかりました', romaji: 'wakarimashita', meaning: '我明白了' },
        { sentence: 'どういたしまして', romaji: 'douitashimashite', meaning: '不客气' }
    ],
    hard: [
        { sentence: 'はじめまして', romaji: 'hajimemashite', meaning: '初次见面' },
        { sentence: 'よろしくおねがいします', romaji: 'yoroshikuonegaishimasu', meaning: '请多关照' },
        { sentence: 'おじゃまします', romaji: 'ojamashimasu', meaning: '打扰了' },
        { sentence: 'しつれいします', romaji: 'shitsureishimasu', meaning: '失礼了' },
        { sentence: 'おつかれさまでした', romaji: 'otsukarésamadeshita', meaning: '辛苦了' },
        { sentence: 'いってきます', romaji: 'ittekimasu', meaning: '我出门了' },
        { sentence: 'いってらっしゃい', romaji: 'itterasshai', meaning: '路上小心' },
        { sentence: 'ただいま', romaji: 'tadaima', meaning: '我回来了' },
        { sentence: 'おかえりなさい', romaji: 'okaerinasai', meaning: '欢迎回来' }
    ]
};

// 片假名外来词
const katakanaWords = [
    { word: 'コーヒー', romaji: 'koohii', meaning: '咖啡' },
    { word: 'テレビ', romaji: 'terebi', meaning: '电视' },
    { word: 'カメラ', romaji: 'kamera', meaning: '相机' },
    { word: 'パソコン', romaji: 'pasokon', meaning: '电脑' },
    { word: 'レストラン', romaji: 'resutoran', meaning: '餐厅' },
    { word: 'タクシー', romaji: 'takushii', meaning: '出租车' },
    { word: 'ホテル', romaji: 'hoteru', meaning: '酒店' },
    { word: 'ノート', romaji: 'nooto', meaning: '笔记本' },
    { word: 'ペン', romaji: 'pen', meaning: '笔' },
    { word: 'ケーキ', romaji: 'keeki', meaning: '蛋糕' }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        allKanaData,
        wordBank,
        sentenceBank,
        katakanaWords
    };
}

