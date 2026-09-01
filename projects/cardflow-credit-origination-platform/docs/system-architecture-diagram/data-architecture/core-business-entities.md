# Core Business Entities
This subsection identifies the core business entities managed by the **CardFlow Credit Origination Platform** and provides a high-level description of the primary data objects that support workflow processing, document handling, audit tracking, user management, and tenant-specific configuration.

*Core Business Entities*
Entity | Description
--- | ---
**Applicant** | Represents the customer or individual associated with a credit application, amendment, or reinstatement request.
**Credit Application**| Represents the main credit request submitted for validation, review, routing, and approval.
**Workflow Instance** | Represents the lifecycle record of a request as it moves through workflow stages and states.
**Document** | Represents uploaded supporting files linked to an application or request.
**User** | Represents platform users such as applicants, tenant users, reviewers, approvers, and administrators.
**Audit Record** | Represents logged user actions, system events, status changes, and approval decisions.
**Tenant Configuration** | Represents tenant-specific settings such as roles, approval rules, workflow configuration, and required document lists.
**Notification Record** | Represents system-generated notification events triggered by workflow actions or status changes.