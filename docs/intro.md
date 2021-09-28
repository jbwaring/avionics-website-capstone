---
# sidebar_position: 1
title: RTCA/DO-254
---

RTCA DO-254 (also known as EUROCAE ED-80), Design Assurance Guidance for Airborne Electronic Hardware,1 was prepared jointly by RTCA Special Committee 180 and EUROCAE Working Group 46, and was subsequently published by RTCA and EUROCAE in April 2000. These industry working groups were formed in the 1990s and took seven years to create DO-254.

# Design Assurance Levels
DO-254 defines five levels for the design assurance of airborne electronic systems. These five design assurance levels are defined as levels A through E, where A is the most stringent and E is the least. These five levels correspond to the five classifica- tions of failure conditions defined in the regulatory materials that govern the certifi- cation of airborne systems and equipment.

|  						  							  								 Failure Classification  							 						 					  |  						  							  								 Hardware Design Assurance Level  							 						 					 |  						  							  								 Probability of Failure per Flight Hour  							 						 					 |  						  							  								 Hazard Description  							 						 					                                                                                                                                                                                                                  |
|-----------------------------------|-------------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  						  							  								 Catastrophic  							 						 					            |  						  							  								 Level A  							 						 					                         |  						  							  								 10–9  							 						 					                                   |  						  							  								 Prevents continued safe flight and landing.  							 						 					                                                                                                                                                                                         |
|  						  							  								 Hazardous/ Severe-Major  							 						 					 |  						  							  								 Level B  							 						 					                         |  						  							  								 10–7  							 						 					                                   |  						  							  								  									  										 Serious or fatal injuries to small number of occupants.  									  									  										 Reduces aircraft capabilities or crew’s ability to deal with adverse operating conditions.  									  									  										 Higher crew workload.  									  									  										 Large reduction in safety margins.  									 								 							 						 					 |
|  						  							  								 Major  							 						 					                   |  						  							  								 Level C  							 						 					                         |  						  							  								 10–5  							 						 					                                   |  						  							  								  									  										 Possible injuries to occupants.  									  									  										 Reduces aircraft capabilities or crew’s   										 ability to deal with adverse operating   										 conditions.  									  									  										 Increase in crew workload.  									  									  										 Significant reduction in safety margins.  									 								 							 						 					        |
|  						  							  								 Minor  							 						 					                   |  						  							  								 Level D  							 						 					                         |  						  							  								 10–3  							 						 					                                   |  						  							  								  									  										 Possible inconvenience to occupants.  									  									  										 Reduces aircraft capabilities or crew’s ability to deal with adverse operating   										 conditions.  									  									  										 Slight increase in crew workload.  									  									  										 Slight reduction in safety margins.  									 								 							 						 					    |
|  						  							  								 None  							 						 					                    |  						  							  								 Level E  							 						 					                         |  						  							  								 N/A  							 						 					                                    |  						  							  								 • No effect on operational capabilities. • No crew workload impact.  							 						 					                                                                                                                                                                 |

**It is worth noting that the inherent failure probability of semiconductor components is typically no better than 10–5 to 10–6. Or in other words, the inherent reliability limitations of semiconductor devices prevents the electronic hardware from achieving the failure probabilities required for level A or B systems, and therefore the development guidance in DO-254 will not by itself result in a design with the requisite level A or B reliability.** The requisite reliability, however, can be achieved at the system level through the architectural mitigation techniques described in SAE ARP47543 or SAE ARP4754A,4 even though the hardware itself is limited to the approximate failure rate for level C hardware.

# DO-254 AND DO-178B

DO-178B,5 Software Considerations in Airborne Systems and Equipment Certification, was published and adopted years before electronic hardware was required to comply with DO-254. DO-178B’s head start had two rather curious effects on electronic hardware development. 
So how do DO-254 and DO-178B (or DO-178C6) compare? And are the differ- ences all that significant? Since both documents provide guidance on development processes, there are bound to be significant similarities in their content and philoso- phy. In fact, from the high level perspective they are quite similar in their approaches and fundamental concepts. The similarities can be summarized as follows:
Introduction to RTCA/DO-254 5
• Their safety background and basis are the same.
• Both rely on process and design assurance.
• Both use life cycle phases to govern development.
• Both use the integral processes of process assurance (quality assurance for
software), configuration management, and verification.
• Verification is requirements-based.
• Both include tool qualification.
So in a broad sense the two documents are very similar. However, when examin- ing the details of their design assurance concepts and processes, a number of differ- ences emerge, some of them dramatic enough that trying to apply DO-178 concepts to hardware development will not result in the desired design assurance. The dif- ferences between DO-254 and DO-178 (and to some extent between hardware and software) are embedded in the details, and are listed in the table below :

