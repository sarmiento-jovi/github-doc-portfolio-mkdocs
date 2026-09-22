# Visual Documentation

These samples demonstrate how complex technical information can be analyzed, structured, and translated into purposeful visualizations that clarify processes, system relationships, data structures, and technical workflows.

## What This Section Demonstrates

The diagram samples demonstrate experience in:

- Business process visualization
- Workflow and decision flows
- System architecture diagrams
- Data and entity relationships
- Integration and system interactions
- Technical process visualization
- Information hierarchy and visual organization
- Diagram design for technical documentation

## Diagram Samples

Each visualization is presented as a short case study to show not only the finished diagram, but also the reasoning behind it.

The sections provide context for the source material, define the communication problem and intended audience, explain the visualization and design decisions, and identify the references used to support the interpretation.

> **Note:** The diagrams presented in this portfolio are my own interpretations, created for documentation and demonstration purposes based on publicly available technical information. They are not official diagrams produced, endorsed, or approved by GitHub, Microsoft, OpenTelemetry, or their respective organizations.

<!-- Selected diagram samples are presented with supporting context explaining the purpose of the diagram, the information it communicates, and the design decisions used to represent the underlying process or system. -->

<!--
These are four different information problems, each requiring a different visualization strategy.

Diagram 1: activities move between participants
Diagram 2: components interact in a system
Diagram 3: entities relate in a data model
Diagram 4: documentation transforms and moves through a pipeline
-->

*Case Study Fields*

| Section                   | What it conveys                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------- |
| **Source & Context**      | What information or system was studied and where the visualization originated      |
| **Communication Problem** | What aspect of the information is difficult to understand or needs clarification   |
| **Audience**              | Who the visualization is intended to help                                          |
| **Design Decisions**      | Why a particular diagram type, scope, structure, and level of detail were selected |
| **Visualization**      | The resulting visual solution                                                      |
| **Source Material**       | The authoritative references used to understand and verify the subject             |

<div class="diagram-samples" markdown="1">

<!-- HTML headings keep repeated template subtopics out of the page TOC. -->

=== "Process Workflow"

    <h3>Source &amp; Context</h3>

    <p>This visualization is based on <strong>GitHub's documented pull request workflow</strong>. Pull requests provide a collaborative process for proposing, reviewing, discussing, validating, and merging changes before they become part of the target branch.</p>

    <h3>Visualization</h3>

    <img class="diagram-samples__image" src="../../assets/images/visual-documentation/process-workflow.png" alt="Cross-functional pull request workflow from branch creation through review, revisions, approval, and merge">
    *GitHub's Documented Pull Request Workflow*
    
    <h3>Communication Problem</h3>

    <p>The documented workflow involves activities performed by both the change author and the reviewer, together with the repository-level actions and checks.</p> 
    <p>The visualization is intended to make the sequence of activities, responsibilities, review outcomes, and feedback loop easier to understand.</p>

    <h3>Audience</h3>

    <p>New team members who understand the basic Git concepts but are unfamiliar with colloborative pull request workflows in GitHub.</p>

    <h3>Design Decisions</h3>

    <p>A <strong>Cross-Functional Flowchart</strong> is selected to show how activities move between the contributor, GitHub, and reviewer throughout the pull request process. The visualization shows who does what, and emphasizes <strong>activities, responsibilities, handoffs, and the primary review-and-revision cycle</strong>. 
        <ul>
          <li>Stacked pull requests</li>
          <li>Merge conflicts</li>
          <li>Auto-merge</li>
          <li>Branch protection configuration</li>
          <li>Repository-specific rules</li>
        </ul>
    </p>

    <h3>Source Material</h3>
    <p>The following are the links to the original public documentation/repository:
      <ul>
            <li>
              <a href="https://docs.github.com/en/pull-requests/get-started/about-pull-requests">
                GitHub - About pull requests
              </a>
            </li>
            <li>
              <a href="https://docs.github.com/en/pull-requests/concepts/giving-reviews">
                GitHub - Giving reviews
              </a>
            </li>
          </ul>
    </p>


=== "System Architecture"

    <h3>Source &amp; Context</h3>

    <p>This visualization is based on the <strong>OpenTelemetry Demonstration</strong>, a distributed microservice application designed to demonstrate OpenTelemetry instrumentation and observability in a production-like environment.</p>
    <p>The application contains services implemented in multiple programming languages that communicate using gRPC and HTTP.</p>

    <h3>Visualization</h3>

     <img class="diagram-samples__image" src="../../assets/images/visual-documentation/system-architecture.png" alt="OpenTelemetry instrumentation and observability demonstration">
    *OpenTelemetry Demonstration*
    
    <h3>Communication Problem</h3>

    The complete demo contains numerous application and observability components, making the architecture potentially difficult for a newcomer to interpret. The visualization provides a simplified overview of the major functional groups, key service relationships, and the connection between application services and observability infrastructure.

    <h3>Audience</h3>

    Developers and technical team members who are encountering the OpenTelemetry Demo architecture for the first time.

    <h3>Design Decisions</h3>

    <p>A <strong>Component Architecture Diagram</strong> is selected to show the major system components their functional groupings, and how do they interact.</p>
    <p>The visualization emphasizes system <strong>structure, component boundaries, and the relationships between major services</strong>. Related microservices are grouped into functional areas to support a high-level understanding of the architecture.</p> 
    <p>
      To maintain focus on the primary architecture, the visualization intentionally omits:
      <ul>
        <li>Detailed instrumentation configuration</li>
        <li>Feature-flag scenarios</li>
        <li>Testing components</li>
        <li>Lower-level service interactions</li>
        <li>Other implementation details not required to understand the primary architecture</li>
      </ul>
    </p>
    <h3>Source Material</h3>
    <p>The following are the links to the original public documentation/repository.
    <ul>
      <li>
        <a href="https://opentelemetry.io/docs/demo/architecture/">OpenTelemetry Demo - Architecture</a>        
      </li>
      <li>
        <a href="https://opentelemetry.io/docs/demo/services/">OpenTelemetry Demo - Services</a>        
      </li>
      <li>
        <a href="https://opentelemetry.io/docs/demo/requirements/architecture/">OpenTelemetry Demo - Architecture Requirements</a>        
      </li>
    </ul>

    </p>


