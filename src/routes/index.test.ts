// import { render } from '@testing-library/svelte';
test("is jest working", () => {
    expect(5 + 5).toBe(10);
});
test("is playwright working", async () => {
    await page.goto("https://www.google.com/");
    await browser.close();
});

export {};
