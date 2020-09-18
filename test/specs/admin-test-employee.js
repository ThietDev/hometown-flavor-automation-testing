const elements = {
    phoneTextBox: '//input[contains(@placeholder, "Số điện thoại")]',
    passwordTextBox: '//input[contains(@placeholder, "Mật khẩu")]',
    loginButtonPage: '//button[contains(text(), "Đăng nhập")]',
    hometownAminText: '//a[contains(text(), "Hometown Admin")]',
    employeeMenu: '//div/*[name()="svg"]/following-sibling::div[contains(text(),"Nhân viên")]',
    avatarLabel: '//thead/tr/th/div[contains(text(), "Avatar")]',
    phoneLabel: '//thead/tr/th/div[contains(text(), "Số điện thoại")]',
    roleLabel: '//thead/tr/th/div[contains(text(), "Phân quyền")]',
    employeeNameLabel: '//thead/tr/th/div[contains(text(), "Tên nhân viên")]',
    emailLabel: '//thead/tr/th/div[contains(text(), "Email")]',
    addressLabel: '//thead/tr/th/div[contains(text(), "Địa chỉ")]',
    actionLabel: '//thead/tr/th/div[contains(text(), "Action")]',
    nextPageButton: '//button[contains(@aria-label, "Go to next page")]',
    previousPageButton: '//button[contains(@aria-label, "Go to previous page")]',
    removeIcon: '//tr[1]/td[3][contains(text(), "user")]/following::td[4]/*[name()="svg"]'
}

describe('D-staff employee page', () => {
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

    it('should display avatar, phone, role, employee name, email, address, action in eployee feature ', async () => {
        const employeeMenu = await $(elements.employeeMenu)
        await employeeMenu.click()
        await browser.pause(3000)

        const avatarLabel = await $(elements.avatarLabel)
        await expect(avatarLabel).toBeVisible()
        await browser.pause(3000)

        const phoneLabel = await $(elements.phoneLabel)
        await expect(phoneLabel).toBeVisible()
        await browser.pause(3000)

        const employeeNameLabel = await $(elements.employeeNameLabel)
        await expect(employeeNameLabel).toBeVisible()
        await browser.pause(3000)

        const emailLabel = await $(elements.emailLabel)
        await expect(emailLabel).toBeVisible()
        await browser.pause(3000)

        const addressLabel = await $(elements.addressLabel)
        await expect(addressLabel).toBeVisible()
        await browser.pause(3000)

        const actionLabel = await $(elements.actionLabel)
        await expect(actionLabel).toBeVisible()
        await browser.pause(3000)
    })

    it('should remove user successfully', async () => {
        const removeIcon = await $(elements.removeIcon)
        await removeIcon.click()
        await browser.pause(6000)
    })

    it('should go to the next employee page successfully with valid count page', async () => {
        const nextPageButton = await $(elements.nextPageButton)
        await nextPageButton.scrollIntoView()
        await nextPageButton.click()
        await browser.pause(3000)
    })

    it('should go to the previous employee page successfully with valid count page', async () => {
        const previousPageButton = await $(elements.previousPageButton)
        await previousPageButton.scrollIntoView()
        await previousPageButton.click()
        await browser.pause(3000)
    })
})