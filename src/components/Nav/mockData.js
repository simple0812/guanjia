const mockData = [
  {id: 1, name:'行政办公', icon:'mail', submenus:[
    {id: 11, name:'组织单位', icon:'pie-chart', 
      submenus:[
        {id: 111, name:'组织单位1', icon:'pie-chart', submenus:[
          {id: 1111, name:'单位职能1', icon:'pie-chart', submenus:[]},
          {id: 1112, name:'单位职能1', icon:'pie-chart', submenus:[]},
          {id: 1113, name:'单位职能1', icon:'pie-chart', submenus:[]},
        ]},
        {id: 112, name:'组织单位2', icon:'pie-chart', submenus:[
          {id: 1121, name:'单位职能2', icon:'pie-chart', submenus:[]},
          {id: 1122, name:'单位职能3', icon:'pie-chart', submenus:[]},
          {id: 1123, name:'单位职能4', icon:'pie-chart', submenus:[]},

        ]},
      ]
    },
    {id: 12, name:'工作流程', icon:'pie-chart', 
      submenus:[
        {id: 121, name:'人员考勤', icon:'pie-chart', submenus:[
          {id: 1211, name:'考勤排班', icon:'pie-chart', submenus:[]},
          {id: 1212, name:'考勤管理', icon:'pie-chart', submenus:[]},
          {id: 1213, name:'我的考勤', icon:'pie-chart', submenus:[]},
          {id: 1214, name:'打卡管理', icon:'pie-chart', submenus:[]},
        ]},
        {id: 122, name:'薪资福利', icon:'pie-chart', submenus:[
          {id: 1221, name:'薪资管理', icon:'pie-chart', submenus:[]},
          {id: 1222, name:'工资管理', icon:'pie-chart', submenus:[]},
          {id: 1223, name:'薪资用户', icon:'pie-chart', submenus:[]},
          {id: 1223, name:'我的工资', icon:'pie-chart', submenus:[]},
        ]},
        {id: 123, name:'人员排班', icon:'pie-chart', submenus:[
          {id: 1231, name:'排班模版', icon:'pie-chart', submenus:[]},
          {id: 12322, name:'排班管理', icon:'pie-chart', submenus:[]},
          {id: 1233, name:'我的考勤', icon:'pie-chart', submenus:[]},
          {id: 1233, name:'打卡管理', icon:'pie-chart', submenus:[]},
        ]},
        {id: 124, name:'招聘管理', icon:'pie-chart', submenus:[
          {id: 1241, name:'建立管理', icon:'pie-chart', submenus:[]},
          {id: 1242, name:'人才管理', icon:'pie-chart', submenus:[]},
          {id: 1243, name:'代办管理', icon:'pie-chart', submenus:[]},
          {id: 1243, name:'打卡管理', icon:'pie-chart', submenus:[]},
        ]},
        {id: 125, name:'人员考勤', icon:'pie-chart', submenus:[
          {id: 1251, name:'考勤排班', icon:'pie-chart', submenus:[]},
          {id: 1252, name:'考勤管理', icon:'pie-chart', submenus:[]},
          {id: 1253, name:'我的考勤', icon:'pie-chart', submenus:[]},
          {id: 1253, name:'打卡管理', icon:'pie-chart', submenus:[]},
        ]},
      ]
    },
    {id: 13, name:'人事行政', icon:'pie-chart', submenus:[]},
    {id: 14, name:'公共信息', icon:'pie-chart', submenus:[]},
    {id: 15, name:'投票管理', icon:'pie-chart', submenus:[]},
  ]},
  {id: 2, name:'财务系统', icon:'pie-chart', submenus:[]},
  {id: 3, name:'分析系统', icon:'pie-chart', submenus:[]},
  {id: 4, name:'测量工具', icon:'pie-chart', 
    submenus:[
    {id: 41, name:'Option1', icon:'pie-chart', 
      submenus:[
        {id: 411, name:'Option411', icon:'pie-chart', submenus:[]},
        {id: 412, name:'Option412', icon:'pie-chart', submenus:[]},
        {id: 413, name:'Option413', icon:'pie-chart', submenus:[]},
      ]
    },
    {id: 42, name:'Option42', icon:'pie-chart', submenus:[]},
    {id: 43, name:'Option43', icon:'pie-chart', submenus:[]},]
  },
  {id: 5, name:'第三方应用', icon:'pie-chart', 
    submenus:[
    {id: 51, name:'Option51', icon:'pie-chart', 
      submenus:[
        {id: 511, name:'Option511', icon:'pie-chart', submenus:[
          {id: 5111, name:'Option5111', icon:'pie-chart', submenus:[]},
          {id: 5112, name:'Option5112', icon:'pie-chart', submenus:[]},
          {id: 5113, name:'Option5113', icon:'pie-chart', submenus:[]},
        ]},
        {id: 512, name:'Option512', icon:'pie-chart', submenus:[
          {id: 5121, name:'班组管理', icon:'pie-chart', submenus:[]},
          {id: 5122, name:'班组管理理', icon:'pie-chart', submenus:[]},
          {id: 5123, name:'班组管理理理', icon:'pie-chart', submenus:[]},

        ]},
        {id: 513, name:'Option513', icon:'pie-chart', submenus:[]},
      ]
    },
    {id: 52, name:'Option52', icon:'pie-chart', submenus:[]},
    {id: 53, name:'Option53', icon:'pie-chart', submenus:[]},]
  },
  {id: 6, name:'维护平台', icon:'mail', submenus:[]},
  {id: 7, name:'项目管理', icon:'mail', submenus:[]},

];

export default mockData;