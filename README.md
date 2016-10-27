# Introduction

Our company operates in an exciting and fast-growing industry. This implies work under considerable time pressure and rapidly changing business requirements. The following exercise has been designed to mimic this type of environment. Therefore, the requirements are deliberately ambiguous and the time limit is capped at 3 hours.

You are *not* expected to complete all of the requirements within this time frame (including those yielding extra points). Instead, it's an opportunity to discuss the way you prioritize requirements and the trade-offs you have to make to meet the deadline. However, we do expect you to show off your engineering talents along the way :)

The exercise will be followed by a 30-minute debrief session via Skype. We will discuss issues, challenges and engineering decisions you have made while working on this task.

## Requirements

The task is to create a React-based component, that will allow the user to send a message. The basic form should include at least two elements:

- a recipient field
- a message body field

The recipient field should:

- allow arbitrary email addresses (for non-registered recipients)
- allow user names (for registered recipients) with *autocomplete* feature

Other requirements:

- the form should send a JSON request with `email` and `body` attributes to `http://example.org` endpoint
- user names along with their corresponding email addresses can be sourced from an Algolia index (application ID: `X4CZOFIPYI`, key: `c9d74d1b249831a64803caffb37a4e40`)
- there are no restriction on the use of 3rd party libraries
- you are *not* required to implement the backend for this component
- the result should be published in a publicly available GitHub repository

## Things to consider

- Prioritize quality over quantity. A well though-out feature is a lot better than a dozen half-baked, poorly implemented ideas.
- This task is assumed to take no more than a couple of hours. If you're well ahead of schedule, please consider some of the extra requirements listed below. In any case, *do not proceed* beyound the 3-hour deadline - that is the maximum alloted time frame for this task.

## Bonus points for

- deploy-ready project setup, including assets pre-processing, transpiling - if applicable
- validation for any of the input fields (including user notifications)
- support for keyboard controls
- user friendly component styles
- Redux-based data flow
- whatever else you deem important
