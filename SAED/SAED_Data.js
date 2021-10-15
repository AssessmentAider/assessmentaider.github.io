var SAED_Tables = {
    Sample_5_12 : { // 年齡5歲0個月至11歲11個月
        OC : [ // 年齡5歲0個月至11歲11個月                           OC 整體能力
            {lower_bound:  0, upper_bound:  2, percentile: "< 1", std_score:  1},
            {lower_bound:  3, upper_bound:  5, percentile: "< 1", std_score:  2},
            {lower_bound:  6, upper_bound:  6, percentile: "  1", std_score:  3},
            {lower_bound:  7, upper_bound:  8, percentile: "  2", std_score:  4},
            {lower_bound:  9, upper_bound: 10, percentile: "  5", std_score:  5},
            {lower_bound: 11, upper_bound: 11, percentile: "  9", std_score:  6},
            {lower_bound: 12, upper_bound: 14, percentile: " 16", std_score:  7},
            {lower_bound: 15, upper_bound: 16, percentile: " 25", std_score:  8},
            {lower_bound: 17, upper_bound: 18, percentile: " 37", std_score:  9},
            {lower_bound: 19, upper_bound: 20, percentile: " 50", std_score: 10},
            {lower_bound: 21, upper_bound: 22, percentile: " 63", std_score: 11},
            {lower_bound: 23, upper_bound: 24, percentile: " 75", std_score: 12},
            {lower_bound: 25, upper_bound: 25, percentile: " 84", std_score: 13},
            {lower_bound: 26, upper_bound: 26, percentile: " 91", std_score: 14},
            {lower_bound: 27, upper_bound: 27, percentile: " 95", std_score: 15},
            {lower_bound: 28, upper_bound: 28, percentile: " 98", std_score: 16}
        ],
        IL : [ // 年齡5歲0個月至11歲11個月                         IL 無能力學習
            {lower_bound:  0, upper_bound:  0, percentile: "  9", std_score:  6},
            {lower_bound:  1, upper_bound:  1, percentile: " 25", std_score:  8},
            {lower_bound:  2, upper_bound:  3, percentile: " 37", std_score:  9},
            {lower_bound:  4, upper_bound:  5, percentile: " 50", std_score: 10},
            {lower_bound:  6, upper_bound:  8, percentile: " 63", std_score: 11},
            {lower_bound:  9, upper_bound: 12, percentile: " 75", std_score: 12},
            {lower_bound: 13, upper_bound: 16, percentile: " 84", std_score: 13},
            {lower_bound: 17, upper_bound: 20, percentile: " 91", std_score: 14},
            {lower_bound: 21, upper_bound: 22, percentile: " 95", std_score: 15},
            {lower_bound: 23, upper_bound: 23, percentile: " 98", std_score: 16},
            {lower_bound: 24, upper_bound: 24, percentile: " 99", std_score: 17}
        ],
        RP : [ // 年齡5歲0個月至11歲11個月                       RP 人際關係問題
            {lower_bound:  0, upper_bound:  0, percentile: " 16", std_score:  7},
            {lower_bound:  1, upper_bound:  2, percentile: " 50", std_score: 10},
            {lower_bound:  3, upper_bound:  3, percentile: " 63", std_score: 11},
            {lower_bound:  4, upper_bound:  6, percentile: " 75", std_score: 12},
            {lower_bound:  7, upper_bound:  8, percentile: " 84", std_score: 13},
            {lower_bound:  9, upper_bound: 10, percentile: " 91", std_score: 14},
            {lower_bound: 11, upper_bound: 12, percentile: " 95", std_score: 15},
            {lower_bound: 13, upper_bound: 13, percentile: " 98", std_score: 16},
            {lower_bound: 14, upper_bound: 14, percentile: " 99", std_score: 17},
            {lower_bound: 15, upper_bound: 15, percentile: ">99", std_score: 18},
            {lower_bound: 16, upper_bound: 16, percentile: ">99", std_score: 19}
        ],
        IB : [ // 年齡5歲0個月至11歲11個月                           IB 不當行為
            {lower_bound:  0, upper_bound:  0, percentile: " 16", std_score:  7},
            {lower_bound:  1, upper_bound:  1, percentile: " 37", std_score:  9},
            {lower_bound:  2, upper_bound:  3, percentile: " 50", std_score: 10},
            {lower_bound:  4, upper_bound:  5, percentile: " 63", std_score: 11},
            {lower_bound:  6, upper_bound:  8, percentile: " 75", std_score: 12},
            {lower_bound:  9, upper_bound: 12, percentile: " 84", std_score: 13},
            {lower_bound: 13, upper_bound: 15, percentile: " 91", std_score: 14},
            {lower_bound: 16, upper_bound: 18, percentile: " 95", std_score: 15},
            {lower_bound: 19, upper_bound: 20, percentile: " 98", std_score: 16},
            {lower_bound: 21, upper_bound: 23, percentile: " 99", std_score: 17},
            {lower_bound: 24, upper_bound: 27, percentile: ">99", std_score: 18},
            {lower_bound: 28, upper_bound: 29, percentile: ">99", std_score: 19}
        ],
        UD : [ // 年齡5歲0個月至11歲11個月                       UD 不過樂或沮喪
            {lower_bound:  0, upper_bound:  0, percentile: " 16", std_score:  7},
            {lower_bound:  1, upper_bound:  1, percentile: " 37", std_score:  9},
            {lower_bound:  2, upper_bound:  2, percentile: " 50", std_score: 10},
            {lower_bound:  3, upper_bound:  3, percentile: " 63", std_score: 11},
            {lower_bound:  4, upper_bound:  5, percentile: " 75", std_score: 12},
            {lower_bound:  6, upper_bound:  7, percentile: " 84", std_score: 13},
            {lower_bound:  8, upper_bound:  9, percentile: " 91", std_score: 14},
            {lower_bound: 10, upper_bound: 10, percentile: " 95", std_score: 15},
            {lower_bound: 11, upper_bound: 13, percentile: " 98", std_score: 16},
            {lower_bound: 14, upper_bound: 15, percentile: " 99", std_score: 17},
            {lower_bound: 16, upper_bound: 16, percentile: ">99", std_score: 18},
            {lower_bound: 17, upper_bound: 18, percentile: ">99", std_score: 19}
        ],
        PF : [ // 年齡5歲0個月至11歲11個月                     PF 生理症狀或害怕
            {lower_bound:  0, upper_bound:  0, percentile: " 16", std_score:  7},
            {lower_bound:  1, upper_bound:  1, percentile: " 37", std_score:  9},
            {lower_bound:  2, upper_bound:  2, percentile: " 50", std_score: 10},
            {lower_bound:  3, upper_bound:  3, percentile: " 63", std_score: 11},
            {lower_bound:  4, upper_bound:  4, percentile: " 75", std_score: 12},
            {lower_bound:  5, upper_bound:  6, percentile: " 84", std_score: 13},
            {lower_bound:  7, upper_bound:  8, percentile: " 91", std_score: 14},
            {lower_bound:  9, upper_bound:  9, percentile: " 95", std_score: 15},
            {lower_bound: 10, upper_bound: 12, percentile: " 98", std_score: 16},
            {lower_bound: 13, upper_bound: 16, percentile: " 99", std_score: 17},
            {lower_bound: 17, upper_bound: 20, percentile: ">99", std_score: 18},
            {lower_bound: 21, upper_bound: 22, percentile: ">99", std_score: 19}
        ],
        SM : [ // 年齡5歲0個月至11歲11個月                           SM 社會失調

        ]
    },
    Sample_12_15 : { // 年齡12歲0個月至14歲11個月
        OC : [ // 年齡12歲0個月至14歲11個月                          OC 整體能力
            {lower_bound:  0, upper_bound:  5, percentile: "< 1", std_score:  1},
            {lower_bound:  6, upper_bound:  7, percentile: "  1", std_score:  3},
            {lower_bound:  8, upper_bound:  9, percentile: "  2", std_score:  4},
            {lower_bound: 10, upper_bound: 10, percentile: "  5", std_score:  5},
            {lower_bound: 11, upper_bound: 11, percentile: "  9", std_score:  6},
            {lower_bound: 12, upper_bound: 13, percentile: " 16", std_score:  7},
            {lower_bound: 14, upper_bound: 14, percentile: " 25", std_score:  8},
            {lower_bound: 15, upper_bound: 16, percentile: " 37", std_score:  9},
            {lower_bound: 17, upper_bound: 18, percentile: " 50", std_score: 10},
            {lower_bound: 19, upper_bound: 20, percentile: " 63", std_score: 11},
            {lower_bound: 21, upper_bound: 22, percentile: " 75", std_score: 12},
            {lower_bound: 23, upper_bound: 24, percentile: " 84", std_score: 13},
            {lower_bound: 25, upper_bound: 25, percentile: " 91", std_score: 14},
            {lower_bound: 26, upper_bound: 26, percentile: " 95", std_score: 15},
            {lower_bound: 27, upper_bound: 27, percentile: " 98", std_score: 16},
            {lower_bound: 28, upper_bound: 28, percentile: " 99", std_score: 17}
        ],
        IL : [ // 年齡12歲0個月至14歲11個月                        IL 無能力學習
            {lower_bound:  0, upper_bound:  0, percentile: "  5", std_score:  5},
            {lower_bound:  1, upper_bound:  1, percentile: " 16", std_score:  7},
            {lower_bound:  2, upper_bound:  3, percentile: " 25", std_score:  8},
            {lower_bound:  4, upper_bound:  5, percentile: " 37", std_score:  9},
            {lower_bound:  6, upper_bound:  7, percentile: " 50", std_score: 10},
            {lower_bound:  8, upper_bound: 10, percentile: " 63", std_score: 11},
            {lower_bound: 11, upper_bound: 14, percentile: " 75", std_score: 12},
            {lower_bound: 15, upper_bound: 16, percentile: " 84", std_score: 13},
            {lower_bound: 17, upper_bound: 19, percentile: " 91", std_score: 14},
            {lower_bound: 20, upper_bound: 21, percentile: " 95", std_score: 15},
            {lower_bound: 22, upper_bound: 23, percentile: " 98", std_score: 16},
            {lower_bound: 24, upper_bound: 24, percentile: " 99", std_score: 17}
        ],
        RP : [ // 年齡12歲0個月至14歲11個月                      RP 人際關係問題
            {lower_bound:  0, upper_bound:  0, percentile: " 16", std_score:  7},
            {lower_bound:  1, upper_bound:  1, percentile: " 37", std_score:  9},
            {lower_bound:  2, upper_bound:  2, percentile: " 50", std_score: 10},
            {lower_bound:  3, upper_bound:  4, percentile: " 63", std_score: 11},
            {lower_bound:  5, upper_bound:  5, percentile: " 75", std_score: 12},
            {lower_bound:  6, upper_bound:  7, percentile: " 84", std_score: 13},
            {lower_bound:  8, upper_bound: 10, percentile: " 91", std_score: 14},
            {lower_bound: 11, upper_bound: 11, percentile: " 95", std_score: 15},
            {lower_bound: 12, upper_bound: 13, percentile: " 98", std_score: 16},
            {lower_bound: 14, upper_bound: 15, percentile: " 99", std_score: 17},
            {lower_bound: 16, upper_bound: 16, percentile: ">99", std_score: 18},
            {lower_bound: 17, upper_bound: 17, percentile: ">99", std_score: 19}
        ],
        IB : [ // 年齡12歲0個月至14歲11個月                          IB 不當行為
            {lower_bound:  0, upper_bound:  0, percentile: "  9", std_score:  6},
            {lower_bound:  1, upper_bound:  1, percentile: " 25", std_score:  8},
            {lower_bound:  2, upper_bound:  2, percentile: " 37", std_score:  9},
            {lower_bound:  3, upper_bound:  3, percentile: " 50", std_score: 10},
            {lower_bound:  4, upper_bound:  5, percentile: " 63", std_score: 11},
            {lower_bound:  6, upper_bound:  9, percentile: " 75", std_score: 12},
            {lower_bound: 10, upper_bound: 13, percentile: " 84", std_score: 13},
            {lower_bound: 14, upper_bound: 17, percentile: " 91", std_score: 14},
            {lower_bound: 18, upper_bound: 19, percentile: " 95", std_score: 15},
            {lower_bound: 20, upper_bound: 22, percentile: " 98", std_score: 16},
            {lower_bound: 23, upper_bound: 26, percentile: " 99", std_score: 17},
            {lower_bound: 27, upper_bound: 28, percentile: ">99", std_score: 18},
            {lower_bound: 29, upper_bound: 29, percentile: ">99", std_score: 19}
        ],
        UD : [ // 年齡12歲0個月至14歲11個月                      UD 不過樂或沮喪
            {lower_bound:  0, upper_bound:  0, percentile: "  9", std_score:  6},
            {lower_bound:  1, upper_bound:  1, percentile: " 25", std_score:  8},
            {lower_bound:  2, upper_bound:  2, percentile: " 37", std_score:  9},
            {lower_bound:  3, upper_bound:  3, percentile: " 50", std_score: 10},
            {lower_bound:  4, upper_bound:  4, percentile: " 63", std_score: 11},
            {lower_bound:  5, upper_bound:  6, percentile: " 75", std_score: 12},
            {lower_bound:  7, upper_bound:  9, percentile: " 84", std_score: 13},
            {lower_bound: 10, upper_bound: 10, percentile: " 91", std_score: 14},
            {lower_bound: 11, upper_bound: 13, percentile: " 95", std_score: 15},
            {lower_bound: 14, upper_bound: 15, percentile: " 98", std_score: 16},
            {lower_bound: 19, upper_bound: 19, percentile: " 99", std_score: 17},
            {lower_bound: 20, upper_bound: 20, percentile: ">99", std_score: 18}
        ],
        PF : [ // 年齡12歲0個月至14歲11個月                    PF 生理症狀或害怕
            {lower_bound:  0, upper_bound:  0, percentile: "  9", std_score:  6},
            {lower_bound:  1, upper_bound:  1, percentile: " 25", std_score:  8},
            {lower_bound:  2, upper_bound:  2, percentile: " 37", std_score:  9},
            {lower_bound:  3, upper_bound:  3, percentile: " 50", std_score: 10},
            {lower_bound:  4, upper_bound:  4, percentile: " 63", std_score: 11},
            {lower_bound:  5, upper_bound:  5, percentile: " 75", std_score: 12},
            {lower_bound:  6, upper_bound:  7, percentile: " 84", std_score: 13},
            {lower_bound:  8, upper_bound: 10, percentile: " 91", std_score: 14},
            {lower_bound: 11, upper_bound: 12, percentile: " 95", std_score: 15},
            {lower_bound: 13, upper_bound: 14, percentile: " 98", std_score: 16},
            {lower_bound: 15, upper_bound: 16, percentile: " 99", std_score: 17},
            {lower_bound: 17, upper_bound: 19, percentile: ">99", std_score: 18},
            {lower_bound: 20, upper_bound: 20, percentile: ">99", std_score: 19}
        ],
        SM : [ // 年齡12歲0個月至14歲11個月                          SM 社會失調
            {lower_bound:  0, upper_bound:  0, percentile: " 37", std_score:  9},
            {lower_bound:  1, upper_bound:  1, percentile: " 75", std_score: 12},
            {lower_bound:  2, upper_bound:  2, percentile: " 84", std_score: 13},
            {lower_bound:  3, upper_bound:  4, percentile: " 91", std_score: 14},
            {lower_bound:  5, upper_bound:  7, percentile: " 95", std_score: 15},
            {lower_bound:  8, upper_bound:  9, percentile: " 98", std_score: 16},
            {lower_bound: 10, upper_bound: 15, percentile: " 99", std_score: 17},
            {lower_bound: 17, upper_bound: 17, percentile: ">99", std_score: 18}
        ]
    },
    Sample_15_18 : { // 年齡15歲0個月至18歲11個月
        OC : [ // 年齡15歲0個月至18歲11個月                          OC 整體能力
            {lower_bound:  0, upper_bound:  0, percentile: "< 1", std_score:  1},
            {lower_bound:  1, upper_bound:  4, percentile: "< 1", std_score:  2},
            {lower_bound:  5, upper_bound:  7, percentile: "  1", std_score:  3},
            {lower_bound:  8, upper_bound:  9, percentile: "  2", std_score:  4},
            {lower_bound: 10, upper_bound: 11, percentile: "  5", std_score:  5},
            {lower_bound: 12, upper_bound: 13, percentile: "  9", std_score:  6},
            {lower_bound: 14, upper_bound: 15, percentile: " 16", std_score:  7},
            {lower_bound: 16, upper_bound: 16, percentile: " 25", std_score:  8},
            {lower_bound: 17, upper_bound: 18, percentile: " 37", std_score:  9},
            {lower_bound: 19, upper_bound: 19, percentile: " 50", std_score: 10},
            {lower_bound: 20, upper_bound: 20, percentile: " 63", std_score: 11},
            {lower_bound: 21, upper_bound: 22, percentile: " 75", std_score: 12},
            {lower_bound: 23, upper_bound: 23, percentile: " 84", std_score: 13},
            {lower_bound: 24, upper_bound: 24, percentile: " 91", std_score: 14},
            {lower_bound: 25, upper_bound: 26, percentile: " 95", std_score: 15},
            {lower_bound: 27, upper_bound: 27, percentile: " 98", std_score: 16},
            {lower_bound: 28, upper_bound: 28, percentile: " 99", std_score: 17}
        ],
        IL : [ // 年齡15歲0個月至18歲11個月                        IL 無能力學習
            {lower_bound:  0, upper_bound:  0, percentile: "  5", std_score:  5},
            {lower_bound:  1, upper_bound:  1, percentile: "  9", std_score:  6},
            {lower_bound:  2, upper_bound:  2, percentile: " 16", std_score:  7},
            {lower_bound:  3, upper_bound:  3, percentile: " 25", std_score:  8},
            {lower_bound:  4, upper_bound:  5, percentile: " 37", std_score:  9},
            {lower_bound:  6, upper_bound:  6, percentile: " 50", std_score: 10},
            {lower_bound:  7, upper_bound:  8, percentile: " 63", std_score: 11},
            {lower_bound:  9, upper_bound: 10, percentile: " 75", std_score: 12},
            {lower_bound: 11, upper_bound: 12, percentile: " 84", std_score: 13},
            {lower_bound: 13, upper_bound: 16, percentile: " 91", std_score: 14},
            {lower_bound: 17, upper_bound: 19, percentile: " 95", std_score: 15},
            {lower_bound: 20, upper_bound: 20, percentile: " 98", std_score: 16},
            {lower_bound: 21, upper_bound: 23, percentile: " 99", std_score: 17},
            {lower_bound: 24, upper_bound: 24, percentile: ">99", std_score: 19}
        ],
        RP : [ // 年齡15歲0個月至18歲11個月                      RP 人際關係問題
            {lower_bound:  0, upper_bound:  0, percentile: " 16", std_score:  7},
            {lower_bound:  1, upper_bound:  1, percentile: " 50", std_score: 10},
            {lower_bound:  2, upper_bound:  2, percentile: " 63", std_score: 11},
            {lower_bound:  3, upper_bound:  4, percentile: " 75", std_score: 12},
            {lower_bound:  5, upper_bound:  5, percentile: " 84", std_score: 13},
            {lower_bound:  6, upper_bound:  8, percentile: " 91", std_score: 14},
            {lower_bound:  9, upper_bound: 10, percentile: " 95", std_score: 15},
            {lower_bound: 11, upper_bound: 12, percentile: " 98", std_score: 16},
            {lower_bound: 13, upper_bound: 13, percentile: " 99", std_score: 17},
            {lower_bound: 14, upper_bound: 14, percentile: ">99", std_score: 19}
        ],
        IB : [ // 年齡15歲0個月至18歲11個月                          IB 不當行為
            {lower_bound:  0, upper_bound:  0, percentile: " 16", std_score:  7},
            {lower_bound:  1, upper_bound:  1, percentile: " 37", std_score:  9},
            {lower_bound:  2, upper_bound:  2, percentile: " 50", std_score: 10},
            {lower_bound:  3, upper_bound:  3, percentile: " 63", std_score: 11},
            {lower_bound:  4, upper_bound:  5, percentile: " 75", std_score: 12},
            {lower_bound:  6, upper_bound:  7, percentile: " 84", std_score: 13},
            {lower_bound:  8, upper_bound:  9, percentile: " 91", std_score: 14},
            {lower_bound: 10, upper_bound: 13, percentile: " 95", std_score: 15},
            {lower_bound: 14, upper_bound: 18, percentile: " 98", std_score: 16},
            {lower_bound: 19, upper_bound: 24, percentile: " 99", std_score: 17},
            {lower_bound: 25, upper_bound: 29, percentile: ">99", std_score: 18},
            {lower_bound: 30, upper_bound: 30, percentile: ">99", std_score: 19}
        ],
        UD : [ // 年齡15歲0個月至18歲11個月                      UD 不過樂或沮喪
            {lower_bound:  0, upper_bound:  0, percentile: "  9", std_score:  6},
            {lower_bound:  1, upper_bound:  1, percentile: " 25", std_score:  8},
            {lower_bound:  2, upper_bound:  2, percentile: " 37", std_score:  9},
            {lower_bound:  3, upper_bound:  3, percentile: " 50", std_score: 10},
            {lower_bound:  4, upper_bound:  5, percentile: " 63", std_score: 11},
            {lower_bound:  6, upper_bound:  6, percentile: " 75", std_score: 12},
            {lower_bound:  7, upper_bound:  8, percentile: " 84", std_score: 13},
            {lower_bound:  9, upper_bound: 10, percentile: " 91", std_score: 14},
            {lower_bound: 11, upper_bound: 12, percentile: " 95", std_score: 15},
            {lower_bound: 13, upper_bound: 15, percentile: " 98", std_score: 16},
            {lower_bound: 16, upper_bound: 17, percentile: " 99", std_score: 17},
            {lower_bound: 18, upper_bound: 18, percentile: ">99", std_score: 19}
        ],
        PF : [ // 年齡15歲0個月至18歲11個月                    PF 生理症狀或害怕
            {lower_bound:  0, upper_bound:  0, percentile: "  9", std_score:  6},
            {lower_bound:  1, upper_bound:  1, percentile: " 25", std_score:  8},
            {lower_bound:  2, upper_bound:  2, percentile: " 37", std_score:  9},
            {lower_bound:  3, upper_bound:  3, percentile: " 50", std_score: 10},
            {lower_bound:  4, upper_bound:  4, percentile: " 63", std_score: 11},
            {lower_bound:  5, upper_bound:  5, percentile: " 75", std_score: 12},
            {lower_bound:  6, upper_bound:  7, percentile: " 84", std_score: 13},
            {lower_bound:  8, upper_bound:  8, percentile: " 91", std_score: 14},
            {lower_bound:  9, upper_bound:  9, percentile: " 95", std_score: 15},
            {lower_bound: 10, upper_bound: 10, percentile: " 98", std_score: 16},
            {lower_bound: 11, upper_bound: 11, percentile: " 99", std_score: 17},
            {lower_bound: 12, upper_bound: 16, percentile: ">99", std_score: 18},
            {lower_bound: 17, upper_bound: 17, percentile: ">99", std_score: 19}
        ],
        SM : [ // 年齡15歲0個月至18歲11個月                          SM 社會失調
            {lower_bound:  0, upper_bound:  0, percentile: " 37", std_score:  9},
            {lower_bound:  1, upper_bound:  1, percentile: " 75", std_score: 12},
            {lower_bound:  2, upper_bound:  2, percentile: " 91", std_score: 14},
            {lower_bound:  3, upper_bound:  4, percentile: " 95", std_score: 15},
            {lower_bound:  5, upper_bound:  6, percentile: " 98", std_score: 16},
            {lower_bound:  7, upper_bound:  7, percentile: " 99", std_score: 17},
            {lower_bound:  9, upper_bound:  9, percentile: ">99", std_score: 18},
            {lower_bound: 12, upper_bound: 12, percentile: ">99", std_score: 19}
        ]
    },
    Quotient : [ // 標準分數總和與情緒障礙量表商數對照表
        {score: 86, percentile: ">99", quotient: 149},
        {score: 85, percentile: ">99", quotient: 144},
        {score: 84, percentile: ">99", quotient: 143},
        {score: 83, percentile: ">99", quotient: 143},
        {score: 82, percentile: ">99", quotient: 142},
        {score: 81, percentile: ">99", quotient: 141},
        {score: 80, percentile: ">99", quotient: 139},
        {score: 79, percentile: " 99", quotient: 137},
        {score: 78, percentile: " 99", quotient: 135},
        {score: 77, percentile: " 99", quotient: 133},
        {score: 76, percentile: " 99", quotient: 132},
        {score: 75, percentile: " 98", quotient: 131},
        {score: 74, percentile: " 98", quotient: 130},
        {score: 73, percentile: " 97", quotient: 128},
        {score: 72, percentile: " 97", quotient: 126},
        {score: 71, percentile: " 95", quotient: 124},
        {score: 70, percentile: " 94", quotient: 123},
        {score: 69, percentile: " 93", quotient: 122},
        {score: 68, percentile: " 92", quotient: 121},
        {score: 67, percentile: " 91", quotient: 120},
        {score: 66, percentile: " 90", quotient: 118},
        {score: 65, percentile: " 88", quotient: 117},
        {score: 64, percentile: " 86", quotient: 115},
        {score: 63, percentile: " 83", quotient: 114},
        {score: 62, percentile: " 82", quotient: 113},
        {score: 61, percentile: " 79", quotient: 112},
        {score: 60, percentile: " 77", quotient: 110},
        {score: 59, percentile: " 74", quotient: 109},
        {score: 58, percentile: " 71", quotient: 108},
        {score: 57, percentile: " 69", quotient: 107},
        {score: 56, percentile: " 66", quotient: 106},
        {score: 55, percentile: " 62", quotient: 104},
        {score: 54, percentile: " 59", quotient: 103},
        {score: 53, percentile: " 56", quotient: 102},
        {score: 52, percentile: " 52", quotient: 100},
        {score: 51, percentile: " 49", quotient:  99},
        {score: 50, percentile: " 45", quotient:  97},
        {score: 49, percentile: " 42", quotient:  96},
        {score: 48, percentile: " 39", quotient:  95},
        {score: 47, percentile: " 36", quotient:  94},
        {score: 46, percentile: " 33", quotient:  93},
        {score: 45, percentile: " 30", quotient:  91},
        {score: 44, percentile: " 26", quotient:  90},
        {score: 43, percentile: " 22", quotient:  88},
        {score: 42, percentile: " 19", quotient:  86},
        {score: 41, percentile: " 16", quotient:  84},
        {score: 40, percentile: " 13", quotient:  82},
        {score: 39, percentile: " 10", quotient:  80},
        {score: 38, percentile: "  7", quotient:  77},
        {score: 37, percentile: "  5", quotient:  75},
        {score: 36, percentile: "  4", quotient:  69}
    ]
};

