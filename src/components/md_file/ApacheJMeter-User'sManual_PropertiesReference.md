[Main content](#content)

[![Logo ASF](https://jmeter.apache.org/images/asf-logo.svg%20%22Apache%20Software%20Foundation%22)](https://www.apache.org)

[![Apache JMeter](https://jmeter.apache.org/images/logo.svg)](https://jmeter.apache.org/)

[![Current Apache event teaser](https://www.apache.org/events/current-event-234x60.png)](https://www.apache.org/events/current-event.html)

*   About
    
    *   [Overview](../index.html)
        
    *   [License](https://www.apache.org/licenses/)
        

*   Download
    
    *   [Download Releases](../download_jmeter.cgi)
        
    *   [Release Notes](../changes.html)
        

*   Documentation
    
    *   [Get Started](../usermanual/get-started.html)
        
    *   [User Manual](../usermanual/index.html)
        
    *   [Best Practices](../usermanual/best-practices.html)
        
    *   [Component Reference](../usermanual/component_reference.html)
        
    *   [Functions Reference](../usermanual/functions.html)
        
    *   [Properties Reference](../usermanual/properties_reference.html)
        
    *   [Change History](../changes_history.html)
        
    *   [Javadocs](../api/index.html)
        
    *   [JMeter Wiki](https://cwiki.apache.org/confluence/display/JMETER/Home)
        
    *   [FAQ (Wiki)](https://cwiki.apache.org/confluence/display/JMETER/JMeterFAQ)
        

*   Tutorials
    
    *   [Distributed Testing](../usermanual/jmeter_distributed_testing_step_by_step.html)
        
    *   [Recording Tests](../usermanual/jmeter_proxy_step_by_step.html)
        
    *   [JUnit Sampler](../usermanual/junitsampler_tutorial.html)
        
    *   [Access Log Sampler](../usermanual/jmeter_accesslog_sampler_step_by_step.html)
        
    *   [Extending JMeter](../usermanual/jmeter_tutorial.html)
        

*   Community
    
    *   [Issue Tracking](../issues.html)
        
    *   [Security](../security.html)
        
    *   [Mailing Lists](../mail.html)
        
    *   [Source Repositories](../svnindex.html)
        
    *   [Building and Contributing](../building.html)
        
    *   [Project info at Apache](https://projects.apache.org/project.html?jmeter)
        
    *   [Contributors](https://cwiki.apache.org/confluence/display/JMETER/JMeterCommitters)
        

*   Foundation
    
    *   [The Apache Software Foundation (ASF)](https://www.apache.org/)
        
    *   [Get Involved in the ASF](https://www.apache.org/foundation/getinvolved.html)
        
    *   [Privacy Policy](https://privacy.apache.org/policies/privacy-policy-public.html)
        
    *   [Sponsorship](https://www.apache.org/foundation/sponsorship.html)
        
    *   [Thanks](https://www.apache.org/foundation/thanks.html)
        

*   [Twitter](https://twitter.com/ApacheJMeter "Follow us on Twitter")
    
*   [github](https://github.com/apache/jmeter "Fork us on github")
    

*   [< Prev](component_reference.html)
    
*   [Index](../index.html)
    
*   [Next >](functions.html)
    

*   [19 Introduction](#introduction)
    
*   [19.1 Language](#language)
    
*   [19.2 XML Parser](#xml_parser)
    
*   [19.3 SSL configuration](#ssl_config)
    
*   [19.4 Look and Feel configuration](#laf_config)
    
*   [19.4.1 Darklaf configuration](#darklaf_config)
    
*   [19.5 Toolbar display](#toolbar_display)
    
*   [19.6 JMX Backup configuration](#backup)
    
*   [19.7 Remote hosts and RMI configuration](#remote)
    
*   [19.8 Include Controller](#include_controller)
    
*   [19.9 HTTP Java configuration](#http_java_config)
    
*   [19.10 Apache HttpClient common properties](#httpclient_common_properties)
    
*   [19.11 Kerberos properties](#kerberos)
    
*   [19.12 Apache HttpClient logging examples](#httpclient_logging_examples)
    
*   [19.13 Apache HttpComponents HTTPClient configuration (HTTPClient4)](#httpclient4)
    
*   [19.14 HTTP Cache Manager configuration](#cache_manager)
    
*   [19.15 Results file configuration](#results_file_config)
    
*   [19.16 Settings that affect SampleResults](#sample_results)
    
*   [19.17 Upgrade](#upgrade)
    
*   [19.18 JMeter Test Script recorder configuration](#test_script_recorder)
    
*   [19.19 Test Script Recorder certificate configuration](#test_script_recorder_cert)
    
*   [19.20 JMeter Proxy configuration](#proxy_config)
    
*   [19.21 HTML Parser configuration](#parser_config)
    
*   [19.22 Remote batching configuration](#remote_batching_config)
    
*   [19.23 JDBC Request configuration](#jdbc_request)
    
*   [19.24 OS Process Sampler configuration](#os_sampler)
    
*   [19.25 TCP Sampler configuration](#tcp_sampler)
    
*   [19.26 Summariser - Generate Summary Results - configuration (mainly applies to CLI mode)](#summariser)
    
*   [19.27 Aggregate Report and Aggregate Graph - configuration](#aggregate_report_graph)
    
*   [19.28 BackendListener - configuration](#backend)
    
*   [19.29 BeanShell configuration](#beanshell)
    
*   [19.30 MailerModel configuration](#mailer)
    
*   [19.31 CSVRead configuration](#csv)
    
*   [19.32 \_\_time() function configuration](#time)
    
*   [19.33 CSV DataSet configuration](#csv_dataset)
    
*   [19.34 LDAP Sampler configuration](#ldap)
    
*   [19.35 Miscellaneous configuration](#miscellaneous)
    
*   [19.36 Classpath configuration](#classpath)
    
*   [19.37 Reporting configuration](#reporting)
    
*   [19.38 Additional property files to load](#properties)
    
*   [19.39 Thread Group Validation feature](#validation)
    
*   [19.40 Timer related feature](#timer)
    
*   [19.41 Naming Policy](#naming_policy)
    
*   [19.42 Help](#help)
    
*   [19.43 Advanced Groovy Scripting configuration](#groovy)
    
*   [19.44 Advanced JSR-223 Scripting configuration](#jsr223)
    
*   [19.45 Documentation generation](#docgeneration)
    
*   [19.46 Security Provider](#securityprovider)
    

19 Introduction[¶](#introduction "Link to here")

=================================================

This document describes JMeter properties. The properties present in jmeter.properties or reportgenerator.properties should be set in the user.properties file. These properties are only taken into account after restarting JMeter as they are usually resolved when the class is loaded.

19.1 Language[¶](#language "Link to here")

===========================================

### Parameters

Attribute

Description

Required

language

Preferred GUI language. Comment out to use the JVM default locale's language.  
Example:

language=en

This property is the only one that must be set in jmeter.properties file

To fully configure language ensure you set locale, see [Internationalization: Understanding Locale in the Java Platform](http://www.oracle.com/us/technologies/java/locale-140624.html)
. Example for English:

\-Duser.language=en -Duser.region=EN

No

locales.add

Additional locale(s) to add to the displayed list.  
The current default list is: en, fr, de, no, es, tr, ja, zh\_CN, zh\_TW, pl, pt\_BR.  
See JMeterMenuBar#makeLanguageMenu()  
The entries are a comma-separated list of language names.  
Example:

locales.add=zu

No

19.2 XML Parser[¶](#xml_parser "Link to here")

===============================================

### Parameters

Attribute

Description

Required

xpath.namespace.config

Path to a Properties file containing Namespace mapping in the form prefix=Namespace. Example:

ns=http://biz.aol.com/schema/2006-12-18

No

xpath2query.parser.cache.size

XPath2 query cache for storing compiled XPath queries Defaults to 400

No

19.3 SSL configuration[¶](#ssl_config "Link to here")

======================================================

SSL (Java) System properties are now in system.properties  
JMeter no longer converts javax._xxx_ property entries in jmeter.properties into System properties. These must now be defined in the system.properties file or on the command-line. The system.properties file gives more flexibility.

### Parameters

Attribute

Description

Required

https.sessioncontext.shared

By default, SSL session contexts are now created per-thread, rather than being shared.  
The old behaviour can be enabled by setting this property to true. Defaults to: false

No

https.default.protocol

Be aware that https default protocol may vary depending on the version of JVM. See [Diagnosing TLS, SSL and HTTPS](https://blogs.oracle.com/java-platform-group/entry/diagnosing_tls_ssl_and_https)
 and [Bug 58236](https://bz.apache.org/bugzilla/show_bug.cgi?id=58236)
. Default HTTPS protocol level:

https.default.protocol=TLS

This may need to be changed to:

https.default.protocol=SSLv3

No

https.socket.protocols

List of protocols to enable. You may have to select only a subset if you find issues with target server.  
This is needed when server does not support Socket version negotiation, this can lead to errors like: javax.net.ssl.SSLPeerUnverifiedException: peer not authenticated or java.net.SocketException: Connection reset.  
See [Bug 54759](https://bz.apache.org/bugzilla/show_bug.cgi?id=54759)
, example:

https.socket.protocols=SSLv2Hello SSLv3 TLSv1

No

https.cipherSuites

Comma-separated list of SSL cipher suites that may be used in HTTPS connections. It may be desirable to use a subset of cipher suites in order to match expected client behavior or to reduce encryption overhead in JMeter when running with large numbers of users. Errors may occur if the JVM does not support the specified cipher suites, or if the cipher suites supported by the HTTPS server do not overlap this list. See the [JSSE Reference Guide.](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html#Customization)
  
For example:

https.cipherSuites=TLS\_ECDHE\_ECDSA\_WITH\_AES\_256\_CBC\_SHA384,TLS\_RSA\_WITH\_AES\_128\_GCM\_SHA256

If not specified, JMeter will use the default list of cipher suites supported by the JVM.

No

httpclient.reset\_state\_on\_thread\_group\_iteration

Reset HTTP State when starting a new Thread Group iteration. In summarytrue means next iteration is associated to a new user. false means next iteration is associated to same user. true involves:

*   Closing opened connection
*   resetting SSL State

Defaults to: true

No

https.use.cached.ssl.context

Control if we allow reuse of cached SSL context between iterations.  
Set the value to false to reset the SSL context each iteration.  
Defaults to: true

DEPRECATED, you should use httpclient.reset\_state\_on\_thread\_group\_iteration with correct value

No

https.keyStoreStartIndex

Start index to be used with keystores with many entries.  
The default is to use entry 0, i.e. the first.  
Defaults to: 0

No

https.keyStoreEndIndex

End index to be used with keystores with many entries.  
Defaults to: 0

No

19.4 Look and Feel configuration[¶](#laf_config "Link to here")

================================================================

### Parameters

Attribute

Description

Required

jmeter.laf.windows\_10

Classname of the Swing default UI  
The LAF classnames that are available are now displayed as ToolTip text when hovering over the Options/Look and Feel selection list.  
You can either use a full class name, as shown below, or one of the strings "System" or "CrossPlatform" which means JMeter will use the corresponding string returned by UIManager.get<name>LookAndFeelClassName().  
LAF can be overridden by os.name (lowercased, spaces replaced by '\_').  

Order of LAF property lookup[¶](#order-laf-lookup "Link to here")

Take for example an os.name of Windows 10.  
JMeter would look first for a property

jmeter.laf.windows\_10=javax.swing.plaf.metal.MetalLookAndFeel

Failing that, the OS family os.name would be used shortened to the first space. In our example JMeter would therefore look for a property

jmeter.laf.windows=com.sun.java.swing.plaf.windows.WindowsLookAndFeel

Mac apparently looks better with the System LAF set through

jmeter.laf.mac=System

Failing that, the JMeter default LAF can be defined through:

jmeter.laf=System

If none of the above jmeter.laf properties are defined, JMeter uses the CrossPlatform LAF. This is because the CrossPlatform LAF generally looks better than the System LAF. See [Bug 52026](https://bz.apache.org/bugzilla/show_bug.cgi?id=52026)
 for details.

When you change Look and Feel (LAF) from JMeter GUI through menu Options > Look and Feel, you should restart JMeter to ensure change is fully effective.

No

jmeter.loggerpanel.display

Display LoggerPanel.  
Defaults to: false

No

jmeter.loggerpanel.enable\_when\_closed

Enable LogViewer Panel to receive log event even when closed.  
Enabled since 2.12  

Note this has some impact on performances, but as GUI mode must not be used for Load Test it is acceptable

Defaults to: true

No

jmeter.loggerpanel.maxlength

Max lines kept in LoggerPanel, 0 means no limit.  
Defaults to: 1000

No

jmeter.gui.refresh\_period

Interval period in ms to process the events of the listeners.  
Defaults to: 500

No

19.4.1 Darklaf configuration[¶](#darklaf_config "Link to here")

================================================================

### Parameters

Attribute

Description

Required

darklaf.decorations

Enables custom window chrome when using a Darklaf Look And Feel. Defaults to: false

No

darklaf.unifiedMenuBar

Enables the unified menubar on Windows when using a Darklaf Look and Feel.  
This property only has an effect if darklaf.native is true. Defaults to: true

No

19.5 Toolbar display[¶](#toolbar_display "Link to here")

=========================================================

### Parameters

Attribute

Description

Required

jmeter.toolbar.icons

Toolbar icon definitions.  
Defaults to org/apache/jmeter/images/toolbar/icons-toolbar.properties

No

jmeter.toolbar

Toolbar list.  
Defaults to:

new,open,close,save,save\_as\_testplan,|,cut,copy,paste,|,expand,collapse,toggle,|,test\_start,test\_stop,test\_shutdown,|,test\_start\_remote\_all,test\_stop\_remote\_all,test\_shutdown\_remote\_all,|,test\_clear,test\_clear\_all,|,search,search\_reset,|,function\_helper,help

No

jmeter.toolbar.icons.size

Available sizes are: 22x22, 32x32, 48x48. Suggested value for HiDPI mode is

jmeter.toolbar.icons.size=48x48

Defaults to: 22x22

No

jmeter.icons

Icon definitions. Alternate set:

jmeter.icons=org/apache/jmeter/images/icon\_1.properties

Historical icon set (deprecated):

jmeter.icons=org/apache/jmeter/images/icon\_old.properties

Defaults to:org/apache/jmeter/images/icon.properties

No

jmeter.tree.icons.size

Available sizes are: 19x19, 24x24, 32x32, 48x48. Useful for HiDPI display (see below).  
Defaults to: 19x19  
Suggested value for HiDPI screen like 3200x1800 is: 32x32

No

jmeter.hidpi.mode

HiDPI mode. Activate a '_pseudo_'-HiDPI mode. Allows to increase size of some UI elements which are not correctly managed by JVM with high resolution screens in Linux or Windows.  
Defaults to: false

No

jmeter.hidpi.scale.factor

HiDPI scale factor. Suggested value for HiDPI: 2.0. Defaults to: 1.0

No

not\_in\_menu

Components to not display in JMeter GUI (GUI class name or static label).  
These elements are deprecated and will be removed in next version:

MongoDB Script, MongoDB Source Config

Defaults to:

org.apache.jmeter.protocol.mongodb.sampler.MongoScriptSampler, org.apache.jmeter.protocol.mongodb.config.MongoSourceElement

No

undo.history.size

Number of items in undo history.  
Feature is disabled by default (0) due to known and not fixed bugs [Bug 57043](https://bz.apache.org/bugzilla/show_bug.cgi?id=57043)
, [Bug 57039](https://bz.apache.org/bugzilla/show_bug.cgi?id=57039)
 and [Bug 57040](https://bz.apache.org/bugzilla/show_bug.cgi?id=57040)
. Set it to a number greater than zero (25 can be a good default).  
The bigger it is, the more memory will be consumed. Defaults to: 0

No

gui.quick\_X

Hotkeys to add JMeter components where _X_ is the shortcut key, for example:

gui.quick\_0=ThreadGroupGui
gui.quick\_1=HttpTestSampleGui
gui.quick\_2=RegexExtractorGui
gui.quick\_3=AssertionGui
gui.quick\_4=ConstantTimerGui
gui.quick\_5=TestActionGui
gui.quick\_6=JSR223PostProcessor
gui.quick\_7=JSR223PreProcessor
gui.quick\_8=DebugSampler
gui.quick\_9=ViewResultsFullVisualizer

Above code will add the corresponding elements when you press Ctrl + 0 … Ctrl + 9 (⌘ + 0 … ⌘ + 9 on Mac)

No

19.6 JMX Backup configuration[¶](#backup "Link to here")

=========================================================

### Parameters

Attribute

Description

Required

jmeter.gui.action.save.backup\_on\_save

Enable auto backups of the .jmx file when a test plan is saved.  
When enabled, before the .jmx is saved, it will be backed up to the directory pointed to by the jmeter.gui.action.save.backup\_directory property (see below). Backup file names are built after the jmx file being saved. For example, saving test-plan.jmx will create a test-plan-000012.jmx in the backup directory provided that the last created backup file is test-plan-000011.jmx.  
Default value is true indicating that auto backups are enabled.  
Defaults to: true

No

jmeter.gui.action.save.backup\_directory

Set the backup directory path where JMX backups will be created upon save in the GUI.  
If not set (what it defaults to) then backup files will be created in a sub-directory of the JMeter base installation. If set and the directory does not exist, a corresponding directory will be created.  
Defaults to: ${JMETER\_HOME}/backups

No

jmeter.gui.action.save.keep\_backup\_max\_hours

Set the maximum time (in hours) that backup files should be preserved since the save time.  
By default no expiration time is set which means we keep backups for ever.  
Defaults to: 0

No

jmeter.gui.action.save.keep\_backup\_max\_count

Set the maximum number of backup files that should be preserved. By default ten backups will be preserved.  
Setting this to zero will cause the backups to not being deleted (unless keep\_backup\_max\_hours is set to a non zero value).  
Defaults to: 10

No

save\_automatically\_before\_run

Enable auto saving of the .jmx file before start run a test plan  
When enabled, before the run, the .jmx will be saved and also backed up to the directory pointed.  
Defaults to: true

No

19.7 Remote hosts and RMI configuration[¶](#remote "Link to here")

===================================================================

### Parameters

Attribute

Description

Required

remote\_hosts

Remote Hosts - comma delimited, for example

remote\_hosts=localhost:1099,localhost:2010

Defaults to: 127.0.0.1

No

server\_port

RMI port to be used by the server (must start rmiregistry with same port). To change the port to (say) 1234:  
On the server(s):

1.  set server\_port=1234
2.  start rmiregistry with port 1234

On Windows this can be done by:

SET SERVER\_PORT=1234
JMETER-SERVER

On Unix:

SERVER\_PORT=1234 jmeter-server

On the Windows client:

                                set remote\_hosts=_server_:1234
                            

On the Unix client:

                                export remote\_hosts=_server_:1234
                            

Defaults to: 1099

No

client.rmi.localport

Parameter that controls the RMI ports used by RemoteSampleListenerImpl and RemoteThreadsListenerImpl (The Controller)  
Default value is 0, which means ports are randomly assigned. If this is non-zero, it will be used as the base for local port numbers for the client engine. At the moment JMeter will open up to three ports beginning with the port defined in this property.

You may need to open corresponding ports in the firewall on the Controller machine.

Defaults to: 0

No

client.tries

When distributed test is starting, there may be several attempts to initialize remote engines.  
By default, only a single try is made. Increase this property to make it retry additional times.  
Defaults to: 1

No

client.retries\_delay

If initialization is retried, this property sets the delay between those attempts in milliseconds.  
Defaults to: 5000

No

client.continue\_on\_fail

When all initialization tries were made, the test will fail, if any remote engines are failed.  
Set this property to true to ignore failed nodes and proceed with test.  
Defaults to: false

No

server.rmi.port

To change the default port (1099) used to access the server.  
Defaults to: 1099

No

server.rmi.localport

To use a specific port for the JMeter server engine, define this property before starting the server.  
Defaults to: 4000

No

server.rmi.create

From JMeter version 2.3.1, the JMeter server creates the RMI registry as part of the server process.  
Set this property to false, to stop the server creating the RMI registry.  
Defaults to: true

No

server.exitaftertest

From JMeter version 2.3.1, define this property to cause JMeter to exit after the first test.  
Defaults to: true

No

server.rmi.ssl.keystore.type

Type of keystore for RMI connection security. Possible values are dependent on the JVM in use, but commonly supported are JKS and PKCS12. Defaults to: JKS

No

server.rmi.ssl.keystore.file

Keystore file that contains private key Defaults to: rmi\_keystore.jks

No

server.rmi.ssl.keystore.password

Password of Keystore Defaults to: changeit

No

server.rmi.ssl.keystore.alias

Key alias Defaults to: rmi

No

server.rmi.ssl.truststore.type

Type of truststore for RMI connection security Defaults to: the value of server.rmi.ssl.keystore.type, which is JKS

No

server.rmi.ssl.truststore.file

Keystore file that contains certificate Defaults to: the value of server.rmi.ssl.keystore.file, which is rmi\_keystore.jks

No

server.rmi.ssl.truststore.password

Password of Trust store Defaults to: the value of server.rmi.ssl.keystore.password, which is changeit

No

server.rmi.ssl.disable

Set this to true if you don't want to use SSL for RMI Defaults to: false

No

19.8 Include Controller[¶](#include_controller "Link to here")

===============================================================

### Parameters

Attribute

Description

Required

includecontroller.prefix

Prefix used by IncludeController when building file names.  
Defaults to empty value

No

19.9 HTTP Java configuration[¶](#http_java_config "Link to here")

==================================================================

### Parameters

Attribute

Description

Required

http.java.sampler.retries

Number of connection retries performed by HTTP Java sampler before giving up. 0 means no retry since version 3.0.  
Defaults to: 0

No

19.10 Apache HttpClient common properties[¶](#httpclient_common_properties "Link to here")

===========================================================================================

### Parameters

Attribute

Description

Required

http.post\_add\_content\_type\_if\_missing

Should JMeter add to POST request a Header Content-type: application/x-www-form-urlencoded if missing?  
Was true before version 4.1.  
Defaults to: false

No

httpclient.timeout

Set the socket timeout (or use the parameter http.socket.timeout) for AJP Sampler.  
Value is in milliseconds, 0 means no timeout.  
Defaults to: 0

No

httpclient.version

Set the http version.  
Defaults to: 1.1 (or use the parameter http.protocol.version)

No

httpclient.socket.http.cps

Set characters per second to a value greater then zero to emulate slow connections.  
Defaults to: 0

No

httpclient.socket.https.cps

Same as before but for https. Defaults to: 0

No

httpclient.loopback

Enable loopback protocol.  
Defaults to: true

No

httpclient.localaddress

Define the local host address to be used for multi-homed hosts, example

httpclient.localaddress=1.2.3.4

No

http.proxyUser

Set the user name to use with a proxy.

No

http.proxyPass

Set the password to use with a proxy.

No

19.11 Kerberos properties[¶](#kerberos "Link to here")

=======================================================

### Parameters

Attribute

Description

Required

kerberos\_jaas\_application

AuthManager Kerberos configuration  
Name of application module used in jaas.conf.  
Defaults to: JMeter

No

kerberos.spnego.strip\_port

Should port be stripped from urls before constructing SPNs for SPNEGO authentication. Defaults to: true

No

kerberos.spnego.use\_canonical\_host\_name

Should the host name for constructing SPN be canonicalized for SPNEGO authentication.

No

kerberos.spnego.delegate\_cred

Should SPNEGO authentication should use delegation of credentials. Defaults to: false

No

19.12 Apache HttpClient logging examples[¶](#httpclient_logging_examples "Link to here")

=========================================================================================

Enable header wire and context logging - Best for Debugging In log4j2.xml, set:

<Logger name="org.apache.http" level="debug" />
<Logger name="org.apache.http.wire" level="error" />

Enable full wire and context logging In log4j2.xml, set:

<Logger name="org.apache.http" level="debug" />

Enable context logging for connection management

<Logger name="org.apache.http.impl.conn" level="debug" />

Enable context logging for connection management / request execution

<Logger name="org.apache.http.impl.conn" level="debug" />
<Logger name="org.apache.http.impl.client" level="debug" />
<Logger name="org.apache.http.client" level="debug" />

19.13 Apache HttpComponents HTTPClient configuration (HTTPClient4)[¶](#httpclient4 "Link to here")

===================================================================================================

### Parameters

Attribute

Description

Required

hc.parameters.file

Define a properties file for overriding Apache HttpClient parameters.  
Uncomment this line if you put anything in hc.parameters file.  
Defaults to: hc.parameters

No

httpclient4.auth.preemptive

Preemptively send Authorization Header when BASIC auth is used Defaults to: true

No

httpclient4.retrycount

Number of retries to attempt. Retry will be done on Idempotent Http Methods by default. If you want to retry for all methods, see property httpclient4.request\_sent\_retry\_enabled  
Defaults to: 0

No

httpclient4.request\_sent\_retry\_enabled

Set this property to true if it's OK to retry requests that have been sent. This mean that both Idempotent and non Idempotent requests will be retried. This should usually be false, but it can be useful when testing against some Load Balancers like Amazon ELB.  
Defaults to: false

No

httpclient4.idletimeout

Idle connection timeout (in milliseconds) to apply if the server does not send Keep-Alive timeout headers.  
Defaults to: 0 (no suggested duration for Keep-Alived connections)

No

httpclient4.validate\_after\_inactivity

Check connection if the elapsed time (in milliseconds) since the last use of the connection exceeds this value. Ensure this value is always lower by at least 150 ms than httpclient4.time\_to\_live  
Defaults to: 4900

No

httpclient4.time\_to\_live

TTL (in milliseconds) represents an absolute value. No matter what, the connection will not be re-used beyond its TTL.  
Defaults to: 60000

No

httpclient4.deflate\_relax\_mode

Ignore EOFException that some edgy application may emit to signal end of Deflated stream.  
Defaults to: false

No

httpclient4.gzip\_relax\_mode

Ignore EOFException that some edgy application may emit to signal end of GZipped stream.  
Defaults to: false

No

httpclient4.default\_user\_agent\_disabled

If true, default HC4 User-Agent (Apache-HttpClient/X.Y.Z (Java/A.B.C\_D)) will not be added.  
Defaults to: false

No

19.14 HTTP Cache Manager configuration[¶](#cache_manager "Link to here")

=========================================================================

### Parameters

Attribute

Description

Required

cacheable\_methods

Space or comma separated list of methods that can be cached.  
Defaults to: GET

No

cache\_manager.cached\_resource\_mode

N.B. This property is currently a temporary solution for [Bug 56162](https://bz.apache.org/bugzilla/show_bug.cgi?id=56162)
.

Since version 2.12, JMeter does not create anymore a Sample Result with a response code of 204 for a resource found in cache. This is in line with what browser do.  
You can choose between three modes:

RETURN\_NO\_SAMPLE (default)

this mode returns no Sample Result. It has no additional configuration.

RETURN\_200\_CACHE

this mode will return Sample Result with response code to 200 and response message to "(ex cache)".

RETURN\_CUSTOM\_STATUS

choosing this mode, response code and message have to be set by specifying RETURN\_CUSTOM\_STATUS.code and RETURN\_CUSTOM\_STATUS.message.

Defaults to: RETURN\_NO\_SAMPLE

No

RETURN\_CUSTOM\_STATUS.code

This lets you select what response code you want to return if mode RETURN\_CUSTOM\_STATUS is selected.  
Defaults to empty value.

No

RETURN\_CUSTOM\_STATUS.message

This lets you select what response message you want to return if mode RETURN\_CUSTOM\_STATUS is selected.  
Defaults to empty value

No

19.15 Results file configuration[¶](#results_file_config "Link to here")

=========================================================================

### Parameters

Attribute

Description

Required

jmeter.save.saveservice.output\_format

This section helps determine how result data will be saved.  
The commented out values are the defaults.  
Legitimate values: xml, csv, db.  
Only xml and csv are currently supported.  
Defaults to: csv

No

jmeter.save.saveservice.assertion\_results\_failure\_message

true when field should be saved; false otherwise.  
assertion\_results\_failure\_message only affects CSV output.  
Defaults to: true

No

jmeter.save.saveservice.assertion\_results

Legitimate values: none, first, all.  
Defaults to: none

No

jmeter.save.saveservice.data\_type

Defaults to: true

No

jmeter.save.saveservice.label

Defaults to: true

No

jmeter.save.saveservice.response\_code

Defaults to: true

No

jmeter.save.saveservice.response\_data

response\_data is currently not supported for CSV output

Defaults to: false

No

jmeter.save.saveservice.response\_data.on\_error

Save ResponseData for failed samples. Defaults to: false

No

jmeter.save.saveservice.response\_message

Defaults to: true

No

jmeter.save.saveservice.successful

Defaults to: true

No

jmeter.save.saveservice.thread\_name

Defaults to: true

No

jmeter.save.saveservice.time

Defaults to: true

No

jmeter.save.saveservice.subresults

Defaults to: true

No

jmeter.save.saveservice.assertions

Defaults to: true

No

jmeter.save.saveservice.latency

Defaults to: true

No

jmeter.save.saveservice.connect\_time

Defaults to: false

No

jmeter.save.saveservice.samplerData

Defaults to: false

No

jmeter.save.saveservice.responseHeaders

Defaults to: false

No

jmeter.save.saveservice.requestHeaders

Defaults to: false

No

jmeter.save.saveservice.encoding

Defaults to: false

No

jmeter.save.saveservice.bytes

Defaults to: true

No

jmeter.save.saveservice.url

Defaults to: false

No

jmeter.save.saveservice.filename

Defaults to: false

No

jmeter.save.saveservice.hostname

Defaults to: false

No

jmeter.save.saveservice.thread\_counts

Defaults to: true

No

jmeter.save.saveservice.sample\_count

Defaults to: false

No

jmeter.save.saveservice.idle\_time

Defaults to: true

No

jmeter.save.saveservice.timestamp\_format

Timestamp format - this only affects CSV output files.  
Legitimate values: none, ms, or a format suitable for SimpleDateFormat.  
Defaults to: ms

No

jmeter.save.saveservice.timestamp\_format

Defaults to: yyyy/MM/dd HH:mm:ss.SSS

No

jmeter.save.saveservice.default\_delimiter

For use with Comma-separated value (CSV) files or other formats where the fields' values are separated by specified delimiters.  
Defaults to: ,

For TAB, one can use \\t

No

jmeter.save.saveservice.print\_field\_names

Only applies to CSV format files:  
Print field names as first line in CSV  
Defaults to: true

No

sample\_variables

Optional list of JMeter variable names whose values are to be saved in the result data files.  
Use commas to separate the names.  
Defaults to: SESSION\_ID,REFERENCE

No

jmeter.save.saveservice.xml\_pi

N.B. The current implementation saves the values in XML as attributes, so the names must be valid XML names.

Versions of JMeter after 2.3.2 send the variable to all servers to ensure that the correct data is available at the client.  
Optional XML processing instruction for line two of the file.  
Defaults to empty value

No

jmeter.save.saveservice.base\_prefix

Prefix used to identify filenames that are relative to the current base.  
Defaults to: ~/

No

jmeter.save.saveservice.autoflush

AutoFlush on each line written in XML or CSV output.  
Setting this to true will result in less test results data loss in case of a crash, but with impact on performances, particularly for intensive tests (low or no pauses).  
Since JMeter version 2.10, this is false by default.  
Defaults to: false

No

19.16 Settings that affect SampleResults[¶](#sample_results "Link to here")

============================================================================

### Parameters

Attribute

Description

Required

sampleresult.timestamp.start

Save the start time stamp instead of the end.  
This also affects the timestamp stored in result files.  
Defaults to: false

No

sampleresult.useNanoTime

Whether to use System.nanoTime() - otherwise only use System.currentTimeMillis().  
Defaults to: true

No

sampleresult.nanoThreadSleep

Use a background thread to calculate the nanoTime offset.  
Set this to a value less than zero to disable the background thread.  
Defaults to: 5000

No

subresults.disable\_renaming

Since version 5.0 JMeter has a new SubResult Naming Policy which numbers subresults by default  
This property if set to true discards renaming policy. This can be required if you're using JMeter for functional testing.  
Defaults to: false

No

19.17 Upgrade[¶](#upgrade "Link to here")

==========================================

### Parameters

Attribute

Description

Required

upgrade\_properties

File that holds a record of name changes for backward compatibility issues.  
Defaults to: /bin/upgrade.properties

No

19.18 JMeter Test Script recorder configuration[¶](#test_script_recorder "Link to here")

=========================================================================================

### Parameters

Attribute

Description

Required

proxy.pause

N.B. The element was originally called the Proxy recorder, which is why the properties have the prefix "proxy".

If the recorder detects a gap of at least 5s (default) between HTTP requests, it assumes that the user has clicked a new URL. Specified in milliseconds.  
Defaults to: 5000

No

proxy.number.requests

Add numeric suffix to Sampler names.  
defaults to: true

No

proxy.sampler\_format

Default format string for new samplers when Use format string is selected as naming scheme.  
Defaults to: #{counter,number,000} - #{path} (#{name})

No

proxy.excludes.suggested

List of URL patterns that will be added to URL Patterns to exclude.  
Separate multiple lines with ;  
Defaults to: .\*\\\\.(bmp|css|js|gif|ico|jpe?g|png|swf|woff|woff2)

No

jmeter.httpsampler

Change the default HTTP Sampler.  
Can be one of

HTTPSampler or Java

Use the Java Sampler

HTTPSampler2

HttpClient4

Use Apache HTTPClient version 4

Defaults to: HttpClient4

No

jmeter.httpclient.strict\_rfc2616

By default JMeter tries to be more lenient with [RFC 2616](http://tools.ietf.org/html/rfc2616)
 redirects and allows relative paths.  
If you want to test strict conformance, set this value to true.  
When the property is true, JMeter follows [RFC 3986 section 5.2](https://tools.ietf.org/html/3986#section-5.2)
.  
Defaults to: false

No

proxy.content\_type\_include

Default content-type include filter to use. Specified as a regex.  
Defaults to: text/html|text/plain|text/xml

No

proxy.content\_type\_exclude

Default content-type exclude filter to use. Specified as a regex.  
Defaults to: image/.\*|text/css|application/.\*

No

proxy.headers.remove

Default headers to remove from Header Manager elements. Specified as comma separated list  

The headers Cookie and Authorization are always removed.

Defaults to: If-Modified-Since,If-None-Match,Host

No

proxy.binary.types

Binary content-type handling.  
These content-types will be handled by saving the request in a file.  
Defaults to: application/x-amf,application/x-java-serialized-object,binary/octet-stream

No

proxy.binary.directory

The files will be saved in this directory.  
Defaults to: user.dir

No

proxy.binary.filesuffix

The files will be created suffixed with this value.  
Defaults to: .binary

No

proxy.redirect.disabling

Whether to attempt disabling of samples that resulted from redirects where the generated samples use auto-redirection.  
Defaults to: true

No

proxy.ssl.protocol

SSL configuration.  
Defaults to: TLS

No

19.19 Test Script Recorder certificate configuration[¶](#test_script_recorder_cert "Link to here")

===================================================================================================

### Parameters

Attribute

Description

Required

proxy.cert.directory

Defaults to: _JMeter bin directory_

No

proxy.cert.file

Defaults to: proxyserver.jks

No

proxy.cert.type

Defaults to: JKS

No

proxy.cert.keystorepass

Defaults to: password

No

proxy.cert.keypassword

Defaults to: password

No

proxy.cert.factory

Defaults to: SunX509

No

proxy.cert.alias

Define this property if you wish to use a special entry from the keystore.  
Defaults to empty value

No

proxy.cert.validity

The default validity (in days) for certificates created by JMeter.  
Defaults to: 7

No

proxy.cert.dynamic\_keys

Use dynamic key generation (if supported by JMeter/JVM).  
If false, will revert to using a single key with no certificate.  
Defaults to: true

No

19.20 JMeter Proxy configuration[¶](#proxy_config "Link to here")

==================================================================

### Parameters

Attribute

Description

Required

http.proxyDomain

Use command-line flags for user-name and password.  
Defaults to: NTLM domain, if required by HTTPClient sampler

No

19.21 HTML Parser configuration[¶](#parser_config "Link to here")

==================================================================

### Parameters

Attribute

Description

Required

HTTPResponse.parsers

Space-separated list of parser groups.  

For each parser, there should be a _parser_.types and a _parser_.className property

Defaults to: htmlParser wmlParser cssParser

No

cssParser.className

CSS Parser based on ph-css.  
Defaults to: org.apache.jmeter.protocol.http.parser.CssParser

No

cssParser.types

Content types handled by cssParser.  
Defaults to: text/css

No

css.parser.cache.size

CSS parser LRU cache size. This cache stores the URLs found in a CSS to avoid continuously parsing the CSS. By default the cache size is 400. It can be disabled by setting its value to 0.  
Defaults to: 400

No

css.parser.ignore\_all\_css\_errors

Let the CSS Parser ignore all CSS errors.  
Defaults to: true

No

htmlParser.className

Define the HTML parser to be used.  
Do not comment this property.  

org.apache.jmeter.protocol.http.parser.LagartoBasedHtmlParser

This new parser (since 2.10) should perform better than all others. See [Bug 55632](https://bz.apache.org/bugzilla/show_bug.cgi?id=55632)
.

org.apache.jmeter.protocol.http.parser.JTidyHTMLParser

Default parser before JMeter version 2.10

org.apache.jmeter.protocol.http.parser.RegexpHTMLParser

Note that Regexp extractor may detect references that have been commented out.

In many cases it will work OK, but you should be aware that it may generate additional references.

org.apache.jmeter.protocol.http.parser.JsoupBasedHtmlParser

This parser is based on JSoup. It should be the most accurate parser, but it is less performant than LagartoBasedHtmlParser

Defaults to: org.apache.jmeter.protocol.http.parser.LagartoBasedHtmlParser

Yes

htmlParser.types

Used by HTTPSamplerBase to associate htmlParser with content types below.  
Defaults to: text/html application/xhtml+xml application/xml text/xml

No

wmlParser.className

Defaults to: org.apache.jmeter.protocol.http.parser.RegexpHTMLParser

No

wmlParser.types

Used by HTTPSamplerBase to associate wmlParser with content types below.  
Defaults to: text/vnd.wap.wml

No

19.22 Remote batching configuration[¶](#remote_batching_config "Link to here")

===============================================================================

Configure how SampleResults are sent from server to client when using distributed testing.

Note that the mode is currently resolved on the client, while other properties (e.g. time\_threshold) are resolved on the server.

Since JMeter version 2.9, default is StrippedBatch, which returns samples in batch mode (every 100 samples or every minute by default).  
You can set mode by configuring:

                    mode=_one of the possible modes below_
                

StrippedBatch strips response data from SampleResult, so if you need the response data, change to another mode.

Possible modes are:

Standard

Sends SampleResult one by one

Batch

Accumulates SampleResults before sending them. Configured by properties num\_sample\_threshold and time\_threshold

Statistical

returns sample summary statistics. Configured by properties key\_on\_threadname and time\_threshold

Stripped

Similar to Standard mode but strips Response from SampleResult. Configured by property sample\_sender\_strip\_also\_on\_error

StrippedBatch

Same as Batch but strips Response from SampleResult. Configured by properties num\_sample\_threshold, time\_threshold and sample\_sender\_strip\_also\_on\_error

Asynch

Asynchronous sender; uses a queue and background worker process to return the samples. Configured by property asynch.batch.queue.size

StrippedAsynch

Same as Asynch but strips response data from SampleResult. Configured by properties asynch.batch.queue.size and sample\_sender\_strip\_also\_on\_error

StrippedDiskStore

Same as DiskStore but strips response data from SampleResult

Class extending [AbstractSampleSender](../api/org/apache/jmeter/samplers/AbstractSampleSender.html)
 (org.example.load.MySampleSender for example)

A custom implementation of your choice

### Parameters

Attribute

Description

Required

sample\_sender\_client\_configured

How is Sample sender implementations configured:  

true

(default) means client configuration will be used

false

means server configuration will be used

Defaults to: true

No

sample\_sender\_strip\_also\_on\_error

By default when Stripping modes are used JMeter since version 3.1 will strip response even for SampleResults in error. If you want to revert to previous behaviour (no stripping of Responses in error) set this property to false  
Defaults to: true

No

mode

Remote batching support.  
Since JMeter version 2.9, default is StrippedBatch, which returns samples in batch mode (every 100 samples or every minute by default).  

Note also that StrippedBatch strips response data from SampleResult, so if you need the response data, change to another mode.

No

key\_on\_threadname

Set to true to key statistical samples on threadName rather than threadGroup.  
Defaults to: false

No

num\_sample\_threshold

Number of SampleResults to accumulate before sending to client.  
Defaults to: 100

No

time\_threshold

Time to retain SampleResults before sending them to client. Value is in milliseconds.  
Defaults to: 60000

No

asynch.batch.queue.size

Default queue size used by Async mode.  
Defaults to: 100

No

19.23 JDBC Request configuration[¶](#jdbc_request "Link to here")

==================================================================

### Parameters

Attribute

Description

Required

jdbcsampler.nullmarker

String used to indicate a null value.  
Defaults to: \]NULL\[\
\
No\
\
jdbcsampler.max\_retain\_result\_size\
\
Max bytes to store from a CLOB or BLOB in the sampler.  \
Defaults to: 65536 (bytes)\
\
No\
\
jdbc.config.check.query\
\
List of queries used to determine if the database is still responding.  \
Defaults to:\
\
select 1 from INFORMATION\_SCHEMA.SYSTEM\_USERS|select 1 from dual|select 1 from sysibm.sysdummy1|select 1|select 1 from rdb$database\
\
No\
\
jdbc.config.jdbc.driver.class\
\
List of JDBC driver class name  \
Defaults to:\
\
com.mysql.jdbc.Driver|org.postgresql.Driver|oracle.jdbc.OracleDriver|com.ingres.jdbc.IngresDriver|com.microsoft.sqlserver.jdbc.SQLServerDriver|com.microsoft.jdbc.sqlserver.SQLServerDriver|org.apache.derby.jdbc.ClientDriver|org.hsqldb.jdbc.JDBCDriver|com.ibm.db2.jcc.DB2Driver|org.apache.derby.jdbc.ClientDriver|org.h2.Driver|org.firebirdsql.jdbc.FBDriver|org.mariadb.jdbc.Driver|org.sqlite.JDBC|net.sourceforge.jtds.jdbc.Driver|com.exasol.jdbc.EXADriver\
\
No\
\
19.24 OS Process Sampler configuration[¶](#os_sampler "Link to here")\
\
======================================================================\
\
19.25 TCP Sampler configuration[¶](#tcp_sampler "Link to here")\
\
================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
tcp.handler\
\
The default handler class.  \
Defaults to: TCPClientImpl\
\
No\
\
tcp.eolByte\
\
Set this to a value outside the range \-128 to +127 to skip eol checking.  \
Defaults to byte value for end of line: 1000\
\
No\
\
tcp.charset\
\
TCP Charset, used by org.apache.jmeter.protocol.tcp.sampler.TCPClientImpl.  \
Defaults to platforms default charset as returned by Charset.defaultCharset().name()\
\
No\
\
tcp.status.prefix\
\
String at the beginning of the status response code.  \
Defaults to: Status\
\
No\
\
tcp.status.suffix\
\
String at the end of the status response code.  \
defaults to: .\
\
No\
\
tcp.status.properties\
\
Property file to convert codes to messages.  \
Defaults to: mytestfiles/tcpstatus.properties\
\
No\
\
tcp.binarylength.prefix.length\
\
The length prefix used by LengthPrefixedBinaryTCPClientImpl implementation (in bytes).  \
Defaults to: 2\
\
No\
\
19.26 Summariser - Generate Summary Results - configuration (mainly applies to CLI mode)[¶](#summariser "Link to here")\
\
========================================================================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
summariser.name\
\
Comment the following property to disable the default CLI mode summariser.  \
\[or change the value to rename it\]  \
\
Applies to CLI mode only\
\
Defaults to: summary\
\
No\
\
summariser.interval\
\
Interval between summaries (in seconds).  \
Defaults to: 30\
\
No\
\
summariser.log\
\
Write messages to log file.  \
Defaults to: true\
\
No\
\
summariser.out\
\
Write messages to System.out.  \
Defaults to: true\
\
No\
\
summariser.ignore\_transaction\_controller\_sample\_result\
\
Ignore SampleResults generated by TransactionControllers.  \
Defaults to: true\
\
No\
\
19.27 Aggregate Report and Aggregate Graph - configuration[¶](#aggregate_report_graph "Link to here")\
\
======================================================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
aggregate\_rpt\_pct1\
\
Percentiles to display in reports.  \
Given as a float value between 0 and 100 (means percent).  \
First percentile to display.  \
Defaults to: 90\
\
No\
\
aggregate\_rpt\_pct2\
\
Second percentile to display.  \
Given as a float value between 0 and 100 (means percent).  \
Defaults to: 95\
\
No\
\
aggregate\_rpt\_pct3\
\
Second percentile to display.  \
Given as a float value between 0 and 100 (means percent).  \
Defaults to: 99\
\
No\
\
19.28 BackendListener - configuration[¶](#backend "Link to here")\
\
==================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
backend\_graphite.send\_interval\
\
Send interval in seconds.  \
Defaults to: 1 second\
\
No\
\
backend\_influxdb.send\_interval\
\
Send interval in seconds.  \
Defaults to: 5 seconds\
\
No\
\
backend\_influxdb.connection\_timeout\
\
InfluxDB connection timeout.  \
Defaults to: 1000 millis\
\
No\
\
backend\_influxdb.socket\_timeout\
\
InfluxDB socket read timeout.  \
Defaults to: 3000 millis\
\
No\
\
backend\_influxdb.connection\_request\_timeout\
\
InfluxDB timeout to get a connection.  \
Defaults to: 100 millis\
\
No\
\
backend\_metrics\_window\
\
Backend metrics sliding window size for Percentiles, Min and Max.  \
Defaults to: 100\
\
No\
\
backend\_metrics\_large\_window\
\
Backend metrics sliding window size for Percentiles, Min and Max. when backend\_metrics\_window\_mode=timed  \
Setting this value too high can lead to OOM Backend metrics sliding window size Defaults to: 5000\
\
No\
\
backend\_metrics\_percentile\_estimator\
\
Specify the [Percentile Estimation Type](https://commons.apache.org/proper/commons-math/javadocs/api-3.6.1/org/apache/commons/math3/stat/descriptive/rank/Percentile.EstimationType.html)\
 to use.  \
To make the values from the dashboard compatible with the Aggregate Report, use the value R\_3.  \
Defaults to: LEGACY\
\
No\
\
backend\_metrics\_window\_mode\
\
Backend metrics window mode. Possible values:\
\
*   fixed : fixed-size window\
*   timed : time boxed\
\
Defaults to: fixed\
\
No\
\
19.29 BeanShell configuration[¶](#beanshell "Link to here")\
\
============================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
beanshell.server.port\
\
BeanShell Server properties.  \
Define the port number as non-zero to start the http server on that port.  \
The telnet server will be started on the next port.  \
Defaults to: 0 (i.e. don't start the server)\
\
There is no security. Anyone who can connect to the port can issue any BeanShell commands. These can provide unrestricted access to the JMeter application and the host. **Do not enable the server unless the ports are protected against access, e.g. by a firewall.**\
\
No\
\
beanshell.server.file\
\
Define the server initialisation file.  \
Defaults to: ../extras/startup.bsh\
\
No\
\
beanshell.init.file\
\
Define a file to be processed at startup.  \
This is processed using its own interpreter.  \
Defaults to empty value.\
\
No\
\
beanshell.sampler.init\
\
Define the initialisation files for BeanShell Sampler, Function and other BeanShell elements.  \
\
N.B. Beanshell test elements do not share interpreters. Each element in each thread has its own interpreter. This is retained between samples.\
\
Defaults to empty value.\
\
No\
\
beanshell.function.init\
\
Defaults to empty value.\
\
No\
\
beanshell.assertion.init\
\
Defaults to empty value.\
\
No\
\
beanshell.listener.init\
\
Defaults to empty value.\
\
No\
\
beanshell.postprocessor.init\
\
Defaults to empty value.\
\
No\
\
beanshell.preprocessor.init\
\
Defaults to empty value.\
\
No\
\
beanshell.timer.init\
\
Defaults to empty value.\
\
No\
\
The file BeanShellListeners.bshrc contains sample definitions of Test and Thread Listeners.  \
\
19.30 MailerModel configuration[¶](#mailer "Link to here")\
\
===========================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
mailer.successlimit\
\
Number of successful samples before a message is sent.  \
Defaults to: 2\
\
No\
\
mailer.failurelimit\
\
Number of failed samples before a message is sent.  \
Defaults to: 2\
\
No\
\
19.31 CSVRead configuration[¶](#csv "Link to here")\
\
====================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
csvread.delimiter\
\
CSVRead delimiter setting (default ",").  \
\
Make sure that there are no trailing spaces or tabs after the delimiter characters, or these will be included in the list of valid delimiters.\
\
Defaults to: ,\
\
No\
\
19.32 \_\_time() function configuration[¶](#time "Link to here")\
\
=================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
time.YMD\
\
This and the following properties can be used to redefine the default time formats.  \
Defaults to: yyyyMMdd\
\
No\
\
time.HMS\
\
Defaults to: HHmmss\
\
No\
\
time.YMDHMS\
\
Defaults to: yyyyMMdd-HHmmss\
\
No\
\
time.USER1\
\
Defaults to empty value\
\
No\
\
time.USER2\
\
Defaults to empty value\
\
No\
\
19.33 CSV DataSet configuration[¶](#csv_dataset "Link to here")\
\
================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
csvdataset.eofstring\
\
String to return at EOF (if recycle not used).  \
Defaults to: <EOF>\
\
No\
\
csvdataset.file.encoding\_list\
\
List of file encoding values  \
Defaults to: platform default\
\
No\
\
19.34 LDAP Sampler configuration[¶](#ldap "Link to here")\
\
==========================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
ldapsampler.max\_sorted\_results\
\
Maximum number of search results returned by a search that will be sorted to guarantee a stable ordering (if more results then this limit are returned then no sorting is done).  \
Set to zero to turn off all sorting, in which case "Equals" response assertions will be very likely to fail against search results.  \
Defaults to: 1000\
\
No\
\
assertion.equals\_section\_diff\_len\
\
Number of characters to log for each of three sections (starting matching section, diff section, ending matching section where not all sections will appear for all diffs) diff display when an Equals assertion fails. So a value of 100 means a maximum of 300 characters of diff text will be displayed (plus a number of extra characters like "..." and "\[\[\["/"\]\]\]" which are used to decorate it).  \
Defaults to: 100\
\
No\
\
assertion.equals\_diff\_delta\_start\
\
Test written out to log to signify start/end of diff delta.  \
Defaults to: \[\[\[\
\
No\
\
assertion.equals\_diff\_delta\_end\
\
Defaults to: \]\]\]\
\
No\
\
19.35 Miscellaneous configuration[¶](#miscellaneous "Link to here")\
\
====================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
cssselector.parser.cache.size\
\
Size of cache used by CSS Selector Extractor (for JODD implementation only) to store parsed CSS Selector expressions.  \
Defaults to: 400\
\
No\
\
resultcollector.action\_if\_file\_exists\
\
Used to control what happens when you start a test and have listeners that could overwrite existing result files.  \
Possible values:\
\
*   ASK : Ask user\
*   APPEND : Append results to existing file\
*   DELETE : Delete existing file and start a new file\
\
No\
\
mirror.server.port\
\
If defined and greater then zero, then start the mirror server on the port.  \
Defaults to: 0\
\
No\
\
oro.patterncache.size\
\
ORO PatternCacheLRU size.  \
Defaults to: 1000\
\
No\
\
function.cache.per.iteration\
\
Cache function execution during test execution.\
\
By default, JMeter caches function properties during a test iteration, however, it might cause unexpected results when a component is shared across threads and the expression depends on the thread variables.\
\
The property will likely be removed in an upcoming version, so if you need it consider raising an issue with your use-case.\
\
Defaults to: false\
\
No\
\
propertyEditorSearchPath\
\
TestBeanGui  \
Defaults to: null\
\
No\
\
jmeter.expertMode\
\
Turn expert mode on/off: expert mode will show expert-mode beans and properties.  \
Defaults to: true\
\
No\
\
httpsampler.max\_bytes\_to\_store\_per\_request\
\
Max size of bytes stored in memory per SampleResult. Ensure that you don't exceed the maximum capacity of a Java Array and remember that the higher you set this value, the more memory JMeter will consume.  \
Defaults to: 0 bytes which means no truncation will occur\
\
No\
\
httpsampler.max\_buffer\_size\
\
Max size of buffer in bytes used when reading responses.  \
Defaults to: 66560 bytes\
\
No\
\
httpsampler.max\_redirects\
\
Maximum redirects to follow in a single sequence.  \
Defaults to: 20\
\
No\
\
httpsampler.max\_frame\_depth\
\
Maximum frame/iframe nesting depth.  \
defaults to: 5\
\
No\
\
httpsampler.separate.container\
\
Revert to [Bug 51939](https://bz.apache.org/bugzilla/show_bug.cgi?id=51939)\
 behaviour (no separate container for embedded resources) by setting the following false.  \
defaults to: true\
\
No\
\
httpsampler.ignore\_failed\_embedded\_resources\
\
If embedded resources download fails due to missing resources or other reasons, if this property is true, Parent sample will not be marked as failed.  \
Defaults to: false\
\
No\
\
httpsampler.parallel\_download\_thread\_keepalive\_inseconds\
\
Keep-alive time for the parallel download threads (in seconds).  \
Defaults to: 60\
\
No\
\
httpsampler.embedded\_resources\_use\_md5\
\
Don't keep the embedded resources response data; just keep the size and the MD5 sum.  \
Defaults to: false\
\
No\
\
httpsampler.user\_defined\_methods\
\
List of extra HTTP methods that should be available in select box.  \
Defaults to:\
\
VERSION-CONTROL,REPORT,CHECKOUT,CHECKIN,UNCHECKOUT,MKWORKSPACE,UPDATE,LABEL,MERGE,BASELINE-CONTROL,MKACTIVITY\
\
No\
\
sampleresult.default.encoding\
\
The encoding to be used if none is provided.  \
Defaults to: UTF-8 (since 5.6.1)\
\
No\
\
CookieManager.delete\_null\_cookies\
\
CookieManager behaviour - should cookies with null/empty values be deleted?  \
Use false to revert to original behaviour.  \
Defaults to: true\
\
No\
\
CookieManager.allow\_variable\_cookies\
\
CookieManager behaviour - should variable cookies be allowed?  \
Use false to revert to original behaviour.  \
Defaults to: true\
\
No\
\
CookieManager.save.cookies\
\
CookieManager behaviour - should Cookies be stored as variables?  \
Default to: false\
\
No\
\
CookieManager.name.prefix\
\
CookieManager behaviour - prefix to add to cookie name before storing it as a variable.  \
Default is COOKIE\_; to remove the prefix, define it as one or more spaces.  \
Defaults to: COOKIE\_\
\
No\
\
CookieManager.check.cookies\
\
CookieManager behaviour - check received cookies are valid before storing them?  \
Use false to revert to previous behaviour.  \
Defaults to: true\
\
No\
\
cookies\
\
Netscape HTTP Cookie file.  \
Defaults to: cookies\
\
No\
\
javascript.use\_rhino\
\
Ability to switch to Rhino as default Javascript Engine used by IfController and [\_\_javaScript](../usermanual/functions.html#__javaScript)\
 function.  \
\
JMeter uses Nashorn since 3.2 version. If you want to use Rhino, set this value to true\
\
Defaults to: false\
\
No\
\
jmeter.regex.engine\
\
Ability to switch out the old Oro Regex implementation with the JDK built-in implementation. Any value different to oro will disable the Oro implementation and enable the JDK based.\
\
We intend to switch the default to the JDK based one in a later version of JMeter.\
\
Defaults to: oro\
\
No\
\
jmeter.regex.patterncache.size\
\
We assist the JDK based Regex implementation by caching Pattern objects. The size of the cache can be set with this setting. It can be disabled by setting it to 0. Defaults to: 1000\
\
No\
\
jmeterengine.threadstop.wait\
\
Number of milliseconds to wait for a thread to stop.  \
Defaults to: 5000\
\
No\
\
jmeterengine.remote.system.exit\
\
Whether to invoke System.exit(0) in server exit code after stopping RMI.  \
Defaults to: false\
\
No\
\
jmeterengine.stopfail.system.exit\
\
Whether to call System.exit(1) on failure to stop threads in CLI mode.  \
This only takes effect if the test was explicitly requested to stop.  \
If this is disabled, it may be necessary to kill the JVM externally.  \
Defaults to: true\
\
No\
\
jmeterengine.force.system.exit\
\
Whether to force call System.exit(0) at end of test in CLI mode, even if there were no failures and the test was not explicitly asked to stop.  \
Without this, the JVM may never exit if there are other threads spawned by the test which never exit.  \
Defaults to: false\
\
No\
\
jmeter.exit.check.pause\
\
How long to pause (in ms) in the daemon thread before reporting that the JVM has failed to exit.  \
If the value is less than zero, the JMeter does not start the daemon thread  \
Defaults to: 2000\
\
No\
\
jmeterengine.nongui.port\
\
If running CLI mode, then JMeter listens on the following port for a shutdown message.  \
To disable, set the port to 1000 or less.  \
Defaults to: 4445\
\
No\
\
jmeterengine.nongui.maxport\
\
If the initial port is busy, keep trying until this port is reached (to disable searching, set the value less than or equal to the .port property).  \
Defaults to: 4455\
\
No\
\
jmeterthread.rampup.granularity\
\
How often to check for shutdown during ramp-up (milliseconds).  \
Defaults to: 1000\
\
No\
\
onload.expandtree\
\
Should JMeter expand the tree when loading a test plan?  \
Default value is false since JMeter 2.7  \
Defaults to: false\
\
No\
\
jsyntaxtextarea.wrapstyleword\
\
JSyntaxTextArea configuration.  \
Defaults to: true\
\
No\
\
jsyntaxtextarea.linewrap\
\
Defaults to: true\
\
No\
\
jsyntaxtextarea.codefolding\
\
Defaults to: true\
\
No\
\
jsyntaxtextarea.maxundos\
\
Set to zero to disable undo feature in JSyntaxTextArea.  \
Defaults to: 50\
\
No\
\
jsyntaxtextarea.font.family\
\
Change the font on the (JSyntax) Text Areas. (Useful for HiDPI screens).  \
Defaults to empty value, which means platform default monospaced font\
\
No\
\
jsyntaxtextarea.font.size\
\
Change the size of the (JSyntax) Text Areas. Will be used only, when jsyntaxtextarea.font.family is set.  \
Defaults to: \-1\
\
No\
\
loggerpanel.usejsyntaxtext\
\
Set this to false to disable the use of JSyntaxTextArea for the Console Logger panel.  \
Defaults to: true\
\
No\
\
view.results.tree.max\_results\
\
Maximum number of main samples, that should be stored and displayed.  \
A value of 0 will store all results. This might consume a lot of memory.  \
Defaults to: 500\
\
No\
\
view.results.tree.max\_size\
\
Maximum size (in bytes) of HTML page that can be displayed.  \
Set to zero to disable the size check and display the whole response.  \
Defaults to: 10485760\
\
No\
\
view.results.tree.max\_line\_size\
\
Maximum size (in characters) of the line in the displayed.  \
This property works around Bug 63620 since Swing hangs when displaying very long lines.  \
Set to zero to disable line wrapping.  \
Defaults to: 110000\
\
No\
\
view.results.tree.soft\_wrap\_line\_size\
\
Line size (in characters) to consider wrapping to make UI faster.  \
This property works around Bug 63620 since Swing hangs when displaying very long lines.  \
Set to zero to disable line wrapping.  \
Defaults to: view.results.tree.max\_line\_size / 1.1f\
\
No\
\
view.results.tree.renderers\_order\
\
Order of Renderers in View Results Tree.  \
\
Note full class names should be used for non JMeter core renderers\
\
For JMeter core renderers, class names start with . and are automatically prefixed with org.apache.jmeter.visualizers  \
Defaults to:\
\
.RenderAsText,.RenderAsRegexp,.RenderAsCssJQuery,.RenderAsXPath,.RenderAsHTML,.RenderAsHTMLWithEmbedded,.RenderAsDocument,.RenderAsJSON,.RenderAsXML\
\
No\
\
view.results.tree.simple\_view\_limit\
\
Configures maximum document length for text view before switching to a simpler view, that does not do line breaks.  \
Works probably best, when combined with a low setting of view.results.tree.max\_line\_size. Can be switched off by setting the value to \-1.  \
Defaults to: 10000\
\
No\
\
document.max\_size\
\
Maximum size (in bytes) of Document that can be parsed by Tika engine  \
Set to zero to disable the size check.  \
Defaults to: 10485760\
\
No\
\
text.kerning.max\_document\_size\
\
Configures the maximum document length for rendering with kerning enabled.  \
Defaults to: 10000\
\
No\
\
JMSSampler.useSecurity.properties\
\
JMS options.  \
Enable the following property to stop JMS Point-to-Point Sampler from using the properties java.naming.security.\[principal|credentials\] when creating the queue connection.  \
Defaults to: false\
\
No\
\
confirm.delete.skip\
\
Set the following value to true in order to skip the delete confirmation dialogue.  \
Defaults to: false\
\
No\
\
19.36 Classpath configuration[¶](#classpath "Link to here")\
\
============================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
search\_paths\
\
List of directories (separated by ;) to search for additional JMeter plugin classes, for example new GUI elements and samplers.  \
Any jar file in such a directory will be automatically included; jar files in sub directories are ignored.  \
The given value is in addition to any jars found in the lib/ext directory.  \
Do not use this for utility or plugin dependency jars.  \
Defaults to empty value.\
\
No\
\
user.classpath\
\
List of directories that JMeter will search for utility and plugin dependency classes.  \
Use your platform path separator (java.io.File.pathSeparatorChar in Java) to separate multiple paths.  \
Any jar file in such a directory will be automatically included; jar files in sub directories are ignored.  \
The given value is in addition to any jars found in the lib directory.  \
All entries will be added to the class path of the system class loader and also to the path of the JMeter internal loader.  \
Paths with spaces may cause problems for the JVM.  \
Defaults to empty value.\
\
No\
\
plugin\_dependency\_paths\
\
List of directories (separated by ;) that JMeter will search for utility and plugin dependency classes.  \
Any jar file in such a directory will be automatically included; jar files in sub directories are ignored.  \
The given value is in addition to any jars found in the lib directory or given by the user.classpath property.  \
All entries will be added to the path of the JMeter internal loader only.  \
For plugin dependencies this property should be used instead of user.classpath.  \
Defaults to empty value.\
\
No\
\
classfinder.functions.contain\
\
The classpath finder currently needs to load every single JMeter class to find the classes it needs.  \
For CLI mode, it's only necessary to scan for Function classes, but all classes are still loaded.  \
All current Function classes include ".function." in their name, and none include ".gui." in the name, so the number of unwanted classes loaded can be reduced by checking for these. However, if a valid function class name does not match these restrictions, it will not be loaded. If problems are encountered, then comment or change this or the following property.  \
Defaults to: .functions.\
\
No\
\
classfinder.functions.notContain\
\
Defaults to: .gui.\
\
No\
\
19.37 Reporting configuration[¶](#reporting "Link to here")\
\
============================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
jmeter.reportgenerator.apdex\_satisfied\_threshold\
\
Sets the satisfaction threshold for the APDEX calculation (in milliseconds).  \
Defaults to: 500\
\
No\
\
jmeter.reportgenerator.apdex\_tolerated\_threshold\
\
Sets the tolerance threshold for the APDEX calculation (in milliseconds).  \
Defaults to: 1500\
\
No\
\
jmeter.reportgenerator.sample\_filter\
\
Regular Expression which Indicates which samples to keep for graphs and statistics generation.  \
Empty value means no filtering  \
Defaults to empty value.\
\
No\
\
jmeter.reportgenerator.temp\_dir\
\
Sets the temporary directory used by the generation process if it needs file I/O operations.  \
Defaults to: temp\
\
No\
\
jmeter.reportgenerator.statistic\_window\
\
Sets the size of the sliding window used by percentile evaluation.  \
\
Caution: higher value provides a better accuracy but needs more memory.\
\
Defaults to: 20000\
\
No\
\
jmeter.reportgenerator.report\_title\
\
Configure this property to change the report title  \
Defaults to: Apache JMeter Dashboard\
\
No\
\
jmeter.reportgenerator.overall\_granularity\
\
Defines the overall granularity for over time graphs  \
Defaults to: 60000\
\
No\
\
jmeter.reportgenerator.graph.responseTimePercentiles.classname\
\
Response Time Percentiles graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.ResponseTimePercentilesGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.responseTimePercentiles.title\
\
Defaults to: Response Time Percentiles\
\
No\
\
jmeter.reportgenerator.graph.responseTimeDistribution.classname\
\
Response Time Distribution graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.ResponseTimeDistributionGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.responseTimeDistribution.title\
\
Defaults to: Response Time Distribution\
\
No\
\
jmeter.reportgenerator.graph.responseTimeDistribution.property.set\_granularity\
\
Defaults to: 100\
\
No\
\
jmeter.reportgenerator.graph.activeThreadsOverTime.classname\
\
Active Threads Over Time graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.ActiveThreadsGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.activeThreadsOverTime.title\
\
Defaults to: Active Threads Over Time\
\
No\
\
jmeter.reportgenerator.graph.activeThreadsOverTime.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.timeVsThreads.classname\
\
Time VS Threads graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.TimeVSThreadGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.timeVsThreads.title\
\
Defaults to: Time VS Threads\
\
No\
\
jmeter.reportgenerator.graph.bytesThroughputOverTime.classname\
\
Bytes Throughput Over Time graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.BytesThroughputGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.bytesThroughputOverTime.title\
\
Defaults to: Bytes Throughput Over Time\
\
No\
\
jmeter.reportgenerator.graph.bytesThroughputOverTime.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.responseTimesOverTime.classname\
\
Response Time Over Time graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.ResponseTimeOverTimeGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.responseTimesOverTime.title\
\
Defaults to: Response Time Over Time\
\
No\
\
jmeter.reportgenerator.graph.responseTimesOverTime.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.latenciesOverTime.classname\
\
Latencies Over Time graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.LatencyOverTimeGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.latenciesOverTime.title\
\
Defaults to: Latencies Over Time\
\
No\
\
jmeter.reportgenerator.graph.latenciesOverTime.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.responseTimeVsRequest.classname\
\
Response Time Vs Request graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.ResponseTimeVSRequestGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.responseTimeVsRequest.title\
\
Defaults to: Response Time Vs Request\
\
No\
\
jmeter.reportgenerator.graph.responseTimeVsRequest.exclude\_controllers\
\
Defaults to: true\
\
No\
\
jmeter.reportgenerator.graph.responseTimeVsRequest.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.latencyVsRequest.classname\
\
Latencies Vs Request graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.LatencyVSRequestGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.latencyVsRequest.title\
\
Defaults to: Latencies Vs Request\
\
No\
\
jmeter.reportgenerator.graph.latencyVsRequest.exclude\_controllers\
\
Defaults to: true\
\
No\
\
jmeter.reportgenerator.graph.latencyVsRequest.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.hitsPerSecond.classname\
\
Hits Per Second graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.HitsPerSecondGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.hitsPerSecond.title\
\
Defaults to: Hits Per Second\
\
No\
\
jmeter.reportgenerator.graph.hitsPerSecond.exclude\_controllers\
\
Defaults to: true\
\
No\
\
jmeter.reportgenerator.graph.hitsPerSecond.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.codesPerSecond.classname\
\
Codes Per Second graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.CodesPerSecondGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.codesPerSecond.title\
\
Defaults to: Codes Per Second\
\
No\
\
jmeter.reportgenerator.graph.codesPerSecond.exclude\_controllers\
\
Defaults to: true\
\
No\
\
jmeter.reportgenerator.graph.codesPerSecond.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.graph.transactionsPerSecond.classname\
\
Transactions Per Second graph definition  \
Defaults to:\
\
org.apache.jmeter.report.processor.graph.impl.TransactionsPerSecondGraphConsumer\
\
No\
\
jmeter.reportgenerator.graph.transactionsPerSecond.title\
\
Defaults to: Transactions Per Second\
\
No\
\
jmeter.reportgenerator.graph.transactionsPerSecond.property.set\_granularity\
\
Defaults to: ${jmeter.reportgenerator.overall\_granularity}\
\
No\
\
jmeter.reportgenerator.exporter.html.classname\
\
HTML Export  \
Defaults to:\
\
org.apache.jmeter.report.dashboard.HtmlTemplateExporter\
\
No\
\
jmeter.reportgenerator.exporter.html.property.template\_dir\
\
Sets the source directory of templated files from which the html pages are generated.  \
Defaults to: report-template\
\
No\
\
jmeter.reportgenerator.exporter.html.property.output\_dir\
\
Sets the destination directory for generated html pages.  \
This will be overridden by the command line option \-o.  \
Defaults to: report-output\
\
No\
\
jmeter.reportgenerator.exporter.html.series\_filter\
\
Regular Expression which Indicates which graph series are filtered in display.  \
Empty value means no filtering.  \
Defaults to empty value.\
\
No\
\
jmeter.reportgenerator.exporter.html.filters\_only\_sample\_series\
\
Indicates whether series filter apply only on sample series  \
Defaults to: true\
\
No\
\
jmeter.reportgenerator.exporter.html.show\_controllers\_only\
\
Indicates whether only controller samples are displayed on graphs that support it.  \
Defaults to: false\
\
No\
\
jmeter.reportgenerator.date\_format\
\
Date format of report using by start\_date and end\_date properties.  \
Defaults to: yyyyMMddHHmmss\
\
No\
\
jmeter.reportgenerator.start\_date\
\
Start date of report using date\_format property.  \
Defaults to: nothing\
\
No\
\
jmeter.reportgenerator.end\_date\
\
End date of report using date\_format property.  \
Defaults to: nothing\
\
No\
\
generate\_report\_ui.generation\_timeout\
\
Timeout in milliseconds for Report generation when using Tools > Generate HTML report.  \
Defaults to: 300000\
\
No\
\
19.38 Additional property files to load[¶](#properties "Link to here")\
\
=======================================================================\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
user.properties\
\
Should JMeter automatically load additional JMeter properties?  \
File name to look for (comment to disable)  \
Defaults to: user.properties\
\
No\
\
system.properties\
\
Should JMeter automatically load additional system properties?  \
File name to look for (comment to disable)  \
Defaults to: system.properties\
\
No\
\
template.files\
\
Comma separated list of files that contain reference to templates and their description.  \
Path must be relative to JMeter root folder  \
Defaults to: /bin/templates/templates.xml\
\
No\
\
19.39 Thread Group Validation feature[¶](#validation "Link to here")\
\
=====================================================================\
\
Validation is the name of the feature used to rapidly validate a Thread Group runs fine\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
testplan\_validation.tree\_cloner\_class\
\
Default implementation is\
\
org.apache.jmeter.gui.action.validation.TreeClonerForValidation\
\
It runs validation without timers, with one thread and one iteration.  \
You can implement your own policy that must extend org.apache.jmeter.engine.TreeCloner.  \
JMeter will instantiate it and use it to create the Tree used to run validation on Thread Group.  \
Defaults to:\
\
org.apache.jmeter.gui.action.validation.TreeClonerForValidation\
\
No\
\
testplan\_validation.nb\_threads\_per\_thread\_group\
\
Number of threads to use to validate a Thread Group.  \
Defaults to: 1\
\
No\
\
testplan\_validation.ignore\_timers\
\
Ignore timers when validating the thread group of plan.  \
Defaults to: true\
\
No\
\
testplan\_validation.ignore\_backends\
\
Ignore BackendListener when validating the thread group of plan.  \
Defaults to: true\
\
No\
\
testplan\_validation.number\_iterations\
\
Number of iterations to use to validate a Thread Group.  \
Defaults to: 1\
\
No\
\
testplan\_validation.tpc\_force\_100\_pct\
\
Force throughput controllers that work in percentage mode to be a 100%.  \
Defaults to: false\
\
No\
\
19.40 Timer related feature[¶](#timer "Link to here")\
\
======================================================\
\
Timer are used to introduce think time in your plan.\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
timer.factor\
\
Apply a factor on computed pauses by the following Timers:\
\
*   Gaussian Random Timer\
*   Uniform Random Timer\
*   Poisson Random Timer\
\
Defaults to: 1.0f\
\
No\
\
think\_time\_creator.impl\
\
Default implementation that create the Timer structure to add to Test Plan. Implementation of interface [org.apache.jmeter.gui.action.thinktime.ThinkTimeCreator](../api/org/apache/jmeter/gui/action/thinktime/ThinkTimeCreator.html)\
 Defaults to: [org.apache.jmeter.thinktime.DefaultThinkTimeCreator](../api/org/apache/jmeter/thinktime/DefaultThinkTimeCreator.html)\
\
No\
\
think\_time\_creator.default\_timer\_implementation\
\
Default Timer GUI class added to Test Plan by DefaultThinkTimeCreator Defaults to: [org.apache.jmeter.timers.gui.UniformRandomTimerGui](../api/org/apache/jmeter/timers/gui/UniformRandomTimerGui.html)\
\
No\
\
think\_time\_creator.default\_constant\_pause\
\
Default constant pause of Timer Defaults to: 1000\
\
No\
\
think\_time\_creator.default\_range\
\
Default range pause of Timer Defaults to: 100\
\
No\
\
[^](#)\
\
19.41 Naming Policy[¶](#naming_policy "Link to here")\
\
======================================================\
\
Timer are used to introduce think time in your plan.\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
naming\_policy.prefix\
\
Prefix used when naming elements. Defaults to empty prefix\
\
No\
\
naming\_policy.suffix\
\
Prefix used when naming elements. Defaults to empty suffix\
\
No\
\
naming\_policy.impl\
\
Implementation of interface [org.apache.jmeter.gui.action.TreeNodeNamingPolicy](../api/org/apache/jmeter/gui/action/TreeNodeNamingPolicy.html)\
 Default implementation that create the Timer structure to add to Test Plan. Implementation of interface org.apache.jmeter.gui.action.thinktime.ThinkTimeCreator Defaults to: [org.apache.jmeter.gui.action.impl.DefaultTreeNodeNamingPolicy](../api/org/apache/jmeter/gui/action/impl/DefaultTreeNodeNamingPolicy.html)\
\
No\
\
[^](#)\
\
19.42 Help[¶](#help "Link to here")\
\
====================================\
\
Controls how documentation in JMeter is displayed\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
help.local\
\
Switch that allows using Local documentation opened in JMeter GUI.  \
By default we use Online documentation opened in Browser. Defaults to false\
\
No\
\
19.43 Advanced Groovy Scripting configuration[¶](#groovy "Link to here")\
\
=========================================================================\
\
Advanced properties for configuration of scripting in Groovy\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
groovy.utilities\
\
Path to Groovy file containing utility functions to make available to [\_\_groovy](../usermanual/functions.html#__groovy)\
 function.  \
Defaults to bin/utility.groovy\
\
No\
\
19.44 Advanced JSR-223 Scripting configuration[¶](#jsr223 "Link to here")\
\
==========================================================================\
\
Advanced properties for configuration of scripting in JSR-223\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
jsr223.init.file\
\
Path to JSR-223 file containing script to call on JMeter startup.\
\
The actual scripting engine to use will be determined by the extension of the init file name. If the file name has no extension, or no scripting engine could be found for that extension, Groovy will be used.\
\
This script can use pre-defined variables:\
\
*   log: Logger to log any message, uses SLF4J library\
*   props: JMeter Properties\
*   OUT: System.OUT, useful to write in the console\
\
No script is defined by default.\
\
No\
\
jsr223.compiled\_scripts\_cache\_size\
\
Used by JSR-223 elements.  \
Size of compiled scripts cache.  \
Defaults to: 100\
\
No\
\
19.45 Documentation generation[¶](#docgeneration "Link to here")\
\
=================================================================\
\
Advanced properties for documentation generation\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
docgeneration.schematic\_xsl\
\
Path to XSL file used to generate Schematic View of Test Plan.  \
When empty, JMeter will use the embedded one in src/core/org/apache/jmeter/gui/action/schematic.xsl  \
No default value\
\
No\
\
19.46 Security Provider[¶](#securityprovider "Link to here")\
\
=============================================================\
\
Advanced properties for documentation generation\
\
### Parameters\
\
Attribute\
\
Description\
\
Required\
\
security.provider\
\
The value must be in this format: <ClassName>\[:<Postion>\[:<ConfigString>\]\]\
\
No\
\
. Examples:  \
\
org.bouncycastle.jce.provider.BouncyCastleProvider\
\
Adds the BouncyCastleProvider to the next position available.\
\
org.bouncycastle.jce.provider.BouncyCastleProvider:1\
\
Adds the BouncyCastleProvider, at the first position.\
\
org.bouncycastle.jsse.provider.BouncyCastleJsseProvider:2:BC\
\
Adds the BouncyCastleJsseProvider, at the second position. And configure it to use the BC provider.\
\
security.provider.<n>\
\
Replace the <n> with any number. The SecurityProviders will be added in the alphabetical order of the property names. (First: security.provider and then security.provider.2, security.provider.3,...) See property security.provider\
\
No\
\
*   [< Prev](component_reference.html)\
    \
*   [Index](../index.html)\
    \
*   [Next >](functions.html)\
    \
\
Share this page:\
\
*   share\
*   tweet\
\
[Go to top](#top)\
\
Copyright © 1999 – 2024 , Apache Software Foundation\
\
Apache, Apache JMeter, JMeter, the Apache feather, and the Apache JMeter logo are trademarks of the Apache Software Foundation.