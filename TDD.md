# An AI-Driven Trustworthiness Prediction System for Online, Text-Based Medical Content
* **Author**: Gary Maguire
* **Reference** (if any): Null
* **Implementation/POC** (if applicable): Null

## Introduction

In today’s digital age, individuals frequently turn to online sources for medical information, but the credibility of this content varies significantly across platforms. Users face challenges in determining the trustworthiness of information, especially when misinformation, biased reporting, and outdated research are common issues.

This project aims to develop an AI-driven system that evaluates the credibility of online, text-based medical content. Using a fine-tuned Transformer model like SciBERT and explainable AI (XAI) techniques such as LIME, the system will provide users with trustworthiness scores and explanations for its predictions. Delivered via a Chrome Extension with a React-based interface and FastAPI backend, this tool will help users make informed decisions about online medical information.

### Background

The widespread use of the internet for health-related inquiries began in the late 1990s with the rise of search engines and websites offering medical advice. Early platforms like WebMD and health-focused forums became popular sources for the public to seek information about symptoms, treatments, and medical conditions. However, the open nature of the web also led to the proliferation of unverified and potentially misleading medical content.

As internet usage grew, so did concerns over the accuracy and credibility of online medical information. In the early 2000s, efforts were made to establish guidelines for trustworthy health information. Institutions such as the Health on the Net Foundation (HON) created certification systems to identify reputable medical websites. However, these efforts faced limitations in scale and enforcement, especially as user-generated content exploded with the advent of social media and health forums.

The rapid growth of platforms like Facebook, Reddit, and YouTube in the mid-2000s introduced new challenges. These platforms enabled users to share personal experiences, often mixing anecdotal evidence with scientific information, making it difficult for laypersons to discern credible sources. Misinformation about vaccines, treatments, and diseases became more widespread, creating significant public health risks.

In response, the scientific community began exploring automated solutions to assess the credibility of online information. Early approaches relied on rule-based systems and keyword matching to filter out unreliable content, but these systems struggled with the complexity and nuance of medical language. The introduction of machine learning in the late 2010s brought advancements in natural language processing (NLP), enabling more sophisticated models to analyze text and context. Models like BERT and SciBERT, designed specifically for scientific literature, offered new opportunities to evaluate the trustworthiness of online medical content with greater accuracy.

At the same time, explainability in AI gained importance, particularly in domains like healthcare, where users needed to understand and trust the rationale behind AI-driven decisions. Explainable AI (XAI) techniques like LIME and SHAP emerged, enabling AI systems to provide transparent and interpretable predictions.

Despite these advances, no comprehensive tool had been widely adopted to assess the trustworthiness of medical information across diverse platforms in real-time. This gap, combined with the increasing volume of health misinformation, especially during events like the COVID-19 pandemic, underscored the need for a robust, explainable solution that could support users in evaluating medical information online.

This project seeks to address that gap by leveraging the latest AI and XAI technologies to create an accessible, real-time trustworthiness prediction system for online text-based medical content.

### Out of Scope

Product Requirements (Out of Scope):
Offline Functionality:

The system will not support offline access or predictions. It requires a continuous internet connection to function, as all data processing and model inference will occur on the backend server.
Non-Medical Content Analysis:

The system will only focus on evaluating text-based medical information. It will not assess the trustworthiness of non-medical information, such as general news, product reviews, or social media posts unrelated to healthcare.
Cross-Language Support:

The initial system will be designed for English-language content only. Multilingual support for other languages or cross-lingual analysis is outside the scope of this version.
Mobile App Development:

The project will focus exclusively on a Chrome Extension for desktop environments. No native mobile applications (iOS/Android) will be developed as part of this project.
User-Generated Content:

The system will not include features for users to submit their own medical content for evaluation. The Chrome Extension will only evaluate content from predefined online sources such as medical blogs, research repositories, and news sites.
Human-in-the-Loop Features:

Manual review or moderation by medical professionals to verify the AI’s predictions will not be integrated. All trustworthiness predictions will be made purely by the AI system without human intervention.
Personalized Health Recommendations:

The tool will not provide specific medical advice, treatment recommendations, or any form of personalized health guidance based on the evaluated content. The focus is strictly on credibility assessment, not on recommending actions.
Technical Requirements (Out of Scope):
Advanced Security Features (e.g., HIPAA Compliance):

