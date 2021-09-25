---
sidebar_position: 3
title: Inertial Navigation Systems
---

:::tip Key Points

- Inertial Navigation Systems (INS) derive atitude, velocities and positions in any frame of reference from : [[Navbook]](#1)
  - Three-dimentional acceleration readings (obtained using an accelerometer)
  - Three-dimentional angular velocity readings (obtained using a gyroscope).
- INS can provide : [[Collinson]](#2) [[Navbook]](#1)
  - Accurate position in whatever frame of coordinate needed
  - Groud speed and track angle
  - Euler angles (heading, pitch, roll) with high accuracy
- Moreover, some of the INS advantages are : [[Navbook]](#1) [[Collinson]](#2)
  - unjammable
  - self-contained
  - autonomous (no reliance on sattelite constellation for example)
However, high-accuracy Inertial Navigation Systems are expensive and heavy compared to Satellite Navigation Systems. [[Navbook]](#1)
:::

Imagine you are in a train at night and you would like to know :
- How fast the train is going ?
- Where are we positionned with respect to our station of origin ?
- Are the track slopped ?
- How much distance have we travelled ?

There is a way to answer all of those questions using only two devices : an accelerometer and a gyroscope. We will first look at ways to model accelerometers and gyroscope and then show how to answer some of the questions above.

### Accelerometer Model [[Navbook]](#1)

There are multiple ways to build accelerometers but all work on a common principle : a mass-spring system. Measuring the compression or stretching imposed by the inertia of the mass —also called *proof mass*— during an acceleration of the sensor's frame of reference can be used to determine the frame of reference's acceleration, should the system's properties be known with sufficient precision. 

Neglecting friction, we can model the measured force to be : [[Navbook]](#1)

$$\overrightarrow{f}=\frac{\overrightarrow{F}}{m}=\overrightarrow{a}^I - \overrightarrow{g}$$

Where : 
- $\overrightarrow{F}$ is the force measured by the accelerometer
- $m$ is the proof mass
- $\overrightarrow{f}$ is known as the specific force
- $\overrightarrow{a}^I$ is the acceleration with respect to the inertial frame of reference —also reffered to as inertial acceleration
- $\overrightarrow{g}$ is the acceleration of of the local gravity field

In order to implement an inertial navigation algorithm, we are interested in measuring $\overrightarrow{a}^I$. Unfortunately, as with any physically realisable sensor, the measurement of the specific force is corrupted, usually modelled as additive bias $\overrightarrow{b}$ [[Navbook]](#1).
We can thus rewrite the acceleration measured in a fictitious direction $\overrightarrow{e_m}$ as : [[Navbook]](#1) 

$$a_m = \overrightarrow{f} \cdot \overrightarrow{e_m} = (\overrightarrow{a}^I - \overrightarrow{g}) \cdot \overrightarrow{e_m} + \overrightarrow{b} \cdot \overrightarrow{e_m}$$

There is also a second type of measurement contamination : random-error, usually denoted $\nu$. [Navbook]](#1) 
We can write the specific force as a function of time as : 

$$f_{\textrm{meas}}(t)=a(t)+b(t)+\nu(t)$$

:::caution
A detailed error model is necessary in order to get accurate measurement from the accelerometer. Not knowing $b$ or the expected-value of $\nu$ of will lead to a $O(t^2)$ error in the position. Indeed, Collinson stated : "An accelerometer bias error of $10^{−3}$ g will produce a distance error of 0.45 km after 5 minutes and 1.8 km after 10 minutes, for example." [[Collinson]](#2). This leads to a need for costly, sometimes heavy, high performance equipment.
:::

### Gyroscope Model
*Under Construction.*
## References

<a id="1">[Navbook] </a> 
Dr. Luis Rodrigues, 
Fundamentals of avionics navigation systems, Unpublished, 2021.<br/><br/>

<!-- [[Navbook]](#1)  -->

<a id="2">[Collinson] </a> 
G., C. R. P. (2011). Introduction to avionics systems. Springer.<br/><br/>

<!-- [[Collinson]](#2) -->

<!-- 
<a id="3">[DGPS Wiki] </a> 
Wikimedia Foundation. (2021, September 2). Differential gps. Wikipedia. Retrieved September 22, 2021, from https://en.wikipedia.org/wiki/Differential_GPS.<br/><br/> -->

<!-- [[DGPS Wiki]](#3) -->

<!-- <a id="4">[CDGPS CCG] </a> 
Government of Canada, C. C. G. (2020, January 17). Government of Canada. Government of Canada, Canadian Coast Guard. Retrieved September 22, 2021, from https://www.ccg-gcc.gc.ca/publications/navigation/dgps/page01-eng.html. <br/><br/> -->

<!-- [[CDGPS CCG]](#4) -->
