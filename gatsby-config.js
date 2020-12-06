module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://phantom-assassin-portfolio/quanjichun`,
    // Your Name
    name: '전기춘 / 全基春 / Jichun Quan',
    // Main Site Title
    title: `Jichun Quan | Front-end Developer`,
    // Description that goes under your name in main bio
    description: `A javascript developer specialized on front-end and tring to be a full-stack developer`,
    // Optional: Github account URL
    github: `https://github.com/quanjichun`,
    // Optional: LinkedIn account URL
    linkedin: ``,
    // Optional: Blog URL
    blog: `https://bloodseeker.tistory.com/`,
    // Optional: Email
    email: `quanjichun@gmail.com`,
    // Content of the About Me section
    about: [
      'Javascript',
      'React',
      'front-end 개발자',
      'GraphQL',
      'Elasticsearch',
      '중국어',
      "석사",
      '책임감이 강함',
      '팀에서 어려운 모듈 담당',
      '팀내 신기술 전파자',
      '신입사원 트레이너',
      '셀리더',
      'LG전자',
      '스펙트럼이 넓은 Full-stack 개발자가 목표',
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ID 업무 디지털화(DX) 시스템',
        duration: '2020.01 ~ 진행 중',
        description: {
          content: [
            '개발자/팀 이슈관리, 프로젝트 개발관리, 업무보고, 업무 데이터(email, voc, rms 등) 수집/분석/visualization, Task 관리, \
            매출정보 visualization 등 기능을 포함하고 있는 종합업무 시스템',
          ],
          contribution: [
            '프로젝트(모델) 개발 관리시스템 구현',
            '업무보고 시스템 구현',
            'Elasticsearch 기반 통합검색 구현',
            'Task 관리 시스템 구현',
          ],
          skills: [
            'Front-end: React, Material-UI, CKEditor, styled-components',
            'Back-end: GraphQL, Koa, MySql, Sequelize',
            'Others: Elasticsearch, Python, JTest',
          ],
          achivement: [
            '현재 ID 개발담당에서 해당 업무시스템을 사용하고 있음',
            'Agile 개발방식과 web fullstack 개발경험을 얻었음.',
            'GraphQL, Elasticsearch와 같은 up-to-date 개발기술을 익혔음',
          ],
        },
        link: '',
      },
      {
        name: 'Youtube/Amazon PV app porting',
        duration: '2019.01 ~ 2019.12(Youtube), 2019.11 ~ 2019.12(Amazon)',
        description: {
          content: [
            '가정용 TV에서 동작하는 Youtube/Amazon PV App을 Commercial TV 에서 동작하도록 porting 함',
          ],
          contribution: [
            'Commercial TV platform 환경에 맞는 App build script 구현',
            'Commercial TV platform 환경에서 발생하는 이슈 해결 및 Commercial 특화기능 추가'
          ],
          skills: [
            'Shell Script, C++'
          ],
          achivement: []
        },
        link: '',
      },
      {
        name: 'Hotel Mode App/관련 service 구현 및 유지보수',
        duration: '2017.07 ~ 2019.12',
        description: {
          content: [
            '가정용 TV의 Hotel Mode 기능 구현 및 유지보수',
          ],
          contribution: [
            'Hotel Mode App refactoring',
            '일부 TV App/Service에 Hotel Mode 제약사항 추가',
            'Hotel Mode 기능 유지보수'
          ],
          skills: [
            'Enact(React based webOS TV UI framework), Redux'
          ],
          achivement: [
            '타 사업부 여러팀의 다양한 인원과 함께 개발하면서 Communication 능력과 협업능력이 많이 향상하였음'
          ],
        },
        link: '',
      },
      {
        name: 'Group Manager Signage/Hotel App',
        duration: '2016.11 ~ 2017.03, 2019.02 ~ 2019.03(Refactoring)',
        description: {
          content: [
            '동일한 네트워크 망에 있는 TV/Signage(Monitor) 를 그룹으로 묶어서 관리하고 Data Cloning/Content Distribution(동영상 배포)를 할 수 있는 App',
          ],
          contribution: [
            'UX 시나리오 설계(UX 담당자와 협업)',
            'DB 설계 및 App 구현',
            '서비스 API 설계(서비스 담당자와 협업)'
          ],
          skills: [
            'Enyo(webOS TV UI framework)',
            'Enact(React based webOS TV UI framework), Redux'
          ],
          achivement: [
            '2017년 Signage, 부분 Hotel TV부터 최신 모델까지 계속 탑재되어 출시하고 있음',
            '처음으로 한개 project를 리드하여 개발하였고 최종 출시하였음',
          ],
        },
        link: '',
      },
      {
        name: 'IME Commercial 기능 개발 및 유지보수',
        duration: '2015.10 ~ 2017.06, 2019.07 ~ 2019.08',
        description: {
          content: [],
          contribution: [
            '이형 Signage(3840 * 600, 600 * 3840) 해상도에 맞게 UI 수정',
            'Commercial TV/Signage 환경에서 발생하는 이슈 해결'
          ],
          skills: [
            'QML, C++'
          ],
          achivement: [],
        },
        link: '',
      },
      {
        name: 'Signage 특화앱 개발 및 유지보수',
        duration: '2014.12 ~ 2018.12',
        description: {
          content: [],
          contribution: [
            'Singage 정보를 보여주는 Information App 신규개발 및 유지보수',
            'SI App 설치에 사용되는 SI App Setting 신규개발 및 유지보수',
            'ISM 잔상보상 App 신규개발 및 유지보수'
          ],
          skills: [
            'QML, Enyo'
          ],
          achivement: [],
        },
        link: '',
      },
      {
        name: 'Commercial TV 채널관련 기능',
        duration: '2016.01 ~ 2019.12',
        description: {
          content: [],
          contribution: [
            'Channel Tuning, Channel Manager, Live TV, LiveMenu Commercial 기능 개발 및 유지보수'
          ],
          skills: [
            'QML, Enyo'
          ],
          achivement: [],
        },
        link: '',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'LG 전자',
        description: ['ID SAT팀, App Developer, 2014.07 ~ 현재'],
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages & Frameworks',
        description: [
          'JavaScript (ES6+), Java, Python, Node.js, React, Redux, GraphQL, Koa, Sequelize ',
        ],
      },
      {
        name: 'Others',
        description: ['Elasticsearch, Git, Agile / Scrum, MySQL'],
      },
      {
        name: 'Language',
        description: ['Korean, Chinese, English'],
      },
    ],
    educations: [
      {
        name: '연세대학교',
        description: [
          '컴퓨터과학과, 석사, 2012.09 ~ 2014.08',
          'A Hybrid Recommender System Based on AHP That Awares Contexts with Bayesian Networks for Smart TV',
          '[ 정보과학회 우수논문상 2편 ]',
        ],
      },
      {
        name: 'Hangzhou Normal University',
        description: ['SW Engineering, 학사, 2007.09 ~ 2011.08'],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
