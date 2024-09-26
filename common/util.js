const LevelType = {
	// 空
	EMPTY: -1,
    // 入营
    JOIN_CAMP: 0, 
    // 完成关卡
    FINISH_LEVEL: 1,
    // 今日目标
    TODAY_GOAL: 2,
    // 结营关卡
    FINISH_CAMP: 3,
    // 结营模考
    CAMP_EXAM: 4,
    // 测试关卡
    EXAM_LEVEL: 5,
    // 热点关卡
    HOT_LEVEL: 6,
    // 复习关卡
    REVIEW_LEVEL: 7,
    // 未解锁关卡
    LOCK_LEVEL: 8,
    // 当前关卡游标
    LEVEL_CURSOR: 9,
    // 入营未解锁
    JOIN_CAMP_LOCK: 10, 
	// 学习中
	CAMP_LEARNING: 11 
    
};

export default LevelType;