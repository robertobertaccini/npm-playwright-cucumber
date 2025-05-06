import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('I am logged into the customer portal', async function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
});

Given('I am on the home page', async function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
});

 When('I click on Incident tile', async function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 Then('I should see the incident creation form', async function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 When('I select {string} as the Incident Type', async function (string) {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 When('I select {string} as the Incident SubType', async function (string) {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 When('I fill in the service details:', async function (dataTable) {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 When('I complete the contact information form:', async function (dataTable) {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 When('I review and accept terms and conditions', async function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 When('I submit the incident', async function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });

 Then('I should see a confirmation message', async function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
 });
