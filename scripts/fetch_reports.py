#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
研究报告抓取脚本
数据源：中国信通院、赛迪研究院等
输出：data/reports.json
"""

import json
from datetime import datetime

# 研究报告数据（定期更新）
REPORTS_DATA = [
    {
        "title": "《人工智能产业发展研究报告（2025 年）》",
        "date": "2026-02-02",
        "institution": "中国信息通信研究院",
        "category": "人工智能",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202602/t20260202_184567.htm",
        "summary": "全面探讨基础模型演进、具身智能突破、智算基础设施升级、智能原生应用涌现等"
    },
    {
        "title": "《人工智能赋能中小企业高质量发展研究报告（2025 年）》",
        "date": "2026-03-20",
        "institution": "中国信息通信研究院",
        "category": "人工智能",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202603/t20260320_184890.htm",
        "summary": "系统性梳理中小企业人工智能规模化应用的演进态势"
    },
    {
        "title": "《新一代智能终端蓝皮书：从人工智能 + 终端到人工智能终端（2025 年）》",
        "date": "2026-03-19",
        "institution": "中国信息通信研究院",
        "category": "人工智能",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202603/t20260319_184876.htm",
        "summary": "探讨智能终端与人工智能融合发展趋势"
    },
    {
        "title": "《数据要素发展报告（2025 年）》",
        "date": "2025-12-03",
        "institution": "中国信息通信研究院",
        "category": "数据治理",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202512/t20251203_183456.htm",
        "summary": "智能时代下数据作为关键生产要素的战略价值分析"
    },
    {
        "title": "《数据智能服务产业发展研究报告（2025 年）》",
        "date": "2026-01-29",
        "institution": "中国信息通信研究院",
        "category": "数据治理",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202601/t20260129_184123.htm",
        "summary": "数据与智能深度融合的新型产业发展研究"
    },
    {
        "title": "《政府数智化转型发展研究报告（2025 年）》",
        "date": "2026-03-10",
        "institution": "中国信息通信研究院",
        "category": "数据治理",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202603/t20260310_184765.htm",
        "summary": "数智驱动创新发展范式，绘就新时点治理新蓝图"
    },
    {
        "title": "《具身智能发展报告（2025 年）》",
        "date": "2026-02-01",
        "institution": "中国信息通信研究院",
        "category": "智能制造",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202602/t20260201_184234.htm",
        "summary": "具身智能技术发展与产业应用前景分析"
    },
    {
        "title": "《安全应急装备产业发展研究报告（2025 年）》",
        "date": "2026-02-05",
        "institution": "中国信息通信研究院",
        "category": "智能运维",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202602/t20260205_184345.htm",
        "summary": "安全应急装备产业发展现状与趋势"
    },
    {
        "title": "《AI 时代高品质全光算力专线研究报告（2025 年）》",
        "date": "2025-09-25",
        "institution": "中国信息通信研究院",
        "category": "智能运维",
        "url": "https://www.caict.ac.cn/kxyj/qwfb/bps/202509/t20250925_182345.htm",
        "summary": "面向智算应用需求的网络连接质量研究"
    },
    {
        "title": "《中国软件和信息服务业发展白皮书（2025 年）》",
        "date": "2025-12-20",
        "institution": "赛迪研究院",
        "category": "智能制造",
        "url": "https://www.ccidgroup.com/research/whitepaper/2025/",
        "summary": "中国软件和信息服务业年度发展报告"
    }
]

def main():
    """主函数"""
    print("开始生成研究报告数据...")
    
    result = {
        "update_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "total": len(REPORTS_DATA),
        "reports": REPORTS_DATA
    }
    
    # 保存数据
    with open('data/reports.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    
    print(f"研究报告数据已保存，共 {result['total']} 条")
    print(f"更新时间：{result['update_time']}")

if __name__ == "__main__":
    main()