|  						  							  								 Topic  							 						 					                             |  						  							  								 DO-254 Hardware  							 						 					                                                                                                                                                                     |  						  							  								 DO-178B/C Software  							 						 					                                                                                                                    |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
|  						  							  								 Environmental tests  							 						 					               |  						  							  								 Required  							 						 					                                                                                                                                                                            |  						  							  								 Not applicable  							 						 					                                                                                                                        |
|  						  							  								 Part wear out  							 						 					                     |  						  							  								 Need to consider  							 						 					                                                                                                                                                                    |  						  							  								 N/A  							 						 					                                                                                                                                   |
|  						  							  								 White box testing  							 						 					                 |  						  							  								 Test points and simulation  							 						 					                                                                                                                                                          |  						  							  								 Can perform with emulator and/or symbolic debugger  							 						 					                                                                                    |
|  						  							  								 Implementation  							 						 					                    |  						  							  								 Hardware and components  							 						 					                                                                                                                                                             |  						  							  								 Machine code within hardware components  							 						 					                                                                                               |
|  						  							  								 Debugging  							 						 					                         |  						  							  								 Device pin level  							 						 					                                                                                                                                                                    |  						  							  								 Assembler level  							 						 					                                                                                                                       |
|  						  							  								 Robustness testing  							 						 					                |  						  							  								 Optional or project dependent  							 						 					                                                                                                                                                       |  						  							  								 Required  							 						 					                                                                                                                              |
|  						  							  								 Object oriented considerations  							 						 					    |  						  							  								 Not applicable  							 						 					                                                                                                                                                                      |  						  							  								 Ada95, C++, Java  							 						 					                                                                                                                      |
|  						  							  								 Objectives for compliance  							 						 					         |  						  							  								 Defined in sections 4.1, 5.1.1, 5.2.1, 5.3.1, 5.4.1, 5.5.1, 6.1.1, 6.2.1, 7.1, 8.1  							 						 					                                                                                                  |  						  							  								 Annex A Tables  							 						 					                                                                                                                        |
|  						  							  								 Applicability  							 						 					                     |  						  							  								 LRU, CCA, PLD, any complex electronic hardware  							 						 					                                                                                                                                      |  						  							  								 Software only  							 						 					                                                                                                                         |
|  						  							  								 Tool qualification  							 						 					                |  						  							  								 Tool qualification not required for elemental analysis tools  							 						 					                                                                                                                        |  						  							  								 Tool qualification required for structural coverage analysis tools  							 						 					                                                                    |
|  						  							  								 Independence  							 						 					                      |  						  							  								 Broad brush stroke approach in Appendix A  							 						 					                                                                                                                                           |  						  							  								 Specific objectives depending on software level  							 						 					                                                                                       |
|  						  							  								 Simulation  							 						 					                        |  						  							  								 May need second independent simulation; difficult to use same test procedures in simulations and in-circuit hardware tests  							 						 					                                                          |  						  							  								 Easy to use the same test cases on simulation and on target hardware  							 						 					                                                                  |
|  						  							  								 Coverage analysis  							 						 					                 |  						  							  								 Elemental analysis not specific about coverage criteria definition  							 						 					                                                                                                                  |  						  							  								 Modified Condition/Decision Coverage defined for Level A Decision coverage defined for Level B Statement coverage defined for Level C  							 						 					 |
|  						  							  								 Verification  							 						 					                      |  						  							  								 Test coverage of requirements, coverage of elements for Levels A and B  							 						 					                                                                                                              |  						  							  								 Test coverage of high-level and low-level requirements, structural coverage and test coverage of data and control coupling  							 						 					            |
|  						  							  								 Definition of derived requirement  							 						 					 |  						  							  								 Design decision; may or may not have a parent requirement  							 						 					                                                                                                                           |  						  							  								 Glossary—almost the same as DO-254 Usage in Section 5—no parent requirement  							 						 					                                                           |
|  						  							  								 Simple  							 						 					                            |  						  							  								 Exhaustive input testing and reduced documentation allowed  							 						 					                                                                                                                          |  						  							  								 Not applicable  							 						 					                                                                                                                        |
|  						  							  								 Design approach  							 						 					                   |  						  							  								 For PLDs, hardware description language describes how the physical hardware in the PLD will be configured For other electronic hardware, graphical entry such as schematic diagrams  							 						 					 |  						  							  								 Procedural language that describes a sequence of steps  							 						 					                                                                                |
|  						  							  								 Processing  							 						 					                        |  						  							  								 For PLDs, parallel simultaneous implementation of hardware design language (HDL); functionality is implemented concurrently  							 						 					                                                         |  						  							  								 Instructions execute in sequence  							 						 					                                                                                                      |
|  						  							  								 Validation  							 						 					                        |  						  							  								 Derived requirements are validated to ensure they are correct and complete  							 						 					                                                                                                          |  						  							  								 Not in the scope of software— derived requirements must be justified but are not validated  							 						 					                                            |
|  						  							  								 Means of application  							 						 					              |  						  							  								 Written for Level C with additional measures for Levels A and B  							 						 					                                                                                                                     |  						  							  								 Written for Level A with reductions in objectives, activities, and artifacts for Levels B through D  							 						 					                                   |


