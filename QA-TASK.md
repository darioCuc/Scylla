# Test Plan for ScyllaDB Cloud Free Trial Serverless Cluster

## Objective

To ensure the ScyllaDB Cloud free trial serverless cluster setup and management processes are functional and user-friendly.

## Test Environment

- URL: [Scylla Cloud](https://cloud.scylladb.com/account/login)
- Requirements: Registered account for login.

## Test Cases

### TC1: User Login and Serverless Cluster Access

- **Steps**:
  - Log in at ScyllaDB Cloud.
  - Click "Serverless Free Trial" on the Home page.
- **Expected Result**:
  - Successful login.
  - Navigation to the serverless cluster setup page.

### TC2: Cluster Naming and Validation

- **Steps**:
  - Enter cluster name (eg. "Prince@Home").
  - Test various names, including those exceeding 30 characters, and with invalid start/end special characters.
- **Expected Result**:
  - Acceptance of the valid name (eg. "Prince@Home").
  - Error messages for names violating character limits or placement rules.

### TC3: Cloud Provider and Region Constraints

- **Steps**:
  - Observe AWS as preselected in Cloud Provider section.
  - Check Region dropdown for functionality.
- **Expected Result**:
  - AWS shown as the only available cloud provider.
  - Region dropdown disabled with "Currently limited to a single region" message and a preselected value (US East, N. Virginia).

### TC4: Free Trial Credit and Cluster Configuration

- **Steps**:
  - Verify the "96h credits left" message in the free trial section.
  - Interact with "Processing Units" and "Cluster Hours" seek bars.
  - Observe changes in "Storage" and "Cost Per Hour" sections.
- **Expected Result**:
  - Correct display of remaining trial credits.
  - Dynamic response in Storage and Cost as per the seek bar adjustments.

### TC5: Cluster Creation Process and Monitoring

- **Steps**:
  - Adjust configurations and click "Create Cluster".
  - Monitor progress bar and messages (Bootstrapping, Starting Nodes).
- **Expected Result**:
  - Successful progression through cluster creation stages.
  - Accurate status updates (e.g., % Bootstrapping, Starting Nodes, etc.).
  - Successful completion with all nodes started.

### TC6: Post-Creation Overview and Management

- **Steps**:
  - Review cluster creation success message and details.
  - Access "My Cluster", verify the presence of cluster (eg."Prince@Home") with details.
- **Expected Result**:
  - Accurate display of cluster details and successful creation message.
  - Functional management options and accurate data in "My Cluster".

### TC7: Detailed Cluster Management

- **Steps**:
  - Navigate to "My Cluster".
  - Explore cluster details and available actions.
- **Expected Result**:
  - Newly created cluster visible with accurate details.
  - Management options (e.g., Monitoring, Actions) are functional.

## Additional Notes

- The plan reflects the observed functionalities and limitations of the current ScyllaDB Cloud platform.
