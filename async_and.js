class Waiter{
    async wait()
    {
        return await Promise.resolve(1);
    }
}

new Waiter().wait.then();