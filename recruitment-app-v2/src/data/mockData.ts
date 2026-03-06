// 直接从 Stitch HTML 提取的 Mock 数据

export const jobs = [
  {
    id: 1,
    title: '高级UI设计师',
    salary: '15k-25k',
    company: '未来科技网络有限公司',
    stage: 'B轮',
    size: '100-499人',
    tags: ['五险一金', '周末双休', '带薪年假'],
    location: '朝阳区 · 望京 · 2.5km',
  },
  {
    id: 2,
    title: '资深前端开发工程师',
    salary: '25k-40k',
    company: '迅捷支付科技有限公司',
    stage: '上市公司',
    size: '1000人以上',
    tags: ['股票期权', '年度体检', '定期团建'],
    location: '海淀区 · 中关村 · 4.8km',
  },
  {
    id: 3,
    title: '产品经理 (移动端)',
    salary: '20k-35k',
    company: '极光互娱科技有限公司',
    stage: 'C轮',
    size: '500-999人',
    tags: ['六险一金', '弹性工作', '餐补'],
    location: '朝阳区 · 太阳宫 · 3.2km',
  },
]

export const jobDetail = {
  title: '高级UI设计师',
  salary: '15k-25k',
  company: '未来科技网络有限公司',
  stage: 'B轮',
  size: '100-499人',
  location: '朝阳区',
  experience: '3-5年',
  education: '本科',
  tags: ['五险一金', '周末双休', '带薪年假', '节日福利', '年终奖'],
  desc: [
    '负责公司核心产品的UI设计，包括移动端App和Web端；',
    '参与产品需求讨论，从视觉角度提出设计建议；',
    '制定并维护设计规范，确保产品视觉一致性；',
    '与产品经理、前端工程师紧密合作，推动设计落地；',
    '关注行业设计趋势，持续提升产品体验。',
  ],
  require: [
    '本科及以上学历，视觉传达、交互设计等相关专业；',
    '3年以上UI设计经验，有移动端产品设计经验优先；',
    '熟练使用 Figma、Sketch 等设计工具；',
    '具备良好的审美和用户体验意识；',
    '有独立完成从0到1产品设计经验者优先。',
  ],
}

export const company = {
  name: '未来科技网络有限公司',
  industry: '互联网/科技',
  size: '100-499人',
  stage: 'B轮',
  founded: '2018年',
  city: '北京',
  desc: '未来科技网络有限公司是一家专注于企业数字化解决方案的科技公司，致力于以AI技术驱动企业效率提升。公司成立以来，已服务超过5000家企业客户，获得B轮融资，估值超过10亿元。',
  jobs: [
    { title: '高级UI设计师', salary: '15k-25k', tags: ['五险一金', '双休'] },
    { title: '前端工程师', salary: '20k-35k', tags: ['六险一金', '弹性'] },
    { title: '产品经理', salary: '18k-30k', tags: ['股票期权', '年假'] },
  ],
}

export const userProfile = {
  name: '李明',
  title: '求职中 · UI/UX设计师',
  resumeScore: 80,
  stats: { applied: 15, viewed: 32, saved: 8 },
}
