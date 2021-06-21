import { Sequelize, DataTypes } from "sequelize";
const db = new Sequelize('postgres://lnjtjbzjogupnb:3347350d1c81eaa341f905fc7e436ef53053e45c73aa4542a00dc0f225692086@ec2-34-250-16-127.eu-west-1.compute.amazonaws.com:5432/d5kfvb6ra7u04b',
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: { rejectUnauthorized: false }        }
  })


const People = db.define("people",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    role: DataTypes.STRING,
    area: DataTypes.STRING,
    id_image: DataTypes.STRING,
    contribution_years: DataTypes.INTEGER,
    contribution_description: DataTypes.TEXT,
    cit: DataTypes.TEXT,
    team_members: DataTypes.ARRAY(DataTypes.STRING)

  },
  {
    timestamps: false
  })

const Product = db.define("products",{

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    brief_description: DataTypes.TEXT,
    large_description: DataTypes.TEXT,
    functionalities : DataTypes.ARRAY(DataTypes.TEXT),
    area: DataTypes.STRING,
    image_product: DataTypes.STRING,
    large_image: DataTypes.STRING,
    manager: DataTypes.STRING,
  },
  {
    timestamps: false
  })


const Area = db.define("areas",{

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name_area: DataTypes.STRING,
    initial_description: DataTypes.TEXT,
    area_logo: DataTypes.STRING,
    brief_description: DataTypes.ARRAY(DataTypes.TEXT),
    small_description: DataTypes.ARRAY(DataTypes.STRING),
    small_image : DataTypes.ARRAY(DataTypes.STRING),
    large_description: DataTypes.ARRAY(DataTypes.TEXT),
    large_image: DataTypes.ARRAY(DataTypes.TEXT),

  },
  {
    timestamps: false
  })



db._tables = {People, Product, Area}

