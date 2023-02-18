---

---

# AppDynamics

## What is an appdynamics call graph?

An AppDynamics call graph is a graphical representation of the interactions between various components of an application. It provides a visual representation of the flow of requests, calls, and transactions between the different components of an application, such as services, databases, and external APIs. The call graph allows developers and operations teams to quickly identify bottlenecks, slowdowns, and other performance issues within an application and helps them to optimize the performance of the application.

AppDynamics provides advanced performance monitoring and troubleshooting tools that enable you to capture and visualize the interactions between different components of an application in real-time, and to generate detailed call graphs and other performance reports that provide valuable insights into the performance of an application.

## In AppDynamics what should I check to find out why an application is slow

If you're using AppDynamics to monitor the performance of an application, here are some steps you can follow to determine why the application is slow:

* Monitor the Health Rules: AppDynamics provides a set of built-in health rules that can alert you to performance issues in your application. You should check the health rule violations to see if any performance issues have been detected.

* Check the Business Transactions: AppDynamics provides detailed performance metrics for each business transaction, including response time, throughput, and error rate. You can use these metrics to identify slow transactions and determine the root cause of the slowness.

* Analyze the End-User Experience: AppDynamics provides detailed insights into the end-user experience, including the time it takes for transactions to complete from the user's perspective. You can use this information to determine if the slowness is due to slow network connectivity or other issues.

* Investigate Slow Database Queries: AppDynamics provides detailed performance metrics for database queries, including query response time, throughput, and error rate. You can use this information to identify slow database queries and determine the root cause of the slowness.

* Monitor the Application Topology: AppDynamics provides a visual representation of the interactions between different components of an application, including services, databases, and external APIs. You can use the application topology to identify any bottlenecks or slowdowns in the flow of requests and transactions between components.

These are some of the steps you can take to find out why an application is slow using AppDynamics. By combining these tools, you should be able to gain a deep understanding of the performance of your application and identify the root cause of any performance issues.

## What is the difference between the AppDynamics machine agent and app agent?

AppDynamics is a comprehensive application performance management (APM) tool that helps organizations monitor and optimize their applications for optimal performance. The AppDynamics platform includes a variety of agents that can be used to monitor different aspects of application performance, including the machine agent and the app agent.

The machine agent is a component of the AppDynamics platform that is used to monitor the infrastructure on which the application is running. This agent provides visibility into server and operating system metrics, such as CPU usage, memory usage, disk usage, and network utilization. The machine agent is typically deployed on the same server as the application.

The app agent, on the other hand, is used to monitor the performance of the application code itself. This agent provides visibility into the performance of the application's individual transactions, as well as the performance of the application's individual components, such as servlets, controllers, and database queries. The app agent is typically deployed as a Java agent, .NET agent, or other language-specific agent, and is used to instrument the application code.

In summary, while both the machine agent and the app agent are important components of the AppDynamics platform, they are used to monitor different aspects of application performance. The machine agent provides visibility into the underlying infrastructure, while the app agent provides visibility into the performance of the application code itself.

## What is the AppDynamics Controller?

The AppDynamics Controller is a web-based management and monitoring console that is part of the AppDynamics platform. The Controller is the central hub of the AppDynamics platform, and it provides a single pane of glass for managing and monitoring the health and performance of your applications, infrastructure, and end-users.

The Controller offers a wide range of features and capabilities that help you manage and optimize the performance of your applications. These features include:

* Dashboard: The Controller offers a customizable dashboard that provides a high-level view of the performance of your applications and infrastructure. The dashboard includes a range of charts, graphs, and other visualizations that provide real-time insights into the health and performance of your applications.

* Alerting: The Controller can be configured to send alerts when performance issues are detected. You can set up alerts based on a wide range of criteria, such as response times, error rates, or server metrics.

* Reporting: The Controller offers a range of reporting capabilities that allow you to analyze and share performance data. You can generate reports on key performance indicators (KPIs), such as response times, error rates, and throughput.

* Troubleshooting: The Controller provides a range of troubleshooting tools that allow you to diagnose and resolve performance issues. These tools include thread dumps, heap dumps, and code-level diagnostics.

* Collaboration: The Controller offers collaboration features that allow you to share performance data with other team members. You can set up user accounts with different levels of access, and you can share performance data via dashboards, reports, and other tools.

In summary, the AppDynamics Controller is a critical component of the AppDynamics platform that provides a comprehensive set of features and capabilities for managing and optimizing the performance of your applications.

## what is DMM mode in appdynamics?

DMM (Dynamic Monitoring Mode) is a mode in AppDynamics that allows you to dynamically adjust the level of monitoring for your application in real-time based on the workload and traffic to the application.

In DMM, AppDynamics can automatically adjust the frequency of data collection, sampling, and other monitoring settings based on the traffic patterns of the application. This can help reduce the overhead of monitoring on your application and ensure that you are collecting the right level of data to diagnose issues and optimize performance.

DMM allows you to specify different monitoring settings for different parts of your application, such as specific business transactions or tiers, based on their importance and impact on the overall performance of the application. You can configure DMM using the AppDynamics Controller, which provides a graphical interface for specifying the monitoring levels and thresholds for each part of your application.

In addition to reducing overhead and improving the accuracy of monitoring, DMM can also help you optimize the performance of your application by identifying areas where additional monitoring or tuning may be needed. By providing real-time feedback on the impact of changes to the application, DMM can help you make informed decisions about how to optimize your application for better performance and user experience.

## How to set appdynamics agent to diagnostic mode in the controll xml config file

To set the DDM (Dynamic Debug Mode) to diagnostic level in the control.xml configuration file, you can add the following element:

```
<agent-config>
  <property name="debug.dynamicDebug.enabled" value="true"/>
  <property name="debug.dynamicDebug.level" value="diagnostic"/>
</agent-config>
```

This configuration enables dynamic debug mode and sets the debug level to "diagnostic", which provides the highest level of detail for diagnostic information.

You can add this element to the control.xml file in the "controller-info" directory of your AppDynamics agent installation. Once you have added the element and saved the file, you will need to restart the agent for the changes to take effect.

When dynamic debug mode is enabled, the AppDynamics agent will generate additional logging and diagnostic information, which can be used to troubleshoot issues and optimize the performance of your application. The diagnostic information is written to log files in the agent's "logs" directory, which can be viewed and analyzed using the AppDynamics diagnostic tool or other log analysis tools.

## Do I need to restart the agent for the DDM mode setting to take effect?

Yes, you will need to restart the AppDynamics agent for the DDM (Dynamic Debug Mode) mode setting to take effect.

When you modify the DDM settings in the agent configuration file, the changes will not be applied until the agent is restarted. This is because the AppDynamics agent reads the configuration file at startup and uses the settings to determine how to monitor the application.

To restart the AppDynamics agent, you can use the appropriate method for your system, such as restarting the service or process that runs the agent. Once the agent is restarted, it will read the updated configuration file and apply the new DDM settings, including any changes you made to the debug level or other parameters.

It's important to note that enabling DDM can increase the overhead of monitoring on your application, as it generates additional logging and diagnostic information. Therefore, it's generally recommended to use DDM only for short periods of time when troubleshooting specific issues, and to disable it once the issue has been resolved.