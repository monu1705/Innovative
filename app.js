// app.js — ProManage: Intelligent Software Project Management System

(function () {
  const KEY = 'promanage_demo_v1';

  function defaultData() {
    return {
      users: [
        // Admin
        {id:'u-admin-1',role:'admin',email:'admin@promanage.com',password:'admin123',name:'System Administrator'},
        {id:'u-admin-2',role:'admin',email:'admin2@promanage.com',password:'admin123',name:'Admin User'},
        
        // Project Managers
        {id:'u-pm-1',role:'project_manager',email:'pm@promanage.com',password:'pm123',name:'Sarah Johnson',member_id:'m1'},
        {id:'u-pm-2',role:'project_manager',email:'pm2@promanage.com',password:'pm123',name:'Michael Chen',member_id:'m2'},
        {id:'u-pm-3',role:'project_manager',email:'pm3@promanage.com',password:'pm123',name:'Emily Davis',member_id:'m3'},
        
        // Developers
        {id:'u-dev-1',role:'developer',email:'dev@promanage.com',password:'dev123',name:'Alex Rodriguez',member_id:'m4'},
        {id:'u-dev-2',role:'developer',email:'dev2@promanage.com',password:'dev123',name:'David Kim',member_id:'m5'},
        {id:'u-dev-3',role:'developer',email:'dev3@promanage.com',password:'dev123',name:'Jessica Martinez',member_id:'m6'},
        {id:'u-dev-4',role:'developer',email:'dev4@promanage.com',password:'dev123',name:'Ryan Thompson',member_id:'m7'},
        {id:'u-dev-5',role:'developer',email:'dev5@promanage.com',password:'dev123',name:'Lisa Anderson',member_id:'m8'},
        {id:'u-dev-6',role:'developer',email:'dev6@promanage.com',password:'dev123',name:'James Wilson',member_id:'m9'},
        {id:'u-dev-7',role:'developer',email:'dev7@promanage.com',password:'dev123',name:'Sophia Brown',member_id:'m10'},
        {id:'u-dev-8',role:'developer',email:'dev8@promanage.com',password:'dev123',name:'Daniel Lee',member_id:'m11'},
        
        // Programmers
        {id:'u-prog-1',role:'programmer',email:'prog@promanage.com',password:'prog123',name:'Chris Taylor',member_id:'m12'},
        {id:'u-prog-2',role:'programmer',email:'prog2@promanage.com',password:'prog123',name:'Amanda White',member_id:'m13'},
        {id:'u-prog-3',role:'programmer',email:'prog3@promanage.com',password:'prog123',name:'Kevin Garcia',member_id:'m14'},
        {id:'u-prog-4',role:'programmer',email:'prog4@promanage.com',password:'prog123',name:'Nicole Harris',member_id:'m15'},
        {id:'u-prog-5',role:'programmer',email:'prog5@promanage.com',password:'prog123',name:'Brian Clark',member_id:'m16'},
        
        // Testers
        {id:'u-test-1',role:'tester',email:'tester@promanage.com',password:'test123',name:'Maria Lopez',member_id:'m17'},
        {id:'u-test-2',role:'tester',email:'tester2@promanage.com',password:'test123',name:'Robert Smith',member_id:'m18'},
        {id:'u-test-3',role:'tester',email:'tester3@promanage.com',password:'test123',name:'Jennifer Adams',member_id:'m19'},
        {id:'u-test-4',role:'tester',email:'tester4@promanage.com',password:'test123',name:'Thomas Wright',member_id:'m20'},
        {id:'u-test-5',role:'tester',email:'tester5@promanage.com',password:'test123',name:'Patricia Moore',member_id:'m21'}
      ],
      team_members: [
        {id:'m1',name:'Sarah Johnson',email:'pm@promanage.com',role:'project_manager',skills:['Project Management','Agile','Scrum','Leadership'],department:'Engineering',phone:'+1-555-1001',joining_date:'2023-01-15'},
        {id:'m2',name:'Michael Chen',email:'pm2@promanage.com',role:'project_manager',skills:['Project Management','Kanban','Risk Management','Stakeholder Management'],department:'Product',phone:'+1-555-1002',joining_date:'2023-02-20'},
        {id:'m3',name:'Emily Davis',email:'pm3@promanage.com',role:'project_manager',skills:['Project Management','Waterfall','Budget Management','Team Leadership'],department:'Engineering',phone:'+1-555-1003',joining_date:'2023-03-10'},
        {id:'m4',name:'Alex Rodriguez',email:'dev@promanage.com',role:'developer',skills:['Java','Spring Boot','Microservices','Docker','Kubernetes','AWS'],department:'Backend',phone:'+1-555-1004',joining_date:'2023-01-20'},
        {id:'m5',name:'David Kim',email:'dev2@promanage.com',role:'developer',skills:['JavaScript','React','Node.js','TypeScript','Express','MongoDB'],department:'Frontend',phone:'+1-555-1005',joining_date:'2023-02-05'},
        {id:'m6',name:'Jessica Martinez',email:'dev3@promanage.com',role:'developer',skills:['Python','Django','PostgreSQL','Redis','Celery','REST APIs'],department:'Backend',phone:'+1-555-1006',joining_date:'2023-02-15'},
        {id:'m7',name:'Ryan Thompson',email:'dev4@promanage.com',role:'developer',skills:['C#','.NET','Azure','Entity Framework','SQL Server','Blazor'],department:'Backend',phone:'+1-555-1007',joining_date:'2023-03-01'},
        {id:'m8',name:'Lisa Anderson',email:'dev5@promanage.com',role:'developer',skills:['React','Vue.js','Angular','Webpack','Sass','Jest','Next.js'],department:'Frontend',phone:'+1-555-1008',joining_date:'2023-03-15'},
        {id:'m9',name:'James Wilson',email:'dev6@promanage.com',role:'developer',skills:['Go','Rust','Blockchain','Docker','Kubernetes','CI/CD'],department:'DevOps',phone:'+1-555-1009',joining_date:'2023-04-01'},
        {id:'m10',name:'Sophia Brown',email:'dev7@promanage.com',role:'developer',skills:['Python','Flask','MongoDB','Docker','Kubernetes','Terraform'],department:'Backend',phone:'+1-555-1010',joining_date:'2023-04-10'},
        {id:'m11',name:'Daniel Lee',email:'dev8@promanage.com',role:'developer',skills:['Java','Spring Boot','Spring Security','JPA','MySQL','Maven'],department:'Backend',phone:'+1-555-1011',joining_date:'2023-04-20'},
        {id:'m12',name:'Chris Taylor',email:'prog@promanage.com',role:'programmer',skills:['Python','Data Structures','Algorithms','C++','Linux','Git'],department:'Core',phone:'+1-555-1012',joining_date:'2023-01-25'},
        {id:'m13',name:'Amanda White',email:'prog2@promanage.com',role:'programmer',skills:['Java','Algorithms','Data Structures','Design Patterns','Clean Code'],department:'Core',phone:'+1-555-1013',joining_date:'2023-02-10'},
        {id:'m14',name:'Kevin Garcia',email:'prog3@promanage.com',role:'programmer',skills:['C++','OpenGL','Game Development','Unity','Unreal Engine'],department:'Game Dev',phone:'+1-555-1014',joining_date:'2023-02-25'},
        {id:'m15',name:'Nicole Harris',email:'prog4@promanage.com',role:'programmer',skills:['Python','Machine Learning','TensorFlow','PyTorch','Computer Vision'],department:'AI/ML',phone:'+1-555-1015',joining_date:'2023-03-20'},
        {id:'m16',name:'Brian Clark',email:'prog5@promanage.com',role:'programmer',skills:['JavaScript','TypeScript','React','Node.js','GraphQL','WebSockets'],department:'Full Stack',phone:'+1-555-1016',joining_date:'2023-04-05'},
        {id:'m17',name:'Maria Lopez',email:'tester@promanage.com',role:'tester',skills:['Selenium','Cypress','Jest','TestNG','API Testing','Manual Testing'],department:'QA',phone:'+1-555-1017',joining_date:'2023-01-30'},
        {id:'m18',name:'Robert Smith',email:'tester2@promanage.com',role:'tester',skills:['Automation Testing','Performance Testing','Load Testing','Security Testing'],department:'QA',phone:'+1-555-1018',joining_date:'2023-02-15'},
        {id:'m19',name:'Jennifer Adams',email:'tester3@promanage.com',role:'tester',skills:['QA Testing','Bug Tracking','Test Planning','Regression Testing'],department:'QA',phone:'+1-555-1019',joining_date:'2023-03-05'},
        {id:'m20',name:'Thomas Wright',email:'tester4@promanage.com',role:'tester',skills:['Mobile Testing','Appium','Test Automation','CI/CD Testing'],department:'QA',phone:'+1-555-1020',joining_date:'2023-03-25'},
        {id:'m21',name:'Patricia Moore',email:'tester5@promanage.com',role:'tester',skills:['Test Strategy','Quality Assurance','Bug Reporting','Test Case Design'],department:'QA',phone:'+1-555-1021',joining_date:'2023-04-15'}
      ],
      projects: [
        {id:'p1',name:'E-Commerce Platform',description:'Modern e-commerce platform with advanced features including shopping cart, payment integration, and inventory management',status:'active',priority:'high',start_date:'2024-01-15',end_date:'2024-06-30',project_manager_id:'m1',team_ids:['m4','m5','m6','m17','m18'],budget:150000,progress:65},
        {id:'p2',name:'Mobile Banking App',description:'Secure mobile banking application with biometric authentication, transaction history, and real-time notifications',status:'active',priority:'critical',start_date:'2024-02-01',end_date:'2024-07-15',project_manager_id:'m2',team_ids:['m7','m8','m12','m19','m20'],budget:200000,progress:45},
        {id:'p3',name:'AI-Powered Analytics Dashboard',description:'Business intelligence dashboard with machine learning predictions and real-time data visualization',status:'active',priority:'high',start_date:'2024-02-20',end_date:'2024-08-01',project_manager_id:'m3',team_ids:['m10','m15','m16','m17'],budget:180000,progress:35},
        {id:'p4',name:'Cloud Migration Project',description:'Migrate legacy systems to cloud infrastructure with zero downtime and enhanced scalability',status:'active',priority:'medium',start_date:'2024-03-01',end_date:'2024-09-30',project_manager_id:'m1',team_ids:['m9','m11','m14','m20'],budget:250000,progress:25},
        {id:'p5',name:'Customer Portal Redesign',description:'Complete redesign of customer portal with modern UI/UX and improved user experience',status:'active',priority:'medium',start_date:'2024-03-15',end_date:'2024-07-31',project_manager_id:'m2',team_ids:['m5','m8','m13','m18'],budget:120000,progress:55},
        {id:'p6',name:'API Gateway Development',description:'Build scalable API gateway with rate limiting, authentication, and request routing capabilities',status:'active',priority:'high',start_date:'2024-04-01',end_date:'2024-08-15',project_manager_id:'m3',team_ids:['m4','m6','m12','m19'],budget:140000,progress:40},
        {id:'p7',name:'Blockchain Payment System',description:'Decentralized payment system using blockchain technology for secure transactions',status:'planning',priority:'low',start_date:'2024-05-01',end_date:'2024-10-31',project_manager_id:'m1',team_ids:['m12','m14','m16','m21'],budget:300000,progress:10},
        {id:'p8',name:'DevOps Pipeline Automation',description:'Automated CI/CD pipeline with containerization and infrastructure as code',status:'active',priority:'medium',start_date:'2024-04-10',end_date:'2024-08-30',project_manager_id:'m2',team_ids:['m9','m11','m15','m17'],budget:160000,progress:30},
        {id:'p9',name:'Real-time Chat Application',description:'WebSocket-based real-time chat application with file sharing and video calls',status:'active',priority:'high',start_date:'2024-03-20',end_date:'2024-07-20',project_manager_id:'m3',team_ids:['m5','m7','m16','m18'],budget:130000,progress:50},
        {id:'p10',name:'Data Warehouse Implementation',description:'Enterprise data warehouse with ETL processes and business intelligence integration',status:'active',priority:'medium',start_date:'2024-04-15',end_date:'2024-09-15',project_manager_id:'m1',team_ids:['m6','m10','m15','m20'],budget:220000,progress:20},
        {id:'p11',name:'Mobile Game Development',description:'Cross-platform mobile game with multiplayer support and in-app purchases',status:'planning',priority:'low',start_date:'2024-06-01',end_date:'2024-12-31',project_manager_id:'m2',team_ids:['m14','m16','m21'],budget:180000,progress:5},
        {id:'p12',name:'Security Audit & Compliance',description:'Comprehensive security audit and GDPR compliance implementation',status:'active',priority:'critical',start_date:'2024-05-01',end_date:'2024-08-31',project_manager_id:'m3',team_ids:['m9','m11','m18','m19'],budget:100000,progress:60}
      ],
      tasks: [
        {id:'t1',project_id:'p1',title:'Design Database Schema',description:'Create ERD and implement database tables for products, users, orders, and payments',status:'completed',priority:'high',assigned_to:'m4',created_by:'m1',created_date:'2024-01-16',due_date:'2024-01-30',estimated_hours:24,actual_hours:22,labels:['backend','database']},
        {id:'t2',project_id:'p1',title:'Implement User Authentication',description:'Build JWT-based authentication system with login, registration, and password reset',status:'completed',priority:'critical',assigned_to:'m4',created_by:'m1',created_date:'2024-01-20',due_date:'2024-02-10',estimated_hours:32,actual_hours:30,labels:['backend','security']},
        {id:'t3',project_id:'p1',title:'Product Catalog Frontend',description:'Develop responsive product listing page with search, filters, and pagination',status:'in_progress',priority:'high',assigned_to:'m5',created_by:'m1',created_date:'2024-02-01',due_date:'2024-02-28',estimated_hours:40,actual_hours:25,labels:['frontend','ui']},
        {id:'t4',project_id:'p1',title:'Shopping Cart Functionality',description:'Implement add to cart, update quantity, and remove items features',status:'in_progress',priority:'high',assigned_to:'m5',created_by:'m1',created_date:'2024-02-15',due_date:'2024-03-05',estimated_hours:28,actual_hours:18,labels:['frontend','feature']},
        {id:'t5',project_id:'p1',title:'Payment Gateway Integration',description:'Integrate Stripe payment gateway for secure payment processing',status:'todo',priority:'critical',assigned_to:'m6',created_by:'m1',created_date:'2024-02-20',due_date:'2024-03-15',estimated_hours:36,actual_hours:0,labels:['backend','integration']},
        {id:'t6',project_id:'p1',title:'Order Management System',description:'Build order processing, tracking, and history management features',status:'todo',priority:'high',assigned_to:'m6',created_by:'m1',created_date:'2024-03-01',due_date:'2024-03-25',estimated_hours:32,actual_hours:0,labels:['backend','feature']},
        {id:'t7',project_id:'p1',title:'Admin Dashboard',description:'Create admin panel for managing products, orders, users, and analytics',status:'todo',priority:'medium',assigned_to:'m5',created_by:'m1',created_date:'2024-03-10',due_date:'2024-04-05',estimated_hours:48,actual_hours:0,labels:['frontend','admin']},
        {id:'t8',project_id:'p1',title:'Write Unit Tests',description:'Write comprehensive unit tests for all backend services',status:'testing',priority:'medium',assigned_to:'m17',created_by:'m1',created_date:'2024-02-25',due_date:'2024-03-20',estimated_hours:40,actual_hours:15,labels:['testing','qa']},
        {id:'t9',project_id:'p1',title:'Integration Testing',description:'Perform end-to-end integration testing of complete user flows',status:'testing',priority:'high',assigned_to:'m18',created_by:'m1',created_date:'2024-03-05',due_date:'2024-03-30',estimated_hours:32,actual_hours:12,labels:['testing','qa']},
        {id:'t10',project_id:'p2',title:'Mobile App UI Design',description:'Design user interface mockups for iOS and Android platforms',status:'completed',priority:'high',assigned_to:'m8',created_by:'m2',created_date:'2024-02-02',due_date:'2024-02-20',estimated_hours:24,actual_hours:22,labels:['mobile','ui']},
        {id:'t11',project_id:'p2',title:'Biometric Authentication',description:'Implement fingerprint and face recognition authentication',status:'in_progress',priority:'critical',assigned_to:'m7',created_by:'m2',created_date:'2024-02-15',due_date:'2024-03-10',estimated_hours:40,actual_hours:28,labels:['mobile','security']},
        {id:'t12',project_id:'p2',title:'Transaction History API',description:'Build REST API for fetching and filtering transaction history',status:'completed',priority:'high',assigned_to:'m7',created_by:'m2',created_date:'2024-02-20',due_date:'2024-03-05',estimated_hours:28,actual_hours:26,labels:['backend','api']},
        {id:'t13',project_id:'p2',title:'Push Notifications',description:'Implement push notification system for transaction alerts and updates',status:'in_progress',priority:'medium',assigned_to:'m8',created_by:'m2',created_date:'2024-03-01',due_date:'2024-03-20',estimated_hours:32,actual_hours:18,labels:['mobile','feature']},
        {id:'t14',project_id:'p2',title:'Security Audit',description:'Conduct security audit and penetration testing',status:'testing',priority:'critical',assigned_to:'m19',created_by:'m2',created_date:'2024-03-10',due_date:'2024-04-05',estimated_hours:48,actual_hours:20,labels:['testing','security']},
        {id:'t15',project_id:'p3',title:'Data Collection Pipeline',description:'Build data ingestion pipeline from multiple sources',status:'completed',priority:'high',assigned_to:'m10',created_by:'m3',created_date:'2024-02-21',due_date:'2024-03-15',estimated_hours:40,actual_hours:38,labels:['backend','data']},
        {id:'t16',project_id:'p3',title:'ML Model Training',description:'Train machine learning models for predictive analytics',status:'in_progress',priority:'high',assigned_to:'m15',created_by:'m3',created_date:'2024-03-01',due_date:'2024-04-15',estimated_hours:60,actual_hours:35,labels:['ai','ml']},
        {id:'t17',project_id:'p3',title:'Dashboard UI Components',description:'Create reusable chart and visualization components',status:'in_progress',priority:'medium',assigned_to:'m16',created_by:'m3',created_date:'2024-03-10',due_date:'2024-04-01',estimated_hours:44,actual_hours:22,labels:['frontend','ui']},
        {id:'t18',project_id:'p3',title:'Real-time Data Updates',description:'Implement WebSocket connection for real-time dashboard updates',status:'todo',priority:'medium',assigned_to:'m16',created_by:'m3',created_date:'2024-03-20',due_date:'2024-04-10',estimated_hours:32,actual_hours:0,labels:['frontend','real-time']},
        {id:'t19',project_id:'p4',title:'Infrastructure Assessment',description:'Assess current infrastructure and identify migration requirements',status:'completed',priority:'high',assigned_to:'m9',created_by:'m1',created_date:'2024-03-02',due_date:'2024-03-20',estimated_hours:32,actual_hours:30,labels:['devops','planning']},
        {id:'t20',project_id:'p4',title:'Container Setup',description:'Set up Docker containers and Kubernetes clusters',status:'in_progress',priority:'critical',assigned_to:'m9',created_by:'m1',created_date:'2024-03-15',due_date:'2024-04-15',estimated_hours:48,actual_hours:28,labels:['devops','containers']},
        {id:'t21',project_id:'p5',title:'User Research & Wireframes',description:'Conduct user research and create wireframes for new design',status:'completed',priority:'high',assigned_to:'m8',created_by:'m2',created_date:'2024-03-16',due_date:'2024-04-01',estimated_hours:24,actual_hours:22,labels:['design','ux']},
        {id:'t22',project_id:'p5',title:'Responsive Layout Implementation',description:'Build responsive layouts for desktop, tablet, and mobile',status:'in_progress',priority:'high',assigned_to:'m5',created_by:'m2',created_date:'2024-04-01',due_date:'2024-04-20',estimated_hours:40,actual_hours:25,labels:['frontend','responsive']},
        {id:'t23',project_id:'p6',title:'API Gateway Architecture',description:'Design scalable API gateway architecture',status:'completed',priority:'high',assigned_to:'m4',created_by:'m3',created_date:'2024-04-02',due_date:'2024-04-15',estimated_hours:32,actual_hours:30,labels:['backend','architecture']},
        {id:'t24',project_id:'p6',title:'Rate Limiting Implementation',description:'Implement rate limiting middleware for API protection',status:'in_progress',priority:'high',assigned_to:'m4',created_by:'m3',created_date:'2024-04-10',due_date:'2024-04-30',estimated_hours:28,actual_hours:15,labels:['backend','security']},
        {id:'t25',project_id:'p7',title:'Blockchain Research',description:'Research blockchain technologies and select appropriate framework',status:'in_progress',priority:'medium',assigned_to:'m12',created_by:'m1',created_date:'2024-05-02',due_date:'2024-05-20',estimated_hours:40,actual_hours:12,labels:['research','blockchain']},
        {id:'t26',project_id:'p8',title:'CI/CD Pipeline Setup',description:'Configure Jenkins pipeline for automated builds and deployments',status:'in_progress',priority:'high',assigned_to:'m9',created_by:'m2',created_date:'2024-04-11',due_date:'2024-05-05',estimated_hours:36,actual_hours:20,labels:['devops','cicd']},
        {id:'t27',project_id:'p9',title:'WebSocket Server',description:'Build WebSocket server for real-time messaging',status:'completed',priority:'high',assigned_to:'m7',created_by:'m3',created_date:'2024-03-21',due_date:'2024-04-10',estimated_hours:32,actual_hours:30,labels:['backend','websocket']},
        {id:'t28',project_id:'p9',title:'Chat UI Components',description:'Develop chat interface with message bubbles and typing indicators',status:'in_progress',priority:'medium',assigned_to:'m5',created_by:'m3',created_date:'2024-04-01',due_date:'2024-04-25',estimated_hours:36,actual_hours:20,labels:['frontend','ui']},
        {id:'t29',project_id:'p10',title:'ETL Process Design',description:'Design Extract, Transform, Load processes for data warehouse',status:'in_progress',priority:'high',assigned_to:'m6',created_by:'m1',created_date:'2024-04-16',due_date:'2024-05-15',estimated_hours:44,actual_hours:25,labels:['backend','etl']},
        {id:'t30',project_id:'p12',title:'Security Vulnerability Scan',description:'Run automated security scans and identify vulnerabilities',status:'in_progress',priority:'critical',assigned_to:'m18',created_by:'m3',created_date:'2024-05-02',due_date:'2024-05-25',estimated_hours:40,actual_hours:18,labels:['security','testing']},
        {id:'t31',project_id:'p1',title:'Search Functionality',description:'Implement advanced search with filters and sorting',status:'todo',priority:'medium',assigned_to:'m5',created_by:'m1',created_date:'2024-03-20',due_date:'2024-04-10',estimated_hours:32,actual_hours:0,labels:['frontend','feature']},
        {id:'t32',project_id:'p1',title:'Wishlist Feature',description:'Add wishlist functionality for users to save favorite products',status:'todo',priority:'low',assigned_to:'m5',created_by:'m1',created_date:'2024-03-25',due_date:'2024-04-15',estimated_hours:24,actual_hours:0,labels:['frontend','feature']},
        {id:'t33',project_id:'p2',title:'Multi-language Support',description:'Add support for multiple languages in the mobile app',status:'todo',priority:'medium',assigned_to:'m8',created_by:'m2',created_date:'2024-03-25',due_date:'2024-04-20',estimated_hours:40,actual_hours:0,labels:['mobile','localization']},
        {id:'t34',project_id:'p3',title:'Dashboard Customization',description:'Allow users to customize their dashboard layout',status:'todo',priority:'low',assigned_to:'m16',created_by:'m3',created_date:'2024-04-05',due_date:'2024-04-25',estimated_hours:36,actual_hours:0,labels:['frontend','ui']},
        {id:'t35',project_id:'p4',title:'Load Balancer Configuration',description:'Configure load balancer for high availability',status:'in_progress',priority:'high',assigned_to:'m9',created_by:'m1',created_date:'2024-04-20',due_date:'2024-05-10',estimated_hours:44,actual_hours:20,labels:['devops','infrastructure']},
        {id:'t36',project_id:'p5',title:'Accessibility Audit',description:'Perform accessibility audit and fix WCAG compliance issues',status:'testing',priority:'medium',assigned_to:'m19',created_by:'m2',created_date:'2024-04-15',due_date:'2024-04-30',estimated_hours:32,actual_hours:18,labels:['testing','accessibility']},
        {id:'t37',project_id:'p6',title:'API Documentation',description:'Create comprehensive API documentation with examples',status:'todo',priority:'medium',assigned_to:'m4',created_by:'m3',created_date:'2024-04-25',due_date:'2024-05-15',estimated_hours:28,actual_hours:0,labels:['documentation','api']},
        {id:'t38',project_id:'p9',title:'File Upload Feature',description:'Implement file upload functionality for chat attachments',status:'in_progress',priority:'medium',assigned_to:'m7',created_by:'m3',created_date:'2024-04-10',due_date:'2024-04-30',estimated_hours:32,actual_hours:18,labels:['backend','feature']},
        {id:'t39',project_id:'p10',title:'Data Validation Rules',description:'Implement data validation and cleansing rules',status:'in_progress',priority:'high',assigned_to:'m6',created_by:'m1',created_date:'2024-04-20',due_date:'2024-05-10',estimated_hours:36,actual_hours:22,labels:['backend','data']},
        {id:'t40',project_id:'p12',title:'Compliance Report Generation',description:'Automate GDPR and SOC 2 compliance report generation',status:'todo',priority:'high',assigned_to:'m11',created_by:'m3',created_date:'2024-05-05',due_date:'2024-05-30',estimated_hours:48,actual_hours:0,labels:['compliance','reporting']}
      ],
      sprints: [
        {id:'s1',project_id:'p1',name:'Sprint 1 - Foundation',start_date:'2024-01-15',end_date:'2024-02-05',status:'completed',goal:'Set up project infrastructure and core features',velocity:85},
        {id:'s2',project_id:'p1',name:'Sprint 2 - User Management',start_date:'2024-02-06',end_date:'2024-02-26',status:'completed',goal:'Complete user authentication and management',velocity:90},
        {id:'s3',project_id:'p1',name:'Sprint 3 - Product Features',start_date:'2024-02-27',end_date:'2024-03-19',status:'active',goal:'Implement product catalog and shopping cart',velocity:0},
        {id:'s4',project_id:'p1',name:'Sprint 4 - Payment Integration',start_date:'2024-03-20',end_date:'2024-04-09',status:'planned',goal:'Integrate payment gateway and order management',velocity:0},
        {id:'s5',project_id:'p2',name:'Sprint 1 - Design & Auth',start_date:'2024-02-01',end_date:'2024-02-21',status:'completed',goal:'Complete UI design and authentication',velocity:88},
        {id:'s6',project_id:'p2',name:'Sprint 2 - Core Features',start_date:'2024-02-22',end_date:'2024-03-14',status:'active',goal:'Implement transaction history and notifications',velocity:0},
        {id:'s7',project_id:'p3',name:'Sprint 1 - Data Pipeline',start_date:'2024-02-20',end_date:'2024-03-12',status:'completed',goal:'Build data collection and processing pipeline',velocity:82},
        {id:'s8',project_id:'p3',name:'Sprint 2 - ML Models',start_date:'2024-03-13',end_date:'2024-04-03',status:'active',goal:'Train and deploy ML models',velocity:0}
      ],
      bugs: [
        {id:'b1',project_id:'p1',task_id:'t2',title:'Login fails with special characters in password',description:'User cannot login when password contains special characters like @#$',status:'open',severity:'high',priority:'high',reported_by:'m17',assigned_to:'m4',reported_date:'2024-02-15',steps_to_reproduce:'1. Create account with password containing @#$ 2. Try to login'},
        {id:'b2',project_id:'p1',task_id:'t3',title:'Product images not loading on mobile',description:'Product images fail to load on mobile devices with slow connections',status:'open',severity:'medium',priority:'medium',reported_by:'m18',assigned_to:'m5',reported_date:'2024-02-20',steps_to_reproduce:'1. Open product page on mobile 2. Images take too long or fail to load'},
        {id:'b3',project_id:'p2',task_id:'t11',title:'Biometric authentication crashes on iOS 15',description:'App crashes when attempting biometric authentication on iOS 15 devices',status:'open',severity:'critical',priority:'critical',reported_by:'m19',assigned_to:'m7',reported_date:'2024-03-05',steps_to_reproduce:'1. Open app on iOS 15 2. Attempt biometric login 3. App crashes'},
        {id:'b4',project_id:'p1',task_id:'t1',title:'Database connection timeout under load',description:'Database connections timeout when handling more than 100 concurrent requests',status:'resolved',severity:'high',priority:'high',reported_by:'m17',assigned_to:'m4',reported_date:'2024-01-25',resolved_date:'2024-02-05',steps_to_reproduce:'1. Simulate 100+ concurrent users 2. Observe connection timeouts'},
        {id:'b5',project_id:'p3',task_id:'t16',title:'ML model predictions inaccurate',description:'ML model predictions are off by more than 15% from actual values',status:'open',severity:'medium',priority:'medium',reported_by:'m17',assigned_to:'m15',reported_date:'2024-03-20',steps_to_reproduce:'1. Run predictions on test data 2. Compare with actual values'},
        {id:'b6',project_id:'p9',task_id:'t27',title:'WebSocket disconnects after 5 minutes',description:'WebSocket connection automatically disconnects after 5 minutes of inactivity',status:'open',severity:'low',priority:'low',reported_by:'m18',assigned_to:'m7',reported_date:'2024-04-05',steps_to_reproduce:'1. Open chat 2. Wait 5 minutes without activity 3. Connection drops'},
        {id:'b7',project_id:'p5',task_id:'t22',title:'Layout breaks on small screens',description:'Responsive layout breaks on screens smaller than 320px width',status:'open',severity:'low',priority:'low',reported_by:'m19',assigned_to:'m5',reported_date:'2024-04-10',steps_to_reproduce:'1. Open site on device with 320px width 2. Layout elements overlap'},
        {id:'b8',project_id:'p6',task_id:'t24',title:'Rate limiter allows bypass',description:'Rate limiter can be bypassed by changing IP address',status:'open',severity:'high',priority:'high',reported_by:'m20',assigned_to:'m4',reported_date:'2024-04-15',steps_to_reproduce:'1. Hit rate limit 2. Change IP 3. Can make more requests'},
        {id:'b9',project_id:'p2',task_id:'t12',title:'Transaction history missing dates',description:'Some transactions in history are missing date information',status:'resolved',severity:'medium',priority:'medium',reported_by:'m18',assigned_to:'m7',reported_date:'2024-03-01',resolved_date:'2024-03-10',steps_to_reproduce:'1. View transaction history 2. Some entries show no date'},
        {id:'b10',project_id:'p4',task_id:'t20',title:'Container fails to start on restart',description:'Docker containers fail to start automatically after server restart',status:'open',severity:'medium',priority:'medium',reported_by:'m20',assigned_to:'m9',reported_date:'2024-04-01',steps_to_reproduce:'1. Restart server 2. Containers do not auto-start'},
        {id:'b11',project_id:'p1',task_id:'t4',title:'Cart items disappear on page refresh',description:'Shopping cart items are lost when user refreshes the page',status:'open',severity:'high',priority:'high',reported_by:'m18',assigned_to:'m5',reported_date:'2024-03-10',steps_to_reproduce:'1. Add items to cart 2. Refresh page 3. Cart is empty'},
        {id:'b12',project_id:'p2',task_id:'t13',title:'Push notifications not received on Android',description:'Push notifications are not delivered to Android devices',status:'open',severity:'medium',priority:'medium',reported_by:'m19',assigned_to:'m8',reported_date:'2024-03-15',steps_to_reproduce:'1. Enable notifications on Android 2. Trigger notification 3. No notification received'},
        {id:'b13',project_id:'p3',task_id:'t17',title:'Charts not rendering on Safari',description:'Dashboard charts fail to render on Safari browser',status:'open',severity:'low',priority:'low',reported_by:'m17',assigned_to:'m16',reported_date:'2024-04-01',steps_to_reproduce:'1. Open dashboard in Safari 2. Charts show blank'},
        {id:'b14',project_id:'p6',task_id:'t24',title:'API returns 500 error for large payloads',description:'API endpoint returns 500 error when request payload exceeds 1MB',status:'open',severity:'high',priority:'high',reported_by:'m20',assigned_to:'m4',reported_date:'2024-04-20',steps_to_reproduce:'1. Send request with payload > 1MB 2. Receive 500 error'},
        {id:'b15',project_id:'p9',task_id:'t28',title:'Message delivery confirmation missing',description:'Users cannot see if their messages were delivered',status:'open',severity:'low',priority:'low',reported_by:'m18',assigned_to:'m5',reported_date:'2024-04-12',steps_to_reproduce:'1. Send message 2. No delivery indicator shown'}
      ],
      time_logs: [
        {id:'tl1',task_id:'t1',member_id:'m4',project_id:'p1',date:'2024-01-16',hours:4,description:'Created initial ERD design'},
        {id:'tl2',task_id:'t1',member_id:'m4',project_id:'p1',date:'2024-01-17',hours:6,description:'Implemented database tables'},
        {id:'tl3',task_id:'t2',member_id:'m4',project_id:'p1',date:'2024-01-20',hours:5,description:'JWT implementation'},
        {id:'tl4',task_id:'t2',member_id:'m4',project_id:'p1',date:'2024-01-21',hours:6,description:'Password reset functionality'},
        {id:'tl5',task_id:'t3',member_id:'m5',project_id:'p1',date:'2024-02-01',hours:5,description:'Product listing component'},
        {id:'tl6',task_id:'t3',member_id:'m5',project_id:'p1',date:'2024-02-02',hours:4,description:'Search and filter implementation'},
        {id:'tl7',task_id:'t10',member_id:'m8',project_id:'p2',date:'2024-02-05',hours:6,description:'iOS mockups'},
        {id:'tl8',task_id:'t10',member_id:'m8',project_id:'p2',date:'2024-02-06',hours:5,description:'Android mockups'},
        {id:'tl9',task_id:'t11',member_id:'m7',project_id:'p2',date:'2024-02-15',hours:6,description:'Fingerprint authentication'},
        {id:'tl10',task_id:'t11',member_id:'m7',project_id:'p2',date:'2024-02-16',hours:5,description:'Face recognition setup'},
        {id:'tl11',task_id:'t15',member_id:'m10',project_id:'p3',date:'2024-02-21',hours:7,description:'Data source integration'},
        {id:'tl12',task_id:'t16',member_id:'m15',project_id:'p3',date:'2024-03-01',hours:6,description:'Model training setup'},
        {id:'tl13',task_id:'t16',member_id:'m15',project_id:'p3',date:'2024-03-02',hours:5,description:'Feature engineering'},
        {id:'tl14',task_id:'t20',member_id:'m9',project_id:'p4',date:'2024-03-15',hours:6,description:'Docker configuration'},
        {id:'tl15',task_id:'t20',member_id:'m9',project_id:'p4',date:'2024-03-16',hours:5,description:'Kubernetes cluster setup'}
      ],
      comments: [
        {id:'c1',task_id:'t1',member_id:'m1',content:'Great work on the database design! Consider adding indexes for frequently queried fields.',created_date:'2024-01-18T10:30:00'},
        {id:'c2',task_id:'t2',member_id:'m17',content:'Found a security issue with password hashing. Please review.',created_date:'2024-02-12T14:20:00'},
        {id:'c3',task_id:'t3',member_id:'m5',content:'Need design approval before proceeding with implementation.',created_date:'2024-02-03T09:15:00'},
        {id:'c4',task_id:'t11',member_id:'m19',content:'Testing on iOS 15 reveals crash. Need urgent fix.',created_date:'2024-03-05T16:45:00'},
        {id:'c5',task_id:'t16',content:'Model accuracy needs improvement. Consider adding more training data.',created_date:'2024-03-15T11:30:00',member_id:'m3'}
      ],
      milestones: [
        {id:'ms1',project_id:'p1',name:'MVP Launch',description:'Minimum viable product ready for beta testing',target_date:'2024-04-30',status:'on_track'},
        {id:'ms2',project_id:'p1',name:'Payment Integration Complete',description:'All payment methods integrated and tested',target_date:'2024-03-31',status:'at_risk'},
        {id:'ms3',project_id:'p2',name:'Security Audit Complete',description:'Security audit passed and all vulnerabilities fixed',target_date:'2024-04-30',status:'on_track'},
        {id:'ms4',project_id:'p2',name:'App Store Submission',description:'Application submitted to App Store and Google Play',target_date:'2024-07-01',status:'on_track'},
        {id:'ms5',project_id:'p3',name:'ML Models Deployed',description:'Machine learning models deployed to production',target_date:'2024-04-30',status:'at_risk'},
        {id:'ms6',project_id:'p4',name:'50% Migration Complete',description:'Half of legacy systems migrated to cloud',target_date:'2024-06-30',status:'on_track'}
      ],
      session: { currentUser: null }
    };
  }

  function loadData() {
    const data = localStorage.getItem(KEY);
    if (!data) {
      const init = JSON.stringify(defaultData());
      localStorage.setItem(KEY, init);
      return JSON.parse(init);
    }
    return JSON.parse(data);
  }

  function saveData(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  // Expose loadData globally for use in login.html
  window.loadData = loadData;

  window.resetDemoData = () => { 
    if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
      localStorage.removeItem(KEY); 
      localStorage.removeItem('notifications');
      loadData(); 
        alert('Demo data reset successfully!');
    }
  };

  window.resetAllData = () => {
    if (confirm('This will reset ALL data including projects, tasks, and user accounts. Are you sure?')) {
      localStorage.clear();
      loadData();
        alert('All data has been reset successfully!');
    }
  };

  window.demoLogin = (email, password, role) => {
    const d = loadData();
    const u = d.users.find(x => x.email.toLowerCase() === email.toLowerCase() && x.role === role);
    if (u) {
      d.session.currentUser = { email: u.email, role: u.role, userId: u.id, name: u.name };
      saveData(d);
      return true;
    }
    return false;
  };

  window.getCurrentUser = () => loadData().session.currentUser;

  window.logout = () => {
    const d = loadData();
    d.session.currentUser = null;
    saveData(d);
    location.href = 'login.html';
  };

  window.ensureRole = role => {
    const u = getCurrentUser();
    if (!u || u.role !== role) {
      alert(`Not logged in as ${role}. Redirecting to login.`);
      location.href = 'login.html';
    }
  };

  window.getTeamMemberById = id => loadData().team_members.find(m => m.id === id);
  window.getProjectById = id => loadData().projects.find(p => p.id === id);
  window.getTaskById = id => loadData().tasks.find(t => t.id === id);
  window.getBugById = id => loadData().bugs.find(b => b.id === id);
  window.getSprintById = id => loadData().sprints.find(s => s.id === id);

  window.getCurrentUserMemberId = () => {
    const cur = getCurrentUser();
    if (!cur) return null;
    const d = loadData();
    const u = d.users.find(x => x.email === cur.email);
    return u?.member_id || null;
  };

  window.getAllProjects = () => loadData().projects;
  window.getAllTasks = () => loadData().tasks;
  window.getAllTeamMembers = () => loadData().team_members;
  window.getAllBugs = () => loadData().bugs;
  window.getAllSprints = () => loadData().sprints;
  window.getAllTimeLogs = () => loadData().time_logs;
  window.getAllComments = () => loadData().comments;
  window.getAllMilestones = () => loadData().milestones;

  window.getTasksByProject = projectId => loadData().tasks.filter(t => t.project_id === projectId);
  window.getTasksByAssignee = memberId => loadData().tasks.filter(t => t.assigned_to === memberId);
  window.getBugsByProject = projectId => loadData().bugs.filter(b => b.project_id === projectId);
  window.getSprintsByProject = projectId => loadData().sprints.filter(s => s.project_id === projectId);
  window.getTimeLogsByTask = taskId => loadData().time_logs.filter(tl => tl.task_id === taskId);
  window.getCommentsByTask = taskId => loadData().comments.filter(c => c.task_id === taskId);

  window.createProject = (name, description, projectManagerId, teamIds, startDate, endDate, priority, budget) => {
    const d = loadData();
    const newProject = {
      id: 'p' + (d.projects.length + 1) + Date.now().toString().slice(-4),
      name,
      description,
      status: 'active',
      priority,
      start_date: startDate,
      end_date: endDate,
      project_manager_id: projectManagerId,
      team_ids: teamIds || [],
      budget: budget || 0,
      progress: 0
    };
    d.projects.push(newProject);
    saveData(d);
    return newProject;
  };

  window.createTask = (projectId, title, description, assignedTo, createdBy, priority, dueDate, estimatedHours, labels) => {
    const d = loadData();
    const newTask = {
      id: 't' + (d.tasks.length + 1) + Date.now().toString().slice(-4),
      project_id: projectId,
      title,
      description,
      status: 'todo',
      priority,
      assigned_to: assignedTo,
      created_by: createdBy,
      created_date: new Date().toISOString().split('T')[0],
      due_date: dueDate,
      estimated_hours: estimatedHours || 0,
      actual_hours: 0,
      labels: labels || []
    };
    d.tasks.push(newTask);
    saveData(d);
    return newTask;
  };

  window.updateTaskStatus = (taskId, status) => {
    const d = loadData();
    const task = d.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = status;
    saveData(d);
    }
  };

  window.updateTaskAssignee = (taskId, assigneeId) => {
    const d = loadData();
    const task = d.tasks.find(t => t.id === taskId);
    if (task) {
      task.assigned_to = assigneeId;
    saveData(d);
    }
  };

  window.createBug = (projectId, taskId, title, description, severity, priority, reportedBy, assignedTo) => {
    const d = loadData();
    const newBug = {
      id: 'b' + (d.bugs.length + 1) + Date.now().toString().slice(-4),
      project_id: projectId,
      task_id: taskId,
      title,
      description,
      status: 'open',
      severity,
      priority,
      reported_by: reportedBy,
      assigned_to: assignedTo,
      reported_date: new Date().toISOString().split('T')[0]
    };
    d.bugs.push(newBug);
    saveData(d);
    return newBug;
  };

  window.updateBugStatus = (bugId, status) => {
    const d = loadData();
    const bug = d.bugs.find(b => b.id === bugId);
    if (bug) {
      bug.status = status;
      if (status === 'resolved') {
        bug.resolved_date = new Date().toISOString().split('T')[0];
      }
      saveData(d);
    }
  };

  window.createSprint = (projectId, name, startDate, endDate, goal) => {
    const d = loadData();
    const newSprint = {
      id: 's' + (d.sprints.length + 1) + Date.now().toString().slice(-4),
      project_id: projectId,
      name,
      start_date: startDate,
      end_date: endDate,
      status: 'planned',
      goal,
      velocity: 0
    };
    d.sprints.push(newSprint);
    saveData(d);
    return newSprint;
  };

  window.logTime = (taskId, memberId, projectId, date, hours, description) => {
    const d = loadData();
    const timeLog = {
      id: 'tl' + (d.time_logs.length + 1) + Date.now().toString().slice(-4),
      task_id: taskId,
      member_id: memberId,
      project_id: projectId,
      date,
      hours,
      description
    };
    d.time_logs.push(timeLog);
    
    // Update task actual hours
    const task = d.tasks.find(t => t.id === taskId);
    if (task) {
      task.actual_hours = (task.actual_hours || 0) + hours;
    }
    
    saveData(d);
    return timeLog;
  };

  window.addComment = (taskId, memberId, content) => {
    const d = loadData();
    const comment = {
      id: 'c' + (d.comments.length + 1) + Date.now().toString().slice(-4),
      task_id: taskId,
      member_id: memberId,
      content,
      created_date: new Date().toISOString()
    };
    d.comments.push(comment);
    saveData(d);
    return comment;
  };

  window.updateProjectProgress = (projectId) => {
    const d = loadData();
    const project = d.projects.find(p => p.id === projectId);
    if (project) {
      const tasks = d.tasks.filter(t => t.project_id === projectId);
      if (tasks.length > 0) {
        const completedTasks = tasks.filter(t => t.status === 'completed').length;
        project.progress = Math.round((completedTasks / tasks.length) * 100);
      }
      saveData(d);
    }
  };

  window.getDemoUsers = () => {
    const d = loadData();
    return d.users.map(u => ({ email: u.email, role: u.role, name: u.name }));
  };

  window.getProjectsByManager = (managerId) => {
    return loadData().projects.filter(p => p.project_manager_id === managerId);
  };

  window.getTeamMembersByRole = (role) => {
    return loadData().team_members.filter(m => m.role === role);
  };

  window.getTasksByStatus = (status) => {
    return loadData().tasks.filter(t => t.status === status);
  };

  loadData();
})();
