describe('Main Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should type Hello World!', async () => {
    await expect(element(by.id('text-input'))).toBeVisible();
    await element(by.id('text-input')).typeText('Hello World!');
  });
});