async function createData() {

  await Area.create({
    id: "1",
    name_area: "Database",
    brief_description: ["Descrizione"],
    initial_description: "qqq",
    area_logo: "/Database/db-logo.png",
    small_description: ["Choose from more than 15 ad hoc database engines including relational, key-value, document, in-memory, graph, time series, columnar, and accounting databases", "Secure relational databases that are 3 to 5 times faster than popular alternatives, or non-relational databases that give you sub-millisecond latency", "With TopTech databases, you don't have to worry about database management tasks, such as server provisioning, patching, configuration, or backups"],
    small_image: ["/areas/database-small1.jpg", "/areas/database-small2.jpg", "/areas/database-small3.jpg"],
    large_description: ["Hundreds of thousands of customers have been able to save money by migrating to TopTech managed databases, which combine the flexibility and reduced cost of open source databases with the more specific, enterprise-grade capabilities of commercial databases. Free your teams from the heavier, undifferentiated, and time-consuming tasks required for database management, so they can spend more time focusing on value-adding, application-focused jobs", "TopTech databases have been engineered in every detail to support the scalability, performance and availability requirements of modern applications globally distributed with microservices-based architectures. That's why we are able to deliver 3-5 times better performance than more common alternatives while being able to scale to support more than 20 million requests per second and provide storage per petabyte of data", "The monolithic databases offered by old-fashioned vendors are not flexible enough to meet different customer needs. Your developers can now build highly distributed applications that require multiple database types to deliver reliable performance at scale. With an ever-growing number of 15 database engines, TopTech provides the largest selection of commercial-grade dedicated databases that enable development teams to build and innovate faster, whatever the use case or scale"],
    large_image: ["/areas/database-large1.jpg", "/areas/database-large2.jpg", "/areas/database-large3.jpg"]
  })

  await Area.create({
    id: "2",
    name_area: "Security",
    brief_description: ["Descrizione"],
    initial_description: "qqq",
    area_logo: "/Database/db-logo.png",
    small_description: ["Network and Application Protection Services enable you to apply granular security policy to network control points across your organization", "TopTech services help you examine and filter traffic to prevent unauthorized access beyond host, network, and application level boundaries", "TopTech identifies threats by continuously monitoring network activity and account behavior within the cloud environment"],
    small_image: ["/areas/security-small1.jpg", "/areas/security-small2.jpg", "/areas/security-small3.jpg"],
    large_description: ["Using TopTech, you get the control and security you need to securely manage your business with the most flexible and secure cloud computing environment available today. As a TopTech customer, you will benefit from TopTech data centers and a network designed to protect information, identity, applications and devices. With TopTech, you can improve your ability to meet critical security and compliance requirements, such as data localization, security, and privacy, with our comprehensive services and features", "TopTech protects your privacy. TopTech customers can build solutions on the most secure global infrastructure, knowing that their data remains their property, and they also have the ability to encrypt, move and manage its retention. All data passing through the TopTech global network connecting our data centers and regions is automatically encrypted physically before leaving our secure facilities. There are also additional layers of encryption: for example, all VPC transregional peer traffic and TLS connections for customers or service-to-service", "Extend the benefits of TopTech by using security technology and consulting services from familiar solution providers you already know and trust. We have carefully selected providers with deep expertise and proven success ensuring every stage of cloud adoption, from initial migration to ongoing day-to-day management. To meet your compliance efforts, TopTech regularly obtains third-party validation for thousands of global compliance requirements that we continuously monitor to help you meet security and compliance standards"],
    large_image: ["/areas/security-large1.jpg", "/areas/security-large2.jpg", "/areas/security-large3.jpg"]
  })

  await Area.create({
    id: "3",
    name_area: "IoT",
    brief_description: ["Descrizione"],
    initial_description: "qqq",
    area_logo: "/Database/db-logo.png",
    small_description: ["TopTech IoT is built on a reliable, secure, and scalable cloud infrastructure for billions of different devices and trillions of messages", "TopTech IoT is the only vendor that can bring together data management and rich analytics into services that are easy to use and specifically designed for disturbed IoT data", "TopTech IoT customers build industrial IoT applications for quality and preventative maintenance and to monitor operations remotely"],
    small_image: ["/areas/IoT-small1.jpg", "/areas/IoT-small2.jpg", "/areas/IoT-small3.jpg"],
    large_description: ["The technological evolution of the Internet of Things can be declined in very transversal areas. Companies in any sector, for example, can now collect a lot of information on the functioning of devices and on the people who use them through the multiplication and evolution of connected devices. But how to enhance this great information \"child\" of connected objects? The definition of appropriate strategies to enhance the data collected by IoT devices, both in the consumer and business sectors, is an increasingly important issue for companies. Let's talk about Big Data, a real value commodity", "The intersection between the Internet of Things and the Blockchain world is characterized by great potential. The Blockchain can act as a guarantor of the identity of the different nodes of the network (for example through the use of certificates or digital keys) and as a certifier of the origin and integrity of the data collected by the connected objects thanks to the affixing of a digital stamp and to the recording of the temporal instance. While it is true that the Blockchain can make significant contributions in terms of security and data integrity of smart objects, it is also true that it can only be managed externally with respect to such devices", "The interest on the part of companies in Internet of Things startups is growing exponentially, helping to fuel a virtuous cycle of collaborations and innovation. Worldwide, funding for new business initiatives is increasing in the various application areas (Smart Car, Smart Home, Smart City and Smart Agriculture in particular) and there is great excitement in Italy as well. Particularly fertile, in this IoT-startup binomial, is the terrain of Smart Energy with many innovative solutions that promise to improve the energy efficiency of homes, buildings and industrial plants"],
    large_image: ["/areas/IoT-large1.jpg", "/areas/IoT-large2.jpg", "/areas/IoT-large3.jpg"]
  })

  await Area.create({
    id: "4",
    name_area: "Machine Learning",
    brief_description: ["Descrizione"],
    initial_description: "qqq",
    area_logo: "/Database/db-logo.png",
    small_description: ["TopTech offers the broadest and most complete set of machine learning services, supports cloud infrastructure, and puts machine learning in the hands of all professionals", "TopTech helps more than 100,000 customers accelerate their journey to machine learning based on their business needs", "Enhance the customer service experience and reduce costs by integrating machine learning into the contact center"],
    small_image: ["/areas/machinelearning-small1.jpg", "/areas/machinelearning-small2.jpg", "/areas/machinelearning-small3.jpg"],
    large_description: ["Not long ago, marketers relied on intuition to segment customers, breaking them into groups for targeted campaigns. Today, machine learning enables data scientists to use clustering and classification algorithms to divide customers into groups based on specific characteristics. These groups consider customer differences based on multiple dimensions, such as demographics, browsing behavior, and affinity. Linking these characteristics to purchasing behavior patterns allows data savvy companies to launch personalized marketing campaigns that are more effective than generic sales incentive campaigns", "Machine learning has enormous application potential in the science, healthcare, construction and energy sectors. For example, image classification uses machine learning algorithms to label a predefined group of categories or any input image. It allows companies to create 3D construction plan templates based on 2D designs, facilitate photo tagging in social media, communicate clinical diagnoses and much more. Deep learning methods such as neural networks are often used for image classification because they can more effectively identify the most relevant features in the presence of potential complications", "Machine learning is a subset of artificial intelligence (AI) that is concerned with creating systems that learn or improve performance based on the data they use. Artificial intelligence is a generic term and refers to systems or machines that mimic human intelligence. The terms machine learning and artificial intelligence are often used together and interchangeably, but they don't mean the same thing. An important distinction is that although everything related to machine learning falls under artificial intelligence, artificial intelligence doesn't just include machine learning"],
    large_image: ["/areas/machinelearning-large1.jpg", "/areas/machinelearning-large2.jpg", "/areas/machinelearning-large3.jpg"]
  })

  await Product.create({
    id: "1",
    name: "TopTech Cloudant",
    brief_description: "The data layer for hyperscale, resilient and globally available applications, based on open source Apache CouchDB",
    large_description: "A fully managed, distributed database optimized for high workloads and fast growing web and mobile apps, IBM® Cloudant® is available as a TopTech Cloud® service with an SLA of 99.99%. Cloudant adapts flexibly to throughput and storage, and its API and replication protocols are compatible with Apache CouchDB for hybrid or multicloud architectures",
    functionalities : ["-\tDeploy an instance, create databases and adjust the throughput independently and archive data to meet application requirements", "-\tEncrypt all data, with optional user-defined encryption key management via IBM Key Protect, and integrate with IBM Identity and Access Management", "-\tGain continuous availability with Cloudant distributing data across all Availability Zones and 6 Regions to meet app performance and disaster recovery requirements"],
    area: "Database",
    image_product: "/Database/product image1.jpg",
    large_image: "/Database/large image1.jpg",
    manager: "Martin Atoche",
  })

  await Product.create({
    id: "2",
    name: "TopTech Elasticache",
    brief_description: "Memcached-compatible managed in-memory store. with sub-millisecond latencies for applications operating in real time",
    large_description: "TopTech ElastiCache for Memcached is a Memcached-compatible in-memory key-value store service that can be used as a cache or datastore. It offers the performance, intuitiveness and ease of use of Memcached. ElastiCache for Redis is secure, scalable, and fully managed; perfect for use cases where the most used data needs to be in memory. It is an ideal choice for web applications, mobile apps, video games, advertising, and e-commerce",
    functionalities : ["TopTech ElastiCache for Memcached acts as an in-memory datastore and cache to support demanding applications requiring sub-millisecond response times. Using an optimized stack on dedicated nodes, Amazon ElastiCache ensures consistent high performance", "TopTech ElastiCache for Memcached supports Amazon VPC, which allows you to isolate a cluster in the range of IP addresses chosen for the nodes, using them to connect to the application. ElastiCache continuously monitors nodes and applies any patches to keep the environment safe at all times", "Memcached is one of the most popular in-memory object caching systems. ElastiCache is compliant with Memcached specifications, so the tools most used in such environments are fully compatible with the service"],
    area: "Database",
    image_product: "/Database/product image2.jpg",
    large_image: "/Database/large image2.jpg",
    manager: "Martin Atoche",
  })

  await Product.create(
    {
      id: "3",
      name: "TopTech db2-warehouse",
      brief_description: "A highly flexible, client-managed operational data warehouse for private clouds and containerized deployments",
      large_description: "Client managed containers combined for easy portability across platforms. Fast and flexible deployment, combined with automated scalability. Integrated machine learning, SMP and MP processing and in-database analytics, combined with IBM BLU Acceleration®. All of these features are designed to bring AI to your business faster and easier than ever",
      functionalities : ["Deploy a preconfigured data warehouse in minutes on the infrastructure supported by Docker containers of your choice. Gain elastic scalability and ease of updating and upgrading", "Apply in-database analytics wherever data resides. Open source Spark and R provide predictive modeling algorithms built directly into the database, enabling faster and more efficient business AI", "It uses Spark and BLU Acceleration in-memory columnar processing with an MPP cluster architecture to speed up complex queries and predictive modeling, testing and implementations for data scientists"],
      area: "Database",
      image_product: "/Database/product image3.jpg",
      large_image: "/Database/large image3.jpg",
      manager: "Martin Atoche",
    })

  await Product.create(
    {
      id: "4",
      name: "TopTech DataRiskManager",
      brief_description: "Detect, analyze and visualize data related business risks",
      large_description: "What you don't know can be harmful. Identify and help prevent risks to sensitive data, which can impact business processes, operations and competitive positioning. IBM Data Risk Manager provides executives and their teams with a risk control center for data that can be used by the company, which allows them to detect, analyze and visualize business risks related to the data, so that they can intervene with actions to protect the business",
      functionalities : ["Identify sensitive, high-value business information assets at risk from internal and external threats. Provide an end-to-end view of the metadata associated with the most valuable data", "Provide early visibility into potential risks that can affect sensitive business data, processes and information assets", "Convey meaning and value to executives, through a risk control center for data that can be used by the company. Facilitate conversations with IT, security and lines of business to improve processes and mitigate risks"],
      area: "Security",
      image_product: "/Security/product image1.jpg",
      large_image: "/Security/large image1.png",
      manager: "Osmani Martinez",
    })

  await Product.create(
    {
      id: "5",
      name: "TopTech Macie",
      brief_description: "Discover and protect your sensitive data at scale",
      large_description: "TopTech Macie is a fully managed service that leverages machine learning and pattern matching to identify your sensitive data and protect its privacy and security on AWS.\n" +
        "As organizations manage ever-increasing volumes of data, the identification and protection of sensitive data on a large scale can be quite complex and time-consuming and costly. TopTech Macie automates the discovery of sensitive data at scale and reduces the costs related to the protection of your data. Macie automatically provides an inventory of Amazon S3 buckets including unencrypted bucket list, publicly accessible buckets, and shared buckets with AWS accounts other than those defined in AWS Organizations",
      functionalities : ["TopTech Macie leverages machine learning and pattern matching to detect sensitive data at scale efficiently and profitably. Macie automatically detects a vast and ever-expanding set of various types of sensitive data, including identifying information such as names, addresses and credit card numbers", "TopTech Macie allows you to constantly monitor the security and privacy of your data stored on Amazon S3. Macie automatically and continuously evaluates all your S3 buckets and alerts you to any unencrypted, publicly accessible, or shared buckets with AWS accounts other than those defined in AWS Organizations", "Getting started on TopTech Macie is quick and simple: just a click inside the AWS management console or a single API call. With multi-account support through AWS Organizations, you can enable Macie notifications on all your accounts with just a few clicks"],
      area: "Security",
      image_product: "/Security/product image2.jpg",
      large_image: "/Security/large image2.jpg",
      manager: "Osmani Martinez",
    })

  await Product.create(
    {
      id: "6",
      name: "TopTech Cognito",
      brief_description: "Simple and secure access, registration and access control tools",
      large_description: "TopTech Cognito allows users to add user registration, access and access control tools to web and mobile apps quickly and easily. TopTech Cognito allows you to scale resources for millions of users and supports access with social identity providers such as Apple, Facebook, Google and Amazon and corporate identity providers via SAML 2.0 and OpenID Connect",
      functionalities : ["TopTech Cognito User Pools provide a user directory that can recalibrate resources for hundreds of millions of users. As a fully managed service, user pools are simple to set up and do not require server infrastructure provisioning", "TopTech Cognito User Pools are a standards-based identity provider, which supports identity and access management standards such as Oauth 2.0, SAML 2.0 and OpenID Connect", "TopTech Cognito supports multi-factor authentication and encryption of data in transit and at rest. TopTech Cognito is HIPAA eligible and compliant with PCI DSS, SOC, ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018 e ISO 9001"],
      area: "Security",
      image_product: "/Security/product image3.jpg",
      large_image: "/Security/large image3.jpg",
      manager: "Osmani Martinez",
    })

  await Product.create(
    {
      id: "7",
      name: "TopTech Maximo",
      brief_description: "Intelligent asset management, monitoring, predictive maintenance and reliability, all in a single platform",
      large_description: "TopTech Maximo Application Suite helps promote operational resilience and reliability with condition-based asset maintenance. With extended access to asset performance management, EAM and CMMS applications, teams can reach across the enterprise to unify operations and ensure business continuity, even under conditions of rapid change or disruption.\n" +
        "Key Features of Maximo Application Suite: Integrated Application Suite, Simplified Licensing, including pricing metrics and single contract, Multi-cloud deployment, Comprehensive asset view\n",
      functionalities : ["Organizations rely on hundreds, if not millions of assets to stay operational - and those assets are becoming smarter. In fact, the number of connected IoT devices around the world is projected to reach 125 billion by 2030", "Enterprise asset management (EAM) is critical to gaining the insights and visibility needed to manage and control intelligent equipment and assets", "Renew your operations with EAM solutions, designed to optimize the quality and utilization of assets throughout their lifecycle, increase productive uptime through preventive and predictive maintenance, promote efficiency and reduce operational costs"],
      area: "IoT",
      image_product: "/IoT/product image1.jpg",
      large_image: "/IoT/large image1.png",
      manager: "Paolo Bozzola",
    })

  await Product.create(
    {
      id: "8",
      name: "TopTech GreenGrass",
      brief_description: "Brings local compute, messaging, data management, synchronization, and ML inference to edge devices",
      large_description: "TopTech IoT Greengrass extends AWS linearly to edge devices so that they can act locally on the data they generate, while continuing to use the cloud for management, analysis and durable storage. With TopTech IoT Greengrass, connected devices can run TopTech Lambda functions, Docker containers or both, make predictions based on machine learning models, keep device data synchronized and communicate securely with other devices, even when not connected to the Internet. . With TopTech IoT Greengrass you can use familiar programming languages and models to create and test your device software in the cloud and then distribute it to devices",
      functionalities : ["TopTech IoT Greengrass allows connected devices to work even with an intermittent connection to the cloud. TopTech IoT Greengrass devices can collect, process and export data streams both online and offline. When the device connects again, TopTech IoT Greengrass synchronizes the data on the device with cloud services such as TopTech IoT Core, TopTech IoT Analytics or TopTech Kinesis, providing continuous functionality regardless of connectivity", "TopTech IoT Greengrass authenticates and encrypts device data for local and cloud communications, so there will never be any data exchange between devices and the cloud without identity checks. You can also take advantage of hardware-protected end-to-end encryption for messages sent between a TopTech IoT Greengrass Core and TopTech Cloud and messages between a TopTech IoT Greengrass Core and other local devices using the TopTech IoT device SDK", "You can get insights at a lower cost by programming the device to filter data locally and transmit only the data needed for your applications to the cloud. This reduces the amount of raw data transmitted to the cloud, minimizing costs and increasing the quality of data sent to the cloud"],
      area: "IoT",
      image_product: "/IoT/product image2.jpg",
      large_image: "/IoT/large image2.png",
      manager: "Paolo Bozzola",
    })

  await Product.create(
    {
      id: "9",
      name: "TopTech IoT-analytics",
      brief_description: "Analysis for IoT devices",
      large_description: "TopTech IoT Analytics automates all the difficult steps required to analyze data from IoT devices. TopTech IoT Analytics filters, transforms and enriches IoT data before storing it in a time series datastore for analysis. The service can be configured to acquire only the necessary data from devices, apply mathematical transformations to process the data, and enrich it with device-specific metadata, such as device type and location, before storing the processed data. Then, you can analyze the data by running queries using the built-in SQL query engine or perform more complex analysis and inferences for machine learning. TopTech IoT Analytics simplifies the use of machine learning by including predefined templates for common use cases of IoT",
      functionalities : ["While you provide the analysis, TopTech IoT Analytics automates its execution at the time and place you prefer. TopTech IoT Analytics imports custom created code containers, generated in external tools like Matlab, Octave etc., and executes them according to your schedule to generate operational insights, so that you have more time to focus on what you do best", "TopTech IoT Analytics stores the device's processed data in an optimized time series datastore to provide fast response times on IoT queries. Additionally, raw data is automatically stored for later processing or reprocessing for another use case", "TopTech IoT Analytics is a fully managed service whose price depends on consumption, which automatically scales to support up to petabytes of IoT data. With IoT Analytics, you can analyze your entire fleet of connected devices without having to manage hardware or infrastructure"],
      area: "IoT",
      image_product: "/IoT/product image3.jpg",
      large_image: "/IoT/large image3.jpg",
      manager: "Paolo Bozzola",
    })

  await Product.create(
    {
      id: "10",
      name: "TopTech Watson-Konwledge Catalog",
      brief_description: "Catalog, interpret, regulate, analyze and distribute business-ready data to your data citizens",
      large_description: "TopTech Watson® Knowledge Catalog, based on IBM Cloud Pak ™ for Data, is a data catalog tightly integrated with an enterprise data governance platform. A data catalog allows data citizens to easily find, organize and understand the data they need.\n" +
        "Watson Knowledge Catalog enables business users to locate, manage, categorize and share data assets, datasets, analytical models and their relationships with other members of the organization. It serves as a single source of truth for data engineers, data stewards, data scientists and business analysts to gain self-service access to data they can trust\n",
      functionalities : ["Discover the most relevant assets faster with intelligent suggestions provided by Watson ™ technology and colleagues within your organization", "Protect data from misuse and securely share assets through automated dynamic masking of sensitive data items, then proactively manage policies", "Seamless integration with Watson Studio helps data citizens quickly drive productive use of data in a powerful suite of data science, AI, machine learning, and deep-learning tools to build, train, and deploy models"],
      area: "Machine Learning",
      image_product: "/MachineLearning/product image1.jpg",
      large_image: "/MachineLearning/large image1.jpg",
      manager: "Roberto Clemente",
    })

  await Product.create(
    {
      id: "11",
      name: "TopTech SageMaker-Debugger",
      brief_description: "Optimize ML models with real-time monitoring of training metrics and system resources",
      large_description: "TopTech SageMaker Debugger can now help you train models faster by automatically profiling and monitoring system resource utilization and sending alerts when resource bottlenecks such as over-utilized CPUs are identified. You can visually monitor and profile system resources including CPUs, GPUs, network, and memory during training within Amazon SageMaker Studio so you can continuously improve resource utilization. SageMaker Debugger correlates system resource usage to different phases of the training job and for specific points in time during training, and provides recommendations on how to adjust resource utilization to help you re-allocate resources for maximum efficiency. Monitoring and profiling works across all leading deep learning frameworks including PyTorch and TensorFlow, without requiring any code changes in your training scripts. Monitoring and profiling of system resources happens in real-time, helping you optimize your ML models faster and at scale",
      functionalities : ["TopTech SageMaker Debugger can reduce troubleshooting during training from days to minutes by automatically detecting and alerting you to remediate common training errors such as gradient values becoming too large or too small", "Alerts can be viewed in TopTech SageMaker Studio or configured through Amazon CloudWatch. Additionally, the SageMaker Debugger SDK enables you to automatically detect new classes of model-specific errors such as data sampling, hyperparameter values, and out of bound values", "TopTech SageMaker Debugger automatically monitors utilization of system resources such as GPUs, CPUs, network, and memory, and profiles your training jobs to collect detailed ML framework metrics"],
      area: "Machine Learning",
      image_product: "/MachineLearning/product image2.jpg",
      large_image: "/MachineLearning/large image2.jpeg",
      manager: "Roberto Clemente",
    })

  await Product.create(
    {
      id: "12",
      name: "TopTech Pipelines",
      brief_description: "First purpose-built CI/CD service for machine learning",
      large_description: "TopTech SageMaker Pipelines is the first purpose-built, easy-to-use continuous integration and continuous delivery (CI/CD) service for machine learning (ML). With SageMaker Pipelines, you can create, automate, and manage end-to-end ML workflows at scale. Orchestrating workflows across each step of the machine learning process (e.g. exploring and preparing data, experimenting with different algorithms and parameters, training and tuning models, and deploying models to production) can take months of coding. Since it is purpose-built for machine learning, SageMaker Pipelines helps you automate different steps of the ML workflow, including data loading, data transformation, training and tuning, and deployment. With SageMaker Pipelines, you can build dozens of ML models a week, manage massive volumes of data, thousands of training experiments, and hundreds of different model versions. You can share and re-use workflows to recreate or optimize models, helping you scale ML throughout your organization",
      functionalities : ["TopTech SageMaker Pipelines logs every step of your workflow, creating an audit trail of model components such as training data, platform configurations, model parameters, and learning gradients. Audit trails can be used to recreate models and help support compliance requirements", "TopTech SageMaker Pipelines brings CI/CD practices to machine learning, such as maintaining parity between development and production environments, version control, on-demand testing, and end-to-end automation, helping you scale ML throughout your organization", "You can be more efficient and scale faster by storing and reusing the workflow steps you create in Pipelines. You can also get started quickly with built-in templates to build, test, register, and deploy models so you can get started with CI/CD in your ML environment quickly"],
      area: "Machine Learning",
      image_product: "/MachineLearning/product image3.jpg",
      large_image: "/MachineLearning/large image3.jpg",
      manager: "Roberto Clemente",
    })

  await People.create({
    id: "1",
    name: "Dario",
    surname: "Fracassetti",
    role: "Data scientist",
    area: "Database",
    id_image: "/people/dario-fracassetti.jpg",
    contribution_years: 5,
    contribution_description: "Contribution in the company: with a foundation in Statistics, Analytics and modelling, coupled with a strong business sense, Dario helps the company interpret and manage data and solve complex problems using expertise in a variety of data niches.",
    cit: "Today I have a lot of challenges, as create a powerful and united team, in which everyone is capable of having the personal and professional development he wants.",
    team_members: ["Martin Atoche", "Jonathan Mancilla"]

  })

  await People.create(
    {
      id: "2",
      name: "Martin",
      surname: "Atoche",
      role: "Project manager",
      area: "Database",
      id_image: "/people/martin-atoche.jpg",
      contribution_years: 9,
      contribution_description: "Project managers play as coordinators among stakeholders in completing product handover and accumulating knowledge asset, thus indirectly enhancing organizational strategic value integration in project ending.",
      cit: "“Project management is like juggling three balls – time, cost and quality. Program management is like a troupe of circus performers standing in a circle, each juggling three balls and swapping balls from time to time.”",
      team_members: ["Dario Fracassetti", "Jonathan Mancilla"]

    }
  )

  await People.create(
    {
      id: "3",
      name: "Jonathan",
      surname: "Mancilla",
      role: "Senior software engineer",
      area: "Database",
      id_image: "/people/jonathan-mancilla.jpg",
      contribution_years: 7,
      contribution_description: "In the role of Senior Software Engineer, Jonathan develops information systems by studying operations; designing, developing and installing software solutions; support and develop software team. Jonathan leads a team of developers responsible for building new and support existing websites.",
      cit: "“It is better to lead from behind and to put others in front, especially when you celebrate victory when nice things occur. You take the front line when there is danger. Then people will appreciate your leadership.”",
      team_members: ["Martin Atoche", "Dario Fracassetti"]

    })

  await People.create(
    {
      id: "4",
      name: "Osmani",
      surname: "Martinez",
      role: "Project manager",
      area: "Security",
      id_image: "/people/osmany-martinez.jpg",
      contribution_years: 10,
      contribution_description: "Project managers play as coordinators among stakeholders in completing product handover and accumulating knowledge asset, thus indirectly enhancing organizational strategic value integration in project ending",
      cit: "“Know when to cut your losses if necessary. Don’t let your desire to succeed be the enemy of good judgment. If Napoleon had left Moscow immediately, he may have returned with a salvageable army.”",
      team_members: ["Camilla Stefani", "Ilenia Panicucci"]

    })

  await People.create(
    {
      id: "5",
      name: "Camilla",
      surname: "Stefani",
      role: "IT Security specialist",
      area: "Security",
      id_image: "/people/Camilla-Stefani-1.jpg",
      contribution_years: 8,
      contribution_description: "The role of Camilla is to develop plans to safeguard computer files against unauthorized modification, destruction or disclosure. Choose, implement, monitor and upgrade computer anti-virus and malware protection systems. Encrypt data transmissions and erect firewalls to conceal confidential information during transmit",
      cit: "“As you navigate through the rest of your life, be open to collaboration. Other people and other people’s ideas are often better than your own. Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life.”",
      team_members: ["Osmani Martinez", "Ilenia Panicucci"]

    })

  await People.create(
    {
      id: "6",
      name: "Ilenia",
      surname: "Panicucci",
      role: "Senior software engineer",
      area: "Security",
      id_image: "/people/ilenia-panicucci.jpg",
      contribution_years: 9,
      contribution_description: "In the role of Senior Software Engineer, Ilenia develops information systems by studying operations; designing, developing and installing software solutions; support and develop software team. Ilenia leads a team of developers responsible for building new and support existing websites",
      cit: "“People are more inclined to be drawn in if their leader has a compelling vision. Great leaders help people get in touch with their own aspirations and then will help them forge those aspirations into a personal vision.”",
      team_members: ["Osmani Martinez", "Camilla Stefani"]

    })

  await People.create(
    {
      id: "7",
      name: "Paolo",
      surname: "Bozzola",
      role: "Project manager",
      area: "IoT",
      id_image: "/people/Paolo-Bozzola-1.jpg",
      contribution_years: 9,
      contribution_description: "Project managers play as coordinators among stakeholders in completing product handover and accumulating knowledge asset, thus indirectly enhancing organizational strategic value integration in project ending",
      cit: "“To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.”",
      team_members: ["Luca Valentini", "Giancarlo Vitali"]

    })

  await People.create(
    {
      id: "8",
      name: "Luca",
      surname: "Valentini",
      role: "Computer scientist",
      area: "IoT",
      id_image: "/people/Luca Valentini.jpg",
      contribution_years: 5,
      contribution_description: "Luca uses technology to solve problems and prepare for the future. They also write and program software to create applications. Their primary focus, however, is to validate and develop models for interaction between people and computers or software and devices",
      cit: "“In poorly run projects, problems can go undetected until the project fails. It’s like the drip … drip … drip of a leaky underground pipe. Money is being lost, but you don’t see it until there is an explosion.” ",
      team_members: ["Paolo Bozzola", "Giancarlo Vitali"]

    })

  await People.create(
    {
      id: "9",
      name: "Giancarlo",
      surname: "Vitali",
      role: "Senior software engineer",
      area: "IoT",
      id_image: "/people/Giancarlo Vitali.png",
      contribution_years: 7,
      contribution_description: "In the role of Senior Software Engineer, Giancarlo develops information systems by studying operations; designing, developing and installing software solutions; support and develop software team. Giancarlo leads a team of developers responsible for building new and support existing websites",
      cit: "“Know when to cut your losses if necessary. Don’t let your desire to succeed be the enemy of good judgment. If Napoleon had left Moscow immediately, he may have returned with a salvageable army.”",
      team_members: ["Paolo Bozzola", "Luca Valentini"]

    })

  await People.create(
    {
      id: "10",
      name: "Roberto",
      surname: "Clemente",
      role: "Project manager",
      area: "Machine Learning",
      id_image: "/people/roberto-clemente.jpg",
      contribution_years: 10,
      contribution_description: "Project managers play as coordinators among stakeholders in completing product handover and accumulating knowledge asset, thus indirectly enhancing organizational strategic value integration in project ending",
      cit: "“The challenge of leadership is to be strong, but not rude; be kind, but not weak; be bold, but not bully; be thoughtful, but not lazy; be humble, but not timid; be proud, but not arrogant; have humor, but without folly.”",
      team_members: ["Luisa Bianchi", "Bruno De Luca"]

    })

  await People.create(
    {
      id: "11",
      name: "Luisa",
      surname: "Bianchi",
      role: "Support specialist",
      area: "Machine Learning",
      id_image: "/people/Luisa Bianchi.jpg",
      contribution_years: 6,
      contribution_description: "Inside the company Luisa provides assistance and maintenance to all computer systems and hardware. Her work includes installing, configuring, and updating hardware and software, as well as fixing any issue related to the equipment that may come up on a daily basis",
      cit: "“The very essence of leadership is that you have to have a vision. It’s got to be a vision you articulate clearly and forcefully on every occasion. You can’t blow an uncertain trumpet.”",
      team_members: ["Roberto Clemente", "Bruno De Luca"]

    })

  await People.create(
    {
      id: "12",
      name: "Bruno",
      surname: "De Luca",
      role: "Senior software engineer",
      area: "Machine Learning",
      id_image: "/people/Bruno De Luca.jpg",
      contribution_years: 7,
      contribution_description: "In the role of Senior Software Engineer, Bruno develops information systems by studying operations; designing, developing and installing software solutions; support and develop software team. Bruno leads a team of developers responsible for building new and support existing websites",
      cit: "“First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.”",
      team_members: ["Roberto Clemente", "Luisa Bianchi"]

    })

  await People.create(
    {
      id: "13",
      name: "Fabrizio",
      surname: "Venditti",
      role: "CEO",
      area: "",
      id_image: "/people/CEOfabrizio-venditti.jpg",
      contribution_years: 10,
      contribution_description: "Dr. Venditti, in the role of chief executive officer, is the highest-ranking executive in the company, whose primary responsibilities include making major corporate decisions, managing the overall operations and resources of a company, acting as the main point of communication between the board of directors (the board) and corporate operations and being the public face of the company",
      cit: "“A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. He does not set out to be a leader, but becomes one by the equality of his actions and the integrity of his intent.”",
      team_members: ["Paola Falcone", "Antonella Barberis"]

    })

  await People.create(
    {
      id: "14",
      name: "Paola",
      surname: "Falcone",
      role: "General manager",
      area: "",
      id_image: "/people/paola-falcone.jpg",
      contribution_years: 10,
      contribution_description: "The general manager is expected to improve efficiency and increase profits while managing the overall operations of a company or division. Paola’s duties include managing staff, overseeing the budget, employing marketing strategies, and many other facets of the business",
      cit: "“Inspire your people to think like entrepreneurs, and whatever you do, treat them like adults. The hardest taskmaster of all is a person’s own conscience, so the more responsibility you give people, the better they will work for you.”",
      team_members: ["Fabrizio Venditti", "Antonella Barberis"]

    })

  await People.create(
    {
      id: "15",
      name: "Antonella",
      surname: "Barberis",
      role: "HR manager",
      area: "",
      id_image: "/people/antonella-barberisHR.jpg",
      contribution_years: 9,
      contribution_description: "The Antonella’s role is to manage strategies to ensure the organisation reaches its business goals, as well as contributing significantly to the corporate decision-making process, which includes assessments for current employees and predictions for future ones based on business demands",
      cit: "“True leadership lies in guiding others to success. In ensuring that everyone is performing at their best, doing the work they are pledged to do and doing it well.”",
      team_members: ["Fabrizio Venditti", "Paola Falcone"]

    }
  )



}



async function createDB() {
  return new Promise(async (res, rej) => {
    await db.sync()
    //await createData()
    res(db)
  })
  return db


}

module.exports = createDB
