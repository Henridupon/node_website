# Introduction to the Maven build cycle

Unlike many other people my first project was using a dependency manager called Gradle. Today Gradle has become quite popular in the developer community but is far less known that Maven. After starting a project at the Rabobank where Maven was the preferred dependency manager of choice I decided to see what the maven dependency lifecycle phases exactly do and what Maven has to offer.

Maven is a software project management  tool which is works with a Project Object Model (POM). It is used for building and distributing artifacts which could be used by other projects. Maven has few options/cycles that can be used for these purposes and these combined are called the Maven lifecycle. In total there are 7 main cycles; validate, compile, test, package, verify, install, deploy.

* Validate = validates if all the necessary information is available to build the project. For Maven to validate anything these validation steps should be specified by the user. 
* Compile = Compiles the code, so it will translate the code written in the specific source language into computer executable code.
* Test = The compiled code will be tested with a suitable unit testing framework.
* Package = The compiled code will be packaged in a distributable format, war or jar.
* Verify = This will execute checks on integration test results that will ensure the quality of the code.
* Install = Maven is installed on a specific location on your computer. When executing install this will copy the artifact to the local repository inside the maven destination so other projects can use this artifact locally. 
* Deploy = When a remote repository is configured, this step will copy the artifact to this repository so it can be used by other projects.\n

Other alternative dependency managers are Apache Ant, bazel. Maybe in the future we can look into what these dependency manager programs have to offer.

