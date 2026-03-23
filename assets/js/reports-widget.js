/**
 * 研究报告展示组件
 * 从 data/reports.json 加载并展示最新报告
 */

class ReportsWidget {
    constructor(containerId, maxItems = 5) {
        this.containerId = containerId;
        this.maxItems = maxItems;
        this.dataUrl = 'data/reports.json';
    }

    async load() {
        try {
            const response = await fetch(this.dataUrl + '?t=' + Date.now());
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error('加载研究报告数据失败:', error);
            this.renderError();
        }
    }

    render(data) {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const reports = data.reports.slice(0, this.maxItems);
        
        let html = `
            <div class="update-info text-muted small mb-3">
                <i class="bi bi-clock"></i> 最后更新：${data.update_time}
            </div>
            <div class="list-group">
        `;

        reports.forEach((report, index) => {
            const categoryClass = this.getCategoryClass(report.category);
            html += `
                <a href="${report.url}" target="_blank" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1 text-truncate">${report.title}</h6>
                        <span class="badge ${categoryClass}">${report.category}</span>
                    </div>
                    <p class="mb-1 small text-muted text-truncate">${report.summary}</p>
                    <div class="d-flex justify-content-between">
                        <small class="text-muted"><i class="bi bi-building"></i> ${report.institution}</small>
                        <small class="text-muted"><i class="bi bi-calendar"></i> ${report.date}</small>
                    </div>
                </a>
            `;
        });

        html += `</div>`;
        html += `
            <div class="text-center mt-3">
                <a href="#institutions" class="btn btn-outline-primary btn-sm">
                    <i class="bi bi-arrow-right"></i> 查看更多报告
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    renderError() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="alert alert-warning">
                <i class="bi bi-exclamation-triangle"></i> 研究报告数据加载失败，请稍后刷新
            </div>
        `;
    }

    getCategoryClass(category) {
        const colors = {
            '人工智能': 'bg-info',
            '数据治理': 'bg-success',
            '智能运维': 'bg-warning',
            '智能制造': 'bg-primary',
            '电子智能化': 'bg-danger'
        };
        return colors[category] || 'bg-secondary';
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    const widget = new ReportsWidget('reports-container', 5);
    widget.load();
});