=== "Entity-Relationship"

    <h3>Source &amp; Context</h3>

      This visualization is based on <strong>Microsoft's Northwind</strong> sample database. The exercise focuses on the portion of the schema supporting customers, orders, order details, products, and product classification rather than documenting the complete database.

     <h3>Visualization</h3>

     <img class="diagram-samples__image" src="../../assets/images/visual-documentation/entity-relationship-diagram.png" alt="Northwind Core Order Data Model">
    *Northwind Core Order Data Model*
  
    <h3>Communication Problem</h3>

    A complete database schema can contain more information than a reader needs when trying to understand a specific business domain. This visualization isolates the core entities involved in order processing and shows how customer orders connect to individual products and supporting product information.

    <h3>Audience</h3>

    Developers, technical analysts, and documentation professionals who need a high-level understanding of the Northwind order data model.

    <h3>Design Decisions</h3>

    <p>An <strong>Entity Relationship Diagram (ERD)</strong> is selected to show the entities relevant to the Northwind order-processing domain and how they relate to one another. The visualization emphasizes <strong>data structure and relationships through primary keys, foreign keys, representative attributes, and cardinality</strong>.</p>
     <p>
     To maintain focus on the selected domain, the visualization intentionally omits:
      <ul>
        <li>Entities outside the core order-processing scope</li>
        <li>Attributes that do not materially contribute to understanding the selected relationships</li>
        <li>Other database implementation details not required for a high-level understanding of the data model</li>
      </ul>
     </p>

    <h3>Source Material</h3>

    <p>The following are the links to the original public documentation/repository.
    <ul>
      <li>
        <a href="https://github.com/microsoft/sql-server-samples/tree/master/samples/databases/northwind-pubs">Microsoft SQL Server Samples - Northwind and pubs</a>        
      </li>
      <li>
        <a href="https://github.com/microsoft/sql-server-samples/blob/master/samples/databases/northwind-pubs/instnwnd.sql">Northwind database creation script</a>
      </li>
    </ul>
    </p>


=== "Technical Process"

    <h3>Source &amp; Context</h3>

    This visualization is based on GitHub's documented <strong>GitHub Actions and GitHub Pages workflow model</strong>. GitHub Actions can automate build and deployment processes in response to repository events, while GitHub Pages can publish static site output produced by a workflow.

    <h3>Visualization</h3>

    <img class="diagram-samples__image" src="../../assets/images/visual-documentation/technical-process.png" alt="GitHub Actions and GitHub Pages Workflow Model">
    *GitHub Actions and GitHub Pages Workflow Model*
  
    
    <h3>Communication Problem</h3>

    Documentation authors working with Docs-as-Code may understand that a repository change eventually appears on a published website without clearly understanding the automated stages between source content and deployment. The visualization explains that technical processing pipeline at a conceptual level.

    <h3>Audience</h3>

    Documentation specialists, technical writers, and new contributors learning a Docs-as-Code publishing workflow.

    <h3>Design Decisions</h3>

    <p>A <strong>Technical Process Flow</strong> was selected to show how documentation source is transformed and moved through an automated build and deployment pipeline. The visualization emphasizes the <strong>progression of documentation and generated artifacts</strong> through systems, processing stages, and changes in state, while the connections describe the <strong>actions and transformations</strong> that move the documentation toward the published site.</p>
    <p>To maintain focus on the primary build and deployment process, the visualization intentionally omits:
    <ul>
      <li>Detailed GitHub Actions workflow configuration</li>
      <li>Individual build commands and dependencies</li>
      <li>Authentication and permission configuration</li>
      <li>Error handling and failed deployment scenarios</li>
      <li>Other implementation details not required to understand the primary documentation pipeline</li>
    </ul>
    </p>

    <h3>Source Material</h3>

    <p>
      The folliwng links to the original public documentation/repository.
      <ul>
        <li>
          <a href="https://docs.github.com/en/actions/get-started/understand-github-actions">GitHub - Understanding GitHub Actions</a>
        </li>
        <li>
          <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages">GitHub - Using custom workflows with GitHub Pages</a>
        </li>
        <li>
          <a href="  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site">GitHub - Configuring a publishing source for GitHub Pages</a>        
        </li>
      </ul>
    </p>


</div>
