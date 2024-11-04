# An AI-Driven Trustworthiness Prediction System for Online, Text-Based Medical Content
* **Author**: Gary Maguire
* **Implementation/POC**: Null

## Introduction

In today’s digital age, individuals frequently turn to online sources for medical information, but the credibility of this content varies significantly across platforms. Users face challenges in determining the trustworthiness of information, especially when misinformation, biased reporting, and outdated research are common issues.

This project aims to develop an AI-driven system that evaluates the credibility of online, text-based medical content. Using a fine-tuned Transformer model and explainable AI (XAI) techniques such as LIME, the system will provide users with trustworthiness scores and explanations for its predictions. Delivered via a Chrome Extension with a React-based interface and FastAPI backend, this tool will help users make informed decisions about online medical information.

### Background

Internet-based health inquiries began in the late 1990s, driven by search engines and websites like WebMD, which became popular for information on symptoms, treatments, and conditions. However, this open access also led to a rise in unverified medical content. Concerns over accuracy prompted initiatives in the early 2000s, such as the Health on the Net Foundation's certification for trustworthy sites. Yet, the rapid growth of social media in the mid-2000s, with platforms like Facebook and YouTube, further complicated the credibility of health information.

The scientific community responded by developing automated tools for evaluating online content. Early rule-based systems lacked nuance, but advancements in machine learning in the late 2010s improved text analysis. Models like BERT and SciBERT helped assess medical information more accurately, while explainable AI techniques, such as LIME and SHAP, provided transparency in AI-driven decisions.

### Out of Scope

### Product Requirements (Out of Scope):
***Offline Functionality***:

The system will not support offline access or predictions. It requires a continuous internet connection to function, as all data processing and model inference will occur on the backend server.

***Non-Medical Content Analysis***:

The system will only focus on evaluating text-based medical information. It will not assess the trustworthiness of non-medical information, such as general news, product reviews, or social media posts unrelated to healthcare.

***Cross-Language Support***:

The initial system will be designed for English-language content only. Multilingual support for other languages or cross-lingual analysis is outside the scope of this version.

***Mobile App Development***:

The project will focus exclusively on a Chrome Extension for desktop environments. No native mobile applications (iOS/Android) will be developed as part of this project.

***User-Generated Content***:

The system will not include features for users to submit their own medical content for evaluation. The Chrome Extension will only evaluate content from predefined online sources such as medical blogs, research repositories, and news sites.

***Human-in-the-Loop Features***:

Manual review or moderation by medical professionals to verify the AI’s predictions will not be integrated. All trustworthiness predictions will be made purely by the AI system without human intervention.

***Personalized Health Recommendations***:

The tool will not provide specific medical advice, treatment recommendations, or any form of personalized health guidance based on the evaluated content. The focus is strictly on credibility assessment, not on recommending actions.

### Technical Requirements (Out of Scope)***:
***Advanced Security Features (e.g., HIPAA Compliance)***:

While basic security protocols (encryption, secure APIs) will be implemented, the system is not intended to handle personal health information (PHI) or comply with strict regulations like HIPAA. The extension is purely for information trustworthiness assessment and does not store sensitive medical data.

***Integration with External APIs or Health Systems***:

The project will not include integration with external medical databases (e.g., hospital systems, electronic health records) or third-party APIs beyond the pre-defined PubMed data and Hugging Face datasets.

***Model Training on Real-Time Data***:

The AI model will be pre-trained on static datasets (such as PubMed Abstracts). Real-time updates to the training data or model retraining based on new incoming data (e.g., new medical studies published daily) are out of scope.

***Support for Audio, Video, or Image Data***:

The system will only handle text-based medical content. Analyzing multimedia content such as medical images, videos, or podcasts is not within the scope of this project.

***Highly Customizable User Interfaces***:

While the Chrome Extension will provide a user-friendly interface, deep customization options for users (e.g., theming, extensive layout modifications) will not be included. The focus will be on a standard UI with necessary functionalities.

***AI Model Customization by End Users***:

Users will not have the ability to modify or retrain the AI model on their own data. The AI system will be a black-box service from the user's perspective, with only the explainable AI features providing insights into the predictions.

***Extensive Logging and Analytics Dashboards***:

The system will log essential data for model performance monitoring and basic usage statistics, but it will not include detailed analytics dashboards or reporting tools for users or administrators.

### Terminology

***Transformer Model***: A deep learning architecture for NLP tasks using self-attention to process text sequences, with popular models like BERT and SciBERT.

***SciBERT***: A BERT variant pre-trained on scientific and biomedical literature, ideal for medical text analysis.

***Explainable AI (XAI)***: Methods that make AI decisions understandable, building trust in model predictions.

***LIME***: An XAI method providing local explanations by testing input variations to clarify individual predictions.

***PubMed***: A free database for life sciences and biomedical research abstracts, managed by NCBI.

