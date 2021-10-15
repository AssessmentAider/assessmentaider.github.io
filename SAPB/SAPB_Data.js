var SAPB_Tables = { // 「性格及行為量表」常模參照
    E0 : { // 國小女生
        RP : [ // 人際關係
            {lower_bound:  0, upper_bound:  37, level: 0},
            {lower_bound: 38, upper_bound:  41, level: 1},
            {lower_bound: 42, upper_bound:  46, level: 2},
            {lower_bound: 47, upper_bound: 999, level: 3}
        ],
        BC : [ // 行為規範
            {lower_bound:  0, upper_bound:  43, level: 0},
            {lower_bound: 44, upper_bound:  48, level: 1},
            {lower_bound: 49, upper_bound:  53, level: 2},
            {lower_bound: 54, upper_bound: 999, level: 3}
        ],
        DM : [ // 憂鬱情緒
            {lower_bound:  0, upper_bound:  43, level: 0},
            {lower_bound: 44, upper_bound:  49, level: 1},
            {lower_bound: 50, upper_bound:  54, level: 2},
            {lower_bound: 55, upper_bound: 999, level: 3}
        ],
        AX : [ // 焦慮情緒
            {lower_bound:  0, upper_bound:  22, level: 0},
            {lower_bound: 23, upper_bound:  25, level: 1},
            {lower_bound: 26, upper_bound:  27, level: 2},
            {lower_bound: 28, upper_bound: 999, level: 3}
        ],
        AH : [ // 偏畸習癖
            {lower_bound:  0, upper_bound:  19, level: 0},
            {lower_bound: 20, upper_bound:  21, level: 1},
            {lower_bound: 22, upper_bound:  23, level: 2},
            {lower_bound: 24, upper_bound: 999, level: 3}
        ]
    },
    E1 : { // 國小男生
        RP : [ // 人際關係
            {lower_bound:  0, upper_bound:  51, level: 0},
            {lower_bound: 52, upper_bound:  58, level: 1},
            {lower_bound: 59, upper_bound:  64, level: 2},
            {lower_bound: 65, upper_bound: 999, level: 3}
        ],
        BC : [ // 行為規範
            {lower_bound:  0, upper_bound:  62, level: 0},
            {lower_bound: 63, upper_bound:  70, level: 1},
            {lower_bound: 71, upper_bound:  77, level: 2},
            {lower_bound: 78, upper_bound: 999, level: 3}
        ],
        DM : [ // 憂鬱情緒
            {lower_bound:  0, upper_bound:  42, level: 0},
            {lower_bound: 43, upper_bound:  48, level: 1},
            {lower_bound: 49, upper_bound:  53, level: 2},
            {lower_bound: 54, upper_bound: 999, level: 3}
        ],
        AX : [ // 焦慮情緒
            {lower_bound:  0, upper_bound:  20, level: 0},
            {lower_bound: 21, upper_bound:  22, level: 1},
            {lower_bound: 23, upper_bound:  24, level: 2},
            {lower_bound: 25, upper_bound: 999, level: 3}
        ],
        AH : [ // 偏畸習癖
            {lower_bound:  0, upper_bound:  20, level: 0},
            {lower_bound: 21, upper_bound:  22, level: 1},
            {lower_bound: 23, upper_bound:  24, level: 2},
            {lower_bound: 25, upper_bound: 999, level: 3}
        ]
    },
    J0 : { // 國中女生
        RP : [ // 人際關係
            {lower_bound:  0, upper_bound:  34, level: 0},
            {lower_bound: 35, upper_bound:  38, level: 1},
            {lower_bound: 39, upper_bound:  42, level: 2},
            {lower_bound: 43, upper_bound: 999, level: 3}
        ],
        BC : [ // 行為規範
            {lower_bound:  0, upper_bound:  47, level: 0},
            {lower_bound: 48, upper_bound:  53, level: 1},
            {lower_bound: 54, upper_bound:  58, level: 2},
            {lower_bound: 59, upper_bound: 999, level: 3}
        ],
        DM : [ // 憂鬱情緒
            {lower_bound:  0, upper_bound:  50, level: 0},
            {lower_bound: 51, upper_bound:  56, level: 1},
            {lower_bound: 57, upper_bound:  62, level: 2},
            {lower_bound: 63, upper_bound: 999, level: 3}
        ],
        AX : [ // 焦慮情緒
            {lower_bound:  0, upper_bound:  25, level: 0},
            {lower_bound: 26, upper_bound:  28, level: 1},
            {lower_bound: 29, upper_bound:  31, level: 2},
            {lower_bound: 32, upper_bound: 999, level: 3}
        ],
        AH : [ // 偏畸習癖
            {lower_bound:  0, upper_bound:  21, level: 0},
            {lower_bound: 22, upper_bound:  23, level: 1},
            {lower_bound: 24, upper_bound:  25, level: 2},
            {lower_bound: 26, upper_bound: 999, level: 3}
        ]
    },
    J1 : { // 國中男生
        RP : [ // 人際關係
            {lower_bound:  0, upper_bound:  46, level: 0},
            {lower_bound: 47, upper_bound:  52, level: 1},
            {lower_bound: 53, upper_bound:  58, level: 2},
            {lower_bound: 59, upper_bound: 999, level: 3}
        ],
        BC : [ // 行為規範
            {lower_bound:  0, upper_bound:  58, level: 0},
            {lower_bound: 59, upper_bound:  64, level: 1},
            {lower_bound: 65, upper_bound:  71, level: 2},
            {lower_bound: 72, upper_bound: 999, level: 3}
        ],
        DM : [ // 憂鬱情緒
            {lower_bound:  0, upper_bound:  53, level: 0},
            {lower_bound: 54, upper_bound:  60, level: 1},
            {lower_bound: 61, upper_bound:  67, level: 2},
            {lower_bound: 68, upper_bound: 999, level: 3}
        ],
        AX : [ // 焦慮情緒
            {lower_bound:  0, upper_bound:  27, level: 0},
            {lower_bound: 28, upper_bound:  29, level: 1},
            {lower_bound: 30, upper_bound:  32, level: 2},
            {lower_bound: 33, upper_bound: 999, level: 3}
        ],
        AH : [ // 偏畸習癖
            {lower_bound:  0, upper_bound:  25, level: 0},
            {lower_bound: 26, upper_bound:  28, level: 1},
            {lower_bound: 29, upper_bound:  30, level: 2},
            {lower_bound: 31, upper_bound: 999, level: 3}
        ]
    }
};

function SAPB_Assessment(object, type, score){
    var objOblect;
    if(object == "E0") objOblect = SAPB_Tables.E0;
    if(object == "E1") objOblect = SAPB_Tables.E1;
    if(object == "J0") objOblect = SAPB_Tables.J0;
    if(object == "J1") objOblect = SAPB_Tables.J1;

    var objType;
    if(type == "RP") objType = objOblect.RP;
    if(type == "BC") objType = objOblect.BC;
    if(type == "DM") objType = objOblect.DM;
    if(type == "AX") objType = objOblect.AX;
    if(type == "AH") objType = objOblect.AH;

    for(var i = 0; i < objType.length; i++){
        if(score >= objType[i].lower_bound && score <= objType[i].upper_bound){
            return objType[i].level;
        }
    }
}