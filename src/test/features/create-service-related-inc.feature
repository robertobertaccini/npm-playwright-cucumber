# create-service-related-inc.feature
Feature: Customer Incident Submission (Service related)
  As a customer
  I want to submit an incident case related to service
  So that I can get resolution for service problems

  @incident
  Scenario Outline: Submit service-related incident
    Given I am logged into the customer portal
    And I am on the home page
    When I click on Incident tile
    Then I should see the incident creation form
    When I select "Customer service issue" as the Incident Type
    And I select "<IncidentSubType>" as the Incident SubType
    And I fill in the service details:
      | What happened?       | Service representative was rude     |
      | Where did it happen? | Phone call                         |
      | When did it happen?  | 2025-01-23                         |
      | Channel             | Phone                               |
    And I complete the contact information form:
      | First Name          | Johnny                               |
      | Last Name           | Stecchino                                |
      | Email              | Johnny.Stecchino@example.com                |
      | Phone              | 1234567890                         |
      | City               | Warsaw                             |
      | Street             | Main Street                        |
      | Postal Code        | 00-001                             |
      | Country            | Poland                             |
    And I review and accept terms and conditions
    When I submit the incident
    Then I should see a confirmation message

    Examples:
    | IncidentSubType     |
    | Staff conduct issue |
    | Complaint not handled as requested |
    | Poor service - mistakes made or instructions not followed |
