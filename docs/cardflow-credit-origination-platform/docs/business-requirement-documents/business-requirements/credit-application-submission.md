# Credit Application Submission

This subsection defines the requirements governing the creation and submission of credit card applications in the CardFlow Credit Origination Platform. The platform supports the following processes:

- Collection of applicant information
- Submission of supporting documentation
- Enforcement of submission rules before an application is routed for review

These requirements ensure that applications are submitted with complete and valid information while maintaining consistency and traceability throughout the credit origination process.

*Credit Application Submission*

No. | Business Requirement | Definition
--- | --- | --- 
BR-6.2-01 | Application Creation | The system shall allow authorized users to create a new credit card application in the platform.
BR-6.2-02 | Single Active Application Rule | The system shall enforce a rule that prevents the creation of multiple active credit applications for the same applicant.
BR-6.2-03 | Required Information Capture | The system shall require applicants to provide mandatory information necessary to evaluate the credit application prior to submission.
BR-6.2-04 | Supporting Document Upload | The system shall allow applicants to upload supporting documents required for credit evaluation.
BR-6.2-05 | Accepted File Formats | The system shall support predefined file formats for uploaded documents.
BR-6.2-06 | File Size Limitation | The system shall enforce file size limits for uploaded documents to ensure system performance and storage efficiency.
BR-6.2-07 | Application Validation | The system shall validate that all required information and documentation have been provided before an application can be submitted for review.
BR-6.2-08 | Application Submission | The system shall allow applicants or authorized tenant users to submit completed applications for review.
BR-6.2-09 | Submission Locking | The system shall prevent modification of an application once it has been submitted for review, unless it is returned for correction by an authorized reviewer.
BR-6.2-10 | Application Status Tracking | The system shall assign and maintain a status indicator to track the progress of the application throughout the review and approval process.