// 关卡类型
const LevelType = {
	// 空
	EMPTY: -1,
    // 入营
    CAMP_LEVEL: 1, 
    // 普通关卡
    GENERAL_LEVEL: 2,
    // 今日目标
    GOAL_LEVEL: 3,
    // 热点关卡
    HOT_LEVEL: 4,
    // 热点目标关卡
    HOT_GOAL_LEVEL: 5,
    // 复习关卡
    REVIEW_LEVEL: 6,
    // 测验关卡
    EXAM_LEVEL: 7,
    // 结营模考关卡
    END_EXAM_LEVEL: 8,	
	// 结营
	END_EXAM: 9,
    // 当前关卡游标
    LEVEL_CURSOR: 10
    
};

// 关卡状态
const LevelStatus = {
    EMPTY: -1,
	LOCK: 1,
	LEARNING: 2,
	FINISH: 3
}


// 关卡详情类型
const LevelDetailType = {
	// 图片类型
	PICTURE: 0,

    // 进度条类型
    PROGRESS: 1,

    // 思维导图类型
    MINDMAP: 2,

    // 文字类型
    TEXT: 3
};

export {
    LevelType,
    LevelStatus,
    LevelDetailType
};