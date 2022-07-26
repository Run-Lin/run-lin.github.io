"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},o=void 0,i={unversionedId:"intro",id:"intro",title:"intro",description:"\x3c!--",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},s={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Shuffle Process with Uniffle",id:"shuffle-process-with-uniffle",level:2},{value:"Shuffle file format",id:"shuffle-file-format",level:2},{value:"Supported Spark Version",id:"supported-spark-version",level:2},{value:"Supported MapReduce Version",id:"supported-mapreduce-version",level:2},{value:"Building Uniffle",id:"building-uniffle",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Deploy Coordinator",id:"deploy-coordinator",level:3},{value:"Deploy Shuffle Server",id:"deploy-shuffle-server",level:3},{value:"Deploy Spark Client",id:"deploy-spark-client",level:3},{value:"Support Spark dynamic allocation",id:"support-spark-dynamic-allocation",level:3},{value:"Deploy MapReduce Client",id:"deploy-mapreduce-client",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Coordinator",id:"coordinator",level:3},{value:"Shuffle Server",id:"shuffle-server",level:3},{value:"Shuffle Client",id:"shuffle-client",level:3},{value:"LICENSE",id:"license",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Support",id:"support",level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-uniffle"},"What is Uniffle"),(0,n.kt)("p",null,"Uniffle is a Remote Shuffle Service, and provides the capability for Apache Spark applications\nto store shuffle data on remote servers."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/actions/workflows/build.yml"},(0,n.kt)("img",{parentName:"a",src:"https://github.com/apache/incubator-uniffle/actions/workflows/build.yml/badge.svg?branch=master&event=push",alt:"Build"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://codecov.io/gh/apache/incubator-uniffle"},(0,n.kt)("img",{parentName:"a",src:"https://codecov.io/gh/apache/incubator-uniffle/branch/master/graph/badge.svg",alt:"Codecov"}))),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rss Architecture",src:a(9440).Z,width:"1645",height:"802"}),"\nUniffle contains coordinator cluster, shuffle server cluster and remote storage(eg, HDFS) if necessary."),(0,n.kt)("p",null,"Coordinator will collect status of shuffle server and do the assignment for the job."),(0,n.kt)("p",null,"Shuffle server will receive the shuffle data, merge them and write to storage."),(0,n.kt)("p",null,"Depend on different situation, Uniffle supports Memory & Local, Memory & Remote Storage(eg, HDFS), Memory & Local & Remote Storage(recommendation for production environment)."),(0,n.kt)("h2",{id:"shuffle-process-with-uniffle"},"Shuffle Process with Uniffle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spark driver ask coordinator to get shuffle server for shuffle process")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spark task write shuffle data to shuffle server with following step:\n",(0,n.kt)("img",{alt:"Rss Shuffle_Write",src:a(816).Z,width:"997",height:"499"})),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Send KV data to buffer"),(0,n.kt)("li",{parentName:"ol"},"Flush buffer to queue when buffer is full or buffer manager is full"),(0,n.kt)("li",{parentName:"ol"},"Thread pool get data from queue"),(0,n.kt)("li",{parentName:"ol"},"Request memory from shuffle server first and send the shuffle data"),(0,n.kt)("li",{parentName:"ol"},"Shuffle server cache data in memory first and flush to queue when buffer manager is full"),(0,n.kt)("li",{parentName:"ol"},"Thread pool get data from queue"),(0,n.kt)("li",{parentName:"ol"},"Write data to storage with index file and data file"),(0,n.kt)("li",{parentName:"ol"},"After write data, task report all blockId to shuffle server, this step is used for data validation later"),(0,n.kt)("li",{parentName:"ol"},"Store taskAttemptId in MapStatus to support Spark speculation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Depend on different storage type, spark task read shuffle data from shuffle server or remote storage or both of them."))),(0,n.kt)("h2",{id:"shuffle-file-format"},"Shuffle file format"),(0,n.kt)("p",null,"The shuffle data is stored with index file and data file. Data file has all blocks for specific partition and index file has metadata for every block."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rss Shuffle_Write",src:a(7911).Z,width:"439",height:"447"})),(0,n.kt)("h2",{id:"supported-spark-version"},"Supported Spark Version"),(0,n.kt)("p",null,"Current support Spark 2.3.x, Spark 2.4.x, Spark3.0.x, Spark 3.1.x, Spark 3.2.x"),(0,n.kt)("p",null,"Note: To support dynamic allocation, the patch(which is included in client-spark/patch folder) should be applied to Spark"),(0,n.kt)("h2",{id:"supported-mapreduce-version"},"Supported MapReduce Version"),(0,n.kt)("p",null,"Current support Hadoop 2.8.5's MapReduce framework."),(0,n.kt)("h2",{id:"building-uniffle"},"Building Uniffle"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"note: currently Uniffle requires JDK 1.8 to build, adding later JDK support is on our roadmap.")),(0,n.kt)("p",null,"Uniffle is built using ",(0,n.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),".\nTo build it, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package\n")),(0,n.kt)("p",null,"Build against profile Spark2(2.4.6)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package -Pspark2\n")),(0,n.kt)("p",null,"Build against profile Spark3(3.1.2)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package -Pspark3\n")),(0,n.kt)("p",null,"Build against Spark 3.2.x"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mvn -DskipTests clean package -Pspark3.2\n")),(0,n.kt)("p",null,"To package the Uniffle, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./build_distribution.sh\n")),(0,n.kt)("p",null,"Package against Spark 3.2.x, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./build_distribution.sh --spark3-profile 'spark3.2'\n")),(0,n.kt)("p",null,"rss-xxx.tgz will be generated for deployment"),(0,n.kt)("h2",{id:"deploy"},"Deploy"),(0,n.kt)("h3",{id:"deploy-coordinator"},"Deploy Coordinator"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"unzip package to RSS_HOME"),(0,n.kt)("li",{parentName:"ol"},"update RSS_HOME/bin/rss-env.sh, eg,",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'  JAVA_HOME=<java_home>\n  HADOOP_HOME=<hadoop home>\n  XMX_SIZE="16g"\n'))),(0,n.kt)("li",{parentName:"ol"},"update RSS_HOME/conf/coordinator.conf, eg,",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  rss.rpc.server.port 19999\n  rss.jetty.http.port 19998\n  rss.coordinator.server.heartbeat.timeout 30000\n  rss.coordinator.app.expired 60000\n  rss.coordinator.shuffle.nodes.max 5\n  # enable dynamicClientConf, and coordinator will be responsible for most of client conf\n  rss.coordinator.dynamicClientConf.enabled true\n  # config the path of client conf\n  rss.coordinator.dynamicClientConf.path <RSS_HOME>/conf/dynamic_client.conf\n  # config the path of excluded shuffle server\n  rss.coordinator.exclude.nodes.file.path <RSS_HOME>/conf/exclude_nodes\n"))),(0,n.kt)("li",{parentName:"ol"},"update <RSS_HOME>/conf/dynamic_client.conf, rss client will get default conf from coordinator eg,",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"}," # MEMORY_LOCALFILE_HDFS is recommandation for production environment\n rss.storage.type MEMORY_LOCALFILE_HDFS\n # multiple remote storages are supported, and client will get assignment from coordinator\n rss.coordinator.remote.storage.path hdfs://cluster1/path,hdfs://cluster2/path\n rss.writer.require.memory.retryMax 1200\n rss.client.retry.max 100\n rss.writer.send.check.timeout 600000\n rss.client.read.buffer.size 14m\n"))),(0,n.kt)("li",{parentName:"ol"},"start Coordinator",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"}," bash RSS_HOME/bin/start-coordnator.sh\n")))),(0,n.kt)("h3",{id:"deploy-shuffle-server"},"Deploy Shuffle Server"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"unzip package to RSS_HOME"),(0,n.kt)("li",{parentName:"ol"},"update RSS_HOME/bin/rss-env.sh, eg,",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'  JAVA_HOME=<java_home>\n  HADOOP_HOME=<hadoop home>\n  XMX_SIZE="80g"\n'))),(0,n.kt)("li",{parentName:"ol"},"update RSS_HOME/conf/server.conf, eg,",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  rss.rpc.server.port 19999\n  rss.jetty.http.port 19998\n  rss.rpc.executor.size 2000\n  # it should be configed the same as in coordinator\n  rss.storage.type MEMORY_LOCALFILE_HDFS\n  rss.coordinator.quorum <coordinatorIp1>:19999,<coordinatorIp2>:19999\n  # local storage path for shuffle server\n  rss.storage.basePath /data1/rssdata,/data2/rssdata....\n  # it's better to config thread num according to local disk num\n  rss.server.flush.thread.alive 5\n  rss.server.flush.threadPool.size 10\n  rss.server.buffer.capacity 40g\n  rss.server.read.buffer.capacity 20g\n  rss.server.heartbeat.timeout 60000\n  rss.server.heartbeat.interval 10000\n  rss.rpc.message.max.size 1073741824\n  rss.server.preAllocation.expired 120000\n  rss.server.commit.timeout 600000\n  rss.server.app.expired.withoutHeartbeat 120000\n  # note: the default value of rss.server.flush.cold.storage.threshold.size is 64m\n  # there will be no data written to DFS if set it as 100g even rss.storage.type=MEMORY_LOCALFILE_HDFS\n  # please set proper value if DFS is used, eg, 64m, 128m.\n  rss.server.flush.cold.storage.threshold.size 100g\n"))),(0,n.kt)("li",{parentName:"ol"},"start Shuffle Server",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"}," bash RSS_HOME/bin/start-shuffle-server.sh\n")))),(0,n.kt)("h3",{id:"deploy-spark-client"},"Deploy Spark Client"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add client jar to Spark classpath, eg, SPARK_HOME/jars/"),(0,n.kt)("p",{parentName:"li"},"The jar for Spark2 is located in <RSS_HOME>/jars/client/spark2/rss-client-XXXXX-shaded.jar"),(0,n.kt)("p",{parentName:"li"},"The jar for Spark3 is located in <RSS_HOME>/jars/client/spark3/rss-client-XXXXX-shaded.jar")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update Spark conf to enable Uniffle, eg,"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"spark.shuffle.manager org.apache.spark.shuffle.RssShuffleManager\nspark.rss.coordinator.quorum <coordinatorIp1>:19999,<coordinatorIp2>:19999\n# Note: For Spark2, spark.sql.adaptive.enabled should be false because Spark2 doesn't support AQE.\n")))),(0,n.kt)("h3",{id:"support-spark-dynamic-allocation"},"Support Spark dynamic allocation"),(0,n.kt)("p",null,"To support spark dynamic allocation with Uniffle, spark code should be updated.\nThere are 3 patches for spark (2.4.6/3.1.2/3.2.1) in spark-patches folder for reference."),(0,n.kt)("p",null,"After apply the patch and rebuild spark, add following configuration in spark conf to enable dynamic allocation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"spark.shuffle.service.enabled false\nspark.dynamicAllocation.enabled true\n")),(0,n.kt)("h3",{id:"deploy-mapreduce-client"},"Deploy MapReduce Client"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add client jar to the classpath of each NodeManager, e.g.,  /share/hadoop/mapreduce/")),(0,n.kt)("p",null,"The jar for MapReduce is located in /jars/client/mr/rss-client-mr-XXXXX-shaded.jar"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update MapReduce conf to enable Uniffle, eg,"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"-Dmapreduce.rss.coordinator.quorum=<coordinatorIp1>:19999,<coordinatorIp2>:19999\n-Dyarn.app.mapreduce.am.command-opts=org.apache.hadoop.mapreduce.v2.app.RssMRAppMaster\n-Dmapreduce.job.map.output.collector.class=org.apache.hadoop.mapred.RssMapOutputCollector\n-Dmapreduce.job.reduce.shuffle.consumer.plugin.class=org.apache.hadoop.mapreduce.task.reduce.RssShuffle\n")),(0,n.kt)("p",{parentName:"li"},"Note that the RssMRAppMaster will automatically disable slow start (i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"mapreduce.job.reduce.slowstart.completedmaps=1"),")\nand job recovery (i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn.app.mapreduce.am.job.recovery.enable=false"),")"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The important configuration is listed as following."),(0,n.kt)("h3",{id:"coordinator"},"Coordinator"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.server.heartbeat.timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"30000"),(0,n.kt)("td",{parentName:"tr",align:null},"Timeout if can't get heartbeat from shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.assignment.strategy"),(0,n.kt)("td",{parentName:"tr",align:null},"PARTITION_BALANCE"),(0,n.kt)("td",{parentName:"tr",align:null},"Strategy for assigning shuffle server, PARTITION_BALANCE should be used for workload balance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.app.expired"),(0,n.kt)("td",{parentName:"tr",align:null},"60000"),(0,n.kt)("td",{parentName:"tr",align:null},"Application expired time (ms), the heartbeat interval should be less than it")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.shuffle.nodes.max"),(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"The max number of shuffle server when do the assignment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.dynamicClientConf.path"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The path of configuration file which have default conf for rss client")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.exclude.nodes.file.path"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The path of configuration file which have exclude nodes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.exclude.nodes.check.interval.ms"),(0,n.kt)("td",{parentName:"tr",align:null},"60000"),(0,n.kt)("td",{parentName:"tr",align:null},"Update interval (ms) for exclude nodes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.rpc.server.port"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"RPC port for coordinator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.jetty.http.port"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Http port for coordinator")))),(0,n.kt)("h3",{id:"shuffle-server"},"Shuffle Server"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.coordinator.quorum"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Coordinator quorum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.rpc.server.port"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"RPC port for Shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.jetty.http.port"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Http port for Shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.buffer.capacity"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Max memory of buffer manager for shuffle server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.memory.shuffle.highWaterMark.percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"75.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Threshold of spill data to storage, percentage of rss.server.buffer.capacity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.memory.shuffle.lowWaterMark.percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"25.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Threshold of keep data in memory, percentage of rss.server.buffer.capacity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.read.buffer.capacity"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Max size of buffer for reading data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.heartbeat.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"Heartbeat interval to Coordinator (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.flush.threadPool.size"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"Thread pool for flush data to file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.commit.timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"600000"),(0,n.kt)("td",{parentName:"tr",align:null},"Timeout when commit shuffle data (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.storage.type"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports MEMORY_LOCALFILE, MEMORY_HDFS, MEMORY_LOCALFILE_HDFS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.flush.cold.storage.threshold.size"),(0,n.kt)("td",{parentName:"tr",align:null},"64M"),(0,n.kt)("td",{parentName:"tr",align:null},"The threshold of data size for LOACALFILE and HDFS if MEMORY_LOCALFILE_HDFS is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rss.server.tags"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The comma-separated list of tags to indicate the shuffle server's attributes. It will be used as the assignment basis for the coordinator")))),(0,n.kt)("h3",{id:"shuffle-client"},"Shuffle Client"),(0,n.kt)("p",null,"For more details of advanced configuration, please see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/blob/master/docs/client_guide.md"},"Uniffle Shuffle Client Guide"),"."),(0,n.kt)("h2",{id:"license"},"LICENSE"),(0,n.kt)("p",null,"Uniffle is under the Apache License Version 2.0. See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/blob/master/LICENSE"},"LICENSE")," file for details."),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"For more information about contributing issues or pull requests, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-uniffle/blob/master/CONTRIBUTING.md"},"Uniffle Contributing Guide"),"."),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,"We provide free support for users using this project. If you want to join user wechat group for further help and collaboration. You can scan the following QR code or search wechatID ",(0,n.kt)("inlineCode",{parentName:"p"},"xinghuojihua_01"),", add our assistant on wechat, and remark ",(0,n.kt)("inlineCode",{parentName:"p"},"Uniffle"),". The assistant will help you join our wechat group."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Wechat",src:a(6291).Z,width:"146",height:"146"})))}u.isMDXComponent=!0},9440:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rss_architecture-a3a32a259b8b40834c295f5f17ce66cb.png"},7911:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rss_data_format-423a8687082f4a77620d97a97b01d204.png"},816:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rss_shuffle_write-0018bea428f435c37c6f369defc3a081.png"},6291:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wechat-5d4d6cc0c71389e9a62841ca19a0083d.png"}}]);