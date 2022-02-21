/**
 * 
 */


const { WebElement, Actions } = require("selenium-webdriver");
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example1(){
 
       var searchString = "Automation testing with Selenium";
 
       let driver = await new Builder().forBrowser("chrome").build();
 
       await driver.get("https://demoqa.com/automation-practice-form");
        console.log('Title is:',await driver.getTitle());
        await driver.findElement(By.id("firstName")).sendKeys("ABCDEF");
        await driver.findElement(By.id("lastName")).sendKeys("ABCDEF");
        await driver.findElement(By.id("userEmail")).sendKeys("abc@xyz.com");
        await driver.findElement(By.id("gender-radio-1")).sendKeys(searchString, Key.DOWN);
        await driver.findElement(By.id("userNumber")).sendKeys("9345623230");
        await driver.findElement(By.xpath("//input[@id='dateOfBirthInput']")).sendKeys("20 Feb 1999");
        await driver.findElement(By.id("currentAddress")).sendKeys("abc Street, cde Province, df3 j39, CANADA");
        await driver.findElement(By.xpath("//button[@id='submit']"));
        await driver.quit();
}
example1()
