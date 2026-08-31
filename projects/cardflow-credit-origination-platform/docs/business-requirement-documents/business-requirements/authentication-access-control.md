# Authentication and Access Control
This subsection defines the requirements governing how users access the **CardFlow Credit Origination Platform** and how permissions are managed within the system:

- Authentication Mechanisms ensure that only authorized users can access the
platform
- Access Control rules determine the actions each user role is permitted to perform
within the credit origination workflow.

The platform supports secure authentication for both external applicants and internal tenant users, while enforcing role-based access control to protect sensitive financial and personal information associated with credit applications.

*Authentication and Access Control*

No. | Business Requirement | Definition
---|---|---
BR-6.1-01 | Applicant Access | The system shall allow applicants to access the platform using registered credentials to initiate and manage credit card applications.
BR-6.1-02 | Tenant User Authentication | The system shall allow tenant users to securely authenticate in order to access operational functions associated with credit application review, approval, and administration.
BR-6.1-03 | Role-Based Access Control | The system shall enforce role-based access control to ensure that users can only perform actions permitted by their assigned role.
BR-6.1-04 | Session Management | The system shall maintain authenticated user sessions and automatically terminate inactive sessions after a defined period of inactivity.
BR-6.1-05 | Access Restriction for Unauthorized Users | The system shall prevent unauthorized users from accessing application data, administrative functions, or workflow activities.
BR-6.1-06 | Administrative User Management | The system shall allow authorized administrators to manage user accounts, assign roles, and configure user permissions within the tenant environment.