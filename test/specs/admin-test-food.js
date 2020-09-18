const elements = {
    phoneTextBox: '//input[contains(@placeholder, "Số điện thoại")]',
    passwordTextBox: '//input[contains(@placeholder, "Mật khẩu")]',
    loginButtonPage: '//button[contains(text(), "Đăng nhập")]',
    hometownAminText: '//a[contains(text(), "Hometown Admin")]',
    foodMenu: '//div/*[name()="svg"]/following-sibling::div[contains(text(),"Đồ ăn")]',
    imageLabel: '//thead/tr/th/div[contains(text(), "Hình ảnh")]',
    foodNameLabel: '//thead/tr/th/div[contains(text(), "Tên món")]',
    areaLabel: '//thead/tr/th/div[contains(text(), "Miền")]',
    priceLabel: '//thead/tr/th/div[contains(text(), "Giá")]',
    cookLabel: '//thead/tr/th/div[contains(text(), "Người nấu")]',
    descriptionLabel: '//thead/tr/th/div[contains(text(), "Mô tả")]',
    postDateLabel: '//thead/tr/th/div[contains(text(), "Ngày Đăng")]',
    ingredientLabel: '//thead/tr/th/div[contains(text(), "Nguyên liệu")]',
    actionLabel: '//thead/tr/th/div[contains(text(), "Action")]',
}

describe('D-staff food page', () => {
    it('should have the right title', async () => {
        await browser.url('https://hometown-flavor-admin.web.app/')
        await expect(browser).toHaveTitle('d-staff');
        await browser.pause(3000)
    })

    it('should login in d-staff page successfully', async () => {
        const phoneTextBox = await $(elements.phoneTextBox)
        await phoneTextBox.click()
        await phoneTextBox.keys('0364097912')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.click()
        await passwordTextBox.keys('0364097912')
        await browser.pause(3000)
        const loginButtonPage = await $(elements.loginButtonPage)
        await loginButtonPage.click()
        await browser.pause(6000) 

        const hometownAminText = await $(elements.hometownAminText)
        await expect(hometownAminText).toBeVisible()
        await browser.pause(6000)
    })

    it('it should display image, food name, area, price, cook, description, post date, ingredient, action in employee feature ', async () => {
        const foodMenu = await $(elements.foodMenu)
        await foodMenu.click()
        await browser.pause(3000)

        const imageLabel = await $(elements.imageLabel)
        await expect(imageLabel).toBeVisible()
        await browser.pause(3000)

        const foodNameLabel = await $(elements.foodNameLabel)
        await expect(foodNameLabel).toBeVisible()
        await browser.pause(3000)

        const areaLabel = await $(elements.areaLabel)
        await expect(areaLabel).toBeVisible()
        await browser.pause(3000)

        const priceLabel = await $(elements.priceLabel)
        await expect(priceLabel).toBeVisible()
        await browser.pause(3000)

        const cookLabel = await $(elements.cookLabel)
        await expect(cookLabel).toBeVisible()
        await browser.pause(3000)

        const descriptionLabel = await $(elements.descriptionLabel)
        await expect(descriptionLabel).toBeVisible()
        await browser.pause(3000)

        const postDateLabel = await $(elements.postDateLabel)
        await expect(postDateLabel).toBeVisible()
        await browser.pause(3000)

        const ingredientLabel = await $(elements.ingredientLabel)
        await expect(ingredientLabel).toBeVisible()
        await browser.pause(3000)

        const actionLabel = await $(elements.actionLabel)
        await expect(actionLabel).toBeVisible()
        await browser.pause(3000)
    })
})