function SAED_NormalScoring(table, type, score){
    var max = 0;
    var min = 100;
    
    var objTable;
    if(table == 1 || table == "1") objTable = SAED_Tables.Sample_5_12;
    if(table == 2 || table == "2") objTable = SAED_Tables.Sample_12_15;
    if(table == 3 || table == "3") objTable = SAED_Tables.Sample_15_18;
    
    var objType;
    if(type == "OC") objType = objTable.OC;
    if(type == "IL") objType = objTable.IL;
    if(type == "RP") objType = objTable.RP;
    if(type == "IB") objType = objTable.IB;
    if(type == "UD") objType = objTable.UD;
    if(type == "PF") objType = objTable.PF;
    if(type == "SM") objType = objTable.SM;
    
    if(objType.length == 0){
        return {
            percentile: 0,
            std_score: 0
        };
    }
    
    for(var i = 0; i < objType.length; i++){
        if(objType[i].upper_bound > max) max = objType[i].upper_bound;
        if(objType[i].lower_bound < min) min = objType[i].lower_bound;
        
        if(score >= objType[i].lower_bound && score <= objType[i].upper_bound){
            return {
                percentile: objType[i].percentile,
                std_score: objType[i].std_score
            };
        }
    }
    
    if(score > max) return SAED_NormalScoring(table, type, max);
    if(score < min) return SAED_NormalScoring(table, type, min);
}

function SAED_QuotientScoring(score){
    var objType = SAED_Tables.Quotient;
    var max = 0;
    var min = 100;

    for(var i = 0; i < objType.length; i++){
        if(objType[i].score > max) max = objType[i].score;
        if(objType[i].score < min) min = objType[i].score;
        
        if(score == objType[i].score){
            return {
                percentile: objType[i].percentile,
                quotient: objType[i].quotient
            };
        }
    }
    
    if(score > max) return SAED_QuotientScoring(max);
    if(score < min) return SAED_QuotientScoring(min);
}
