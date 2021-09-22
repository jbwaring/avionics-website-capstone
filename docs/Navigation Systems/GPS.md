---
sidebar_position: 2
title: Satellite Navigation Systems
---


:::tip Key Points

- Satellite Navigations Systems such as the American GPS are a ubiquitous way to locate a user on the Earth to the meter range.
- Differential Global Positioning System adds ground stations to increase the accuracy to the centimeter range.

:::

Current satellite navigation systems include the Global Positioning System GPS (American), GLONASS (Russian), Galileu (European), and BeiDou (Chinese). [[Navbook]](#1)

### GPS Pseudoranges

A GPS receiver can compute the position of the user using the time of arrival (TA) of the signal. The signal broadcasted by GPS Satellites contains a time-stamp, which enables the receiver to deduce the transit time following :

$$\Delta t^k = t^k_{rc}-t^k_{tr}=\frac{d^k_{u}}{v_g}$$ 

Where : [[Navbook]](#1)
- $\Delta t^k$ is the transit time from a sattelite $k$
- $t^k_{rc}$ is the date of receival
- $t^k_{tr}$ is the date of transmission
- $d^k_{u}$ is the distance between a sattelite $k$ and the user $u$.
- $v_g$ is the group velocity.

Therefore, a rough estimate of the distance between the user and a sattelite is : 

$$\hat{d^k_{u}} = \Delta t^k \hat{v_g}$$

However, this estimate is insufficient to attain reasonable accuracy in practice. In order to produce a better estimate of the position, one must include the following considerations : 
- The signal does not travel at the speed of light in a vacuum moreover, 
    - it is slowed by the troposphere
    - slowed by the ionosphere
- There is an infinite number of paths between the satellite and the user
- The time of transmission is recorded by an atomic clock with a bias and random error

Taking into account the aforementioned contaminations, the average URE (User Range Error) in April 2021 was less than 0.642m, 95% of the time. [[GPS.com]](#2)

:::note

User Range Error (URE) is not the same as User Accuracy. User Accuracy "depends on a combination of satellite geometry, URE, and local factors such as signal blockage, atmospheric conditions, and receiver design features/quality." [[GPS.com]](#2)

:::

### Differential Global Positioning System

One way to improve the location accuracy of GPS is to use Differential Global Positioning System (DGPS).
Using a network of ground stations with known positions, DGPS technology can improve the location accuracy to the centimeter range in the best cases. [[DGPS Wiki]](#3)

CDGPS (Canadian Differential Global Positioning System) is a free Differential Global Positioning System service maintained by the Canadian Coat Guard. [[CDGPS CCG]](#4)
However, this network only covers major maritime ways, the Great Lakes, and Canadian coastal waters.


## References

<a id="1">[Navbook] </a> 
Dr. Luis Rodrigues, 
Fundamentals of avionics navigation systems, Unpublished, 2021.<br/><br/>

<!-- [[Navbook]](#1)  -->

<a id="2">[GPS.com] </a> 
gps.gov. GPS.gov: GPS Accuracy. (n.d.). Retrieved September 21, 2021, from https://www.gps.gov/systems/gps/performance/accuracy/.<br/><br/>

<!-- [[GPS.com]](#2) -->


<a id="3">[DGPS Wiki] </a> 
Wikimedia Foundation. (2021, September 2). Differential gps. Wikipedia. Retrieved September 22, 2021, from https://en.wikipedia.org/wiki/Differential_GPS.<br/><br/>

<!-- [[DGPS Wiki]](#3) -->

<a id="4">[CDGPS CCG] </a> 
Government of Canada, C. C. G. (2020, January 17). Government of Canada. Government of Canada, Canadian Coast Guard. Retrieved September 22, 2021, from https://www.ccg-gcc.gc.ca/publications/navigation/dgps/page01-eng.html. <br/><br/>

<!-- [[CDGPS CCG]](#4) -->