While basic security protocols (encryption, secure APIs) will be implemented, the system is not intended to handle personal health information (PHI) or comply with strict regulations like HIPAA. The extension is purely for information trustworthiness assessment and does not store sensitive medical data.
Integration with External APIs or Health Systems:

The project will not include integration with external medical databases (e.g., hospital systems, electronic health records) or third-party APIs beyond the pre-defined PubMed data and Hugging Face datasets.
Model Training on Real-Time Data:

The AI model will be pre-trained on static datasets (such as PubMed Abstracts). Real-time updates to the training data or model retraining based on new incoming data (e.g., new medical studies published daily) are out of scope.
Support for Audio, Video, or Image Data:

The system will only handle text-based medical content. Analyzing multimedia content such as medical images, videos, or podcasts is not within the scope of this project.
Highly Customizable User Interfaces:

While the Chrome Extension will provide a user-friendly interface, deep customization options for users (e.g., theming, extensive layout modifications) will not be included. The focus will be on a standard UI with necessary functionalities.
AI Model Customization by End Users:

Users will not have the ability to modify or retrain the AI model on their own data. The AI system will be a black-box service from the user's perspective, with only the explainable AI features providing insights into the predictions.
Extensive Logging and Analytics Dashboards:

The system will log essential data for model performance monitoring and basic usage statistics, but it will not include detailed analytics dashboards or reporting tools for users or administrators.

### Terminology

Transformer Model:

A type of deep learning architecture primarily used for natural language processing (NLP) tasks. It leverages self-attention mechanisms to process and analyze sequences of text. Examples include BERT and SciBERT.
SciBERT:

A variant of BERT (Bidirectional Encoder Representations from Transformers) model, pre-trained on a large corpus of scientific literature, particularly biomedical and clinical text. It is well-suited for medical and research-related text analysis.
Explainable AI (XAI):

Techniques that make AI model decisions transparent and interpretable for users. It helps users understand why an AI system made a particular prediction, enhancing trust and accountability in the system.
LIME (Local Interpretable Model-Agnostic Explanations):

A popular explainable AI method that provides local explanations for predictions made by machine learning models by perturbing the input and observing changes in the output. LIME helps explain individual predictions in a way users can understand.
PubMed:

A free search engine accessing primarily the MEDLINE database of references and abstracts on life sciences and biomedical topics, maintained by the National Center for Biotechnology Information (NCBI).
Hugging Face Datasets:

A platform offering pre-trained models and datasets for natural language processing. The project uses a dataset of PubMed Abstracts, available through Hugging Face, for fine-tuning the model.
Chrome Extension:

A small software program that enhances the functionality of the Google Chrome browser. In this project, the extension will allow users to interact with the trustworthiness prediction system while browsing medical content online.
FastAPI:

A modern web framework for building APIs with Python. It is designed for high performance, handling requests quickly, and is used in this project to manage AI model inference and API requests from the Chrome Extension.
Model Inference:

The process of using a pre-trained machine learning model to make predictions on new, unseen data. In this context, the model inference refers to predicting the trustworthiness of online medical content.
MongoDB:

A NoSQL database that stores unstructured data, such as logs and user interactions. It’s used in this project for handling data that doesn’t fit neatly into tables (e.g., usage logs).
PostgreSQL:

A powerful, open-source relational database system used to manage structured data, ensuring the secure and consistent management of user information, predictions, and metadata.
Unstructured Data:

Data that does not follow a specific format or structure, such as logs, user comments, or content pulled from various online platforms. It is stored in databases like MongoDB.
Structured Data:

Organized data that follows a specific format, typically stored in relational databases like PostgreSQL. Examples include user IDs, timestamps, and prediction results.
XAI Techniques:

Explainable AI techniques like LIME that provide interpretable explanations of AI decisions, helping users understand why specific content was deemed trustworthy or untrustworthy.
Component-Based Design (React):

A design principle used in React applications where the user interface is broken down into reusable, self-contained components, making development and maintenance easier.

## Proposal

The front end of the project will be a Chrome Extension built using React, a popular JavaScript library for building user interfaces. React is an ideal choice for this project due to its component-based architecture, which allows for efficient development, code reuse, and scalability. The extension will provide users with a seamless experience while browsing medical content, integrating the trustworthiness assessment functionality in a non-intrusive and intuitive manner.

Key Components of the Front-End Solution
Chrome Extension Framework:

The Chrome Extension will allow the user to interact with the trustworthiness prediction system while browsing the web. It will inject the UI components directly into web pages displaying medical content, enabling real-time analysis and feedback without requiring users to leave their current browsing session.
React for Dynamic UI:

The user interface will be built using React to create a dynamic, responsive experience. React’s virtual DOM will ensure fast rendering and updates without slowing down the browser.
Component-Based Design: The UI will be modular, using reusable components such as:
Trustworthiness Score Widget: Displays a simple and clear visual representation of the trust score for the content being viewed (e.g., a score out of 100 or a color-coded bar).
Explanation Modal: Provides a detailed explanation of the AI's decision, using Explainable AI (XAI) techniques like LIME, so the user can see why specific content is rated as trustworthy or not.
Settings and Feedback: Allows users to adjust preferences (e.g., trust score thresholds) and submit feedback on system performance.
Content Evaluation Trigger: A button or action that triggers the system to analyze the webpage content (automatically or on demand).
UI/UX Considerations:

Non-Intrusive Design: The Chrome Extension will be lightweight and unobtrusive, displaying trustworthiness scores in a subtle way (e.g., a badge or small widget on the corner of the browser window).
Real-Time Feedback: As the user navigates across pages, the extension will provide real-time or on-demand trustworthiness scores without requiring page reloads, ensuring a smooth browsing experience.
Intuitive and Transparent: Users will have access to simple explanations for the scores, helping them understand the AI's decisions without technical jargon. This will build trust and engagement.
React Integration with Backend (FastAPI):

The React app will communicate with the backend (built using FastAPI) via RESTful API calls. When a user visits a medical content page and triggers an analysis, the front end will send a request to the FastAPI backend for:
Trustworthiness Analysis: Submitting the medical content (e.g., blog post, forum entry) for trust score prediction.
Explanations from XAI (LIME): Receiving explanations of why the content is considered trustworthy or not.
Responses from the API will be displayed in the UI in a user-friendly manner, updating the trust score and explanation widgets as soon as results are available.
State Management (React State/Redux):

For managing complex data across different UI components (e.g., maintaining user preferences, the results of trustworthiness evaluations), React State or Redux will be used. Redux will help keep the application state predictable and easy to debug, especially when handling asynchronous data fetching from the API.
Chrome Extension Manifest v3:

The Chrome Extension will be built in compliance with Manifest v3, the latest specification for Chrome Extensions. Key elements include:
Background Service Worker: A service worker will manage long-running background tasks, such as sending content to the backend for analysis and receiving results.
Content Script: This script will be injected into web pages to extract the text content for evaluation and display the UI components on the page.
Permissions: The extension will request minimal permissions to access page content, ensuring user privacy and security.
Error Handling and User Notifications:

The front end will include robust error handling for scenarios such as failed API calls, missing or incomplete content, or slow response times from the backend. User-friendly error messages will guide users through resolving issues or retrying evaluations.
Notifications will alert users when new results are available or if there’s an issue with fetching a trust score.
Performance Optimization:

The front-end React app will be optimized for performance by minimizing the use of resources such as DOM manipulation, using lazy loading for components, and optimizing API calls to reduce page load delays.

The back end of the project will be designed to efficiently handle requests from the front-end Chrome Extension, manage data storage, and perform AI-driven trustworthiness predictions. The system will leverage FastAPI for the web framework, MongoDB and PostgreSQL for data storage, and a pre-trained SciBERT model for credibility evaluation of medical content. This solution is scalable, secure, and designed for real-time interactions between the front end and the back end.

Key Components of the Back-End Solution
FastAPI Framework for API Handling:

FastAPI will serve as the core web framework to handle all HTTP requests from the Chrome Extension and communicate with the AI model. FastAPI is selected for its speed, asynchronous capabilities, and ease of integration with machine learning models.
Endpoints: Key API endpoints include:
Content Submission: Accepts text data from the Chrome Extension for credibility analysis.
Trustworthiness Score Retrieval: Sends the trust score and an explanation of the score (using Explainable AI techniques like LIME) back to the front end.
User Feedback: Receives user feedback about the accuracy or usability of the trustworthiness predictions.
Asynchronous Processing: FastAPI’s asynchronous capabilities will be leveraged to handle multiple requests concurrently, ensuring that even during high traffic, the system remains responsive.
AI/ML Model (SciBERT) for Trustworthiness Prediction:

A pre-trained SciBERT model will be fine-tuned on a dataset of scientific medical text (PubMed Abstracts). This model is designed to handle domain-specific text and will be responsible for analyzing online medical content to predict its credibility.
Model Inference Pipeline:
Input Processing: The submitted text will be preprocessed to extract relevant features (e.g., important phrases, entities) before being fed into the SciBERT model.
Prediction: The model will output a credibility score (e.g., on a scale from 0 to 100) indicating how trustworthy the content is based on its similarity to peer-reviewed, scientific literature.
Explainable AI (XAI) Integration:
LIME (Local Interpretable Model-Agnostic Explanations): LIME will be used to generate explanations for the AI’s predictions. It will provide insights into which parts of the text contributed to a high or low trustworthiness score. These explanations will be sent to the front end for user display.
Data Storage:

MongoDB (NoSQL Database):
MongoDB will store unstructured data, such as:
User Logs: User interactions with the extension (e.g., pages visited, content evaluated).
Feedback Data: Any feedback submitted by users on the AI’s predictions.
Session Data: Temporary session information, including user preferences and browsing history, if needed for specific cases like session-based analysis.
MongoDB is ideal for this because of its flexibility in handling varying data structures, particularly logs and user-generated content.
PostgreSQL (Relational Database):
PostgreSQL will handle structured data that requires relationships and consistency, such as:
User Profiles: Storing information like user IDs, preferences, and anonymized data related to how they interact with the system.
Prediction Results: Historical predictions and scores for auditing and analysis purposes.
PostgreSQL provides the necessary reliability and ACID compliance to handle structured, user-centric data.
Model Management and Inference Pipeline:

The pre-trained SciBERT model will be served in production using tools like TorchServe or TensorFlow Serving, which are designed for high-performance model inference in a live system.
Model Fine-Tuning: The SciBERT model will be fine-tuned on the PubMed Abstracts dataset using machine learning frameworks like PyTorch or TensorFlow, ensuring it is capable of evaluating medical content with high accuracy.
Batch Processing (Optional): If real-time processing is not required for every request, the system can queue requests and process them in batches to improve performance and reduce load during peak times.
Scalability and Load Management:

Docker and Containerization: The entire backend will be containerized using Docker, ensuring consistency across different environments and making it easier to scale horizontally when traffic increases.
Kubernetes (Optional): For larger deployments, Kubernetes can be used to orchestrate containers, manage scaling, and handle load balancing between API requests and model inference processes.
Asynchronous Task Queue (Celery or Redis): For handling time-consuming tasks, such as large content evaluations or LIME explanations, a task queue system like Celery or Redis Queue will be employed to offload these from the main API request flow. This ensures that requests don’t block the API and users get responses quickly.
Security Measures:

API Authentication and Authorization:
Secure API access will be enforced using OAuth 2.0 or JWT (JSON Web Tokens) for user authentication and ensuring only authorized users or extensions can make requests to the system.
Data Encryption:
All communications between the Chrome Extension, back end, and databases will use HTTPS and SSL/TLS encryption to protect sensitive data.
CORS (Cross-Origin Resource Sharing) Policies:
Proper CORS settings will be implemented to ensure that the Chrome Extension can securely communicate with the back end without exposing it to vulnerabilities from other websites.
Logging, Monitoring, and Error Handling:

Logging (ELK Stack): A logging system using Elasticsearch, Logstash, and Kibana (ELK Stack) will be set up to track API requests, error logs, and model performance. This will help in troubleshooting and improving the model over time.
Performance Monitoring (Prometheus + Grafana): Metrics from FastAPI, MongoDB, PostgreSQL, and the AI model will be collected and visualized using Prometheus and Grafana to monitor the health of the system and ensure it runs efficiently.
Error Handling: Graceful error handling mechanisms will ensure that the back end can manage failed API requests, timeouts, and database errors. Detailed error messages will be logged, and user-friendly messages will be sent to the front end.
Deployment and CI/CD:

CI/CD Pipeline (GitHub Actions / Jenkins): Continuous integration and deployment (CI/CD) will be automated using tools like GitHub Actions or Jenkins. This will enable automatic deployment of updates, ensuring the system can evolve without downtime.
Cloud Hosting (AWS / GCP): The back end will be hosted on a scalable cloud infrastructure such as Amazon Web Services (AWS) or Google Cloud Platform (GCP), making it easier to scale horizontally and ensure global availability of the service.


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