OVERVIEW OF DO-254
The guidance in DO-254 covers a variety of topics including:
- Hardware standards
- Hardware design life cycle data
- Additional design assurance techniques for design assurance level (DAL)
A and B functions
- Previously developed hardware
- Tool assessment and qualification
- Use of commercial off-the-shelf (COTS) components
- Product service experience
- Hardware safety assessment
- Design assurance strategy, including consideration for DAL A and B functions
- Planning process
- Requirements capture
- Conceptual design
- Detailed design
- Implementation
- Production transition
- Validation process
- Verification process including tests and reviews
- Configuration management
- Process assurance
- Certification liaison and proposed means of compliance

DO-254 ties together several key aspects of equipment development and compli- ance issues that would be otherwise difficult to achieve for complex and/or highly integrated devices and/or systems. These aspects are:
- Use of design assurance in lieu of quantitative analysis of failures
- Use of requirements to capture the aspects of aircraft functions performed
by complex electronic hardware
- Use of review, analysis, and test to satisfy compliance to the FARs
through verification

:::tip
**What does it mean to me?**

### Establish a structured design process that meets the objectives defined in DO-254
- Well-defined phases with realistic entry and exit criteria
- Built-in peer reviews
- Do the front-end work (requirements, traceability, plans, analysis,
research, etc.) conscientiously and at the proper time
- Honor and observe the design process (do not ignore or bypass it, even
during a crisis)
### Learn how to write well-formed requirements
- Emphasize the use of functional requirements rather than design description (implementation) requirements
- Write them early
- Understand what a derived requirement is
- Learn how to document validation and traceability data as part of
requirements capture
### Establish high integrity validation and verification processes and methods, including:
- An independent peer review process for levels A and B
- Peer reviews of data and documents
- Requirement reviews to validate derived requirements
- Learn how to conduct requirements-based verification
- Learn how to write effective and optimized test cases
- Learn how to conduct robustness verification
- Simulations—functional and post-layout timing (or static timing analysis)
- Elemental analysis—code coverage
- Hardware test—in the actual flight hardware
- Acquire tools to support verification
### Establish a configuration management infrastructure, including:
- Problem reporting
- Document/datacontrol
- Document/data release
- Backups/archives
- Refresh of backup media
- Retention of data for life of use of the equipment
- Retention of tools and test equipment for life of use of the equipment
### Establish a component management process—be prepared for parts obsolescence
### Establish a process assurance role or department
- Perform audits, review
- Track deviations
- Audit transition criteria
### Be prepared for audits of off-shore or subcontracted work
- May need a sub-supplier management plan
- May need on-site stage of involvement (SOI) audits
- Close coordination with configuration management and control of data
- Close coordination with process assurance
- Technical oversight
### Interface with customer and/or airframer
- Establish and interpret requirements 
### Interface with certification authority
- FAA and/or designee
- SOI audits
### Organize vast amounts of data
### Write lots of documentation and reports 
### Cultural changes
- Use the CM system
- Use change control
- Comply with processes—no more informal engineering
- Transparency
- Accountability
### Learn new rules for component selection
- Settle for less than the leading edge technology
- Embrace more tried and true technology, tools, methods
- New is ok, but may require more verification or justification
:::
## References

:::caution
This document has not been designed for release and likely contains copyright infrigements.
:::

:::danger DO NOT DISTRIBUTE
**INTERNAL USE ONLY**
:::s