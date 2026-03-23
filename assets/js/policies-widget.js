/**
 * 政策展示组件
 * 从 data/policies.json 加载并展示最新政策
 */

class PoliciesWidget {
    constructor(containerId, maxItems = 5) {
        this.containerId = containerId;
        this.maxItems = maxItems;
        this.dataUrl = 'data/policies.json';
    }

    async load() {
        try {
            const response = await fetch(this.dataUrl + '?t=' + Date.now());
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error('加载政策数据失败:', error);
            this.renderError();
        }
    }

    render(data) {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const policies = data.policies.slice(0, this.maxItems);
        
        let html = `
            <div class="update-info text-muted small mb-3">
                <i class="bi bi-clock"></i> 最后更新：${data.update_time}
            </div>
            <div class="list-group">
        `;

        policies.forEach((policy, index) => {
            const categoryClass = this.getCategoryClass(policy.category);
            html += `
                <a href="${policy.url}" target="_blank" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1 text-truncate">${policy.title}</h6>
                        <span class="badge ${categoryClass}">${this.getCategoryBadge(policy.category)}</span>
                    </div>
                    <p class="mb-1 small text-muted text-truncate">${policy.summary}</p>
                    <div class="d-flex justify-content-between">
                        <small class="text-muted"><i class="bi bi-building"></i> ${policy.source}</small>
                        <small class="text-muted"><i class="bi bi-calendar"></i> ${policy.date}</small>
                    </div>
                </a>
            `;
        });

        html += `</div>`;
        html += `
            <div class="text-center mt-3">
                <a href="#institutions" class="btn btn-outline-primary btn-sm">
                    <i class="bi bi-arrow-right"></i> 查看更多政策
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
                <i class="bi bi-exclamation-triangle"></i> 政策数据加载失败，请稍后刷新
            </div>
        `;
    }

    getCategoryClass(category) {
        if (category.includes('工信部')) return 'bg-primary';
        if (category.includes('国务院')) return 'bg-success';
        return 'bg-secondary';
    }

    getCategoryBadge(category) {
        if (category.includes('工信部')) return '工信部';
        if (category.includes('国务院')) return '国务院';
        return category;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    const widget = new PoliciesWidget('policies-container', 5);
    widget.load();
});
