const elements = {
    phoneTextBox: '//input[contains(@placeholder, "Số điện thoại")]',
    passwordTextBox: '//input[contains(@placeholder, "Mật khẩu")]',
    loginButtonPage: '//button[contains(text(), "Đăng nhập")]',
    hometownAminText: '//a[contains(text(), "Hometown Admin")]',
    errPhoneMessage: '//div[contains(text(), "Vui lòng nhập số điện thoại")]',
    errPasswordMessage: '//div[contains(text(), "Vui lòng thêm mật khẩu")]',
    errAccountMessage: '//div[contains(text(), "Tên đăng nhập hoặc mật khẩu không chính xác")]',
    adminName: '//a/span',
    logoutButton: '//a/span/following::ul/li/a'
}

describe('D-staff login page', () => {
    it('should have the right title', async () => {
        await browser.url('https://hometown-flavor-admin.web.app/')
        await expect(browser).toHaveTitle('d-staff');
        await browser.pause(3000)
    })

    it('should verify that login in d-staff page unsuccessfully with wrong phone', async () => {
        const phoneTextBox = await $(elements.phoneTextBox)
        await phoneTextBox.click()
        await phoneTextBox.keys('0379871827')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.click()
        await passwordTextBox.keys('0364097912')
        await browser.pause(3000)
        const loginButton = await $(elements.loginButtonPage)
        await loginButton.click()
        await browser.pause(6000) 

        const errAccountMessage = await $(elements.errAccountMessage)
        await expect(errAccountMessage).toBeVisible()
        browser.pause(6000)
    })

    it('should verify that login in d-staff page unsuccessfully with wrong password', async () => {
        const phoneTextBox = await $(elements.phoneTextBox)
        await phoneTextBox.clearValue()
        await phoneTextBox.click()
        await phoneTextBox.keys('0379871827')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.clearValue()
        await passwordTextBox.click()
        await passwordTextBox.keys('0364097913')
        await browser.pause(3000)
        const loginButton = await $(elements.loginButtonPage)
        await loginButton.click()
        await browser.pause(3000) 

        const errAccountMessage = await $(elements.errAccountMessage)
        await expect(errAccountMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify that login in d-staff page unsuccessfully with blank phone', async () => {
        const phoneTextBox = await $(elements.phoneTextBox)
        await phoneTextBox.clearValue()
        await phoneTextBox.click()
        await phoneTextBox.keys('')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.clearValue()
        await passwordTextBox.click()
        await passwordTextBox.keys('')
        await browser.pause(3000)
        const loginButton = await $(elements.loginButtonPage)
        await loginButton.click()
        await browser.pause(3000) 

        const errPhoneMessage = await $(elements.errPhoneMessage)
        await expect(errPhoneMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify that login in d-staff page unsuccessfully with blank password', async () => {
        const phoneTextBox = await $(elements.phoneTextBox)
        await phoneTextBox.clearValue()
        await phoneTextBox.click()
        await phoneTextBox.keys('1234567890')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.clearValue()
        await passwordTextBox.click()
        await passwordTextBox.keys('')
        await browser.pause(3000)
        const loginButton = await $(elements.loginButtonPage)
        await loginButton.click()
        await browser.pause(3000) 

        const errPasswordMessage = await $(elements.errPasswordMessage)
        await expect(errPasswordMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should login in d-staff page successfully', async () => {
        const phoneTextBox = await $(elements.phoneTextBox)
        await phoneTextBox.clearValue()
        await phoneTextBox.click()
        await phoneTextBox.keys('0364097912')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.clearValue()
        await passwordTextBox.click()
        await passwordTextBox.keys('0364097912')
        await browser.pause(3000)
        const loginButtonPage = await $(elements.loginButtonPage)
        await loginButtonPage.click()
        await browser.pause(3000) 

        const hometownAminText = await $(elements.hometownAminText)
        await expect(hometownAminText).toBeVisible()
        await browser.pause(3000)
    })

    it('should log out d-staff page successfully', async () => {
        const adminName = await $(elements.adminName)
        await adminName.click()
        await browser.pause(6000)

        const logoutButton = await $(elements.logoutButton)
        await logoutButton.click()
        await browser.pause(6000)

        const loginButtonPage = await $(elements.loginButtonPage)
        await expect(loginButtonPage).toBeVisible()
        browser.pause(3000)
    })
})