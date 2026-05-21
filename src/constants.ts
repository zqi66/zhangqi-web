/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectData {
  id: string;
  category: string;
  coverImage?: string;
  section01Image?: string;
  zh: {
    tag: string;
    title: string;
    summary: string;
    client: string;
    role?: string;
    metrics: string;
    date: string;
    problem: string;
    solution: string;
    background?: {
      old: string[];
      need: string[];
      businessGoal: string;
    };
    designGoals?: Array<{ title: string; enTitle: string; desc?: string }>;
    competitiveAnalysis?: {
      headers: string[];
      competitors: Array<{
        name: string;
        logo?: string;
        rows: Array<{
          type: 'text' | 'colors';
          content: string | string[];
        }>;
      }>;
      conclusion: string;
    };
    designSpec?: {
      colors: Array<{
        title: string;
        enTitle: string;
        hex: string;
        label: string;
        type: 'primary' | 'accent' | 'base';
      }>;
      keywordTransitionImage?: string;
      visualStyleImage?: string;
    };
    designThinking?: Array<{
      title: string;
      enTitle: string;
      src: string;
    }>;
  };
  en: {
    tag: string;
    title: string;
    summary: string;
    client: string;
    role?: string;
    metrics: string;
    date: string;
    problem: string;
    solution: string;
    background?: {
      old: string[];
      need: string[];
      businessGoal: string;
    };
    designGoals?: Array<{ title: string; enTitle: string; desc?: string }>;
    competitiveAnalysis?: {
      headers: string[];
      competitors: Array<{
        name: string;
        logo?: string;
        rows: Array<{
          type: 'text' | 'colors';
          content: string | string[];
        }>;
      }>;
      conclusion: string;
    };
    designSpec?: {
      colors: Array<{
        title: string;
        enTitle: string;
        hex: string;
        label: string;
        type: 'primary' | 'accent' | 'base';
      }>;
      keywordTransitionImage?: string;
      visualStyleImage?: string;
    };
    designThinking?: Array<{
      title: string;
      enTitle: string;
      src: string;
    }>;
  };
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'ai-forge',
    category: 'AI工具',
    coverImage: 'https://i.postimg.cc/1XffPJdR/01.png',
    zh: {
      tag: '人工智能创作',
      title: 'AiForge — 故事素材工具',
      summary: '面向游戏业务的一站式AI视频素材生成平台，专为故事性、主题化的营销素材、剧情短片、角色宣传片等场景设计，通过脚本联动专业分镜的标准化创作模式，高效批量生成定制化游戏视频素材。',
      client: 'AiForge Labs',
      role: '资深 UI/UX 设计师',
      metrics: '+150% 创作效率提升',
      date: '2025 第四季度',
      problem: '传统视频创作流程繁锁，涉及脚本、素材、剪辑等多个环节的反复交回。AI 工具的碎片化导致创作者在不同平台间频繁切换，损耗创意连贯性。',
      solution: '我们搭建了统一的创作画布，将 AI 推理块与资产管理模块深度融合。通过直观的节点链和实时预览系统，创作者可以在一个系统内完成从创意迸发到高质成片的闭环。',
      background: {
        old: ['软件1 分镜和脚本', '软件2 每个分镜图', '软件3 生成视频', '软件4 视频剪辑合成'],
        need: ['提供人物形象', '简单描述故事情节', '调整分镜', '直出素材'],
        businessGoal: '打造一款“AI故事素材工具”，让业务人员只需上传游戏人物形象、输入简单故事情节描述，即可自动生成分镜脚本并支持可视化调整，最终直接输出可用的视频素材，大幅缩短“创意->成片”的路径。'
      },
      designGoals: [
        { title: '简约', enTitle: 'conciseness' },
        { title: '智能', enTitle: 'intelligence' },
        { title: '高效', enTitle: 'efficiency' },
        { title: '易用', enTitle: 'usability' }
      ],
      designSpec: {
        colors: [
          { title: '主色', enTitle: 'Primary', hex: '#7030EF', label: 'Primary Identity', type: 'primary' },
          { title: '辅色', enTitle: 'Lavender', hex: '#A15BE6', label: 'Accent Secondary', type: 'accent' },
          { title: '辅色', enTitle: 'Base', hex: '#0D0D0E', label: 'Background Base', type: 'base' }
        ]
      },
      designThinking: [
        { title: '流程化分步操作，减少操作负担', enTitle: 'STREAMLINED WORKFLOW', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF01.png' },
        { title: '聚焦当前操作，减少干扰', enTitle: 'DISTRACTION-FREE INTERFACE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF02.png' },
        { title: '提升自由创作的灵活度', enTitle: 'CREATIVE FLEXIBILITY', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF03.png' }
      ]
    },
    en: {
      tag: 'AI CREATIVE PLATFORM',
      title: 'AiForge — Story Asset Tool',
      summary: 'A one-stop AI video asset generation platform for game business, specifically designed for narrative and thematic marketing materials, story shorts, and character trailers. It features a standardized creation model linking scripts with professional storyboards for efficient batch generation of customized game video assets.',
      client: 'AiForge Labs',
      role: 'Lead UI/UX Designer',
      metrics: '+150% Productivity Boost',
      date: 'Q4 2025',
      problem: 'Traditional video production is fragmented across scripts, assets, and editing tools. AI tool fragmentation forces creators to switch platforms constantly, breaking creative flow.',
      solution: 'We constructed a unified workspace merging AI reasoning blocks with asset coordination. Utilizing intuitive node-chains and real-time canvas preview, creators can execute full-link production in one place.',
      background: {
        old: ['Soft1: Script', 'Soft2: Storyboard', 'Soft3: Gen Video', 'Soft4: Editing'],
        need: ['Upload Avatar', 'Desc Story', 'Adjust Frames', 'Direct Export'],
        businessGoal: 'Build an "AI Story Asset Tool" that allows business users to simply upload character images and input story descriptions to automatically generate storyboards and support visual adjustments, shortening the "idea to film" path.',
      },
      designGoals: [
        { title: 'Concise', enTitle: 'conciseness' },
        { title: 'Smart', enTitle: 'intelligence' },
        { title: 'Efficient', enTitle: 'efficiency' },
        { title: 'Easy', enTitle: 'usability' }
      ],
      designSpec: {
        colors: [
          { title: 'Main', enTitle: 'Primary', hex: '#7030EF', label: 'Primary Identity', type: 'primary' },
          { title: 'Aux', enTitle: 'Lavender', hex: '#A15BE6', label: 'Accent Secondary', type: 'accent' },
          { title: 'Aux', enTitle: 'Base', hex: '#0D0D0E', label: 'Background Base', type: 'base' }
        ]
      },
      designThinking: [
        { title: 'Step-by-step Process', enTitle: 'STREAMLINED WORKFLOW', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF01.png' },
        { title: 'Focus on Execution', enTitle: 'DISTRACTION-FREE INTERFACE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF02.png' },
        { title: 'Enhanced Creative Liberty', enTitle: 'CREATIVE FLEXIBILITY', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF03.png' }
      ]
    }
  },
  {
    id: 'project-02',
    category: 'c-end',
    coverImage: 'https://i.postimg.cc/QdknZ3TL/02.png',
    zh: {
      tag: '企业官网',
      title: 'Family Center — 未成年人守护平台',
      summary: '一款专注于游戏行业的未成年人守护平台，通过科学工具与透明沟通，协助家长参与孩子游戏管理，共创健康的数字生活生态。',
      client: 'Nova Tech',
      role: 'UI/UX 系统设计师',
      metrics: '7日留存率提升28%',
      date: '2025 第四季度',
      problem: '如何在满足全球各地合规监管的同时，消除家长与平台间的信息不对称，帮助家长更深入地了解并参与孩子的游戏活动，将防护从“管控”转变为“协同”，是平台面临的核心挑战。',
      solution: '我们重塑了门户网站的视觉叙事逻辑，将枯燥的规则解析转化为可视化的心路历程。通过精密的卡片层级与温暖的色彩基调，降低了家长的上手门槛，增强了平台的专业度与亲和力。',
      background: {
        old: ['规则零散难以查找', '官方姿态过于生硬', '移动端适配体验差', '缺乏科学引导建议'],
        need: ['一站式信息中心', '温暖而坚定的视觉基调', '极简的操作引导路径', '业务组件化快速迭代'],
        businessGoal: '建立平台与家长的信任桥梁，通过标准化的设计语言降低业务理解难度，打造业界领先的守护平台标杆。'
      },
      designGoals: [
        { title: '温暖', enTitle: 'warmth' },
        { title: '专业', enTitle: 'professional' },
        { title: '极简', enTitle: 'minimal' },
        { title: '包容', enTitle: 'inclusive' }
      ],
      competitiveAnalysis: {
        headers: ['产品定位', '目标用户', '核心优势', '色彩组合', '产品风格'],
        competitors: [
          {
            name: 'SuperAwesome',
            logo: 'https://i.postimg.cc/bwdB8gsZ/logo01.png',
            rows: [
              { type: 'text', content: '品牌侧儿童数字广告合规平台，帮助品牌安全地触达未成年人' },
              { type: 'text', content: '品牌方、游戏开发商、广告代理公司（如乐高、迪士尼、任天堂）' },
              { type: 'text', content: 'Epic生态背书 + KWS开发者工具免费 + 1500万+已验证家长网络' },
              { type: 'colors', content: ['#582CFF', '#8B2CFF', '#FF4D2C', '#000000'] },
              { type: 'text', content: '企业技术感+鲜明可信的形象设计' }
            ]
          },
          {
            name: 'K-ID',
            logo: 'https://i.postimg.cc/CLcQWXLD/logo02.png',
            rows: [
              { type: 'text', content: '开发者侧全球未成年人合规基础设施，通过单一API实现年龄分级与家长同意' },
              { type: 'text', content: '游戏开发者、社交平台、出海数字应用（如 Discord、孩之宝）' },
              { type: 'text', content: '功能级年龄粒度控制 + 单一API覆盖200+市场合规 + 实时法规更新监控' },
              { type: 'colors', content: ['#7A38FF', '#00F0FF', '#D9FFFF', '#F5FAFF'] },
              { type: 'text', content: '童趣/有机+清新明亮现代科技感' }
            ]
          }
        ],
        conclusion: '加强品牌形象的塑造和情感化的设计，简化步骤；色彩选择大都明亮、温暖、鲜艳；可探索联通不同游戏厂商的家长控制后台，真正建立平台级的未成年人守护生态。'
      },
      designSpec: {
        colors: [
          { title: '主色', enTitle: 'Indigo', hex: '#6366F1', label: 'Primary Trust', type: 'primary' },
          { title: '辅色', enTitle: 'Teal', hex: '#14B8A6', label: 'Safety Accent', type: 'accent' },
          { title: '基色', enTitle: 'Slate', hex: '#0F172A', label: 'Background Depth', type: 'base' }
        ],
        keywordTransitionImage: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%A7%86%E8%A7%89%E6%8E%A8%E6%BC%94.png',
        visualStyleImage: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E9%A3%8E%E6%A0%BC%E5%AE%9A%E4%B9%89.png'
      },
      designThinking: [
        { title: '首页', enTitle: 'HOME PAGE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family01.png' },
        { title: '创建儿童', enTitle: 'CREATE PROFILE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family02.png' },
        { title: '管理儿童', enTitle: 'MANAGE PROFILE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family03.png' },
        { title: '分析儿童', enTitle: 'ANALYZE PROFILE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family04.png' }
      ]
    },
    en: {
      tag: 'ENTERPRISE WEBSITE',
      title: 'Family Center — Minors Protection Platform',
      summary: 'A minors\' protection platform focused on the gaming industry, empowering parents to manage digital habits through scientific tools and transparent communication to co-create a healthy digital ecosystem.',
      client: 'Nova Tech',
      role: 'UI/UX System Designer',
      metrics: '28% 7-day Retention Rate Increase',
      date: 'Q4 2025',
      problem: 'The challenge lies in balancing diverse global regulatory compliance while bridging the information gap between parents and platforms, helping parents understand and participate more deeply in their children\'s gaming activities.',
      solution: 'We reconstructed the portal\'s visual narrative, transforming dry rules into visual journeys. using precise card hierarchies and a warm color palette, we lowered barriers for parents and enhanced professional affinity.',
      background: {
        old: ['Scattered rules', 'Cold authority tone', 'Poor mobile experience', 'Lack of guidance'],
        need: ['One-stop info hub', 'Warm visual tone', 'Streamlined navigation', 'Modular components'],
        businessGoal: 'Build a bridge of trust between the platform and parents, lowering business complexity through standardized design language.'
      },
      designGoals: [
        { title: 'Warm', enTitle: 'warmth' },
        { title: 'Expert', enTitle: 'professional' },
        { title: 'Simple', enTitle: 'minimal' },
        { title: 'Open', enTitle: 'inclusive' }
      ],
      competitiveAnalysis: {
        headers: ['Positioning', 'Audience', 'Strengths', 'Palette', 'Style'],
        competitors: [
          {
            name: 'SuperAwesome',
            logo: 'https://i.postimg.cc/bwdB8gsZ/logo01.png',
            rows: [
              { type: 'text', content: 'Brand-side digital advertising platform for kids, helping brands reach minors safely.' },
              { type: 'text', content: 'Brands, game developers, ad agencies (Lego, Disney, Nintendo).' },
              { type: 'text', content: 'Epic ecosystem support + free KWS tools + 15M+ verified parent network.' },
              { type: 'colors', content: ['#582CFF', '#8B2CFF', '#FF4D2C', '#000000'] },
              { type: 'text', content: 'Corporate tech feel + distinct, trustworthy visual identity.' }
            ]
          },
          {
            name: 'K-ID',
            logo: 'https://i.postimg.cc/CLcQWXLD/logo02.png',
            rows: [
              { type: 'text', content: 'Developer-side compliance infrastructure, enabling age rating and consent via a single API.' },
              { type: 'text', content: 'Game devs, social platforms, global digital apps (Discord, Hasbro).' },
              { type: 'text', content: 'Age granularity control + 200+ market compliance + real-time monitoring.' },
              { type: 'colors', content: ['#7A38FF', '#00F0FF', '#D9FFFF', '#F5FAFF'] },
              { type: 'text', content: 'Playful/Organic + fresh, bright modern tech feel.' }
            ]
          }
        ],
        conclusion: 'Strengthen brand identity and emotional design; simplify steps; use bright, warm colors; explore cross-platform parent controls to build a true ecosystem.'
      },
      designSpec: {
        colors: [
          { title: 'Main', enTitle: 'Indigo', hex: '#6366F1', label: 'Primary Trust', type: 'primary' },
          { title: 'Aux', enTitle: 'Teal', hex: '#14B8A6', label: 'Safety Accent', type: 'accent' },
          { title: 'Base', enTitle: 'Slate', hex: '#0F172A', label: 'Background Depth', type: 'base' }
        ],
        keywordTransitionImage: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E8%A7%86%E8%A7%89%E6%8E%A8%E6%BC%94.png',
        visualStyleImage: 'https://raw.githubusercontent.com/zqi66/zqi-/main/%E9%A3%8E%E6%A0%BC%E5%AE%9A%E4%B9%89.png'
      },
      designThinking: [
        { title: 'Home Page Showcase', enTitle: 'HOME PAGE SHOWCASE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family01.png' },
        { title: 'Create Profile', enTitle: 'CREATE PROFILE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family02.png' },
        { title: 'Manage Profile', enTitle: 'MANAGE PROFILE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family03.png' },
        { title: 'Analyze Profile', enTitle: 'ANALYZE PROFILE', src: 'https://raw.githubusercontent.com/zqi66/zqi-/main/family04.png' }
      ]
    }
  },
  {
    id: 'project-03',
    category: 'mobile',
    coverImage: 'https://i.postimg.cc/MTRQgWnb/03.png',
    section01Image: 'https://raw.githubusercontent.com/zqi66/zqi-/main/CZN%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF.png',
    zh: {
      tag: '玩家共创平台',
      title: '卡厄思梦境社区 — 游戏官方玩家共创平台',
      summary: 'CZN社区是“卡厄思梦境”游戏的官方玩家共创平台，社区将官方资讯、深度百科、活动中心、任务系统与玩家社群融为一体，是玩家获取攻略与福利的第一站。',
      client: 'Chaos Dream Studio',
      role: '产品交互设计师',
      metrics: '用户日活增长56%',
      date: '2025 第三季度',
      problem: '传统的游戏社区功能单一、官方动态、深度百科与玩家活动相互割裂不连通，导致玩家在查找深度攻略、反馈问题和参与共创活动时体验琐碎且费时。',
      solution: '我们通过全链路的交互设计，将公告、百科、福利和玩家交流汇聚至一站式看板中。利用流畅的卡片路由与任务中心，让玩家能以最短路径参与共创、享受游戏生态。'
    },
    en: {
      tag: 'PLAYER CO-CREATION PLATFORM',
      title: 'Chaos Dream Community — Official Player Co-creation Platform',
      summary: 'CZN community is the official player co-creation platform for "Chaos Dream". It integrates official news, deep wiki, campaign hub, task system and player communities, serving as the primary hub for player guides and rewards.',
      client: 'Chaos Dream Studio',
      role: 'Interaction Designer',
      metrics: '56% DAU Growth',
      date: 'Q3 2025',
      problem: 'Traditional gaming communities suffer from isolated channels. Official updates, comprehensive wikis, and player events are often siloed, forcing users back and forth across different portals.',
      solution: 'We designed a unified dashboard connecting official news, wikis, and quest rewards. By using interactive card routing and centralizing key workflows, players can browse guides and contribute to the community effortlessly.'
    }
  },
  {
    id: 'project-04',
    category: 'fintech',
    coverImage: 'https://i.postimg.cc/65VDtRkc/04.png',
    zh: {
      tag: '管理后台',
      title: 'PUBGM Creator Hub — 一站式管理平台',
      summary: '面向PUBG Mobile创作者进行认证入驻、内容创作、官方任务参与及奖励结算的一站式管理平台。',
      client: 'Quantum Finance',
      role: '资深视觉设计师',
      metrics: '提升35%点击转化率',
      date: '2025 第二季度',
      problem: '资产流向不透明和财务审计滞后是大型企业的常见痛点，导致潜在的财务风险无法被及时察觉。',
      solution: '我们设计了可视化的资金脉络图。配合实时预警系统，将枯燥的财务数据转化为直观的动态决策依据。'
    },
    en: {
      tag: 'ADMIN BACKEND',
      title: 'PUBGM Creator Hub — One-stop Management Platform',
      summary: 'One-stop management platform for PUBG Mobile creators to obtain certification, create content, participate in official missions, and settle rewards.',
      client: 'Quantum Finance',
      role: 'Senior Visual Designer',
      metrics: '35% Click Conversion Rate Increase',
      date: 'Q2 2025',
      problem: 'Delayed auditing and opaque asset flows created risks for large enterprises, making it hard to catch financial anomalies early.',
      solution: 'We engineered interactive pulse-maps for fund flows. Combined with real-time alerting, we transformed dry data into active decision-making visuals.'
    }
  },
  {
    id: 'project-05',
    category: 'h5',
    coverImage: 'https://i.postimg.cc/4dZfNZ8F/05.png',
    zh: {
      tag: '运营设计',
      title: '猫狗大对决 — H5 运营活动',
      summary: '终极角逐H5运营活动，支持双端适配。专为猫狗宿命对抗精心打造，提供流畅的微交互动效与沉浸式互动体验。',
      client: 'Nexus Labs',
      metrics: '提升85%用户留存率',
      date: '2026 第一季度',
      problem: 'H5 活动竞争激烈，缺乏创新交互与情绪引爆点，容易导致用户快速流失。',
      solution: '我们通过轻量化微交互、双端针对性响应式布局以及阵营强对抗机制的设计，极大地拉长了用户的参与时长。'
    },
    en: {
      tag: 'CAMPAIGN DESIGN',
      title: 'Cats vs Dogs — H5 Operation Campaign',
      summary: 'The ultimate Cats vs Dogs showdown H5 campaign, featuring seamless cross-platform optimization and immersive interactive team battle experience.',
      client: 'Nexus Labs',
      metrics: '85% User Retention Rate Increase',
      date: 'Q1 2026',
      problem: 'H5 campaigns suffer from short user lifecycles and lack of emotional hooks, leading to high drop-offs.',
      solution: 'We engineered fluid micro-interactions, flawless responsive view adapters for desktop/mobile, and highly motivating interactive team battle dynamics.'
    }
  }
];
