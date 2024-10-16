# My Design Document (Title)
* **Author**: [Halil Cetiner](https://cetiner.medium.com)
* **Reference** (if any): Epic, ticket, issue, or task tracker reference link
* **Implementation/POC** (if applicable):
  [Code changes link]()

## Introduction

A short summary of the problem and the proposed solution

### Background

An introduction of the historical context of the problem that would be needed to understand the document.
How problem affects product and company goals, how this proposal stands in the product roadmap also worth mentioning in this section.

### Out of Scope

Product or technical requirements which are not included in the document.

### Terminology

Feel free to add terms and/or abbreviation which might not be known by the readers.

## Proposal

A brief summary of the solution with some high-level specifications which will be explained in detail in the following sections.


### Data Model

Describe how the data is stored, what should be changed in the existing data.
This section might include schema definitions, diagrams and data validation methods.

### API/Interface Changes

Describe how different components communicate with each other. This can include REST endpoints, RPC events, Kafka messages etc.
Some pseudocode, diagram or a simple flowchart could be quite helpful here.

Explaining error states and failure scenarios, conditions leading to those scenarios etc could also be good here.

### System Design

If the design proposed in the document consists multiple components, listing those components here and explaining their role in the solution is necessary.
A diagram could explain a lot more than words in this section.

### Rationale

It's nice to answer some questions such as:
- How will the solution scale?
- What is the test plan? Wow the tests will make sure requirements are met?
- What is the expected traffic on this new service?
- What is the release plan?
- How will it recover in the event of a failure?
- How will it cope with future requirements?
- ...
- Is there any migration needed? If so what is the strategy?

## Further Considerations

### Impact

Describe the potential impacts of the design on the work of other people and to the system including security, performance, etc.

### Risk

Include calculated and possible risks.
- What risks are being undertaken with this solution?
- Is there any unknowns?
- Should we do more research?
- ...

### Alternatives

If there are any alternative solutions thought, discussed however rejected for some reason, list them here with well-explained reasons.

## Delivery

Describe the effort and complexity of delivering the proposed solution. It's good to use tshirt sizes or time ranges to have more measurable information.

## Security Considerations

Does the proposal require specific security review? What are the potential threats? How will they be mitigated?

## Open Questions

List the questions if you think worth discussing with the reviewers or just you couldn't find an answer to them.
