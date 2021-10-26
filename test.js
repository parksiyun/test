const {Builder, By, Key, until} = require('selenium-webdriver');
// const {Builder,By,Key,until} = require('selenium-webdriver'); 
const webdriver = require('selenium-webdriver'); 
const chrome = require('selenium-webdriver/chrome'); 
// const chrome = require('selenium-webdriver/chrome');  
// chrome.setDefaultService(new chrome.ServiceBuilder('D:\chromedriver.exe').build());


(async function myFunction() {

    const driver = await new webdriver.Builder().forBrowser('chrome').build(); 
    //your code inside this block

    await driver.get('http://localhost:3500/tda/'); 
    driver.manage().window().maximize()
	await driver.manage().setTimeouts( { implicit: 10000 } );
			
	await driver.findElement(By.xpath('//*[@id="tda-trace-view"]')).click();
	
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-header/div/div[1]/button[1]')).click();
    const day = await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[2]/tda-dataset-config/div/div[1]/div/input')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[2]/tda-dataset-config/div/div[1]/div/input')).sendKeys('150');
	await driver.manage().setTimeouts( { implicit: 10000 } );
    // Equipment
    await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[2]/tda-dataset-config/div/div[3]/div[6]/div/nz-select/nz-select-top-control/nz-select-placeholder')).click();
    await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-1"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item[1]/div')).click();
    await driver.findElement(By.xpath('//*[@id="cdk-overlay-1"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item[4]/div[1]')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[2]/tda-dataset-config/div/div[3]/div[6]/div/nz-select/nz-select-top-control')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
    // Chamber
    await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[2]/tda-dataset-config/div/div[3]/div[7]/div/nz-select/nz-select-top-control/nz-select-placeholder')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-2"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item[1]/div')).click();
    await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[2]/tda-dataset-config/div/div[3]/div[7]/div/nz-select/nz-select-top-control')).click();
    // Recipe
    await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[2]/tda-dataset-config/div/div[3]/div[9]/button')).click();
	await driver.manage().setTimeouts( { implicit: 30000 } );
	await driver.findElement(By.xpath('//*[@id="ag-82-input"]')).click();
	await driver.manage().setTimeouts( { implicit: 30000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-3"]/div/ul/li/button')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nz-modal-container/div/div/div[3]/button[2]')).click();

    // Parameter
	await driver.manage().setTimeouts( { implicit: 30000 } );
	await driver.findElement(By.xpath('//*[@id="ag-241-input"]')).click();
	await driver.findElement(By.xpath('//*[@id="ag-237-input"]')).click();

	// Step
	await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-sider/div/tda-trace-view-condition-config/div[2]/div/form/nz-form-item/nz-form-control/div/div/input')).click();
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-sider/div/tda-trace-view-condition-config/div[2]/div/form/nz-form-item/nz-form-control/div/div/input')).sendKeys('1,2,3,4');

	// Filter
	await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-sider/div/tda-trace-view-condition-config/div[1]/h3/button')).click();
	// await driver.manage().setTimeouts( { implicit: 10000 } );
	// await driver.findElement(By.xpath('//*[@id="cdk-overlay-4"]/nz-modal-container/div/div/div[2]/tda-trace-view-context-filter/div/div[1]/nz-radio-group/label[2]/span[1]/input')).click();
	await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('//*[@id="ag-501-input"]')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-4"]/nz-modal-container/div/div/div[3]/button[2]')).click();

    // Run
    await driver.manage().setTimeouts( { implicit: 20000 } );
    await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-header/div/div[1]/button[2]')).click();

	// chart option
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[1]/div/div[1]/div/button[1]')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/div/div/label/span[1]/input')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/div/div/div[2]/input[1]')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/div/div/div[2]/input[1]')).clear();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/div/div/div[2]/input[1]')).sendKeys('-5');
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/div/div/div[3]/button[2]')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[1]/div/div[1]/div/button[1]')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/div/div/label/span[1]/input')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/div/div/div[3]/button[2]')).click();
	
	// Show Step Filter
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[1]/div/div[1]/div/button[3]')).click();
	await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-6"]/div/div/div[2]/div/div[2]/div/div[1]/div[2]/label/span[1]/input')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-6"]/div/div/div[2]/div/div[2]/div/div[2]/button')).click();

	// Trace Context List
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[1]/div/div[1]/div/button[4]')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="ag-664-input"]')).click();
	await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('/html/body/div/div[2]/div/nz-modal-container/div/div/div[3]/button[2]')).click();

	// View Data
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[1]/div/div[1]/div/button[5]')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/div/div[2]/div/nz-modal-container/div/div/div[3]/button[2]')).click();

	// show legend
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[1]/div/div[1]/div/button[2]')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/div/div[2]/div/div/div/ul/li/label/span[1]/input')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/div/div[2]/div/div/div/ul/li/label/span[1]/input')).click();
	// await driver.manage().setTimeouts( { implicit: 20000 } );
	// await driver.findElement(By.xpath('//*[@id="cdk-overlay-7"]/div/div/ul/li/label/span[1]/input')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	// await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[1]/div/div[1]/div/button[2]')).click();
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/div/div[1]')).click();
	// groupview
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/nz-tabs-nav/div/div/div[2]/div')).click();
	// await driver.findElement(By.xpath('')).click();

	// chamber to chamber
	// await driver.manage().setTimeouts( { implicit: 10000 } );
	// await driver.findElement(By.xpath('//*[@id="ag-487-input"]')).click();
	// await driver.findElement(By.xpath('//*[@id="ag-489-input"]')).click();
	// await driver.manage().setTimeouts( { implicit: 10000 } );
	// await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-summary/div/nz-layout/div[2]/nz-layout/nz-content/div/nz-tabset/div/div/div[2]/div/tda-summary-group-main/div[2]/div[1]/div[1]/dl/dd[7]/button')).click();
	// // expand
	// await driver.manage().setTimeouts( { implicit: 10000 } );
	// await driver.findElement(By.xpath('//*[@id="idx"]/div[1]/span/i')).click();
	// await driver.findElement(By.xpath('//*[@id="cdk-overlay-5"]/nz-modal-container/div/div/div[3]/button[2]')).click();
	
	// recipe to recipe
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[2]/div/tda-group-main/div[1]/div/button')).click();
	await driver.findElement(By.xpath('/html/body/div/div[2]/div/div/ul/li[2]')).click();
	await driver.findElement(By.xpath('//*[@id="ag-617-input"]')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[2]/div/tda-group-main/div[2]/div[1]/div[1]/dl/dd[7]/button')).click();
	// Step Filter
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[2]/div/tda-group-main/div[2]/div[2]/div/tda-group-recipe-chart/div[1]/div/button[2]')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/label/span[1]/input')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[2]/div/div[2]/div/div[2]/button')).click();
	// X Axis
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[2]/div/tda-group-main/div[2]/div[2]/div/tda-group-recipe-chart/div[2]/div/div[1]/div/span[1]/select')).click();
	await driver.manage().setTimeouts( { implicit: 20000 } );
	await driver.findElement(By.xpath('/html/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[2]/div/tda-group-main/div[2]/div[2]/div/tda-group-recipe-chart/div[2]/div/div[1]/div/span[1]/select/option[2]')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[2]/div/tda-group-main/div[2]/div[2]/div/tda-group-recipe-chart/div[2]/div/div[1]/div/span[1]/select')).click();
	// await driver.findElement(By.xpath('//*[@id="cdk-overlay-12"]/div/div/div[2]/div/div[2]/div/div[2]/button')).click();
	// show lengend
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('//*[@id="miApplication"]/body/tda-root/mia-home/mia-body/nz-spin/div/div/nz-tabset/div/div/div/mia-page-layer/div/tda-trace-view/div/div[2]/nz-layout/nz-content/tda-trace-view-main/div/nz-tabset/div/div/div[2]/div/tda-group-main/div[2]/div[2]/div/tda-group-recipe-chart/div[1]/div/button[1]')).click();
	await driver.findElement(By.xpath('//*[@id="cdk-overlay-12"]/div/div/ul/li/label/span[1]/input')).click();
	await driver.manage().setTimeouts( { implicit: 10000 } );
	await driver.findElement(By.xpath('/html/body/div/div[1]')).click();
    
	
	// setTimeout(async () => { 
    //     await driver.quit(); 
    //     process.exit(0); }
    //     , 3000); 

})();




  