package com.adlads.luma.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementStep {
    WebDriver driver;

    @Given("^user is on customer create account page$")
    public void userIsOnCustomerCreateAccountPage() {
        //Define Browser
        WebDriverManager.chromedriver().setup();
        //Define Chromedriver
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        // driver.manage().window().minimize();
        driver.get("https://magento2-demo.magebit.com/");
        driver.findElement(By.linkText("Create an Account")).click();


    }

    @When("^user enters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void userEnters(String FirstName, String LastName, String Email, String Password, String ConfirmPassword) throws Throwable {
        driver.findElement(By.id("firstname")).sendKeys(FirstName);
        driver.findElement(By.id("lastname")).sendKeys(LastName);
        driver.findElement(By.id("email_address")).sendKeys(Email);
        driver.findElement(By.id("password")).sendKeys(Password);
        driver.findElement(By.id("password-confirmation")).sendKeys(ConfirmPassword);
        Thread.sleep(5);

    }

    @And("^user clicks on create account button$")
    public void userClicksOnCreateAccountButton() {


        driver.findElement(By.xpath("//*[@id=\"form-validate\"]/div/div[1]/button/span")).click();
    }

    @Then("^customer account page is displayed$")
    public void customerAccountPageIsDisplayed() {

        String expectedResult = "My Account";
        String actualResult = driver.getTitle();
        Assert.assertEquals(expectedResult,actualResult);


    }

    @Then("^error message displayed$")
    public void errorMessageDisplayed() {
        String expectedResult = "Create New Customer Account";
        String actualResult = driver.getTitle();
        Assert.assertEquals(expectedResult,actualResult);
    }

    @Given("^user is on customer Sign in page$")
    public void userIsOnCustomerSignInPage() {
        WebDriverManager.chromedriver().setup();
        //Define Chromedriver
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        // driver.manage().window().minimize();
        driver.get("https://magento2-demo.magebit.com/");
        driver.findElement(By.linkText("Sign In")).click();
    }

        @When("^user enters \"([^\"]*)\" \"([^\"]*)\"$")
    public void userEnters(String Email, String Password) throws Throwable {
driver.findElement(By.id("email")).sendKeys(Email);
driver.findElement(By.id("pass")).sendKeys(Password);
    }

    @And("^user clicks on Sign in button$")
    public void userClicksOnSignInButton() {
        driver.findElement(By.id("send2")).click();
    }

    @Then("^my account page is displayed$")
    public void myAccountPageIsDisplayed() {
        String expectedResult = "Magento 2 Commerce (Enterprise) Demo - Magebit";
        String actualResult = driver.getTitle();
        Assert.assertEquals(expectedResult,actualResult);
    }
}