***Hugging Face Datasets***: A resource for pre-trained NLP models and datasets, including PubMed Abstracts for model fine-tuning.

***Chrome Extension***: A software add-on enhancing Google Chrome, enabling user interaction with the trustworthiness system for medical content.

***FastAPI***: A Python framework for building high-performance APIs, used to handle model inference and requests.

***Model Inference***: Using a pre-trained model to predict trustworthiness on new data.

***MongoDB***: A NoSQL database for unstructured data, like logs and interactions.

***PostgreSQL***: A relational database for structured data management, used for user data and predictions.

***Unstructured Data***: Data without a fixed format, stored in MongoDB.

***Structured Data***: Organized data stored in relational databases like PostgreSQL.

***XAI Techniques***: Methods like LIME that provide understandable explanations for AI predictions.

***Component-Based Design (React)***: A UI design approach in React, breaking the interface into reusable parts for easier maintenance.

## Proposal

The project’s front end will be a Chrome Extension built with React for efficient, modular UI. This extension will integrate trustworthiness assessments directly into medical content pages, providing users with real-time trust scores and explanations via widgets, modals, and other interactive components. Key features include:

***Trustworthiness Score Display***: A clear, color-coded score for content credibility.
***Explanation Modal***: Uses Explainable AI (XAI) to show why content is rated as it is.
***Settings and Feedback***: Users can adjust trust score preferences and provide feedback.

***The front end*** connects to a FastAPI backend that manages data storage, handles trustworthiness predictions, and uses a fine-tuned model to evaluate content. FastAPI’s async capabilities ensure responsiveness, while RESTful APIs facilitate communication with React. MongoDB stores user logs and feedback, while PostgreSQL manages structured data like user profiles, predictions etc.

***The back end*** model, served via TorchServe and accessed from fastapi, analyzes text credibility. LIME explanations clarify AI predictions, enhancing transparency. Security is enforced through JWT authentication, data encryption, and CORS policies.

Deployment on AWS or GCP, with CI/CD via GitHub Actions, ensures scalable, accessible service.

### Data Model

<p align="center">
<img src="/fyp_content/fyp_data_model (1).webp" alt="Data Model" style="height: 700px; width:1000px;"/>
</p>

## System Design

### Main Components

Frontend (React)

Description: Handles user interaction, displaying predictions, and collecting feedback.

Components:

User Interface (UI): Manages user registration, login, prediction submission, and feedback input.

API Client: Sends HTTP requests to the backend for authentication, prediction, and feedback submission.

Interactions:
Communicates with FastAPI using HTTP requests for all backend operations (authentication, prediction, feedback).

Backend (FastAPI)

Description: Manages all core application logic, handles API requests, coordinates with TorchServe for predictions, and interacts with databases.

Components:

Authentication Controller: Manages user registration, login, and JWT token issuance.

Prediction Controller: Receives content or URLs from users and requests prediction results from TorchServe.

Feedback Controller: Accepts feedback from users and stores it in PostgreSQL.

Audit Logging Service: Records significant application events in MongoDB.

Database Manager: Interfaces with PostgreSQL and MongoDB to perform CRUD operations.

Interactions:

Communicates with React using HTTP responses to serve data (e.g., predictions, feedback).
Sends prediction requests to TorchServe over HTTP.
Interacts with PostgreSQL for structured data management (e.g., users, predictions, feedback).
Interacts with MongoDB for logging events.

Model Serving (TorchServe)

Description: Hosts and serves the machine learning model for predictions.

Components:

Prediction API: Accepts requests from FastAPI and returns model predictions, including trustworthiness scores and explanations.

Interactions:

Receives requests from FastAPI for model inference.
Returns prediction results to FastAPI, including the trustworthiness score and model explanation.
Databases

PostgreSQL (Structured Data):

Description: Stores structured application data (Users, Predictions, Feedback).

Tables:

Users: Stores user account details.
Predictions: Stores prediction results.
Feedback: Stores feedback provided by users.

Interactions:

Receives queries from FastAPI for storing and retrieving user data, predictions, and feedback.

MongoDB (Unstructured Data - AuditLog):

Description: Stores unstructured data, specifically the audit log for system events.

Collections:

AuditLog: Stores log entries for various system events (e.g., prediction errors, feedback submissions).
Interactions:
Receives log data from FastAPI for tracking system events.

Frontend (React)
Place React on the left side as the entry point for user interaction.
Indicate HTTP connections between React and FastAPI.
Backend (FastAPI)

Place FastAPI in the center as the core application logic.
Connect FastAPI to each of the databases (PostgreSQL and MongoDB) and TorchServe.
Model Serving (TorchServe)

Place TorchServe on the right side of FastAPI.
Show an HTTP connection from FastAPI to TorchServe for prediction requests.
Databases (PostgreSQL and MongoDB)

Place PostgreSQL and MongoDB at the bottom of FastAPI.
Connect FastAPI to each database component for data persistence.


###TODO

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
