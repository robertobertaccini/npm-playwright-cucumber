import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('I am logged into the customer portal', async function () {
    await fixture.page.goto(process.env.TARGETURL);

    await expect(fixture.page.getByPlaceholder('User name')).toBeVisible();
    await fixture.page.getByPlaceholder('User name').fill('CustomerREF@SL');
    await fixture.page.getByPlaceholder('Password', { exact: true }).fill(process.env.PASSWORD);
    await fixture.page.getByRole('button', { name: 'Log in' }).click();
});

Given('I am on the home page', async function () {
  await expect(fixture.page.getByRole('button', { name: 'Incident', exact: true })).toBeVisible({ timeout: 10_000 });
});

 When('I click on Incident tile', async function () {
   await fixture.page.getByRole('button', { name: 'Incident', exact: true }).click();
 });

 Then('I should see the incident creation form', async function () {
   await expect(fixture.page.getByTestId('Incident Type:select:control')).toBeVisible({ timeout: 10_000 });
 });

 When('I select {string} as the Incident Type', async function (string) {
     await fixture.page.getByTestId('Incident Type:select:control').selectOption(string);
 });

 When('I select {string} as the Incident SubType', async function (string) {
   await expect(fixture.page.getByTestId('Incident Subtype:select:control')).toBeVisible({ timeout: 10_000 });
   await fixture.page.getByTestId('Incident Subtype:select:control').selectOption(string);
   await fixture.page.getByRole('button', { name: 'Next' }).click();
 });

 When('I fill in the service details:', async function (dataTable) {
   await expect(fixture.page.getByTestId('Communication channel used:select:control')).toBeVisible({ timeout: 10_000 });
   await fixture.page.getByTestId('Communication channel used:select:control').selectOption('E-mail');
   await fixture.page.getByRole('button', { name: 'Next' }).click();
 });

 When('I complete the contact information form:', async function (dataTable) {
   await expect(fixture.page.getByTestId('First Name:input:control')).toBeVisible({ timeout: 10_000 });
   await fixture.page.getByTestId('First Name:input:control').fill('Roberto');
   await fixture.page.locator('label').filter({ hasText: 'Manually' }).locator('div').click();
   await fixture.page.getByRole('button', { name: 'Next' }).click();
 });

 When('I review and accept terms and conditions', async function () {
   await fixture.page.locator('label').filter({ hasText: 'I agree to Terms and Conditions' }).locator('div').click();
   await fixture.page.locator('label').filter({ hasText: 'I agree with Privacy Policy' }).locator('div').click();
 });

 When('I submit the incident', async function () {
      await fixture.page.getByRole('button', { name: 'Submit' }).click();
 });

 Then('I should see a confirmation message', async function () {
   await expect(fixture.page.getByLabel('Stage Dispatch, Current')).toBeVisible({ timeout: 10_000 });
 });
