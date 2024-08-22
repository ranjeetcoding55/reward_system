![image](https://github.com/user-attachments/assets/8cd4c708-14cd-4eb1-9f77-9298e5242f8c)



## Assignment
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.

(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

## How to run the ReactJS Application ?

1. Open the Downloaded file in the VS Code

2. Run the command

   npm install

3. This will install the needed dependencies required to run the ReactJS Application

4. After installing all the required node modules run the below command

   npm start

5. This will start running the ReactJS application in localhost

6. You can run all the test cases using the below command

   npm test

7. This will start running all the tests

## Features

+ Calculate Reward points earned for each customer per month and total
+ Show data based on latest consecutive N month period of time
+ Transaction data can be with in the same year or spans different years
+ Data is grouped based on years if it spans different years
+ Multiple transactions within the month are sumed up together
+ Rounded up rewards
+ Loading screen and Error handling is implemented
+ Test cases for all of the above scenarios are added
+ Transaction data is logged

Image1:- **Running screenshot of Retailer  Reward Program**
![image](https://github.com/user-attachments/assets/409317c3-7fc0-49d9-940e-856053ad8ace)


Image2:  **Loading text appearing on screen**
![image](https://github.com/user-attachments/assets/121c545d-2c50-480f-8832-f99783f4da15)



Image3: **Showing error message on screen while there is something wrong in data fetching.incorrect API end point**

![image](https://github.com/user-attachments/assets/c036742d-e89a-49c6-872e-4b8fdbf252f7)








## Test Case Documentaion
This section provides an overview of the test cases implemented for the reward system application, including usage instructions and logging details.

1. **Transaction Service**
   
  File: src/_test_/transactionService.test.js
  
  **Description:** Tests for the transactionService.js module, which handles fetching transaction data.
  **Test Cases:**
  
 + **should fetch transaction data correctly**
   + **Description:** Verifies that fetchTransactions correctly fetches and returns transaction data.
   + **Test Implementation:** Mocks the fetch function to return a predefined set of transaction data. Checks if the data is fetched and returned as expected.
 + **should handle fetch errors gracefully**
   + **Description:** Ensures that fetchTransactions handles errors appropriately.
   + **Test Implementation:** Mocks the fetch function to throw an error. Asserts that the function rejects with the correct error message.
 
 **How to Run Tests**

 

      npm test src/_test_/transactionService.test.js
   
2. **Total Rewards Table**
   
   File: src/_test_/TotalRewardsTable.test.js
   
  **Description:** Tests for the TotalRewardsTable component, which displays the total rewards data in a table format.

  **Test Cases:**

  + **should render total rewards correctly**
    + **Description:** Checks if the TotalRewardsTable component renders total rewards data as expected.
    + **Test Implementation:** Renders the TotalRewardsTable component with sample data and verifies that the data is displayed correctly in the table.
  + **should display no data message when total rewards are empty**
    + **Description:** Ensures that the component displays a "No total rewards data available" message when no rewards data is provided.
    + **Test Implementation:** Renders the TotalRewardsTable component with an empty array and checks if the appropriate message is displayed.

      **How to Run Tests:**
      
      
          npm test src/_test_/TotalRewardsTable.test.js
      
3. **User Monthly Rewards Table**
   
   File: src/_test_/UserMonthlyRewardsTable.test.js
   
    **Description:** Tests for the UserMonthlyRewardsTable component, which displays monthly rewards for users.
   
   **Test Cases:**

 + **should render user monthly rewards correctly**
    + **Description:** Verifies that the UserMonthlyRewardsTable component renders user monthly rewards data correctly.
    + **Test Implementation:** Renders the UserMonthlyRewardsTable component with sample rewards data and asserts that the data is displayed correctly in the table.
 + **should display no data message when rewards are empty**
    + **Description:** Ensures that the component displays a "No rewards data available" message when no rewards data is provided.
    + **Test Implementation:** Renders the UserMonthlyRewardsTable component with an empty array and checks if the appropriate message is displayed.

         **How to Run Tests:**

          npm test src/_test_/UserMonthlyRewardsTable.test.js

## Usage
**To use the tests:**

1. **Ensure Dependencies Are Installed:**
Make sure all necessary dependencies for testing are installed. Run:
 npm install
2. **Run Tests Individually:**
Use the npm test command followed by the path to a specific test file to run tests for a particular module or component.

      For example:

   
         npm test src/_test_/transactionsService.test.js

4. **Run All Tests:**
To run all tests in the project, simply execute:
npm test

## Logging   
+ **Console Output:** 
                During testing, the console will output results, including passed and failed tests, as well as any warnings or errors encountered.
  
                  For example:


                    PASS src/_test_/transactionsService.test.js
                    ✔ should fetch transaction data correctly
                    ✔ should handle fetch errors gracefully



# Debugging Failures:
  If tests fail, check the console output for detailed error messages. Look for issues related to the expected and received values, as well as any warnings about invalid DOM nesting or prop types.
  
