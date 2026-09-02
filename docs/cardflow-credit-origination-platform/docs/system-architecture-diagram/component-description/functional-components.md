# Functional Components

The **CardFlow Credit Origination Platform** is composed of multiple functional components that collectively support the end-to-end credit origination lifecycle across credit application, amendment, and reinstatement workflows.

*Functional Components*
Functional Component | Description
--- | ---
**Presentation Layer** | Provides web-based interfaces for applicants, tenant users, reviewers, approvers, and administrators to interact with the platform.
**Security and Access Control** | Enforces authentication, authorization, role-based access control, and tenant isolation mechanisms.
**Workflow Engine** | Manages workflow orchestration, lifecycle transitions, routing logic, and workflow state progression.
**Validation Engine** | Performs mandatory field validation, eligibility checks, document validation, and business rule enforcement.
**Approval Routing** | Determines reviewer and approver routing based on configurable workflow and approval rules.
**Document Service** | Handles document upload, retrieval, association, and storage for workflow requests and applications.
**Audit and Logging (Reporting)** | Records workflow actions, status changes, approval decisions, validation events, and system activities for traceability purposes.<br><br>Supports operational reporting, application tracking, audit visibility, and workflow monitoring.
**Notification Component** | Generates and delivers workflow-triggered notifications through configured communication channels.
**Integration Service** | Facilitates communication with external systems and third-party services such as authentication providers, notification services, and external APIs.